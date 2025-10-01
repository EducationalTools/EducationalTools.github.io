var ve=Object.defineProperty;var ue=t=>{throw TypeError(t)};var ye=(t,e,r)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var E=(t,e,r)=>ye(t,typeof e!="symbol"?e+"":e,r),ce=(t,e,r)=>e.has(t)||ue("Cannot "+r);var a=(t,e,r)=>(ce(t,e,"read from private field"),r?r.call(t):e.get(t)),v=(t,e,r)=>e.has(t)?ue("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);var X=(t,e,r)=>(ce(t,e,"access private method"),r);import"./Bzak7iHL.js";import{ac as xe,bh as _e,bi as Ce,l as m,i as f,k as _,p as D,e as S,g as w,a as b,b as N,f as W,aK as we,s as Re,c as le,h as ne,r as fe}from"./d1nUEqUP.js";import{i as M}from"./DGIKQ0Uj.js";import{c as Pe}from"./Bpp8RQHS.js";import{p,r as j,s as Z}from"./BoGLRf8T.js";import{c as Se}from"./C5wEKks9.js";import{s as Y}from"./BTq2v8-X.js";import{a as te}from"./DsZizbNA.js";import{s as qe,C as pe,a as De,w as re,E as Ne,S as Ee,f as de,e as he,h as Me,d as Oe,i as Te,m as me,c as Ae,b as y}from"./DDtFSxr8.js";import"./CDC-V8pw.js";import{i as Ie}from"./BfBzHWrq.js";import{c as ze}from"./BDf64DY3.js";import{I as ge}from"./g6SG27Vf.js";const Be=[];function He(t,e=!1,r=!1){return F(t,new Map,"",Be,null,r)}function F(t,e,r,s,i=null,u=!1){if(typeof t=="object"&&t!==null){var n=e.get(t);if(n!==void 0)return n;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(xe(t)){var o=Array(t.length);e.set(t,o),i!==null&&e.set(i,o);for(var d=0;d<t.length;d+=1){var g=t[d];d in t&&(o[d]=F(g,e,r,s,null,u))}return o}if(_e(t)===Ce){o={},e.set(t,o),i!==null&&e.set(i,o);for(var h in t)o[h]=F(t[h],e,r,s,null,u);return o}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!u)return F(t.toJSON(),e,r,s,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const Ge={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"},Je=qe(Ge),We=Oe({component:"checkbox",parts:["root","group","group-label","input"]}),je=new pe("Checkbox.Group"),be=new pe("Checkbox.Root");var O,T,A,I,q,Q,z,B;const oe=class oe{constructor(e,r){v(this,q);E(this,"opts");E(this,"group");v(this,O,m(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current));v(this,T,m(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current));v(this,A,m(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current));v(this,I,m(()=>this.group&&this.group.opts.readonly.current?!0:this.opts.readonly.current));E(this,"attachment");v(this,z,m(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current})));v(this,B,m(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Me(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":he(this.trueRequired),"aria-readonly":he(this.trueReadonly),"data-disabled":de(this.trueDisabled),"data-readonly":de(this.trueReadonly),"data-state":Ke(this.opts.checked.current,this.opts.indeterminate.current),[We.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment})));this.opts=e,this.group=r,this.attachment=De(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),re.pre([()=>{var s;return He((s=this.group)==null?void 0:s.opts.value.current)},()=>this.opts.value.current],([s,i])=>{!s||!i||(this.opts.checked.current=s.includes(i))}),re.pre(()=>this.opts.checked.current,s=>{var i,u;this.group&&(s?(i=this.group)==null||i.addValue(this.opts.value.current):(u=this.group)==null||u.removeValue(this.opts.value.current))})}static create(e,r=null){return be.set(new oe(e,r))}get trueName(){return f(a(this,O))}set trueName(e){_(a(this,O),e)}get trueRequired(){return f(a(this,T))}set trueRequired(e){_(a(this,T),e)}get trueDisabled(){return f(a(this,A))}set trueDisabled(e){_(a(this,A),e)}get trueReadonly(){return f(a(this,I))}set trueReadonly(e){_(a(this,I),e)}onkeydown(e){this.trueDisabled||this.trueReadonly||(e.key===Ne&&e.preventDefault(),e.key===Ee&&(e.preventDefault(),X(this,q,Q).call(this)))}onclick(e){if(!(this.trueDisabled||this.trueReadonly)){if(this.opts.type.current==="submit"){X(this,q,Q).call(this);return}e.preventDefault(),X(this,q,Q).call(this)}}get snippetProps(){return f(a(this,z))}set snippetProps(e){_(a(this,z),e)}get props(){return f(a(this,B))}set props(e){_(a(this,B),e)}};O=new WeakMap,T=new WeakMap,A=new WeakMap,I=new WeakMap,q=new WeakSet,Q=function(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current},z=new WeakMap,B=new WeakMap;let se=oe;var H,G,J;const ae=class ae{constructor(e){E(this,"root");v(this,H,m(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current));v(this,G,m(()=>!!this.root.trueName));v(this,J,m(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current,readonly:this.root.trueReadonly,onfocus:this.onfocus})));this.root=e,this.onfocus=this.onfocus.bind(this)}static create(){return new ae(be.get())}get trueChecked(){return f(a(this,H))}set trueChecked(e){_(a(this,H),e)}get shouldRender(){return f(a(this,G))}set shouldRender(e){_(a(this,G),e)}onfocus(e){Te(this.root.opts.ref.current)&&this.root.opts.ref.current.focus()}get props(){return f(a(this,J))}set props(e){_(a(this,J),e)}};H=new WeakMap,G=new WeakMap,J=new WeakMap;let ie=ae;function Ke(t,e){return e?"indeterminate":t?"checked":"unchecked"}var Le=W("<input/>"),Ue=W("<input/>");function Ve(t,e){D(e,!0);let r=p(e,"value",15),s=j(e,["$$slots","$$events","$$legacy","value"]);const i=m(()=>me(s,{"aria-hidden":"true",tabindex:-1,style:Je}));var u=S(),n=w(u);{var o=g=>{var h=Le();te(h,()=>({...f(i),value:r()}),void 0,void 0,void 0,!0),b(g,h)},d=g=>{var h=Ue();te(h,()=>({...f(i)}),void 0,void 0,void 0,!0),ze(h,r),b(g,h)};M(n,g=>{f(i).type==="checkbox"?g(o):g(d,!1)})}b(t,u),N()}function Xe(t,e){D(e,!1);const r=ie.create();Ie();var s=S(),i=w(s);{var u=n=>{Ve(n,Z(()=>r.props))};M(i,n=>{r.shouldRender&&n(u)})}b(t,s),N()}var Fe=W("<button><!></button>"),Qe=W("<!> <!>",1);function Ye(t,e){const r=we();D(e,!0);let s=p(e,"checked",15,!1),i=p(e,"ref",15,null),u=p(e,"disabled",3,!1),n=p(e,"required",3,!1),o=p(e,"name",3,void 0),d=p(e,"value",3,"on"),g=p(e,"id",19,()=>Ae(r)),h=p(e,"indeterminate",15,!1),k=p(e,"type",3,"button"),x=j(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type","readonly"]);const R=je.getOr(null);R&&d()&&(R.opts.value.current.includes(d())?s(!0):s(!1)),re.pre(()=>d(),()=>{R&&d()&&(R.opts.value.current.includes(d())?s(!0):s(!1))});const P=se.create({checked:y(()=>s(),l=>{var c;s(l),(c=e.onCheckedChange)==null||c.call(e,l)}),disabled:y(()=>u()??!1),required:y(()=>n()),name:y(()=>o()),value:y(()=>d()),id:y(()=>g()),ref:y(()=>i(),l=>i(l)),indeterminate:y(()=>h(),l=>{var c;h(l),(c=e.onIndeterminateChange)==null||c.call(e,l)}),type:y(()=>k()),readonly:y(()=>!!e.readonly)},R),K=m(()=>me({...x},P.props));var L=Qe(),U=w(L);{var C=l=>{var c=S(),ee=w(c);{let ke=m(()=>({props:f(K),...P.snippetProps}));Y(ee,()=>e.child,()=>f(ke))}b(l,c)},V=l=>{var c=Fe();te(c,()=>({...f(K)}));var ee=le(c);Y(ee,()=>e.children??ne,()=>P.snippetProps),fe(c),b(l,c)};M(U,l=>{e.child?l(C):l(V,!1)})}var $=Re(U,2);Xe($,{}),b(t,L),N()}function Ze(t,e){D(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=j(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M20 6 9 17l-5-5"}]];ge(t,Z({name:"check"},()=>r,{get iconNode(){return s},children:(i,u)=>{var n=S(),o=w(n);Y(o,()=>e.children??ne),b(i,n)},$$slots:{default:!0}})),N()}function $e(t,e){D(e,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
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
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=j(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];ge(t,Z({name:"minus"},()=>r,{get iconNode(){return s},children:(i,u)=>{var n=S(),o=w(n);Y(o,()=>e.children??ne),b(i,n)},$$slots:{default:!0}})),N()}var et=W('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function mt(t,e){D(e,!0);let r=p(e,"ref",15,null),s=p(e,"checked",15,!1),i=p(e,"indeterminate",15,!1),u=j(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var n=S(),o=w(n);{const d=(h,k)=>{let x=()=>k==null?void 0:k().checked,R=()=>k==null?void 0:k().indeterminate;var P=et(),K=le(P);{var L=C=>{Ze(C,{class:"size-3.5"})},U=C=>{var V=S(),$=w(V);{var l=c=>{$e(c,{class:"size-3.5"})};M($,c=>{R()&&c(l)},!0)}b(C,V)};M(K,C=>{x()?C(L):C(U,!1)})}fe(P),b(h,P)};let g=m(()=>Se("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));Pe(o,()=>Ye,(h,k)=>{k(h,Z({"data-slot":"checkbox",get class(){return f(g)}},()=>u,{get ref(){return r()},set ref(x){r(x)},get checked(){return s()},set checked(x){s(x)},get indeterminate(){return i()},set indeterminate(x){i(x)},children:d,$$slots:{default:!0}}))})}b(t,n),N()}export{mt as C,Ve as H,Ge as a,Ze as b,He as s};
