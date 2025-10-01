import"../chunks/Bzak7iHL.js";import{p as re,u as te,f,a as t,b as oe,k as w,i as u,j as J,g as k,d,s as a,c as v,n as c,r as $}from"../chunks/d1nUEqUP.js";import{h as N}from"../chunks/DS_rCRv5.js";import{B as O}from"../chunks/CXz5jp6g.js";import{C as ae,a as le,b as se}from"../chunks/Dta-6Fq6.js";import{C as ie}from"../chunks/dMh0aWnS.js";import{C as ne}from"../chunks/Ds8a-5SN.js";import{T as R}from"../chunks/Dx3oPb3H.js";import{T as de,a as ce,b as S}from"../chunks/CUOwoMhv.js";import{T as A}from"../chunks/DBHt8MOL.js";var me=f("<!> <!>",1),pe=f("<!> <!> <!>",1),ue=f('<div class="flex min-h-0 flex-col"><h3 class="mb-2 text-sm font-medium">Markdown Input:</h3> <!></div> <div class="flex min-h-0 flex-col"><h3 class="mb-2 text-sm font-medium">Live Preview:</h3> <div class="bg-background prose prose-sm max-w-none flex-1 overflow-auto rounded-md border p-4"><!></div></div>',1),ve=f('<div class="bg-background prose prose-sm h-full max-w-none overflow-auto rounded-md border p-4"><!></div>'),$e=f('<div class="flex items-center justify-between"><!> <div class="flex gap-2"><!> <!> <!></div></div> <!> <!> <!>',1),fe=f("<!> <!>",1),he=f('<div class="flex h-full flex-col items-center justify-center gap-4 p-4"><!></div>');function Me(V,Y){re(Y,!0);let m=J(`# Markdown Preview

Welcome to the **Markdown Preview** tool!

## Features

- Live preview of your markdown
- Support for common markdown syntax
- Easy copy functionality

### Text Formatting

You can make text *italic*, **bold**, or ***both***.

### Lists

Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

### Code

Inline code: \`console.log('Hello World')\`

Code block:
\`\`\`javascript
function greet(name) {
    return \`Hello, \${name}!\`;
}
\`\`\`

### Links and Images

[Visit Google](https://google.com)

### Blockquotes

> This is a blockquote
> It can span multiple lines

### Tables

| Name | Age | City |
|------|-----|------|
| John | 25  | NYC  |
| Jane | 30  | LA   |

---

### Horizontal Rule

That's a horizontal rule above this text.
`),x=J("");function G(z){let e=z;e=e.replace(/^### (.*$)/gim,"<h3>$1</h3>"),e=e.replace(/^## (.*$)/gim,"<h2>$1</h2>"),e=e.replace(/^# (.*$)/gim,"<h1>$1</h1>"),e=e.replace(/\*\*\*(.*)\*\*\*/gim,"<strong><em>$1</em></strong>"),e=e.replace(/\*\*(.*)\*\*/gim,"<strong>$1</strong>"),e=e.replace(/\*(.*)\*/gim,"<em>$1</em>"),e=e.replace(/```(\w+)?\n([\s\S]*?)```/gim,"<pre><code>$2</code></pre>"),e=e.replace(/`([^`]+)`/gim,"<code>$1</code>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/gim,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/^---$/gim,"<hr>");const P=/^\|(.+)\|\n\|(.+)\|\n((?:\|.+\|\n?)*)/gm;return e=e.replace(P,(I,H,y,q)=>{const h=H.split("|").map(l=>`<th>${l.trim()}</th>`).join(""),g=q.trim().split(`
`).map(l=>`<tr>${l.split("|").map(s=>`<td>${s.trim()}</td>`).join("")}</tr>`).join("");return`<table class="border-collapse border border-gray-300"><thead><tr>${h}</tr></thead><tbody>${g}</tbody></table>`}),e=e.replace(/^> (.+$)/gim,"<blockquote>$1</blockquote>"),e=e.replace(/^\* (.+$)/gim,"<li>$1</li>"),e=e.replace(/^\d+\. (.+$)/gim,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>)\n(?=<li>)/gim,"$1"),e=e.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),e=e.replace(/\n/gim,"<br>"),e=e.replace(/(<br>){3,}/gim,"<br><br>"),e}function U(){w(x,G(u(m)),!0)}function D(){navigator.clipboard.writeText(u(m))}function K(){navigator.clipboard.writeText(u(x))}function Q(){w(m,""),w(x,"")}te(()=>{U()});var j=he(),X=v(j);ae(X,{class:"flex max-h-[80vh] w-full max-w-6xl flex-col",children:(z,e)=>{var P=fe(),I=k(P);le(I,{children:(y,q)=>{var h=me(),T=k(h);se(T,{children:(l,b)=>{c();var s=d("Markdown Preview");t(l,s)},$$slots:{default:!0}});var g=a(T,2);ne(g,{children:(l,b)=>{c();var s=d("Write markdown and see the live preview");t(l,s)},$$slots:{default:!0}}),t(y,h)},$$slots:{default:!0}});var H=a(I,2);ie(H,{class:"flex min-h-0 flex-1 flex-col space-y-4",children:(y,q)=>{de(y,{value:"split",class:"flex min-h-0 flex-1 flex-col",children:(h,T)=>{var g=$e(),l=k(g),b=v(l);ce(b,{children:(o,_)=>{var r=pe(),i=k(r);S(i,{value:"split",children:(n,L)=>{c();var p=d("Split View");t(n,p)},$$slots:{default:!0}});var C=a(i,2);S(C,{value:"markdown",children:(n,L)=>{c();var p=d("Markdown Only");t(n,p)},$$slots:{default:!0}});var M=a(C,2);S(M,{value:"preview",children:(n,L)=>{c();var p=d("Preview Only");t(n,p)},$$slots:{default:!0}}),t(o,r)},$$slots:{default:!0}});var s=a(b,2),B=v(s);O(B,{size:"sm",variant:"outline",onclick:D,children:(o,_)=>{c();var r=d("Copy Markdown");t(o,r)},$$slots:{default:!0}});var E=a(B,2);O(E,{size:"sm",variant:"outline",onclick:K,children:(o,_)=>{c();var r=d("Copy HTML");t(o,r)},$$slots:{default:!0}});var Z=a(E,2);O(Z,{size:"sm",variant:"outline",onclick:Q,children:(o,_)=>{c();var r=d("Clear");t(o,r)},$$slots:{default:!0}}),$(s),$(l);var F=a(l,2);A(F,{value:"split",class:"grid min-h-0 flex-1 grid-cols-2 gap-4",children:(o,_)=>{var r=ue(),i=k(r),C=a(v(i),2);R(C,{placeholder:"Enter your markdown here...",class:"flex-1 resize-none font-mono text-sm",get value(){return u(m)},set value(p){w(m,p,!0)}}),$(i);var M=a(i,2),n=a(v(M),2),L=v(n);N(L,()=>u(x)),$(n),$(M),t(o,r)},$$slots:{default:!0}});var W=a(F,2);A(W,{value:"markdown",class:"min-h-0 flex-1",children:(o,_)=>{R(o,{placeholder:"Enter your markdown here...",class:"h-full resize-none font-mono text-sm",get value(){return u(m)},set value(r){w(m,r,!0)}})},$$slots:{default:!0}});var ee=a(W,2);A(ee,{value:"preview",class:"min-h-0 flex-1",children:(o,_)=>{var r=ve(),i=v(r);N(i,()=>u(x)),$(r),t(o,r)},$$slots:{default:!0}}),t(h,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),t(z,P)},$$slots:{default:!0}}),$(j),t(V,j),oe()}export{Me as component};
