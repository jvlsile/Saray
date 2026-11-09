(()=>{var cp=0,Tu=1,hp=2;var ho=1,up=2,Gr=3,Mi=0,Ve=1,En=2,Vi=0,Vr=1,Wi=2,Eu=3,wu=4,dp=5;var Hs=100,fp=101,pp=102,mp=103,gp=104,_p=200,xp=201,vp=202,yp=203,Au=204,Ru=205,Mp=206,Sp=207,bp=208,Tp=209,Ep=210,wp=211,Ap=212,Rp=213,Cp=214,ql=0,Pl=1,Il=2,Er=3,Ll=4,Dl=5,Nl=6,Ul=7,Cu=0,qp=1,Pp=2,Si=0,uo=1,fo=2,po=3,Gs=4,mo=5,go=6,_o=7;var qu=300,Vs=301,Wr=302,oc=303,lc=304,wr=1e3,gi=1001,Fl=1002,en=1003,Ip=1004;var xo=1005;var yn=1006,cc=1007;var Xi=1008;var wn=1009,Pu=1010,Iu=1011,Xr=1012,hc=1013,ci=1014,$n=1015,an=1016,uc=1017,dc=1018,Ws=1020,Lu=35902,Du=35899,Nu=1021,Uu=1022,hi=1023,Bi=1026,Yi=1027,fc=1028,pc=1029,gs=1030,mc=1031;var gc=1033,vo=33776,yo=33777,Mo=33778,So=33779,_c=35840,xc=35841,vc=35842,yc=35843,Mc=36196,Sc=37492,bc=37496,Tc=37488,Ec=37489,bo=37490,wc=37491,Ac=37808,Rc=37809,Cc=37810,qc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,Bc=37820,zc=37821,kc=36492,Hc=36494,Gc=36495,Vc=36283,Wc=36284,To=36285,Xc=36286;var Ra=2300,Ol=2301,Rl=2302,cu=2303,hu=2400,uu=2401,du=2402;var Lp=3200;var Yc=0,Dp=1,Zi="",Xe="srgb",Ca="srgb-linear",qa="linear",he="srgb";var Cl=7680;var Np=519,Up=512,Fp=513,Op=514,Fu=515,Bp=516,zp=517,Ou=518,Bu=519,kp=35044;var zu="300 es",Jn=2e3,Ar=2001;function T1(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function E1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hp(){let s=Pa("canvas");return s.style.display="block",s}var wf={},Rr=null;function ku(...s){let t="THREE."+s.shift();Rr?Rr("log",t,...s):console.log(t,...s)}function Gp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=Gp(s);let t="THREE."+s.shift();if(Rr)Rr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Gp(s);let t="THREE."+s.shift();if(Rr)Rr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ns(...s){let t=s.join(" ");t in wf||(wf[t]=!0,Gt(...s))}function Vp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wp={[ql]:ql,[Il]:Nl,[Ll]:Ll,[Er]:Dl,[Pl]:Pl,[Nl]:Il,[Ul]:Ul,[Dl]:Er},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oh=Math.PI/180,Ia=180/Math.PI;function Yr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function w1(s,t){return(s%t+t)%t}function Bh(s,t,e){return(1-e)*s+e*t}function Xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function A1(s,t){if(t.constructor===Float32Array)return s;let e=Hu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function R1(s,t){if(t.constructor===Float32Array)return s;let e=Hu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var st=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let y=Math.acos(p),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+_*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+m*o,d=d*g+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Af.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zh=new L,Af=new xi,Zt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],y=i[1],S=i[4],v=i[7],E=i[2],w=i[5],x=i[8];return r[0]=a*_+o*y+l*E,r[3]=a*p+o*S+l*w,r[6]=a*g+o*v+l*x,r[1]=c*_+h*y+d*E,r[4]=c*p+h*S+d*w,r[7]=c*g+h*v+d*x,r[2]=u*_+f*y+m*E,r[5]=u*p+f*S+m*w,r[8]=u*g+f*v+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(t,e)),this}rotate(t){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-t)),this}translate(t,e){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kh=new Zt,Rf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C1(){let s={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ca]:{primaries:t,whitePoint:n,transfer:qa,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}var ne=C1();function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var hr,Bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hr===void 0&&(hr=Pa("canvas")),hr.width=t.width,hr.height=t.height;let i=hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q1=0,Cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Yr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Hh(i[a].image)):r.push(Hh(i[a]))}else r=Hh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var P1=0,Gh=new L,Mn=class s extends _i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=gi,i=gi,r=yn,a=Xi,o=hi,l=wn,c=s.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Yr(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=qu;Mn.DEFAULT_ANISOTROPY=1;var Ee=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,E=(g+1)/2,w=(h+u)/4,x=(d+_)/4,M=(m+p)/4;return S>v&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=x/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=M/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=x/r,i=M/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Mn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},La=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I1,t,L1)}lookAt(t,e,n){let i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),ss.crossVectors(n,Dn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),ss.crossVectors(n,Dn)),ss.normalize(),il.crossVectors(Dn,ss),i[0]=ss.x,i[4]=il.x,i[8]=Dn.x,i[1]=ss.y,i[5]=il.y,i[9]=Dn.y,i[2]=ss.z,i[6]=il.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],y=n[3],S=n[7],v=n[11],E=n[15],w=i[0],x=i[4],M=i[8],A=i[12],C=i[1],P=i[5],D=i[9],O=i[13],q=i[2],F=i[6],k=i[10],z=i[14],Q=i[3],W=i[7],$=i[11],tt=i[15];return r[0]=a*w+o*C+l*q+c*Q,r[4]=a*x+o*P+l*F+c*W,r[8]=a*M+o*D+l*k+c*$,r[12]=a*A+o*O+l*z+c*tt,r[1]=h*w+d*C+u*q+f*Q,r[5]=h*x+d*P+u*F+f*W,r[9]=h*M+d*D+u*k+f*$,r[13]=h*A+d*O+u*z+f*tt,r[2]=m*w+_*C+p*q+g*Q,r[6]=m*x+_*P+p*F+g*W,r[10]=m*M+_*D+p*k+g*$,r[14]=m*A+_*O+p*z+g*tt,r[3]=y*w+S*C+v*q+E*Q,r[7]=y*x+S*P+v*F+E*W,r[11]=y*M+S*D+v*k+E*$,r[15]=y*A+S*O+v*z+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],y=l*f-c*u,S=o*f-c*d,v=o*u-l*d,E=a*f-c*h,w=a*u-l*h,x=a*d-o*h;return e*(_*y-p*S+g*v)-n*(m*y-p*E+g*w)+i*(m*S-_*E+g*x)-r*(m*v-_*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],y=e*o-n*a,S=e*l-i*a,v=e*c-r*a,E=n*l-i*o,w=n*c-r*o,x=i*c-r*l,M=h*_-d*m,A=h*p-u*m,C=h*g-f*m,P=d*p-u*_,D=d*g-f*_,O=u*g-f*p,q=y*O-S*D+v*P+E*C-w*A+x*M;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/q;return t[0]=(o*O-l*D+c*P)*F,t[1]=(i*D-n*O-r*P)*F,t[2]=(_*x-p*w+g*E)*F,t[3]=(u*w-d*x-f*E)*F,t[4]=(l*C-a*O-c*A)*F,t[5]=(e*O-i*C+r*A)*F,t[6]=(p*v-m*x-g*S)*F,t[7]=(h*x-u*v+f*S)*F,t[8]=(a*D-o*C+c*M)*F,t[9]=(n*C-e*D-r*M)*F,t[10]=(m*w-_*v+g*y)*F,t[11]=(d*v-h*w-f*y)*F,t[12]=(o*A-a*P-l*M)*F,t[13]=(e*P-n*A+i*M)*F,t[14]=(_*S-m*E-p*y)*F,t[15]=(h*E-d*S+u*y)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,_=a*h,p=a*d,g=o*d,y=l*c,S=l*h,v=l*d,E=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+v)*E,i[2]=(m-S)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+g))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(m+S)*x,i[9]=(p-y)*x,i[10]=(1-(u+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ur.set(i[0],i[1],i[2]).length(),o=ur.set(i[4],i[5],i[6]).length(),l=ur.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ii.copy(this);let c=1/a,h=1/o,d=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,e.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Jn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ar)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Jn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Jn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ar)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ur=new L,ii=new de,I1=new L(0,0,0),L1=new L(1,1,1),ss=new L,il=new L,Dn=new L,qf=new de,Pf=new xi,li=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},D1=0,If=new L,dr=new xi,Ii=new de,sl=new L,va=new L,N1=new L,U1=new xi,Lf=new L(1,0,0),Df=new L(0,1,0),Nf=new L(0,0,1),Uf={type:"added"},F1={type:"removed"},fr={type:"childadded",child:null},Vh={type:"childremoved",child:null},De=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new li,n=new xi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Lf,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Nf,t)}translateOnAxis(t,e){return If.copy(t).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lf,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sl.copy(t):sl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(va,sl,this.up):Ii.lookAt(sl,va,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),dr.setFromRotationMatrix(Ii),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uf),fr.child=t,this.dispatchEvent(fr),fr.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(F1),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uf),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,N1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,U1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},O1={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Wh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=w1(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wh(a,r,t+1/3),this.g=Wh(a,r,t),this.b=Wh(a,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=Yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ne.workingToColorSpace(fn.copy(this),t),Math.round(ie(fn.r*255,0,255))*65536+Math.round(ie(fn.g*255,0,255))*256+Math.round(ie(fn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,r=fn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Xe){ne.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,i=fn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(rl);let n=Bh(rs.h,rl.h,e),i=Bh(rs.s,rl.s,e),r=Bh(rs.l,rl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Nt;Nt.NAMES=Yp;var Da=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new L,Li=new L,Xh=new L,Di=new L,pr=new L,mr=new L,Ff=new L,Yh=new L,Zh=new L,Jh=new L,$h=new Ee,Kh=new Ee,Qh=new Ee,cs=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),si.subVectors(t,e),i.cross(si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){si.subVectors(i,e),Li.subVectors(n,e),Xh.subVectors(t,e);let a=si.dot(si),o=si.dot(Li),l=si.dot(Xh),c=Li.dot(Li),h=Li.dot(Xh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return $h.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),$h.fromBufferAttribute(t,e),Kh.fromBufferAttribute(t,n),Qh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector($h,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(Qh,r.z),a}static isFrontFacing(t,e,n,i){return si.subVectors(n,e),Li.subVectors(t,e),si.cross(Li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),si.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;pr.subVectors(i,n),mr.subVectors(r,n),Yh.subVectors(t,n);let l=pr.dot(Yh),c=mr.dot(Yh);if(l<=0&&c<=0)return e.copy(n);Zh.subVectors(t,i);let h=pr.dot(Zh),d=mr.dot(Zh);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(pr,a);Jh.subVectors(t,r);let f=pr.dot(Jh),m=mr.dot(Jh);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(mr,o);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Ff.subVectors(r,i),o=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Ff,o);let g=1/(p+_+u);return a=_*g,o=u*g,e.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),al.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox)),al.applyMatrix4(t.matrixWorld),this.union(al)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ya),ol.subVectors(this.max,ya),gr.subVectors(t.a,ya),_r.subVectors(t.b,ya),xr.subVectors(t.c,ya),as.subVectors(_r,gr),os.subVectors(xr,_r),Ps.subVectors(gr,xr);let e=[0,-as.z,as.y,0,-os.z,os.y,0,-Ps.z,Ps.y,as.z,0,-as.x,os.z,0,-os.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-os.y,os.x,0,-Ps.y,Ps.x,0];return!jh(e,gr,_r,xr,ol)||(e=[1,0,0,0,1,0,0,0,1],!jh(e,gr,_r,xr,ol))?!1:(ll.crossVectors(as,os),e=[ll.x,ll.y,ll.z],jh(e,gr,_r,xr,ol))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new L,new L,new L,new L,new L,new L,new L,new L],ri=new L,al=new vi,gr=new L,_r=new L,xr=new L,as=new L,os=new L,Ps=new L,ya=new L,ol=new L,ll=new L,Is=new L;function jh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Is.fromArray(s,r);let o=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=t.dot(Is),c=e.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new L,cl=new st,B1=0,pn=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kp,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=t!==void 0?Hu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cl.fromBufferAttribute(this,e),cl.applyMatrix3(t),this.setXY(e,cl.x,cl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):A1(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):R1(t,this.array)}};var Na=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ua=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},z1=new vi,Ma=new L,tu=new L,zi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):z1.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);let e=Ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(tu)),this.expandByPoint(Ma.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},k1=0,Zn=new de,eu=new De,vr=new L,Nn=new vi,Sa=new vi,tn=new L,Oe=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T1(t)?Ua:Na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Nn.min,Sa.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,Sa.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(Sa.min),Nn.expandByPoint(Sa.max))}Nn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(vr.fromBufferAttribute(t,c),tn.add(vr)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)o[A]=new L,l[A]=new L;let h=new L,d=new L,u=new L,f=new st,m=new st,_=new st,p=new L,g=new L;function y(A,C,P){c[A]=c[C]=c[P]=1,h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,P),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),o[A].add(p),o[C].add(p),o[P].add(p),l[A].add(g),l[C].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,C=S.length;A<C;++A){let P=S[A],D=P.start,O=P.count;for(let q=D,F=D+O;q<F;q+=3)y(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let v=new L,E=new L,w=new L,x=new L;function M(A){w.fromBufferAttribute(i,A),x.copy(w);let C=o[A];v.copy(C),v.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(x,C);let D=E.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,D)}for(let A=0,C=n.count;A<C;++A)c[A]&&M(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new pn(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nu=new L,H1=new L,G1=new Zt,ai=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=nu.subVectors(n,e).cross(H1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||G1.getNormalMatrix(t),i=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},V1=0,ki=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Vr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cl,this.stencilZFail=Cl,this.stencilZPass=Cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ui=new L,iu=new L,hl=new L,ul=new L,Lr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){iu.copy(t).add(e).multiplyScalar(.5),hl.copy(e).sub(t).normalize(),ul.copy(this.origin).sub(iu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(hl),o=ul.dot(this.direction),l=-ul.dot(hl),c=ul.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(iu).addScaledVector(hl,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,g=n.x-a.x,y=n.y-a.y,S=n.z-a.z,v=Math.abs(l),E=Math.abs(c),w=Math.abs(h),x,M,A,C,P,D,O,q,F,k,z,Q;if(v>=E&&v>=w?(A=l,D=d,F=m,Q=g,l>=0?(x=c,M=h,C=u,P=f,O=_,q=p,k=y,z=S):(x=h,M=c,C=f,P=u,O=p,q=_,k=S,z=y)):E>=w?(A=c,D=u,F=_,Q=y,c>=0?(x=h,M=l,C=f,P=d,O=p,q=m,k=S,z=g):(x=l,M=h,C=d,P=f,O=m,q=p,k=g,z=S)):(A=h,D=f,F=p,Q=S,h>=0?(x=l,M=c,C=d,P=u,O=m,q=_,k=g,z=y):(x=c,M=l,C=u,P=d,O=_,q=m,k=y,z=g)),A===0)return null;let W=x/A,$=M/A,tt=1/A,gt=C-W*D,Lt=P-$*D,X=O-W*F,lt=q-$*F,Rt=k-W*Q,Ut=z-$*Q,bt=Rt*lt-Ut*X,Ft=gt*Ut-Lt*Rt,pe=X*Lt-lt*gt;if(i){if(bt<0||Ft<0||pe<0)return null}else if((bt<0||Ft<0||pe<0)&&(bt>0||Ft>0||pe>0))return null;let B=bt+Ft+pe;if(B===0)return null;let ft=tt*(bt*D+Ft*F+pe*Q);return(B>0?ft<0:ft>0)?null:this.at(ft/B,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Of=new de,Ls=new Lr,dl=new zi,Bf=new L,fl=new L,pl=new L,ml=new L,su=new L,gl=new L,zf=new L,_l=new L,ee=class extends De{constructor(t=new Oe,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(su.fromBufferAttribute(d,t),a?gl.addScaledVector(su,h):gl.addScaledVector(su.sub(e),h))}e.add(gl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(dl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(dl,Bf)===null||Ls.origin.distanceToSquared(Bf)>(t.far-t.near)**2))&&(Of.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(Of),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let w=o.getX(v),x=o.getX(v+1),M=o.getX(v+2);i=xl(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);i=xl(this,a,t,n,c,h,d,y,S,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let w=v,x=v+1,M=v+2;i=xl(this,g,t,n,c,h,d,w,x,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let y=p,S=p+1,v=p+2;i=xl(this,a,t,n,c,h,d,y,S,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function W1(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Mi,o),l===null)return null;_l.copy(o),_l.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_l);return c<e.near||c>e.far?null:{distance:c,point:_l.clone(),object:s}}function xl(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,fl),s.getVertexPosition(l,pl),s.getVertexPosition(c,ml);let h=W1(s,t,e,n,fl,pl,ml,zf);if(h){let d=new L;cs.getBarycoord(zf,fl,pl,ml,d),i&&(h.uv=cs.getInterpolatedAttribute(i,o,l,c,d,new st)),r&&(h.uv1=cs.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(h.normal=cs.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};cs.getNormal(fl,pl,ml,u.normal),h.face=u,h.barycoord=d}return h}var Fa=class extends Mn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=en,h=en,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oa=class extends pn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yr=new de,kf=new de,vl=[],Hf=new vi,X1=new de,ba=new ee,Ta=new zi,hs=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,X1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),Hf.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Hf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),Ta.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(Ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),t.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,yr),kf.multiplyMatrices(n,yr),ba.matrixWorld=kf,ba.raycast(t,vl);for(let a=0,o=vl.length;a<o;a++){let l=vl[a];l.instanceId=r,l.object=this,e.push(l)}vl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(i*this.count),i,this.count,fc,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new zi,Y1=new st(.5,.5),yl=new L,us=class{constructor(t=new ai,e=new ai,n=new ai,i=new ai,r=new ai,a=new ai){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],y=r[12],S=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,g-m,E-y).normalize(),i[1].setComponents(c+a,f+h,g+m,E+y).normalize(),i[2].setComponents(c+o,f+d,g+_,E+S).normalize(),i[3].setComponents(c-o,f-d,g-_,E-S).normalize(),n)i[4].setComponents(l,u,p,v).normalize(),i[5].setComponents(c-l,f-u,g-p,E-v).normalize();else if(i[4].setComponents(c-l,f-u,g-p,E-v).normalize(),e===Jn)i[5].setComponents(c+l,f+u,g+p,E+v).normalize();else if(e===Ar)i[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=Y1.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(yl.x=i.normal.x>0?t.max.x:t.min.x,yl.y=i.normal.y>0?t.max.y:t.min.y,yl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gf=new de,Hl=class s{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Gf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new us),n[i].setFromProjectionMatrix(Gf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new us),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Dr=class extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vf=new de,fu=new Lr,Ml=new zi,Sl=new L,Nr=class extends De{constructor(t=new Oe,e=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(i),Ml.radius+=r,t.ray.intersectsSphere(Ml)===!1)return;Vf.copy(i).invert(),fu.copy(t.ray).applyMatrix4(Vf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,_=f;m<_;m++){let p=c.getX(m);Sl.fromBufferAttribute(d,p),Wf(Sl,p,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,_=f;m<_;m++)Sl.fromBufferAttribute(d,m),Wf(Sl,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wf(s,t,e,n,i,r,a){let o=fu.distanceSqToPoint(s);if(o<e){let l=new L;fu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ba=class extends Mn{constructor(t=[],e=Vs,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Us=class extends Mn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends Mn{constructor(t,e,n=ci,i,r,a,o=en,l=en,c,h=Bi,d=1){if(h!==Bi&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},za=class extends Hi{constructor(t,e=ci,n=Vs,i,r,a=en,o=en,l,c=Bi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ka=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class s extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function m(_,p,g,y,S,v,E,w,x,M,A){let C=v/x,P=E/M,D=v/2,O=E/2,q=w/2,F=x+1,k=M+1,z=0,Q=0,W=new L;for(let $=0;$<k;$++){let tt=$*P-O;for(let gt=0;gt<F;gt++){let Lt=gt*C-D;W[_]=Lt*y,W[p]=tt*S,W[g]=q,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(gt/x),d.push(1-$/M),z+=1}}for(let $=0;$<M;$++)for(let tt=0;tt<x;tt++){let gt=u+tt+F*$,Lt=u+tt+F*($+1),X=u+(tt+1)+F*($+1),lt=u+(tt+1)+F*$;l.push(gt,Lt,lt),l.push(Lt,X,lt),Q+=6}o.addGroup(f,Q,A),f+=Q,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ha=class s extends Oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},yi=class s extends Oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,_=[],p=n/2,g=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function y(){let v=new L,E=new L,w=0,x=(e-t)/n;for(let M=0;M<=r;M++){let A=[],C=M/r,P=C*(e-t)+t;for(let D=0;D<=i;D++){let O=D/i,q=O*l+o,F=Math.sin(q),k=Math.cos(q);E.x=P*F,E.y=-C*n+p,E.z=P*k,d.push(E.x,E.y,E.z),v.set(F,x,k).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-C),A.push(m++)}_.push(A)}for(let M=0;M<i;M++)for(let A=0;A<r;A++){let C=_[A][M],P=_[A+1][M],D=_[A+1][M+1],O=_[A][M+1];(t>0||A!==0)&&(h.push(C,P,O),w+=3),(e>0||A!==r-1)&&(h.push(P,D,O),w+=3)}c.addGroup(g,w,0),g+=w}function S(v){let E=m,w=new st,x=new L,M=0,A=v===!0?t:e,C=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let q=D/i*l+o,F=Math.cos(q),k=Math.sin(q);x.x=A*k,x.y=p*C,x.z=A*F,d.push(x.x,x.y,x.z),u.push(0,C,0),w.x=F*.5+.5,w.y=k*.5*C+.5,f.push(w.x,w.y),m++}for(let D=0;D<i;D++){let O=E+D,q=P+D;v===!0?h.push(q,q+1,O):h.push(q+1,q,O),M+=3}c.addGroup(g,M,v===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new st:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new de;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ur=class extends On{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gl=class extends Ur{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Xf=new L,Yf=new L,ru=new Gu,au=new Gu,ou=new Gu,Fr=class extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Yf.subVectors(i[0],i[1]).add(i[0]),c=Yf);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Xf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),ru.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,p),au.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,p),ou.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),au.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ou.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ru.calc(l),au.calc(l),ou.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zf(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Z1(s,t){let e=1-s;return e*e*t}function J1(s,t){return 2*(1-s)*s*t}function $1(s,t){return s*s*t}function wa(s,t,e,n){return Z1(s,t)+J1(s,e)+$1(s,n)}function K1(s,t){let e=1-s;return e*e*e*t}function Q1(s,t){let e=1-s;return 3*e*e*s*t}function j1(s,t){return 3*(1-s)*s*s*t}function tg(s,t){return s*s*s*t}function Aa(s,t,e,n,i){return K1(s,t)+Q1(s,e)+j1(s,n)+tg(s,i)}var Ga=class extends On{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Aa(t,i.x,r.x,a.x,o.x),Aa(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends On{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Aa(t,i.x,r.x,a.x,o.x),Aa(t,i.y,r.y,a.y,o.y),Aa(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends On{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends On{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends On{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(wa(t,i.x,r.x,a.x),wa(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends On{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(wa(t,i.x,r.x,a.x),wa(t,i.y,r.y,a.y),wa(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Zf(o,l.x,c.x,h.x,d.x),Zf(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new st().fromArray(i))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:Fr,CubicBezierCurve:Ga,CubicBezierCurve3:Vl,EllipseCurve:Ur,LineCurve:Va,LineCurve3:Wl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Xa,SplineCurve:Ya}),Yl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Xl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Fs=class extends Yl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Va(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Wa(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Ga(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ya(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Ur(t,e,n,i,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ds=class extends Fs{constructor(t){super(t),this.uuid=Yr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Fs().fromJSON(i))}return this}};function eg(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Zp(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ag(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){let f=s[u],m=s[u+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Za(r,a,e,o,l,c,0),a}function Zp(s,t,e,n,i){let r;if(i===_g(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Jf(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Jf(a/n|0,s[a],s[a+1],r);return r&&Or(r,r.next)&&($a(r),r=r.next),r}function Os(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||qe(e.prev,e,e.next)===0)){if($a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Za(s,t,e,n,i,r,a){if(!s)return;!a&&r&&ug(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?ig(s,n,i,r):ng(s)){t.push(l.i,s.i,c.i),$a(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=sg(Os(s),t),Za(s,t,e,n,i,r,2)):a===2&&rg(s,t,e,n,i,r):Za(Os(s),t,e,n,i,r,1);break}}}function ng(s){let t=s.prev,e=s,n=s.next;if(qe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Ea(i,o,r,l,a,c,m.x,m.y)&&qe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ig(s,t,e,n){let i=s.prev,r=s,a=s.next;if(qe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),m=Math.min(h,d,u),_=Math.max(o,l,c),p=Math.max(h,d,u),g=pu(f,m,t,e,n),y=pu(_,p,t,e,n),S=s.prevZ,v=s.nextZ;for(;S&&S.z>=g&&v&&v.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Ea(o,h,l,d,c,u,S.x,S.y)&&qe(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Ea(o,h,l,d,c,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=p&&S!==i&&S!==a&&Ea(o,h,l,d,c,u,S.x,S.y)&&qe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=p&&v!==i&&v!==a&&Ea(o,h,l,d,c,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sg(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Or(n,i)&&$p(n,e,e.next,i)&&Ja(n,i)&&Ja(i,n)&&(t.push(n.i,e.i,i.i),$a(e),$a(e.next),e=s=i),e=e.next}while(e!==s);return Os(e)}function rg(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pg(a,o)){let l=Kp(a,o);a=Os(a,a.next),l=Os(l,l.next),Za(a,t,e,n,i,r,0),Za(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function ag(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Zp(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(fg(c))}i.sort(og);for(let r=0;r<i.length;r++)e=lg(i[r],e);return e}function og(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function lg(s,t){let e=cg(s,t);if(!e)return t;let n=Kp(e,s);return Os(n,n.next),Os(e,e.next)}function cg(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Or(s,e))return e;do{if(Or(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Ja(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&hg(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function hg(s,t){return qe(s.prev,s,t.prev)<0&&qe(t.next,s,s.next)<0}function ug(s,t,e,n){let i=s;do i.z===0&&(i.z=pu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,dg(i)}function dg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function pu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Jp(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ea(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Jp(s,t,e,n,i,r,a,o)}function pg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mg(s,t)&&(Ja(s,t)&&Ja(t,s)&&gg(s,t)&&(qe(s.prev,s,t.prev)||qe(s,t.prev,t))||Or(s,t)&&qe(s.prev,s,s.next)>0&&qe(t.prev,t,t.next)>0)}function qe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Or(s,t){return s.x===t.x&&s.y===t.y}function $p(s,t,e,n){let i=Tl(qe(s,t,e)),r=Tl(qe(s,t,n)),a=Tl(qe(e,n,s)),o=Tl(qe(e,n,t));return!!(i!==r&&a!==o||i===0&&bl(s,e,t)||r===0&&bl(s,n,t)||a===0&&bl(e,s,n)||o===0&&bl(e,t,n))}function bl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Tl(s){return s>0?1:s<0?-1:0}function mg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&$p(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ja(s,t){return qe(s.prev,s,s.next)<0?qe(s,t,s.next)>=0&&qe(s,s.prev,t)>=0:qe(s,t,s.prev)<0||qe(s,s.next,t)<0}function gg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Kp(s,t){let e=mu(s.i,s.x,s.y),n=mu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jf(s,t,e,n){let i=mu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mu(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _g(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var gu=class{static triangulate(t,e,n=2){return eg(t,e,n)}},oi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];$f(t),Kf(n,t);let a=t.length;e.forEach($f);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Kf(n,e[l]);let o=gu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $f(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Kf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ka=class s extends Oe{constructor(t=new ds([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(i,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:xg,S,v=!1,E,w,x,M;if(g){S=g.getSpacedPoints(h),v=!0,u=!1;let Z=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,Z),w=new L,x=new L,M=new L}u||(p=0,f=0,m=0,_=0);let A=o.extractPoints(c),C=A.shape,P=A.holes;if(!oi.isClockWise(C)){C=C.reverse();for(let Z=0,it=P.length;Z<it;Z++){let rt=P[Z];oi.isClockWise(rt)&&(P[Z]=rt.reverse())}}function O(Z){let rt=10000000000000001e-36,ht=Z[0];for(let ut=1;ut<=Z.length;ut++){let Bt=ut%Z.length,Ct=Z[Bt],zt=Ct.x-ht.x,Vt=Ct.y-ht.y,Qt=zt*zt+Vt*Vt,U=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(ht.x),Math.abs(ht.y)),ye=rt*U*U;if(Qt<=ye){Z.splice(Bt,1),ut--;continue}ht=Ct}}O(C),P.forEach(O);let q=P.length,F=C;for(let Z=0;Z<q;Z++){let it=P[Z];C=C.concat(it)}function k(Z,it,rt){return it||Wt("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(it,rt)}let z=C.length;function Q(Z,it,rt){let ht,ut,Bt,Ct=Z.x-it.x,zt=Z.y-it.y,Vt=rt.x-Z.x,Qt=rt.y-Z.y,U=Ct*Ct+zt*zt,ye=Ct*Qt-zt*Vt;if(Math.abs(ye)>Number.EPSILON){let Jt=Math.sqrt(U),Xt=Math.sqrt(Vt*Vt+Qt*Qt),ct=it.x-zt/Jt,Me=it.y+Ct/Jt,Ht=rt.x-Qt/Xt,Yt=rt.y+Vt/Xt,R=((Ht-ct)*Qt-(Yt-Me)*Vt)/(Ct*Qt-zt*Vt);ht=ct+Ct*R-Z.x,ut=Me+zt*R-Z.y;let b=ht*ht+ut*ut;if(b<=2)return new st(ht,ut);Bt=Math.sqrt(b/2)}else{let Jt=!1;Ct>Number.EPSILON?Vt>Number.EPSILON&&(Jt=!0):Ct<-Number.EPSILON?Vt<-Number.EPSILON&&(Jt=!0):Math.sign(zt)===Math.sign(Qt)&&(Jt=!0),Jt?(ht=-zt,ut=Ct,Bt=Math.sqrt(U)):(ht=Ct,ut=zt,Bt=Math.sqrt(U/2))}return new st(ht/Bt,ut/Bt)}let W=[];for(let Z=0,it=F.length,rt=it-1,ht=Z+1;Z<it;Z++,rt++,ht++)rt===it&&(rt=0),ht===it&&(ht=0),W[Z]=Q(F[Z],F[rt],F[ht]);let $=[],tt,gt=W.concat();for(let Z=0,it=q;Z<it;Z++){let rt=P[Z];tt=[];for(let ht=0,ut=rt.length,Bt=ut-1,Ct=ht+1;ht<ut;ht++,Bt++,Ct++)Bt===ut&&(Bt=0),Ct===ut&&(Ct=0),tt[ht]=Q(rt[ht],rt[Bt],rt[Ct]);$.push(tt),gt=gt.concat(tt)}let Lt;if(p===0)Lt=oi.triangulateShape(F,P);else{let Z=[],it=[];for(let rt=0;rt<p;rt++){let ht=rt/p,ut=f*Math.cos(ht*Math.PI/2),Bt=m*Math.sin(ht*Math.PI/2)+_;for(let Ct=0,zt=F.length;Ct<zt;Ct++){let Vt=k(F[Ct],W[Ct],Bt);Ft(Vt.x,Vt.y,-ut),ht===0&&Z.push(Vt)}for(let Ct=0,zt=q;Ct<zt;Ct++){let Vt=P[Ct];tt=$[Ct];let Qt=[];for(let U=0,ye=Vt.length;U<ye;U++){let Jt=k(Vt[U],tt[U],Bt);Ft(Jt.x,Jt.y,-ut),ht===0&&Qt.push(Jt)}ht===0&&it.push(Qt)}}Lt=oi.triangulateShape(Z,it)}let X=Lt.length,lt=m+_;for(let Z=0;Z<z;Z++){let it=u?k(C[Z],gt[Z],lt):C[Z];v?(x.copy(E.normals[0]).multiplyScalar(it.x),w.copy(E.binormals[0]).multiplyScalar(it.y),M.copy(S[0]).add(x).add(w),Ft(M.x,M.y,M.z)):Ft(it.x,it.y,0)}for(let Z=1;Z<=h;Z++)for(let it=0;it<z;it++){let rt=u?k(C[it],gt[it],lt):C[it];v?(x.copy(E.normals[Z]).multiplyScalar(rt.x),w.copy(E.binormals[Z]).multiplyScalar(rt.y),M.copy(S[Z]).add(x).add(w),Ft(M.x,M.y,M.z)):Ft(rt.x,rt.y,d/h*Z)}for(let Z=p-1;Z>=0;Z--){let it=Z/p,rt=f*Math.cos(it*Math.PI/2),ht=m*Math.sin(it*Math.PI/2)+_;for(let ut=0,Bt=F.length;ut<Bt;ut++){let Ct=k(F[ut],W[ut],ht);Ft(Ct.x,Ct.y,d+rt)}for(let ut=0,Bt=P.length;ut<Bt;ut++){let Ct=P[ut];tt=$[ut];for(let zt=0,Vt=Ct.length;zt<Vt;zt++){let Qt=k(Ct[zt],tt[zt],ht);v?Ft(Qt.x,Qt.y+S[h-1].y,S[h-1].x+rt):Ft(Qt.x,Qt.y,d+rt)}}}Rt(),Ut();function Rt(){let Z=i.length/3;if(u){let it=0,rt=z*it;for(let ht=0;ht<X;ht++){let ut=Lt[ht];pe(ut[2]+rt,ut[1]+rt,ut[0]+rt)}it=h+p*2,rt=z*it;for(let ht=0;ht<X;ht++){let ut=Lt[ht];pe(ut[0]+rt,ut[1]+rt,ut[2]+rt)}}else{for(let it=0;it<X;it++){let rt=Lt[it];pe(rt[2],rt[1],rt[0])}for(let it=0;it<X;it++){let rt=Lt[it];pe(rt[0]+z*h,rt[1]+z*h,rt[2]+z*h)}}n.addGroup(Z,i.length/3-Z,0)}function Ut(){let Z=i.length/3,it=0;bt(F,it),it+=F.length;for(let rt=0,ht=P.length;rt<ht;rt++){let ut=P[rt];bt(ut,it),it+=ut.length}n.addGroup(Z,i.length/3-Z,1)}function bt(Z,it){let rt=Z.length;for(;--rt>=0;){let ht=rt,ut=rt-1;ut<0&&(ut=Z.length-1);for(let Bt=0,Ct=h+p*2;Bt<Ct;Bt++){let zt=z*Bt,Vt=z*(Bt+1),Qt=it+ht+zt,U=it+ut+zt,ye=it+ut+Vt,Jt=it+ht+Vt;B(Qt,U,ye,Jt)}}}function Ft(Z,it,rt){l.push(Z),l.push(it),l.push(rt)}function pe(Z,it,rt){ft(Z),ft(it),ft(rt);let ht=i.length/3,ut=y.generateTopUV(n,i,ht-3,ht-2,ht-1);vt(ut[0]),vt(ut[1]),vt(ut[2])}function B(Z,it,rt,ht){ft(Z),ft(it),ft(ht),ft(it),ft(rt),ft(ht);let ut=i.length/3,Bt=y.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);vt(Bt[0]),vt(Bt[1]),vt(Bt[3]),vt(Bt[1]),vt(Bt[2]),vt(Bt[3])}function ft(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function vt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xl[i.type]().fromJSON(i)),new s(n,t.options)}},xg={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-d),new st(u,1-m),new st(_,1-g)]:[new st(o,1-l),new st(h,1-d),new st(f,1-m),new st(p,1-g)]}};function vg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bn=class s extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let y=g*u-a;for(let S=0;S<c;S++){let v=S*d-r;m.push(v,-y,0),_.push(0,0,1),p.push(S/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let S=y+c*g,v=y+c*(g+1),E=y+1+c*(g+1),w=y+1+c*g;f.push(S,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qa=class s extends Oe{constructor(t=new ds([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(i,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(a,2));function c(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let y=m[p];oi.isClockWise(y)===!0&&(m[p]=y.reverse())}let _=oi.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let y=m[p];f=f.concat(y)}for(let p=0,g=f.length;p<g;p++){let y=f[p];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,g=_.length;p<g;p++){let y=_[p],S=y[0]+d,v=y[1]+d,E=y[2]+d;n.push(S,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return yg(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function yg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Gi=class s extends Oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let y=[],S=g/n,v=a+S*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let A=M/e,C=i+A*r;d.x=-w*Math.cos(C),d.y=E,d.z=w*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(A+x,1-S),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let S=h[g][y+1],v=h[g][y],E=h[g+1][y],w=h[g+1][y+1];(g!==0||a>0)&&f.push(S,v,w),(g!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ja=class s extends Oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new L,f=new L,m=new L;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let g=0;g<=i;g++){let y=g/i*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){let g=(i+1)*_+p-1,y=(i+1)*(_-1)+p-1,S=(i+1)*(_-1)+p,v=(i+1)*_+p;l.push(g,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var to=class s extends Oe{constructor(t=new Xa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new st,h=new L,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function _(){for(let S=0;S<e;S++)p(S);p(r===!1?e:0),y(),g()}function p(S){h=t.getPointAt(S/e,h);let v=a.normals[S],E=a.binormals[S];for(let w=0;w<=i;w++){let x=w/i*Math.PI*2,M=Math.sin(x),A=-Math.cos(x);l.x=A*v.x+M*E.x,l.y=A*v.y+M*E.y,l.z=A*v.z+M*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=e;S++)for(let v=1;v<=i;v++){let E=(i+1)*(S-1)+(v-1),w=(i+1)*S+(v-1),x=(i+1)*S+v,M=(i+1)*(S-1)+v;m.push(E,w,M),m.push(w,x,M)}}function y(){for(let S=0;S<=e;S++)for(let v=0;v<=i;v++)c.x=S/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Xl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Xs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Qf(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Qf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(s){let t={};for(let e=0;e<s.length;e++){let n=Xs(s[e]);for(let i in n)t[i]=n[i]}return t}function Qf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Mg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Ji={clone:Xs,merge:mn},Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Mg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(i.value);break;case"v2":this.uniforms[n].value=new st().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Br=class extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zn=class extends we{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Zl=class extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jl=class extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function El(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var fs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$l=class extends fs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case uu:r=t,o=2*e-n;break;case du:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uu:a=t,l=2*n-e;break;case du:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,S=(-1-f)*p+(1.5+f)*_+.5*m,v=f*p-f*_;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+y*a[c+E]+S*a[l+E]+v*a[d+E];return r}},Kl=class extends fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ql=class extends fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},jl=class extends fs{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let _=a[c+m],p=a[l+m],g=f*u+m*2,y=d[g],S=d[g+1],v=t*u+m*2,E=h[v],w=h[v+1],x=Eg(n,e,y,E,i);r[m]=Qp(x,_,S,w,p)}return r}};function Qp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Tg(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Eg(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Qp(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Tg(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var kn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),El(t.settings)&&(n.settings={inTangents:Mr(t.settings.inTangents,Array),outTangents:Mr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new jl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case Rl:e=this.InterpolantFactoryMethodSmooth;break;case cu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return cu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;El(this.settings)&&(jf(this.settings.inTangents,t),jf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;El(this.settings)&&(tp(this.settings.inTangents,t),tp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&E1(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,El(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function jf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function tp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ol;var ps=class extends kn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ra;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};tc.prototype.ValueTypeName="color";var ec=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};ec.prototype.ValueTypeName="number";var nc=class extends fs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},eo=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends kn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ra;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};ic.prototype.ValueTypeName="vector";var _u={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(ep(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!ep(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ep(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var sc=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jp=new sc,Bs=class{constructor(t){this.manager=t!==void 0?t:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},xu=class extends Error{constructor(t,e){super(t),this.response=e}},no=class extends Bs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=_u.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Fi[t]!==void 0){Fi[t].push({onLoad:e,onProgress:n,onError:i});return}Fi[t]=[],Fi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,_=0,p=new ReadableStream({start(g){y();function y(){d.read().then(({done:S,value:v})=>{if(S)g.close();else{_+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,x=h.length;w<x;w++){let M=h[w];M.onProgress&&M.onProgress(E)}g.enqueue(v),y()}},S=>{g.error(S)})}}});return new Response(p)}else throw new xu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_u.add(`file:${t}`,c);let h=Fi[t];delete Fi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zr=class extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},io=class extends zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lu=new de,np=new L,ip=new L,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;np.setFromMatrixPosition(t.matrixWorld),e.position.copy(np),ip.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ip),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ar||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(lu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wl=new L,Al=new xi,mi=new L,ro=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wl,Al,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wl,Al,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new L,sp=new st,rp=new st,rn=class extends ro{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,sp,rp),e.subVectors(rp,sp)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vu=class extends so{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ia*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},zs=class extends zr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},yu=class extends so{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},ks=class extends zr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},kr=class extends ro{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Sr=-90,br=1,Hr=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(Sr,br,t,e);i.layers=this.layers,this.add(i);let r=new rn(Sr,br,t,e);r.layers=this.layers,this.add(r);let a=new rn(Sr,br,t,e);a.layers=this.layers,this.add(a);let o=new rn(Sr,br,t,e);o.layers=this.layers,this.add(o);let l=new rn(Sr,br,t,e);l.layers=this.layers,this.add(l);let c=new rn(Sr,br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},rc=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},ao=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function wg(){this._document.hidden===!1&&this.reset()}var Wu="\\[\\]\\.:\\/",Ag=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",Rg="[^"+Wu.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",Xu),qg=/(WCOD+)?/.source.replace("WCOD",Rg),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),Lg=new RegExp("^"+Cg+qg+Pg+Ig+"$"),Dg=["material","materials","bones","map"],Mu=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(t){let e=Lg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Mu;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);var ap=new de,oo=class{constructor(t,e,n=0,i=1/0){this.ray=new Lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ap.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(t,e=!0,n=[]){return Su(t,this,n,e),n.sort(op),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Su(t[i],this,n,e);return n.sort(op),n}};function op(s,t){return s.distance-t.distance}function Su(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Su(r[a],t,e,!0)}}var lo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Gt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var bu=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},lp=new st,ac=class{constructor(t=new st(1/0,1/0),e=new st(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=lp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,lp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var co=class{constructor(){this.type="ShapePath",this.color=new Nt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Fs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let m=c[u],_=c[f];m.y>l.y!=_.y>l.y&&l.x<(_.x-m.x)*(l.y-m.y)/(_.y-m.y)+m.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new st);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let m=0;m<f;m++){let _=l[m],p=l[(m+1)%f];if(_.y>d!=p.y>d){let g=_.x+(d-_.y)*(p.x-_.x)/(p.y-_.y);u.push(g)}}return u.length>1&&(u.sort((m,_)=>m-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Gt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=oi.area(c);if(h===0)continue;let d=new ac;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new ds;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new Fs;h.curves=l.subPath.curves,c.holes.push(h)}return a}};function Yu(s,t,e,n){let i=Ng(n);switch(e){case Nu:return s*t;case fc:return s*t/i.components*i.byteLength;case pc:return s*t/i.components*i.byteLength;case gs:return s*t*2/i.components*i.byteLength;case mc:return s*t*2/i.components*i.byteLength;case Uu:return s*t*3/i.components*i.byteLength;case hi:return s*t*4/i.components*i.byteLength;case gc:return s*t*4/i.components*i.byteLength;case vo:case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xc:case yc:return Math.max(s,16)*Math.max(t,8)/4;case _c:case vc:return Math.max(s,8)*Math.max(t,8)/2;case Mc:case Sc:case Tc:case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bc:case bo:case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case kc:case Hc:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case To:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ng(s){switch(s){case wn:case Pu:return{byteLength:1,components:1};case Xr:case Iu:case an:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case ci:case hc:case $n:return{byteLength:4,components:1};case Lu:case Du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Mm(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fg(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,c3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f3="gl_FragColor = linearToOutputTexel( gl_FragColor );",p3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,C3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,q3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B3=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,z3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:zg,alphamap_pars_fragment:kg,alphatest_fragment:Hg,alphatest_pars_fragment:Gg,aomap_fragment:Vg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:Yg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:$g,iridescence_fragment:Kg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:t3,clipping_planes_pars_vertex:e3,clipping_planes_vertex:n3,color_fragment:i3,color_pars_fragment:s3,color_pars_vertex:r3,color_vertex:a3,common:o3,defaultnormal_vertex:l3,displacementmap_pars_vertex:c3,displacementmap_vertex:h3,emissivemap_fragment:u3,emissivemap_pars_fragment:d3,colorspace_fragment:f3,colorspace_pars_fragment:p3,envmap_fragment:m3,envmap_common_pars_fragment:g3,envmap_pars_fragment:_3,envmap_pars_vertex:x3,envmap_physical_pars_fragment:C3,envmap_vertex:v3,fog_vertex:y3,fog_pars_vertex:M3,fog_fragment:S3,fog_pars_fragment:b3,gradientmap_pars_fragment:T3,lightmap_pars_fragment:E3,lights_lambert_fragment:w3,lights_lambert_pars_fragment:A3,lights_pars_begin:R3,lights_toon_fragment:q3,lights_toon_pars_fragment:P3,lights_phong_fragment:I3,lights_phong_pars_fragment:L3,lights_physical_fragment:D3,lights_physical_pars_fragment:N3,lights_fragment_begin:U3,lights_fragment_maps:F3,lights_fragment_end:O3,lightprobes_pars_fragment:B3,logdepthbuf_fragment:z3,logdepthbuf_pars_fragment:k3,logdepthbuf_pars_vertex:H3,logdepthbuf_vertex:G3,map_fragment:V3,map_pars_fragment:W3,map_particle_fragment:X3,map_particle_pars_fragment:Y3,metalnessmap_fragment:Z3,metalnessmap_pars_fragment:J3,morphinstance_vertex:$3,morphcolor_vertex:K3,morphnormal_vertex:Q3,morphtarget_pars_vertex:j3,morphtarget_vertex:t2,normal_fragment_begin:e2,normal_fragment_maps:n2,normal_pars_fragment:i2,normal_pars_vertex:s2,normal_vertex:r2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:o2,clearcoat_normal_fragment_maps:l2,clearcoat_pars_fragment:c2,iridescence_pars_fragment:h2,opaque_fragment:u2,packing:d2,premultiplied_alpha_fragment:f2,project_vertex:p2,dithering_fragment:m2,dithering_pars_fragment:g2,roughnessmap_fragment:_2,roughnessmap_pars_fragment:x2,shadowmap_pars_fragment:v2,shadowmap_pars_vertex:y2,shadowmap_vertex:M2,shadowmask_pars_fragment:S2,skinbase_vertex:b2,skinning_pars_vertex:T2,skinning_vertex:E2,skinnormal_vertex:w2,specularmap_fragment:A2,specularmap_pars_fragment:R2,tonemapping_fragment:C2,tonemapping_pars_fragment:q2,transmission_fragment:P2,transmission_pars_fragment:I2,uv_pars_fragment:L2,uv_pars_vertex:D2,uv_vertex:N2,worldpos_vertex:U2,background_vert:F2,background_frag:O2,backgroundCube_vert:B2,backgroundCube_frag:z2,cube_vert:k2,cube_frag:H2,depth_vert:G2,depth_frag:V2,distance_vert:W2,distance_frag:X2,equirect_vert:Y2,equirect_frag:Z2,linedashed_vert:J2,linedashed_frag:$2,meshbasic_vert:K2,meshbasic_frag:Q2,meshlambert_vert:j2,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},Et={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ti={basic:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:mn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:mn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:mn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:mn([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:mn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:mn([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:mn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:mn([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:mn([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:mn([Et.lights,Et.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Ti.physical={uniforms:mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Zc={r:0,b:0,g:0},__=new de,Sm=new Zt;Sm.set(-1,0,0,0,1,0,0,0,1);function x_(s,t,e,n,i,r){let a=new Nt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(y){let S=!1,v=f(y);v===null?p(a,o):v&&v.isColor&&(p(v,1),S=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new ee(new Fn(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Xs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sm),c.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ee(new Bn(2,2),new Ne({name:"BackgroundMaterial",uniforms:Xs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Zc,Vu(s)),e.buffers.color.setClear(Zc.r,Zc.g,Zc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:m,addToRenderList:_,dispose:g}}function v_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(P,D,O,q,F){let k=!1,z=d(P,q,O,D);r!==z&&(r=z,c(r.object)),k=f(P,q,O,F),k&&m(P,q,O,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(P,D,O,q),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,D,O,q){let F=q.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let z=P.isInstancedMesh===!0?P.id:0,Q=k[z];Q===void 0&&(Q={},k[z]=Q);let W=Q[O.id];W===void 0&&(W={},Q[O.id]=W);let $=W[F];return $===void 0&&($=u(l()),W[F]=$),$}function u(P){let D=[],O=[],q=[];for(let F=0;F<e;F++)D[F]=0,O[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,D,O,q){let F=r.attributes,k=D.attributes,z=0,Q=O.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=F[W],gt=k[W];if(gt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),tt===void 0||tt.attribute!==gt||gt&&tt.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==q}function m(P,D,O,q){let F={},k=D.attributes,z=0,Q=O.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=k[W];tt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));let gt={};gt.attribute=tt,tt&&tt.data&&(gt.data=tt.data),F[W]=gt,z++}r.attributes=F,r.attributesNum=z,r.index=q}function _(){let P=r.newAttributes;for(let D=0,O=P.length;D<O;D++)P[D]=0}function p(P){g(P,0)}function g(P,D){let O=r.newAttributes,q=r.enabledAttributes,F=r.attributeDivisors;O[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),F[P]!==D&&(s.vertexAttribDivisor(P,D),F[P]=D)}function y(){let P=r.newAttributes,D=r.enabledAttributes;for(let O=0,q=D.length;O<q;O++)D[O]!==P[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function S(P,D,O,q,F,k,z){z===!0?s.vertexAttribIPointer(P,D,O,F,k):s.vertexAttribPointer(P,D,O,q,F,k)}function v(P,D,O,q){_();let F=q.attributes,k=O.getAttributes(),z=D.defaultAttributeValues;for(let Q in k){let W=k[Q];if(W.location>=0){let $=F[Q];if($===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let tt=$.normalized,gt=$.itemSize,Lt=t.get($);if(Lt===void 0)continue;let X=Lt.buffer,lt=Lt.type,Rt=Lt.bytesPerElement,Ut=lt===s.INT||lt===s.UNSIGNED_INT||$.gpuType===hc;if($.isInterleavedBufferAttribute){let bt=$.data,Ft=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,pe=$.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let B=0;B<W.locationSize;B++)g(W.location+B,bt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let B=0;B<W.locationSize;B++)p(W.location+B);s.bindBuffer(s.ARRAY_BUFFER,X);for(let B=0;B<W.locationSize;B++)S(W.location+B,gt/W.locationSize,lt,tt,Ft*Rt,(pe+gt/W.locationSize*B)*Rt,Ut)}else{if($.isInstancedBufferAttribute){for(let bt=0;bt<W.locationSize;bt++)g(W.location+bt,$.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<W.locationSize;bt++)p(W.location+bt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let bt=0;bt<W.locationSize;bt++)S(W.location+bt,gt/W.locationSize,lt,tt,gt*Rt,gt/W.locationSize*bt*Rt,Ut)}}else if(z!==void 0){let tt=z[Q];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(W.location,tt);break;case 3:s.vertexAttrib3fv(W.location,tt);break;case 4:s.vertexAttrib4fv(W.location,tt);break;default:s.vertexAttrib1fv(W.location,tt)}}}}y()}function E(){A();for(let P in n){let D=n[P];for(let O in D){let q=D[O];for(let F in q){let k=q[F];for(let z in k)h(k[z].object),delete k[z];delete q[F]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let O in D){let q=D[O];for(let F in q){let k=q[F];for(let z in k)h(k[z].object),delete k[z];delete q[F]}}delete n[P.id]}function x(P){for(let D in n){let O=n[D];for(let q in O){let F=O[q];if(F[P.id]===void 0)continue;let k=F[P.id];for(let z in k)h(k[z].object),delete k[z];delete F[P.id]}}}function M(P){for(let D in n){let O=n[D],q=P.isInstancedMesh===!0?P.id:0,F=O[q];if(F!==void 0){for(let k in F){let z=F[k];for(let Q in z)h(z[Q].object),delete z[Q];delete F[k]}delete O[q],Object.keys(O).length===0&&delete n[D]}}}function A(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function y_(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==hi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==wn&&x!==$n&&!M&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:w}}function S_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new ai,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,S=y*4,v=g.clippingState||null;l.value=v,v=h(m,u,S,f);for(let E=0;E!==S;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ao=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ba(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fn(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Vi});r.uniforms.tEquirect.value=e;let a=new ee(i,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=yn),new Hr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},tm=256,b_=3,T_=20,bm=256,Tm=16,E_=3,w_=new L,A_=new Nt,Jr=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hr(1,10,null),this._boxMesh=new ee(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=w_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(A_));let p=new Hr(n,i,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(tm,Xp(t))}_fromTexture(t,e){t.mapping===Vs||t.mapping===Wr?this._setSize(t.image.length===0?tm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=em(t,!1,!1),n=Math.log2(t)-b_;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=em(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vs||t.mapping===Wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R_(),this._integrationMaterial=C_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Tm);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-E_)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(bm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=q_());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function em(s,t,e){return new Ao(s,{minFilter:Xi,generateMipmaps:t,type:an,colorSpace:Ca,depthBuffer:e})}function Ro(s,t,e){return new Ne({name:s,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:Ve,blending:Vi,depthTest:!1,depthWrite:!1})}function R_(){return Ro("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function C_(){return Ro("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function q_(){return Ro("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nm(){return Ro("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function im(){return Ro("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P_(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===oc||f===lc)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Ao(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===oc||f===lc,_=f===Vs||f===Wr;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Jr(s)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new Jr(s)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===oc?u.mapping=Vs:f===lc&&(u.mapping=Wr),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function I_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ns("WebGLRenderer: "+n+" extension not supported."),i}}}function L_(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],s.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=_!==null?_.array.length:p.array.length/3-1,S=p.count>=65535?Ua:Na,v=new S(Math.ceil(y/3)*6,1),E=v.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,A=0;M<y;M+=3){let C=x[M+0],P=x[M+1],D=x[M+2];E[A++]=C,E[A++]=P,E[A++]=P,E[A++]=D,E[A++]=D,E[A++]=C}}else{g=p.version;for(let x=0,M=0;x<y;x+=3){let A=x+0,C=x+1,P=x+2;E[M++]=A,E[M++]=C,E[M++]=C,E[M++]=P,E[M++]=P,E[M++]=A}}v.version=g;let w=r.get(m);w&&t.remove(w),r.set(m,v)}function u(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in i){let _=i[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function D_(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function U_(s,t,e){let n=new WeakMap,i=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*E*4*d),x=new La(w,v,E,d);x.type=$n,x.needsUpdate=!0;let M=S*4;for(let C=0;C<d;C++){let P=p[C],D=g[C],O=y[C],q=v*E*4*C;for(let F=0;F<P.count;F++){let k=F*M;f===!0&&(i.fromBufferAttribute(P,F),w[q+k+0]=i.x,w[q+k+1]=i.y,w[q+k+2]=i.z,w[q+k+3]=0),m===!0&&(i.fromBufferAttribute(D,F),w[q+k+4]=i.x,w[q+k+5]=i.y,w[q+k+6]=i.z,w[q+k+7]=0),_===!0&&(i.fromBufferAttribute(O,F),w[q+k+8]=i.x,w[q+k+9]=i.y,w[q+k+10]=i.z,w[q+k+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new st(v,E)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function F_(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var O_={[uo]:"LINEAR_TONE_MAPPING",[fo]:"REINHARD_TONE_MAPPING",[po]:"CINEON_TONE_MAPPING",[Gs]:"ACES_FILMIC_TONE_MAPPING",[go]:"AGX_TONE_MAPPING",[_o]:"NEUTRAL_TONE_MAPPING",[mo]:"CUSTOM_TONE_MAPPING"};function B_(s,t,e,n,i,r){let a=new Ye(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Oe;h.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ae([0,2,0,0,2,0],2));let d=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ee(h,d),f=new kr(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,y=null,S=[],v=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let x=0;x<S.length;x++){let M=S[x];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){S=E,v=S.length>0&&S[0].isRenderPass===!0;let w=a.width,x=a.height;S.length>0&&o===null&&(o=new Ye(w,x,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(w,x,{type:an,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&S.some(A=>A.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Hi(w,x),r===!0&&(c.format=Yi,c.type=Ws)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let A=0;A<S.length;A++){let C=S[A];C.setSize&&C.setSize(w,x),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,w){if(p||E.toneMapping===Si&&S.length===0)return!1;if(y=w,w!==null){let x=w.width,M=w.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return v===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Si,!0},this.hasRenderPass=function(){return v},this.end=function(E,w){E.toneMapping=g,p=!0;let x=a,M=o;for(let A=0;A<S.length;A++){let C=S[A];C.enabled!==!1&&(C.render(E,M,x,w),C.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,d.defines={},ne.getTransfer(m)===he&&(d.defines.SRGB_TRANSFER="");let A=O_[_];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Em=new Mn,wm=new Hi(1,1),Am=new za(1),Rm=new La,Cm=new kl,qm=new Ba,sm=[],rm=[],am=new Float32Array(16),om=new Float32Array(9),lm=new Float32Array(4);function $r(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=sm[i];if(r===void 0&&(r=new Float32Array(i),sm[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Kc(s,t){let e=rm[t];e===void 0&&(e=new Int32Array(t),rm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function z_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function H_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function G_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function V_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;lm.set(n),s.uniformMatrix2fv(this.addr,!1,lm),Je(e,n)}}function W_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;om.set(n),s.uniformMatrix3fv(this.addr,!1,om),Je(e,n)}}function X_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;am.set(n),s.uniformMatrix4fv(this.addr,!1,am),Je(e,n)}}function Y_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Z_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function J_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function $_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function K_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function Qc(s){return s.version===0&&(s.compareFunction=Bu,s.needsUpdate=!0),s}function ex(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Qc(wm):r=Em,e.setTexture2D(t||r,i)}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cm,i)}function ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Qc(Am):r=qm,e.setTextureCube(t||r,i)}function sx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rm,i)}function rx(s){switch(s){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return $_;case 5125:return K_;case 36294:return Q_;case 36295:return j_;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(s,t){s.uniform1fv(this.addr,t)}function ox(s,t){let e=$r(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){let e=$r(t,this.size,3);s.uniform3fv(this.addr,e)}function cx(s,t){let e=$r(t,this.size,4);s.uniform4fv(this.addr,e)}function hx(s,t){let e=$r(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ux(s,t){let e=$r(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function dx(s,t){let e=$r(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function fx(s,t){s.uniform1iv(this.addr,t)}function px(s,t){s.uniform2iv(this.addr,t)}function mx(s,t){s.uniform3iv(this.addr,t)}function gx(s,t){s.uniform4iv(this.addr,t)}function _x(s,t){s.uniform1uiv(this.addr,t)}function xx(s,t){s.uniform2uiv(this.addr,t)}function vx(s,t){s.uniform3uiv(this.addr,t)}function yx(s,t){s.uniform4uiv(this.addr,t)}function Mx(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Qc(wm):a=Em;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Sx(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cm,r[a])}function bx(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Qc(Am):a=qm;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function Tx(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Rm,r[a])}function Ex(s){switch(s){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return xx;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Tx}}var $u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}},Ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},Qu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function cm(s,t){s.seq.push(t),s.map[t.id]=t}function wx(s,t,e){let n=s.name,i=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),a=Zu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){cm(e,c===void 0?new $u(o,s,t):new Ku(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Qu(o),cm(e,d)),e=d}}}var Zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);wx(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function hm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ax=37297,Rx=0;function Cx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var um=new Zt;function qx(s){ne._getMatrix(um,ne.workingColorSpace,s);let t=`mat3( ${um.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case qa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function dm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cx(s.getShaderSource(t),o)}else return r}function Px(s,t){let e=qx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ix={[uo]:"Linear",[fo]:"Reinhard",[po]:"Cineon",[Gs]:"ACESFilmic",[go]:"AgX",[_o]:"Neutral",[mo]:"Custom"};function Lx(s,t){let e=Ix[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jc=new L;function Dx(){ne.getLuminanceCoefficients(Jc);let s=Jc.x.toFixed(4),t=Jc.y.toFixed(4),e=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Ux(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function wo(s){return s!==""}function fm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(s){return s.replace(Ox,Bx)}function Bx(s,t){let e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ju(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(zx,kx)}function kx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hx={[ho]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function Gx(s){return Hx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vx={[Wr]:"ENVMAP_MODE_REFRACTION"};function Wx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Vx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[qp]:"ENVMAP_BLENDING_MIX",[Pp]:"ENVMAP_BLENDING_ADD"};function Yx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[s.combine]||"ENVMAP_BLENDING_NONE"}function Zx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Wx(e),d=Yx(e),u=Nx(e),f=Ux(r),m=i.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(wo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(_=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?te.tonemapping_pars_fragment:"",e.toneMapping!==Si?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),a=ju(a),a=fm(a,e),a=pm(a,e),o=ju(o),o=fm(o,e),o=pm(o,e),a=mm(a),o=mm(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+_+a,S=g+p+o,v=hm(i,i.VERTEX_SHADER,y),E=hm(i,i.FRAGMENT_SHADER,S);i.attachShader(m,v),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(C){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(v)||"",O=i.getShaderInfoLog(E)||"",q=P.trim(),F=D.trim(),k=O.trim(),z=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,E);else{let W=dm(i,v,"vertex"),$=dm(i,E,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+W+`
`+$)}else q!==""?Gt("WebGLProgram: Program Info Log:",q):(F===""||k==="")&&(Q=!1);Q&&(C.diagnostics={runnable:z,programLog:q,vertexShader:{log:F,prefix:_},fragmentShader:{log:k,prefix:p}})}i.deleteShader(v),i.deleteShader(E),x=new Zr(i,m),M=Fx(i,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(m,Ax)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=E,this}var Jx=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ed(t),e.set(t,n)),n}},ed=class{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}};function $x(s){return s===gs||s===bo||s===To}function Kx(s,t,e,n,i,r){let a=new qr,o=new td,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,A,C,P,D){let O=C.fog,q=P.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||F,k),Q=u[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=$!==void 0?$.length:0,gt=0;q.morphAttributes.position!==void 0&&(gt=1),q.morphAttributes.normal!==void 0&&(gt=2),q.morphAttributes.color!==void 0&&(gt=3);let Lt,X,lt,Rt;if(Q){let Tt=Ti[Q];Lt=Tt.vertexShader,X=Tt.fragmentShader}else{Lt=x.vertexShader,X=x.fragmentShader;let Tt=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,Tt,me),lt=Tt.id,Rt=me.id}let Ut=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Ft=P.isInstancedMesh===!0,pe=P.isBatchedMesh===!0,B=!!x.map,ft=!!x.matcap,vt=!!z,Z=vt&&z.isPMREMTexture===!0,it=!!x.aoMap,rt=!!x.lightMap,ht=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,Bt=!!x.displacementMap,Ct=!!x.emissiveMap,zt=!!x.metalnessMap,Vt=!!x.roughnessMap,Qt=x.anisotropy>0,U=x.clearcoat>0,ye=x.diffuseRoughness>0,Jt=x.dispersion>0,Xt=x.retroreflectivity>0,ct=x.iridescence>0,Me=x.sheen>0,Ht=x.transmission>0,Yt=Qt&&!!x.anisotropyMap,R=U&&!!x.clearcoatMap,b=U&&!!x.clearcoatNormalMap,G=U&&!!x.clearcoatRoughnessMap,at=ye&&!!x.diffuseRoughnessMap,nt=ct&&!!x.iridescenceMap,pt=ct&&!!x.iridescenceThicknessMap,Mt=Me&&!!x.sheenColorMap,K=Me&&!!x.sheenRoughnessMap,j=!!x.specularMap,_t=!!x.specularColorMap,I=!!x.specularIntensityMap,et=Ht&&!!x.transmissionMap,J=Ht&&!!x.thicknessMap,xt=!!x.gradientMap,dt=!!x.alphaMap,mt=x.alphaTest>0,Ot=!!x.alphaHash,jt=!!x.extensions,ot=Si;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ot=s.toneMapping);let kt=Z?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Kt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:X,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:Rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:pe,batchingColor:pe&&P._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&P.instanceColor!==null,instancingMorph:Ft&&P.morphTexture!==null,outputColorSpace:Ut===null?s.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:B,matcap:ft,envMap:vt,envMapMode:vt&&z.mapping,envMapPMREM:Z,envMapMaxLod:Z?kt.length-1:null,envMapSize:Z?kt[0].width:null,aoMap:it,lightMap:rt,bumpMap:ht,normalMap:ut,displacementMap:Bt,emissiveMap:Ct,normalMapObjectSpace:ut&&x.normalMapType===Dp,normalMapTangentSpace:ut&&x.normalMapType===Yc,packedNormalMap:ut&&x.normalMapType===Yc&&$x(x.normalMap.format),metalnessMap:zt,roughnessMap:Vt,anisotropy:Qt,anisotropyMap:Yt,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:ye,diffuseRoughnessMap:at,dispersion:Jt,retroreflection:Xt,iridescence:ct,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:Me,sheenColorMap:Mt,sheenRoughnessMap:K,specularMap:j,specularColorMap:_t,specularIntensityMap:I,transmission:Ht,transmissionMap:et,thicknessMap:J,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Vr&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Ot,combine:x.combine,mapUv:B&&f(x.map.channel),aoMapUv:it&&f(x.aoMap.channel),lightMapUv:rt&&f(x.lightMap.channel),bumpMapUv:ht&&f(x.bumpMap.channel),normalMapUv:ut&&f(x.normalMap.channel),displacementMapUv:Bt&&f(x.displacementMap.channel),emissiveMapUv:Ct&&f(x.emissiveMap.channel),metalnessMapUv:zt&&f(x.metalnessMap.channel),roughnessMapUv:Vt&&f(x.roughnessMap.channel),anisotropyMapUv:Yt&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:_t&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:et&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:dt&&f(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ut||Qt),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(B||dt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:gt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:B&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:jt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&x.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)M.push(A),M.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(p(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let M=u[x.type],A;if(M){let C=Ti[M];A=Ji.clone(C.uniforms)}else A=x.uniforms;return A}function S(x,M){let A=h.get(M);return A!==void 0?++A.usedTimes:(A=new Zx(s,M,x,i),c.push(A),h.set(M,A)),A}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:w}}function Qx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function jx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function _m(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,_,p,g){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=a(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=g),t++,y}function l(u,f,m,_,p,g,y){y.reversedDepth===!0&&(p=-p);let S=o(u,f,m,_,p,g);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):e.push(S)}function c(u,f,m,_,p,g){let y=o(u,f,m,_,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||jx),n.length>1&&n.sort(f||_m),i.length>1&&i.sort(f||_m)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function t4(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new xm,s.set(n,[a])):i>=r.length?(a=new xm,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function e4(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Nt};break;case"SpotLight":e={position:new L,direction:new L,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function n4(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var i4=0;function s4(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function r4(s){let t=new e4,e=n4(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,y=0,S=0,v=0,E=0,w=0,x=0,M=0,A=0,C=0;c.sort(s4);for(let D=0,O=c.length;D<O;D++){let q=c[D],F=q.color,k=q.intensity,z=q.distance,Q=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===gs?Q=q.shadow.map.texture:Q=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(q.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(q.sh.coefficients[W],k);C++}else if(q.isSunLight){let W=t.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let $=q.shadow,tt=e.get(q);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=tt,n.sunShadowMap[m]=Q;let gt=$.getViewportCount();for(let Lt=0;Lt<gt;Lt++)n.sunShadowMatrix[_+Lt]=$.getMatrix(Lt),n.sunShadowCascade[_+Lt]=$._cascadeData[Lt];_+=gt,m++}n.sun[f]=W,f++}else if(q.isDirectionalLight){let W=t.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let $=q.shadow,tt=e.get(q);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=q.shadow.matrix,E++}n.directional[p]=W,p++}else if(q.isSpotLight){let W=t.get(q);W.position.setFromMatrixPosition(q.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=z,W.coneCos=Math.cos(q.angle),W.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),W.decay=q.decay,n.spot[y]=W;let $=q.shadow;if(q.map&&(n.spotLightMap[M]=q.map,M++,$.updateMatrices(q),q.castShadow&&A++),n.spotLightMatrix[y]=$.matrix,q.castShadow){let tt=e.get(q);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.spotShadow[y]=tt,n.spotShadowMap[y]=Q,x++}y++}else if(q.isRectAreaLight){let W=t.get(q);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(q.width*.5,0,0),W.halfHeight.set(0,q.height*.5,0),n.rectArea[S]=W,S++}else if(q.isPointLight){let W=t.get(q);if(W.color.copy(q.color).multiplyScalar(q.intensity),W.distance=q.distance,W.decay=q.decay,q.castShadow){let $=q.shadow,tt=e.get(q);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=q.shadow.matrix,w++}n.point[g]=W,g++}else if(q.isHemisphereLight){let W=t.get(q);W.skyColor.copy(q.color).multiplyScalar(k),W.groundColor.copy(q.groundColor).multiplyScalar(k),n.hemi[v]=W,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==x||P.numSpotMaps!==M||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=S,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=x,P.numSpotMaps=M,P.numLightProbes=C,n.version=i4++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),u++}else if(v.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function vm(s){let t=new r4(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a4(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new vm(s),t.set(i,[o])):r>=a.length?(o=new vm(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var o4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c4=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],h4=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ym=new de,Eo=new L,Ju=new L;function u4(s,t,e){let n=new us,i=new st,r=new st,a=new Ee,o=new Zl,l=new Jl,c={},h=e.maxTextureSize,d={[Mi]:Ve,[Ve]:Mi,[En]:En},u=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:o4,fragmentShader:l4}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Oe;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ee(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let g=this.type;this.render=function(w,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===up&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ho);let A=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Vi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=g!==this.type;O&&x.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(F=>F.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,F=w.length;q<F;q++){let k=w[q],z=k.shadow;if(z===void 0){Gt("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Q=z.getFrameExtents();i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gr){if(k.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ye(i.x,i.y,{format:gs,type:an,minFilter:yn,magFilter:yn,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Hi(i.x,i.y,$n),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Bi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en}else k.isPointLight?(z.map=new Ao(i.x),z.map.depthTexture=new za(i.x,ci)):(z.map=new Ye(i.x,i.y),z.map.depthTexture=new Hi(i.x,i.y,ci)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Bi,this.type===ho?(z.map.depthTexture.compareFunction=W?Ou:Fu,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let $=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,M);let tt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let gt=0;gt<$;gt++){let Lt=z.getCamera(gt);if(k.isPointLight){let X=z.camera,lt=z.matrix,Rt=k.distance||X.far;Rt!==X.far&&(X.far=Rt,X.updateProjectionMatrix()),Eo.setFromMatrixPosition(k.matrixWorld),X.position.copy(Eo),Ju.copy(X.position),Ju.add(c4[gt]),X.up.copy(h4[gt]),X.lookAt(Ju),X.updateMatrixWorld(),lt.makeTranslation(-Eo.x,-Eo.y,-Eo.z),ym.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ym,X.coordinateSystem,X.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,gt),s.clear();else{gt===0&&(s.setRenderTarget(z.map),s.clear());let X=z.getViewport(gt);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),D.viewport(a)}n=z.getFrustum(gt),v(x,M,Lt,k,tt,this.type)}z.isPointLightShadow!==!0&&this.type===Gr&&y(z,M),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(A,C,P)};function y(w,x){let M=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ye(i.x,i.y,{format:gs,type:an}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,M,f,_,null)}function S(w,x,M,A){let C=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,O=x.uuid,q=c[D];q===void 0&&(q={},c[D]=q);let F=q[O];F===void 0&&(F=C.clone(),q[O]=F,x.addEventListener("dispose",E)),C=F}if(C.visible=x.visible,C.wireframe=x.wireframe,A===Gr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=M}return C}function v(w,x,M,A,C,P){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Gr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let q=t.update(w),F=w.material;if(Array.isArray(F)){let k=q.groups;for(let z=0,Q=k.length;z<Q;z++){let W=k[z],$=F[W.materialIndex];if($&&$.visible){let tt=S(w,$,A,P);w.onBeforeShadow(s,w,x,M,q,tt,W),s.renderBufferDirect(M,null,q,tt,w,W),w.onAfterShadow(s,w,x,M,q,tt,W)}}}else if(F.visible){let k=S(w,F,A,P);w.onBeforeShadow(s,w,x,M,q,k,null),s.renderBufferDirect(M,null,q,k,w,null),w.onAfterShadow(s,w,x,M,q,k,null)}}let O=w.children;for(let q=0,F=O.length;q<F;q++)v(O[q],x,M,A,C,P)}function E(w){w.target.removeEventListener("dispose",E);for(let M in c){let A=c[M],C=w.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function d4(s,t){function e(){let I=!1,et=new Ee,J=null,xt=new Ee(0,0,0,0);return{setMask:function(dt){J!==dt&&!I&&(s.colorMask(dt,dt,dt,dt),J=dt)},setLocked:function(dt){I=dt},setClear:function(dt,mt,Ot,jt,ot){ot===!0&&(dt*=jt,mt*=jt,Ot*=jt),et.set(dt,mt,Ot,jt),xt.equals(et)===!1&&(s.clearColor(dt,mt,Ot,jt),xt.copy(et))},reset:function(){I=!1,J=null,xt.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,J=null,xt=null,dt=null;return{setReversed:function(mt){if(et!==mt){let Ot=t.get("EXT_clip_control");mt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),et=mt;let jt=dt;dt=null,this.setClear(jt)}},getReversed:function(){return et},setTest:function(mt){mt?bt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(mt){J!==mt&&!I&&(s.depthMask(mt),J=mt)},setFunc:function(mt){if(et&&(mt=Wp[mt]),xt!==mt){switch(mt){case ql:s.depthFunc(s.NEVER);break;case Pl:s.depthFunc(s.ALWAYS);break;case Il:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case Ll:s.depthFunc(s.EQUAL);break;case Dl:s.depthFunc(s.GEQUAL);break;case Nl:s.depthFunc(s.GREATER);break;case Ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=mt}},setLocked:function(mt){I=mt},setClear:function(mt){dt!==mt&&(dt=mt,et&&(mt=1-mt),s.clearDepth(mt))},reset:function(){I=!1,J=null,xt=null,dt=null,et=!1}}}function i(){let I=!1,et=null,J=null,xt=null,dt=null,mt=null,Ot=null,jt=null,ot=null;return{setTest:function(kt){I||(kt?bt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(kt){et!==kt&&!I&&(s.stencilMask(kt),et=kt)},setFunc:function(kt,Kt,Tt){(J!==kt||xt!==Kt||dt!==Tt)&&(s.stencilFunc(kt,Kt,Tt),J=kt,xt=Kt,dt=Tt)},setOp:function(kt,Kt,Tt){(mt!==kt||Ot!==Kt||jt!==Tt)&&(s.stencilOp(kt,Kt,Tt),mt=kt,Ot=Kt,jt=Tt)},setLocked:function(kt){I=kt},setClear:function(kt){ot!==kt&&(s.clearStencil(kt),ot=kt)},reset:function(){I=!1,et=null,J=null,xt=null,dt=null,mt=null,Ot=null,jt=null,ot=null}}}let r=new e,a=new n,o=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,S=null,v=null,E=null,w=null,x=null,M=new Nt(0,0,0),A=0,C=!1,P=null,D=null,O=null,q=null,F=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Q>=2);let $=null,tt={},gt=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),X=new Ee().fromArray(gt),lt=new Ee().fromArray(Lt);function Rt(I,et,J,xt){let dt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(I,mt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<J;Ot++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(et+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return mt}let Ut={};Ut[s.TEXTURE_2D]=Rt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=Rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[s.TEXTURE_2D_ARRAY]=Rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=Rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(s.DEPTH_TEST),a.setFunc(Er),ht(!1),ut(Tu),bt(s.CULL_FACE),it(Vi);function bt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ft(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function pe(I,et){return u[I]!==et?(s.bindFramebuffer(I,et),u[I]=et,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=et),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=et),!0):!1}function B(I,et){let J=m,xt=!1;if(I){J=f.get(et),J===void 0&&(J=[],f.set(et,J));let dt=I.textures;if(J.length!==dt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Ot=dt.length;mt<Ot;mt++)J[mt]=s.COLOR_ATTACHMENT0+mt;J.length=dt.length,xt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,xt=!0);xt&&s.drawBuffers(J)}function ft(I){return _!==I?(s.useProgram(I),_=I,!0):!1}let vt={[Hs]:s.FUNC_ADD,[fp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};vt[mp]=s.MIN,vt[gp]=s.MAX;let Z={[_p]:s.ZERO,[xp]:s.ONE,[vp]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[Ep]:s.SRC_ALPHA_SATURATE,[bp]:s.DST_COLOR,[Mp]:s.DST_ALPHA,[yp]:s.ONE_MINUS_SRC_COLOR,[Ru]:s.ONE_MINUS_SRC_ALPHA,[Tp]:s.ONE_MINUS_DST_COLOR,[Sp]:s.ONE_MINUS_DST_ALPHA,[wp]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function it(I,et,J,xt,dt,mt,Ot,jt,ot,kt){if(I===Vi){p===!0&&(Ft(s.BLEND),p=!1);return}if(p===!1&&(bt(s.BLEND),p=!0),I!==dp){if(I!==g||kt!==C){if((y!==Hs||E!==Hs)&&(s.blendEquation(s.FUNC_ADD),y=Hs,E=Hs),kt)switch(I){case Vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wi:s.blendFunc(s.ONE,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",I);break}else switch(I){case Vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Eu:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",I);break}S=null,v=null,w=null,x=null,M.set(0,0,0),A=0,g=I,C=kt}return}dt=dt||et,mt=mt||J,Ot=Ot||xt,(et!==y||dt!==E)&&(s.blendEquationSeparate(vt[et],vt[dt]),y=et,E=dt),(J!==S||xt!==v||mt!==w||Ot!==x)&&(s.blendFuncSeparate(Z[J],Z[xt],Z[mt],Z[Ot]),S=J,v=xt,w=mt,x=Ot),(jt.equals(M)===!1||ot!==A)&&(s.blendColor(jt.r,jt.g,jt.b,ot),M.copy(jt),A=ot),g=I,C=!1}function rt(I,et){I.side===En?Ft(s.CULL_FACE):bt(s.CULL_FACE);let J=I.side===Ve;et&&(J=!J),ht(J),I.blending===Vr&&I.transparent===!1?it(Vi):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let xt=I.stencilWrite;o.setTest(xt),xt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(I){P!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),P=I)}function ut(I){I!==cp?(bt(s.CULL_FACE),I!==D&&(I===Tu?s.cullFace(s.BACK):I===hp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),D=I}function Bt(I){I!==O&&(z&&s.lineWidth(I),O=I)}function Ct(I,et,J){I?(bt(s.POLYGON_OFFSET_FILL),(q!==et||F!==J)&&(q=et,F=J,a.getReversed()&&(et=-et,J=-J),s.polygonOffset(et,J))):Ft(s.POLYGON_OFFSET_FILL)}function zt(I){I?bt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function Vt(I){I===void 0&&(I=s.TEXTURE0+k-1),$!==I&&(s.activeTexture(I),$=I)}function Qt(I,et,J){J===void 0&&($===null?J=s.TEXTURE0+k-1:J=$);let xt=tt[J];xt===void 0&&(xt={type:void 0,texture:void 0},tt[J]=xt),(xt.type!==I||xt.texture!==et)&&($!==J&&(s.activeTexture(J),$=J),s.bindTexture(I,et||Ut[I]),xt.type=I,xt.texture=et)}function U(){let I=tt[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ye(){try{s.compressedTexImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Xt(){try{s.texSubImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function ct(){try{s.texSubImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function Yt(){try{s.texStorage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function R(){try{s.texStorage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function b(){try{s.texImage2D(...arguments)}catch(I){Wt("WebGLState:",I)}}function G(){try{s.texImage3D(...arguments)}catch(I){Wt("WebGLState:",I)}}function at(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function nt(I,et){d[I]!==et&&(s.pixelStorei(I,et),d[I]=et)}function pt(I){X.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),X.copy(I))}function Mt(I){lt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),lt.copy(I))}function K(I,et){let J=c.get(et);J===void 0&&(J=new WeakMap,c.set(et,J));let xt=J.get(I);xt===void 0&&(xt=s.getUniformBlockIndex(et,I.name),s.uniformBlockBinding(et,xt,xt),J.set(I,xt))}function j(I,et,J){let dt=c.get(et).get(I);l[dt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,dt,J),l[dt]=J)}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,tt={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,y=null,S=null,v=null,E=null,w=null,x=null,M=new Nt(0,0,0),A=0,C=!1,P=null,D=null,O=null,q=null,F=null,X.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Ft,bindFramebuffer:pe,drawBuffers:B,useProgram:ft,setBlending:it,setMaterial:rt,setFlipSided:ht,setCullFace:ut,setLineWidth:Bt,setPolygonOffset:Ct,setScissorTest:zt,activeTexture:Vt,bindTexture:Qt,unbindTexture:U,compressedTexImage2D:ye,compressedTexImage3D:Jt,texImage2D:b,texImage3D:G,pixelStorei:nt,getParameter:at,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Yt,texStorage3D:R,texSubImage2D:Xt,texSubImage3D:ct,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ht,scissor:pt,viewport:Mt,reset:_t}}function f4(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):Pa("canvas")}function y(R,b,G){let at=1,nt=Yt(R);if((nt.width>G||nt.height>G)&&(at=G/Math.max(nt.width,nt.height)),at<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(at*nt.width),Mt=Math.floor(at*nt.height);u===void 0&&(u=g(pt,Mt));let K=b?g(pt,Mt):u;return K.width=pt,K.height=Mt,K.getContext("2d").drawImage(R,0,0,pt,Mt),Gt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+pt+"x"+Mt+")."),K}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function S(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(R,b,G,at,nt,pt=!1){if(R!==null){if(s[R]!==void 0)return s[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Mt;at&&(Mt=t.get("EXT_texture_norm16"),Mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8),G===s.UNSIGNED_SHORT&&Mt&&(K=Mt.R16_EXT),G===s.SHORT&&Mt&&(K=Mt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),b===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8),G===s.UNSIGNED_SHORT&&Mt&&(K=Mt.RG16_EXT),G===s.SHORT&&Mt&&(K=Mt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_SHORT&&Mt&&(K=Mt.RGB16_EXT),G===s.SHORT&&Mt&&(K=Mt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),b===s.RGBA){let j=pt?qa:ne.getTransfer(nt);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=j===he?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&Mt&&(K=Mt.RGBA16_EXT),G===s.SHORT&&Mt&&(K=Mt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,b){let G;return R?b===null||b===ci||b===Ws?G=s.DEPTH24_STENCIL8:b===$n?G=s.DEPTH32F_STENCIL8:b===Xr&&(G=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ci||b===Ws?G=s.DEPTH_COMPONENT24:b===$n?G=s.DEPTH_COMPONENT32F:b===Xr&&(G=s.DEPTH_COMPONENT16),G}function M(R,b){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=new WeakRef(R);n.get(R).__ref=b,m.add(b),_.register(R,b,b)}function C(R){let b=n.get(R).__ref;b!==void 0&&(m.delete(b),_.unregister(b))}function P(R){O(R.target)}function D(R){q(R.target)}function O(R){R.removeEventListener("dispose",P),C(R),k(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function q(R){R.removeEventListener("dispose",D),C(R),Q(R)}function F(){for(let R of m){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?q(b):O(b))}m.clear(),d.clear()}function k(R){let b=n.get(R);if(b.__webglInit===void 0)return;let G=R.source,at=f.get(G);if(at){let nt=at[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&z(R),Object.keys(at).length===0&&f.delete(G)}n.remove(R)}function z(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let G=R.source,at=f.get(G);delete at[b.__cacheKey],a.memory.textures--}function Q(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&O(G),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let pt=0;pt<b.__webglFramebuffer[nt].length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[nt][pt]);else s.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)s.deleteFramebuffer(b.__webglFramebuffer[nt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let at=R.textures;for(let nt=0,pt=at.length;nt<pt;nt++){let Mt=n.get(at[nt]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(at[nt])}n.remove(R)}let W=0;function $(){W=0}function tt(){return W}function gt(R){W=R}function Lt(){let R=W;return R>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function lt(R,b){let G=n.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let at=R.image;if(at===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(G,R,b);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function Rt(R,b){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){rt(G,R,b);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function Ut(R,b){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){rt(G,R,b);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function bt(R,b){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ht(G,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}let Ft={[wr]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Fl]:s.MIRRORED_REPEAT},pe={[en]:s.NEAREST,[Ip]:s.NEAREST_MIPMAP_NEAREST,[xo]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},B={[Up]:s.NEVER,[Bu]:s.ALWAYS,[Fp]:s.LESS,[Fu]:s.LEQUAL,[Op]:s.EQUAL,[Ou]:s.GEQUAL,[Bp]:s.GREATER,[zp]:s.NOTEQUAL};function ft(R,b){if(b.type===$n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===cc||b.magFilter===xo||b.magFilter===Xi||b.minFilter===yn||b.minFilter===cc||b.minFilter===xo||b.minFilter===Xi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ft[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ft[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ft[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,pe[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,B[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==xo&&b.minFilter!==Xi||b.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function vt(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P),A(b));let at=b.source,nt=f.get(at);nt===void 0&&(nt={},f.set(at,nt));let pt=X(b);if(pt!==R.__cacheKey){nt[pt]===void 0&&(nt[pt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[pt].usedTimes++;let Mt=nt[R.__cacheKey];Mt!==void 0&&(nt[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&z(b)),R.__cacheKey=pt,R.__webglTexture=nt[pt].texture}return G}function Z(R,b,G){return Math.floor(Math.floor(R/G)/b)}function it(R,b,G,at){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,at,b.data);else{pt.sort((I,et)=>I.start-et.start);let Mt=0;for(let I=1;I<pt.length;I++){let et=pt[Mt],J=pt[I],xt=et.start+et.count,dt=Z(J.start,b.width,4),mt=Z(et.start,b.width,4);J.start<=xt+1&&dt===mt&&Z(J.start+J.count-1,b.width,4)===dt?et.count=Math.max(et.count,J.start+J.count-et.start):(++Mt,pt[Mt]=J)}pt.length=Mt+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),_t=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let I=0,et=pt.length;I<et;I++){let J=pt[I],xt=Math.floor(J.start/4),dt=Math.ceil(J.count/4),mt=xt%b.width,Ot=Math.floor(xt/b.width),jt=dt,ot=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ot),e.texSubImage2D(s.TEXTURE_2D,0,mt,Ot,jt,ot,G,at,b.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function rt(R,b,G){let at=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(at=s.TEXTURE_3D);let nt=vt(R,b),pt=b.source;e.bindTexture(at,R.__webglTexture,s.TEXTURE0+G);let Mt=n.get(pt);if(pt.version!==Mt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ot=ne.getPrimaries(ne.workingColorSpace),kt=b.colorSpace===Zi?null:ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===Zi||ot===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let j=y(b.image,!1,i.maxTextureSize);j=Ht(b,j);let _t=r.convert(b.format,b.colorSpace),I=r.convert(b.type),et=w(b.internalFormat,_t,I,b.normalized,b.colorSpace,b.isVideoTexture);ft(at,b);let J,xt=b.mipmaps,dt=b.isVideoTexture!==!0,mt=Mt.__version===void 0||nt===!0,Ot=pt.dataReady,jt=M(b,j);if(b.isDepthTexture)et=x(b.format===Yi,b.type),mt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,et,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,et,j.width,j.height,0,_t,I,null));else if(b.isDataTexture)if(xt.length>0){dt&&mt&&e.texStorage2D(s.TEXTURE_2D,jt,et,xt[0].width,xt[0].height);for(let ot=0,kt=xt.length;ot<kt;ot++)J=xt[ot],dt?Ot&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,_t,I,J.data):e.texImage2D(s.TEXTURE_2D,ot,et,J.width,J.height,0,_t,I,J.data);b.generateMipmaps=!1}else dt?(mt&&e.texStorage2D(s.TEXTURE_2D,jt,et,j.width,j.height),Ot&&it(b,j,_t,I)):e.texImage2D(s.TEXTURE_2D,0,et,j.width,j.height,0,_t,I,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){dt&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,et,xt[0].width,xt[0].height,j.depth);for(let ot=0,kt=xt.length;ot<kt;ot++)if(J=xt[ot],b.format!==hi)if(_t!==null)if(dt){if(Ot)if(b.layerUpdates.size>0){let Kt=Yu(J.width,J.height,b.format,b.type);for(let Tt of b.layerUpdates){let me=J.data.subarray(Tt*Kt/J.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Tt,J.width,J.height,1,_t,me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,J.width,J.height,j.depth,_t,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,et,J.width,J.height,j.depth,0,J.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,J.width,J.height,j.depth,_t,I,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,et,J.width,J.height,j.depth,0,_t,I,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{dt&&mt&&e.texStorage2D(s.TEXTURE_2D,jt,et,xt[0].width,xt[0].height);for(let ot=0,kt=xt.length;ot<kt;ot++)J=xt[ot],b.format!==hi?_t!==null?dt?Ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,_t,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,et,J.width,J.height,0,J.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Ot&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,_t,I,J.data):e.texImage2D(s.TEXTURE_2D,ot,et,J.width,J.height,0,_t,I,J.data)}else if(b.isDataArrayTexture)if(dt){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,et,j.width,j.height,j.depth),Ot)if(b.layerUpdates.size>0){let ot=Yu(j.width,j.height,b.format,b.type);for(let kt of b.layerUpdates){let Kt=j.data.subarray(kt*ot/j.data.BYTES_PER_ELEMENT,(kt+1)*ot/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,kt,j.width,j.height,1,_t,I,Kt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_t,I,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,et,j.width,j.height,j.depth,0,_t,I,j.data);else if(b.isData3DTexture)dt?(mt&&e.texStorage3D(s.TEXTURE_3D,jt,et,j.width,j.height,j.depth),Ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_t,I,j.data)):e.texImage3D(s.TEXTURE_3D,0,et,j.width,j.height,j.depth,0,_t,I,j.data);else if(b.isFramebufferTexture){if(mt)if(dt)e.texStorage2D(s.TEXTURE_2D,jt,et,j.width,j.height);else{let ot=j.width,kt=j.height;for(let Kt=0;Kt<jt;Kt++)e.texImage2D(s.TEXTURE_2D,Kt,et,ot,kt,0,_t,I,null),ot>>=1,kt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ot=s.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),j.parentNode!==ot){ot.appendChild(j),d.add(b),ot.onpaint=kt=>{let Kt=kt.changedElements;for(let Tt of d)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},ot.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Kt=s.RGBA,Tt=s.RGBA,me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Kt,Tt,me,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(xt.length>0){if(dt&&mt){let ot=Yt(xt[0]);e.texStorage2D(s.TEXTURE_2D,jt,et,ot.width,ot.height)}for(let ot=0,kt=xt.length;ot<kt;ot++)J=xt[ot],dt?Ot&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,_t,I,J):e.texImage2D(s.TEXTURE_2D,ot,et,_t,I,J);b.generateMipmaps=!1}else if(dt){if(mt){let ot=Yt(j);e.texStorage2D(s.TEXTURE_2D,jt,et,ot.width,ot.height)}Ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,I,j)}else e.texImage2D(s.TEXTURE_2D,0,et,_t,I,j);S(b)&&b.mipmapsAutoUpdate===!0&&v(at),Mt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ht(R,b,G){if(b.image.length!==6)return;let at=vt(R,b),nt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);let pt=n.get(nt);if(nt.version!==pt.__version||at===!0){e.activeTexture(s.TEXTURE0+G);let Mt=ne.getPrimaries(ne.workingColorSpace),K=b.colorSpace===Zi?null:ne.getPrimaries(b.colorSpace),j=b.colorSpace===Zi||Mt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let _t=b.isCompressedTexture||b.image[0].isCompressedTexture,I=b.image[0]&&b.image[0].isDataTexture,et=[];for(let Tt=0;Tt<6;Tt++)!_t&&!I?et[Tt]=y(b.image[Tt],!0,i.maxCubemapSize):et[Tt]=I?b.image[Tt].image:b.image[Tt],et[Tt]=Ht(b,et[Tt]);let J=et[0],xt=r.convert(b.format,b.colorSpace),dt=r.convert(b.type),mt=w(b.internalFormat,xt,dt,b.normalized,b.colorSpace),Ot=b.isVideoTexture!==!0,jt=pt.__version===void 0||at===!0,ot=nt.dataReady,kt=M(b,J);ft(s.TEXTURE_CUBE_MAP,b);let Kt;if(b.isDepthTexture){if(mt=x(b.format===Yi,b.type),jt)if(Ot)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,J.width,J.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,mt,J.width,J.height,0,xt,dt,null)}else if(_t){Ot&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,mt,J.width,J.height);for(let Tt=0;Tt<6;Tt++){Kt=et[Tt].mipmaps;for(let me=0;me<Kt.length;me++){let Qe=Kt[me];b.format!==hi?xt!==null?Ot?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me,0,0,Qe.width,Qe.height,xt,Qe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me,mt,Qe.width,Qe.height,0,Qe.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me,0,0,Qe.width,Qe.height,xt,dt,Qe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me,mt,Qe.width,Qe.height,0,xt,dt,Qe.data)}}}else{if(Kt=b.mipmaps,Ot&&jt){Kt.length>0&&kt++;let Tt=Yt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,mt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(I){Ot?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,et[Tt].width,et[Tt].height,xt,dt,et[Tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,mt,et[Tt].width,et[Tt].height,0,xt,dt,et[Tt].data);for(let me=0;me<Kt.length;me++){let ns=Kt[me].image[Tt].image;Ot?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me+1,0,0,ns.width,ns.height,xt,dt,ns.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me+1,mt,ns.width,ns.height,0,xt,dt,ns.data)}}else{Ot?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,xt,dt,et[Tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,mt,xt,dt,et[Tt]);for(let me=0;me<Kt.length;me++){let Qe=Kt[me];Ot?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me+1,0,0,xt,dt,Qe.image[Tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,me+1,mt,xt,dt,Qe.image[Tt])}}}S(b)&&b.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),pt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ut(R,b,G,at,nt,pt){let Mt=r.convert(G.format,G.colorSpace),K=r.convert(G.type),j=w(G.internalFormat,Mt,K,G.normalized,G.colorSpace),_t=n.get(b),I=n.get(G);if(I.__renderTarget=b,!_t.__hasExternalTextures){let et=Math.max(1,b.width>>pt),J=Math.max(1,b.height>>pt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,pt,j,et,J,b.depth,0,Mt,K,null):e.texImage2D(nt,pt,j,et,J,0,Mt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ct(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,nt,I.__webglTexture,0,Xt(b)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,nt,I.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(R,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let at=b.depthTexture,nt=at&&at.isDepthTexture?at.type:null,pt=x(b.stencilBuffer,nt),Mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ct(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(b),pt,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(b),pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,R)}else{let at=b.textures;for(let nt=0;nt<at.length;nt++){let pt=at[nt],Mt=r.convert(pt.format,pt.colorSpace),K=r.convert(pt.type),j=w(pt.internalFormat,Mt,K,pt.normalized,pt.colorSpace);ct(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(b),j,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(b),j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(R,b,G){let at=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(b.depthTexture);nt.__renderTarget=b;let pt=at?b.depthTexture.image[0]:b.depthTexture.image;(!nt.__webglTexture||pt.width!==b.width||pt.height!==b.height)&&(pt.width=b.width,pt.height=b.height,b.depthTexture.needsUpdate=!0),at?bt(b.depthTexture,0):lt(b.depthTexture,0);let Mt=nt.__webglTexture,K=Xt(b),j=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,_t=b.depthTexture.format===Yi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Bi)ct(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,j,Mt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,_t,j,Mt,0);else if(b.depthTexture.format===Yi)ct(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,j,Mt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,_t,j,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(R){let b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let at=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),at){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,at.removeEventListener("dispose",nt)};at.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=at}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let at=0;at<6;at++)Ct(b.__webglFramebuffer[at],R,at);else R.texture.mipmaps.length>0?Ct(b.__webglFramebuffer[0],R,0):Ct(b.__webglFramebuffer,R,0);else if(G){b.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[at]),b.__webglDepthbuffer[at]===void 0)b.__webglDepthbuffer[at]=s.createRenderbuffer(),Bt(b.__webglDepthbuffer[at],R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,pt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Bt(b.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,pt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,b,G){let at=n.get(R);b!==void 0&&ut(at.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&zt(R)}function Qt(R){let b=R.texture,G=n.get(R),at=n.get(b);R.addEventListener("dispose",D),A(R);let nt=R.textures,pt=R.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=b.version,a.memory.textures++),pt){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let j=0;j<b.mipmaps.length;j++)G.__webglFramebuffer[K][j]=s.createFramebuffer()}else G.__webglFramebuffer[K]=s.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)G.__webglFramebuffer[K]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let K=0,j=nt.length;K<j;K++){let _t=n.get(nt[K]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ct(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<nt.length;K++){let j=nt[K];G.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let _t=r.convert(j.format,j.colorSpace),I=r.convert(j.type),et=w(j.internalFormat,_t,I,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),J=Xt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,G.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),ft(s.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)ut(G.__webglFramebuffer[K][j],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ut(G.__webglFramebuffer[K],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(b)?v(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let K=0,j=nt.length;K<j;K++){let _t=nt[K],I=n.get(_t),et=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,I.__webglTexture),ft(et,_t),ut(G.__webglFramebuffer,R,_t,s.COLOR_ATTACHMENT0+K,et,0),S(_t)&&v(et)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,at.__webglTexture),ft(K,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)ut(G.__webglFramebuffer[j],R,b,s.COLOR_ATTACHMENT0,K,j);else ut(G.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,K,0);S(b)?v(K):b.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&zt(R)}function U(R){let b=R.textures;for(let G=0,at=b.length;G<at;G++){let nt=b[G];if(S(nt)&&nt.mipmapsAutoUpdate===!0){let pt=E(R),Mt=n.get(nt).__webglTexture;e.bindTexture(pt,Mt),v(pt),e.unbindTexture()}}}let ye=[];function Jt(R){if(R.samples>0){if(ct(R)===!1){let b=R.textures,G=R.width,at=R.height,nt=s.COLOR_BUFFER_BIT,pt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(R),K=b.length>1;if(K)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let I=n.get(b[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,G,at,0,0,G,at,nt,s.NEAREST),l===!0&&(ye.length=0,ye.push(s.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ye.push(pt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[_t]);let I=n.get(b[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,I,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xt(R){return Math.min(i.maxSamples,R.samples)}function ct(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ht(R,b){let G=R.colorSpace,at=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ca&&G!==Zi&&(ne.getTransfer(G)===he?(at!==hi||nt!==wn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",G)),b}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Lt,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=gt,this.setTexture2D=lt,this.setTexture2DArray=Rt,this.setTexture3D=Ut,this.setTextureCube=bt,this.rebindTextures=Vt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ct,this.dispose=F}function p4(s,t){function e(n,i=Zi){let r,a=ne.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===uc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return s.BYTE;if(n===Iu)return s.SHORT;if(n===Xr)return s.UNSIGNED_SHORT;if(n===hc)return s.INT;if(n===ci)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Uu)return s.RGB;if(n===hi)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Yi)return s.DEPTH_STENCIL;if(n===fc)return s.RED;if(n===pc)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===mc)return s.RG_INTEGER;if(n===gc)return s.RGBA_INTEGER;if(n===vo||n===yo||n===Mo||n===So)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===xc||n===vc||n===yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===Sc||n===bc||n===Tc||n===Ec||n===bo||n===wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===Sc)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tc)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return r.COMPRESSED_RG11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===qc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===Hc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Wc||n===To||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var m4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ka(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:m4,fragmentShader:g4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends _i{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new nd,g={},y=e.getContextAttributes(),S=null,v=null,E=[],w=[],x=new st,M=null,A=null,C=new rn;C.viewport=new Ee;let P=new rn;P.viewport=new Ee;let D=[C,P],O=new rc,q=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let lt=E[X];return lt===void 0&&(lt=new Pr,E[X]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(X){let lt=E[X];return lt===void 0&&(lt=new Pr,E[X]=lt),lt.getGripSpace()},this.getHand=function(X){let lt=E[X];return lt===void 0&&(lt=new Pr,E[X]=lt),lt.getHandSpace()};function k(X){let lt=w.indexOf(X.inputSource);if(lt===-1)return;let Rt=E[lt];Rt!==void 0&&(Rt.update(X.inputSource,X.frame,c||a),Rt.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Q);for(let X=0;X<E.length;X++){let lt=w[X];lt!==null&&(w[X]=null,E[X].disconnect(lt))}q=null,F=null,p.reset();for(let X in g)delete g[X];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),A!==null){let X=A.camera;X.fov=A.fov,X.zoom=A.zoom,X.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ut=null,bt=null;y.depth&&(bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?Yi:Bi,Ut=y.stencil?Ws:ci);let Ft={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ye(u.textureWidth,u.textureHeight,{format:hi,type:wn,depthTexture:new Hi(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ye(f.framebufferWidth,f.framebufferHeight,{format:hi,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(X){for(let lt=0;lt<X.removed.length;lt++){let Rt=X.removed[lt],Ut=w.indexOf(Rt);Ut>=0&&(w[Ut]=null,E[Ut].disconnect(Rt))}for(let lt=0;lt<X.added.length;lt++){let Rt=X.added[lt],Ut=w.indexOf(Rt);if(Ut===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=w.length){w.push(Rt),Ut=Ft;break}else if(w[Ft]===null){w[Ft]=Rt,Ut=Ft;break}if(Ut===-1)break}let bt=E[Ut];bt&&bt.connect(Rt)}}function W(X,lt){lt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(lt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let lt=X.near,Rt=X.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(Rt=p.depthFar)),O.near=P.near=C.near=lt,O.far=P.far=C.far=Rt,(q!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,F=O.far),O.layers.mask=X.layers.mask|6,C.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Ut=X.parent,bt=O.cameras;W(O,Ut);for(let Ft=0;Ft<bt.length;Ft++)W(bt[Ft],Ut);O.projectionMatrix.copy(C.projectionMatrix),O.projectionMatrixInverse.copy(C.projectionMatrixInverse),A===null&&X.isPerspectiveCamera&&(A={camera:X,fov:X.fov,zoom:X.zoom}),$(X,O,Ut)};function $(X,lt,Rt){Rt===null?X.matrix.copy(lt.matrixWorld):(X.matrix.copy(Rt.matrixWorld),X.matrix.invert(),X.matrix.multiply(lt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(lt.projectionMatrix),X.projectionMatrixInverse.copy(lt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(X){return g[X]};let tt=null;function gt(X,lt){if(h=lt.getViewerPose(c||a),m=lt,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ut=!1;Rt.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let B=0;B<Rt.length;B++){let ft=Rt[B],vt=null;if(f!==null)vt=f.getViewport(ft);else{let it=d.getViewSubImage(u,ft);vt=it.viewport,B===0&&(t.setRenderTargetTextures(v,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(v))}let Z=D[B];Z===void 0&&(Z=new rn,Z.layers.enable(B),Z.viewport=new Ee,D[B]=Z),Z.matrix.fromArray(ft.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ft.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(vt.x,vt.y,vt.width,vt.height),B===0&&(O.matrix.copy(Z.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(Z)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let B=d.getDepthInformation(Rt[0]);B&&B.isValid&&B.texture&&p.init(B,i.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let B=0;B<Rt.length;B++){let ft=Rt[B].camera;if(ft){let vt=g[ft];vt||(vt=new ka,g[ft]=vt);let Z=d.getCameraImage(ft);vt.sourceTexture=Z}}}}for(let Rt=0;Rt<E.length;Rt++){let Ut=w[Rt],bt=E[Rt];Ut!==null&&bt!==void 0&&bt.update(Ut,lt,c||a)}tt&&tt(X,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let Lt=new Mm;Lt.setAnimationLoop(gt),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}},_4=new de,Pm=new Zt;Pm.set(-1,0,0,0,1,0,0,0,1);function x4(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Vu(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ve&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ve&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,v=y.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(_4.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ve&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v4(s,t,e,n){let i={},r={};function a(y,S){let v=S.program;n.uniformBlockBinding(y,v,i[y.id])}function o(y,S){let v=i[y.id];v===void 0&&(m(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",p));let E=S.program;n.updateUBOMapping(y,E);let w=t.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let S=s.createBuffer(),v=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,v,E),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(y){let S=i[y.id],v=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,x=v.length;w<x;w++){let M=v[w];if(Array.isArray(M))for(let A=0,C=M.length;A<C;A++)h(M[A],w,A,E);else h(M,w,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,S,v,E){if(u(y,S,v,E)===!0){let w=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let A=0;A<x.length;A++){let C=x[A],P=_(C,!0);d(C,y.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,y.__data)}}function d(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function u(y,S,v,E){let w=y.value,x=S+"_"+v;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);let M=E[x],A=!1;for(let C=0;C<w.length;C++)f(w[C],M,C)===!0&&(A=!0);return A}return f(w,E,x)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let E=S[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function m(y){let S=y.uniforms,v=0,E=16;for(let x=0,M=S.length;x<M;x++){let A=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,P=A.length;C<P;C++){let D=A[C],O=Array.isArray(D.value)?D.value:[D.value],q=Array.isArray(S[x])||Array.isArray(D.value),F=v;for(let z=0,Q=O.length;z<Q;z++){let W=O[z],$=_(W,q),tt=v%E,gt=tt%$.boundary,Lt=tt+gt;v+=gt,Lt!==0&&E-Lt<$.storage&&(v+=E-Lt),z===0&&(F=v),v+=$.storage}let k=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new k((v-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function _(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let S=y.target;S.removeEventListener("dispose",p),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:a,update:o,dispose:g}}var y4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function M4(){return bi===null&&(bi=new Fa(y4,16,16,gs,an),bi.name="DFG_LUT",bi.minFilter=yn,bi.magFilter=yn,bi.wrapS=gi,bi.wrapT=gi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var $c=class{constructor(t={}){let{canvas:e=Hp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,p=new Set([gc,mc,pc]),g=new Set([wn,ci,Xr,Ws,uc,dc]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,w=null,x=[],M=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,O=null,q=null,F=null;this._outputColorSpace=Xe;let k=0,z=0,Q=null,W=-1,$=null,tt=new Ee,gt=new Ee,Lt=null,X=new Nt(0),lt=0,Rt=e.width,Ut=e.height,bt=1,Ft=null,pe=null,B=new Ee(0,0,Rt,Ut),ft=new Ee(0,0,Rt,Ut),vt=!1,Z=new us,it=new Hl,rt=!1,ht=!1,ut=new de,Bt=new L,Ct=new Ee,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Qt(){return Q===null?bt:1}let U=n;function ye(T,N){return e.getContext(T,N)}let Jt,Xt,ct,Me,Ht,Yt,R,b,G,at,nt,pt,Mt,K,j,_t,I,et,J,xt,dt,mt,Ot;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),U===null){let N="webgl2";if(U=ye(N,T),U===null)throw ye(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(T){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Wt("WebGLRenderer: "+T.message),T}function jt(){Jt=new I_(U),Jt.init(),dt=new p4(U,Jt),Xt=new M_(U,Jt,t,dt),ct=new d4(U,Jt),Xt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),O=U.createFramebuffer(),q=U.createFramebuffer(),F=U.createFramebuffer(),Me=new N_(U),Ht=new Qx,Yt=new f4(U,Jt,ct,Ht,Xt,dt,Me),R=new P_(C),b=new Fg(U),mt=new v_(U,b),G=new L_(U,b,Me,mt),at=new F_(U,G,b,mt,Me),et=new U_(U,Xt,Yt),j=new S_(Ht),nt=new Kx(C,R,Jt,Xt,mt,j),pt=new x4(C,Ht),Mt=new t4,K=new a4(Jt),I=new x_(C,R,ct,at,m,l),_t=new u4(C,at,Xt),Ot=new v4(U,Me,Xt,ct),J=new y_(U,Jt,Me),xt=new D_(U,Jt,Me),Me.programs=nt.programs,C.capabilities=Xt,C.extensions=Jt,C.properties=Ht,C.renderLists=Mt,C.shadowMap=_t,C.state=ct,C.info=Me}_!==wn&&(A=new B_(_,e.width,e.height,o,i,r));let ot=new id(C,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(T){T!==void 0&&(bt=T,this.setSize(Rt,Ut,!1))},this.getSize=function(T){return T.set(Rt,Ut)},this.setSize=function(T,N,Y=!0){if(ot.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=T,Ut=N,e.width=Math.floor(T*bt),e.height=Math.floor(N*bt),Y===!0&&(e.style.width=T+"px",e.style.height=N+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Rt*bt,Ut*bt).floor()},this.setDrawingBufferSize=function(T,N,Y){Rt=T,Ut=N,bt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(N*Y),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(_===wn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,N,Y,H){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,N,Y,H),ct.viewport(tt.copy(B).multiplyScalar(Qt()).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,N,Y,H){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,N,Y,H),ct.scissor(gt.copy(ft).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){ct.setScissorTest(vt=T)},this.setOpaqueSort=function(T){Ft=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,Y=!0){let H=0;if(T){let V=!1;if(Q!==null){let St=Q.texture.format;V=p.has(St)}if(V){let St=Q.texture.type,qt=g.has(St),yt=I.getClearColor(),wt=I.getClearAlpha(),Dt=yt.r,$t=yt.g,se=yt.b;qt?(y[0]=Dt,y[1]=$t,y[2]=se,y[3]=wt,U.clearBufferuiv(U.COLOR,0,y)):(S[0]=Dt,S[1]=$t,S[2]=se,S[3]=wt,U.clearBufferiv(U.COLOR,0,S))}else H|=U.COLOR_BUFFER_BIT}N&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),I.dispose(),Mt.dispose(),K.dispose(),Yt.dispose(),Ht.dispose(),R.dispose(),at.dispose(),G.dispose(),mt.dispose(),Ot.dispose(),nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",gf),ot.removeEventListener("sessionend",_f),Rs.stop()};function kt(T){T.preventDefault(),ku("WebGLRenderer: Context Lost."),P=!0}function Kt(){ku("WebGLRenderer: Context Restored."),P=!1;let T=Me.autoReset,N=_t.enabled,Y=_t.autoUpdate,H=_t.needsUpdate,V=_t.type;jt(),Me.autoReset=T,_t.enabled=N,_t.autoUpdate=Y,_t.needsUpdate=H,_t.type=V}function Tt(T){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){let N=T.target;N.removeEventListener("dispose",me),Qe(N)}function Qe(T){ns(T),Ht.remove(T)}function ns(T){let N=Ht.get(T).programs;N!==void 0&&(N.forEach(function(Y){nt.releaseProgram(Y)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,Y,H,V,St){N===null&&(N=zt);let qt=V.isMesh&&V.matrixWorld.determinantAffine()<0,yt=M1(T,N,Y,H,V);ct.setMaterial(H,qt);let wt=Y.index,Dt=1;if(H.wireframe===!0){if(wt=G.getWireframeAttribute(Y),wt===void 0)return;Dt=2}let $t=Y.drawRange,se=Y.attributes.position,Pt=$t.start*Dt,re=($t.start+$t.count)*Dt;St!==null&&(Pt=Math.max(Pt,St.start*Dt),re=Math.min(re,(St.start+St.count)*Dt)),wt!==null?(Pt=Math.max(Pt,0),re=Math.min(re,wt.count)):se!=null&&(Pt=Math.max(Pt,0),re=Math.min(re,se.count));let He=re-Pt;if(He<0||He===1/0)return;mt.setup(V,H,yt,Y,wt);let Se,xe=J;if(wt!==null&&(Se=b.get(wt),xe=xt,xe.setIndex(Se)),V.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*Qt()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(V.isLine){let hn=H.linewidth;hn===void 0&&(hn=1),ct.setLineWidth(hn*Qt()),V.isLineSegments?xe.setMode(U.LINES):V.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else V.isPoints?xe.setMode(U.POINTS):V.isSprite&&xe.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))xe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let hn=V._multiDrawStarts,It=V._multiDrawCounts,vn=V._multiDrawCount,ue=wt?b.get(wt).bytesPerElement:1,Cs=Ht.get(H).currentProgram.getUniforms();for(let un=0;un<vn;un++)Cs.setValue(U,"_gl_DrawID",un),xe.render(hn[un]/ue,It[un])}else if(V.isInstancedMesh)xe.renderInstances(Pt,He,V.count);else if(Y.isInstancedBufferGeometry){let hn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,hn);xe.renderInstances(Pt,He,It)}else xe.render(Pt,He)};function mf(T,N,Y,H){D!==null&&T.isNodeMaterial&&D.setObject(H,T),rt===!0&&j.setState(T,Y,!1),T.transparent===!0&&T.side===En&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,xa(T,N,H),T.side=Mi,T.needsUpdate=!0,xa(T,N,H),T.side=En):xa(T,N,H)}this.compile=function(T,N,Y=null){Y===null&&(Y=T),D!==null&&D.renderStart(T,N,Y),w=K.get(Y),w.init(N),M.push(w),Y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),ht=this.localClippingEnabled,rt=j.init(this.clippingPlanes,ht),rt===!0&&j.setGlobalState(this.clippingPlanes,N),D!==null&&_t.render(w.state.shadowsArray,Y,N);let H=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let St=V.material;if(St)if(Array.isArray(St))for(let qt=0;qt<St.length;qt++){let yt=St[qt];mf(yt,Y,N,V),H.add(yt)}else mf(St,Y,N,V),H.add(St)}),w=M.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(T,N,Y=null){let H=this.compile(T,N,Y);return new Promise(V=>{function St(){if(H.forEach(function(qt){let wt=Ht.get(qt).currentProgram;(wt===void 0||wt.isReady())&&H.delete(qt)}),H.size===0){V(T);return}setTimeout(St,10)}Jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Uh=null;function v1(T){Uh&&Uh(T)}function gf(){Rs.stop()}function _f(){Rs.start()}let Rs=new Mm;Rs.setAnimationLoop(v1),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(T){Uh=T,ot.setAnimationLoop(T),T===null?Rs.stop():Rs.start()},ot.addEventListener("sessionstart",gf),ot.addEventListener("sessionend",_f),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(T,N);let Y=ot.enabled===!0&&ot.isPresenting===!0,H=A!==null&&(Q===null||Y)&&A.begin(C,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(N),N=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,N,Q),w=K.get(T,M.length),w.init(N),w.state.textureUnits=Yt.getTextureUnits(),M.push(w),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?it.setFromArrayCamera(N):Z.setFromProjectionMatrix(ut,Jn,N.reversedDepth),ht=this.localClippingEnabled,rt=j.init(this.clippingPlanes,ht),E=Mt.get(T,x.length),E.init(),x.push(E),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let qt=C.xr.getDepthSensingMesh();qt!==null&&Fh(qt,N,-1/0,C.sortObjects)}Fh(T,N,0,C.sortObjects),E.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Ft,pe),Vt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Vt&&I.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),rt===!0&&j.beginShadows();let V=w.state.shadowsArray;if(_t.render(V,T,N),rt===!0&&j.endShadows(),(H&&A.hasRenderPass())===!1){let qt=E.opaque,yt=E.transmissive;if(w.setupLights(),N.isArrayCamera){let wt=N.cameras;if(yt.length>0)for(let Dt=0,$t=wt.length;Dt<$t;Dt++){let se=wt[Dt];vf(qt,yt,T,se)}Vt&&I.render(T);for(let Dt=0,$t=wt.length;Dt<$t;Dt++){let se=wt[Dt];xf(E,T,se,se.viewport)}}else yt.length>0&&vf(qt,yt,T,N),Vt&&I.render(T),xf(E,T,N)}Q!==null&&z===0&&(Yt.updateMultisampleRenderTarget(Q),Yt.updateRenderTargetMipmap(Q)),H&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,N),mt.resetDefaultState(),W=-1,$=null,M.pop(),M.length>0?(w=M[M.length-1],Yt.setTextureUnits(w.state.textureUnits),rt===!0&&j.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,D!==null&&D.renderEnd()};function Fh(T,N,Y,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let qt=N.isArrayCamera?it:Z;if(!T.frustumCulled||T.intersectsFrustum(qt)){H&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);let yt=at.update(T),wt=T.material;wt.visible&&E.push(T,yt,wt,Y,Ct.z,null,N)}}else if(T.isMesh||T.isLine||T.isPoints){let qt=N.isArrayCamera?it:Z;if(!T.frustumCulled||T.intersectsFrustum(qt)){let yt=at.update(T),wt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ct.copy(yt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){let Dt=yt.groups;for(let $t=0,se=Dt.length;$t<se;$t++){let Pt=Dt[$t],re=wt[Pt.materialIndex];re&&re.visible&&E.push(T,yt,re,Y,Ct.z,Pt,N)}}else wt.visible&&E.push(T,yt,wt,Y,Ct.z,null,N)}}}let St=T.children;for(let qt=0,yt=St.length;qt<yt;qt++)Fh(St[qt],N,Y,H)}function xf(T,N,Y,H){let{opaque:V,transmissive:St,transparent:qt}=T;w.setupLightsView(Y),rt===!0&&j.setGlobalState(C.clippingPlanes,Y),H&&ct.viewport(tt.copy(H)),V.length>0&&el(V,N,Y),St.length>0&&el(St,N,Y),qt.length>0&&el(qt,N,Y),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function vf(T,N,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Pt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Ye(1,1,{generateMipmaps:!0,type:Pt?an:wn,minFilter:Xi,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=w.state.transmissionRenderTarget[H.id],qt=H.viewport||tt;St.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(X),lt=C.getClearAlpha(),lt<1&&C.setClearColor(16777215,.5),C.clear(),Vt&&I.render(Y);let $t=C.toneMapping;C.toneMapping=Si;let se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),rt===!0&&j.setGlobalState(C.clippingPlanes,H),el(T,Y,H),Yt.updateMultisampleRenderTarget(St),Yt.updateRenderTargetMipmap(St),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let re=0,He=N.length;re<He;re++){let Se=N[re],{object:xe,geometry:hn,material:It,group:vn}=Se;if(It.side===En&&xe.layers.test(H.layers)){let ue=It.side;It.side=Ve,It.needsUpdate=!0,yf(xe,Y,H,hn,It,vn),It.side=ue,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Yt.updateMultisampleRenderTarget(St),Yt.updateRenderTargetMipmap(St))}C.setRenderTarget(yt,wt,Dt),C.setClearColor(X,lt),se!==void 0&&(H.viewport=se),C.toneMapping=$t}function el(T,N,Y){let H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,St=T.length;V<St;V++){let qt=T[V],{object:yt,geometry:wt,group:Dt}=qt,$t=qt.material;$t.allowOverride===!0&&H!==null&&($t=H),yt.layers.test(Y.layers)&&yf(yt,N,Y,wt,$t,Dt)}}function yf(T,N,Y,H,V,St){D!==null&&V.isNodeMaterial&&D.setObject(T,V),T.onBeforeRender(C,N,Y,H,V,St),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,N,Y,H,T,St),V.transparent===!0&&V.side===En&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,C.renderBufferDirect(Y,N,H,V,T,St),V.side=Mi,V.needsUpdate=!0,C.renderBufferDirect(Y,N,H,V,T,St),V.side=En):C.renderBufferDirect(Y,N,H,V,T,St),T.onAfterRender(C,N,Y,H,V,St)}function Mf(T){let N=0;for(let Y of T)Y.texture!==null&&N++;return N}function xa(T,N,Y){N.isScene!==!0&&(N=zt);let H=Ht.get(T),V=w.state.lights,St=w.state.shadowsArray,qt=V.state.version,yt=nt.getParameters(T,V.state,St,N,Y,w.state.lightProbeGridArray),wt=nt.getProgramCacheKey(yt),Dt=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let $t=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=R.get(T.envMap||H.environment,$t),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",me),Dt=new Map,H.programs=Dt,H.programVariants=new Map);let se=Dt.get(wt);if(se!==void 0){if(H.currentProgram===se&&H.lightsStateVersion===qt)return bf(T,yt),se}else yt.uniforms=nt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,yt),T.onBeforeCompile(yt,C),se=nt.acquireProgram(yt,wt),Dt.set(wt,se),H.uniforms=yt.uniforms;let Pt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=j.uniform),bf(T,yt),H.needsLights=b1(T),H.lightsStateVersion=qt,H.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Mf(w.state.lightProbeGridArray),H.currentProgram=se,H.uniformsList=null,se}function y1(T,N,Y,H,V){let St=Ht.get(T),qt=St.currentProgram.id+","+H+","+V,yt=St.programVariants.get(qt);return yt===void 0?(yt=xa(T,N,Y),St.programVariants.set(qt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=H,St.toneMapping=V),yt}function Sf(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Zr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function bf(T,N){let Y=Ht.get(T);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function M1(T,N,Y,H,V){N.isScene!==!0&&(N=zt),Yt.resetTextureUnits();let St=N.fog,qt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,yt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ne.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=R.get(H.envMap||qt,wt),$t=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pt=!!Y.morphAttributes.position,re=!!Y.morphAttributes.normal,He=!!Y.morphAttributes.color,Se=Si;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Se=C.toneMapping);let xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,hn=xe!==void 0?xe.length:0,It=Ht.get(H),vn=w.state.lights;if(rt===!0&&(ht===!0||T!==$)){let Ce=T===$&&H.id===W;j.setState(H,T,Ce)}let ue=!1,Cs=!1;H.version===It.__version?It.needsLights&&It.lightsStateVersion!==vn.state.version||V.isBatchedMesh&&It.batching===!1||!V.isBatchedMesh&&It.batching===!0||V.isBatchedMesh&&It.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&It.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||V.isInstancedMesh&&It.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&It.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&It.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&It.instancingMorph===!1&&V.morphTexture!==null||It.envMap!==Dt||H.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==j.numPlanes||It.numIntersection!==j.numIntersection)||It.vertexAlphas!==$t||It.vertexTangents!==se||It.morphTargets!==Pt||It.morphNormals!==re||It.morphColors!==He||It.morphTargetsCount!==hn||It.numLightProbeGrids!==Mf(w.state.lightProbeGridArray)?ue=!0:(It.outputColorSpace!==yt||It.toneMapping!==Se)&&(Cs=!0):(ue=!0,It.__version=H.version);let un=It.currentProgram;(ue===!0||Cs===!0)&&(un=Cs===!0?y1(H,N,V,yt,Se):xa(H,N,V),D&&H.isNodeMaterial&&D.onUpdateProgram(H,un,It));let nl=!1,is=!1,qs=!1,ce=un.getUniforms(),sn=It.uniforms;if(ct.useProgram(un.program)&&(nl=!0,is=!0,qs=!0),H.id!==W&&(W=H.id,is=!0),nl||$!==T){ct.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ce.setValue(U,"projectionMatrix",T.projectionMatrix),ce.setValue(U,"viewMatrix",T.matrixWorldInverse);let je=ce.map.cameraPosition;je!==void 0&&je.setValue(U,Bt.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,is=!0,qs=!0)}if(It.needsLights&&(vn.state.sunShadowMap.length>0&&ce.setValue(U,"sunShadowMap",vn.state.sunShadowMap,Yt),vn.state.directionalShadowMap.length>0&&ce.setValue(U,"directionalShadowMap",vn.state.directionalShadowMap,Yt),vn.state.spotShadowMap.length>0&&ce.setValue(U,"spotShadowMap",vn.state.spotShadowMap,Yt),vn.state.pointShadowMap.length>0&&ce.setValue(U,"pointShadowMap",vn.state.pointShadowMap,Yt)),V.isSkinnedMesh){ce.setOptional(U,V,"bindMatrix"),ce.setOptional(U,V,"bindMatrixInverse");let Ce=V.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ce.setValue(U,"boneTexture",Ce.boneTexture,Yt))}V.isBatchedMesh&&(ce.setOptional(U,V,"batchingTexture"),ce.setValue(U,"batchingTexture",V._matricesTexture,Yt),ce.setOptional(U,V,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",V._indirectTexture,Yt),ce.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",V._colorsTexture,Yt));let ni=Y.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&et.update(V,Y,un),(is||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,ce.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(sn.envMapIntensity.value=N.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=M4()),is){if(ce.setValue(U,"toneMappingExposure",C.toneMappingExposure),It.needsLights&&S1(sn,qs),St&&H.fog===!0&&pt.refreshFogUniforms(sn,St),pt.refreshMaterialUniforms(sn,H,bt,Ut,w.state.transmissionRenderTarget[T.id]),It.needsLights&&It.numLightProbeGrids>0){let Ce=v,je=0;for(let Pi of w.state.lightProbeGridArray)Pi.texture!==null&&(Ce.textures[je]=Pi.texture,Ce.min[je]=Pi.boundingBox.min,Ce.max[je]=Pi.boundingBox.max,Ce.resolution[je]=Pi.resolution,je++);for(let Pi in Ce)Ce[Pi].length=je;sn.probesSH.value=Ce.textures,sn.probesMin.value=Ce.min,sn.probesMax.value=Ce.max,sn.probesResolution.value=Ce.resolution}Zr.upload(U,Sf(It),sn,Yt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zr.upload(U,Sf(It),sn,Yt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(U,"center",V.center),ce.setValue(U,"modelViewMatrix",V.modelViewMatrix),ce.setValue(U,"normalMatrix",V.normalMatrix),ce.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Ce=H.uniformsGroups;for(let je=0,Pi=Ce.length;je<Pi;je++){let Ef=Ce[je];Ot.update(Ef,un),Ot.bind(Ef,un)}}return un}function S1(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function b1(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,N,Y){let H=Ht.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ht.get(T.texture).__webglTexture=N,Ht.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let Y=Ht.get(T);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,Y=0){Q=T,k=N,z=Y;let H=null,V=!1,St=!1;if(T){let yt=Ht.get(T);if(yt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(U.FRAMEBUFFER,yt.__webglFramebuffer),tt.copy(T.viewport),gt.copy(T.scissor),Lt=T.scissorTest,ct.viewport(tt),ct.scissor(gt),ct.setScissorTest(Lt),W=-1;return}else if(yt.__webglFramebuffer===void 0)Yt.setupRenderTarget(T);else if(yt.__hasExternalTextures)Yt.rebindTextures(T,Ht.get(T.texture).__webglTexture,Ht.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let $t=T.depthTexture;if(yt.__boundDepthTexture!==$t){if($t!==null&&Ht.has($t)&&(T.width!==$t.image.width||T.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(T)}}let wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Dt=Ht.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?H=Dt[N][Y]:H=Dt[N],V=!0):T.samples>0&&Yt.useMultisampledRTT(T)===!1?H=Ht.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[Y]:H=Dt,tt.copy(T.viewport),gt.copy(T.scissor),Lt=T.scissorTest}else tt.copy(B).multiplyScalar(bt).floor(),gt.copy(ft).multiplyScalar(bt).floor(),Lt=vt;if(Y!==0&&(H=O),ct.bindFramebuffer(U.FRAMEBUFFER,H)&&ct.drawBuffers(T,H),ct.viewport(tt),ct.scissor(gt),ct.setScissorTest(Lt),V){let yt=Ht.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,Y)}else if(St){let yt=N;for(let wt=0;wt<T.textures.length;wt++){let Dt=Ht.get(T.textures[wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,Y,yt)}}else if(T!==null&&Y!==0){let yt=Ht.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,Y)}W=-1};function Tf(T){let N=Ht.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=Xt.textureFormatReadable(T.format),N.__typeReadable=Xt.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,Y,H,V,St,qt,yt=0){if(!(T&&T.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qt!==void 0&&(wt=wt[qt],Array.isArray(wt)&&(wt=wt[0])),wt){ct.bindFramebuffer(U.FRAMEBUFFER,wt);try{let Dt=T.textures[yt],$t=Dt.format,se=Dt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+yt);let Pt=Tf(Dt);if(Pt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&Y>=0&&Y<=T.height-V&&U.readPixels(N,Y,H,V,dt.convert($t),dt.convert(se),St)}finally{let Dt=Q!==null?Ht.get(Q).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,N,Y,H,V,St,qt,yt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qt!==void 0&&(wt=wt[qt],Array.isArray(wt)&&(wt=wt[0])),wt)if(N>=0&&N<=T.width-H&&Y>=0&&Y<=T.height-V){ct.bindFramebuffer(U.FRAMEBUFFER,wt);let Dt=T.textures[yt],$t=Dt.format,se=Dt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+yt);let Pt=Tf(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(N,Y,H,V,dt.convert($t),dt.convert(se),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let He=Q!==null?Ht.get(Q).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,He);let Se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vp(U,Se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(re),U.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,Y=0){let H=Math.pow(2,-Y),V=Math.floor(T.image.width*H),St=Math.floor(T.image.height*H),qt=N!==null?N.x:0,yt=N!==null?N.y:0;Yt.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,qt,yt,V,St),ct.unbindTexture()},this.copyTextureToTexture=function(T,N,Y=null,H=null,V=0,St=0){let qt,yt,wt,Dt,$t,se,Pt,re,He,Se=T.isCompressedTexture?T.mipmaps[St]:T.image;if(Y!==null)qt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,wt=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,$t=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let ce=Math.pow(2,-V);qt=Math.floor(Se.width*ce),yt=Math.floor(Se.height*ce),T.isDataArrayTexture?wt=Se.depth:T.isData3DTexture?wt=Math.floor(Se.depth*ce):wt=1,Dt=0,$t=0,se=0}H!==null?(Pt=H.x,re=H.y,He=H.z):(Pt=0,re=0,He=0);let xe=dt.convert(N.format),hn=dt.convert(N.type),It;N.isData3DTexture?(Yt.setTexture3D(N,0),It=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Yt.setTexture2DArray(N,0),It=U.TEXTURE_2D_ARRAY):(Yt.setTexture2D(N,0),It=U.TEXTURE_2D),ct.activeTexture(U.TEXTURE0),ct.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),ct.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ct.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let vn=ct.getParameter(U.UNPACK_ROW_LENGTH),ue=ct.getParameter(U.UNPACK_IMAGE_HEIGHT),Cs=ct.getParameter(U.UNPACK_SKIP_PIXELS),un=ct.getParameter(U.UNPACK_SKIP_ROWS),nl=ct.getParameter(U.UNPACK_SKIP_IMAGES);ct.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),ct.pixelStorei(U.UNPACK_SKIP_ROWS,$t),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,se);let is=T.isDataArrayTexture||T.isData3DTexture,qs=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let ce=Ht.get(T),sn=Ht.get(N),ni=Ht.get(ce.__renderTarget),Ce=Ht.get(sn.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,ni.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let je=0;je<wt;je++)is&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.get(T).__webglTexture,V,se+je),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ht.get(N).__webglTexture,St,He+je)),U.blitFramebuffer(Dt,$t,Dt+qt,$t+yt,Pt,re,Pt+qt,re+yt,U.DEPTH_BUFFER_BIT,U.NEAREST);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Ht.has(T)){let ce=Ht.get(T),sn=Ht.get(N);ct.bindFramebuffer(U.READ_FRAMEBUFFER,q),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let ni=0;ni<wt;ni++)is?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.__webglTexture,V,se+ni):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,V),qs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,sn.__webglTexture,St,He+ni):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,sn.__webglTexture,St),V!==0?U.blitFramebuffer(Dt,$t,Dt+qt,$t+yt,Pt,re,Pt+qt,re+yt,U.COLOR_BUFFER_BIT,U.NEAREST):qs?U.copyTexSubImage3D(It,St,Pt,re,He+ni,Dt,$t,qt,yt):U.copyTexSubImage2D(It,St,Pt,re,Dt,$t,qt,yt);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else qs?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(It,St,Pt,re,He,qt,yt,wt,xe,hn,Se.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(It,St,Pt,re,He,qt,yt,wt,xe,Se.data):U.texSubImage3D(It,St,Pt,re,He,qt,yt,wt,xe,hn,Se):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,Pt,re,qt,yt,xe,hn,Se.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,Pt,re,Se.width,Se.height,xe,Se.data):U.texSubImage2D(U.TEXTURE_2D,St,Pt,re,qt,yt,xe,hn,Se);ct.pixelStorei(U.UNPACK_ROW_LENGTH,vn),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,Cs),ct.pixelStorei(U.UNPACK_SKIP_ROWS,un),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,nl),St===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(It),ct.unbindTexture()},this.initRenderTarget=function(T){Ht.get(T).__webglFramebuffer===void 0&&Yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Yt.setTextureCube(T,0):T.isData3DTexture?Yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Yt.setTexture2DArray(T,0):Yt.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){k=0,z=0,Q=null,ct.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var jc=class extends Bs{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new no(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){let l=r.parse(JSON.parse(o));e&&e(l)},n,i)}parse(t){return new Co(t)}},Co=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100,n="ltr"){let i=[],r=S4(t,e,this.data,n);for(let a=0,o=r.length;a<o;a++)i.push(...r[a].toShapes());return i}};function S4(s,t,e,n){let i=Array.from(s),r=t/e.resolution,a=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[],l=0,c=0;(n=="rtl"||n=="tb")&&i.reverse();for(let h=0;h<i.length;h++){let d=i[h];if(d===`
`)l=0,c-=a;else{let u=b4(d,r,l,c,e);n=="tb"?(l=0,c+=e.ascender*r):l+=u.offsetX,o.push(u.path)}}return o}function b4(s,t,e,n,i){let r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}let a=new co,o,l,c,h,d,u,f,m;if(r.o){let _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,g=_.length;p<g;)switch(_[p++]){case"m":o=_[p++]*t+e,l=_[p++]*t+n,a.moveTo(o,l);break;case"l":o=_[p++]*t+e,l=_[p++]*t+n,a.lineTo(o,l);break;case"q":c=_[p++]*t+e,h=_[p++]*t+n,d=_[p++]*t+e,u=_[p++]*t+n,a.quadraticCurveTo(d,u,c,h);break;case"b":c=_[p++]*t+e,h=_[p++]*t+n,d=_[p++]*t+e,u=_[p++]*t+n,f=_[p++]*t+e,m=_[p++]*t+n,a.bezierCurveTo(d,u,f,m,c,h);break}}return{offsetX:r.ha*t,path:a}}var Kr=class s extends Ka{constructor(t,e={}){let n=e.font;if(n===void 0)super();else{let i=n.generateShapes(t,e.size,e.direction);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(t){let e=t.options;return e.font=new Co(e.font.data),new s(e.text,e)}};var Qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},T4=new kr(-1,1,1,-1,0,1),rd=class extends Oe{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}},E4=new rd,_s=class{constructor(t){this._mesh=new ee(E4,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T4)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var jr=class extends Hn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _s(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qo=class extends Hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},th=class extends Hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var eh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jr(Qr),this.copyPass.material.blending=Vi,this.timer=new ao}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qo!==void 0&&(a instanceof qo?n=!0:a instanceof th&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nh=class extends Hn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Nt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var Im={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ta=class s extends Hn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new Nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:an,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ye(r,a,{type:an,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ye(r,a,{type:an,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Im;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Qr.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,premultipliedAlpha:!0,blending:Wi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Nt,this._oldClearAlpha=1,this._basic=new Un,this._fsQuad=new _s(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Ne({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ta.BlurDirectionX=new st(1,0);ta.BlurDirectionY=new st(0,1);var Po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ih=class extends Hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ji.clone(Po.uniforms),this.material=new Br({name:Po.name,uniforms:this.uniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===po?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===go?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===mo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function $i(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function km(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},Md,on,Ae,Qn=1e8,_e=1/Qn,fd=Math.PI*2,w4=fd/4,A4=0,Hm=Math.sqrt,R4=Math.cos,C4=Math.sin,$e=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Qi=function(t){return typeof t=="number"},mh=function(t){return typeof t>"u"},Ai=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},Sd=function(){return typeof window<"u"},sh=function(t){return Ue(t)||$e(t)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,q4=/random\([^)]+\)/g,P4=/,\s*/g,Lm=/(?:-?\.?\d|\.)+/gi,bd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ad=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Td=/[+-]=-?[.\d]+/,I4=/[^,'"\[\]\s]+/gi,L4=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ei,pd,Ed,Vn={},lh={},Vm,Wm=function(t){return(lh=na(t,Vn))&&xn},gh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},Xm=function(t,e){return t&&(Vn[t]=e)&&lh&&(lh[t]=e)||Vn},Bo=function(){return 0},D4={suppressEvents:!0,isStart:!0,kill:!1},rh={suppressEvents:!0,kill:!1},N4={suppressEvents:!0},wd={},vs=[],md={},Ym,An={},od={},Dm=30,ah=[],Ad="",Rd=function(t){var e=t[0],n,i;if(Ai(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ah.length;i--&&!ah[i].targetTest(e););n=ah[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Id(t[i],n)))||t.splice(i,1);return t},ys=function(t){return t._gsap||Rd(jn(t))[0]._gsap},Cd=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():mh(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},U4=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ch=function(){var t=vs.length,e=vs.slice(0),n,i;for(md={},vs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qd=function(t){return!!(t._initted||t._startAt||t.add)},Zm=function(t,e,n,i){vs.length&&!on&&ch(),t.render(e,n,i||!!(on&&e<0&&qd(t))),vs.length&&!on&&ch()},Jm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(I4).length<2?e:$e(t)?t.trim():t},$m=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},F4=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},na=function(t,e){for(var n in e)t[n]=e[n];return t},Nm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ai(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},hh=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Do=function(t){var e=t.parent||Ie,n=t.keyframes?F4(_n(t.keyframes)):Wn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},O4=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Km=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},_h=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ms=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ys=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},B4=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gd=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(rh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},z4=function s(t){return!t||t._ts&&s(t.parent)},Um=function(t){return t._repeat?ia(t._tTime,t=t.duration()+t._rDelay)*t:0},ia=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},uh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},xh=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||_e)||0))},vh=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),xh(t),n._dirty||Ys(n,t)),t},Qm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=uh(t.rawTime(),e),(!e._dur||Go(0,e.totalDuration(),n)-e._tTime>_e)&&e.render(n,!0)),Ys(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-_e}},wi=function(t,e,n,i){return e.parent&&Ms(e),e._start=Pe((Qi(n)?n:!n&&dh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Ie?Kn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Km(t,e,"_first","_last",t._sort?"_start":0),dh(e)||(t._recent=e),i||Qm(t,e),t._ts<0&&vh(t,t._tTime),t},jm=function(t,e){return(Vn.ScrollTrigger||gh("scrollTrigger",e))&&Vn.ScrollTrigger.create(e,t)},t0=function(t,e,n,i,r){if(Nd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ym!==Rn.frame)return vs.push(t),t._lazy=[r,i],1},k4=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},H4=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&k4(t)&&!(!t._initted&&dh(t))||(t._ts<0||t._dp._ts<0)&&!dh(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=Go(0,t._tDur,e),h=ia(l,o),t._yoyo&&h&1&&(a=1-a),h!==ia(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||on||i||t._zTime===_e||!e&&t._zTime){if(!t._initted&&t0(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?_e:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&gd(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ms(t,1),!n&&!on&&(Gn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},G4=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},sa=function(t,e,n,i){var r=t._repeat,a=Pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Pe(a*(r+1)+t._rDelay*r):a,o>0&&!i&&vh(t,t._tTime=t._tDur*o),t.parent&&xh(t),n||Ys(t.parent,t),t},Fm=function(t){return t instanceof gn?Ys(t):sa(t,t._dur)},V4={_start:0,endTime:Bo,totalDuration:Bo},Kn=function s(t,e,n){var i=t.labels,r=t._recent||V4,a=t.duration()>=Qn?r.endTime(!1):t._dur,o,l,c;return $e(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},No=function(t,e,n){var i=Qi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;a.immediateRender=Cn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Be(e[0],a,e[r+1])},Ss=function(t,e){return t||t===0?e(t):e},Go=function(t,e,n){return n<t?t:n>e?e:n},ln=function(t,e){return!$e(t)||!(e=L4.exec(t))?"":e[1]},W4=function(t,e,n){return Ss(n,function(i){return Go(t,e,i)})},_d=[].slice,e0=function(t,e){return t&&Ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ai(t[0]))&&!t.nodeType&&t!==Ei},X4=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return $e(i)&&!e||e0(i,1)?(r=n).push.apply(r,jn(i)):n.push(i)})||n},jn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):$e(t)&&!n&&(pd||!ra())?_d.call((e||Ed).querySelectorAll(t),0):_n(t)?X4(t,n):e0(t)?_d.call(t,0):t?[t]:[]},xd=function(t){return t=jn(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return jn(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||Ed.createElement("div"):t)}},n0=function(t){return t.sort(function(){return .5-Math.random()})},i0=function(t){if(Ue(t))return t;var e=Ai(t)?t:{each:t},n=Zs(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return $e(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=a[_],g,y,S,v,E,w,x,M,A;if(!p){if(A=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!A){for(x=-Qn;x<(x=m[A++].getBoundingClientRect().left)&&A<_;);A<_&&A--}for(p=a[_]=[],g=l?Math.min(A,_)*h-.5:i%A,y=A===Qn?0:l?_*d/A-.5:i/A|0,x=0,M=Qn,w=0;w<_;w++)S=w%A-g,v=y-(w/A|0),p[w]=E=c?Math.abs(c==="y"?v:S):Hm(S*S+v*v),E>x&&(x=E),E<M&&(M=E);i==="random"&&n0(p),p.max=x-M,p.min=M,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(A>_?_-1:c?c==="y"?_/A:A:Math.max(A,_/A))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=ln(e.amount||e.each)||0,n=n&&_<0?rv(n):n}return _=(p[u]-p.min)/p.max||0,Pe(p.b+(n?n(_):_)*p.v)+p.u}},vd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Qi(n)?0:ln(n))}},s0=function(t,e){var n=_n(t),i,r;return!n&&Ai(t)&&(i=n=t.radius||Qn,t.values?(t=jn(t.values),(r=!Qi(t[0]))&&(i*=i)):t=vd(t.increment)),Ss(e,n?Ue(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Qn,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,r||h===a||Qi(a)?h:h+ln(a)}:vd(t))},r0=function(t,e,n,i){return Ss(_n(t)?!e:n===!0?!!(n=0):!i,function(){return _n(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Y4=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Z4=function(t,e){return function(n){return t(parseFloat(n))+(e||ln(n))}},J4=function(t,e,n){return o0(t,e,0,1,n)},a0=function(t,e,n){return Ss(n,function(i){return t[~~e(i)]})},$4=function s(t,e,n){var i=e-t;return _n(t)?a0(t,s(0,t.length),e):Ss(n,function(r){return(i+(r-t)%i)%i+t})},K4=function s(t,e,n){var i=e-t,r=i*2;return _n(t)?a0(t,s(0,t.length-1),e):Ss(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},aa=function(t){return t.replace(q4,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(P4);return r0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},o0=function(t,e,n,i,r){var a=e-t,o=i-n;return Ss(r,function(l){return n+((l-t)/a*o||0)})},Q4=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=$e(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(_n(t)&&!_n(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=na(_n(t)?[]:{},t));if(!h){for(l in e)Ld.call(o,t,l,"get",e[l]);r=function(m){return Od(m,o)||(a?t.p:t)}}}return Ss(n,r)},Om=function(t,e,n){var i=t.labels,r=Qn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Gn=function(t,e,n){var i=t.vars,r=i[e],a=Ae,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&vs.length&&ch(),o&&(Ae=o),h=l?r.apply(c,l):r.call(c),Ae=a,h},Io=function(t){return Ms(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&Gn(t,"onInterrupt"),t},ea,l0=[],c0=function(t){if(t)if(t=!t.name&&t.default||t,Sd()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Bo,render:Od,add:Ld,kill:mv,modifier:pv,rawVars:0},a={targetTest:0,get:0,getSetter:yh,aliases:{},register:0};if(ra(),t!==i){if(An[e])return;Wn(i,Wn(hh(t,r),a)),na(i.prototype,na(r,hh(t,a))),An[i.prop=e]=i,t.targetTest&&(ah.push(i),wd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xm(e,i),t.register&&t.register(xn,i,bn)}else l0.push(t)},ve=255,Lo={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},ld=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},h0=function(t,e,n){var i=t?Qi(t)?[t>>16,t>>8&ve,t&ve]:0:Lo.black,r,a,o,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lo[t])i=Lo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Lm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=ld(l+1/3,r,a),i[1]=ld(l,r,a),i[2]=ld(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(bd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Lm)||Lo.transparent;i=i.map(Number)}return e&&!m&&(r=i[0]/ve,a=i[1]/ve,o=i[2]/ve,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},u0=function(t){var e=[],n=[],i=-1;return t.split(Ki).forEach(function(r){var a=r.match($s)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Bm=function(t,e,n){var i="",r=(t+i).match(Ki),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=h0(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=u0(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ki,"1").split($s),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ki),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},Ki=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),j4=/hsl[a]?\(/,Pd=function(t){var e=t.join(" "),n;if(Ki.lastIndex=0,Ki.test(e))return n=j4.test(e),t[1]=Bm(t[1],n),t[0]=Bm(t[0],n,u0(t[1])),!0},zo,Rn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,m=function _(p){var g=s()-i,y=p===!0,S,v,E,w;if((g>t||g<0)&&(n+=g-e),i+=g,E=i-n,S=E-a,(S>0||y)&&(w=++d.frame,u=E-d.time*1e3,d.time=E=E/1e3,a+=S+(S>=r?0:r-S),v=1),y||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](E,u,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Vm&&(!pd&&Sd()&&(Ei=pd=window,Ed=Ei.document||{},Vn.gsap=xn,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(xn.version),Wm(lh||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),l0.forEach(c0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},zo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,g,y){var S=g?function(v,E,w,x){p(v,E,w,x),d.remove(S)}:p;return d.remove(p),o[y?"unshift":"push"](S),ra(),S},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),ra=function(){return!zo&&Rn.wake()},oe={},tv=/^[\d.\-M][\d.\-,\s]/,ev=/["']/g,nv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(ev,"").trim():+c,i=l.substr(o+1).trim();return e},iv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sv=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[nv(e[1])]:iv(t).split(",").map(Jm)):oe._CE&&tv.test(t)?oe._CE("",t):n},rv=function(t){return function(e){return 1-t(1-e)}},Zs=function(t,e){return t&&(Ue(t)?t:oe[t]||sv(t))||e},Qs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Sn(t,function(o){oe[o]=Vn[o]=r,oe[a=o.toLowerCase()]=n;for(var l in r)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=r[l]}),r},d0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},cd=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/fd*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*C4((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:d0(o);return r=fd/r,l.config=function(c,h){return s(t,c,h)},l},hd=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:d0(n);return i.config=function(r){return s(t,r)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Qs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Qs("Elastic",cd("in"),cd("out"),cd());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Qs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Qs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Qs("Circ",function(s){return-(Hm(1-s*s)-1)});Qs("Sine",function(s){return s===1?1:-R4(s*w4)+1});Qs("Back",hd("in"),hd("out"),hd());oe.SteppedEase=oe.steps=Vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-_e;return function(o){return((i*Go(0,a,o)|0)+r)*n}}};Fo.ease=oe["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ad+=s+","+s+"Params,"});var Id=function(t,e){this.id=A4++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cd,this.set=e?e.getSetter:yh},ko=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,sa(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),zo||Rn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ra(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(vh(this,n),!r._dp||r.parent||Qm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_e||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ia(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-_e?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?uh(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-_e?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(Go(-Math.abs(this._delay),o,r),i!==!1),xh(this),B4(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ra(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==_e,a;if(r)for(this._tTime-=_e,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+_e){r=!1;break}a=a._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uh(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=N4);var i=on;return on=n,qd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Kn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-_e),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_e,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-_e)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Ue(n)?n:$m,l=function(){var h=i.then;i.then=null,r&&r(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Io(this)},s})();Wn(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_e,_prom:0,_ps:!1,_rts:1});var gn=(function(s){km(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Cn(n.sortChildren),Ie&&wi(n.parent||Ie,$i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jm($i(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return No(0,arguments,this),this},e.from=function(i,r,a){return No(1,arguments,this),this},e.fromTo=function(i,r,a,o){return No(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Do(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Be(i,r,Kn(this,a),1),this},e.call=function(i,r,a){return wi(this,Be.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Be(i,a,Kn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Do(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,Do(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Pe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,y,S,v,E,w,x;if(this!==Ie&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,S=this._ts,g=!S,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(u=Pe(h%p),h===l?(_=this._repeat,u=c):(E=Pe(h/p),_=~~E,_&&_===E&&(u=c,_--),u>c&&(u=c)),E=ia(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),w&&_&1&&(u=c-u,x=1),_!==E&&!this._lock){var M=w&&E&1,A=M===(w&&_&1);if(_<E&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(x?0:Pe(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=G4(this,Pe(o),Pe(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!E&&(Gn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-_e);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,a||on&&qd(f)),u!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=C?-_e:_e);break}}f=m}}if(y&&!r&&(this.pause(),y.render(u>=o?0:-_e)._zTime=u>=o?1:-1,this._ts))return this._start=v,xh(this),this.render(i,r,a);this._onUpdate&&!r&&Gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ms(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Gn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Qi(r)||(r=Kn(this,r,i)),!(i instanceof ko)){if(_n(i))return i.forEach(function(o){return a.add(o,r)}),this;if($e(i))return this.addLabel(i,r);if(Ue(i))i=Be.delayedCall(0,i);else return this}return this!==i?wi(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Qn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Be?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return $e(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&_h(this,i),i===this._recent&&(this._recent=this._last),Ys(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Kn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Be.delayedCall(0,r||Bo,a);return o.data="isPause",this._hasPause=1,wi(this,o,Kn(this,i))},e.removePause=function(i){var r=this._first;for(i=Kn(this,i);r;)r._start===i&&r.data==="isPause"&&Ms(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)xs!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=jn(i),l=this._first,c=Qi(r),h;l;)l instanceof Be?U4(l._targets,o)&&(c?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Kn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Be.to(a,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_e,onStart:function(){if(a.pause(),!f){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&sa(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},r));return u?m.render(0):m},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Wn({startAt:{time:Kn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Om(this,Kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Om(this,Kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_e)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ys(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ys(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Qn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Pe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;sa(a,a===Ie&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ie._ts&&(Zm(Ie,uh(i,Ie)),Ym=Rn.frame),Rn.frame>=Dm){Dm+=qn.autoSleep||120;var r=Ie._first;if((!r||!r._ts)&&qn.autoSleep&&Rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Rn.sleep()}}},t})(ko);Wn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var av=function(t,e,n,i,r,a,o){var l=new bn(this._pt,t,e,0,1,Fd,null,r),c=0,h=0,d,u,f,m,_,p,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=aa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),u=n.match(ad)||[];d=ad.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?Ks(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=ad.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Td.test(i)||g)&&(l.e=0),this._pt=l,l},Ld=function(t,e,n,i,r,a,o,l,c,h){Ue(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:Ue(d)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ue(d)?c?uv:p0:Ud,m;if($e(i)&&(~i.indexOf("random(")&&(i=aa(i)),i.charAt(1)==="="&&(m=Ks(u,i)+(ln(u)||0),(m||m===0)&&(i=m))),!h||u!==i||yd)return!isNaN(u*i)&&i!==""?(m=new bn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?fv:m0,0,f),c&&(m.fp=c),o&&m.modifier(o,this,t),this._pt=m):(!d&&!(e in t)&&gh(e,i),av.call(this,t,e,u,i,f,l||qn.stringFilter,c))},ov=function(t,e,n,i,r){if(Ue(t)&&(t=Uo(t,r,e,n,i)),!Ai(t)||t.style&&t.nodeType||_n(t)||Gm(t))return $e(t)?Uo(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Uo(t[o],r,e,n,i);return a},Dd=function(t,e,n,i,r,a){var o,l,c,h;if(An[t]&&(o=new An[t]).init(r,o.rawVars?e[t]:ov(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==ea))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},xs,yd,Nd=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:p,S=t._overwrite==="auto"&&!Md,v=t.timeline,E=i.easeReverse||d,w,x,M,A,C,P,D,O,q,F,k,z,Q;if(v&&(!u||!r)&&(r="none"),t._ease=Zs(r,Fo.ease),t._rEase=E&&(Zs(E)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(O=p[0]?ys(p[0]).harness:0,z=O&&i[O.prop],w=hh(i,wd),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&m?rh:D4),_._lazy=0),a){if(Ms(t._startAt=Be.set(p,Wn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!o&&!f)&&t._startAt.revert(rh),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(o=!1),M=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Cn(l),immediateRender:o,stagger:0,parent:g},w),z&&(M[O.prop]=z),Ms(t._startAt=Be.set(p,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(rh):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,_e,_e);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Cn(l)||l&&!m,x=0;x<p.length;x++){if(C=p[x],D=C._gsap||Rd(p)[x]._gsap,t._ptLookup[x]=F={},md[D.id]&&vs.length&&ch(),k=y===p?x:y.indexOf(C),O&&(q=new O).init(C,z||w,t,k,y)!==!1&&(t._pt=A=new bn(t._pt,C,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(W){F[W]=A}),q.priority&&(P=1)),!O||z)for(M in w)An[M]&&(q=Dd(M,w,t,k,C,y))?q.priority&&(P=1):F[M]=A=Ld.call(t,C,M,"get",w[M],k,y,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),S&&t._pt&&(xs=t,Ie.killTweensOf(C,F,t.globalTime(e)),Q=!t.parent,xs=0),t._pt&&l&&(md[D.id]=1)}P&&Bd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&v.render(Qn,!0,!0)},lv=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return yd=1,t.vars[e]="+=0",Nd(t,o),yd=0,l?Oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Fe(n)+ln(d.e)),d.b&&(d.b=h.s+ln(d.b))},cv=function(t,e){var n=t[0]?ys(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=na({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},hv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(_n(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Uo=function(t,e,n,i,r){return Ue(t)?t.call(e,n,i,r):$e(t)&&~t.indexOf("random(")?aa(t):t},fh=Ad+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",f0={};Sn(fh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return f0[s]=1});fh=fh.split(",");var Be=(function(s){km(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Do(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=i.parent||Ie,y=(_n(n)||Gm(n)?Qi(n[0]):"length"in i)?[n]:jn(n),S,v,E,w,x,M,A,C;if(o._targets=y.length?Rd(y):Oo("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||u||sh(c)||sh(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(S=o.timeline=new gn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),S.kill(),S.parent=S._dp=$i(o),S._start=0,u||sh(c)||sh(h)){if(w=y.length,A=u&&i0(u),Ai(u))for(x in u)~fh.indexOf(x)&&(C||(C={}),C[x]=u[x]);for(v=0;v<w;v++)E=hh(i,f0),E.stagger=0,P&&(E.easeReverse=P),C&&na(E,C),M=y[v],E.duration=+Uo(c,$i(o),v,M,y),E.delay=(+Uo(h,$i(o),v,M,y)||0)-o._delay,!u&&w===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),S.to(M,E,A?A(v,M,y):0),S._ease=oe.none;S.duration()?c=h=0:o.timeline=0}else if(m){Do(Wn(S.vars.defaults,{ease:"none"})),S._ease=Zs(m.ease||i.ease||"none");var D=0,O,q,F;if(_n(m))m.forEach(function(k){return S.to(y,k,">")}),S.duration();else{E={};for(x in m)x==="ease"||x==="easeEach"||hv(x,m[x],E,m.easeEach);for(x in E)for(O=E[x].sort(function(k,z){return k.t-z.t}),D=0,v=0;v<O.length;v++)q=O[v],F={ease:q.e,duration:(q.t-(v?O[v-1].t:0))/100*c},F[x]=q.v,S.to(y,F,D),D+=F.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!Md&&(xs=$i(o),Ie.killTweensOf(y),xs=0),wi(g,$i(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Pe(g._time)&&Cn(d)&&z4($i(o))&&g.data!=="nested")&&(o._tTime=-_e,o.render(Math.max(0,-h)||0)),p&&jm($i(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-_e&&!h?l:i<_e?0:i,u,f,m,_,p,g,y,S;if(!c)H4(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(u=Pe(d%_),d===l?(m=this._repeat,u=c):(p=Pe(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=ia(this._tTime,_),u===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Pe(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(t0(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var E=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!p&&(Gn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&gd(this,i,r,a),Gn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&Gn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&gd(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ms(this,1),!r&&!(h&&!o)&&(d||o||g)&&(Gn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){zo||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Nd(this,c),h=this._ease(c/this._dur),lv(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(vh(this,0),this.parent||Km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xs&&xs.vars.overwrite!==!0)._first||Io(this),this.parent&&a!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?jn(i):o,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!r||r==="all")&&O4(o,l))return r==="all"&&(this._pt=0),Io(this);for(d=this._op=this._op||[],r!=="all"&&($e(r)&&(_={},Sn(r,function(y){return _[y]=1}),r=_),r=cv(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){u=c[g],r==="all"?(d[g]=r,m=u,f={}):(f=d[g]=d[g]||{},m=r);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&_h(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Io(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return No(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return No(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ie.killTweensOf(i,r,a)},t})(ko);Wn(Be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(s){Be[s]=function(){var t=new gn,e=_d.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ud=function(t,e,n){return t[e]=n},p0=function(t,e,n){return t[e](n)},uv=function(t,e,n,i){return t[e](i.fp,n)},dv=function(t,e,n){return t.setAttribute(e,n)},yh=function(t,e){return Ue(t[e])?p0:mh(t[e])&&t.setAttribute?dv:Ud},m0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Fd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Od=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pv=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},mv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?_h(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Bd=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},bn=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||m0,this.d=l||this,this.set=c||Ud,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=gv,this.m=n,this.mt=r,this.tween=i},s})();Sn(Ad+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return wd[s]=1});Vn.TweenMax=Vn.TweenLite=Be;Vn.TimelineLite=Vn.TimelineMax=gn;Ie=new gn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=Pd;var Js=[],oh={},_v=[],zm=0,xv=0,ud=function(t){return(oh[t]||_v).map(function(e){return e()})},Ho=function(){var t=Date.now(),e=[];t-zm>2&&(ud("matchMediaInit"),Js.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Ei.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ud("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=t,ud("matchMedia"))},g0=(function(){function s(e,n){this.selector=n&&xd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ue(n)&&(r=i,i=n,n=Ue);var a=this,o=function(){var c=Ae,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=xd(r)),Ae=a,d=i.apply(a,arguments),Ue(d)&&a._r.push(d),Ae=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Be)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Js.length;a--;)Js[a].id===this.id&&Js.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Ho):o.removeEventListener("change",Ho)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),vv=(function(){function s(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ai(n)||(n={matches:n});var a=new g0(0,r||this.scope),o=a.conditions={},l,c,h;Ae&&!a.selector&&(a.selector=Ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(Js.indexOf(a)<0&&Js.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ho):l.addEventListener("change",Ho),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),ph={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return c0(i)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){$e(t)&&(t=jn(t)[0]);var r=ys(t||{}).get,a=n?$m:Jm;return n==="native"&&(n=""),t&&(e?a((An[e]&&An[e].get||r)(t,e,n,i)):function(o,l,c){return a((An[o]&&An[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=jn(t),t.length>1){var i=t.map(function(h){return xn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=An[e],o=ys(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ea._pt=0,d.init(t,n?h+n:h,ea,0,[t]),d.render(1,d),ea._pt&&Od(1,ea)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=xn.to(t,Wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zs(t.ease,Fo.ease)),Nm(Fo,t||{})},config:function(t){return Nm(qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!An[o]&&!Vn[o]&&Oo(e+" effect requires "+o+" plugin.")}),od[e]=function(o,l,c){return n(jn(o),Wn(l||{},r),c)},a&&(gn.prototype[e]=function(o,l,c){return this.add(od[e](o,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Zs(e)},parseEase:function(t,e){return arguments.length?Zs(t,e):oe},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new gn(t),i,r;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Be&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=r;return wi(Ie,n,0),n},context:function(t,e){return t?new g0(t,e):Ae},matchMedia:function(t){return new vv(t)},matchMediaRefresh:function(){return Js.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ho()},addEventListener:function(t,e){var n=oh[t]||(oh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=oh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:$4,wrapYoyo:K4,distribute:i0,random:r0,snap:s0,normalize:J4,getUnit:ln,clamp:W4,splitColor:h0,toArray:jn,selector:xd,mapRange:o0,pipe:Y4,unitize:Z4,interpolate:Q4,shuffle:n0},install:Wm,effects:od,ticker:Rn,updateRoot:gn.updateRoot,plugins:An,globalTimeline:Ie,core:{PropTween:bn,globals:Xm,Tween:Be,Timeline:gn,Animation:ko,getCache:ys,_removeLinkedListItem:_h,reverting:function(){return on},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Md=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ph[s]=Be[s]});Rn.add(gn.updateRoot);ea=ph.to({},{duration:0});var yv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Mv=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=yv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},dd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if($e(r)&&(l={},Sn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Mv(o,r)}}}},xn=ph.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},dd("roundProps",vd),dd("modifiers"),dd("snap",s0))||ph;Be.version=gn.version=xn.version="3.15.1";Vm=1;Sd()&&ra();var Sv=oe.Power0,bv=oe.Power1,Tv=oe.Power2,Ev=oe.Power3,wv=oe.Power4,Av=oe.Linear,Rv=oe.Quad,Cv=oe.Cubic,qv=oe.Quart,Pv=oe.Quint,Iv=oe.Strong,Lv=oe.Elastic,Dv=oe.Back,Nv=oe.SteppedEase,Uv=oe.Bounce,Fv=oe.Sine,Ov=oe.Expo,Bv=oe.Circ;var _0,bs,la,Wd,nr,zv,x0,Xd,kv=function(){return typeof window<"u"},ts={},er=180/Math.PI,ca=Math.PI/180,oa=Math.atan2,v0=1e8,Yd=/([A-Z])/g,Hv=/(left|right|width|margin|padding|x)/i,Gv=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Xv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},A0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},R0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Zv=function(t,e,n){return t.style[e]=n},Jv=function(t,e,n){return t.style.setProperty(e,n)},$v=function(t,e,n){return t._gsap[e]=n},Kv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Qv=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},jv=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Le="transform",Pn=Le+"Origin",ty=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ts&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ji(i,o)}):this.tfm[t]=a.x?a[t]:ji(i,t),t===Pn&&(this.tfm.zOrigin=a.zOrigin);else return Ri.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Le}(r||e)&&this.props.push(t,e,r[t])},C0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ey=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Yd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Xd(),(!r||!r.isStart)&&!n[Le]&&(C0(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},q0=function(t,e){var n={target:t,props:[],revert:ey,save:ty};return t._gsap||xn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},P0,Hd=function(t,e){var n=bs.createElementNS?bs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):bs.createElement(t);return n&&n.style?n:bs.createElement(t)},Xn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ha(e)||e,1)||""},y0="O,Moz,ms,Ms,Webkit".split(","),ha=function(t,e,n){var i=e||nr,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(y0[a]+t in r););return a<0?null:(a===3?"ms":a>=0?y0[a]:"")+t},Gd=function(){kv()&&window.document&&(_0=window,bs=_0.document,la=bs.documentElement,nr=Hd("div")||{style:{}},zv=Hd("div"),Le=ha(Le),Pn=Le+"Origin",nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",P0=!!ha("perspective"),Xd=xn.core.reverting,Wd=1)},M0=function(t){var e=t.ownerSVGElement,n=Hd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),la.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),la.removeChild(n),r},S0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},I0=function(t){var e,n;try{e=t.getBBox()}catch{e=M0(t),n=1}return e&&(e.width||e.height)||n||(e=M0(t)),e&&!e.width&&!e.x&&!e.y?{x:+S0(t,["x","cx","x1"])||0,y:+S0(t,["y","cy","y1"])||0,width:0,height:0}:e},L0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&I0(t))},Es=function(t,e){if(e){var n=t.style,i;e in ts&&e!==Pn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yd,"-$1").toLowerCase())):n.removeAttribute(e)}},Ts=function(t,e,n,i,r,a){var o=new bn(t._pt,e,n,0,1,a?R0:A0);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},b0={deg:1,rad:1,turn:1},ny={grid:1,flex:1},ws=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=nr.style,l=Hv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===a||!r||b0[i]||b0[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),g=t.getCTM&&L0(t),(f||a==="%")&&(ts[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Fe(f?r/m*d:r/100*m);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===bs||!_.appendChild)&&(_=bs.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Rn.time&&!p.uncache)return Fe(r/p.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,m=t[h],y?t.style[e]=y:Es(t,e)}else(f||a==="%")&&!ny[Xn(_,"display")]&&(o.position=Xn(t,"position")),_===t&&(o.position="static"),_.appendChild(nr),m=nr[h],_.removeChild(nr),o.position="absolute";return l&&f&&(p=ys(_),p.time=Rn.time,p.width=_[h]),Fe(u?m*r/d:m&&r?d/m*r:0)},ji=function(t,e,n,i){var r;return Wd||Gd(),e in Ri&&e!=="transform"&&(e=Ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),ts[e]&&e!=="transform"?(r=Xo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Sh(Xn(t,Pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Mh[e]&&Mh[e](t,e,n)||Xn(t,e)||Cd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ws(t,e,r,n)+n:r},iy=function(t,e,n,i){if(!n||n==="none"){var r=ha(e,t,1),a=r&&Xn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var o=new bn(this._pt,t.style,e,0,1,Fd),l=0,c=0,h,d,u,f,m,_,p,g,y,S,v,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Xn(t,e)||i,_?t.style[e]=_:Es(t,e)),h=[n,i],Pd(h),n=h[0],i=h[1],u=n.match($s)||[],E=i.match($s)||[],E.length){for(;d=$s.exec(i);)p=d[0],y=i.substring(l,d.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Ks(f,p)+v),g=parseFloat(p),S=p.substr((g+"").length),l=$s.lastIndex-S.length,S||(S=S||qn.units[e]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(f=ws(t,e,_,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?R0:A0;return Td.test(i)&&(o.e=0),this._pt=o,o},T0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=T0[n]||n,e[1]=T0[i]||i,e.join(" ")},ry=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ts[o]&&(l=1,o=o==="transformOrigin"?Pn:Le),Es(n,o);l&&(Es(n,Le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xo(n,1),a.uncache=1,C0(i)))}},Mh={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new bn(t._pt,e,n,0,0,ry);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Wo=[1,0,0,1,0,0],D0={},N0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},E0=function(t){var e=Xn(t,Le);return N0(e)?Wo:e.substr(7).match(bd).map(Fe)},Zd=function(t,e){var n=t._gsap||ys(t),i=t.style,r=E0(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wo:r):(r===Wo&&!t.offsetParent&&t!==la&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,la.appendChild(t)),r=E0(t),l?i.display=l:Es(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):la.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vd=function(t,e,n,i,r,a){var o=t._gsap,l=r||Zd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],y=l[5],S=e.split(" "),v=parseFloat(S[0])||0,E=parseFloat(S[1])||0,w,x,M,A;n?l!==Wo&&(x=f*p-m*_)&&(M=v*(p/x)+E*(-_/x)+(_*y-p*g)/x,A=v*(-m/x)+E*(f/x)-(f*y-m*g)/x,v=M,E=A):(w=I0(t),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(S[1]||S[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(g=v-c,y=E-h,o.xOffset=d+(g*f+y*_)-g,o.yOffset=u+(g*m+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Pn]="0px 0px",a&&(Ts(a,o,"xOrigin",c,v),Ts(a,o,"yOrigin",h,E),Ts(a,o,"xOffset",d,o.xOffset),Ts(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+E)},Xo=function(t,e){var n=t._gsap||new Id(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Xn(t,Pn)||"0",h,d,u,f,m,_,p,g,y,S,v,E,w,x,M,A,C,P,D,O,q,F,k,z,Q,W,$,tt,gt,Lt,X,lt;return h=d=u=_=p=g=y=S=v=0,f=m=1,n.svg=!!(t.getCTM&&L0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),x=Zd(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Vd(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,x)),E=n.xOrigin||0,w=n.yOrigin||0,x!==Wo&&(P=x[0],D=x[1],O=x[2],q=x[3],h=F=x[4],d=k=x[5],x.length===6?(f=Math.sqrt(P*P+D*D),m=Math.sqrt(q*q+O*O),_=P||D?oa(D,P)*er:0,y=O||q?oa(O,q)*er+_:0,y&&(m*=Math.abs(Math.cos(y*ca))),n.svg&&(h-=E-(E*P+w*O),d-=w-(E*D+w*q))):(lt=x[6],Lt=x[7],$=x[8],tt=x[9],gt=x[10],X=x[11],h=x[12],d=x[13],u=x[14],M=oa(lt,gt),p=M*er,M&&(A=Math.cos(-M),C=Math.sin(-M),z=F*A+$*C,Q=k*A+tt*C,W=lt*A+gt*C,$=F*-C+$*A,tt=k*-C+tt*A,gt=lt*-C+gt*A,X=Lt*-C+X*A,F=z,k=Q,lt=W),M=oa(-O,gt),g=M*er,M&&(A=Math.cos(-M),C=Math.sin(-M),z=P*A-$*C,Q=D*A-tt*C,W=O*A-gt*C,X=q*C+X*A,P=z,D=Q,O=W),M=oa(D,P),_=M*er,M&&(A=Math.cos(M),C=Math.sin(M),z=P*A+D*C,Q=F*A+k*C,D=D*A-P*C,k=k*A-F*C,P=z,F=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Fe(Math.sqrt(P*P+D*D+O*O)),m=Fe(Math.sqrt(k*k+lt*lt)),M=oa(F,k),y=Math.abs(M)>2e-4?M*er:0,v=X?1/(X<0?-X:X):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!N0(Xn(t,Le)),z&&t.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Fe(f),n.scaleY=Fe(m),n.rotation=Fe(_)+o,n.rotationX=Fe(p)+o,n.rotationY=Fe(g)+o,n.skewX=y+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=Sh(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?oy:P0?U0:ay,n.uncache=0,n},Sh=function(t){return(t=t.split(" "))[0]+" "+t[1]},zd=function(t,e,n){var i=ln(e);return Fe(parseFloat(e)+parseFloat(ws(t,"x",n+"px",i)))+i},ay=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,U0(t,e)},js="0deg",Vo="0px",tr=") ",U0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,S=n.zOrigin,v="",E=g==="auto"&&t&&t!==1||g===!0;if(S&&(d!==js||h!==js)){var w=parseFloat(h)*ca,x=Math.sin(w),M=Math.cos(w),A;w=parseFloat(d)*ca,A=Math.cos(w),a=zd(y,a,x*A*-S),o=zd(y,o,-Math.sin(w)*-S),l=zd(y,l,M*A*-S+S)}p!==Vo&&(v+="perspective("+p+tr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(E||a!==Vo||o!==Vo||l!==Vo)&&(v+=l!==Vo||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+tr),c!==js&&(v+="rotate("+c+tr),h!==js&&(v+="rotateY("+h+tr),d!==js&&(v+="rotateX("+d+tr),(u!==js||f!==js)&&(v+="skew("+u+", "+f+tr),(m!==1||_!==1)&&(v+="scale("+m+", "+_+tr),y.style[Le]=v||"translate(0, 0)"},oy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,S=parseFloat(a),v=parseFloat(o),E,w,x,M,A;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ca,c*=ca,E=Math.cos(l)*d,w=Math.sin(l)*d,x=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=ca,A=Math.tan(c-h),A=Math.sqrt(1+A*A),x*=A,M*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),E*=A,w*=A)),E=Fe(E),w=Fe(w),x=Fe(x),M=Fe(M)):(E=d,M=u,w=x=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=ws(f,"x",a,"px"),v=ws(f,"y",o,"px")),(m||_||p||g)&&(S=Fe(S+m-(m*E+_*x)+p),v=Fe(v+_-(m*w+_*M)+g)),(i||r)&&(A=f.getBBox(),S=Fe(S+i/100*A.width),v=Fe(v+r/100*A.height)),A="matrix("+E+","+w+","+x+","+M+","+S+","+v+")",f.setAttribute("transform",A),y&&(f.style[Le]=A)},ly=function(t,e,n,i,r){var a=360,o=$e(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?er:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*v0)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*v0)%a-~~(c/a)*a)),t._pt=u=new bn(t._pt,e,n,i,c,Vv),u.e=h,u.u="deg",t._props.push(n),u},w0=function(t,e){for(var n in e)t[n]=e[n];return t},cy=function(t,e,n){var i=w0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Le]=e,o=Xo(n,1),Es(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],a[Le]=e,o=Xo(n,1),a[Le]=c);for(l in ts)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=ln(c),m=ln(h),d=f!==m?ws(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new bn(t._pt,o,l,d,u-d,kd),t._pt.u=m||0,t._props.push(l));w0(o,i)};Sn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Mh[t>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(m){return ji(o,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var Jd={name:"css",register:Gd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,y,S,v,E,w,x,M,A;Wd||Gd(),this.styles=this.styles||q0(t),M=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(An[_]&&Dd(_,e,n,i,t,r)))){if(f=typeof h,m=Mh[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=aa(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ki.lastIndex=0,Ki.test(c)||(p=ln(c),g=ln(h),g?p!==g&&(c=ws(t,_,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),M.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],$e(c)&&~c.indexOf("random(")&&(c=aa(c)),ln(c+"")||c==="auto"||(c+=qn.units[_]||ln(ji(t,_))||""),(c+"").charAt(1)==="="&&(c=ji(t,_))):c=ji(t,_),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in Ri&&(_==="autoAlpha"&&(u===1&&ji(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,o.visibility),Ts(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in ts,S){if(this.styles.save(_),A=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Xn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=Xn(t,"perspective"),C?t.style.perspective=C:Es(t,"perspective")}d=parseFloat(h)}if(v||(E=t._gsap,E.renderTransform&&!e.parseTransform||Xo(t,e.parseTransform),w=e.smoothOrigin!==!1&&E.smooth,v=this._pt=new bn(this._pt,o,Le,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new bn(this._pt,E,"scaleY",E.scaleY,(y?Ks(E.scaleY,y+d):d)-E.scaleY||0,kd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(Pn,0,o[Pn]),h=sy(h),E.svg?Vd(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==E.zOrigin&&Ts(this,E,"zOrigin",E.zOrigin,g),Ts(this,o,_,Sh(c),Sh(h)));continue}else if(_==="svgOrigin"){Vd(t,h,1,w,0,this);continue}else if(_ in D0){ly(this,E,_,u,y?Ks(u,y+h):h);continue}else if(_==="smoothOrigin"){Ts(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){cy(this,h,t);continue}}else _ in o||(_=ha(_)||_);if(S||(d||d===0)&&(u||u===0)&&!Gv.test(h)&&_ in o)p=(c+"").substr((u+"").length),d||(d=0),g=ln(h)||(_ in qn.units?qn.units[_]:p),p!==g&&(u=ws(t,_,c,g)),this._pt=new bn(this._pt,S?E:o,_,u,(y?Ks(u,y+d):d)-u,!S&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Yv:kd),this._pt.u=g||0,S&&A!==h?(this._pt.b=c,this._pt.e=A,this._pt.r=Xv):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Wv);else if(_ in o)iy.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,i,r);else if(_!=="parseTransform"){gh(_,h);continue}S||(_ in o?M.push(_,0,o[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),a.push(_)}}x&&Bd(this)},render:function(t,e){if(e.tween._time||!Xd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ji,aliases:Ri,getSetter:function(t,e,n){var i=Ri[e];return i&&i.indexOf(",")<0&&(e=i),e in ts&&e!==Pn&&(t._gsap.x||ji(t,"x"))?n&&x0===n?e==="scale"?Kv:$v:(x0=n||{})&&(e==="scale"?Qv:jv):t.style&&!mh(t.style[e])?Zv:~e.indexOf("-")?Jv:yh(t,e)},core:{_removeProperty:Es,_getMatrix:Zd}};xn.utils.checkPrefix=ha;xn.core.getStyleSaver=q0;(function(s,t,e,n){var i=Sn(s+","+t+","+e,function(r){ts[r]=1});Sn(t,function(r){qn.units[r]="deg",D0[r]=1}),Ri[i[13]]=s+","+t,Sn(n,function(r){var a=r.split(":");Ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){qn.units[s]="px"});xn.registerPlugin(Jd);var ze=xn.registerPlugin(Jd)||xn,_6=ze.core.Tween;var Yo={glyphs:{"0":{ha:659,x_min:19,x_max:621,o:"m 398 533 l 398 533 q 562 483 502 533 q 621 347 621 433 l 621 347 q 591 216 621 280 q 509 99 561 151 q 388 17 456 47 q 242 -14 319 -14 l 242 -14 q 80 36 140 -14 q 19 172 19 86 l 19 172 q 49 304 19 240 q 132 420 79 368 q 253 503 184 472 q 398 533 321 533 m 384 515 l 384 515 q 307 482 341 515 q 249 393 273 448 q 213 273 225 338 q 201 145 201 208 l 201 145 q 218 38 201 71 q 256 4 234 4 l 256 4 q 333 38 299 4 q 391 127 367 72 q 427 247 414 182 q 439 374 439 312 l 439 374 q 423 482 439 448 q 384 515 407 515 "},"1":{ha:391,x_min:40,x_max:376,o:"m 356 530 l 376 530 l 217 0 l 40 0 l 164 415 q 112 402 139 408 q 42 386 84 395 l 42 386 l 45 407 q 182 446 125 425 q 281 488 239 466 q 356 530 322 510 l 356 530 "},"2":{ha:556,x_min:-27,x_max:505,o:"m 328 533 l 328 533 q 458 503 411 533 q 505 424 505 473 l 505 424 q 481 357 505 388 q 419 298 457 325 q 337 247 381 271 q 250 200 292 222 q 177 157 208 178 l 177 157 q 225 150 199 157 q 280 136 250 143 q 341 129 309 129 l 341 129 q 410 141 382 129 q 438 177 438 153 l 438 177 q 406 221 438 203 l 406 221 l 416 234 q 460 196 447 217 q 472 145 472 174 l 472 145 q 454 74 472 109 q 398 17 436 39 q 296 -6 359 -6 l 296 -6 q 231 1 263 -6 q 166 16 199 8 q 93 24 132 23 l 93 24 q 29 20 53 26 q -27 0 4 13 l -27 0 l -22 21 q 29 60 -4 36 q 101 116 61 84 q 182 184 141 147 q 256 260 222 220 q 311 342 290 300 q 332 424 332 383 l 332 424 q 311 483 332 465 q 256 501 290 501 l 256 501 q 195 488 225 501 q 139 454 164 475 q 99 405 114 432 q 84 350 84 378 l 84 350 q 97 314 84 326 q 141 302 110 302 l 141 302 q 191 313 170 302 q 234 343 211 323 l 234 343 l 246 329 q 189 292 218 303 q 135 281 160 281 l 135 281 q 102 287 119 281 q 72 307 84 292 q 60 349 60 321 l 60 349 q 79 415 60 382 q 133 474 98 447 q 218 517 168 501 q 328 533 267 533 "},"3":{ha:539,x_min:-91,x_max:497,o:"m 314 533 l 314 533 q 448 505 399 533 q 497 432 497 477 l 497 432 q 474 367 497 396 q 414 314 451 337 q 334 275 377 291 q 250 250 291 259 l 250 250 q 358 237 310 249 q 433 196 405 224 q 460 121 460 168 l 460 121 q 424 30 460 72 q 329 -45 388 -12 q 197 -101 269 -78 q 49 -137 124 -125 q -91 -151 -26 -150 l -91 -151 l -86 -133 q 36 -110 -28 -129 q 154 -56 99 -91 q 243 28 209 -22 q 277 143 277 77 l 277 143 q 266 208 277 183 q 232 234 254 232 l 232 234 q 202 222 216 227 q 174 217 187 217 l 174 217 q 160 220 166 217 q 157 232 154 223 l 157 232 q 179 249 160 246 q 224 250 198 252 l 224 250 q 279 286 255 264 q 318 336 303 307 q 332 401 332 365 l 332 401 q 306 467 332 443 q 231 491 280 491 l 231 491 q 179 482 204 491 q 133 456 153 472 q 101 421 113 440 q 89 380 89 401 l 89 380 q 103 344 89 356 q 147 332 116 332 l 147 332 q 209 347 181 332 l 209 347 l 220 332 q 179 316 199 321 q 140 311 158 311 l 140 311 q 107 317 124 311 q 77 337 89 322 q 65 379 65 351 l 65 379 q 98 451 65 416 q 188 510 131 486 q 314 533 244 533 "},"4":{ha:549,x_min:-62,x_max:483,o:"m -56 75 l 452 533 l 478 533 l 355 75 l 483 75 l 477 54 l 349 54 l 297 -141 l 120 -141 l 173 54 l -62 54 l -56 75 m -27 75 l 179 75 l 245 319 l -27 75 "},"5":{ha:480,x_min:-93,x_max:448,o:"m 436 538 l 436 538 l 448 531 q 383 415 422 458 q 291 371 343 371 l 291 371 q 241 381 268 371 q 189 400 214 391 q 143 406 164 409 l 143 406 l 63 225 q 137 252 95 243 q 227 261 178 261 l 227 261 q 367 229 323 261 q 410 139 410 197 l 410 139 q 377 41 410 85 q 290 -38 344 -4 q 169 -97 235 -73 q 34 -133 102 -121 q -93 -148 -34 -146 l -93 -148 l -88 -130 q 18 -112 -37 -130 q 119 -59 72 -94 q 196 25 166 -25 q 225 137 225 74 l 225 137 q 206 206 225 181 q 139 231 187 231 l 139 231 q 103 227 125 231 q 49 204 81 222 l 49 204 l 39 209 l 170 518 q 225 514 199 520 q 278 500 251 507 q 337 493 305 493 l 337 493 q 394 503 370 493 q 436 538 418 512 "},"6":{ha:593,x_min:22,x_max:566,o:"m 560 722 l 560 722 l 566 702 q 464 653 515 687 q 366 568 412 619 q 282 448 319 516 q 224 295 245 379 q 203 113 203 211 l 203 113 q 213 28 203 49 q 242 6 223 6 l 242 6 q 295 36 270 6 q 337 112 319 66 q 365 209 355 158 q 375 299 375 259 l 375 299 q 363 363 375 346 q 336 379 351 379 l 336 379 q 297 358 317 379 q 263 288 277 337 l 263 288 l 246 293 q 284 378 260 346 q 338 424 307 410 q 407 438 369 438 l 407 438 q 516 400 472 438 q 559 286 559 362 l 559 286 q 532 174 559 228 q 457 78 505 120 q 346 11 409 35 q 211 -14 283 -14 l 211 -14 q 73 30 123 -14 q 22 173 22 74 l 22 173 q 58 337 22 259 q 153 481 94 415 q 283 598 212 547 q 427 680 354 648 q 560 722 499 712 "},"7":{ha:514,x_min:38,x_max:580,o:"m 205 524 l 205 524 q 288 514 250 524 q 367 492 326 503 q 458 480 407 481 l 458 480 q 508 486 484 479 q 551 518 532 492 l 551 518 l 580 518 q 480 406 523 455 q 404 313 436 356 q 347 225 371 269 q 304 130 322 181 q 268 12 285 78 l 268 12 q 258 -32 260 -20 q 255 -50 255 -45 q 252 -67 255 -55 l 252 -67 q 219 -124 245 -101 q 144 -148 192 -148 l 144 -148 q 86 -130 103 -148 q 67 -86 68 -113 q 72 -32 65 -59 l 72 -32 q 127 80 87 23 q 221 193 167 137 q 334 303 275 249 q 448 404 393 356 l 448 404 q 523 474 490 441 l 523 474 q 467 438 492 455 l 467 438 q 401 394 430 412 q 346 366 372 376 q 289 356 320 356 q 236 365 258 356 q 193 381 213 373 q 146 389 172 389 q 101 377 120 389 q 82 335 82 364 l 82 335 q 112 277 82 299 q 191 243 142 254 l 191 243 l 186 226 q 79 274 120 240 q 38 372 38 308 l 38 372 q 55 444 38 409 q 108 502 71 479 q 205 524 145 524 "},"8":{ha:595,x_min:-11,x_max:616,o:"m 432 722 l 432 722 q 526 711 484 722 q 592 675 567 699 q 616 614 616 651 l 616 614 q 592 546 616 578 q 530 487 568 514 q 448 438 491 460 l 448 438 q 395 412 421 424 l 395 412 l 449 365 q 503 303 481 337 q 525 220 525 268 l 525 220 q 498 127 525 170 q 425 53 471 84 q 321 4 379 21 q 199 -14 262 -14 l 199 -14 q 95 0 143 -14 q 18 43 47 14 q -11 118 -11 72 l -11 118 q 14 197 -11 160 q 81 265 39 233 q 175 321 123 296 l 175 321 q 251 354 212 339 l 251 354 l 225 379 q 173 442 194 408 q 152 521 152 475 l 152 521 q 175 603 152 566 q 237 667 198 640 q 327 708 276 693 q 432 722 377 722 m 286 321 l 262 343 q 225 297 242 323 l 225 297 q 183 207 198 257 q 167 101 167 157 l 167 101 q 180 31 167 58 q 226 4 192 4 l 226 4 q 290 28 259 4 q 339 91 320 52 q 358 172 358 129 l 358 172 q 337 257 358 221 q 286 321 316 292 l 286 321 m 381 425 l 381 425 q 404 461 393 441 l 404 461 q 434 537 423 495 q 445 624 445 579 l 445 624 q 403 704 445 704 l 403 704 q 358 684 380 704 q 323 631 336 663 q 309 564 309 599 l 309 564 q 331 483 309 517 l 331 483 q 381 425 352 451 "},"9":{ha:582,x_min:12,x_max:549,o:"m 360 533 l 360 533 q 499 489 449 533 q 549 346 549 445 l 549 346 q 514 188 549 263 q 421 48 479 112 q 293 -66 363 -17 q 152 -147 223 -116 q 21 -188 81 -179 l 21 -188 l 15 -168 q 115 -120 64 -154 q 210 -36 165 -87 q 291 82 255 15 q 348 231 327 149 q 368 406 368 312 l 368 406 q 359 492 368 470 q 329 513 349 513 l 329 513 q 277 483 301 513 q 234 407 252 453 q 206 311 216 361 q 196 220 196 261 l 196 220 q 208 157 196 174 q 235 140 220 140 l 235 140 q 275 161 254 140 q 308 231 295 182 l 308 231 l 325 226 q 288 141 311 173 q 234 95 265 109 q 164 81 202 81 l 164 81 q 56 119 100 81 q 12 233 12 157 l 12 233 q 39 346 12 292 q 114 442 66 399 q 225 509 162 484 q 360 533 288 533 "},A:{ha:669,x_min:-96,x_max:602,o:"m 144 268 l 47 131 q 23 70 20 93 q 52 35 26 46 q 115 20 77 23 l 115 20 l 111 0 q 28 3 59 2 q -31 3 -3 3 l -31 3 q -66 3 -52 3 q -96 0 -80 2 l -96 0 l -92 20 q -55 38 -72 26 q -19 75 -39 50 q 30 139 1 99 l 30 139 l 438 713 q 477 711 456 711 q 513 713 497 711 l 513 713 l 553 84 q 572 35 556 48 q 602 20 587 21 l 602 20 l 598 0 q 520 3 569 2 q 429 3 471 3 l 429 3 q 332 3 378 3 q 259 0 286 2 l 259 0 l 263 20 q 332 38 311 22 q 349 104 352 53 l 349 104 l 340 268 l 144 268 m 158 288 l 339 288 l 327 526 l 158 288 "},B:{ha:710,x_min:-48,x_max:702,o:"m 460 707 l 460 707 q 647 671 591 707 q 702 572 702 634 l 702 572 q 666 474 702 519 q 561 401 630 429 q 390 370 491 373 l 390 370 q 587 329 517 372 q 656 220 656 286 l 656 220 q 632 127 656 168 q 563 58 608 86 q 453 15 518 29 q 306 0 388 0 l 306 0 q 239 2 279 0 q 129 3 199 3 l 129 3 q 69 3 102 3 q 5 2 36 2 q -48 0 -27 1 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 200 652 199 633 q 186 679 200 670 q 132 688 171 687 l 132 688 l 137 708 q 189 707 158 707 q 253 706 220 706 q 311 705 286 705 l 311 705 q 397 706 365 705 q 460 707 429 707 m 348 359 l 329 359 l 262 106 q 255 70 258 89 q 260 37 252 50 q 294 23 268 23 l 294 23 q 372 55 338 23 q 425 137 405 87 q 444 240 444 187 l 444 240 q 436 298 444 271 q 406 342 427 325 q 348 359 385 359 l 348 359 m 397 617 l 333 376 l 348 376 q 436 409 401 376 q 489 495 471 442 q 506 603 506 547 l 506 603 q 496 663 506 638 q 450 688 485 688 l 450 688 q 419 674 429 688 q 397 617 408 660 l 397 617 "},C:{ha:708,x_min:37,x_max:768,o:"m 747 708 l 768 708 q 737 614 753 669 q 704 478 721 558 l 704 478 l 682 478 q 692 568 691 528 q 675 637 692 608 l 675 637 q 629 682 656 670 q 565 694 602 694 l 565 694 q 473 670 517 694 q 391 601 428 645 q 326 497 354 556 q 283 368 298 438 q 267 223 267 298 l 267 223 q 303 72 267 119 q 398 24 338 24 l 398 24 q 467 39 431 24 q 528 82 502 54 l 528 82 q 575 147 555 111 q 618 240 594 182 l 618 240 l 640 240 q 602 94 615 149 q 581 0 588 38 l 581 0 l 559 0 q 562 34 562 21 l 562 34 q 554 59 562 54 q 529 51 546 63 l 529 51 q 472 18 503 33 q 405 -5 440 3 q 329 -14 369 -14 l 329 -14 q 107 54 176 -14 q 37 242 37 122 l 37 242 q 61 384 37 314 q 130 514 85 453 q 238 622 175 575 q 379 696 301 669 q 544 722 456 722 l 544 722 q 612 713 584 722 q 659 689 639 704 q 692 657 678 674 l 692 657 q 706 648 699 648 l 706 648 q 719 654 712 648 l 719 654 q 747 708 732 667 l 747 708 "},D:{ha:802,x_min:-43,x_max:791,o:"m 791 457 l 791 457 q 774 335 791 398 q 720 212 757 271 q 624 104 683 152 q 481 28 565 56 q 285 0 397 0 l 285 0 q 248 1 269 0 q 197 3 226 2 q 127 3 168 3 l 127 3 q 72 3 104 3 q 8 2 39 2 q -43 0 -23 1 l -43 0 l -40 20 q 11 28 -8 22 q 40 52 29 34 q 60 106 51 70 l 60 106 l 191 602 q 197 647 198 628 q 182 676 196 665 q 133 688 168 686 l 133 688 l 136 708 q 190 706 157 707 q 260 705 223 705 l 260 705 l 328 705 q 370 707 342 706 q 428 708 398 707 q 476 708 457 708 l 476 708 q 707 646 623 708 q 791 457 791 583 m 293 18 l 293 18 q 395 47 349 18 q 477 126 441 76 q 536 237 512 175 q 573 365 560 299 q 585 493 585 431 l 585 493 q 555 639 585 588 q 458 690 525 690 l 458 690 q 426 684 436 690 q 410 660 416 678 q 394 604 404 642 l 394 604 l 263 104 q 252 52 254 70 q 258 26 249 33 q 293 18 267 18 "},E:{ha:637,x_min:-48,x_max:691,o:"m 331 366 l 349 366 q 396 375 373 366 q 437 400 418 384 q 470 436 455 416 q 492 478 484 456 l 492 478 l 514 478 q 495 414 501 439 q 480 356 488 388 l 480 356 q 471 321 475 336 q 464 286 467 305 q 454 234 460 267 l 454 234 l 432 234 q 428 271 432 251 q 412 307 423 290 q 382 335 401 324 q 335 346 363 346 l 335 346 l 326 346 l 262 106 q 254 52 253 70 q 271 29 255 34 q 319 23 286 23 l 319 23 l 332 23 q 417 40 380 23 q 487 96 454 57 q 551 200 519 134 l 551 200 l 573 200 q 563 168 568 187 q 552 128 557 149 l 552 128 q 539 74 547 109 q 526 0 531 38 l 526 0 q 413 3 475 2 q 300 3 350 3 l 300 3 l 232 3 q 143 3 191 3 q 45 2 94 2 q -48 0 -4 1 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 229 707 180 707 q 327 706 278 706 q 416 705 375 705 l 416 705 l 484 705 q 587 706 530 705 q 691 708 644 706 l 691 708 q 670 649 678 673 q 653 590 661 624 l 653 590 q 646 556 649 572 q 640 528 642 540 l 640 528 l 618 528 q 605 622 619 587 q 564 671 591 656 q 497 685 537 685 l 497 685 l 494 685 q 443 680 461 685 q 414 657 424 674 q 394 602 404 639 l 394 602 l 331 366 "},F:{ha:603,x_min:-48,x_max:691,o:"m 630 498 l 608 498 q 600 610 614 569 q 556 668 585 651 q 487 685 527 685 l 487 685 l 484 685 q 439 680 455 685 q 413 657 422 674 q 394 602 403 639 l 394 602 l 331 366 l 359 366 q 403 374 382 366 q 442 397 424 382 q 476 432 460 411 q 502 478 491 453 l 502 478 l 524 478 q 505 414 511 439 q 490 356 498 388 l 490 356 q 476 290 483 325 q 459 204 468 254 l 459 204 l 437 204 q 431 265 437 239 q 413 310 425 291 q 384 337 401 328 q 345 346 367 346 l 345 346 l 326 346 l 262 106 q 256 52 253 70 q 279 28 259 34 q 341 20 299 22 l 341 20 l 337 0 q 249 3 303 2 q 138 3 194 3 l 138 3 q 32 3 81 3 q -48 0 -18 2 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 229 707 180 707 q 327 706 278 706 q 416 705 375 705 l 416 705 l 484 705 q 587 706 530 705 q 691 708 644 706 l 691 708 q 670 649 678 673 q 653 590 662 624 l 653 590 q 640 540 646 563 q 630 498 634 517 l 630 498 "},G:{ha:761,x_min:30,x_max:781,o:"m 356 6 l 356 6 q 383 9 369 6 q 408 20 397 12 l 408 20 q 430 49 423 31 q 446 100 437 66 l 446 100 l 469 188 q 478 249 480 229 q 456 276 475 269 q 394 284 436 283 l 394 284 l 399 304 q 455 303 422 303 q 524 302 488 302 q 589 301 559 301 l 589 301 q 684 302 640 301 q 754 304 727 303 l 754 304 l 749 284 q 715 277 727 283 q 694 253 702 271 q 675 198 685 235 l 675 198 l 622 0 l 602 0 q 593 45 603 32 q 563 57 583 57 l 563 57 q 505 42 535 57 q 448 15 474 26 l 448 15 q 381 -8 411 -2 q 320 -14 350 -14 l 320 -14 q 108 46 185 -14 q 30 215 30 106 l 30 215 q 54 354 30 283 q 122 491 77 425 q 229 609 166 557 q 369 692 291 661 q 538 722 447 722 l 538 722 q 639 703 603 722 q 702 657 674 684 l 702 657 q 730 652 717 642 q 759 708 743 662 l 759 708 l 781 708 q 750 614 766 669 q 717 478 734 558 l 717 478 l 695 478 q 699 517 697 498 q 700 553 700 535 l 700 553 q 698 591 700 574 q 686 626 695 608 l 686 626 q 629 684 667 664 q 532 704 590 704 l 532 704 q 427 669 474 704 q 343 575 379 633 q 282 447 306 516 q 246 308 258 377 q 233 182 233 238 l 233 182 q 264 49 233 92 q 356 6 295 6 "},H:{ha:846,x_min:-47,x_max:926,o:"m 552 366 l 615 602 q 624 657 625 639 q 606 681 622 674 q 556 688 590 687 l 556 688 l 561 708 q 640 706 591 707 q 737 705 688 705 l 737 705 q 845 706 794 705 q 926 708 895 707 l 926 708 l 921 688 q 868 681 887 687 q 839 657 849 674 q 818 602 828 639 l 818 602 l 686 106 q 678 52 677 70 q 695 28 679 34 q 745 20 711 22 l 745 20 l 741 0 q 661 3 711 2 q 553 3 610 3 l 553 3 q 456 3 504 3 q 376 0 407 2 l 376 0 l 380 20 q 433 28 414 22 q 463 52 452 34 q 483 106 474 70 l 483 106 l 547 346 l 326 346 l 262 106 q 254 52 253 70 q 271 28 255 34 q 321 20 287 22 l 321 20 l 317 0 q 238 3 286 2 q 140 3 190 3 l 140 3 q 34 3 83 3 q -47 0 -16 2 l -47 0 l -42 20 q 10 28 -9 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 217 706 166 707 q 324 705 267 705 l 324 705 q 421 706 374 705 q 502 708 467 707 l 502 708 l 497 688 q 444 681 463 687 q 415 657 425 674 q 394 602 404 639 l 394 602 l 331 366 l 552 366 "},I:{ha:422,x_min:-47,x_max:502,o:"m 394 602 l 262 106 q 254 52 253 70 q 271 28 255 34 q 321 20 287 22 l 321 20 l 317 0 q 234 3 285 2 q 130 3 183 3 l 130 3 q 29 3 76 3 q -47 0 -18 2 l -47 0 l -42 20 q 10 28 -9 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 213 706 165 707 q 314 705 260 705 l 314 705 q 416 706 367 705 q 502 708 465 707 l 502 708 l 497 688 q 444 681 463 687 q 415 657 425 674 q 394 602 404 639 l 394 602 "},J:{ha:715,x_min:15,x_max:817,o:"m 595 366 l 695 366 l 692 346 l 589 346 q 579 307 584 327 l 579 307 l 517 65 q 461 -61 500 -3 q 353 -153 421 -119 q 180 -188 285 -188 l 180 -188 q 98 -179 135 -188 q 38 -151 60 -171 q 15 -99 15 -132 l 15 -99 q 42 -36 15 -61 q 119 -12 68 -12 l 119 -12 q 191 -30 161 -12 q 220 -85 220 -48 l 220 -85 q 204 -134 220 -113 q 155 -169 187 -155 l 155 -169 q 168 -170 163 -170 q 178 -171 173 -171 l 178 -171 q 218 -160 201 -171 q 247 -126 234 -149 q 273 -66 260 -103 q 299 20 285 -30 l 299 20 l 368 262 q 398 346 381 307 l 398 346 l 261 346 l 264 366 l 407 366 q 422 395 414 381 l 422 395 q 497 495 454 451 q 592 575 539 538 q 705 650 644 612 l 705 650 q 622 619 657 637 q 557 583 587 600 q 493 555 526 566 q 414 543 459 543 l 414 543 q 359 550 385 543 q 308 566 332 557 q 262 582 284 575 q 220 589 240 589 l 220 589 q 180 577 197 589 q 163 538 163 565 l 163 538 q 195 484 163 505 q 301 458 226 463 l 301 458 l 299 440 q 185 463 234 444 q 109 517 136 482 q 82 599 82 551 l 82 599 q 121 700 82 661 q 241 739 160 739 l 241 739 q 317 729 284 739 q 377 705 349 719 q 433 677 404 691 q 494 652 461 662 q 571 642 527 642 l 571 642 q 651 650 604 642 q 735 677 698 658 l 735 677 q 776 726 756 709 q 811 730 796 743 l 811 730 q 810 703 823 720 q 744 666 797 686 l 744 666 q 645 516 681 609 l 645 516 q 595 366 618 447 l 595 366 "},K:{ha:783,x_min:-47,x_max:821,o:"m 394 602 l 262 106 q 254 52 253 70 q 271 28 255 34 q 321 20 287 22 l 321 20 l 317 0 q 238 3 286 2 q 140 3 190 3 l 140 3 q 34 3 83 3 q -47 0 -16 2 l -47 0 l -42 20 q 10 28 -9 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 217 706 166 707 q 324 705 267 705 l 324 705 q 421 706 374 705 q 502 708 467 707 l 502 708 l 497 688 q 444 681 463 687 q 415 657 425 674 q 394 602 404 639 l 394 602 m 646 71 l 646 71 q 672 84 661 71 q 689 119 682 97 l 689 119 l 706 170 l 726 170 l 700 93 q 642 12 681 37 q 558 -14 603 -14 l 558 -14 q 449 24 483 -14 q 424 119 414 61 l 424 119 l 452 277 q 457 319 457 302 q 449 347 456 336 l 449 347 q 437 359 445 354 l 437 359 q 369 348 387 346 l 369 348 q 355 354 359 349 l 355 354 q 353 369 351 360 l 353 369 q 375 389 357 386 l 375 389 q 437 379 391 392 l 437 379 q 501 408 477 385 l 501 408 q 542 470 527 433 q 567 549 557 507 q 590 627 577 590 q 624 689 602 664 l 624 689 q 662 716 641 709 q 703 722 683 722 l 703 722 q 788 692 754 722 q 821 610 821 661 l 821 610 q 808 554 821 581 q 770 508 795 526 q 708 490 745 490 l 708 490 q 650 511 676 490 q 623 573 623 531 l 623 573 q 651 648 623 612 q 726 700 678 683 l 726 700 q 716 704 722 702 q 700 705 709 705 l 700 705 q 664 698 678 705 q 639 677 650 691 l 639 677 q 611 625 622 656 q 590 559 599 594 q 569 490 580 524 q 540 428 557 456 q 496 384 522 400 l 496 384 q 472 373 485 377 l 472 373 q 546 362 515 370 l 546 362 q 614 328 591 350 q 642 273 636 305 q 640 198 647 240 l 640 198 l 624 98 q 629 79 622 86 q 646 71 636 71 "},L:{ha:617,x_min:-48,x_max:580,o:"m 558 210 l 580 210 q 568 173 574 194 q 556 128 562 152 l 556 128 q 543 74 551 109 q 530 0 535 38 l 530 0 q 417 3 479 2 q 304 3 354 3 l 304 3 l 236 3 q 145 3 194 3 l 145 3 l 46 2 q -48 0 -4 1 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 218 706 166 707 q 326 705 269 705 l 326 705 q 421 706 376 705 q 501 708 466 707 l 501 708 l 496 688 q 443 681 462 687 q 414 657 424 674 q 393 602 403 639 l 393 602 l 261 106 q 253 52 252 70 q 270 29 254 34 q 318 23 285 23 l 318 23 l 336 23 q 411 41 370 23 q 491 100 451 59 q 558 210 530 141 l 558 210 "},M:{ha:949,x_min:-47,x_max:1029,o:"m 457 252 l 746 705 l 844 705 q 945 706 897 705 q 1029 708 992 707 l 1029 708 l 1024 688 q 971 681 990 687 q 942 657 952 674 q 921 602 931 639 l 921 602 l 789 106 q 782 52 780 70 q 799 28 783 34 q 848 20 815 22 l 848 20 l 844 0 q 760 3 807 2 q 660 3 713 3 l 660 3 q 558 3 606 3 q 480 0 509 2 l 480 0 l 484 20 q 538 28 519 22 q 567 52 556 34 q 587 106 578 70 l 587 106 l 732 645 l 317 -5 l 295 -5 l 206 579 l 90 137 q 84 83 83 109 q 103 39 84 56 q 171 20 122 22 l 171 20 l 167 0 q 134 2 155 1 q 89 3 112 2 q 48 3 66 3 l 48 3 q -4 3 22 3 q -47 0 -30 2 l -47 0 l -43 20 q 14 39 -8 22 q 48 83 35 56 q 68 137 61 109 l 68 137 l 192 602 q 200 657 202 639 q 183 681 198 674 q 133 688 167 687 l 133 688 l 138 708 q 212 706 166 707 q 307 705 257 705 l 307 705 q 356 706 332 705 q 399 708 380 707 l 399 708 l 457 252 "},N:{ha:861,x_min:-85,x_max:973,o:"m 565 -5 l 543 -5 l 281 472 q 251 333 266 401 l 251 333 q 214 183 233 252 q 176 64 195 114 q 139 -11 157 13 q 97 -54 121 -35 q 32 -74 72 -74 l 32 -74 q -53 -43 -21 -74 q -85 33 -85 -12 l -85 33 q -52 110 -85 81 q 27 138 -19 138 l 27 138 q 92 119 68 138 q 116 64 116 99 l 116 64 q 86 -11 116 19 q 12 -49 56 -41 l 12 -49 q 23 -55 16 -53 q 37 -57 29 -57 l 37 -57 q 86 -41 65 -57 q 123 -1 107 -26 l 123 -1 q 182 143 152 45 q 242 380 211 241 l 242 380 q 287 600 264 482 l 287 600 l 287 602 q 293 657 295 639 q 273 681 290 674 q 216 688 255 687 l 216 688 l 221 708 q 261 706 237 707 q 310 705 284 705 l 310 705 q 391 708 357 705 l 391 708 l 610 283 q 620 323 614 303 l 620 323 q 660 472 639 401 q 703 600 680 543 q 748 690 725 656 l 748 690 q 793 736 767 717 q 856 754 819 754 l 856 754 q 941 723 909 754 q 973 647 973 692 l 973 647 q 941 571 973 599 q 861 542 908 542 l 861 542 q 797 562 821 542 q 772 616 772 581 l 772 616 q 802 692 772 661 q 876 729 832 722 l 876 729 q 866 735 872 733 q 851 737 859 737 l 851 737 q 804 721 826 737 q 766 682 782 705 l 766 682 q 672 443 720 614 q 565 -5 624 272 l 565 -5 "},O:{ha:809,x_min:34,x_max:807,o:"m 502 704 l 502 704 q 426 677 463 704 q 357 601 389 649 q 301 490 325 552 q 264 356 277 427 q 250 213 250 285 l 250 213 q 275 60 250 115 q 338 4 300 4 l 338 4 q 414 32 377 4 q 483 108 451 59 q 539 219 515 156 q 577 352 563 281 q 590 495 590 423 l 590 495 q 565 649 590 593 q 502 704 540 704 m 34 226 l 34 226 q 56 362 34 292 q 119 496 78 432 q 219 611 160 560 q 351 692 277 662 q 511 722 425 722 l 511 722 q 728 660 649 722 q 807 481 807 597 l 807 481 q 785 346 807 415 q 722 212 763 276 q 621 97 680 148 q 489 16 562 46 q 329 -14 415 -14 l 329 -14 q 113 49 191 -14 q 34 226 34 111 "},P:{ha:679,x_min:-48,x_max:725,o:"m 308 284 l 308 284 l 261 106 q 255 60 254 78 q 272 32 256 41 q 320 20 287 22 l 320 20 l 316 0 q 237 3 282 2 q 142 3 192 3 l 142 3 q 34 3 85 3 q -48 0 -18 2 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 198 650 197 632 q 184 677 198 668 q 132 688 170 686 l 132 688 l 137 708 q 218 706 166 707 q 320 705 269 705 l 320 705 q 393 706 356 705 q 466 707 429 707 l 466 707 q 662 670 598 707 q 725 556 725 633 l 725 556 q 670 417 725 478 q 517 320 615 355 l 517 320 q 308 284 426 287 m 393 602 l 314 304 q 401 331 364 308 l 401 331 q 467 401 442 358 q 503 492 492 443 q 514 583 514 540 l 514 583 q 496 661 514 633 q 437 688 478 688 l 437 688 q 417 681 423 688 q 406 656 410 674 q 393 602 402 637 l 393 602 "},Q:{ha:865,x_min:-34,x_max:858,o:"m 318 243 l 318 243 q 196 264 250 243 q 109 324 141 284 q 77 423 77 364 l 77 423 q 114 542 77 487 q 215 637 151 596 q 361 700 279 677 q 531 722 442 722 l 531 722 q 699 697 625 722 q 816 627 773 672 q 858 522 858 582 l 858 522 q 827 414 858 471 q 743 298 796 356 q 622 184 690 239 q 479 81 554 129 l 479 81 q 377 20 427 48 l 377 20 l 429 -13 q 532 -68 480 -46 q 636 -91 584 -91 l 636 -91 q 699 -79 675 -91 q 735 -49 722 -67 q 754 -18 748 -32 l 754 -18 q 715 -42 737 -34 q 669 -51 692 -51 l 669 -51 q 601 -28 629 -51 q 572 38 572 -5 l 572 38 q 603 110 572 82 q 683 138 634 138 l 683 138 q 757 113 727 138 q 787 37 787 88 l 787 37 q 767 -43 787 -3 q 709 -115 747 -83 q 616 -168 670 -148 q 493 -188 562 -188 l 493 -188 q 382 -172 431 -188 q 294 -132 333 -157 q 222 -79 255 -107 l 222 -79 q 197 -58 209 -69 l 197 -58 q 187 -61 192 -60 l 187 -61 q 70 -82 120 -82 l 70 -82 q -5 -62 24 -82 q -34 3 -34 -42 l -34 3 q -14 69 -34 40 q 41 114 6 97 q 118 131 75 131 l 118 131 q 223 109 171 131 q 326 53 274 86 l 326 53 l 359 31 q 446 88 405 56 l 446 88 q 528 167 491 123 q 591 262 565 211 q 630 372 616 313 q 644 496 644 431 l 644 496 q 609 650 644 596 q 507 704 574 704 l 507 704 q 417 676 457 704 q 348 602 376 648 q 304 499 319 555 q 289 387 289 443 l 289 387 q 297 330 289 355 q 325 290 304 304 q 384 276 345 276 q 456 290 423 276 q 514 328 489 304 q 550 382 538 352 l 550 382 q 558 409 555 395 q 562 435 561 422 l 562 435 q 521 380 551 395 q 464 365 490 365 l 464 365 q 400 392 424 365 q 376 458 376 418 l 376 458 q 409 539 376 507 q 488 571 442 571 q 560 539 534 571 q 585 452 585 506 l 585 452 q 551 342 585 389 q 457 269 517 295 q 318 243 396 243 m 180 -44 l 180 -44 q 160 -27 170 -36 l 160 -27 q 101 14 130 -2 q 39 29 72 29 l 39 29 q 2 19 14 29 q -11 -9 -11 9 l -11 -9 q 12 -49 -11 -34 q 76 -65 34 -65 l 76 -65 q 157 -51 110 -65 l 157 -51 q 180 -44 169 -48 "},R:{ha:742,x_min:-48,x_max:725,o:"m 324 342 l 324 342 l 262 106 q 253 58 254 76 q 266 31 251 40 q 320 20 281 22 l 320 20 l 316 0 q 237 3 282 2 q 138 3 191 3 q 34 3 85 3 q -48 0 -18 2 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 190 602 q 199 650 198 632 q 185 677 199 668 q 132 688 170 686 l 132 688 l 137 708 q 187 707 157 707 q 250 706 217 706 q 307 705 282 705 l 307 705 q 395 706 360 705 q 460 707 429 707 l 460 707 q 661 676 596 707 q 725 569 725 645 l 725 569 q 676 449 725 499 q 538 372 626 399 l 538 372 q 409 348 479 354 l 409 348 q 479 341 445 345 l 479 341 q 558 321 524 335 q 608 280 592 306 q 617 209 624 253 l 617 209 l 600 105 q 603 58 595 72 q 630 43 611 43 l 630 43 q 666 60 651 43 q 692 107 681 76 l 692 107 l 697 121 l 720 121 l 716 108 q 655 16 697 45 q 541 -14 613 -14 l 541 -14 q 424 21 458 -14 q 399 116 389 56 l 399 116 l 418 230 q 418 289 424 264 q 387 328 412 314 l 387 328 q 324 342 366 340 m 402 636 l 329 359 q 391 373 359 361 l 391 373 q 457 414 426 386 q 506 486 487 442 q 524 590 524 530 l 524 590 q 506 665 524 641 q 454 688 487 688 l 454 688 q 422 678 434 688 q 402 636 410 667 l 402 636 "},S:{ha:609,x_min:-35,x_max:649,o:"m 629 715 l 649 715 q 622 640 639 689 q 590 511 605 590 l 590 511 l 570 511 q 575 540 573 525 q 576 566 576 555 l 576 566 q 559 636 576 607 q 509 680 541 664 q 432 695 477 695 l 432 695 q 357 673 389 695 q 324 598 324 651 l 324 598 q 340 532 324 564 q 382 467 356 499 q 436 403 407 435 q 490 337 464 370 q 531 266 515 303 q 547 188 547 229 l 547 188 q 518 95 547 133 q 444 32 489 56 q 349 -3 399 8 q 256 -14 299 -14 l 256 -14 q 171 -9 204 -14 q 114 7 138 -4 q 62 32 90 17 l 62 32 q 43 43 52 38 q 28 47 34 47 l 28 47 q 7 36 15 47 q -15 -7 -1 25 l -15 -7 l -35 -7 q -16 44 -26 15 q 6 119 -6 73 q 33 233 18 164 l 33 233 l 53 233 q 46 196 48 218 q 44 155 43 173 l 44 155 q 90 46 47 82 q 207 9 133 9 l 207 9 q 301 36 277 9 q 324 101 324 62 l 324 101 q 310 180 324 143 q 272 249 295 216 q 224 313 249 281 q 175 376 198 344 q 138 444 152 408 q 123 519 123 479 l 123 519 q 148 610 123 572 q 212 673 172 648 q 298 710 252 698 q 386 722 344 722 l 386 722 q 499 705 457 722 q 563 676 541 687 l 563 676 l 581 667 q 596 662 591 662 l 596 662 q 629 715 610 662 l 629 715 "},T:{ha:695,x_min:78,x_max:888,o:"m 790 886 l 790 886 q 862 860 835 886 q 888 800 888 833 l 888 800 q 867 736 888 763 q 804 691 845 708 l 804 691 q 728 671 771 678 q 631 664 684 664 l 631 664 q 602 665 617 664 l 602 665 l 457 116 q 451 61 448 81 q 474 32 454 41 q 532 20 493 23 l 532 20 l 528 0 q 437 3 493 2 q 319 3 380 3 l 319 3 q 208 3 261 3 q 123 0 155 2 l 123 0 l 127 20 q 194 31 169 22 q 232 60 218 39 q 254 116 245 80 l 254 116 l 404 679 q 372 681 388 680 l 372 681 q 290 684 326 684 q 225 680 254 684 q 176 667 195 676 l 176 667 q 240 637 214 662 q 265 570 265 611 l 265 570 q 237 499 265 527 q 168 470 209 470 l 168 470 q 102 500 125 470 q 78 567 78 529 l 78 567 q 93 626 78 594 q 151 678 108 657 l 151 678 q 201 695 175 690 q 249 701 226 700 q 285 702 271 702 l 285 702 q 411 698 348 702 q 533 689 474 693 q 641 684 592 684 l 641 684 q 700 687 676 684 l 700 687 q 731 692 716 689 l 731 692 q 706 725 718 705 l 706 725 q 691 786 691 751 l 691 786 q 719 859 691 832 q 790 886 747 886 "},U:{ha:702,x_min:70,x_max:796,o:"m 590 280 l 651 512 q 673 615 669 579 q 659 666 676 650 q 595 688 641 682 l 595 688 l 601 708 q 653 706 621 707 q 712 705 684 705 l 712 705 q 758 706 735 705 q 796 708 780 707 l 796 708 l 790 688 q 739 667 758 682 q 707 621 720 652 q 678 532 693 589 l 678 532 l 616 291 q 518 79 580 153 l 518 79 q 429 12 482 37 q 313 -14 375 -14 l 313 -14 q 168 13 222 -14 q 91 81 114 40 l 91 81 q 71 169 71 119 q 89 288 70 218 l 89 288 l 172 602 q 180 657 182 639 q 163 681 178 674 q 113 688 147 687 l 113 688 l 119 708 q 200 706 148 707 q 308 705 251 705 l 308 705 q 403 706 358 705 q 483 708 448 707 l 483 708 l 477 688 q 424 681 443 687 q 395 657 405 674 q 374 602 384 639 l 374 602 l 286 271 q 263 155 268 202 q 266 78 258 107 q 290 35 273 48 q 332 21 307 21 l 332 21 q 457 55 407 21 q 539 147 507 88 q 590 280 571 206 l 590 280 "},V:{ha:680,x_min:90,x_max:806,o:"m 397 186 l 652 577 q 675 640 678 617 q 647 674 671 663 q 584 688 623 685 l 584 688 l 589 708 q 626 707 599 707 q 683 706 652 706 q 731 705 713 705 l 731 705 q 771 706 752 705 q 806 708 790 707 l 806 708 l 801 688 q 758 670 777 681 q 717 635 738 658 q 669 569 696 611 l 669 569 l 296 -5 q 259 -3 277 -3 q 221 -5 240 -3 l 221 -5 l 142 624 q 121 674 138 660 q 90 688 104 687 l 90 688 l 95 708 q 171 706 124 707 q 263 705 217 705 l 263 705 q 363 706 317 705 q 437 708 408 707 l 437 708 l 432 688 q 381 680 400 687 q 356 656 362 673 q 352 604 349 639 l 352 604 l 397 186 "},W:{ha:1035,x_min:86,x_max:1155,o:"m 790 209 l 1001 577 q 1022 642 1025 619 q 996 675 1019 665 q 933 688 972 685 l 933 688 l 938 708 q 975 707 948 707 q 1032 706 1001 706 q 1080 705 1062 705 l 1080 705 q 1120 706 1101 705 q 1155 708 1139 707 l 1155 708 l 1150 688 q 1106 670 1126 681 q 1064 636 1085 659 q 1018 569 1043 613 l 1018 569 l 691 -5 l 616 -5 l 561 435 l 292 -5 l 217 -5 l 138 624 q 117 674 134 660 q 86 688 100 687 l 86 688 l 91 708 q 167 706 120 707 q 259 705 213 705 l 259 705 q 341 706 304 705 q 403 708 378 707 l 403 708 l 398 688 q 357 671 368 686 q 348 604 345 656 l 348 604 l 392 199 l 557 465 l 537 624 q 520 674 533 660 q 495 688 506 687 l 495 688 l 500 708 q 571 706 527 707 q 658 705 615 705 l 658 705 q 758 706 712 705 q 832 708 803 707 l 832 708 l 827 688 q 761 671 779 686 q 747 604 742 656 l 747 604 l 790 209 "},X:{ha:769,x_min:-45,x_max:842,o:"m 501 429 l 540 105 q 553 77 543 86 q 582 67 563 67 l 582 67 q 617 79 602 67 q 641 119 631 91 l 641 119 l 658 170 l 678 170 l 652 93 q 593 10 630 34 q 502 -14 555 -14 l 502 -14 q 407 4 442 -14 q 355 57 372 22 q 331 142 338 92 l 331 142 l 320 231 q 305 204 313 217 l 305 204 q 232 97 270 145 q 157 19 194 49 l 157 19 q 63 -14 112 -14 q -15 20 14 -14 q -45 102 -45 53 l -45 102 q -13 187 -45 155 q 64 218 19 218 l 64 218 q 124 196 102 218 q 146 134 146 174 l 146 134 q 117 56 146 89 q 42 11 88 22 l 42 11 q 52 5 46 7 q 68 3 58 3 l 68 3 q 103 10 86 3 q 136 28 119 17 l 136 28 q 208 99 166 50 q 295 223 250 148 l 295 223 q 316 262 306 242 l 316 262 l 273 608 q 261 639 270 630 q 233 648 251 648 l 233 648 q 199 634 214 648 q 172 589 183 620 l 172 589 l 155 538 l 135 538 l 161 615 q 225 698 183 674 q 324 722 266 722 l 324 722 q 410 706 377 722 q 460 655 442 689 q 484 566 478 620 l 484 566 l 497 462 q 507 484 502 473 l 507 484 q 575 603 539 549 q 643 686 611 656 l 643 686 q 734 722 688 722 l 734 722 q 813 689 784 722 q 842 606 842 655 l 842 606 q 810 522 842 553 q 733 490 778 490 l 733 490 q 674 512 696 490 q 651 574 651 534 l 651 574 q 680 653 651 619 q 755 697 709 687 l 755 697 q 745 703 751 701 q 729 705 739 705 l 729 705 q 697 699 713 705 q 663 680 680 692 l 663 680 q 597 602 635 656 q 519 467 559 548 l 519 467 q 501 429 509 448 l 501 429 "},Y:{ha:776,x_min:73,x_max:854,o:"m 469 292 l 422 106 q 420 52 413 70 q 447 28 426 34 q 501 20 467 22 l 501 20 l 496 0 q 441 2 475 1 q 367 3 406 2 q 292 3 327 3 l 292 3 q 189 3 238 3 q 111 0 140 2 l 111 0 l 116 20 q 169 28 150 22 q 199 52 188 34 q 219 106 210 70 l 219 106 l 271 311 q 264 363 268 336 l 264 363 q 247 463 257 414 q 223 551 236 511 q 193 613 209 590 q 157 636 177 636 l 157 636 q 128 621 138 636 q 112 589 117 605 l 112 589 l 95 538 l 73 538 l 94 602 q 164 697 117 671 q 263 722 211 722 l 263 722 q 380 682 340 722 q 439 562 420 641 q 470 369 457 483 l 470 369 q 539 539 501 464 q 618 662 577 613 l 618 662 q 671 706 641 689 q 737 722 700 722 l 737 722 q 822 691 790 722 q 854 615 854 660 l 854 615 q 822 539 854 567 q 742 510 789 510 l 742 510 q 678 530 702 510 q 653 584 653 549 l 653 584 q 683 660 653 629 q 757 697 713 690 l 757 697 q 747 703 753 701 q 732 705 740 705 l 732 705 q 702 700 716 705 q 668 681 687 695 l 668 681 q 606 609 643 663 q 530 469 568 555 l 530 469 q 469 292 496 391 l 469 292 "},Z:{ha:662,x_min:-30,x_max:724,o:"m 326 346 l 164 346 l 171 366 l 346 366 l 610 626 q 518 557 566 584 l 518 557 q 402 526 461 526 l 402 526 q 334 532 363 526 q 281 544 304 537 q 238 557 257 551 q 199 562 218 562 l 199 562 q 178 557 186 562 q 170 539 170 552 l 170 539 q 186 513 170 525 q 243 492 202 500 l 243 492 l 238 473 q 169 492 203 479 q 114 529 135 505 q 92 589 92 553 l 92 589 q 136 685 92 647 q 253 722 179 722 l 253 722 q 336 711 300 722 q 404 684 372 699 q 471 657 436 668 q 552 645 506 645 l 552 645 q 592 649 573 645 q 630 660 610 653 l 630 660 q 678 709 653 692 q 718 713 703 726 l 718 713 q 716 681 730 703 q 649 638 702 658 l 649 638 l 372 366 l 524 366 l 516 346 l 352 346 l 83 82 q 177 151 128 124 l 177 151 q 293 182 234 182 l 293 182 q 362 177 332 182 q 415 164 391 171 q 458 152 438 157 q 496 146 477 146 l 496 146 q 517 151 509 146 q 525 169 525 156 l 525 169 q 509 196 525 183 q 452 216 493 208 l 452 216 l 456 235 q 526 217 492 230 q 581 180 559 203 q 602 119 602 156 l 602 119 q 559 24 602 61 q 441 -14 515 -14 l 441 -14 q 358 -2 394 -14 q 290 25 322 9 q 223 52 258 40 q 142 63 188 63 l 142 63 q 103 59 121 63 q 64 48 84 55 l 64 48 q 16 -1 42 16 q -24 -5 -10 -18 l -24 -5 q -22 28 -36 6 q 45 70 -8 50 l 45 70 l 326 346 "},a:{ha:582,x_min:-7,x_max:570,o:"m 377 476 l 389 518 q 487 523 444 519 q 570 533 529 526 l 570 533 l 435 85 q 431 60 430 69 q 436 47 431 50 q 447 43 440 43 l 447 43 q 470 54 456 43 q 500 106 484 64 l 500 106 l 521 162 l 540 162 l 515 89 q 478 25 501 47 q 427 -5 454 3 q 372 -14 399 -14 l 372 -14 q 285 21 311 -14 l 285 21 q 269 76 270 42 l 269 76 q 269 99 268 87 l 269 99 q 238 42 256 64 l 238 42 q 183 -1 213 11 q 117 -14 152 -14 l 117 -14 q 24 19 54 -14 q -7 111 -7 51 l -7 111 q 13 229 -7 169 q 66 344 32 289 q 141 441 99 398 q 227 508 182 483 q 314 533 272 533 l 314 533 q 364 513 346 533 l 364 513 q 377 476 374 501 l 377 476 m 204 54 l 204 54 q 225 62 214 54 q 248 90 236 70 q 274 144 260 109 l 274 144 q 292 195 283 166 l 292 195 l 366 441 q 365 473 369 462 l 365 473 q 348 484 360 484 l 348 484 q 310 463 331 484 q 266 404 288 441 q 224 318 243 366 q 193 215 204 269 q 181 107 181 161 l 181 107 q 186 67 181 79 q 204 54 191 54 "},b:{ha:575,x_min:-32,x_max:552,o:"m 150 8 l 150 8 q 69 9 112 18 l 69 9 q -17 -16 23 -1 l -17 -16 l -32 -9 q -19 20 -25 5 q -10 50 -14 34 l -10 50 l 174 667 q 172 717 184 701 q 111 733 160 733 l 111 733 l 118 754 q 264 766 200 755 q 386 795 327 776 l 386 795 l 278 431 q 289 449 283 440 l 289 449 q 346 513 315 492 q 415 533 377 533 l 415 533 q 519 491 485 533 q 552 370 552 448 l 552 370 q 538 271 552 323 q 497 168 524 218 q 431 76 470 117 q 342 11 392 35 q 229 -14 291 -14 l 229 -14 q 179 -6 201 -14 l 179 -6 q 150 8 161 0 m 342 466 l 342 466 q 309 448 326 466 q 274 398 291 430 l 274 398 q 260 370 267 385 l 260 370 l 158 23 q 166 21 162 22 l 166 21 q 184 19 174 19 l 184 19 q 238 44 211 19 q 287 110 264 68 q 328 202 310 151 q 356 307 346 253 q 366 409 366 360 l 366 409 q 360 455 366 444 q 342 466 354 466 "},c:{ha:484,x_min:2,x_max:499,o:"m 382 513 l 382 513 q 310 482 345 513 q 248 398 275 450 q 205 281 221 345 q 189 150 189 216 l 189 150 q 211 72 189 96 q 269 48 233 48 l 269 48 q 328 65 298 48 q 389 128 358 82 l 389 128 l 409 120 q 357 56 388 87 q 282 6 325 25 q 180 -14 238 -14 l 180 -14 q 53 24 104 -14 q 2 144 2 62 l 2 144 q 19 251 2 196 q 67 356 35 305 q 143 446 98 406 q 245 510 188 486 q 369 533 302 533 l 369 533 q 465 502 431 533 q 499 429 499 471 l 499 429 q 483 367 499 397 q 441 318 467 337 q 382 298 414 298 l 382 298 q 335 316 356 298 q 314 368 314 334 l 314 368 q 345 453 314 417 q 416 501 376 489 l 416 501 q 401 510 409 507 q 382 513 393 513 "},d:{ha:603,x_min:-1,x_max:656,o:"m 656 795 l 460 85 q 457 52 451 60 q 472 43 463 43 q 495 54 481 43 q 525 106 509 64 l 525 106 l 546 162 l 565 162 l 540 89 q 503 25 526 47 q 452 -5 479 3 q 397 -14 424 -14 l 397 -14 q 307 24 333 -14 l 307 24 q 293 79 293 45 l 293 79 q 298 128 292 101 l 298 128 q 292 113 295 120 l 292 113 q 225 18 263 50 q 128 -14 187 -14 l 128 -14 q 65 1 94 -14 q 17 48 35 16 q -1 132 -1 80 l -1 132 q 13 230 -1 176 q 55 336 27 283 q 123 434 82 389 q 218 506 164 479 q 338 533 271 533 l 338 533 q 390 521 377 533 l 390 521 q 399 508 395 515 l 399 508 l 441 667 q 439 717 451 701 q 378 733 427 733 l 378 733 l 385 754 q 532 766 467 755 q 656 795 597 776 l 656 795 m 210 48 l 210 48 q 240 65 222 48 q 278 121 257 82 q 321 222 299 159 l 321 222 q 331 252 326 236 l 331 252 l 393 485 q 387 499 390 493 l 387 499 q 361 510 381 510 l 361 510 q 320 489 343 510 q 274 428 297 467 q 230 338 250 389 q 198 228 210 287 q 186 105 186 168 l 186 105 q 191 63 186 77 q 210 48 196 48 "},e:{ha:496,x_min:-3,x_max:503,o:"m 187 206 l 187 206 q 184 155 184 180 l 184 155 q 207 78 184 97 q 267 58 230 58 l 267 58 q 327 73 287 58 q 407 128 367 88 l 407 128 l 423 120 q 365 56 401 87 q 280 6 329 25 q 170 -14 231 -14 l 170 -14 q 84 2 123 -14 q 21 50 44 18 q -3 127 -3 81 l -3 127 q 16 244 -3 186 q 68 354 34 302 q 150 447 102 406 q 255 510 197 487 q 379 533 313 533 l 379 533 q 468 512 432 533 q 503 445 503 490 l 503 445 q 483 374 503 407 q 428 313 463 340 q 349 263 393 285 q 257 225 305 241 l 257 225 q 187 206 222 213 m 190 224 l 190 224 q 225 246 208 234 l 225 246 q 282 292 256 267 l 282 292 q 348 381 322 331 q 373 489 373 431 l 373 489 q 369 509 373 503 q 357 514 365 514 l 357 514 q 314 492 337 514 q 267 432 290 469 q 226 347 244 394 q 196 251 207 300 l 196 251 q 190 224 192 237 "},f:{ha:355,x_min:-58,x_max:565,o:"m 127 499 l 47 499 l 53 519 l 132 519 q 183 650 154 597 l 183 650 q 257 738 214 707 l 257 738 q 327 772 289 761 q 408 782 364 782 l 408 782 q 524 752 482 782 q 565 670 565 722 l 565 670 q 552 624 565 647 q 514 585 538 600 q 457 570 490 570 l 457 570 q 399 588 420 570 q 377 638 377 605 l 377 638 q 401 708 377 676 q 466 756 424 740 l 466 756 q 453 761 459 759 q 440 762 447 762 l 440 762 q 414 759 426 762 q 391 746 402 755 l 391 746 q 374 725 382 738 q 358 693 365 712 q 343 647 350 674 l 343 647 l 309 519 l 408 519 l 402 499 l 303 499 l 123 -174 q 27 -178 69 -175 q -58 -188 -16 -181 l -58 -188 l 127 499 "},g:{ha:487,x_min:-107,x_max:547,o:"m 292 532 l 292 532 q 373 521 337 532 l 373 521 q 405 554 386 540 l 405 554 q 478 579 438 579 l 478 579 q 530 560 513 579 q 547 513 547 541 l 547 513 q 532 468 547 484 q 498 452 517 452 l 498 452 q 468 465 482 452 q 449 504 453 478 l 449 504 q 457 560 446 527 l 457 560 q 410 531 428 548 l 410 531 q 394 513 402 523 l 394 513 q 409 506 402 509 l 409 506 q 456 418 456 479 l 456 418 q 424 324 456 370 q 332 247 391 277 l 332 247 q 253 222 296 229 l 253 222 q 219 208 233 214 l 219 208 q 177 185 191 195 q 163 165 163 175 l 163 165 q 173 152 163 157 q 198 140 182 146 l 198 140 l 289 106 q 342 81 316 96 q 386 43 368 66 q 403 -16 403 19 l 403 -16 q 374 -93 403 -61 q 298 -147 345 -126 q 196 -178 250 -168 q 90 -188 141 -188 l 90 -188 q -5 -178 40 -188 q -78 -152 -50 -169 q -107 -111 -107 -135 l -107 -111 q -85 -75 -107 -90 q -29 -53 -63 -61 q 40 -42 4 -45 q 103 -41 75 -39 l 103 -41 l 104 -56 q 59 -91 72 -74 q 45 -126 45 -109 l 45 -126 q 62 -159 45 -147 q 111 -171 79 -171 l 111 -171 q 162 -164 135 -171 q 213 -145 189 -158 q 251 -116 236 -133 q 265 -80 265 -100 l 265 -80 q 249 -50 265 -59 q 207 -35 232 -42 l 207 -35 l 71 8 q 27 34 46 16 q 7 77 7 51 l 7 77 q 37 134 7 109 q 118 181 67 158 l 118 181 q 204 217 158 198 l 204 217 q 191 217 197 217 l 191 217 q 74 244 121 217 q 27 331 27 271 l 27 331 q 45 403 27 367 q 98 468 63 438 q 181 515 132 497 q 292 532 230 532 m 266 514 l 266 514 q 246 503 256 514 q 226 470 235 491 q 209 422 216 449 q 198 361 202 394 q 194 292 194 328 l 194 292 q 199 247 194 259 q 213 235 203 235 l 213 235 q 242 254 228 235 q 266 304 255 272 q 282 375 276 335 q 287 458 287 415 l 287 458 q 284 497 287 479 q 266 514 280 514 "},h:{ha:592,x_min:-24,x_max:558,o:"m 154 4 l 153 0 l -24 0 l 174 667 q 172 717 184 701 q 111 733 160 733 l 111 733 l 118 754 q 264 766 200 755 q 386 795 327 776 l 386 795 l 256 351 q 319 460 288 421 l 319 460 q 386 518 351 502 q 460 533 420 533 l 460 533 q 533 513 510 533 q 558 459 556 493 q 545 382 559 424 l 545 382 l 446 85 q 444 50 436 57 q 458 43 451 43 l 458 43 q 481 54 467 43 q 511 106 495 64 l 511 106 l 532 162 l 551 162 l 526 89 q 489 25 512 47 q 438 -5 465 3 q 383 -14 410 -14 l 383 -14 q 305 10 330 -14 q 279 73 280 33 q 292 158 277 112 l 292 158 l 378 417 q 386 447 384 435 q 385 465 387 459 q 376 471 383 471 l 376 471 q 338 444 360 471 q 292 370 316 417 q 242 263 267 323 q 194 136 217 202 l 194 136 q 184 105 189 120 l 184 105 l 155 7 q 154 3 154 5 l 154 3 l 154 4 "},i:{ha:336,x_min:21,x_max:380,o:"m 35 158 l 127 434 q 128 473 137 465 l 128 473 q 118 476 124 476 l 118 476 q 90 463 103 476 q 63 413 77 449 l 63 413 l 40 352 l 21 352 l 49 430 q 85 491 63 468 q 135 523 106 513 q 198 533 164 533 l 198 533 q 259 520 236 533 q 292 487 282 507 q 302 442 302 466 q 294 393 302 417 l 294 393 l 190 85 q 187 52 182 60 q 202 43 192 43 l 202 43 q 225 54 211 43 q 255 106 239 64 l 255 106 l 276 162 l 295 162 l 270 89 q 232 25 255 47 q 182 -5 209 3 q 127 -14 154 -14 l 127 -14 q 56 5 83 -14 q 22 62 28 23 q 35 158 16 100 l 35 158 m 169 676 l 169 676 q 204 756 169 730 q 291 782 239 782 l 291 782 q 358 765 335 782 q 380 714 380 748 l 380 714 q 345 639 380 667 q 257 610 309 610 l 257 610 q 192 627 214 610 q 169 676 169 644 "},j:{ha:318,x_min:-139,x_max:373,o:"m -139 -188 l -139 -188 l -134 -168 q -60 -139 -94 -168 q -9 -42 -26 -111 l -9 -42 l 124 434 q 128 467 130 457 q 114 476 126 476 l 114 476 q 86 462 99 476 q 60 413 73 447 l 60 413 l 37 352 l 18 352 l 46 430 q 110 511 67 488 q 197 533 152 533 l 197 533 q 271 512 248 533 q 295 458 293 490 q 288 393 297 425 l 288 393 l 202 80 q 171 -19 188 21 q 132 -87 154 -59 q 77 -138 109 -115 l 77 -138 q -5 -174 46 -160 q -139 -188 -56 -188 m 162 676 l 162 676 q 197 756 162 730 q 284 782 232 782 l 284 782 q 351 765 328 782 q 373 714 373 748 l 373 714 q 338 639 373 667 q 250 610 302 610 l 250 610 q 185 627 207 610 q 162 676 162 644 "},k:{ha:577,x_min:-24,x_max:569,o:"m 236 282 l 153 0 l -24 0 l 174 667 q 172 717 184 701 q 111 733 160 733 l 111 733 l 118 754 q 264 766 200 755 q 386 795 327 776 l 386 795 l 241 301 q 281 318 265 306 l 281 318 q 319 361 305 335 q 342 415 333 386 q 361 469 351 443 q 390 510 371 494 l 390 510 q 423 528 405 523 q 454 533 441 533 l 454 533 q 541 499 512 533 q 569 419 569 465 l 569 419 q 556 364 569 387 q 519 330 542 341 q 468 318 496 318 l 468 318 q 408 339 429 318 q 387 387 387 359 l 387 387 q 415 457 387 428 q 476 501 442 486 l 476 501 q 465 511 472 507 q 451 514 458 514 l 451 514 q 426 510 437 514 q 405 498 415 506 l 405 498 q 378 458 388 484 q 358 403 368 432 q 333 347 348 373 q 292 303 318 320 l 292 303 q 265 291 280 295 l 265 291 q 305 290 285 291 l 305 290 q 387 271 351 286 q 439 225 422 256 q 444 143 455 194 l 444 143 l 432 85 q 431 52 427 60 q 444 43 435 43 q 467 54 453 43 q 497 106 481 64 l 497 106 l 518 162 l 537 162 l 512 89 q 471 25 497 47 q 413 -5 444 3 q 352 -14 382 -14 l 352 -14 q 269 20 291 -14 q 260 115 247 54 l 260 115 l 277 186 q 276 259 291 237 l 276 259 q 236 282 265 274 l 236 282 "},l:{ha:316,x_min:3,x_max:380,o:"m 380 795 l 169 85 q 169 52 162 61 q 185 43 176 43 l 185 43 q 205 53 190 43 q 236 106 220 62 l 236 106 l 257 162 l 276 162 l 251 89 q 212 24 236 46 q 160 -6 187 2 q 109 -14 133 -14 l 109 -14 q 54 -3 77 -14 q 17 30 30 8 q 3 83 4 51 q 15 158 2 115 l 15 158 l 168 667 q 166 717 178 701 q 105 733 154 733 l 105 733 l 112 754 q 258 766 194 755 q 380 795 321 776 l 380 795 "},m:{ha:887,x_min:3,x_max:853,o:"m 219 151 l 180 0 l 3 0 l 125 434 q 130 459 130 450 q 126 472 129 468 q 114 476 122 476 l 114 476 q 87 462 100 476 q 61 413 74 447 l 61 413 l 38 352 l 19 352 l 47 430 q 83 491 61 468 q 133 523 105 513 q 191 533 161 533 l 191 533 q 249 521 228 533 q 280 489 270 509 q 289 443 289 468 q 282 393 288 418 l 282 393 l 270 345 q 281 370 275 358 l 281 370 q 370 495 320 456 q 486 533 419 533 l 486 533 q 539 523 519 533 q 567 493 558 512 q 574 445 575 473 q 562 382 572 417 l 562 382 l 557 364 q 613 458 584 422 l 613 458 q 685 517 647 500 q 763 533 722 533 l 763 533 q 829 515 807 533 q 853 463 851 496 q 839 382 855 429 l 839 382 l 740 85 q 738 50 730 57 q 752 43 745 43 l 752 43 q 775 54 761 43 q 805 106 789 64 l 805 106 l 826 162 l 845 162 l 820 89 q 783 25 806 47 q 732 -5 759 3 q 677 -14 704 -14 l 677 -14 q 621 -3 644 -14 q 584 28 597 7 q 571 82 571 49 q 586 158 571 114 l 586 158 l 672 417 q 680 451 680 440 q 671 461 679 461 l 671 461 q 640 446 658 461 q 598 394 621 430 q 548 294 574 357 l 548 294 q 493 142 522 233 l 493 142 l 452 0 l 274 0 l 394 417 q 401 441 398 431 q 402 456 403 451 q 392 461 400 461 l 392 461 q 352 438 373 461 q 308 373 331 415 q 262 270 285 330 l 262 270 q 219 151 241 217 l 219 151 "},n:{ha:619,x_min:3,x_max:585,o:"m 181 5 l 180 0 l 3 0 l 125 434 q 131 459 130 450 q 129 472 132 468 q 116 476 125 476 l 116 476 q 88 463 101 476 q 61 413 75 449 l 61 413 l 38 352 l 19 352 l 47 430 q 99 508 66 483 q 184 533 132 533 l 184 533 q 246 521 223 533 q 279 487 269 508 q 289 442 289 466 q 283 393 289 417 l 283 393 l 255 286 q 279 342 267 316 l 279 342 q 346 460 313 418 q 413 518 378 502 q 487 533 447 533 l 487 533 q 560 513 537 533 q 585 459 583 493 q 572 382 586 424 l 572 382 l 473 85 q 471 50 463 57 q 485 43 478 43 l 485 43 q 508 54 494 43 q 538 106 522 64 l 538 106 l 559 162 l 578 162 l 553 89 q 516 25 539 47 q 465 -5 492 3 q 410 -14 437 -14 l 410 -14 q 356 -5 379 -14 q 320 22 333 4 l 320 22 q 304 75 305 43 q 319 158 302 106 l 319 158 l 405 417 q 413 447 411 435 q 412 465 414 459 q 403 471 410 471 l 403 471 q 365 444 387 471 q 319 370 343 417 q 269 263 294 323 q 221 136 244 202 q 181 3 198 69 l 181 3 l 181 5 "},o:{ha:557,x_min:6,x_max:532,o:"m 349 513 l 349 513 q 309 485 332 513 q 262 408 286 456 q 218 301 238 360 q 185 180 197 242 q 172 62 172 118 l 172 62 q 177 19 172 31 q 191 6 181 6 l 191 6 q 230 33 207 6 q 276 106 252 60 q 320 210 299 152 q 353 332 340 268 q 366 455 366 395 l 366 455 q 361 503 366 493 q 349 513 356 513 m 6 156 l 6 156 q 19 255 6 203 q 59 357 32 307 q 128 446 86 406 q 226 510 169 486 q 354 533 282 533 l 354 533 q 487 489 441 533 q 532 363 532 445 l 532 363 q 519 264 532 316 q 479 163 506 212 q 411 73 452 113 q 313 10 369 33 q 184 -14 256 -14 l 184 -14 q 52 30 97 -14 q 6 156 6 74 "},p:{ha:605,x_min:-105,x_max:580,o:"m 187 652 l 187 652 q 286 667 240 657 q 374 690 331 676 l 374 690 l 298 420 q 314 449 306 435 l 314 449 q 373 513 341 492 q 443 533 405 533 l 443 533 q 547 491 513 533 q 580 370 580 448 l 580 370 q 567 271 580 323 q 529 168 554 218 q 467 76 504 117 q 383 11 430 35 q 277 -14 335 -14 l 277 -14 q 215 -6 243 -14 l 215 -6 q 182 7 195 0 l 182 7 l 161 -67 q 164 -142 145 -125 q 236 -160 183 -159 l 236 -160 l 230 -181 q 157 -178 204 -180 q 56 -177 109 -177 l 56 -177 q -36 -178 10 -177 q -105 -181 -82 -180 l -105 -181 l -99 -160 q -47 -146 -63 -160 q -21 -98 -31 -133 l -21 -98 l 156 540 q 143 513 150 526 l 143 513 q 84 417 116 459 q 14 333 51 374 l 14 333 l 3 346 q 69 425 38 385 q 128 518 99 464 q 187 652 157 571 m 370 466 l 370 466 q 337 448 354 466 q 302 398 319 430 l 302 398 q 275 339 288 371 l 275 339 l 186 23 q 194 21 190 22 l 194 21 q 212 19 202 19 l 212 19 q 266 41 239 19 q 315 101 292 63 q 356 185 338 138 q 384 284 374 232 q 394 385 394 336 l 394 385 q 388 452 394 438 q 370 466 381 466 "},q:{ha:581,x_min:2,x_max:587,o:"m 565 467 l 417 -86 q 421 -140 407 -124 q 478 -160 435 -157 l 478 -160 l 472 -181 q 400 -178 447 -180 q 303 -177 353 -177 l 303 -177 q 206 -178 254 -177 q 132 -181 157 -180 l 132 -181 l 138 -160 q 209 -139 188 -158 q 240 -85 230 -121 l 240 -85 l 301 138 q 266 71 284 99 l 266 71 q 208 7 239 27 q 139 -14 177 -14 l 139 -14 q 36 29 69 -14 q 2 149 2 71 l 2 149 q 18 249 2 196 q 62 352 33 301 q 132 443 91 402 q 221 509 172 484 q 325 533 270 533 l 325 533 q 376 525 353 533 l 376 525 q 408 508 395 518 l 408 508 q 487 509 444 500 l 487 509 q 572 533 532 518 l 572 533 l 587 526 q 575 498 580 513 q 565 467 570 483 l 565 467 m 212 63 l 212 63 q 246 81 228 63 q 280 128 263 98 q 312 198 297 158 q 338 281 327 237 l 338 281 l 334 260 l 398 495 q 389 498 393 497 l 389 498 q 370 500 381 500 l 370 500 q 317 474 343 500 q 267 404 290 447 q 226 309 244 360 q 198 205 208 257 q 188 110 188 153 l 188 110 q 194 73 188 82 q 212 63 200 63 "},r:{ha:499,x_min:3,x_max:528,o:"m 254 281 l 180 0 l 3 0 l 125 434 q 129 467 131 457 q 116 476 127 476 l 116 476 q 88 463 101 476 q 61 413 75 449 l 61 413 l 38 352 l 19 352 l 47 430 q 83 491 61 468 q 133 523 104 513 q 196 533 162 533 q 250 521 230 533 q 279 487 270 508 q 289 442 288 466 l 289 442 q 287 418 289 430 l 287 418 q 306 455 297 438 l 306 455 q 361 516 331 498 q 431 533 391 533 l 431 533 q 503 505 478 533 q 528 436 528 477 l 528 436 q 514 375 528 403 q 474 329 499 346 q 415 311 448 311 l 415 311 q 359 330 378 311 q 340 386 340 349 l 340 386 q 355 442 340 416 q 395 487 370 468 q 449 510 420 505 l 449 510 q 443 512 446 511 q 435 513 439 513 l 435 513 q 395 507 416 513 q 350 477 373 501 q 300 398 326 452 l 300 398 q 254 281 278 354 l 254 281 "},s:{ha:446,x_min:-21,x_max:444,o:"m 84 14 l 84 14 q 101 9 92 10 q 119 7 109 7 l 119 7 q 171 28 150 7 q 191 83 191 48 l 191 83 q 175 154 191 117 q 133 232 159 191 l 133 232 q 91 306 109 271 q 73 382 73 340 l 73 382 q 95 459 73 425 q 161 513 117 493 q 272 533 205 533 l 272 533 q 354 523 314 533 q 419 489 393 513 q 444 418 444 464 l 444 418 q 436 377 444 398 q 413 343 428 356 q 373 329 397 329 l 373 329 q 326 353 343 329 q 309 413 309 376 l 309 413 q 320 470 309 445 q 341 507 330 495 l 341 507 q 316 511 333 511 l 316 511 q 264 491 281 511 q 245 433 246 471 l 245 433 q 254 389 245 411 q 276 344 262 366 q 304 297 290 321 l 304 297 q 351 206 337 241 q 364 136 364 170 l 364 136 q 342 61 364 95 q 275 7 319 27 q 164 -14 230 -14 l 164 -14 q 75 -2 117 -14 q 6 37 32 9 q -21 114 -21 65 l -21 114 q -2 177 -21 151 q 47 203 16 203 l 47 203 q 94 179 76 203 q 112 115 112 155 l 112 115 q 102 56 112 83 q 84 14 91 29 "},t:{ha:365,x_min:30,x_max:420,o:"m 320 519 l 420 519 l 417 499 l 314 499 l 193 85 q 193 54 187 64 q 211 43 198 43 l 211 43 q 251 65 231 43 q 283 119 271 87 l 283 119 l 299 162 l 318 162 l 299 107 q 239 18 280 50 q 140 -14 198 -14 l 140 -14 q 63 10 90 -14 q 31 72 36 33 q 39 158 26 111 l 39 158 l 137 499 l 46 499 l 51 519 l 143 519 l 185 666 q 283 670 240 667 q 367 680 326 673 l 367 680 l 320 519 "},u:{ha:617,x_min:17,x_max:600,o:"m 600 533 l 474 85 q 469 53 467 62 q 483 43 470 43 l 483 43 q 512 57 498 43 q 538 106 525 70 l 538 106 l 561 167 l 580 167 l 552 89 q 517 29 539 52 q 467 -4 494 6 q 409 -14 439 -14 l 409 -14 q 353 -3 374 -14 q 320 25 331 7 l 320 25 q 309 72 308 45 q 316 126 309 98 l 316 126 l 338 210 q 318 165 328 185 l 318 165 q 252 54 284 92 q 185 1 219 15 q 110 -14 150 -14 q 46 3 70 -14 q 18 54 22 20 q 29 137 13 87 l 29 137 l 126 434 q 129 470 136 463 q 114 476 121 476 l 114 476 q 91 466 105 476 q 61 413 77 455 l 61 413 l 40 357 l 21 357 l 46 430 q 85 494 61 472 q 136 525 108 516 q 189 533 163 533 l 189 533 q 261 515 234 533 q 294 458 288 496 q 280 361 300 420 l 280 361 l 194 102 q 190 50 179 57 l 190 50 q 196 48 193 48 l 196 48 q 234 75 212 48 q 281 149 256 102 q 331 257 306 196 q 379 384 356 317 l 379 384 q 404 460 392 422 l 404 460 l 419 519 q 516 523 471 520 q 600 533 561 526 l 600 533 "},v:{ha:519,x_min:12,x_max:502,o:"m 463 296 l 463 296 q 381 360 414 319 q 348 451 348 400 l 348 451 q 369 511 348 489 q 426 533 389 533 l 426 533 q 484 507 466 533 q 502 435 502 481 l 502 435 q 490 318 502 380 q 452 197 477 256 q 387 91 426 138 q 294 15 347 43 q 171 -14 240 -14 l 171 -14 q 75 5 109 -14 q 26 52 40 23 q 12 110 12 80 l 12 110 q 50 239 12 175 q 155 365 88 302 q 304 490 221 428 l 304 490 q 252 475 273 489 q 213 442 230 460 q 180 411 196 424 q 142 397 163 397 l 142 397 q 115 405 126 397 q 89 412 103 412 l 89 412 q 69 403 76 412 q 56 374 62 394 l 56 374 l 49 353 l 30 353 l 52 426 q 95 512 70 490 q 146 534 120 534 l 146 534 q 179 527 165 534 q 210 513 193 520 q 256 505 227 505 l 256 505 q 283 508 266 505 q 321 520 300 510 l 321 520 l 331 539 l 352 529 q 292 417 319 475 q 244 301 264 358 q 213 193 224 243 q 202 107 202 143 l 202 107 q 212 56 202 73 q 248 39 222 39 l 248 39 q 307 53 279 39 q 359 92 335 67 q 403 150 383 117 q 438 220 423 182 q 463 296 453 257 "},w:{ha:676,x_min:-5,x_max:633,o:"m 483 69 l 483 69 q 528 82 508 69 q 564 118 548 95 q 589 170 579 140 q 605 235 599 200 q 612 306 611 269 l 612 306 q 542 343 578 322 q 482 395 506 364 q 457 468 457 425 l 457 468 q 473 511 457 489 q 526 533 489 533 l 526 533 q 580 511 559 533 q 613 454 601 488 q 629 385 624 420 q 633 322 633 349 l 633 322 q 624 224 633 273 q 596 133 614 175 q 550 57 577 90 q 488 5 523 24 q 408 -14 452 -14 l 408 -14 q 341 -2 374 -14 l 341 -2 q 289 37 310 9 l 289 37 q 232 3 264 16 l 232 3 q 136 -14 192 -14 l 136 -14 q 60 3 91 -14 q 12 49 28 20 q -5 114 -5 78 l -5 114 q 21 203 -5 160 q 95 291 47 246 q 208 385 142 335 l 208 385 q 346 490 271 433 l 346 490 q 286 476 312 489 l 286 476 q 239 444 259 462 q 199 411 218 425 q 157 397 180 397 l 157 397 q 127 405 138 397 q 102 412 116 412 l 102 412 q 83 403 89 412 q 69 374 76 394 l 69 374 l 62 353 l 43 353 l 65 426 q 110 509 84 489 q 161 528 135 528 l 161 528 q 198 523 181 528 q 235 511 214 517 q 290 505 256 505 l 290 505 q 321 508 301 505 q 364 520 340 510 l 364 520 l 374 539 l 395 529 q 311 417 349 475 q 244 302 272 359 q 201 194 216 245 q 185 102 185 143 l 185 102 q 195 56 185 73 q 232 39 205 39 l 232 39 q 262 44 247 39 l 262 44 q 280 52 271 47 l 280 52 q 266 123 266 80 l 266 123 q 283 213 266 170 q 326 288 300 255 q 382 340 352 321 q 436 359 411 359 l 436 359 q 464 348 455 359 q 475 322 472 337 q 477 296 477 307 l 477 296 q 450 171 477 231 l 450 171 q 409 106 434 136 l 409 106 q 432 83 418 92 l 432 83 q 483 69 453 69 m 399 124 l 399 124 q 429 178 416 149 l 429 178 q 454 290 454 234 l 454 290 q 450 324 454 311 q 438 337 446 337 l 438 337 q 415 314 426 337 q 397 255 404 291 q 390 178 390 219 l 390 178 q 399 124 390 148 "},x:{ha:591,x_min:-46,x_max:617,o:"m 366 353 l 396 88 q 409 52 401 62 q 430 42 417 42 q 457 58 443 42 q 487 124 470 73 l 487 124 l 500 161 l 519 161 l 494 88 q 455 22 480 44 q 401 -7 430 0 q 346 -14 372 -14 l 346 -14 q 259 8 294 -14 q 217 88 223 29 l 217 88 l 212 133 q 204 115 208 124 l 204 115 q 163 47 186 77 l 163 47 q 105 -1 135 11 q 46 -14 74 -14 l 46 -14 q -21 8 3 -14 q -46 66 -46 29 l -46 66 q -18 135 -46 110 q 46 160 9 160 l 46 160 q 112 134 86 160 q 150 63 137 107 l 150 63 q 203 160 182 106 l 203 160 q 207 172 205 166 l 207 172 l 177 431 q 164 464 173 457 q 141 470 154 470 l 141 470 q 125 466 133 470 q 107 445 116 461 q 86 395 98 429 l 86 395 l 73 358 l 54 358 l 79 431 q 118 497 93 475 q 174 526 143 519 q 232 533 204 533 l 232 533 q 320 510 287 533 q 359 417 352 487 l 359 417 l 362 392 q 372 412 366 402 l 372 412 q 408 472 388 444 l 408 472 q 466 521 435 509 q 524 533 496 533 l 524 533 q 591 511 565 533 q 617 448 617 489 l 617 448 q 592 384 617 409 q 527 359 567 359 l 527 359 q 466 380 496 359 q 421 456 435 401 l 421 456 q 384 394 400 428 l 384 394 q 366 353 374 373 l 366 353 "},y:{ha:483,x_min:-132,x_max:475,o:"m 71 -137 l 71 -137 q 171 -75 120 -115 l 171 -75 q 187 -62 179 -69 l 187 -62 l 106 433 q 98 467 102 458 q 85 476 94 476 l 85 476 q 68 465 75 476 q 45 413 60 453 l 45 413 l 24 357 l 5 357 l 30 430 q 84 512 51 491 q 159 533 116 533 l 159 533 q 237 509 206 533 q 277 414 267 484 l 277 414 l 321 93 q 366 169 345 130 l 366 169 q 425 300 404 240 l 425 300 q 372 341 395 317 q 335 392 348 364 q 321 451 321 420 l 321 451 q 342 511 321 489 q 399 533 362 533 l 399 533 q 457 507 439 533 q 475 436 475 481 q 460 337 475 391 q 417 223 444 282 q 354 108 389 164 q 278 4 318 52 l 278 4 q 191 -84 236 -47 q 101 -145 146 -121 q 10 -180 55 -169 l 10 -180 q -21 -186 -6 -184 q -49 -188 -37 -188 l -49 -188 q -110 -170 -89 -188 q -132 -122 -132 -153 l -132 -122 q -110 -71 -132 -93 q -52 -49 -89 -49 q 16 -71 -15 -49 q 71 -137 46 -94 "},z:{ha:476,x_min:-61,x_max:536,o:"m 536 518 l 39 67 q 89 94 64 76 q 138 129 114 111 q 184 159 161 146 q 227 171 206 171 l 227 171 q 264 163 251 171 q 288 147 277 155 q 314 139 298 139 l 314 139 q 334 148 328 139 q 339 164 339 157 l 339 164 q 325 196 339 185 q 295 211 311 207 l 295 211 l 301 226 q 386 186 360 213 q 412 113 412 158 l 412 113 q 397 49 412 78 q 353 3 382 20 q 279 -14 323 -14 l 279 -14 q 219 -5 245 -14 q 169 17 192 4 q 121 38 146 29 q 61 47 95 47 l 61 47 q 13 38 34 47 q -30 0 -9 28 l -30 0 l -61 0 l 448 461 q 389 430 418 450 q 331 388 359 409 q 277 352 303 367 q 227 337 250 337 l 227 337 q 191 345 204 337 q 167 361 177 353 q 142 369 157 369 l 142 369 q 123 362 129 369 q 116 344 116 354 l 116 344 q 127 318 116 327 q 160 297 137 308 l 160 297 l 154 282 q 72 321 101 294 q 43 390 43 347 l 43 390 q 61 456 43 424 q 115 508 79 487 q 204 528 151 528 l 204 528 q 264 520 239 528 q 311 500 289 511 q 357 480 333 488 q 413 471 381 471 l 413 471 q 465 482 444 471 q 505 518 485 492 l 505 518 l 536 518 "},\u00E1:{ha:582,x_min:-7,x_max:584,o:"m 377 476 l 389 518 q 487 523 444 519 q 570 533 529 526 l 570 533 l 435 85 q 431 60 430 69 q 436 47 431 50 q 447 43 440 43 l 447 43 q 470 54 456 43 q 500 106 484 64 l 500 106 l 521 162 l 540 162 l 515 89 q 478 25 501 47 q 427 -5 454 3 q 372 -14 399 -14 l 372 -14 q 285 21 311 -14 l 285 21 q 269 76 270 42 l 269 76 q 269 99 268 87 l 269 99 q 238 42 256 64 l 238 42 q 183 -1 213 11 q 117 -14 152 -14 l 117 -14 q 24 19 54 -14 q -7 111 -7 51 l -7 111 q 13 229 -7 169 q 66 344 32 289 q 141 441 99 398 q 227 508 182 483 q 314 533 272 533 l 314 533 q 364 513 346 533 l 364 513 q 377 476 374 501 l 377 476 m 204 54 l 204 54 q 225 62 214 54 q 248 90 236 70 q 274 144 260 109 l 274 144 q 292 195 283 166 l 292 195 l 366 441 q 365 473 369 462 l 365 473 q 348 484 360 484 l 348 484 q 310 463 331 484 q 266 404 288 441 q 224 318 243 366 q 193 215 204 269 q 181 107 181 161 l 181 107 q 186 67 181 79 q 204 54 191 54 m 338 599 l 328 609 q 382 704 362 663 q 417 775 401 744 q 456 828 433 805 l 456 828 q 509 856 476 848 q 566 837 541 863 l 566 837 q 582 788 589 815 q 550 736 575 761 l 550 736 q 499 697 529 715 q 429 657 469 679 q 338 599 389 634 l 338 599 "},\u00E9:{ha:496,x_min:-3,x_max:563,o:"m 187 206 l 187 206 q 184 155 184 180 l 184 155 q 207 78 184 97 q 267 58 230 58 l 267 58 q 327 73 287 58 q 407 128 367 88 l 407 128 l 423 120 q 365 56 401 87 q 280 6 329 25 q 170 -14 231 -14 l 170 -14 q 84 2 123 -14 q 21 50 44 18 q -3 127 -3 81 l -3 127 q 16 244 -3 186 q 68 354 34 302 q 150 447 102 406 q 255 510 197 487 q 379 533 313 533 l 379 533 q 468 512 432 533 q 503 445 503 490 l 503 445 q 483 374 503 407 q 428 313 463 340 q 349 263 393 285 q 257 225 305 241 l 257 225 q 187 206 222 213 m 190 224 l 190 224 q 225 246 208 234 l 225 246 q 282 292 256 267 l 282 292 q 348 381 322 331 q 373 489 373 431 l 373 489 q 369 509 373 503 q 357 514 365 514 l 357 514 q 314 492 337 514 q 267 432 290 469 q 226 347 244 394 q 196 251 207 300 l 196 251 q 190 224 192 237 m 317 599 l 307 609 q 361 704 341 663 q 396 775 380 744 q 435 828 412 805 l 435 828 q 488 856 455 848 q 545 837 520 863 l 545 837 q 561 788 568 815 q 529 736 554 761 l 529 736 q 478 697 508 715 q 408 657 448 679 q 317 599 368 634 l 317 599 "},\u00ED:{ha:335,x_min:20,x_max:425,o:"m 34 158 l 126 434 q 127 473 136 465 l 127 473 q 117 476 123 476 l 117 476 q 89 463 102 476 q 62 413 76 449 l 62 413 l 39 352 l 20 352 l 48 430 q 84 491 62 468 q 134 523 105 513 q 197 533 163 533 l 197 533 q 258 520 235 533 q 291 487 281 507 q 301 442 301 466 q 293 393 301 417 l 293 393 l 189 85 q 186 52 181 60 q 201 43 191 43 l 201 43 q 224 54 210 43 q 254 106 238 64 l 254 106 l 275 162 l 294 162 l 269 89 q 231 25 254 47 q 181 -5 208 3 q 126 -14 153 -14 l 126 -14 q 55 5 82 -14 q 21 62 27 23 q 34 158 15 100 l 34 158 m 179 599 l 169 609 q 223 704 203 663 q 258 775 242 744 q 297 828 274 805 l 297 828 q 350 856 317 848 q 407 837 382 863 l 407 837 q 423 788 430 815 q 391 736 416 761 l 391 736 q 340 697 370 715 q 270 657 310 679 q 179 599 230 634 l 179 599 "},\u00F3:{ha:557,x_min:6,x_max:570,o:"m 349 513 l 349 513 q 309 485 332 513 q 262 408 286 456 q 218 301 238 360 q 185 180 197 242 q 172 62 172 118 l 172 62 q 177 19 172 31 q 191 6 181 6 l 191 6 q 230 33 207 6 q 276 106 252 60 q 320 210 299 152 q 353 332 340 268 q 366 455 366 395 l 366 455 q 361 503 366 493 q 349 513 356 513 m 6 156 l 6 156 q 19 255 6 203 q 59 357 32 307 q 128 446 86 406 q 226 510 169 486 q 354 533 282 533 l 354 533 q 487 489 441 533 q 532 363 532 445 l 532 363 q 519 264 532 316 q 479 163 506 212 q 411 73 452 113 q 313 10 369 33 q 184 -14 256 -14 l 184 -14 q 52 30 97 -14 q 6 156 6 74 m 324 599 l 314 609 q 368 704 348 663 q 403 775 387 744 q 442 828 419 805 l 442 828 q 495 856 462 848 q 552 837 527 863 l 552 837 q 568 788 575 815 q 536 736 561 761 l 536 736 q 485 697 515 715 q 415 657 455 679 q 324 599 375 634 l 324 599 "},\u00FA:{ha:617,x_min:17,x_max:600,o:"m 600 533 l 474 85 q 469 53 467 62 q 483 43 470 43 l 483 43 q 512 57 498 43 q 538 106 525 70 l 538 106 l 561 167 l 580 167 l 552 89 q 517 29 539 52 q 467 -4 494 6 q 409 -14 439 -14 l 409 -14 q 353 -3 374 -14 q 320 25 331 7 l 320 25 q 309 72 308 45 q 316 126 309 98 l 316 126 l 338 210 q 318 165 328 185 l 318 165 q 252 54 284 92 q 185 1 219 15 q 110 -14 150 -14 q 46 3 70 -14 q 18 54 22 20 q 29 137 13 87 l 29 137 l 126 434 q 129 470 136 463 q 114 476 121 476 l 114 476 q 91 466 105 476 q 61 413 77 455 l 61 413 l 40 357 l 21 357 l 46 430 q 85 494 61 472 q 136 525 108 516 q 189 533 163 533 l 189 533 q 261 515 234 533 q 294 458 288 496 q 280 361 300 420 l 280 361 l 194 102 q 190 50 179 57 l 190 50 q 196 48 193 48 l 196 48 q 234 75 212 48 q 281 149 256 102 q 331 257 306 196 q 379 384 356 317 l 379 384 q 404 460 392 422 l 404 460 l 419 519 q 516 523 471 520 q 600 533 561 526 l 600 533 m 317 599 l 307 609 q 361 704 341 663 q 396 775 380 744 q 435 828 412 805 l 435 828 q 488 856 455 848 q 545 837 520 863 l 545 837 q 561 788 568 815 q 529 736 554 761 l 529 736 q 478 697 508 715 q 408 657 448 679 q 317 599 368 634 l 317 599 "},\u00C1:{ha:669,x_min:-96,x_max:762,o:"m 144 268 l 47 131 q 23 70 20 93 q 52 35 26 46 q 115 20 77 23 l 115 20 l 111 0 q 28 3 59 2 q -31 3 -3 3 l -31 3 q -66 3 -52 3 q -96 0 -80 2 l -96 0 l -92 20 q -55 38 -72 26 q -19 75 -39 50 q 30 139 1 99 l 30 139 l 438 713 q 477 711 456 711 q 513 713 497 711 l 513 713 l 553 84 q 572 35 556 48 q 602 20 587 21 l 602 20 l 598 0 q 520 3 569 2 q 429 3 471 3 l 429 3 q 332 3 378 3 q 259 0 286 2 l 259 0 l 263 20 q 332 38 311 22 q 349 104 352 53 l 349 104 l 340 268 l 144 268 m 158 288 l 339 288 l 327 526 l 158 288 m 467 772 l 460 784 q 538 860 508 826 q 593 918 568 893 q 646 958 617 943 l 646 958 q 684 969 663 967 q 724 964 704 971 q 754 935 743 956 l 754 935 q 755 883 769 907 q 709 842 740 859 l 709 842 q 649 820 683 828 q 571 801 615 811 q 467 772 526 791 l 467 772 "},\u00C9:{ha:637,x_min:-48,x_max:718,o:"m 331 366 l 349 366 q 396 375 373 366 q 437 400 418 384 q 470 436 455 416 q 492 478 484 456 l 492 478 l 514 478 q 495 414 501 439 q 480 356 488 388 l 480 356 q 471 321 475 336 q 464 286 467 305 q 454 234 460 267 l 454 234 l 432 234 q 428 271 432 251 q 412 307 423 290 q 382 335 401 324 q 335 346 363 346 l 335 346 l 326 346 l 262 106 q 254 52 253 70 q 271 29 255 34 q 319 23 286 23 l 319 23 l 332 23 q 417 40 380 23 q 487 96 454 57 q 551 200 519 134 l 551 200 l 573 200 q 563 168 568 187 q 552 128 557 149 l 552 128 q 539 74 547 109 q 526 0 531 38 l 526 0 q 413 3 475 2 q 300 3 350 3 l 300 3 l 232 3 q 143 3 191 3 q 45 2 94 2 q -48 0 -4 1 l -48 0 l -44 20 q 9 28 -10 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 229 707 180 707 q 327 706 278 706 q 416 705 375 705 l 416 705 l 484 705 q 587 706 530 705 q 691 708 644 706 l 691 708 q 670 649 678 673 q 653 590 661 624 l 653 590 q 646 556 649 572 q 640 528 642 540 l 640 528 l 618 528 q 605 622 619 587 q 564 671 591 656 q 497 685 537 685 l 497 685 l 494 685 q 443 680 461 685 q 414 657 424 674 q 394 602 404 639 l 394 602 l 331 366 m 423 772 l 416 784 q 494 860 464 826 q 549 918 524 893 q 602 958 573 943 l 602 958 q 640 969 619 967 q 680 964 660 971 q 710 935 699 956 l 710 935 q 711 883 725 907 q 665 842 696 859 l 665 842 q 605 820 639 828 q 527 801 571 811 q 423 772 482 791 l 423 772 "},\u00CD:{ha:422,x_min:-47,x_max:624,o:"m 394 602 l 262 106 q 254 52 253 70 q 271 28 255 34 q 321 20 287 22 l 321 20 l 317 0 q 234 3 285 2 q 130 3 183 3 l 130 3 q 29 3 76 3 q -47 0 -18 2 l -47 0 l -42 20 q 10 28 -9 22 q 39 52 28 34 q 59 106 50 70 l 59 106 l 191 602 q 199 657 201 639 q 182 681 197 674 q 132 688 166 687 l 132 688 l 137 708 q 213 706 165 707 q 314 705 260 705 l 314 705 q 416 706 367 705 q 502 708 465 707 l 502 708 l 497 688 q 444 681 463 687 q 415 657 425 674 q 394 602 404 639 l 394 602 m 329 772 l 322 784 q 400 860 370 826 q 455 918 430 893 q 508 958 479 943 l 508 958 q 546 969 525 967 q 586 964 566 971 q 616 935 605 956 l 616 935 q 617 883 631 907 q 571 842 602 859 l 571 842 q 511 820 545 828 q 433 801 477 811 q 329 772 388 791 l 329 772 "},\u00D3:{ha:809,x_min:34,x_max:807,o:"m 502 704 l 502 704 q 426 677 463 704 q 357 601 389 649 q 301 490 325 552 q 264 356 277 427 q 250 213 250 285 l 250 213 q 275 60 250 115 q 338 4 300 4 l 338 4 q 414 32 377 4 q 483 108 451 59 q 539 219 515 156 q 577 352 563 281 q 590 495 590 423 l 590 495 q 565 649 590 593 q 502 704 540 704 m 34 226 l 34 226 q 56 362 34 292 q 119 496 78 432 q 219 611 160 560 q 351 692 277 662 q 511 722 425 722 l 511 722 q 728 660 649 722 q 807 481 807 597 l 807 481 q 785 346 807 415 q 722 212 763 276 q 621 97 680 148 q 489 16 562 46 q 329 -14 415 -14 l 329 -14 q 113 49 191 -14 q 34 226 34 111 m 501 772 l 494 784 q 572 860 542 826 q 627 918 602 893 q 680 958 651 943 l 680 958 q 718 969 697 967 q 758 964 738 971 q 788 935 777 956 l 788 935 q 789 883 803 907 q 743 842 774 859 l 743 842 q 683 820 717 828 q 605 801 649 811 q 501 772 560 791 l 501 772 "},\u00DA:{ha:702,x_min:70,x_max:796,o:"m 590 280 l 651 512 q 673 615 669 579 q 659 666 676 650 q 595 688 641 682 l 595 688 l 601 708 q 653 706 621 707 q 712 705 684 705 l 712 705 q 758 706 735 705 q 796 708 780 707 l 796 708 l 790 688 q 739 667 758 682 q 707 621 720 652 q 678 532 693 589 l 678 532 l 616 291 q 518 79 580 153 l 518 79 q 429 12 482 37 q 313 -14 375 -14 l 313 -14 q 168 13 222 -14 q 91 81 114 40 l 91 81 q 71 169 71 119 q 89 288 70 218 l 89 288 l 172 602 q 180 657 182 639 q 163 681 178 674 q 113 688 147 687 l 113 688 l 119 708 q 200 706 148 707 q 308 705 251 705 l 308 705 q 403 706 358 705 q 483 708 448 707 l 483 708 l 477 688 q 424 681 443 687 q 395 657 405 674 q 374 602 384 639 l 374 602 l 286 271 q 263 155 268 202 q 266 78 258 107 q 290 35 273 48 q 332 21 307 21 l 332 21 q 457 55 407 21 q 539 147 507 88 q 590 280 571 206 l 590 280 m 490 772 l 483 784 q 561 860 531 826 q 616 918 591 893 q 669 958 640 943 l 669 958 q 707 969 686 967 q 747 964 727 971 q 777 935 766 956 l 777 935 q 778 883 792 907 q 732 842 763 859 l 732 842 q 672 820 706 828 q 594 801 638 811 q 490 772 549 791 l 490 772 "},\u00F1:{ha:619,x_min:3,x_max:600,o:"m 181 5 l 180 0 l 3 0 l 125 434 q 131 459 130 450 q 129 472 132 468 q 116 476 125 476 l 116 476 q 88 463 101 476 q 61 413 75 449 l 61 413 l 38 352 l 19 352 l 47 430 q 99 508 66 483 q 184 533 132 533 l 184 533 q 246 521 223 533 q 279 487 269 508 q 289 442 289 466 q 283 393 289 417 l 283 393 l 255 286 q 279 342 267 316 l 279 342 q 346 460 313 418 q 413 518 378 502 q 487 533 447 533 l 487 533 q 560 513 537 533 q 585 459 583 493 q 572 382 586 424 l 572 382 l 473 85 q 471 50 463 57 q 485 43 478 43 l 485 43 q 508 54 494 43 q 538 106 522 64 l 538 106 l 559 162 l 578 162 l 553 89 q 516 25 539 47 q 465 -5 492 3 q 410 -14 437 -14 l 410 -14 q 356 -5 379 -14 q 320 22 333 4 l 320 22 q 304 75 305 43 q 319 158 302 106 l 319 158 l 405 417 q 413 447 411 435 q 412 465 414 459 q 403 471 410 471 l 403 471 q 365 444 387 471 q 319 370 343 417 q 269 263 294 323 q 221 136 244 202 q 181 3 198 69 l 181 3 l 181 5 m 359 798 l 359 798 q 409 787 389 798 q 443 762 428 776 q 474 736 458 747 q 510 725 489 725 l 510 725 q 548 739 530 725 q 582 783 565 752 l 582 783 l 600 778 q 524 653 571 691 q 430 615 477 615 l 430 615 q 381 626 400 615 q 346 652 361 637 q 316 677 331 666 q 279 688 300 688 l 279 688 q 242 675 259 688 q 207 630 224 662 l 207 630 l 189 635 q 265 760 218 722 q 359 798 312 798 "},\u00D1:{ha:861,x_min:-85,x_max:973,o:"m 565 -5 l 543 -5 l 281 472 q 251 333 266 401 l 251 333 q 214 183 233 252 q 176 64 195 114 q 139 -11 157 13 q 97 -54 121 -35 q 32 -74 72 -74 l 32 -74 q -53 -43 -21 -74 q -85 33 -85 -12 l -85 33 q -52 110 -85 81 q 27 138 -19 138 l 27 138 q 92 119 68 138 q 116 64 116 99 l 116 64 q 86 -11 116 19 q 12 -49 56 -41 l 12 -49 q 23 -55 16 -53 q 37 -57 29 -57 l 37 -57 q 86 -41 65 -57 q 123 -1 107 -26 l 123 -1 q 182 143 152 45 q 242 380 211 241 l 242 380 q 287 600 264 482 l 287 600 l 287 602 q 293 657 295 639 q 273 681 290 674 q 216 688 255 687 l 216 688 l 221 708 q 261 706 237 707 q 310 705 284 705 l 310 705 q 391 708 357 705 l 391 708 l 610 283 q 620 323 614 303 l 620 323 q 660 472 639 401 q 703 600 680 543 q 748 690 725 656 l 748 690 q 793 736 767 717 q 856 754 819 754 l 856 754 q 941 723 909 754 q 973 647 973 692 l 973 647 q 941 571 973 599 q 861 542 908 542 l 861 542 q 797 562 821 542 q 772 616 772 581 l 772 616 q 802 692 772 661 q 876 729 832 722 l 876 729 q 866 735 872 733 q 851 737 859 737 l 851 737 q 804 721 826 737 q 766 682 782 705 l 766 682 q 672 443 720 614 q 565 -5 624 272 l 565 -5 m 509 948 l 509 948 q 574 937 548 948 q 620 912 600 926 q 661 886 640 897 q 710 875 681 875 l 710 875 q 753 889 733 875 q 792 933 773 902 l 792 933 l 810 928 q 726 803 778 841 q 620 765 673 765 l 620 765 q 555 776 581 765 q 509 802 529 787 q 469 827 489 816 q 419 838 448 838 l 419 838 q 377 825 396 838 q 337 780 357 812 l 337 780 l 319 785 q 404 910 351 872 q 509 948 456 948 "},"\xA1":{ha:328,x_min:-48,x_max:307,o:"m 154 319 l 172 316 q 158 194 156 255 q 166 72 159 133 q 172 -53 172 11 l 172 -53 q 138 -152 172 -117 q 38 -188 104 -188 l 38 -188 q -23 -171 1 -188 q -48 -116 -48 -154 l -48 -116 q -24 -28 -48 -76 q 35 74 0 19 q 102 190 69 128 q 154 319 135 251 l 154 319 m 116 427 l 116 427 q 148 504 116 474 q 228 533 180 533 l 228 533 q 287 516 266 533 q 307 465 307 499 l 307 465 q 292 415 307 439 q 252 376 277 391 q 194 361 226 361 l 194 361 q 136 378 156 361 q 116 427 116 395 "},"!":{ha:348,x_min:36,x_max:371,o:"m 154 196 l 136 199 q 151 316 150 259 q 148 431 152 373 q 144 548 144 488 l 144 548 q 151 627 144 586 q 174 703 158 668 q 218 760 190 738 q 287 782 245 782 l 287 782 q 349 760 326 782 q 371 690 371 737 l 371 690 q 346 582 371 638 q 284 465 321 526 q 211 338 247 404 q 154 196 175 271 l 154 196 m 36 52 l 36 52 q 68 129 36 99 q 148 158 100 158 l 148 158 q 207 141 186 158 q 227 90 227 124 l 227 90 q 212 40 227 63 q 172 1 197 16 q 114 -14 146 -14 l 114 -14 q 56 3 76 -14 q 36 52 36 20 "},"\xBF":{ha:516,x_min:-46,x_max:423,o:"m 229 -163 l 229 -163 q 247 -162 236 -163 q 271 -159 258 -161 q 292 -154 283 -157 l 292 -154 q 234 -128 258 -150 q 210 -76 210 -107 l 210 -76 q 237 -20 210 -42 q 301 2 264 2 l 301 2 q 359 -16 333 2 q 384 -74 384 -35 l 384 -74 q 364 -130 384 -108 q 311 -165 343 -153 q 240 -183 278 -178 q 167 -188 202 -188 l 167 -188 q 12 -156 70 -188 q -46 -67 -46 -124 l -46 -67 q -29 -13 -46 -37 q 22 37 -12 11 q 104 95 55 62 l 104 95 q 174 145 146 123 q 216 189 202 167 q 230 237 230 210 l 230 237 q 217 277 230 259 q 166 294 204 294 l 166 294 q 134 291 150 294 q 109 284 118 288 l 109 284 q 153 265 132 283 q 174 218 174 247 l 174 218 q 150 169 174 188 q 90 149 126 149 l 90 149 q 40 165 60 149 q 20 211 20 180 l 20 211 q 40 264 20 243 q 92 296 60 284 q 159 312 123 307 q 225 317 194 317 l 225 317 q 325 305 280 317 q 397 268 370 292 q 423 209 423 244 l 423 209 q 402 149 423 177 q 347 97 380 121 q 281 50 314 72 l 281 50 q 181 -24 214 5 q 147 -94 147 -54 l 147 -94 q 171 -146 147 -130 q 229 -163 195 -163 m 215 427 l 215 427 q 247 504 215 474 q 327 533 279 533 l 327 533 q 386 516 365 533 q 406 465 406 499 l 406 465 q 391 415 406 439 q 351 376 376 391 q 293 361 325 361 l 293 361 q 235 378 255 361 q 215 427 215 395 "},"?":{ha:518,x_min:75,x_max:574,o:"m 293 757 l 293 757 q 272 756 285 757 q 245 751 259 754 q 219 739 231 747 l 219 739 q 267 731 244 741 q 304 703 289 721 q 318 661 318 685 l 318 661 q 292 599 318 625 q 225 572 265 572 l 225 572 q 163 594 191 572 q 134 657 134 616 l 134 657 q 156 720 134 695 q 211 758 177 744 q 283 777 244 771 q 354 782 321 782 l 354 782 q 460 768 410 782 q 542 726 510 754 q 574 654 574 698 l 574 654 q 554 596 574 625 q 493 532 534 567 q 386 450 451 497 l 386 450 q 285 372 319 402 q 238 319 250 342 q 226 270 226 296 l 226 270 q 243 227 226 245 q 292 209 259 209 l 292 209 q 325 213 308 209 q 356 223 341 216 l 356 223 q 314 251 334 231 q 294 304 294 270 l 294 304 q 318 362 294 339 q 379 385 341 385 l 379 385 q 431 365 408 385 q 453 314 453 344 l 453 314 q 433 254 453 278 q 382 215 413 229 q 317 194 351 200 q 252 187 282 187 l 252 187 q 164 200 204 187 q 99 240 123 213 q 75 309 75 267 l 75 309 q 96 379 75 347 q 150 439 116 410 q 222 500 183 468 l 222 500 q 303 566 269 538 q 354 621 336 594 q 371 678 371 647 l 371 678 q 351 735 371 713 q 293 757 331 757 m 113 52 l 113 52 q 145 129 113 99 q 225 158 177 158 l 225 158 q 284 141 263 158 q 304 90 304 124 l 304 90 q 289 40 304 63 q 249 1 274 16 q 191 -14 223 -14 l 191 -14 q 133 3 153 -14 q 113 52 113 20 "},".":{ha:302,x_min:-1,x_max:190,o:"m -1 52 l -1 52 q 31 129 -1 99 q 111 158 63 158 l 111 158 q 170 141 149 158 q 190 90 190 124 l 190 90 q 175 40 190 63 q 135 1 160 16 q 77 -14 109 -14 l 77 -14 q 19 3 39 -14 q -1 52 -1 20 "},",":{ha:310,x_min:-1,x_max:192,o:"m 192 76 l 192 76 q 152 -51 192 6 q 42 -138 112 -108 l 42 -138 l 37 -120 q 111 -67 78 -103 q 147 17 144 -31 l 147 17 q 115 -6 133 2 q 77 -14 97 -14 l 77 -14 q 20 3 40 -14 q -1 52 -1 20 l -1 52 q 14 107 -1 83 q 54 145 28 131 q 111 158 79 158 l 111 158 q 171 139 149 158 q 192 76 192 120 "},":":{ha:333,x_min:12,x_max:303,o:"m 112 427 l 112 427 q 144 504 112 474 q 224 533 176 533 l 224 533 q 283 516 262 533 q 303 465 303 499 l 303 465 q 288 415 303 438 q 248 376 273 391 q 190 361 222 361 l 190 361 q 132 378 152 361 q 112 427 112 395 m 12 52 l 12 52 q 44 129 12 99 q 124 158 76 158 l 124 158 q 183 141 162 158 q 203 90 203 124 l 203 90 q 188 40 203 63 q 148 1 173 16 q 90 -14 122 -14 l 90 -14 q 32 3 52 -14 q 12 52 12 20 "},"-":{ha:507,x_min:53,x_max:441,o:"m 53 222 l 80 321 l 441 321 l 414 222 l 53 222 "},"'":{ha:256,x_min:135,x_max:303,o:"m 303 673 l 303 673 q 281 605 303 639 q 231 537 259 571 q 184 468 203 503 l 184 468 l 170 468 q 156 533 164 506 q 141 581 147 559 q 135 624 135 602 l 135 624 q 164 698 135 665 q 238 730 192 730 l 238 730 q 285 715 267 730 q 303 673 302 700 "}," ":{ha:257,x_min:0,x_max:0,o:""}},familyName:"Playfair",ascender:1082,descender:-251,underlinePosition:-100,underlineThickness:20,boundingBox:{xMin:-370,yMin:-241,xMax:1308,yMax:1201},resolution:1e3,original_font_information:{}};var F0="#4a0f27",bh="#a63a5a",O0="rgba(166,124,62,.75)";function $d(s,t,e,n=1){let i=document.createElement("canvas");i.width=s,i.height=t;let r=i.getContext("2d");r.fillStyle=e,r.fillRect(0,0,s,t);let a=n,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<s*t/90;c++){let h=o()*s,d=o()*t,u=2+o()*9,f=o()*Math.PI;r.strokeStyle=o()<.5?"rgba(120,80,60,.045)":"rgba(255,255,255,.07)",r.lineWidth=.7,r.beginPath(),r.moveTo(h,d),r.lineTo(h+Math.cos(f)*u,d+Math.sin(f)*u),r.stroke()}let l=r.createRadialGradient(s/2,t/2,Math.min(s,t)*.3,s/2,t/2,Math.max(s,t)*.75);return l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(110,60,40,.16)"),r.fillStyle=l,r.fillRect(0,0,s,t),i}function Th(s){let t=new Us(s);return t.colorSpace=Xe,t.anisotropy=8,t}function ua(s,t,e,n,i){s.fillStyle=i,s.beginPath();for(let r=0;r<8;r++){let a=r*Math.PI/4,o=r%2?n*.22:n;s.lineTo(t+Math.cos(a-Math.PI/2)*o,e+Math.sin(a-Math.PI/2)*o)}s.closePath(),s.fill()}function B0(s,t,e){let n=t.split(" "),i=[],r="";for(let a of n){let o=r?r+" "+a:a;s.measureText(o).width>e&&r?(i.push(r),r=a):r=o}return r&&i.push(r),i}function z0({font:s,today:t}){let e=new be,n=4.4,i=3,r=.16,a=$d(1408,960,"#f3e5d4",7);{let B=a.getContext("2d"),ft=1150,vt=70,Z=190,it=236;B.save(),B.shadowColor="rgba(60,20,20,.25)",B.shadowBlur=10,B.shadowOffsetY=4,B.fillStyle="#fbf4ec",B.fillRect(ft,vt,Z,it),B.restore(),B.fillStyle="#f3e5d4";for(let Xt=0;Xt<=10;Xt++)[[ft+Xt*Z/10,vt],[ft+Xt*Z/10,vt+it]].forEach(([ct,Me])=>{B.beginPath(),B.arc(ct,Me,7,0,7),B.fill()});for(let Xt=0;Xt<=12;Xt++)[[ft,vt+Xt*it/12],[ft+Z,vt+Xt*it/12]].forEach(([ct,Me])=>{B.beginPath(),B.arc(ct,Me,7,0,7),B.fill()});let rt=ft+20,ht=vt+20,ut=Z-40,Bt=it-40,Ct=B.createLinearGradient(0,ht,0,ht+Bt);Ct.addColorStop(0,"#c8104a"),Ct.addColorStop(1,"#6e0a2c"),B.fillStyle=Ct,B.fillRect(rt,ht,ut,Bt);let zt=rt+ut/2,Vt=ht+Bt*.46,Qt=48,U=B.createRadialGradient(zt-14,Vt-16,4,zt,Vt,Qt);U.addColorStop(0,"#ffffff"),U.addColorStop(.5,"#c9ccd6"),U.addColorStop(1,"#6d6f7a"),B.fillStyle=U,B.beginPath(),B.arc(zt,Vt,Qt,0,7),B.fill(),B.save(),B.beginPath(),B.arc(zt,Vt,Qt,0,7),B.clip(),B.strokeStyle="rgba(40,40,60,.35)",B.lineWidth=1.2;for(let Xt=-4;Xt<=4;Xt++)B.beginPath(),B.ellipse(zt,Vt,Qt,Math.abs(Xt)*11+1,0,0,7),B.stroke(),B.beginPath(),B.moveTo(zt-Qt,Vt+Xt*11),B.lineTo(zt+Qt,Vt+Xt*11),B.stroke();B.restore(),B.strokeStyle="#ddd",B.beginPath(),B.moveTo(zt,Vt-Qt),B.lineTo(zt,ht),B.stroke(),ua(B,zt+40,Vt-40,14,"#f2d9a6"),ua(B,zt-44,Vt+34,9,"#f2d9a6"),B.fillStyle="#f2d9a6",B.font="italic 400 26px Fraunces",B.textAlign="center",B.fillText("Saray",zt,ht+Bt-18),B.strokeStyle="rgba(74,15,39,.55)",B.lineWidth=3;let ye=ft-30,Jt=vt+150;B.beginPath(),B.arc(ye,Jt,78,0,7),B.stroke(),B.beginPath(),B.arc(ye,Jt,62,0,7),B.stroke(),B.fillStyle="rgba(74,15,39,.6)",B.font="600 24px Fraunces",B.fillText(t.toLocaleDateString("es-ES",{day:"numeric",month:"short"}).replace(".",""),ye,Jt-2),B.font="300 20px Fraunces",B.fillText(String(t.getFullYear()),ye,Jt+24);for(let Xt=0;Xt<4;Xt++){B.beginPath();for(let ct=0;ct<330;ct+=4)B.lineTo(ye-430+ct,Jt-36+Xt*24+Math.sin(ct/22)*6);B.stroke()}B.textAlign="left",B.fillStyle=F0,B.font="italic 400 132px Fraunces",B.fillText("Para Saray",250,600),B.strokeStyle=bh,B.lineWidth=3,B.beginPath(),B.moveTo(260,640),B.bezierCurveTo(520,610,760,680,980,630),B.stroke(),B.fillStyle=bh,B.font="italic 400 46px Fraunces",B.fillText("\xC1brela hoy, ni un d\xEDa antes",262,730)}let o=$d(1408,960,"#efdecb",11);{let B=o.getContext("2d"),ft=1408,vt=960,Z=ft/2,it=vt*.56,rt=(ht,ut)=>{B.fillStyle=ut,B.beginPath(),ht.forEach(([Bt,Ct],zt)=>zt?B.lineTo(Bt,Ct):B.moveTo(Bt,Ct)),B.closePath(),B.fill()};rt([[0,0],[Z-40,it],[0,vt]],"rgba(255,255,255,.10)"),rt([[ft,0],[Z+40,it],[ft,vt]],"rgba(255,255,255,.06)"),rt([[0,vt],[Z,it-70],[ft,vt]],"rgba(120,70,50,.07)"),B.strokeStyle="rgba(110,60,40,.28)",B.lineWidth=3,B.beginPath(),B.moveTo(0,vt),B.lineTo(Z,it-70),B.lineTo(ft,vt),B.stroke(),B.strokeStyle="rgba(110,60,40,.14)",B.beginPath(),B.moveTo(0,0),B.lineTo(Z-40,it),B.moveTo(ft,0),B.lineTo(Z+40,it),B.stroke()}let l=new we({color:15324864,roughness:.9}),c=[l,l,l,l,new we({map:Th(o),roughness:.88}),new we({map:Th(a),roughness:.88})],h=new be;e.add(h);let d=new ee(new Fn(n,i,r),c);h.add(d);let u=new ds,f=1.85;u.moveTo(-n/2,0),u.lineTo(-.28,-f+.16),u.quadraticCurveTo(0,-f-.06,.28,-f+.16),u.lineTo(n/2,0),u.lineTo(-n/2,0);let m=new Qa(u,24),_=document.createElement("canvas");_.width=_.height=512;{let B=_.getContext("2d"),ft=B.createLinearGradient(0,0,512,512);ft.addColorStop(0,"#e9a3b8"),ft.addColorStop(1,"#c95f84"),B.fillStyle=ft,B.fillRect(0,0,512,512);for(let vt=0;vt<512;vt+=64)for(let Z=0;Z<512;Z+=64)ua(B,Z+vt/64%2*32+16,vt+32,12,"rgba(242,217,166,.9)")}let p=Th(_);p.wrapS=p.wrapT=wr,p.repeat.set(.9,.9);let g=new be;g.position.set(0,i/2,r/2+.004),h.add(g);let y=new ee(m,new we({color:15785931,roughness:.88,side:Mi})),S=new ee(m,new we({map:p,roughness:.7,side:Ve}));g.add(y,S);let v=new ee(m,new Un({color:9067072,transparent:!0,opacity:.18}));v.position.set(0,-.012,-.001),v.scale.set(1.004,1.012,1),g.add(v);let E,w=new zn({color:10226490,roughness:.38,clearcoat:.9,clearcoatRoughness:.2,emissive:16722538,emissiveIntensity:0}),x=new be;x.position.set(0,i/2-f+.36,r/2+.07),h.add(x);let M=[0,Math.PI].map(B=>{let ft=new yi(.44,.46,.1,40,1,!1,B,Math.PI),vt=ft.attributes.position;for(let ht=0;ht<vt.count;ht++){let ut=vt.getX(ht),Bt=vt.getZ(ht);if(Math.hypot(ut,Bt)<.01)continue;let zt=Math.atan2(Bt,ut),Vt=1+.07*Math.sin(zt*7+1.3)+.04*Math.sin(zt*13);vt.setX(ht,ut*Vt),vt.setZ(ht,Bt*Vt)}ft.rotateX(Math.PI/2),ft.computeVertexNormals(),ft.computeBoundingBox();let Z=new ee(ft,w),it=new be;it.add(Z),x.add(it);let rt=new L;return ft.boundingBox.getCenter(rt),it.userData.dir=new L(rt.x,rt.y,0).normalize(),it});{let B=new Kr("S",{font:s,size:.42,depth:.035,curveSegments:8,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2});B.computeBoundingBox();let ft=B.boundingBox;B.translate(-(ft.max.x+ft.min.x)/2,-(ft.max.y+ft.min.y)/2,.05);let vt=new ee(B,new zn({color:7997488,roughness:.3,clearcoat:1})),Z=new ee(new ja(.33,.018,8,48),vt.material);Z.position.z=.055,M[0].add(vt),M[1].add(Z),E=vt.material}let A=4,C=5.2,P=C/3,D=1280,O=1664,q=document.createElement("canvas");q.width=D,q.height=O;let F=q.getContext("2d"),k=$d(D,O,"#f7eee2",3);{let B=k.getContext("2d");[O/3,O*2/3].forEach(ft=>{let vt=B.createLinearGradient(0,ft-18,0,ft+18);vt.addColorStop(0,"rgba(110,60,40,0)"),vt.addColorStop(.5,"rgba(110,60,40,.10)"),vt.addColorStop(.52,"rgba(255,255,255,.18)"),vt.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=vt,B.fillRect(0,ft-18,D,36)}),B.strokeStyle=O0,B.lineWidth=2.5,B.strokeRect(60,60,D-120,O-120),B.lineWidth=1,B.strokeRect(76,76,D-152,O-152),ua(B,D/2,170,30,"rgba(176,128,60,.9)"),ua(B,D/2-52,186,12,"rgba(176,128,60,.7)"),ua(B,D/2+52,186,12,"rgba(176,128,60,.7)")}let z=Th(q),Q={date:"",title:"",body:"",sign:""},W=null;function $(){F.font="600 92px Fraunces";let B=B0(F,Q.title,D-280);F.font="italic 400 64px Fraunces";let ft=B0(F,Q.body,D-300);W={tl:B,bl:ft}}function tt(B){F.drawImage(k,0,0),F.textAlign="center",F.fillStyle=bh,F.font="italic 400 48px Fraunces",F.fillText(Q.date,D/2,290),F.fillStyle=F0,F.font="600 92px Fraunces";let ft=420;W.tl.forEach(Z=>{F.fillText(Z,D/2,ft),ft+=104}),F.strokeStyle=O0,F.lineWidth=2,F.beginPath(),F.moveTo(D/2-70,ft-30),F.lineTo(D/2+70,ft-30),F.stroke(),ft+=70,F.textAlign="left",F.font="italic 400 64px Fraunces",F.fillStyle="#2e0818";let vt=B;for(let Z of W.bl){if(vt<=0)break;F.fillText(Z.slice(0,vt),150,ft),vt-=Z.length+1,ft+=94}B>=Q.body.length&&(F.textAlign="right",F.fillStyle=bh,F.font="italic 400 56px Fraunces",F.fillText(Q.sign,D-150,O-190)),z.needsUpdate=!0}let gt=new we({map:z,emissiveMap:z,emissive:16777215,emissiveIntensity:.3,roughness:.85}),Lt=new we({color:15721428,roughness:.9}),X=new be;X.visible=!1,e.add(X);let lt=B=>{let ft=new Bn(A,P),vt=ft.attributes.uv;for(let ht=0;ht<vt.count;ht++)vt.setY(ht,B+vt.getY(ht)/3);let Z=new ee(ft,gt),it=new ee(new Bn(A,P),Lt);it.rotation.y=Math.PI,it.position.z=-.002;let rt=new be;return rt.add(Z,it),rt},Rt=lt(1/3);X.add(Rt);let Ut=new be;Ut.position.y=P/2;let bt=lt(2/3);bt.position.y=P/2,Ut.add(bt),X.add(Ut);let Ft=new be;Ft.position.y=-P/2;let pe=lt(0);return pe.position.y=-P/2,pe.position.z=.003,Ft.add(pe),X.add(Ft),{group:e,env:h,flapPivot:g,seal:x,halves:M,sealMat:w,get sMat(){return E},letter:X,topPivot:Ut,botPivot:Ft,setNote(B){Q=B,$(),tt(0)},write(B){tt(B)},get length(){return Q.body.length}}}function H0(s){let t=new Us(s);return t.colorSpace=Xe,t.anisotropy=8,t}function Kd(s,t){let e=document.createElement("canvas");e.width=512,e.height=348;let n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,512,348);for(let a=0;a<2600;a++)n.fillStyle=Math.random()<.5?"rgba(110,60,40,.05)":"rgba(255,255,255,.08)",n.fillRect(Math.random()*512,Math.random()*348,1.5,1.5);let i=256,r=200;return n.strokeStyle=t?"rgba(120,80,30,.45)":"rgba(110,60,40,.3)",n.lineWidth=3,n.beginPath(),n.moveTo(0,348),n.lineTo(i,r-20),n.lineTo(512,348),n.stroke(),n.fillStyle=t?"rgba(255,240,200,.35)":"rgba(255,255,255,.12)",n.beginPath(),n.moveTo(0,0),n.lineTo(i,r+16),n.lineTo(512,0),n.closePath(),n.fill(),n.strokeStyle=t?"rgba(120,80,30,.55)":"rgba(110,60,40,.38)",n.beginPath(),n.moveTo(0,0),n.lineTo(i,r+16),n.lineTo(512,0),n.stroke(),H0(e)}function k0(s,t,e){let n=document.createElement("canvas");n.width=320,n.height=150;let i=n.getContext("2d");return i.fillStyle=e?"#cbb8b0":"#f7eee2",i.beginPath(),i.moveTo(30,0),i.lineTo(320,0),i.lineTo(320,150),i.lineTo(30,150),i.lineTo(0,75),i.closePath(),i.fill(),i.fillStyle="#5a2a3a",i.beginPath(),i.arc(34,75,9,0,7),i.fill(),i.fillStyle=e?"#6d4a55":"#4a0f27",i.textAlign="center",i.font=`600 ${t?50:58}px Fraunces`,i.fillText(s,180,t?72:95),t&&(i.font="italic 400 34px Fraunces",i.fillStyle=e?"#7d5a64":"#a63a5a",i.fillText(t,180,118)),e&&(i.strokeStyle="#6d4a55",i.lineWidth=5,i.beginPath(),i.arc(290,48,13,Math.PI,0),i.stroke(),i.fillStyle="#6d4a55",i.fillRect(272,48,36,28)),H0(n)}function G0({days:s,todayKey:t,labelFor:e}){let n=new be,i=Kd("#f1e2cf",!1),r=Kd("#a8939a",!1),a=Kd("#e8cf98",!0),o=new we({color:14732726,roughness:.9}),l=new zn({color:14200932,metalness:1,roughness:.25,clearcoat:1}),c=new zn({color:9308726,roughness:.4,clearcoat:.8}),h=new we({color:14200932,metalness:1,roughness:.3}),d=new we({color:13214826,metalness:.6,roughness:.5}),u=s.map((x,M)=>{let A=M===s.length-1,C=x<t?"read":x===t?"today":"locked",P=A?1.3:1,D=new be,O=new be;D.add(O);let q=new we({map:A?a:C==="locked"?r:i,roughness:A?.45:.88,metalness:A?.35:0}),F=new ee(new Fn(1.4*P,.95*P,.05),[o,o,o,o,q,o]);F.position.y=-.62*P,O.add(F);let k=new ee(new yi(.14*P,.15*P,.04,28),C==="read"?l:c);k.rotation.x=Math.PI/2,k.position.set(0,-.62*P-.02,.05),O.add(k);let z=new ee(new Fn(.09,.3,.08),h);z.position.y=-.1,O.add(z);let{text:Q,sub:W}=e(x,C,A),$=new ee(new Bn(1*P,.47*P),(()=>{let tt=k0(Q,W,C==="locked");return new we({map:tt,emissiveMap:tt,emissive:16777215,emissiveIntensity:.35,roughness:.9,transparent:!0})})());return $.position.set(0,-1.42*P,.03),$.rotation.z=(M%2?-1:1)*.06,O.add($),F.userData.item=M,$.userData.item=M,$.userData.label=[Q,W],n.add(D),{key:x,state:C,group:D,swing:O,seal:k,body:F,tag:$,last:A,scale:P,hit:[F,$],phase:Math.random()*6}}),f=[],m=null,_=[];function p(x,M,A,C=40){let P=[];for(let D=0;D<=C;D++){let O=D/C;P.push(new L(x.x+(M.x-x.x)*O,x.y+(M.y-x.y)*O-Math.sin(O*Math.PI)*A,x.z))}return P}function g(x){f.forEach(O=>n.remove(O)),f=[],m&&n.remove(m);let M=x?[u.slice(0,4),u.slice(4)]:[u],A=1.95,C=x?[2.1,-1.6]:[.7],P=[];M.forEach((O,q)=>{let F=(O.length-1)*A,k=-F/2-1.1,z=F/2+1.1,Q=C[q],W=.45,$=p(new L(k,Q,0),new L(z,Q,0),W),tt=new ee(new to(new Fr($),80,.012,6),d);n.add(tt),f.push(tt),O.forEach((gt,Lt)=>{let X=-F/2+Lt*A,lt=(X-k)/(z-k);gt.group.position.set(X,Q-Math.sin(lt*Math.PI)*W,0),gt.home=gt.group.position.clone()});for(let gt=0;gt<=30;gt++){let Lt=gt/30;P.push(new L(k+(z-k)*Lt,Q-Math.sin(Lt*Math.PI)*W+.03,.02))}}),m=new hs(new Gi(.055,12,8),new Un({toneMapped:!1}),P.length);let D=new De;_=P.map((O,q)=>(D.position.copy(O),D.updateMatrix(),m.setMatrixAt(q,D.matrix),{c:new Nt(q%3===0?16762840:16769704),ph:Math.random()*6})),n.add(m)}let y=new Nt;function S(x,M,A){u.forEach((C,P)=>{C.swing.rotation.z=Math.sin(x*1.1+C.phase)*.035}),m&&(_.forEach((C,P)=>{let D=.55+.45*Math.sin(x*2.2+C.ph)+M*.8+A;y.copy(C.c).multiplyScalar(Math.max(.2,D)*1.6),m.setColorAt(P,y)}),m.instanceColor.needsUpdate=!0)}function v(x){let M=u[x];M.state="read",M.seal.material=l}function E(x,M){let A=u[x];A.state="locked",A.seal.material=c,A.group.visible=!0,A.body.material[4].map=r,A.body.material[4].needsUpdate=!0,A.tag.userData.label=[A.tag.userData.label[0],M],w()}function w(){u.forEach(x=>{let[M,A]=x.tag.userData.label;x.tag.material.map=x.tag.material.emissiveMap=k0(M,A,x.state==="locked"),x.tag.material.needsUpdate=!0})}return{group:n,items:u,layout:g,update:S,markRead:v,lock:E,refreshTags:w,hitTargets:()=>u.flatMap(x=>x.group.visible?x.hit:[])}}var uy="Saray",Re=Object.assign({API_URL:"",CANCION:"",INICIO:"2026-11-08",FIESTA:"2026-11-14",FIRMA:"Tus amigas",HORA:""},window.CONFIG||{});(()=>{let s=location.hash.match(/^#c=([\w\-=]+)/);if(s){try{let t=atob(s[1].replace(/-/g,"+").replace(/_/g,"/"));/^https:\/\/script\.google(usercontent)?\.com\//.test(t)&&localStorage.setItem("saray_api",t)}catch{}try{history.replaceState(null,"",location.pathname+location.search)}catch{}}if(!Re.API_URL)try{Re.API_URL=localStorage.getItem("saray_api")||""}catch{}})();async function dy(s,t){let e=a=>Uint8Array.from(atob(a),o=>o.charCodeAt(0)),n=new TextEncoder,i=await crypto.subtle.importKey("raw",n.encode(s),"PBKDF2",!1,["deriveKey"]),r=await crypto.subtle.deriveKey({name:"PBKDF2",salt:e(t.s),iterations:15e4,hash:"SHA-256"},i,{name:"AES-GCM",length:256},!1,["decrypt"]);return new TextDecoder().decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:e(t.i)},r,e(t.d)))}var fy=(async()=>{let s=location.hash.match(/^#([a-z0-9]{6,10})$/);if(!(!s||!Re.CIFRADO||["carta","cuenta"].includes(s[1])))try{let t=await dy(s[1],Re.CIFRADO);if(/^https:\/\/script\.google(usercontent)?\.com\//.test(t)){Re.API_URL=t;try{localStorage.setItem("saray_api",t)}catch{}}try{history.replaceState(null,"",location.pathname+location.search)}catch{}}catch{}})(),Qo=Re.HORA||null,Ah=new Date(Re.FIESTA+"T"+(Qo||"00:00")+":00+01:00"),ma=(()=>{if(Re.API_URL)return{firma:Re.FIRMA,notas:{},despues:["Ya es leyenda","Lo que pas\xF3 en la despedida, en la despedida se queda."]};try{let s=atob(window.__N.split("").reverse().join(""));return JSON.parse(new TextDecoder().decode(Uint8Array.from(s,t=>t.charCodeAt(0))))}catch{return{firma:Re.FIRMA,notas:{},despues:["",""]}}})(),e1=864e5,V0=s=>{let t=new Date(s);return t.setHours(0,0,0,0),t},py=()=>Math.round((V0(Ah)-V0(new Date))/e1),tf=s=>`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`,Tn=(()=>{let s=[];for(let t=new Date(Re.INICIO+"T12:00:00");tf(t)<=Re.FIESTA;t.setDate(t.getDate()+1))s.push(tf(t));return s})(),qi=tf(new Date);function my(s){let t=ma.notas[s];t||(t=s>Tn[Tn.length-1]?ma.despues:s<Tn[0]?ma.notas[Tn[0]]:null),(!t||!t[1])&&(t=!Re.API_URL&&!window.__SONG?["Abre el enlace de tu correo","Para recibir tus cartas en este tel\xE9fono, abre la p\xE1gina desde el enlace del \xFAltimo correo que te hemos enviado."]:["La carta est\xE1 en camino","Tus amigas todav\xEDa la est\xE1n escribiendo. Vuelve un poco m\xE1s tarde."]);let n=(s<=Tn[Tn.length-1]?new Date(s+"T12:00:00"):new Date).toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"});return{date:n[0].toUpperCase()+n.slice(1),title:t[0],body:t[1],sign:t[2]||ma.firma||Re.FIRMA}}var fi=qi,Ln={velvet:2820634,deep:1180427,champagne:15915430,blush:16167880,cherry:13111370,mirror:14672618},rr=document.getElementById("gl"),pi=new $c({canvas:rr,antialias:!0,powerPreference:"high-performance"});pi.setPixelRatio(Math.min(window.devicePixelRatio,2));pi.toneMapping=Gs;pi.toneMappingExposure=.95;pi.outputColorSpace=Xe;var ke=new Ir;ke.fog=new Da(Ln.deep,.022);var In=new rn(38,1,.1,400);function gy(){let s=new Ir;s.add(new ee(new Gi(50,32,16),new Un({color:1705488,side:Ve})));let t=(i,r,a,o)=>{let l=new ee(new Bn(o[0],o[1]),new Un({color:new Nt(i).multiplyScalar(r),side:En}));l.position.set(...a),l.lookAt(0,0,0),s.add(l)};t(16773590,6,[0,30,10],[30,8]),t(16762585,4,[-30,6,10],[8,30]),t(16769704,4,[30,4,-6],[8,24]),t(16777215,3,[0,4,40],[24,6]),t(13111370,3,[0,-20,-20],[40,10]);for(let i=0;i<70;i++){let r=new L().randomDirection().multiplyScalar(40);r.y=Math.abs(r.y)*.8-4,t([16777215,16773328,16761046][i%3],5+Math.random()*6,[r.x,r.y,r.z],[1+Math.random()*2.5,1+Math.random()*2.5])}return new Jr(pi).fromScene(s,.02).texture}ke.environment=gy();var n1=new ee(new Gi(180,64,32),new Ne({side:Ve,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vP; uniform float uTime;
      void main(){
        float a = atan(vP.x, vP.z);
        float folds = sin(a*38. + sin(a*7.)*1.6) * .5 + .5;
        folds = pow(folds, 1.6);
        float h = vP.y*.5+.5;
        vec3 deep = vec3(.045,.008,.025);
        vec3 vel  = vec3(.17,.035,.09);
        vec3 col = mix(deep, vel, folds*.85*smoothstep(-.1,.75,h));
        col += vec3(.35,.08,.16) * pow(1.-abs(vP.y), 6.) * .25;
        gl_FragColor = vec4(col, 1.);
      }`}));ke.add(n1);function cf(s,t,e){let n=new ee(new Ha(e,96),new we({color:2754582,metalness:.85,roughness:.32,transparent:!0,envMapIntensity:.35}));return n.material.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
 gl_FragColor.a *= smoothstep(1., .35, length(vUvS - .5) * 2.);`),i.vertexShader=i.vertexShader.replace("void main() {","varying vec2 vUvS; void main() { vUvS = uv;"),i.fragmentShader=`varying vec2 vUvS;
`+i.fragmentShader},n.rotation.x=-Math.PI/2,n.position.set(s,-2.6,t),ke.add(n),n}cf(0,0,14);cf(40,-12,16);cf(-40,-14,12);ke.add(new io(16767462,2098704,.35));var sr=new zs(16773334,380,80,.5,.6,1.6);sr.position.set(6,16,12);ke.add(sr,sr.target);var _a=new zs(16740256,320,80,.6,.7,1.6);_a.position.set(-10,8,-8);ke.add(_a,_a.target);var ef=new ks(16770798,25,20,1.8);ke.add(ef);var _y=s=>new Ne({transparent:!0,depthWrite:!1,blending:Wi,side:En,uniforms:{uColor:{value:new Nt(s)},uI:{value:0}},vertexShader:`varying float vY; varying vec3 vN; varying vec3 vV;
    void main(){ vY = uv.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uI; varying float vY; varying vec3 vN; varying vec3 vV;
    void main(){ float f = pow(abs(dot(vN, vV)), 2.2); float a = pow(vY, 1.8) * f * uI; gl_FragColor = vec4(uColor*a, a); }`}),i1=[];[[16773334,-9],[16748469,0],[16769184,9]].forEach(([s,t],e)=>{let n=new yi(.15,5.5,34,48,1,!0);n.translate(0,-17,0);let i=new ee(n,_y(s));i.position.set(t,22,-6+e),ke.add(i),i1.push(i)});var Ci=new be;ke.add(Ci);var da=1.9;{let s=new ee(new Gi(da*.985,48,32),new we({color:855312,roughness:.9}));Ci.add(s);let t=.155,e=Math.floor(Math.PI*da/t),n=[],i=0;for(let u=1;u<e;u++){let f=Math.PI*u/e;i+=Math.max(1,Math.floor(2*Math.PI*da*Math.sin(f)/t))}let r=new Fn(t*.9,t*.9,.03),a=new we({color:Ln.mirror,metalness:1,roughness:.04,envMapIntensity:3}),o=new hs(r,a,i),l=new De,c=new Nt,h=0;for(let u=1;u<e;u++){let f=Math.PI*u/e,m=Math.max(1,Math.floor(2*Math.PI*da*Math.sin(f)/t));for(let _=0;_<m;_++){let p=2*Math.PI*(_+u%2*.5)/m;l.position.setFromSphericalCoords(da,f,p),l.lookAt(0,0,0),l.rotateY(Math.PI),l.rotateZ((Math.random()-.5)*.08),l.rotateX((Math.random()-.5)*.08),l.updateMatrix(),o.setMatrixAt(h,l.matrix);let g=Math.random();c.setHex(g<.08?Ln.blush:g<.14?Ln.champagne:Ln.mirror).multiplyScalar(.85+Math.random()*.3),o.setColorAt(h,c),h++}}Ci.add(o);let d=new ee(new yi(.03,.03,20,8),new we({color:8947848,metalness:1,roughness:.3}));d.position.y=da+10,Ci.add(d)}Ci.position.set(0,14,-2.5);var $o=(()=>{let t=new Float32Array(4200),e=new Float32Array(1400),n=new Float32Array(1400*3),i=new Nt;for(let l=0;l<1400;l++){let c=new L().randomDirection().multiplyScalar(22+Math.random()*30);t.set([c.x,c.y*.55,c.z],l*3),e[l]=.5+Math.random()*1.6,i.setHex([Ln.champagne,Ln.blush,16777215,16777215][l%4]),n.set([i.r,i.g,i.b],l*3)}let r=new Oe;r.setAttribute("position",new pn(t,3)),r.setAttribute("aSize",new pn(e,1)),r.setAttribute("color",new pn(n,3));let a=new Ne({transparent:!0,depthWrite:!1,blending:Wi,vertexColors:!0,uniforms:{uTime:{value:0},uPR:{value:pi.getPixelRatio()},uI:{value:0}},vertexShader:`attribute float aSize; varying vec3 vC; varying float vTw; uniform float uTime; uniform float uPR;
      void main(){ vC = color; vec4 mv = modelViewMatrix*vec4(position,1.); vTw = .55+.45*sin(uTime*3.+position.x*1.7+position.z);
        gl_PointSize = aSize * uPR * 90. / -mv.z; gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vC; varying float vTw; uniform float uI;
      void main(){ vec2 p = gl_PointCoord-.5; float d = length(p); float a = smoothstep(.5,.0,d); a = pow(a,2.2);
        float star = max(0., 1.-abs(p.x)*14.)*max(0.,1.-abs(p.y)*1.6) + max(0.,1.-abs(p.y)*14.)*max(0.,1.-abs(p.x)*1.6);
        a = (a + star*.6) * vTw * uI; gl_FragColor = vec4(vC*a, a); }`}),o=new Nr(r,a);return ke.add(o),o})(),W0=(()=>{let t=new Float32Array(2700);for(let i=0;i<900;i++)t.set([(Math.random()-.5)*120,Math.random()*18-2,(Math.random()-.5)*60-5],i*3);let e=new Oe;e.setAttribute("position",new pn(t,3));let n=new Nr(e,new Dr({color:16767424,size:.05,transparent:!0,opacity:.55,depthWrite:!1,blending:Wi}));return ke.add(n),n})(),s1=new jc().parse(Yo),r1=new zn({color:Ln.champagne,metalness:1,roughness:.2,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6}),a1=new zn({color:12159822,metalness:1,roughness:.32,envMapIntensity:1.2}),X0=new zn({color:Ln.blush,metalness:.85,roughness:.22,clearcoat:1,envMapIntensity:1.5,emissive:3802392});function nf(s,t,e,n){let i=new be,r=t/Yo.resolution,a=0,o=[];for(let l of s){let c=Yo.glyphs[l]||Yo.glyphs["?"];if(l!==" "){let h=new Kr(l,{font:s1,size:t,depth:e,curveSegments:10,bevelEnabled:!0,bevelThickness:e*.18,bevelSize:t*.018,bevelSegments:5});h.computeBoundingBox();let d=h.boundingBox,u=(d.max.x+d.min.x)/2,f=(d.max.y+d.min.y)/2;h.translate(-u,-f,-e/2);let m=new ee(h,n),_=new be;_.add(m),_.position.set(a+u,f,0),_.userData.home=_.position.clone(),i.add(_),o.push(_)}a+=c.ha*r}return i.children.forEach(l=>{l.position.x-=a/2,l.userData.home.x-=a/2}),i.userData.letters=o,i.userData.width=a,i}var jo=nf(uy,2.6,.7,[r1,a1]);jo.position.set(0,0,0);ke.add(jo);var As=new be;As.position.set(40,0,-12);ke.add(As);var fa=null,pa=null,Y0=null;function o1(){let s=py();if(s===Y0)return;Y0=s,fa&&As.remove(fa),pa&&As.remove(pa);let t=s<=0?"Hoy":String(s);fa=nf(t,s<=0?3.6:5.2,1.1,[r1,a1]),fa.position.y=.9,pa=nf(s<=0?"es el d\xEDa":s===1?"d\xEDa":"d\xEDas",1.15,.3,[X0,X0]),pa.position.y=-2.55,As.add(fa,pa)}o1();var At=z0({font:s1,today:new Date});At.group.position.set(-40,0,-12);ke.add(At.group);var Zo=new De,Rh={p:0},sf=-1,rf=()=>{let s=Tn.indexOf(fi);return s<0?fi<Tn[0]?0:Tn.length-1:s};function ar(){Ty(),At.setNote(my(fi)),Rh.p=0,sf=-1,typeof cn<"u"&&!(xy()&&fi===qi)&&(cn.items[rf()].group.visible=!1)}function xy(){try{return!!lr}catch{return!1}}ar();try{Promise.all(["300 40px Fraunces","600 40px Fraunces","italic 400 40px Fraunces"].map(s=>document.fonts.load(s))).then(()=>{ar(),cn.refreshTags()})}catch{}var vy=(s,t,e)=>{let n=new Date(s+"T12:00:00");if(e)return{text:"S\xE1bado "+n.getDate(),sub:"El gran d\xEDa"};let i=n.toLocaleDateString("es-ES",{weekday:"short"}).replace(".","");return{text:i[0].toUpperCase()+i.slice(1)+" "+n.getDate(),sub:t==="today"?"Hoy":null}},cn=G0({days:Tn,todayKey:qi,labelFor:vy});cn.group.position.set(-40,7.4,-16);ke.add(cn.group);var l1=new ks(16771280,30,26,1.4);l1.position.set(-40,11,-7);ke.add(l1);var c1=new ks(16751808,25,20,1.4);c1.position.set(-47,6,-12);ke.add(c1);cn.items.forEach((s,t)=>{(s.state==="today"||qi>Tn[Tn.length-1]&&t===Tn.length-1)&&(s.group.visible=!1)});var h1={boost:0},Ch=new zs(16774118,22,40,.5,.8,1.4);Ch.position.set(-37,9,2);Ch.target.position.set(-40,0,-12);ke.add(Ch,Ch.target);var hf=700,tl=new hs(new Bn(.11,.2),new we({metalness:.9,roughness:.25,side:En,envMapIntensity:2}),hf);tl.frustumCulled=!1;ke.add(tl);var Nh=Array.from({length:hf},(s,t)=>({p:new L(0,-999,0),v:new L,r:new li,w:new L,life:0}));{let s=new Nt;Nh.forEach((t,e)=>{s.setHex([Ln.champagne,Ln.blush,Ln.cherry,Ln.mirror,Ln.champagne][e%5]),tl.setColorAt(e,s)})}function wh(s,t=hf,e=1){Nh.forEach((n,i)=>{if(i>=t)return;n.p.copy(s).add(new L((Math.random()-.5)*2,Math.random()-.5,(Math.random()-.5)*2));let r=new L().randomDirection();r.y=Math.abs(r.y)*1.4+.3,n.v.copy(r).multiplyScalar((6+Math.random()*9)*e),n.r.set(Math.random()*6,Math.random()*6,Math.random()*6),n.w.set(Math.random()*8-4,Math.random()*8-4,Math.random()*8-4),n.life=1})}function yy(s){Nh.forEach((t,e)=>{t.life>0&&(t.v.y-=7*s,t.v.multiplyScalar(1-1.6*s),t.v.y=Math.max(t.v.y,-2.2),t.p.addScaledVector(t.v,s),t.p.x+=Math.sin(t.r.x*2)*s*.6,t.r.x+=t.w.x*s,t.r.y+=t.w.y*s,t.r.z+=t.w.z*s,t.life-=s*.14),Zo.position.copy(t.life>0?t.p:new L(0,-999,0)),Zo.rotation.copy(t.r),Zo.scale.setScalar(1),Zo.updateMatrix(),tl.setMatrixAt(e,Zo.matrix)}),tl.instanceMatrix.needsUpdate=!0}var cr=new eh(pi);cr.addPass(new nh(ke,In));var qh=new ta(new st(1,1),.55,.5,.9);cr.addPass(qh);var ga=new jr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uFade:{value:1},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; uniform float uFade; uniform float uFlash; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv-.5; float r = dot(c,c);
      vec2 off = c * r * .012;
      vec3 col = vec3(texture2D(tDiffuse, vUv+off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv-off).b);
      col *= smoothstep(.85, .18, r*1.6);
      col += (h(vUv*vec2(1920.,1080.)+fract(uTime)*91.)-.5)*.03;
      col = mix(col, vec3(1.,.96,.92), uFlash);
      gl_FragColor = vec4(col*uFade, 1.);
    }`});cr.addPass(ga);cr.addPass(new ih);var ge={x:0,y:-1,z:36,tx:0,ty:2,tz:0,roll:.12},Z0=new L,ir=!1;function Ph(){let s=innerWidth,t=innerHeight;pi.setSize(s,t,!1),cr.setSize(s,t),qh.resolution.set(s,t),In.aspect=s/t;let e=ir;ir=s/t<1,(e!==ir||!Ph.done)&&(cn.layout(ir),Ph.done=!0),In.zoom=ir?.56:Math.min(1,s/t/1.5),In.updateProjectionMatrix(),$o.material.uniforms.uPR.value=pi.getPixelRatio()}addEventListener("resize",Ph);Ph();var le=s=>document.getElementById(s),Qd=s=>String(s).padStart(2,"0");function uf(){let s=Ah.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"});if(le("fecha").textContent=s[0].toUpperCase()+s.slice(1),Qo){let t=Math.max(0,Ah-new Date);le("hms").hidden=!1,le("tbd").hidden=!0,le("hh").textContent=Qd(Math.floor(t/36e5)%24),le("mm").textContent=Qd(Math.floor(t/6e4)%60),le("ss").textContent=Qd(Math.floor(t/1e3)%60),le("fecha").textContent+=", "+Qo}else le("hms").hidden=!0,le("tbd").hidden=!1;o1()}setInterval(uf,250);uf();var We=(s,t)=>le(s).classList.toggle("on",t),af=null,fe=null,es=null,of=null,di=null,ei=null,Yn=!1,Ko={v:0};function u1(){if(fe||!(window.__SONG||Re.CANCION||af))return;let s=af||Re.CANCION;if(window.__SONG){let t=atob(window.__SONG),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);s=URL.createObjectURL(new Blob([e],{type:"audio/mp4"}))}fe=new Audio(s),fe.loop=!0;try{ei=new(window.AudioContext||window.webkitAudioContext);let t=ei.createMediaElementSource(fe);di=ei.createGain(),di.gain.value=0,es=ei.createAnalyser(),es.fftSize=1024,es.smoothingTimeConstant=.7,of=new Uint8Array(es.frequencyBinCount),t.connect(di),di.connect(es),es.connect(ei.destination)}catch{es=null}}function Ih(){if(u1(),!fe)return;fe.currentTime=0;let s=fe.play();s&&s.catch&&s.catch(()=>{}),ei&&(ei.resume(),di.gain.cancelScheduledValues(ei.currentTime),di.gain.setValueAtTime(0,ei.currentTime),di.gain.linearRampToValueAtTime(Yn||Lh?0:1,ei.currentTime+2.5))}function d1(s){if(Yn=s,le("bSound").textContent=s?"Activar sonido":"Silenciar",!fe)return;di?di.gain.setTargetAtTime(s||Lh?0:1,ei.currentTime,.15):fe.muted=s||Lh,nn&&(nn.muted=s);let t=le("polVideo");t&&t.dataset.sound&&(t.muted=s)}var Lh=!1;function df(s){if(Lh=s,!fe)return;let t=s||Yn?0:1;di?di.gain.setTargetAtTime(t,ei.currentTime,s?.35:.6):fe.muted=!!t,!s&&!Yn&&fe.paused&&fe.play().catch(()=>{})}var Jo=-1;function My(s){let t=Math.pow(.88,s*60);if(!es||!fe||fe.paused){Ko.v*=t;return}es.getByteFrequencyData(of);let e=0;for(let i=1;i<9;i++)e+=of[i];e/=2040,Jo<0&&(Jo=e),Jo+=(e-Jo)*Math.min(1,s*2.5);let n=Math.max(0,(e-Jo)*5)+e*.25;Ko.v=Math.max(n,Ko.v*t)}var jd={},nn=null,ui=null,Sy=s=>Re.API_URL+(Re.API_URL.includes("?")?"&":"?")+s;function f1(s,t){let e=s+"/"+t;return jd[e]?jd[e]:jd[e]=fetch(Sy("accion=archivo&fecha="+s+"&tipo="+t)).then(n=>n.json()).then(n=>{if(!n.ok)throw new Error(n.error);let i=atob(n.data),r=new Uint8Array(i.length);for(let a=0;a<i.length;a++)r[a]=i.charCodeAt(a);return{url:URL.createObjectURL(new Blob([r],{type:n.mime})),mime:n.mime,nombre:n.nombre}})}function by(s){let t=ma.notas[s];return t&&t[3]||{}}function Ty(){let s=by(fi);ui={key:fi},["foto","video","musica"].forEach(t=>{s[t]&&Re.API_URL&&(ui[t]=f1(fi,t).catch(()=>null))})}function p1(){nn||(nn=new Audio,nn.loop=!0,nn.play().catch(()=>{}),nn.pause());let s=le("polVideo");s.play().catch(()=>{}),s.pause()}async function Ey(){if(!ui||!ui.musica)return;let s=await ui.musica;!s||!nn||(nn.src=s.url,nn.currentTime=0,nn.volume=0,nn.muted=Yn,df(!0),nn.play().catch(()=>{}),ze.to(nn,{volume:1,duration:1.6,ease:"power1.out"}),le("musicName").textContent=s.nombre.replace(/\.[a-z0-9]+$/i,""),We("musicChip",!0))}async function wy(){if(!ui||!(ui.foto||ui.video))return;let s=await(ui.video||ui.foto);if(!s)return;let t=le("polImg"),e=le("polVideo");if(s.mime.startsWith("video")){t.hidden=!0,e.hidden=!1,e.src=s.url,e.currentTime=0;let i=!ui.musica;e.muted=!i||Yn,e.dataset.sound=i?"1":"",i&&df(!0),e.play().catch(()=>{e.muted=!0,e.play().catch(()=>{})})}else e.hidden=!0,t.hidden=!1,t.src=s.url;le("polaroid").classList.remove("aside"),We("polaroid",!0)}function m1(){We("polaroid",!1),We("musicChip",!1);let s=le("polVideo");setTimeout(()=>{s.pause()},600),nn&&!nn.paused&&ze.to(nn,{volume:0,duration:1.2,onComplete:()=>nn.pause()}),df(!1)}le("polaroid").addEventListener("click",()=>le("polaroid").classList.toggle("aside"));var Ke=ze.timeline({defaults:{ease:"power2.inOut"}}),or=!1,ti={beams:0,flecks:0,carta:0},Eh=jo.userData.letters;function Ay(){wh(new L(0,-999,0)),Nh.forEach(s=>s.life=0),fi=qi,or=!1,ar(),["ovCount","ovGuardar","ovTend","ovTitle"].forEach(s=>We(s,!1))}Ke.addLabel("intro",0).call(Ay,null,0).fromTo(ga.uniforms.uFade,{value:0},{value:1,duration:1.6,ease:"power1.out"},0).fromTo(ge,{x:0,y:-1.2,z:38,tx:0,ty:3,tz:-2,roll:.14},{x:6.5,y:1.2,z:13.5,tx:0,ty:1.2,tz:0,roll:-.02,duration:7,ease:"power3.inOut"},0).fromTo(Ci.position,{y:16},{y:4.6,duration:4.2,ease:"expo.out"},.3).fromTo(ti,{beams:0,flecks:0},{beams:1,flecks:1,duration:3,ease:"power1.in"},.4).fromTo(Eh.map(s=>s.position),{y:-4.5,z:3},{y:s=>Eh[s].userData.home.y,z:0,duration:1.8,ease:"expo.out",stagger:.11},2.2).fromTo(Eh.map(s=>s.rotation),{x:-Math.PI*.9,y:.6},{x:0,y:0,duration:2,ease:"expo.out",stagger:.11},2.2).fromTo(Eh.map(s=>s.scale),{x:.4,y:.4,z:.4},{x:1,y:1,z:1,duration:1.6,ease:"expo.out",stagger:.11},2.2).call(()=>We("ovTitle",!0),null,3.6).call(()=>We("ovTitle",!1),null,7.4).addLabel("cuenta",7.8).to(ge,{x:34,y:2.6,z:8,tx:40,ty:.2,tz:-12,roll:.25,duration:1.7,ease:"expo.inOut"},"cuenta").to(ge,{roll:0,duration:1.2,ease:"power3.out"},"cuenta+=1.3").call(()=>{let s=fa.userData.letters.concat(pa.userData.letters);ze.fromTo(s.map(t=>t.position),{z:26},{z:0,duration:1.1,ease:"expo.out",stagger:.09}),ze.fromTo(s.map(t=>t.rotation),{y:Math.PI},{y:0,duration:1.4,ease:"expo.out",stagger:.09})},null,"cuenta+=.9").call(()=>wh(new L(40,-1,-10)),null,"cuenta+=1.7").fromTo(ga.uniforms.uFlash,{value:.55},{value:0,duration:.9,ease:"power2.out",immediateRender:!1},"cuenta+=1.7").to(ge,{x:37.5,y:.6,z:2.5,tx:40,ty:-.1,duration:6.2,ease:"sine.inOut"},"cuenta+=2").call(()=>We("ovCount",!0),null,"cuenta+=2.4").call(()=>We("ovCount",!1),null,"cuenta+=7.6").addLabel("carta",16.2).call(()=>{lr&&fi===qi&&(Ke.pause(),Ry())},null,"carta+=.01").to(ge,{x:-33,y:3.4,z:0,tx:-40,ty:1,tz:-14,roll:-.22,duration:1.9,ease:"expo.inOut"},"carta").to(ti,{beams:.35,duration:1.5},"carta").fromTo(At.group.position,{y:9},{y:.4,duration:2.1,ease:"expo.out"},"carta+=.5").fromTo(At.env.rotation,{x:.5,y:Math.PI*5,z:.5},{x:0,y:Math.PI,z:0,duration:2.3,ease:"expo.out"},"carta+=.5").fromTo(At.env.position,{x:0,y:0,z:0},{x:0,y:0,z:0,duration:.01},"carta").fromTo(At.flapPivot.rotation,{x:0},{x:0,duration:.01},"carta").fromTo(At.halves.map(s=>s.position),{x:0,y:0,z:0},{x:0,y:0,z:0,duration:.01},"carta").fromTo(At.halves.map(s=>s.rotation),{x:0,y:0,z:0},{x:0,y:0,z:0,duration:.01},"carta").fromTo(At.seal.scale,{x:1,y:1,z:1},{x:1,y:1,z:1,duration:.01},"carta").call(()=>{At.letter.visible=!1,At.env.visible=!0,or=!1,We("ovTend",!1),We("ovGuardar",!1),We("polaroid",!1),We("musicChip",!1),At.sealMat.color.setHex(10226490),At.sealMat.metalness=0,At.sealMat.roughness=.38,At.sMat.color.setHex(7997488),At.sMat.metalness=0},null,"carta+=.02").fromTo(At.env.scale,{x:1,y:1,z:1},{x:1,y:1,z:1,duration:.01},"carta").fromTo(At.letter.position,{x:0,y:0,z:0},{x:0,y:0,z:0,duration:.01},"carta").fromTo(At.letter.rotation,{x:0},{x:0,duration:.01},"carta").fromTo(At.topPivot.rotation,{x:Math.PI*.995},{x:Math.PI*.995,duration:.01},"carta").fromTo(At.botPivot.rotation,{x:-Math.PI*.99},{x:-Math.PI*.99,duration:.01},"carta").fromTo(Rh,{p:0},{p:0,duration:.01},"carta").fromTo(ti,{carta:0},{carta:0,duration:.01},"carta").to(ge,{x:-40,y:1.6,z:-2.6,tx:-40,ty:.5,tz:-12,roll:0,duration:2.4,ease:"power3.inOut"},"carta+=1.6").to(At.env.rotation,{y:Math.PI*2,duration:1.2,ease:"power3.inOut"},"carta+=2.9").to(At.env.position,{y:.35,duration:.6,ease:"power2.out",yoyo:!0,repeat:1},"carta+=2.9").to(At.sealMat,{emissiveIntensity:1.6,duration:.5,ease:"power2.in"},"carta+=4.2").to(At.seal.scale,{x:1.12,y:1.12,z:1.12,duration:.5,ease:"power2.in"},"carta+=4.2").call(()=>{let s=new L;At.seal.getWorldPosition(s),wh(s,120,.45),ga.uniforms.uFlash.value=.25,ze.to(ga.uniforms.uFlash,{value:0,duration:.6})},null,"carta+=4.7").to(At.sealMat,{emissiveIntensity:0,duration:.8},"carta+=4.7").to(At.halves[0].position,{x:At.halves[0].userData.dir.x*1.6,y:-3.5,z:1.4,duration:1.4,ease:"power2.in"},"carta+=4.7").to(At.halves[1].position,{x:At.halves[1].userData.dir.x*1.6,y:-3.2,z:1.2,duration:1.4,ease:"power2.in"},"carta+=4.7").to(At.halves[0].rotation,{z:2.4,x:1.2,duration:1.4,ease:"power1.in"},"carta+=4.7").to(At.halves[1].rotation,{z:-2.2,y:1.4,duration:1.4,ease:"power1.in"},"carta+=4.7").to(At.flapPivot.rotation,{x:-Math.PI*1.1,duration:1.1,ease:"power3.inOut"},"carta+=5").call(()=>{At.letter.visible=!0},null,"carta+=5.85").to(At.letter.position,{y:3.1,duration:1.2,ease:"power3.out"},"carta+=5.9").to(At.env.position,{y:-6.5,z:-1.5,duration:1.5,ease:"power2.in"},"carta+=6.9").to(At.env.rotation,{x:.7,duration:1.5,ease:"power2.in"},"carta+=6.9").to(At.letter.position,{y:.2,z:1.2,duration:1.5,ease:"power3.inOut"},"carta+=7").to(At.topPivot.rotation,{x:0,duration:1.1,ease:"power3.out"},"carta+=8.1").call(()=>Ey(),null,"carta+=8.3").to(At.botPivot.rotation,{x:0,duration:1.1,ease:"power3.out"},"carta+=8.45").to(ge,{x:-40,y:.7,z:-1.4,tx:-40,ty:.6,tz:-10.8,duration:2.6,ease:"power3.inOut"},"carta+=7.6").to(ti,{carta:1,duration:2.6,ease:"power3.inOut"},"carta+=7.6").to(Rh,{p:1,duration:5.5,ease:"none"},"carta+=9.4").to(ge,{y:.62,z:-1.1,duration:6,ease:"sine.inOut"},"carta+=10.2").call(()=>wy(),null,"carta+=14.8").call(()=>We("ovGuardar",!0),null,"carta+=15").to(ge,{ty:.15,y:.2,duration:1,ease:"power2.inOut"},"carta+=14.6").addPause("carta+=15.1").addLabel("guardar","carta+=15.2").call(()=>{We("ovGuardar",!1),m1()},null,"guardar").to(At.botPivot.rotation,{x:-Math.PI*.99,duration:.8,ease:"power3.inOut"},"guardar").to(At.topPivot.rotation,{x:Math.PI*.995,duration:.8,ease:"power3.inOut"},"guardar+=.25").to(ti,{carta:0,duration:1.6},"guardar").to(ge,{x:-40,y:2.2,z:2.8,tx:-40,ty:.9,tz:-12,duration:2.2,ease:"power3.inOut"},"guardar").to(At.env.position,{x:0,y:0,z:0,duration:1.2,ease:"power3.out"},"guardar+=.5").to(At.env.rotation,{x:0,duration:1.2,ease:"power3.out"},"guardar+=.5").to(At.letter.position,{y:3.1,z:0,duration:.8,ease:"power2.inOut"},"guardar+=1").to(At.letter.position,{y:0,duration:.8,ease:"power3.in"},"guardar+=1.85").call(()=>{At.letter.visible=!1},null,"guardar+=2.65").to(At.flapPivot.rotation,{x:0,duration:.9,ease:"power3.inOut"},"guardar+=2.55").to(At.halves.map(s=>s.position),{x:0,y:0,z:0,duration:.6,ease:"back.out(1.6)"},"guardar+=3.3").to(At.halves.map(s=>s.rotation),{x:0,y:0,z:0,duration:.6,ease:"back.out(1.6)"},"guardar+=3.3").call(()=>{ze.to(At.sealMat.color,{r:.85,g:.69,b:.39,duration:.6}),ze.to(At.sealMat,{metalness:.95,roughness:.25,duration:.6}),ze.to(At.sMat.color,{r:.55,g:.38,b:.16,duration:.6}),ze.to(At.sMat,{metalness:.9,duration:.6}),ze.fromTo(At.sealMat,{emissiveIntensity:.9},{emissiveIntensity:0,duration:1})},null,"guardar+=3.4").call(()=>{let s=new L;At.seal.getWorldPosition(s),wh(s,60,.3)},null,"guardar+=3.8").to(ge,{x:-40,y:7.6,z:-3.4,tx:-40,ty:7.2,tz:-16,duration:2.8,ease:"expo.inOut"},"guardar+=4").to(ti,{beams:.25,duration:2},"guardar+=4").call(()=>{let s=cn.items[rf()],t=new L(0,-.62*s.scale,0);s.group.updateMatrixWorld(!0),s.group.localToWorld(t);let e=At.group.worldToLocal(t.clone()),n=.318*s.scale;ze.to(At.env.position,{x:e.x,y:e.y,z:e.z,duration:2.4,ease:"power3.inOut"}),ze.to(At.env.scale,{x:n,y:n,z:n,duration:2.4,ease:"power3.inOut"}),ze.fromTo(At.env.rotation,{z:0},{z:.35,duration:1.2,ease:"sine.inOut",yoyo:!0,repeat:1})},null,"guardar+=4.1").call(()=>{let s=rf(),t=cn.items[s];At.env.visible=!1,t.group.visible=!0,cn.markRead(s),ze.fromTo(t.swing.rotation,{z:.5},{z:0,duration:2.2,ease:"elastic.out(1,.25)"}),ze.fromTo(h1,{boost:1.4},{boost:0,duration:1.6,ease:"power2.out"}),g1(),We("ovTend",!0),or=!0},null,"guardar+=6.5").addLabel("tendedero","guardar+=6.6").addPause("tendedero");var lr=null;function Ry(){m1(),At.env.visible=!1,At.letter.visible=!1,ze.to(ge,{x:-40,y:7.6,z:-3.4,tx:-40,ty:7.2,tz:-16,roll:0,duration:2.8,ease:"expo.inOut"}),ze.to(ti,{beams:.25,carta:0,duration:2}),g1(),setTimeout(()=>{We("ovTend",!0),or=!0},2200)}function g1(){let s=Tn.length,t=cn.items.filter(e=>e.state==="read").length;le("tendCount").textContent=t>=s?"Tienes todas las cartas":`Llevas ${t} de ${s} cartas`,le("tendHint").textContent=lr?`La carta de hoy llega a las ${lr.hora}`:"Toca una carta para volver a leerla"}var lf=s=>{le("toast").textContent=s,We("toast",!0),clearTimeout(lf.t),lf.t=setTimeout(()=>We("toast",!1),2800)};le("bGuardar").onclick=()=>Ke.play("guardar");var J0=new oo,$0=new st;function _1(s){let t=rr.getBoundingClientRect();$0.set((s.clientX-t.left)/t.width*2-1,-((s.clientY-t.top)/t.height)*2+1),J0.setFromCamera($0,In);let e=J0.intersectObjects(cn.hitTargets(),!1)[0];return e?cn.items[e.object.userData.item]:null}rr.addEventListener("pointermove",s=>{rr.style.cursor=or&&_1(s)?"pointer":""});rr.addEventListener("click",s=>{if(!or)return;let t=_1(s);if(t){if(t.state==="locked"){ze.fromTo(t.swing.rotation,{z:.35},{z:0,duration:1.4,ease:"elastic.out(1,.3)"});let e=new Date(t.key+"T12:00:00").toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"});lf(t.key===qi&&lr?`La carta de hoy se abre a las ${lr.hora}. Paciencia.`:`Esta carta se abre el ${e.replace(",","")}. Paciencia.`);return}p1(),fi=t.key,ar(),or=!1,We("ovTend",!1),rr.style.cursor="",Ke.seek("carta"),Ke.play()}});var K0={"#cuenta":"cuenta","#carta":"carta","#tendedero":"guardar"}[location.hash];Ke.pause(0);function x1(s){p1(),le("gate").classList.add("off"),setTimeout(()=>le("gate").remove(),1200),Yn=!s,d1(Yn),s?Ih():u1(),K0?Ke.seek(K0):Ke.restart(),Ke.play()}le("gStart").onclick=()=>x1(!0);le("gSilent").onclick=()=>x1(!1);fy.then(()=>(Re.API_URL&&ar(),Re.API_URL)).then(s=>{s&&fetch(Re.API_URL+(Re.API_URL.includes("?")?"&":"?")+"accion=publicas",{cache:"no-store"}).then(t=>t.json()).then(t=>{if(Object.entries(t.notas||{}).forEach(([e,n])=>{ma.notas[e]=n}),t.proxima&&t.proxima.fecha===qi){lr={hora:t.proxima.hora};let e=Tn.indexOf(qi);e>=0&&cn.lock(e,"a las "+t.proxima.hora);let[n,i]=t.proxima.hora.split(":").map(Number),r=new Date;r.setHours(n,i,30,0);let a=r-new Date;a>0&&a<e1&&setTimeout(()=>location.reload(),a)}t.fondo&&!window.__SONG&&f1("fondo","musica").then(e=>{if(af=e.url,fe){let n=!fe.paused;fe.src=e.url,n&&fe.play().catch(()=>{})}}).catch(()=>{}),t.hora&&/^\d{1,2}:\d{2}$/.test(t.hora)&&(Qo=t.hora.padStart(5,"0"),Ah=new Date(Re.FIESTA+"T"+Qo+":00+01:00")),ar(),uf()}).catch(()=>{})});var Dh=le("bPause");Dh.onclick=()=>{Ke.paused(!Ke.paused()),Dh.textContent=Ke.paused()?"Seguir":"Pausar",fe&&(Ke.paused()?fe.pause():!Yn&&fe.play().catch(()=>{}))};le("bReplay").onclick=()=>{Ke.restart(),Ke.paused(!1),Dh.textContent="Pausar",Yn||Ih()};le("bSound").onclick=()=>{if(fe&&fe.paused&&!Yn)return Ih();d1(!Yn),!Yn&&fe&&fe.paused&&Ih()};le("bCarta").onclick=()=>{fi=qi,ar(),Ke.seek("carta"),Ke.paused(!1),Dh.textContent="Pausar"};le("bFull").onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}catch{}};var Q0,j0=le("ui"),ff=()=>{j0.classList.add("on"),clearTimeout(Q0),Q0=setTimeout(()=>j0.classList.remove("on"),2600)};addEventListener("pointermove",ff);addEventListener("touchstart",ff);ff();var t1=new lo;function pf(){if(window.__freeze)return;let s=Math.min(t1.getDelta(),.05),t=t1.elapsedTime;My(s);let e=Math.min(Ko.v,1);Ci.rotation.y+=s*(.35+e*.5),qh.strength=.55+e*.55,ef.intensity=25+e*90,pi.toneMappingExposure=.95+e*.12,$o.rotation.y=Ci.rotation.y*.5,$o.position.copy(Ci.position),$o.material.uniforms.uTime.value=t,$o.material.uniforms.uI.value=ti.flecks*(.75+e*.9),ef.position.copy(Ci.position).add(new L(0,-2.6,2.4)),i1.forEach((l,c)=>{l.rotation.z=Math.sin(t*.5+c*2.1)*.32,l.rotation.x=Math.cos(t*.37+c)*.18,l.material.uniforms.uI.value=ti.beams*(.5+.15*Math.sin(t*1.3+c)+e*.55)}),W0.rotation.y=t*.01,W0.position.y=Math.sin(t*.2)*.2,sr.target.position.set(ge.tx,ge.ty,ge.tz),_a.target.position.copy(sr.target.position),sr.position.set(ge.tx+6,16,ge.tz+14),_a.position.set(ge.tx-10,8,ge.tz-8),jo.rotation.y=Math.sin(t*.4)*.06,jo.scale.setScalar(1+e*.025),As.rotation.y=Math.sin(t*.5)*.08,As.scale.setScalar(1+e*.03);let n=ge.x<-14;At.group.visible=n,sr.intensity=n?40:380,_a.intensity=n?90:320,n&&(qh.strength*=.5),As.visible=ge.x>14;let i=Math.floor(Rh.p*At.length);i!==sf&&(sf=i,At.write(i)),At.letter.rotation.y=Math.sin(t*.6)*.03*ti.carta,At.letter.rotation.x=Math.sin(t*.45)*.02*ti.carta;let r=ir?.56:Math.min(1,In.aspect/1.5),o=r+((ir?.86:r)-r)*ti.carta;Math.abs(In.zoom-o)>1e-4&&(In.zoom=o,In.updateProjectionMatrix()),cn.update(t,e,h1.boost),cn.group.visible=n&&ge.ty>2.5,yy(s),In.position.set(ge.x,ge.y+Math.sin(t*.9)*.05,ge.z),Z0.set(ge.tx,ge.ty,ge.tz),In.up.set(0,1,0),In.lookAt(Z0),In.rotateZ(ge.roll),ga.uniforms.uTime.value=t,n1.material.uniforms.uTime.value=t,cr.render(s),requestAnimationFrame(pf)}pf();window.__tl=Ke;window.__frame=pf;window.__snap=()=>(cr.render(0),pi.domElement.toDataURL("image/jpeg",.9));window.__audio=()=>({paused:fe?fe.paused:null,t:fe?fe.currentTime:null,beat:Ko.v,tl:Ke.time()});window.__itemScreen=s=>{let t=cn.items[s],e=new L(0,-.62*t.scale,0);t.group.localToWorld(e),e.project(In);let n=rr.getBoundingClientRect();return[(e.x+1)/2*n.width,(1-e.y)/2*n.height]};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
