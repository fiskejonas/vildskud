const i=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};i();document.getElementById("dageDropdown").addEventListener("change",d);function d(){console.log("hej");let r,n,l,o,e,t;r=document.getElementById("dageDropdown"),n=document.getElementById("myTable"),l=n.getElementsByTagName("tr"),t=r.value;for(let s of l)o=s.getElementsByTagName("td"),e=o[3]||null,t==="Dato"||!e||t===e.textContent?s.style.display="":s.style.display="none"}document.querySelectorAll(".table_row").forEach(r=>{r.addEventListener("click",n=>{{let l=r.nextElementSibling,o=r.lastElementChild;l.style.display==="none"?(l.style.display="block",o.classList.add("arrow"),o.classList.remove("arrow2")):(l.style.display="none",o.classList.remove("arrow"),o.classList.add("arrow2"))}})});
