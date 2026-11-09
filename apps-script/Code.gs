/**
 * Cartas para Saray · almacén en Google Sheets + Google Drive
 *
 * - La web pública solo recibe las cartas (y sus fotos, vídeos y canciones) de HOY y de días anteriores.
 * - La página oculta /escribir/ lee y guarda todas, con la clave.
 * - Cada carta tiene su hora de publicación: a esa hora se desbloquea y se avisa a Saray por correo.
 *
 * Instrucciones de instalación: README.md del repositorio.
 */
const CLAVE = 'CAMBIA-ESTA-CLAVE';   // ← la clave que compartiréis entre las amigas
const INICIO = '2026-11-08';          // primer día con carta
const FIESTA = '2026-11-14';          // el gran día
const TZ = 'Europe/Madrid';
const CARPETA = 'Cartas para Saray (archivos)';
const MAX_MB = 20;

const COLS = ['fecha', 'titulo', 'texto', 'firma', 'por', 'actualizado', 'foto', 'video', 'musica', 'publicar', 'avisado', 'canal'];
const CANALES = ['correo', 'whatsapp', 'ambos'];
const HORA_DEFECTO = '09:00';
const TIPOS = ['foto', 'video', 'musica'];

/* ============================ LECTURA ============================ */
function doGet(e) {
  const p = (e && e.parameter) || {};
  const accion = p.accion || 'publicas';
  const hoy = hoy_();

  if (accion === 'publicas') {
    const todas = leerCartas_(), notas = {}, ahora = hhmm_();
    let proxima = null;
    Object.keys(todas).forEach(f => {
      const c = todas[f];
      if (!c.texto) return;
      if (publicada_(f, c)) notas[f] = [c.titulo, c.texto, c.firma, medios_(c)];
      else if (f === hoy) proxima = { fecha: f, hora: c.publicar || HORA_DEFECTO };
    });
    const cfg = leerConfig_();
    return json_({ ok: true, hoy, ahora, hora: cfg.hora || '', fondo: cfg.fondo ? publico_(JSON.parse(cfg.fondo)) : null, notas, proxima });
  }

  if (accion === 'todas') {
    if (p.clave !== CLAVE) return json_({ ok: false, error: 'clave' });
    const cfg = leerConfig_();
    return json_({ ok: true, hoy, hora: cfg.hora || '', email: cfg.email_saray || '', web: cfg.web_url || '',
      tel: cfg.tel_saray || '', emailOrga: cfg.email_orga || '', enlace: enlaceSaray_(cfg),
      avisoActivo: hayAviso_(), fondo: cfg.fondo ? JSON.parse(cfg.fondo) : null, cartas: leerCartas_(), opiniones: leerOpiniones_() });
  }

  if (accion === 'archivo') {
    const tipo = p.tipo, fecha = p.fecha;
    let meta = null;
    if (fecha === 'fondo') { const f = leerConfig_().fondo; meta = f ? JSON.parse(f) : null; }
    else {
      if (TIPOS.indexOf(tipo) < 0) return json_({ ok: false, error: 'tipo' });
      const c = leerCartas_()[fecha];
      if (p.clave !== CLAVE && !(c && publicada_(fecha, c))) return json_({ ok: false, error: 'todavia-no' });
      meta = c && c[tipo];
    }
    if (!meta) return json_({ ok: false, error: 'no-existe' });
    const blob = DriveApp.getFileById(meta.id).getBlob();
    return json_({ ok: true, mime: meta.mime, nombre: meta.nombre, data: Utilities.base64Encode(blob.getBytes()) });
  }
  return json_({ ok: false, error: 'accion' });
}

