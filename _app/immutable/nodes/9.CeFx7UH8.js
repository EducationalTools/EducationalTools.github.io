import"../chunks/disclose-version.Bg9kRutz.js";import{p as f,t as g,a as d,g as e,b as v,J as h,c as x,s as u,r as _,C as s}from"../chunks/utils.gTppMu0b.js";import{s as w}from"../chunks/render.CBpWV39D.js";import{a as $,t as b}from"../chunks/store.XRXVcwW0.js";import{a as C}from"../chunks/props.D3Xfy8MV.js";import{T}from"../chunks/alert.36S949e_.js";var y=b('<div class="flex h-full flex-col gap-3 p-3"> <!></div>');function q(o,p){f(p,!0);let t=h("");const l=s(()=>e(t).trim().split(/\s+/).filter(Boolean).length),n=s(()=>e(t).length),c=s(()=>e(t).replace(/\s/g,"").length);var a=y(),r=x(a),i=u(r);T(i,{class:"flex-grow resize-none",get value(){return e(t)},set value(m){v(t,C(m))}}),_(a),g(()=>w(r,`${e(l)??""} words, ${e(c)??""} characters (${e(n)??""} including spaces) `)),$(o,a),d()}export{q as component};