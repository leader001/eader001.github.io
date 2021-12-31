!function(e){"use strict";var s,r=1e6,t="[big.js] ",n=t+"Invalid ",i=n+"decimal places",o=n+"rounding mode",a=t+"Division by zero",f={},c=void 0,u=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function l(e,s,r,t){var n=e.c,i=e.e+s+1;if(i<n.length){if(1===r)t=5<=n[i];else if(2===r)t=5<n[i]||5==n[i]&&(t||i<0||n[i+1]!==c||1&n[i-1]);else if(3===r)t=t||!!n[0];else if(t=!1,0!==r)throw Error(o);if(i<1)n.length=1,t?(e.e=-s,n[0]=1):n[0]=e.e=0;else{if(n.length=i--,t)for(;9<++n[i];)n[i]=0,i--||(++e.e,n.unshift(1));for(i=n.length;!n[--i];)n.pop()}}else if(r<0||3<r||r!==~~r)throw Error(o);return e}function h(e,s,t,o){var a,f,u=e.constructor,h=!e.c[0];if(t!==c){if(t!==~~t||t<(3==s)||r<t)throw Error(3==s?n+"precision":i);for(t=o-(e=new u(e)).e,e.c.length>++o&&l(e,t,u.RM),2==s&&(o=e.e+t+1);e.c.length<o;)e.c.push(0)}if(a=e.e,t=(f=e.c.join("")).length,2!=s&&(1==s||3==s&&o<=a||a<=u.NE||a>=u.PE))f=f.charAt(0)+(1<t?"."+f.slice(1):"")+(a<0?"e":"e+")+a;else if(a<0){for(;++a;)f="0"+f;f="0."+f}else if(0<a)if(++a>t)for(a-=t;a--;)f+="0";else a<t&&(f=f.slice(0,a)+"."+f.slice(a));else 1<t&&(f=f.charAt(0)+"."+f.slice(1));return e.s<0&&(!h||4==s)?"-"+f:f}f.abs=function(){var e=new this.constructor(this);return e.s=1,e},f.cmp=function(e){var s,r=this,t=r.c,n=(e=new r.constructor(e)).c,i=r.s,o=e.s,a=r.e,f=e.e;if(!t[0]||!n[0])return t[0]?i:n[0]?-o:0;if(i!=o)return i;if(s=i<0,a!=f)return f<a^s?1:-1;for(o=(a=t.length)<(f=n.length)?a:f,i=-1;++i<o;)if(t[i]!=n[i])return t[i]>n[i]^s?1:-1;return a==f?0:f<a^s?1:-1},f.div=function(e){var s=this,t=s.constructor,n=s.c,o=(e=new t(e)).c,f=s.s==e.s?1:-1,u=t.DP;if(u!==~~u||u<0||r<u)throw Error(i);if(!o[0])throw Error(a);if(!n[0])return new t(0*f);var h,b,E,A,p,v=o.slice(),S=h=o.length,g=n.length,d=n.slice(0,h),L=d.length,N=e,m=N.c=[],T=0,R=u+(N.e=s.e-e.e)+1;for(N.s=f,f=R<0?0:R,v.unshift(0);L++<h;)d.push(0);do{for(E=0;E<10;E++){if(h!=(L=d.length))A=L<h?1:-1;else for(p=-1,A=0;++p<h;)if(o[p]!=d[p]){A=o[p]>d[p]?1:-1;break}if(!(A<0))break;for(b=L==h?o:v;L;){if(d[--L]<b[L]){for(p=L;p&&!d[--p];)d[p]=9;--d[p],d[L]+=10}d[L]-=b[L]}for(;!d[0];)d.shift()}m[T++]=A?E:++E,d[0]&&A?d[L]=n[S]||0:d=[n[S]]}while((S++<g||d[0]!==c)&&f--);return m[0]||1==T||(m.shift(),N.e--),R<T&&l(N,u,t.RM,d[0]!==c),N},f.eq=function(e){return!this.cmp(e)},f.gt=function(e){return 0<this.cmp(e)},f.gte=function(e){return-1<this.cmp(e)},f.lt=function(e){return this.cmp(e)<0},f.lte=function(e){return this.cmp(e)<1},f.minus=f.sub=function(e){var s,r,t,n,i=this,o=i.constructor,a=i.s,f=(e=new o(e)).s;if(a!=f)return e.s=-f,i.plus(e);var c=i.c.slice(),u=i.e,l=e.c,h=e.e;if(!c[0]||!l[0])return l[0]?(e.s=-f,e):new o(c[0]?i:0);if(a=u-h){for((t=(n=a<0)?(a=-a,c):(h=u,l)).reverse(),f=a;f--;)t.push(0);t.reverse()}else for(r=((n=c.length<l.length)?c:l).length,a=f=0;f<r;f++)if(c[f]!=l[f]){n=c[f]<l[f];break}if(n&&(t=c,c=l,l=t,e.s=-e.s),0<(f=(r=l.length)-(s=c.length)))for(;f--;)c[s++]=0;for(f=s;a<r;){if(c[--r]<l[r]){for(s=r;s&&!c[--s];)c[s]=9;--c[s],c[r]+=10}c[r]-=l[r]}for(;0===c[--f];)c.pop();for(;0===c[0];)c.shift(),--h;return c[0]||(e.s=1,c=[h=0]),e.c=c,e.e=h,e},f.mod=function(e){var s,r=this,t=r.constructor,n=r.s,i=(e=new t(e)).s;if(!e.c[0])throw Error(a);return r.s=e.s=1,s=1==e.cmp(r),r.s=n,e.s=i,s?new t(r):(n=t.DP,i=t.RM,t.DP=t.RM=0,r=r.div(e),t.DP=n,t.RM=i,this.minus(r.times(e)))},f.plus=f.add=function(e){var s,r=this,t=r.constructor,n=r.s,i=(e=new t(e)).s;if(n!=i)return e.s=-i,r.minus(e);var o=r.e,a=r.c,f=e.e,c=e.c;if(!a[0]||!c[0])return c[0]?e:new t(a[0]?r:0*n);if(a=a.slice(),n=o-f){for((s=0<n?(f=o,c):(n=-n,a)).reverse();n--;)s.push(0);s.reverse()}for(a.length-c.length<0&&(s=c,c=a,a=s),n=c.length,i=0;n;a[n]%=10)i=(a[--n]=a[n]+c[n]+i)/10|0;for(i&&(a.unshift(i),++f),n=a.length;0===a[--n];)a.pop();return e.c=a,e.e=f,e},f.pow=function(e){var s=this,r=new s.constructor(1),t=r,i=e<0;if(e!==~~e||e<-1e6||1e6<e)throw Error(n+"exponent");for(i&&(e=-e);1&e&&(t=t.times(s)),e>>=1;)s=s.times(s);return i?r.div(t):t},f.round=function(e,s){var t=this.constructor;if(e===c)e=0;else if(e!==~~e||e<-r||r<e)throw Error(i);return l(new t(this),e,s===c?t.RM:s)},f.sqrt=function(){var e,s,r,n=this,i=n.constructor,o=n.s,a=n.e,f=new i(.5);if(!n.c[0])return new i(n);if(o<0)throw Error(t+"No square root");for(a=(e=0===(o=Math.sqrt(n+""))||o===1/0?((s=n.c.join("")).length+a&1||(s+="0"),a=((a+1)/2|0)-(a<0||1&a),new i(((o=Math.sqrt(s))==1/0?"1e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+a)):new i(o)).e+(i.DP+=4);r=e,e=f.times(r.plus(n.div(r))),r.c.slice(0,a).join("")!==e.c.slice(0,a).join(""););return l(e,i.DP-=4,i.RM)},f.times=f.mul=function(e){var s,r=this.constructor,t=this.c,n=(e=new r(e)).c,i=t.length,o=n.length,a=this.e,f=e.e;if(e.s=this.s==e.s?1:-1,!t[0]||!n[0])return new r(0*e.s);for(e.e=a+f,i<o&&(s=t,t=n,n=s,f=i,i=o,o=f),s=new Array(f=i+o);f--;)s[f]=0;for(a=o;a--;){for(o=0,f=i+a;a<f;)o=s[f]+n[a]*t[f-a-1]+o,s[f--]=o%10,o=o/10|0;s[f]=o}for(o?++e.e:s.shift(),a=s.length;!s[--a];)s.pop();return e.c=s,e},f.toExponential=function(e){return h(this,1,e,e)},f.toFixed=function(e){return h(this,2,e,this.e+e)},f.toPrecision=function(e){return h(this,3,e,e-1)},f.toString=function(){return h(this)},f.valueOf=f.toJSON=function(){return h(this,4)},(s=function b(){function e(s){var r=this;if(!(r instanceof e))return s===c?b():new e(s);s instanceof e?(r.s=s.s,r.e=s.e,r.c=s.c.slice()):function(e,s){var r,t,i;if(0===s&&1/s<0)s="-0";else if(!u.test(s+=""))throw Error(n+"number");for(e.s="-"==s.charAt(0)?(s=s.slice(1),-1):1,-1<(r=s.indexOf("."))&&(s=s.replace(".","")),0<(t=s.search(/e/i))?(r<0&&(r=t),r+=+s.slice(t+1),s=s.substring(0,t)):r<0&&(r=s.length),i=s.length,t=0;t<i&&"0"==s.charAt(t);)++t;if(t==i)e.c=[e.e=0];else{for(;0<i&&"0"==s.charAt(--i););for(e.e=r-t-1,e.c=[],r=0;t<=i;)e.c[r++]=+s.charAt(t++)}}(r,s),r.constructor=e}return e.prototype=f,e.DP=20,e.RM=1,e.NE=-7,e.PE=21,e.version="5.2.2",e}())["default"]=s.Big=s,"function"==typeof define&&define.amd?define((function(){return s})):"undefined"!=typeof module&&module.exports?module.exports=s:e.Big=s}(this);var bases="undefined"!=typeof exports?exports:window.Bases={};bases.toAlphabet=function(e,s){var r=s.length,t=[],n=-1===e.s?"-":null;e=e.abs();do{t.push(e.mod(r)),e=e.div(r).round(0,0)}while(e.gt(0));var i=[];for(n&&i.push(n);t.length;)i.push(s[parseInt(t.pop())]);return i.join("")},bases.fromAlphabet=function(e,s){var r,t,n=s.length,i=0,o=Big(0),a=e.substr(0,1);for("-"!==a&&"+"!==a||(e=e.substr(1)),a="-"===a?a:null;e.length;)r=e[e.length-1],e=e.substr(0,e.length-1),t=r.charCodeAt(0)>=65&&r.charCodeAt(0)<=90,-1===s.indexOf(r)&&(r=t?r.toLowerCase():r.toUpperCase()),o=o.plus(Big(n).pow(i).times(s.indexOf(r))),i++;return a&&(o=o.times(-1)),o},bases.NUMERALS="0123456789",bases.LETTERS_LOWERCASE="abcdefghijklmnopqrstuvwxyz",bases.LETTERS_UPPERCASE=bases.LETTERS_LOWERCASE.toUpperCase(),bases.KNOWN_ALPHABETS={};for(var i=2;i<=10;i++)bases.KNOWN_ALPHABETS[i]=bases.NUMERALS.substr(0,i);for(i=11;i<=16;i++)bases.KNOWN_ALPHABETS[i]=bases.NUMERALS+bases.LETTERS_LOWERCASE.substr(0,i-10);function makeAlias(e,s){bases["toBase"+e]=function(e){return bases.toAlphabet(e,s)},bases["fromBase"+e]=function(e){return bases.fromAlphabet(e,s)}}for(var base in bases.KNOWN_ALPHABETS[36]=bases.NUMERALS+bases.LETTERS_LOWERCASE,bases.KNOWN_ALPHABETS[62]=bases.NUMERALS+bases.LETTERS_LOWERCASE+bases.LETTERS_UPPERCASE,bases.KNOWN_ALPHABETS[26]=bases.LETTERS_LOWERCASE,bases.KNOWN_ALPHABETS[52]=bases.LETTERS_LOWERCASE+bases.LETTERS_UPPERCASE,bases.KNOWN_ALPHABETS[64]=bases.LETTERS_UPPERCASE+bases.LETTERS_LOWERCASE+bases.NUMERALS+"+/",bases.KNOWN_ALPHABETS[58]=bases.KNOWN_ALPHABETS[62].replace(/[0OlI]/g,""),bases.KNOWN_ALPHABETS[32]=bases.NUMERALS+bases.LETTERS_UPPERCASE.replace(/[ILOU]/g,""),bases.KNOWN_ALPHABETS)bases.KNOWN_ALPHABETS.hasOwnProperty(base)&&makeAlias(base,bases.KNOWN_ALPHABETS[base]);bases.toBase=function(e,s){return bases.toAlphabet(e,bases.KNOWN_ALPHABETS[s])},bases.fromBase=function(e,s){return bases.fromAlphabet(e,bases.KNOWN_ALPHABETS[s])},function(e){var s=e("#hex_more"),r=e(".js-hex"),t=!1;r.on("click",(function(r){t=!0,s.val(e(this).val()),t=!1})),s.on("change",(function(e){t||(r.prop("checked",!1),r.filter("[value="+s.val()+"]").prop("checked",!0))})),e("#main_form").on("submit",(function(r){if(r.preventDefault(),-1!==(n=e("#num").val()).indexOf("."))return modal("暂时还不支持小数。");var t=s.val(),n=bases.fromBase(n,t);e("#base_2").val(bases.toBase(n,2)),e("#base_8").val(bases.toBase(n,8)),e("#base_10").val(bases.toBase(n,10)),e("#base_16").val(bases.toBase(n,16)),e("#base_26").val(bases.toBase(n,26)),e("#base_32").val(bases.toBase(n,32)),e("#base_36").val(bases.toBase(n,36)),e("#base_52").val(bases.toBase(n,52)),e("#base_58").val(bases.toBase(n,58)),e("#base_62").val(bases.toBase(n,62))}))}(jQuery);