/* ============================ ESCRITURA ============================ */
function doPost(e) {
  let d; try { d = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'formato' }); }
  if (d.clave !== CLAVE) return json_({ ok: false, error: 'clave' });
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    switch (d.accion) {
      case 'guardar': {
        if (!esFecha_(d.fecha)) return json_({ ok: false, error: 'fecha' });
        const fila = filaDe_(d.fecha), h = hoja_('Cartas'), ahora = ahora_();
        h.getRange(fila, 1, 1, 6).setValues([[d.fecha, cut_(d.titulo, 80), cut_(d.texto, 700), cut_(d.firma, 60), cut_(d.por, 40), ahora]]);
        const pub = /^\d{2}:\d{2}$/.test(d.publicar || '') ? d.publicar : HORA_DEFECTO;
        const colPub = COLS.indexOf('publicar') + 1, colAv = COLS.indexOf('avisado') + 1;
        if (h.getRange(fila, colPub).getValue() !== pub) h.getRange(fila, colAv).setValue('');   // nueva hora: se volverá a avisar
        h.getRange(fila, colPub).setValue(pub);
        h.getRange(fila, COLS.indexOf('canal') + 1).setValue(CANALES.indexOf(d.canal) >= 0 ? d.canal : 'correo');
        return json_({ ok: true, actualizado: ahora });
      }
      case 'subir': {
        if (d.fecha !== 'fondo' && (!esFecha_(d.fecha) || TIPOS.indexOf(d.tipo) < 0)) return json_({ ok: false, error: 'destino' });
        const bytes = Utilities.base64Decode(d.data || '');
        if (bytes.length > MAX_MB * 1024 * 1024) return json_({ ok: false, error: 'grande' });
        const file = carpeta_().createFile(Utilities.newBlob(bytes, d.mime || 'application/octet-stream', cut_(d.nombre, 120) || 'archivo'));
        const meta = { id: file.getId(), mime: d.mime || '', nombre: cut_(d.nombre, 120), tam: bytes.length };
        if (d.fecha === 'fondo') { borrar_(leerConfig_().fondo); ponerConfig_('fondo', JSON.stringify(meta)); }
        else {
          const fila = filaDe_(d.fecha), col = COLS.indexOf(d.tipo) + 1, h = hoja_('Cartas');
          borrar_(h.getRange(fila, col).getValue());
          h.getRange(fila, col).setValue(JSON.stringify(meta));
          h.getRange(fila, 1).setValue(d.fecha); h.getRange(fila, 5, 1, 2).setValues([[cut_(d.por, 40), ahora_()]]);
        }
        return json_({ ok: true, meta });
      }
      case 'quitar': {
        if (d.fecha === 'fondo') { borrar_(leerConfig_().fondo); ponerConfig_('fondo', ''); return json_({ ok: true }); }
        if (!esFecha_(d.fecha) || TIPOS.indexOf(d.tipo) < 0) return json_({ ok: false, error: 'destino' });
        const fila = filaDe_(d.fecha), col = COLS.indexOf(d.tipo) + 1, h = hoja_('Cartas');
        borrar_(h.getRange(fila, col).getValue()); h.getRange(fila, col).setValue('');
        return json_({ ok: true });
      }
      case 'opinion': {
        if (!esFecha_(d.fecha)) return json_({ ok: false, error: 'fecha' });
        const h = hoja_('Opiniones'), v = h.getDataRange().getValues(), quien = cut_(d.por, 40) || 'Anónima';
        let fila = -1;
        for (let i = 1; i < v.length; i++) if (fecha_(v[i][0]) === d.fecha && s_(v[i][1]) === quien) { fila = i + 1; break; }
        if (fila < 0) { h.appendRow(['']); fila = h.getLastRow(); }
        h.getRange(fila, 1, 1, 5).setValues([[d.fecha, quien, d.voto === 'cambiar' ? 'cambiar' : 'bien', cut_(d.comentario, 400), ahora_()]]);
        return json_({ ok: true });
      }
      case 'ajustes': {
        if ('hora' in d) ponerConfig_('hora', cut_(d.hora, 5));
        if ('email' in d) ponerConfig_('email_saray', cut_(d.email, 120));
        if ('web' in d) ponerConfig_('web_url', cut_(d.web, 300));
        if ('tel' in d) ponerConfig_('tel_saray', String(d.tel || '').replace(/[^\d]/g, '').slice(0, 15));
        if ('emailOrga' in d) ponerConfig_('email_orga', cut_(d.emailOrga, 120));
        if ('enlace' in d) ponerConfig_('enlace_saray', cut_(d.enlace, 300));
        return json_({ ok: true });
      }
      case 'probarAviso': {
        enviarCorreo_(d.para || leerConfig_().email_saray, hoy_(), true);
        return json_({ ok: true });
      }
    }
    return json_({ ok: false, error: 'accion' });
  } finally { lock.releaseLock(); }
}

/* ============================ AVISO DIARIO ============================ */
/** Ejecuta esta función UNA VEZ desde el editor de Apps Script para activar los avisos.
 *  Revisa cada 10 minutos si alguna carta ha llegado a su hora de publicación y avisa a Saray por correo. */
function instalarAviso() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'revisarAvisos').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('revisarAvisos').timeBased().everyMinutes(10).create();
}
function revisarAvisos() {
  const cfg = leerConfig_();
  const hoy = hoy_(), c = leerCartas_()[hoy];
  if (!c || !c.texto || !publicada_(hoy, c) || c.avisado === hoy) return;
  const lock = LockService.getScriptLock(); if (!lock.tryLock(5000)) return;
  try {
    const canal = c.canal || 'correo';
    if ((canal === 'correo' || canal === 'ambos') && cfg.email_saray) enviarCorreo_(cfg.email_saray, hoy, false);
    if ((canal === 'whatsapp' || canal === 'ambos') && cfg.email_orga) enviarRecordatorioWhats_(cfg, hoy, c);
    hoja_('Cartas').getRange(filaDe_(hoy), COLS.indexOf('avisado') + 1).setValue(hoy);
  } finally { lock.releaseLock(); }
}
/* WhatsApp no permite envíos automáticos gratis: avisamos a la organizadora con un botón que abre
   WhatsApp con el mensaje para Saray ya escrito. Solo tiene que pulsar enviar. */
