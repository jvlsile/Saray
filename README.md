# La despedida de Saray

Web animada en 3D con la cuenta atrás para la despedida de Saray y una carta nueva cada día.

- `index.html`: la animación que ve Saray (cuenta atrás, carta del día, tendedero de cartas).
- `escribir/`: página oculta donde las amigas redactan las cartas, eligen la hora de publicación y suben fotos, vídeos y canciones.
- `apps-script/Code.gs`: el script de Google que guarda las cartas en una hoja de cálculo y los archivos en Google Drive, y avisa a Saray por correo.

Las cartas **no** están en este repositorio: viven en vuestra hoja de Google. La web solo recibe las cartas ya publicadas, así que Saray no puede adelantarse mirando el código.

---

## Puesta en marcha (unos 10 minutos)

### 1. Activar GitHub Pages
1. En el repositorio: **Settings → Pages**.
2. En *Build and deployment*, elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
3. Al cabo de un minuto la web estará en `https://jvlsile.github.io/Saray/`.

### 2. Crear la hoja de Google y el script
1. Abre [sheets.new](https://sheets.new) y ponle un nombre, por ejemplo *Cartas para Saray*.
2. Menú **Extensiones → Apps Script**.
3. Borra lo que haya y pega el contenido de `apps-script/Code.gs`.
4. Cambia la línea `const CLAVE = 'CAMBIA-ESTA-CLAVE';` por una clave vuestra. Es la que usaréis para entrar a redactar.
5. Guarda (icono del disquete). En el desplegable de funciones elige **preparar** y pulsa **Ejecutar**. Google pedirá permisos: acéptalos (si sale "Google no ha verificado esta aplicación", pulsa *Configuración avanzada → Ir a…*).

### 3. Publicar el script como aplicación web
1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
3. Pulsa **Implementar** y copia la URL que termina en `/exec`.

### 4. Configurar tu teléfono (la URL no se guarda en el repositorio)
1. Abre `https://jvlsile.github.io/Saray/escribir/`.
2. En **Enlace de configuración** pega la URL `/exec` del paso anterior, escribe tu nombre y la clave, y entra.
3. Tu teléfono lo recordará. En **Ajustes de la despedida → Enlace para otras amigas** tienes un enlace para copiar: pásaselo por privado a cada amiga junto con la clave y su teléfono quedará configurado al abrirlo.

### 5. Activar los avisos por correo
1. Vuelve a Apps Script, elige la función **instalarAviso** y pulsa **Ejecutar**.
2. Desde ese momento, cada 10 minutos se comprueba si la carta del día ha llegado a su hora de publicación y, si es así, se envía el correo a Saray (una sola vez por carta).

### 6. Redactar
1. Entrad en `https://jvlsile.github.io/Saray/escribir/` con vuestro nombre y la clave.
2. En **Ajustes de la despedida** poned el correo de Saray, el enlace de la web (`https://jvlsile.github.io/Saray/`), la hora de la fiesta (cuando la sepáis) y, si queréis, la música de fondo.
3. Usad **Enviar prueba** para ver el correo en vuestro buzón.
4. Escribid cada carta, elegid su hora de publicación y subid foto, vídeo o canción si queréis. Pulsad **Guardar carta**.

---

## Avisos por correo o por WhatsApp
En cada carta se elige **Avisar a Saray por: Correo, WhatsApp o Los dos**.
- **Correo:** se envía solo a la hora de publicación.
- **WhatsApp:** WhatsApp no permite envíos automáticos gratuitos. A la hora de publicación llega un correo a la organizadora (Ajustes → *Tu correo para los avisos de WhatsApp*) con un botón que abre WhatsApp con el mensaje para Saray ya escrito; solo hay que pulsar enviar. El mismo botón aparece en la redacción cuando la carta está publicada. Hace falta poner el teléfono de Saray en Ajustes.

## Saber cuándo abre Saray cada carta
Cuando Saray despliega una carta en la web, queda anotado en la pestaña *Lecturas* de la hoja y, la primera vez de cada carta, la organizadora recibe un correo («Saray ha abierto la carta del lunes 9 a las 9:14»). En la redacción aparece bajo cada día «Saray la abrió: …». No cuentan las vistas previas ni los móviles donde se ha entrado en la redacción.

## Pedir opinión a las amigas
Cada carta tiene **Vista previa** y **Pedir opinión a las amigas**. Este segundo botón comparte por WhatsApp un enlace donde las amigas ven la carta animada tal como la verá Saray (marcada como vista previa) y responden *Me encanta* o *Cambiaría algo* con un comentario. Las opiniones aparecen debajo de cada carta en la redacción. Saray no puede abrir estas vistas previas: piden la clave.

## Cómo funciona cada carta
- A la hora de publicación, la carta se desbloquea en la web y Saray recibe el correo. Antes de esa hora, en su tendedero aparece cerrada con un candado: "La carta de hoy llega a las…".
- Si la carta tiene **canción**, la música de fondo se apaga mientras suena y vuelve al guardar la carta.
- Si tiene **vídeo** y no tiene canción, el vídeo suena con su propio audio (y la música de fondo también se apaga).
- La **foto o el vídeo** caen como una polaroid sobre la carta cuando Saray termina de leerla. Tocándola se aparta a un lado.
- Límite: 20 MB por archivo. Las fotos se comprimen solas antes de subirlas.

## Si cambiáis el script
Cada vez que modifiquéis `Code.gs` hay que publicar una versión nueva: **Implementar → Gestionar implementaciones → editar (lápiz) → Versión: Nueva versión → Implementar**. La URL no cambia.

## Privacidad
- El repositorio es público: cualquiera puede ver el código, pero no las cartas ni los archivos, que están en vuestra hoja y vuestro Drive.
- La dirección del script **no está en el repositorio**. Cada teléfono la recibe en un enlace privado (lo que va detrás de `#c=` nunca se envía a GitHub) y la guarda en su navegador:
  - Saray, en el botón **Abrir la carta** de cada correo. Si abre la web sin ese enlace en otro dispositivo, verá un aviso para que la abra desde el correo.
  - Las amigas, en el enlace que se copia desde **Ajustes → Enlace para otras amigas**.
- **No escribáis nunca la clave real en GitHub**: solo en el editor de Apps Script.
- La página `escribir/` no aparece en buscadores y sin la clave no muestra nada. Para más secreto, podéis renombrar la carpeta (por ejemplo `escribir-r7k2/`).
- La música de fondo se sube desde la página de redacción y se guarda en vuestro Drive, no en este repositorio.
