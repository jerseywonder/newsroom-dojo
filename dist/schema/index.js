const e=new Date,t=new Date;function n(r,u,o,a){function i(e){return r(e=0===arguments.length?new Date:new Date(+e)),e}return i.floor=e=>(r(e=new Date(+e)),e),i.ceil=e=>(r(e=new Date(e-1)),u(e,1),r(e),e),i.round=e=>{const t=i(e),n=i.ceil(e);return e-t<n-e?t:n},i.offset=(e,t)=>(u(e=new Date(+e),null==t?1:Math.floor(t)),e),i.range=(e,t,n)=>{const o=[];if(e=i.ceil(e),n=null==n?1:Math.floor(n),!(e<t&&n>0))return o;let a;do{o.push(a=new Date(+e)),u(e,n),r(e)}while(a<e&&e<t);return o},i.filter=e=>n((t=>{if(t>=t)for(;r(t),!e(t);)t.setTime(t-1)}),((t,n)=>{if(t>=t)if(n<0)for(;++n<=0;)for(;u(t,-1),!e(t););else for(;--n>=0;)for(;u(t,1),!e(t););})),o&&(i.count=(n,u)=>(e.setTime(+n),t.setTime(+u),r(e),r(t),Math.floor(o(e,t))),i.every=e=>(e=Math.floor(e),isFinite(e)&&e>0?e>1?i.filter(a?t=>a(t)%e==0:t=>i.count(0,t)%e==0):i:null)),i}const r=6e4,u=864e5,o=6048e5,a=n((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*r)/u),(e=>e.getDate()-1));a.range;const i=n((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/u),(e=>e.getUTCDate()-1));i.range;function c(e){return n((t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),((e,t)=>{e.setDate(e.getDate()+7*t)}),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*r)/o))}n((e=>{e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+t)}),((e,t)=>(t-e)/u),(e=>Math.floor(e/u))).range;const l=c(0),s=c(1),f=c(2),g=c(3),h=c(4),y=c(5),d=c(6);function m(e){return n((t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCDate(e.getUTCDate()+7*t)}),((e,t)=>(t-e)/o))}l.range,s.range,f.range,g.range,h.range,y.range,d.range;const p=m(0),T=m(1),D=m(2),v=m(3),C=m(4),F=m(5),M=m(6);p.range,T.range,D.range,v.range,C.range,F.range,M.range;const U=n((e=>{e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,t)=>{e.setFullYear(e.getFullYear()+t)}),((e,t)=>t.getFullYear()-e.getFullYear()),(e=>e.getFullYear()));U.every=e=>isFinite(e=Math.floor(e))&&e>0?n((t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,n)=>{t.setFullYear(t.getFullYear()+n*e)})):null,U.range;const Y=n((e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)}),((e,t)=>t.getUTCFullYear()-e.getUTCFullYear()),(e=>e.getUTCFullYear()));function w(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function x(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function b(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}Y.every=e=>isFinite(e=Math.floor(e))&&e>0?n((t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null,Y.range;var H,S,A,L={"-":"",_:" ",0:"0"},B=/^\s*\d+/,Q=/^%/,Z=/[\\^$*+?|[\]().{}]/g;function O(e,t,n){var r=e<0?"-":"",u=(r?-e:e)+"",o=u.length;return r+(o<n?new Array(n-o+1).join(t)+u:u)}function I(e){return e.replace(Z,"\\$&")}function E(e){return new RegExp("^(?:"+e.map(I).join("|")+")","i")}function V(e){return new Map(e.map(((e,t)=>[e.toLowerCase(),t])))}function W(e,t,n){var r=B.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function j(e,t,n){var r=B.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function q(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function z(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function J(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function N(e,t,n){var r=B.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function X(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function k(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function G(e,t,n){var r=B.exec(t.slice(n,n+1));return r?(e.q=3*r[0]-3,n+r[0].length):-1}function P(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function $(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function R(e,t,n){var r=B.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function _(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function K(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function ee(e,t,n){var r=B.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function te(e,t,n){var r=B.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function ne(e,t,n){var r=B.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function re(e,t,n){var r=Q.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function ue(e,t,n){var r=B.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function oe(e,t,n){var r=B.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function ae(e,t){return O(e.getDate(),t,2)}function ie(e,t){return O(e.getHours(),t,2)}function ce(e,t){return O(e.getHours()%12||12,t,2)}function le(e,t){return O(1+a.count(U(e),e),t,3)}function se(e,t){return O(e.getMilliseconds(),t,3)}function fe(e,t){return se(e,t)+"000"}function ge(e,t){return O(e.getMonth()+1,t,2)}function he(e,t){return O(e.getMinutes(),t,2)}function ye(e,t){return O(e.getSeconds(),t,2)}function de(e){var t=e.getDay();return 0===t?7:t}function me(e,t){return O(l.count(U(e)-1,e),t,2)}function pe(e){var t=e.getDay();return t>=4||0===t?h(e):h.ceil(e)}function Te(e,t){return e=pe(e),O(h.count(U(e),e)+(4===U(e).getDay()),t,2)}function De(e){return e.getDay()}function ve(e,t){return O(s.count(U(e)-1,e),t,2)}function Ce(e,t){return O(e.getFullYear()%100,t,2)}function Fe(e,t){return O((e=pe(e)).getFullYear()%100,t,2)}function Me(e,t){return O(e.getFullYear()%1e4,t,4)}function Ue(e,t){var n=e.getDay();return O((e=n>=4||0===n?h(e):h.ceil(e)).getFullYear()%1e4,t,4)}function Ye(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+O(t/60|0,"0",2)+O(t%60,"0",2)}function we(e,t){return O(e.getUTCDate(),t,2)}function xe(e,t){return O(e.getUTCHours(),t,2)}function be(e,t){return O(e.getUTCHours()%12||12,t,2)}function He(e,t){return O(1+i.count(Y(e),e),t,3)}function Se(e,t){return O(e.getUTCMilliseconds(),t,3)}function Ae(e,t){return Se(e,t)+"000"}function Le(e,t){return O(e.getUTCMonth()+1,t,2)}function Be(e,t){return O(e.getUTCMinutes(),t,2)}function Qe(e,t){return O(e.getUTCSeconds(),t,2)}function Ze(e){var t=e.getUTCDay();return 0===t?7:t}function Oe(e,t){return O(p.count(Y(e)-1,e),t,2)}function Ie(e){var t=e.getUTCDay();return t>=4||0===t?C(e):C.ceil(e)}function Ee(e,t){return e=Ie(e),O(C.count(Y(e),e)+(4===Y(e).getUTCDay()),t,2)}function Ve(e){return e.getUTCDay()}function We(e,t){return O(T.count(Y(e)-1,e),t,2)}function je(e,t){return O(e.getUTCFullYear()%100,t,2)}function qe(e,t){return O((e=Ie(e)).getUTCFullYear()%100,t,2)}function ze(e,t){return O(e.getUTCFullYear()%1e4,t,4)}function Je(e,t){var n=e.getUTCDay();return O((e=n>=4||0===n?C(e):C.ceil(e)).getUTCFullYear()%1e4,t,4)}function Ne(){return"+0000"}function Xe(){return"%"}function ke(e){return+e}function Ge(e){return Math.floor(+e/1e3)}H=function(e){var t=e.dateTime,n=e.date,r=e.time,u=e.periods,o=e.days,c=e.shortDays,l=e.months,f=e.shortMonths,g=E(u),h=V(u),y=E(o),d=V(o),m=E(c),p=V(c),D=E(l),v=V(l),C=E(f),F=V(f),M={a:function(e){return c[e.getDay()]},A:function(e){return o[e.getDay()]},b:function(e){return f[e.getMonth()]},B:function(e){return l[e.getMonth()]},c:null,d:ae,e:ae,f:fe,g:Fe,G:Ue,H:ie,I:ce,j:le,L:se,m:ge,M:he,p:function(e){return u[+(e.getHours()>=12)]},q:function(e){return 1+~~(e.getMonth()/3)},Q:ke,s:Ge,S:ye,u:de,U:me,V:Te,w:De,W:ve,x:null,X:null,y:Ce,Y:Me,Z:Ye,"%":Xe},U={a:function(e){return c[e.getUTCDay()]},A:function(e){return o[e.getUTCDay()]},b:function(e){return f[e.getUTCMonth()]},B:function(e){return l[e.getUTCMonth()]},c:null,d:we,e:we,f:Ae,g:qe,G:Je,H:xe,I:be,j:He,L:Se,m:Le,M:Be,p:function(e){return u[+(e.getUTCHours()>=12)]},q:function(e){return 1+~~(e.getUTCMonth()/3)},Q:ke,s:Ge,S:Qe,u:Ze,U:Oe,V:Ee,w:Ve,W:We,x:null,X:null,y:je,Y:ze,Z:Ne,"%":Xe},Y={a:function(e,t,n){var r=m.exec(t.slice(n));return r?(e.w=p.get(r[0].toLowerCase()),n+r[0].length):-1},A:function(e,t,n){var r=y.exec(t.slice(n));return r?(e.w=d.get(r[0].toLowerCase()),n+r[0].length):-1},b:function(e,t,n){var r=C.exec(t.slice(n));return r?(e.m=F.get(r[0].toLowerCase()),n+r[0].length):-1},B:function(e,t,n){var r=D.exec(t.slice(n));return r?(e.m=v.get(r[0].toLowerCase()),n+r[0].length):-1},c:function(e,n,r){return A(e,t,n,r)},d:$,e:$,f:ne,g:X,G:N,H:_,I:_,j:R,L:te,m:P,M:K,p:function(e,t,n){var r=g.exec(t.slice(n));return r?(e.p=h.get(r[0].toLowerCase()),n+r[0].length):-1},q:G,Q:ue,s:oe,S:ee,u:j,U:q,V:z,w:W,W:J,x:function(e,t,r){return A(e,n,t,r)},X:function(e,t,n){return A(e,r,t,n)},y:X,Y:N,Z:k,"%":re};function H(e,t){return function(n){var r,u,o,a=[],i=-1,c=0,l=e.length;for(n instanceof Date||(n=new Date(+n));++i<l;)37===e.charCodeAt(i)&&(a.push(e.slice(c,i)),null!=(u=L[r=e.charAt(++i)])?r=e.charAt(++i):u="e"===r?" ":"0",(o=t[r])&&(r=o(n,u)),a.push(r),c=i+1);return a.push(e.slice(c,i)),a.join("")}}function S(e,t){return function(n){var r,u,o=b(1900,void 0,1);if(A(o,e,n+="",0)!=n.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(t&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(u=(r=x(b(o.y,0,1))).getUTCDay(),r=u>4||0===u?T.ceil(r):T(r),r=i.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(u=(r=w(b(o.y,0,1))).getDay(),r=u>4||0===u?s.ceil(r):s(r),r=a.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),u="Z"in o?x(b(o.y,0,1)).getUTCDay():w(b(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(u+5)%7:o.w+7*o.U-(u+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,x(o)):w(o)}}function A(e,t,n,r){for(var u,o,a=0,i=t.length,c=n.length;a<i;){if(r>=c)return-1;if(37===(u=t.charCodeAt(a++))){if(u=t.charAt(a++),!(o=Y[u in L?t.charAt(a++):u])||(r=o(e,n,r))<0)return-1}else if(u!=n.charCodeAt(r++))return-1}return r}return M.x=H(n,M),M.X=H(r,M),M.c=H(t,M),U.x=H(n,U),U.X=H(r,U),U.c=H(t,U),{format:function(e){var t=H(e+="",M);return t.toString=function(){return e},t},parse:function(e){var t=S(e+="",!1);return t.toString=function(){return e},t},utcFormat:function(e){var t=H(e+="",U);return t.toString=function(){return e},t},utcParse:function(e){var t=S(e+="",!0);return t.toString=function(){return e},t}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),S=H.format,A=H.parse,H.utcFormat,H.utcParse;const Pe=/,|%|[$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/g;async function $e(e){let t={rows:[],cols:[]};var n;t.head=Object.keys(e[0]),t.rows=function(e){if(!e||!Array.isArray(e)||0===e.length)return[];const t=Object.keys(e[0]),n=e.map((e=>t.map((t=>e[t]))));return n.unshift(t),n}(e),t.cols=(n=t.rows)[0].map(((e,t)=>n.map((e=>e[t])))),t.body=t.rows.slice(1);const{cols:r,rows:u}=t;let o={};return o.type=await Dt(r),Re({...t,...o})}function Re(e){const{head:t,type:n,rows:r,body:u}=e;return t.map(((e,t)=>({column:e,index:t,label:e,dataTypes:n[t].list,formats:n[t].format})))}function _e(e="",t){let n={types:[]},r="body"===t?e.filter((e=>e)):e;const u=function(e){const t=it(e)||ct(e)||at(e,rt)||lt(e)||st(e);return{valid:!!t}}(r);u.valid&&n.types.push("date");const o=Ke(r);if(o.valid&&n.types.push("number"),!o.format&&"number"!==n.types.join()){(a=r,a.filter(((e,t)=>t===a.indexOf(e)))).length;r.length,n.types.push("string")}var a;return n.types.sort(),n}function Ke(e){let t=e.map((e=>("string"==typeof e&&(e=e.replace(Pe,"")),""===e?NaN:e))).filter((e=>!isNaN(e))).map((e=>parseFloat(e)));return{valid:t.length===e.filter((e=>""!==e)).length,values:t}}function et(e){if(e.length<2)return!0;e.sort(((e,t)=>e-t));const t=e[1]-e[0];for(let n=2;n<e.length;n++)if(e[n]-e[n-1]!==t)return!1;return!0}function tt(e){if(e.length<2)return"Array must have at least two elements";let t=!0,n=!0;for(let r=1;r<e.length;r++)e[r]<=e[r-1]&&(t=!1),e[r]>=e[r-1]&&(n=!1);return!!t||!!n}function nt(e){let t=Ke(e).values;return{min:Math.min(...t),max:Math.max(...t),scale:pt(t),hasEmptyValues:t.length!=e.length,sequential:et(t),strictly:tt(t)}}const rt=["%d-%b-%y","%d %b %Y","%d %b","%d-%B-%y","%d %B %Y","%d %B","%Y-%m-%d","%Y-%m-%dT%H:%M:%S%Z","%m/%d/%y %H:%M","%m/%d/%y %I:%M %p","%H:%M:%S","%b-%y","%b %y","%Y %b","%b %Y","%B-%y","%B %y","%Y %B","%B %Y","%Y-%y","%Y/%y","%b","%B"],ut=["%m/%d/%y","%m/%d/%Y"];function ot(e){const t=it(e)||ct(e)||at(e,rt)||lt(e)||st(e),n=t.includes("%d")||t.includes("%H");return{dateFormat:t,hasDay:n,scale:pt(e)}}function at(e,t){let n,r=t.find((t=>(n=A(t),n(String(e[0])))));return r&&e.every((e=>n(String(e))))?r:""}function it(e){let t=at(e,ut);if(t){const n=e.every((e=>"string"==typeof e&&e.split("/")[0]<=12)),r=e.some((e=>"string"==typeof e&&e.split("/")[1]>12));t=n&&r?t:"%d/%m/"+t.slice(-2),n&&!r&&console.warn("Format unclear!!!")}return t||""}function ct(e){const t="%Y",n=at(e,[t])===t,r=e.every((e=>"string"==typeof e&&4===e.length));return n&&r?t:""}function lt(e){const t=e.every((e=>"string"==typeof e&&("Q"===e[0]||"Q"===e[5])&&7===e.length)),n="%Y"===at(e.map((e=>"string"==typeof e?e.replace(/Q([1-4])/g,"").trim():e)),["%Y"]);return t&&n?"Q*":""}function st(e){const t="%Y%m%d",n=at(e,[t])===t,r=e.every((e=>"string"==typeof e&&parseInt(e.slice(4,6),10)>=1&&parseInt(e.slice(4,6),10)<=12)),u=e.every((e=>"string"==typeof e&&parseInt(e.slice(6),10)>=1&&parseInt(e.slice(6),10)<=31));return n&&r&&u?t:""}function ft(e,t,n,r=!1){let u;const o=t=>e.map((e=>t(e)));switch(!0){case["%Y"].includes(t):return e.map((e=>+e));case["Q*"].includes(t):{const t=e[0].indexOf("Q");return e.map((e=>+e.replace(/Q([1-4])/g,"").trim()+.25*(+e[t+1]-1)))}case["%Y-%y","%Y/%y"].includes(t):return e.map((e=>+e.slice(0,4)));case["%b","%B"].includes(t):return u=A(r?"%b":t),o(u).map((e=>e.getMonth()));case!n:return u=A(r?"%b %Y":t),o(u).map((e=>e.getFullYear()+e.getMonth()/12));default:return u=A(t),o(u)}}function gt(e,t,n){const r=e.toString().split(".")[0],u=e%1;let o,a,i;switch(!0){case["%Y"].includes(t):return e.toString();case["Q*"].includes(t):return"Q"+(e%1*4+1)+" "+r;case["%Y-%y","%Y/%y"].includes(t):return e+"-"+(e+1).toString().slice(-2);case["%b","%B"].includes(t):return o=new Date(2017,e),i=S("%b"),i(o);case!n:return a=Math.round(parseFloat(12*u)),o=new Date(r,a||0),i=S("%b %Y"),i(o);default:return null}}function ht(e){const t=e[1].getFullYear()-e[0].getFullYear(),n=e[1].getMonth()-e[0].getMonth(),r=e[1].getDate()-e[0].getDate(),u=e[1].getHours()-e[0].getHours();switch(!0){case t>4:return"%Y";case t>0:return"%b %Y";case n>4:return"%b";case n>0:return"%d %b";case r>0:return"%d %I%p";case u>0:return"%H:%M";default:return console.error("A new time format is required!"),""}}function yt(e){return{hasRepeat:mt(e),longest:dt(e),scale:pt(e)}}function dt(e){if(0===e.length)return 0;let t=0;for(const n of e)n.length>t&&(t=n.length);return t}function mt(e){const t=new Set;for(const n of e){if(t.has(n))return!0;t.add(n)}return!1}function pt(e){if(!Array.isArray(e)||0===e.length)return"Invalid data";const t=e[0],n=e.every((e=>"number"==typeof e)),r=e.every((e=>e instanceof Date)),u=e.some((e=>e<0)),o=new Set(e).size;if(r)return"scaleTime";if(n){if(u)return"scaleLinear";return Math.max(...e)/Math.min(...e)>1e3?"scaleLog":"scaleLinear"}return"string"!=typeof t&&n?"Unknown scale type":o===e.length?"scaleOrdinal":"scaleBand"}function Tt(e,t){if(e.length!==t.length)return e;const n=e.map((e=>e.column));if(!t.every((e=>n.includes(e))))return e;const r=t.map((t=>e.find((e=>e.column===t))));return r.forEach(((e,t)=>{e.index=t})),r.sort(((e,t)=>e.index-t.index)),r}const Dt=async e=>e.map(((e,t)=>{let n=_e(e.slice(1),"body").types;t>0&&(n=n.filter((e=>"date"!==e)));let r=[];return n.forEach((t=>{let n={status:!1};"number"===t&&(n=nt(e.slice(1))),"string"===t&&(n=yt(e.slice(1))),"date"===t&&(n=ot(e.slice(1))),r.push({type:t,format:{...n}})})),{list:n,format:r}}));export{tt as checkSequence,gt as dateNumToTxt,pt as determineD3ScaleType,_e as getDataTypeAnalysis,ot as getDateFormatting,ft as getDateScaleValues,ht as getDateTextFormat,nt as getNumberFormatting,yt as getStringFormatting,Re as processJsonData,$e as schema,Tt as sortJsonByColumnOrder};
