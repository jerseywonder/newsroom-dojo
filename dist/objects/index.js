function o(o,n){const t={};n.forEach((n=>{o.hasOwnProperty(n)&&(t[n]=o[n])}));for(const r in o)n.includes(r)||(t[r]=o[r]);return t}function n(o,t){for(const r in t)"object"!=typeof o[r]?o[r]=t[r]:"object"==typeof t[r]&&(o[r]=n(o[r],t[r]));return o}export{n as merge,o as sortObjectByKey};