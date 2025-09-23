var ge=Object.defineProperty;var oe=t=>{throw TypeError(t)};var be=(t,e,r)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var S=(t,e,r)=>be(t,typeof e!="symbol"?e+"":e,r),ce=(t,e,r)=>e.has(t)||oe("Cannot "+r);var d=(t,e,r)=>(ce(t,e,"read from private field"),r?r.call(t):e.get(t)),v=(t,e,r)=>e.has(t)?oe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);var Z=(t,e,r)=>(ce(t,e,"access private method"),r);import"./Bzak7iHL.js";import{a1 as ve,b6 as _e,b7 as ye,u as k,j as f,e as x,p as D,h as R,i as C,a as g,b as N,f as J,aB as we,s as xe,c as de,k as ie,r as he}from"./90-DEOan.js";import{i as A}from"./DFZ8ND2l.js";import{c as Ce}from"./DP98yRtV.js";import{p,r as T,s as W}from"./oLVG0urQ.js";import{c as qe}from"./VuwYJ7Xx.js";import{s as U}from"./BWBAqHgS.js";import{r as ue,a as $}from"./1EXD_2pQ.js";import{C as le,a as Pe,w as ee,E as Re,S as De,f as Ne,h as Se,i as Ae,c as Me,m as fe,s as Ee,e as Ie,b as y}from"./6DZed5ME.js";import"./d94VkTDF.js";import{i as Oe}from"./BGsu3kZl.js";import{a as ze}from"./BNd1yWH0.js";import{I as pe}from"./Bbi6BgCi.js";const Be=[];function je(t,e=!1,r=!1){return Q(t,new Map,"",Be,null,r)}function Q(t,e,r,s,i=null,c=!1){if(typeof t=="object"&&t!==null){var n=e.get(t);if(n!==void 0)return n;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ve(t)){var a=Array(t.length);e.set(t,a),i!==null&&e.set(i,a);for(var h=0;h<t.length;h+=1){var m=t[h];h in t&&(a[h]=Q(m,e,r,s,null,c))}return a}if(_e(t)===ye){a={},e.set(t,a),i!==null&&e.set(i,a);for(var o in t)a[o]=Q(t[o],e,r,s,null,c);return a}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!c)return Q(t.toJSON(),e,r,s,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const Ge=Me({component:"checkbox",parts:["root","group","group-label","input"]}),He=new le("Checkbox.Group"),me=new le("Checkbox.Root");var M,E,I,O,re,z,B;const ne=class ne{constructor(e,r){v(this,O);S(this,"opts");S(this,"group");v(this,M,k(()=>this.group&&this.group.opts.name.current?this.group.opts.name.current:this.opts.name.current));v(this,E,k(()=>this.group&&this.group.opts.required.current?!0:this.opts.required.current));v(this,I,k(()=>this.group&&this.group.opts.disabled.current?!0:this.opts.disabled.current));S(this,"attachment");v(this,z,k(()=>({checked:this.opts.checked.current,indeterminate:this.opts.indeterminate.current})));v(this,B,k(()=>({id:this.opts.id.current,role:"checkbox",type:this.opts.type.current,disabled:this.trueDisabled,"aria-checked":Ae(this.opts.checked.current,this.opts.indeterminate.current),"aria-required":Se(this.trueRequired),"data-disabled":Ne(this.trueDisabled),"data-state":Je(this.opts.checked.current,this.opts.indeterminate.current),[Ge.root]:"",onclick:this.onclick,onkeydown:this.onkeydown,...this.attachment})));this.opts=e,this.group=r,this.attachment=Pe(this.opts.ref),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),ee.pre([()=>{var s;return je((s=this.group)==null?void 0:s.opts.value.current)},()=>this.opts.value.current],([s,i])=>{!s||!i||(this.opts.checked.current=s.includes(i))}),ee.pre(()=>this.opts.checked.current,s=>{var i,c;this.group&&(s?(i=this.group)==null||i.addValue(this.opts.value.current):(c=this.group)==null||c.removeValue(this.opts.value.current))})}static create(e,r=null){return me.set(new ne(e,r))}get trueName(){return f(d(this,M))}set trueName(e){x(d(this,M),e)}get trueRequired(){return f(d(this,E))}set trueRequired(e){x(d(this,E),e)}get trueDisabled(){return f(d(this,I))}set trueDisabled(e){x(d(this,I),e)}onkeydown(e){this.opts.disabled.current||(e.key===Re&&e.preventDefault(),e.key===De&&(e.preventDefault(),Z(this,O,re).call(this)))}onclick(e){this.opts.disabled.current||Z(this,O,re).call(this)}get snippetProps(){return f(d(this,z))}set snippetProps(e){x(d(this,z),e)}get props(){return f(d(this,B))}set props(e){x(d(this,B),e)}};M=new WeakMap,E=new WeakMap,I=new WeakMap,O=new WeakSet,re=function(){this.opts.indeterminate.current?(this.opts.indeterminate.current=!1,this.opts.checked.current=!0):this.opts.checked.current=!this.opts.checked.current},z=new WeakMap,B=new WeakMap;let te=ne;var j,G,H;const ae=class ae{constructor(e){S(this,"root");v(this,j,k(()=>this.root.group?!!(this.root.opts.value.current!==void 0&&this.root.group.opts.value.current.includes(this.root.opts.value.current)):this.root.opts.checked.current));v(this,G,k(()=>!!this.root.trueName));v(this,H,k(()=>({type:"checkbox",checked:this.root.opts.checked.current===!0,disabled:this.root.trueDisabled,required:this.root.trueRequired,name:this.root.trueName,value:this.root.opts.value.current})));this.root=e}static create(){return new ae(me.get())}get trueChecked(){return f(d(this,j))}set trueChecked(e){x(d(this,j),e)}get shouldRender(){return f(d(this,G))}set shouldRender(e){x(d(this,G),e)}get props(){return f(d(this,H))}set props(e){x(d(this,H),e)}};j=new WeakMap,G=new WeakMap,H=new WeakMap;let se=ae;function Je(t,e){return e?"indeterminate":t?"checked":"unchecked"}var Te=J("<input/>"),Ve=J("<input/>");function Fe(t,e){D(e,!0);let r=p(e,"value",15),s=T(e,["$$slots","$$events","$$legacy","value"]);const i=k(()=>fe(s,{"aria-hidden":"true",tabindex:-1,style:Ee}));var c=R(),n=C(c);{var a=m=>{var o=Te();ue(o),$(o,()=>({...f(i),value:r()})),g(m,o)},h=m=>{var o=Ve();ue(o),$(o,()=>({...f(i)})),ze(o,r),g(m,o)};A(n,m=>{f(i).type==="checkbox"?m(a):m(h,!1)})}g(t,c),N()}function Ke(t,e){D(e,!1);const r=se.create();Oe();var s=R(),i=C(s);{var c=n=>{Fe(n,W(()=>r.props))};A(i,n=>{r.shouldRender&&n(c)})}g(t,s),N()}var Le=J("<button><!></button>"),Qe=J("<!> <!>",1);function Ue(t,e){const r=we();D(e,!0);let s=p(e,"checked",15,!1),i=p(e,"ref",15,null),c=p(e,"disabled",3,!1),n=p(e,"required",3,!1),a=p(e,"name",3,void 0),h=p(e,"value",3,"on"),m=p(e,"id",19,()=>Ie(r)),o=p(e,"indeterminate",15,!1),b=p(e,"type",3,"button"),_=T(e,["$$slots","$$events","$$legacy","checked","ref","onCheckedChange","children","disabled","required","name","value","id","indeterminate","onIndeterminateChange","child","type"]);const q=He.getOr(null);q&&h()&&(q.opts.value.current.includes(h())?s(!0):s(!1)),ee.pre(()=>h(),()=>{q&&h()&&(q.opts.value.current.includes(h())?s(!0):s(!1))});const P=te.create({checked:y.with(()=>s(),l=>{var u;s(l),(u=e.onCheckedChange)==null||u.call(e,l)}),disabled:y.with(()=>c()??!1),required:y.with(()=>n()),name:y.with(()=>a()),value:y.with(()=>h()),id:y.with(()=>m()),ref:y.with(()=>i(),l=>i(l)),indeterminate:y.with(()=>o(),l=>{var u;o(l),(u=e.onIndeterminateChange)==null||u.call(e,l)}),type:y.with(()=>b())},q),V=k(()=>fe({..._},P.props));var F=Qe(),K=C(F);{var w=l=>{var u=R(),Y=C(u);{let ke=k(()=>({props:f(V),...P.snippetProps}));U(Y,()=>e.child,()=>f(ke))}g(l,u)},L=l=>{var u=Le();$(u,()=>({...f(V)}));var Y=de(u);U(Y,()=>e.children??ie,()=>P.snippetProps),he(u),g(l,u)};A(K,l=>{e.child?l(w):l(L,!1)})}var X=xe(K,2);Ke(X,{}),g(t,F),N()}function We(t,e){D(e,!0);/**
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
 */let r=T(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M20 6 9 17l-5-5"}]];pe(t,W({name:"check"},()=>r,{get iconNode(){return s},children:(i,c)=>{var n=R(),a=C(n);U(a,()=>e.children??ie),g(i,n)},$$slots:{default:!0}})),N()}function Xe(t,e){D(e,!0);/**
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
 */let r=T(e,["$$slots","$$events","$$legacy"]);const s=[["path",{d:"M5 12h14"}]];pe(t,W({name:"minus"},()=>r,{get iconNode(){return s},children:(i,c)=>{var n=R(),a=C(n);U(a,()=>e.children??ie),g(i,n)},$$slots:{default:!0}})),N()}var Ye=J('<div data-slot="checkbox-indicator" class="text-current transition-none"><!></div>');function lt(t,e){D(e,!0);let r=p(e,"ref",15,null),s=p(e,"checked",15,!1),i=p(e,"indeterminate",15,!1),c=T(e,["$$slots","$$events","$$legacy","ref","checked","indeterminate","class"]);var n=R(),a=C(n);{const h=(o,b)=>{let _=()=>b==null?void 0:b().checked,q=()=>b==null?void 0:b().indeterminate;var P=Ye(),V=de(P);{var F=w=>{We(w,{class:"size-3.5"})},K=w=>{var L=R(),X=C(L);{var l=u=>{Xe(u,{class:"size-3.5"})};A(X,u=>{q()&&u(l)},!0)}g(w,L)};A(V,w=>{_()?w(F):w(K,!1)})}he(P),g(o,P)};let m=k(()=>qe("border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e.class));Ce(a,()=>Ue,(o,b)=>{b(o,W({"data-slot":"checkbox",get class(){return f(m)}},()=>c,{get ref(){return r()},set ref(_){r(_)},get checked(){return s()},set checked(_){s(_)},get indeterminate(){return i()},set indeterminate(_){i(_)},children:h,$$slots:{default:!0}}))})}g(t,n),N()}export{lt as C,Fe as H,We as a,je as s};
