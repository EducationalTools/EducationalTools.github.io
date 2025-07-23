var x=Object.defineProperty;var T=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>T(e,typeof t!="symbol"?t+"":t,n);import"./CWj6FrbW.js";import{i as l,e as u,j as m,a as f,p as h,al as y,g as B,u as k,c as _}from"./Cd13tLbQ.js";import{a as g,m as L,u as O}from"./1ScPFJNN.js";import{i as I}from"./C1R1Yb0q.js";import{C as N,b as C,w as R}from"./CxTyhMz9.js";import{k as S,i as j}from"./Cr68Ji2L.js";import{c as q,r as A}from"./DfCpWMhL.js";import{I as M}from"./CPBS4AKp.js";function V(e,t){var n=l(),a=u(n);S(a,()=>t.children,r=>{var i=l(),o=u(i);g(o,()=>t.children??m),f(r,i)}),f(e,n)}const z=new N("BitsConfig");function D(){const e=new E(null,{});return z.getOr(e).opts}class E{constructor(t,n){v(this,"opts");const a=F(t,n);this.opts={defaultPortalTo:a(r=>r.defaultPortalTo),defaultLocale:a(r=>r.defaultLocale)}}}function F(e,t){return n=>C.with(()=>{var i,o;const r=(i=n(t))==null?void 0:i.current;if(r!==void 0)return r;if(e!==null)return(o=n(e.opts))==null?void 0:o.current})}function G(e,t){return n=>{const a=D();return C.with(()=>{const r=n();if(r!==void 0)return r;const i=e(a).current;return i!==void 0?i:t})}}const H=G(e=>e.defaultPortalTo,"body");function tt(e,t){h(t,!0);const n=H(()=>t.to),a=y();let r=k(i);function i(){if(!j||t.disabled)return null;let s=null;return typeof n.current=="string"?s=document.querySelector(n.current):s=n.current,s}let o;function d(){o&&(O(o),o=null)}R([()=>B(r),()=>t.disabled],([s,c])=>{if(!s||c){d();return}return o=L(V,{target:s,props:{children:t.children},context:a}),()=>{d()}});var p=l(),P=u(p);{var b=s=>{var c=l(),w=u(c);g(w,()=>t.children??m),f(s,c)};I(P,s=>{t.disabled&&s(b)})}f(e,p),_()}function et(e,t){h(t,!0);/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let n=A(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];M(e,q({name:"loader-circle"},()=>n,{get iconNode(){return a},children:(r,i)=>{var o=l(),d=u(o);g(d,()=>t.children??m),f(r,o)},$$slots:{default:!0}})),_()}export{et as L,tt as P};