function textoWhats_(cfg, fecha) {
  const enlace = enlaceSaray_(cfg);
  return (fecha === FIESTA ? 'Saray, hoy es el día. Abre tu última carta: ' : 'Saray, tienes una carta nueva. Ábrela aquí: ') + enlace;
}
function enviarRecordatorioWhats_(cfg, fecha, c) {
  const wa = 'https://wa.me/' + (cfg.tel_saray || '') + '?text=' + encodeURIComponent(textoWhats_(cfg, fecha));
  const html = `
  <div style="background:#2b0a1a;padding:32px 16px;font-family:Georgia,serif">
    <div style="max-width:460px;margin:0 auto;background:#f7eee2;border-radius:6px;padding:32px 28px;text-align:center;border:1px solid #d9b98a">
      <div style="color:#a63a5a;font-style:italic">Es la hora</div>
      <div style="color:#4a0f27;font-size:24px;font-weight:bold;margin:8px 0 14px">Envíale a Saray la carta de hoy</div>
      <div style="color:#3a0c20;font-size:15px;line-height:1.5;margin-bottom:22px">«${c.titulo || 'Carta de hoy'}» ya está publicada. Pulsa el botón: se abrirá WhatsApp con el mensaje escrito.</div>
      <a href="${wa}" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;font-weight:bold;padding:13px 26px;border-radius:999px">Enviar por WhatsApp</a>
    </div>
  </div>`;
  MailApp.sendEmail({ to: cfg.email_orga, subject: 'Envía a Saray la carta de hoy por WhatsApp', htmlBody: html, name: 'Cartas para Saray', body: wa });
}
function enlaceSaray_(cfg) {
  if (cfg.enlace_saray) return cfg.enlace_saray;
  return cfg.web_url ? cfg.web_url.split('#')[0] + '#c=' + Utilities.base64EncodeWebSafe(ScriptApp.getService().getUrl()) : '';
}
function enviarCorreo_(para, fecha, prueba) {
  if (!para) throw new Error('Falta el correo de destino');
  const cfg = leerConfig_();
  // el enlace lleva la dirección de este script escondida tras # (no viaja a GitHub ni queda en el repositorio)
  const web = enlaceSaray_(cfg);
  const esFiesta = fecha === FIESTA;
  const d = new Date(fecha + 'T12:00:00');
  const dia = Utilities.formatDate(d, TZ, 'd') + ' de ' + ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'][d.getMonth()];
  const asunto = (prueba ? '[Prueba] ' : '') + (esFiesta ? 'Saray, hoy es el día' : 'Saray, tienes una carta nueva');
  const html = `
  <div style="background:#2b0a1a;padding:40px 16px;font-family:Georgia,serif">
    <div style="max-width:480px;margin:0 auto;background:#f7eee2;border-radius:6px;padding:40px 32px;text-align:center;border:1px solid #d9b98a">
      <div style="color:#a63a5a;font-style:italic;font-size:16px">${dia}</div>
      <div style="color:#4a0f27;font-size:30px;font-weight:bold;margin:12px 0 18px">${esFiesta ? 'Ha llegado el gran día' : 'Ha llegado una carta para ti'}</div>
      <div style="color:#3a0c20;font-size:17px;line-height:1.55;margin-bottom:28px">${esFiesta ? 'Abre la última carta: dentro está todo lo que necesitas saber.' : 'Tus amigas te han dejado una nueva pista sobre tu despedida. Ábrela, léela y guárdala en tu tendedero.'}</div>
      ${web ? `<a href="${web}" style="display:inline-block;background:#e0bd7e;color:#2b0a1a;text-decoration:none;font-weight:bold;padding:14px 30px;border-radius:999px;font-size:17px">Abrir la carta</a>` : ''}
      <div style="color:#a63a5a;font-style:italic;font-size:15px;margin-top:30px">Tus amigas</div>
    </div>
  </div>`;
  MailApp.sendEmail({ to: para, subject: asunto, htmlBody: html, name: 'Tus amigas', body: (esFiesta ? 'Hoy es el día. ' : 'Tienes una carta nueva. ') + web });
}
function hayAviso_() { return ScriptApp.getProjectTriggers().some(t => t.getHandlerFunction() === 'revisarAvisos'); }
function publicada_(f, c) { const hoy = hoy_(); return f < hoy || (f === hoy && hhmm_() >= (c.publicar || HORA_DEFECTO)); }
function hhmm_() { return Utilities.formatDate(new Date(), TZ, 'HH:mm'); }

