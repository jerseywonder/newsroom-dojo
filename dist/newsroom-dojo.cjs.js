"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("d3-time-format");const t=/,|%|[$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/g;const n=async e=>e.map(((e,t)=>{let n=function(e="",t){let n={types:[]},s="body"===t?e.filter((e=>e)):e;(function(e){const t=i(e)||l(e)||o(e,a)||c(e)||f(e);return{valid:!!t}})(s).valid&&n.types.push("date");const u=r(s);u.valid&&n.types.push("number");if(!u.format&&"number"!==n.types.join()){(y=s,y.filter(((e,t)=>t===y.indexOf(e)))).length;s.length,n.types.push("string")}var y;return n.types.sort(),n}(e.slice(1),"body").types;t>0&&(n=n.filter((e=>"date"!==e)));let u=[];return n.forEach((t=>{let n={status:!1};var p;"number"===t&&(n=function(e){let t=r(e).values;return{min:Math.min(...t),max:Math.max(...t),scale:m(t),hasEmptyValues:t.length!=e.length,sequential:s(t)}}(e.slice(1))),"string"===t&&(n={hasRepeat:d(p=e.slice(1)),longest:y(p),scale:m(p)}),"date"===t&&(n=function(e){const t=i(e)||l(e)||o(e,a)||c(e)||f(e),n=t.includes("%d")||t.includes("%H");return{dateFormat:t,hasDay:n,scale:m(e)}}(e.slice(1))),u.push({type:t,format:{...n}})})),{list:n,format:u}}));function r(e){let n=e.map((e=>("string"==typeof e&&(e=e.replace(t,"")),""===e?NaN:e))).filter((e=>!isNaN(e))).map((e=>parseFloat(e)));return{valid:n.length===e.filter((e=>""!==e)).length,values:n}}function s(e){if(e.length<2)return!0;e.sort(((e,t)=>e-t));const t=e[1]-e[0];for(let n=2;n<e.length;n++)if(e[n]-e[n-1]!==t)return!1;return!0}const a=["%d-%b-%y","%d %b %Y","%d %b","%d-%B-%y","%d %B %Y","%d %B","%Y-%m-%d","%Y-%m-%dT%H:%M:%S%Z","%m/%d/%y %H:%M","%m/%d/%y %I:%M %p","%H:%M:%S","%b-%y","%b %y","%Y %b","%b %Y","%B-%y","%B %y","%Y %B","%B %Y","%Y-%y","%Y/%y","%b","%B"],u=["%m/%d/%y","%m/%d/%Y"];function o(t,n){let r,s=n.find((n=>(r=e.timeParse(n),r(t[0]))));return s&&t.every((e=>r(e)))?s:""}function i(e){let t=o(e,u);if(t){const n=e.every((e=>e.split("/")[0]<=12)),r=e.some((e=>e.split("/")[1]>12));t=n&&r?t:"%d/%m/"+t.slice(-2),n&&!r&&console.warn("Format unclear!!!")}return t||""}function l(e){const t="%Y",n=o(e,[t])===t,r=e.every((e=>4===e.length));return n&&r?t:""}function c(e){const t=e.every((e=>("Q"===e[0]||"Q"===e[5])&&7===e.length)),n="%Y"===o(e.map((e=>e.replace(/Q([1-4])/g,"").trim())),["%Y"]);return t&&n?"Q*":""}function f(e){const t="%Y%m%d",n=o(e,[t])===t,r=e.every((e=>{const t=e.slice(4,6);return t>=1&&t<=12})),s=e.every((e=>{const t=e.slice(6);return t>=1&&t<=31}));return n&&r&&s?t:""}function y(e){if(0===e.length)return 0;let t=0;for(const n of e)n.length>t&&(t=n.length);return t}function d(e){const t=new Set;for(const n of e){if(t.has(n))return!0;t.add(n)}return!1}function m(e){if(!Array.isArray(e)||0===e.length)return"Invalid data";const t=e[0],n=e.every((e=>"number"==typeof e)),r=e.every((e=>e instanceof Date)),s=e.some((e=>e<0)),a=new Set(e).size;if(r)return"scaleTime";if(n){if(s)return"scaleLinear";return Math.max(...e)/Math.min(...e)>1e3?"scaleLog":"scaleLinear"}return"string"!=typeof t&&n?"Unknown scale type":a===e.length?"scaleOrdinal":"scaleBand"}exports.contains=function(e,t){return Array.isArray(t)?t.some((t=>e.includes(t))):e.includes(t)},exports.schema=async function(e){let t={rows:[],cols:[]};var r;t.head=Object.keys(e[0]),t.rows=function(e){if(!e||!Array.isArray(e)||0===e.length)return[];const t=Object.keys(e[0]),n=e.map((e=>t.map((t=>e[t]))));return n.unshift(t),n}(e),t.cols=(r=t.rows)[0].map(((e,t)=>r.map((e=>e[t])))),t.body=t.rows.slice(1);const{cols:s,rows:a}=t;let u={};return u.type=await n(s),function(e){const{head:t,type:n,rows:r,body:s}=e;return t.map(((e,t)=>({column:e,index:t,label:e,dataTypes:n[t].list,formats:n[t].format})))}({...t,...u})};
