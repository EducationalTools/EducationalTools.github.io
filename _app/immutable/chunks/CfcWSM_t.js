var ve=Object.defineProperty;var ae=t=>{throw TypeError(t)};var ke=(t,e,r)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var A=(t,e,r)=>ke(t,typeof e!="symbol"?e+"":e,r),oe=(t,e,r)=>e.has(t)||ae("Cannot "+r);var a=(t,e,r)=>(oe(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?ae("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);var Y=(t,e,r)=>(oe(t,e,"access private method"),r);import"./Bzak7iHL.js";import{aw as p,i as d,k as w,p as D,e as R,g as C,a as f,c as N,f as T,aA as ge,s as be,d as ue,h as se,r as de}from"./zOeN_PB6.js";import{i as S}from"./kzG8n2m5.js";import{c as ye}from"./D6YONHPi.js";import{p as l,r as V,s as U}from"./KUXNiUzL.js";import{r as ce,a as Z,c as _e}from"./BHHFZoJ7.js";import{a as Q}from"./BpwvG457.js";import{C as he,a as xe,w as $,E as we,S as Ce,f as qe,h as Pe,i as Re,c as De,m as le,s as Ne,b as Ae,d as _}from"./Dpir5LKk.js";import"./CD_UOH_r.js";import{s as Se}from"./DKqx73Nl.js";import"./C18at_uT.js";import{i as Ee}from"./Duf-PIwG.js";import{a as Ie}from"./Bx5n6Vg9.js";import{I as pe}from"./DZWzz3up.js";const ze=De({component:"checkbox",parts:["root","group","group-label","input"]}),Me=new he("Checkbox.Group"),fe=new he("Checkbox.Root");var E,I,z,M,te,B,G;const ie=class ie{constructor(e,r){g(this,M);A(this,"opts");A(this,"group");g(this,E,p(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current));g(this,I,p(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current));g(this,z,p(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current));A(this,"attachment");g(this,B,p(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current})));g(this,G,p(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Re(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Pe(this.trueRequired),"data-disabled":qe(this.trueDisabled),"data-state":Be(this.opts.checked.current,this.opts.indeterminate.current),[ze.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment})));this.opts=e,this.group=r,this.attachment=xe(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),$.pre([()=>{var s;return Se((s=this.group)==null?void 0:s.opts.value.current)},()=>this.opts.value.current],([s,i])=>{!s||!i||(this.opts.checked.current=s.includes(i))}),$.pre(()=>this.opts.checked.current,s=>{var i,h;this.group&&(s?(i=this.group)==null||i.addValue(this.opts.value.current):(h=this.group)==null||h.removeValue(this.opts.value.current))})}static create(e,r=null){return fe.set(new ie(e,r))}get trueName(){return d(a(this,E))}set trueName(e){w(a(this,E),e)}get trueRequired(){return d(a(this,I))}set trueRequired(e){w(a(this,I),e)}get trueDisabled(){return d(a(this,z))}set trueDisabled(e){w(a(this,z),e)}onkeydown(e){this.opts.disabled.current||(e.key===we&&e.preventDefault(),e.key===Ce&&(e.preventDefault(),Y(this,M,te).call(this)))}onclick(e){this.opts.disabled.current||Y(this,M,te).call(this)}get snippetProps(){return d(a(this,B))}set snippetProps(e){w(a(this,B),e)}get props(){return d(a(this,G))}set props(e){w(a(this,G),e)}};E=new WeakMap,I=new WeakMap,z=new WeakMap,M=new WeakSet,te=function(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current},B=new WeakMap,G=new WeakMap;let ee=ie;var H,O,j;const ne=class ne{constructor(e){A(this,"root");g(this,H,p(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current));g(this,O,p(()=>!!this.root.trueName));g(this,j,p(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current})));this.root=e}static create(){return new ne(fe.get())}get trueChecked(){return d(a(this,H))}set trueChecked(e){w(a(this,H),e)}get shouldRender(){return d(a(this,O))}set shouldRender(e){w(a(this,O),e)}get props(){return d(a(this,j))}set props(e){w(a(this,j),e)}};H=new WeakMap,O=new WeakMap,j=new WeakMap;let re=ne;function Be(t,e){return e?"indeterminate":t?"checked":"unchecked"}var Ge=T("<input/>"),He=T("<input/>");function Oe(t,e){D(e,!0);let r=l(e,"value",15),s=V(e,["$$slots","$$events","$$legacy","value"]);const i=p(()=>le(s,{"aria-hidden":"true",tabindex:-1,style:Ne}));var h=R(),o=C(h);{var b=v=>{var u=Ge();ce(u),Z(u,()=>({...d(i),value:r()})),f(v,u)},m=v=>{var u=He();ce(u),Z(u,()=>({...d(i)})),Ie(u,r),f(v,u)};S(o,v=>{d(i).type==="checkbox"?v(b):v(m,!1)})}f(t,h),N()}function je(t,e){D(e,!1);const r=re.create();Ee();var s=R(),i=C(s);{var h=o=>{Oe(o,U(()=>r.props))};S(i,o=>{r.shouldRender&&o(h)})}f(t,s),N()}var Te=T("<button><!></button>"),Ve=T("<!> <!>",1);function Fe(t,e){const r=ge();D(e,!0);let s=l(e,"checked",15,!1),i=l(e,"ref",15,null),h=l(e,"disabled",3,!1),o=l(e,"required",3,!1),b=l(e,"name",3,void 0),m=l(e,"value",3,"on"),v=l(e,"id",19,()=>Ae(r)),u=l(e,"indeterminate",15,!1),k=l(e,"type",3,"button"),y=V(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type"]);const q=Me.getOr(null);q&&m()&&(q.opts.value.current.includes(m())?s(!0):s(!1)),$.pre(()=>m(),()=>{q&&m()&&(q.opts.value.current.includes(m())?s(!0):s(!1))});const P=ee.create({checked:_.with(()=>s(),c=>{var n;s(c),(n=e.onCheckedChange)==null||n.call(e,c)}),disabled:_.with(()=>h()??!1),required:_.with(()=>o()),name:_.with(()=>b()),value:_.with(()=>m()),id:_.with(()=>v()),ref:_.with(()=>i(),c=>i(c)),indeterminate:_.with(()=>u(),c=>{var n;u(c),(n=e.onIndeterminateChange)==null||n.call(e,c)}),type:_.with(()=>k())},q),F=p(()=>le({...y},P.props));var J=Ve(),K=C(J);{var x=c=>{var n=R(),X=C(n);{let me=p(()=>({props:d(F),...P.snippetProps}));Q(X,()=>e.child,()=>d(me))}f(c,n)},L=c=>{var n=Te();Z(n,()=>({...d(F)}));var X=ue(n);Q(X,()=>e.children??se,()=>P.snippetProps),de(n),f(c,n)};S(K,c=>{e.child?c(x):c(L,!1)})}var W=be(K,2);je(W,{}),f(t,J),N()}function Je(t,e){D(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M20 6 9 17l-5-5"}]];pe(t,U({name:"check"},()=>r,{get iconNode(){return s},children:(i,h)=>{var o=R(),b=C(o);Q(b,()=>e.children??se),f(i,o)},$$slots:{default:!0}})),N()}function Ke(t,e){D(e,!0);/**
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
 */let r=V(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];pe(t,U({name:"minus"},()=>r,{get iconNode(){return s},children:(i,h)=>{var o=R(),b=C(o);Q(b,()=>e.children??se),f(i,o)},$$slots:{default:!0}})),N()}var Le=T('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function ct(t,e){D(e,!0);let r=l(e,"ref",15,null),s=l(e,"checked",15,!1),i=l(e,"indeterminate",15,!1),h=V(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var o=R(),b=C(o);{const m=(u,k)=>{let y=()=>k==null?void 0:k().checked,q=()=>k==null?void 0:k().indeterminate;var P=Le(),F=ue(P);{var J=x=>{Je(x,{class:"size-3.5"})},K=x=>{var L=R(),W=C(L);{var c=n=>{Ke(n,{class:"size-3.5"})};S(W,n=>{q()&&n(c)},!0)}f(x,L)};S(F,x=>{y()?x(J):x(K,!1)})}de(P),f(u,P)};let v=p(()=>_e("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));ye(b,()=>Fe,(u,k)=>{k(u,U({"data-slot":"checkbox",get class(){return d(v)}},()=>h,{get ref(){return r()},set ref(y){r(y)},get checked(){return s()},set checked(y){s(y)},get indeterminate(){return i()},set indeterminate(y){i(y)},children:m,$$slots:{default:!0}}))})}f(t,o),N()}export{ct as C,Oe as H,Je as a};