/* ============================ UTILIDADES ============================ */
function leerCartas_() {
  const v = hoja_('Cartas').getDataRange().getValues(), out = {};
  for (let i = 1; i < v.length; i++) {
    const f = fecha_(v[i][0]); if (!f) continue;
    const c = { titulo: s_(v[i][1]), texto: s_(v[i][2]), firma: s_(v[i][3]), por: s_(v[i][4]), actualizado: s_(v[i][5]),
      publicar: hora_(v[i][9]) || HORA_DEFECTO, avisado: fecha_(v[i][10]), canal: s_(v[i][11]) || 'correo' };
    TIPOS.forEach((t, k) => { const raw = s_(v[i][6 + k]); if (raw) try { c[t] = JSON.parse(raw); } catch (e) {} });
    out[f] = c;
  }
  return out;
}
function leerOpiniones_() {
  const v = hoja_('Opiniones').getDataRange().getValues(), out = {};
  for (let i = 1; i < v.length; i++) {
    const f = fecha_(v[i][0]); if (!f) continue;
    (out[f] = out[f] || []).push({ por: s_(v[i][1]), voto: s_(v[i][2]), comentario: s_(v[i][3]), cuando: s_(v[i][4]) });
  }
  return out;
}
function medios_(c) { const m = {}; TIPOS.forEach(t => { if (c[t]) m[t] = publico_(c[t]); }); return m; }
function publico_(meta) { return { mime: meta.mime, nombre: meta.nombre }; }
function filaDe_(fecha) {
  const h = hoja_('Cartas'), v = h.getDataRange().getValues();
  for (let i = 1; i < v.length; i++) if (fecha_(v[i][0]) === fecha) return i + 1;
  h.appendRow([fecha]); return h.getLastRow();
}
function leerConfig_() {
  const v = hoja_('Config').getDataRange().getValues(), out = {};
  v.forEach(r => { if (r[0]) out[r[0]] = r[1] instanceof Date ? Utilities.formatDate(r[1], TZ, 'HH:mm') : s_(r[1]); });
  return out;
}
function ponerConfig_(k, val) {
  const h = hoja_('Config'), v = h.getDataRange().getValues();
  let fila = v.findIndex(r => r[0] === k) + 1;
  if (!fila) { h.appendRow([k, '']); fila = h.getLastRow(); }
  h.getRange(fila, 2).setValue(val);
}
/* Funciona tanto si el script se creó desde la hoja (Extensiones → Apps Script)
   como si se creó suelto en script.google.com: en ese caso crea la hoja él solo y la recuerda. */
function ss_() {
  const activa = SpreadsheetApp.getActiveSpreadsheet(); if (activa) return activa;
  const props = PropertiesService.getScriptProperties(), id = props.getProperty('HOJA_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) {} }
  const nueva = SpreadsheetApp.create('Cartas para Saray');
  props.setProperty('HOJA_ID', nueva.getId());
  return nueva;
}
function hoja_(nombre) {
  const ss = ss_();
  let h = ss.getSheetByName(nombre);
  if (!h) {
    h = ss.insertSheet(nombre);
    if (nombre === 'Cartas') { h.getRange('A:L').setNumberFormat('@'); h.appendRow(COLS); }
    if (nombre === 'Opiniones') { h.getRange('A:E').setNumberFormat('@'); h.appendRow(['fecha', 'por', 'voto', 'comentario', 'cuando']); }
    if (nombre === 'Config') { h.getRange('A:B').setNumberFormat('@'); h.appendRow(['clave', 'valor']); }
  }
  return h;
}
function carpeta_() { const it = DriveApp.getFoldersByName(CARPETA); return it.hasNext() ? it.next() : DriveApp.createFolder(CARPETA); }
function borrar_(raw) { try { if (raw) DriveApp.getFileById(JSON.parse(raw).id).setTrashed(true); } catch (e) {} }
function hoy_() { return Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd'); }
function ahora_() { return Utilities.formatDate(new Date(), TZ, "yyyy-MM-dd'T'HH:mm:ss"); }
function esFecha_(f) { return /^\d{4}-\d{2}-\d{2}$/.test(f || ''); }
function fecha_(x) { return x instanceof Date ? Utilities.formatDate(x, TZ, 'yyyy-MM-dd') : s_(x).trim(); }
function hora_(x) { return x instanceof Date ? Utilities.formatDate(x, TZ, 'HH:mm') : s_(x).trim(); }
function s_(x) { return x === null || x === undefined ? '' : String(x); }
function cut_(x, n) { return s_(x).slice(0, n); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/** Ejecuta esta función una vez para crear las pestañas, la carpeta y conceder permisos. */
function preparar() { hoja_('Cartas'); hoja_('Config'); hoja_('Opiniones'); carpeta_(); Logger.log('Hoja lista: ' + ss_().getUrl()); }
