function n(n,r){return Array.isArray(r)?r.some((r=>n.includes(r))):n.includes(r)}function r(n,r){const t={};r.forEach((r=>{n.hasOwnProperty(r)&&(t[r]=n[r])}));for(const e in n)r.includes(e)||(t[e]=n[e]);return t}function t(n,r){return Array.isArray(r)?r.filter((r=>!n.includes(r))):n.includes(r)?[]:r}function e(n){const r=[];return n.forEach((n=>{r.includes(n)||r.push(n)})),r}function o(n,r){return n.reduce(((n,t)=>n+t[r]),0)}function u(n){let r=n.length;for(;r>0;){const t=Math.floor(Math.random()*r);r--,[n[r],n[t]]=[n[t],n[r]]}return n}function c(n,r){return n.filter((n=>n%r==0))}function i(n,r){return Array.isArray(r)?r.filter((r=>n.includes(r))):n.includes(r)?r:[]}function f(n){const r=Object.create(null);for(const t of n){if(t in r)return!0;r[t]=!0}return!1}function s(n,r){let t=n.length;for(;t>0&&n[t-1]<=r;)t--;return t}function l(n,r){let t,e=1/0;for(const o of n){const n=Math.abs(r-o);n<e&&(e=n,t=o)}return t}function a(n,r){return n.reduce(((n,t,e)=>{const o=Math.floor(e/r);return n[o]=[].concat(n[o]||[],t),n}),[])}export{a as chunkArrayInGroups,n as contains,l as getClosest,s as getNextHighestIndex,f as has_duplicates,i as match_array,c as multiples,u as shuffle,r as sortObjectByKey,o as sum,e as unique,t as unmatched_array};