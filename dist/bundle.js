!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";function n(){const e=document.querySelector("#home"),t=document.querySelector("#menu"),l=document.querySelector("#contact");e.style.color="red",t.style.color="#413c42",l.style.color="#413c42";const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);let o=document.createElement("img");o.setAttribute("src","glasses.jpg"),o.setAttribute("alt","toasting wineglasses"),o.setAttribute("class","hero"),o.style.width="500px",o.style.height="auto",o.style.margin="auto",o.style.marginTop="50px",n.appendChild(o);let r=document.createElement("div");r.setAttribute("class","headline"),r.textContent="Bob's Diner",r.style.fontSize="4rem",n.style.color="#fff",n.appendChild(r);let c=document.createElement("ul");c.style.listStyle="none",c.setAttribute("class","reviews");let d=document.createElement("li");d.textContent="Good food!";let i=document.createElement("li");i.textContent="Great service!";let s=document.createElement("li");s.textContent="Cozy atomosphere!";let a=document.createElement("li");a.textContent="I didn't think a restaurant run by dogs would work, but here we are!",c.appendChild(d),c.appendChild(i),c.appendChild(s),c.appendChild(a),n.appendChild(c)}l.r(t),document.body.style.background="radial-gradient(#C7CDCB, #000)";const o=document.querySelector("#content");o.style.height="100vh",o.style.textAlign="center";let r=document.createElement("nav");r.setAttribute("class","main-tabs");let c=document.createElement("ul");r.appendChild(c),r.style.margin="0",r.style.padding="0",r.style.display="flex",r.style.flexWrap="center",r.style.listStyle="none";let d=document.createElement("li");d.style.border="2px solid black";let i=document.createElement("a");i.setAttribute("id","home"),i.setAttribute("href","#"),i.textContent="HOME",i.style.textDecoration="none",i.style.color="#413c42",i.style.padding="1.25rem 0.5rem",i.style.fontWeight="bold",d.appendChild(i),r.appendChild(d);let s=document.createElement("li");s.style.border="2px solid black";let a=document.createElement("a");a.setAttribute("id","menu"),a.setAttribute("href","#"),a.textContent="MENU",a.style.textDecoration="none",a.style.color="#413c42",a.style.padding="1.25rem 0.5rem",a.style.fontWeight="bold",s.appendChild(a),r.appendChild(s);let u=document.createElement("li");u.style.border="2px solid black";let m=document.createElement("a");m.setAttribute("id","contact"),m.setAttribute("href","#"),m.textContent="CONTACT",m.style.textDecoration="none",m.style.color="#413c42",m.style.padding="1.25rem 0.5rem",m.style.fontWeight="bold",u.appendChild(m),r.appendChild(u),document.body.prepend(r),n(),d.addEventListener("click",n),s.addEventListener("click",function(){const e=document.querySelector("#home"),t=document.querySelector("#menu"),l=document.querySelector("#contact");e.style.color="#413c42",t.style.color="red",l.style.color="#413c42";const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);let o=document.createElement("div");o.textContent="MENU",o.setAttribute("class","headlilne"),o.style.fontSize="5rem",o.style.color="#fff",n.appendChild(o);let r=document.createElement("ul");r.style.listStyle="none",r.style.textAlign="left",n.appendChild(r),["Peanut Butter","Cheese","Baby Carrots","Yogurt","Chicken","Bones","All dishes are served with a side order of the finest kibble"].forEach(e=>{let t=document.createElement("li");t.textContent=e,t.style.fontSize="2rem",r.appendChild(t)})}),u.addEventListener("click",function(){const e=document.querySelector("#home"),t=document.querySelector("#menu"),l=document.querySelector("#contact");e.style.color="#413c42",t.style.color="#413c42",l.style.color="red";const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);let o=document.createElement("div");o.textContent="Contact",o.setAttribute("class","headlilne"),o.style.fontSize="5rem",o.style.color="#fff",n.appendChild(o);let r=document.createElement("ul");r.style.width="400px",r.style.margin="auto",r.style.marginTop="100px",r.style.listStyle="dash",r.style.textAlign="left",n.appendChild(r),["walk around with a leash","shake a bag of dog treats","ball","howl at the moon","hmu on my cell"].forEach(e=>{let t=document.createElement("li");t.textContent=e,t.style.fontSize="1.2rem",r.appendChild(t)})})}]);