import{w,a as f,p as s}from"./chunk-JMJ3UQ3L-DLa4wvEN.js";import{B as a}from"./button-D7tyPeF-.js";import{C as o,a as n,b as c,c as m}from"./card-BpPdZkTd.js";import{e as u,Z as j,_ as d,w as v}from"./index-Dr94eIYd.js";import{t as $}from"./index-Bqq4DHLr.js";import"./index-CPvIzByb.js";import"./bundle-mjs-BNe0Xlio.js";import"./utils-BB8OEnXs.js";import"./index-vAMRNKaC.js";function p(i){let e=i;return e=e.replace(/^### (.*$)/gim,"<h3>$1</h3>"),e=e.replace(/^## (.*$)/gim,"<h2>$1</h2>"),e=e.replace(/^# (.*$)/gim,"<h1>$1</h1>"),e=e.replace(/\*\*(.*?)\*\*/gim,"<strong>$1</strong>"),e=e.replace(/__(.*?)__/gim,"<strong>$1</strong>"),e=e.replace(/\*(.*?)\*/gim,"<em>$1</em>"),e=e.replace(/_(.*?)_/gim,"<em>$1</em>"),e=e.replace(/```([\s\S]*?)```/gim,"<pre><code>$1</code></pre>"),e=e.replace(/`([^`]+)`/gim,"<code>$1</code>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/gim,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim,'<img src="$2" alt="$1" />'),e=e.replace(/^\* (.*$)/gim,"<li>$1</li>"),e=e.replace(/^- (.*$)/gim,"<li>$1</li>"),e=e.replace(/^\+ (.*$)/gim,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>)/s,"<ul>$1</ul>"),e=e.replace(/^\d+\. (.*$)/gim,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>)/s,"<ol>$1</ol>"),e=e.replace(/\n\n/gim,"</p><p>"),e=e.replace(/\n/gim,"<br />"),e.startsWith("<")||(e="<p>"+e+"</p>"),e}const x=`# Markdown Preview

This is a **markdown preview** tool. You can write markdown and see it rendered in real-time.

## Features

- Real-time preview
- Support for common markdown syntax
- Easy to use

### Code Example

Here's some \`inline code\` and a code block:

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

### Links and Images

[Visit Example](https://example.com)

### Lists

1. First item
2. Second item
3. Third item

**Bold text** and *italic text* are supported.`,S=w(function(){const[e,r]=f.useState(x),t=l=>{navigator.clipboard.writeText(l),$.success("Copied to clipboard")},h=()=>{r("")},g=()=>{r(x)};return s.jsxs("div",{className:"container mx-auto p-6 max-w-[1600px] h-[calc(100vh-4rem)] flex flex-col space-y-6",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-3xl font-bold tracking-tight mb-2",children:"Markdown Preview"}),s.jsx("p",{className:"text-muted-foreground text-lg",children:"Write markdown and see it rendered in real-time."})]}),s.jsxs("div",{className:"flex-1 grid lg:grid-cols-2 gap-6 min-h-0 pb-6",children:[s.jsxs(o,{className:"flex flex-col min-h-0 shadow-md",children:[s.jsxs(n,{className:"flex flex-row items-center justify-between py-3 px-4 border-b space-y-0",children:[s.jsxs(c,{className:"text-base font-medium flex items-center gap-2",children:[s.jsx(u,{className:"w-4 h-4"}),"Markdown"]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(a,{variant:"ghost",size:"sm",onClick:g,className:"h-8 px-2 text-xs",children:"Load Sample"}),s.jsxs(a,{variant:"ghost",size:"sm",onClick:h,className:"h-8 px-2 text-xs",children:[s.jsx(j,{className:"h-3.5 w-3.5 mr-1"}),"Clear"]}),s.jsxs(a,{variant:"outline",size:"sm",onClick:()=>t(e),className:"h-8 px-2 text-xs",children:[s.jsx(d,{className:"mr-2 h-3.5 w-3.5"})," Copy MD"]})]})]}),s.jsx(m,{className:"flex-1 p-0 relative",children:s.jsx("textarea",{className:"absolute inset-0 w-full h-full p-4 bg-transparent font-mono text-sm resize-none focus:outline-none focus:ring-0",value:e,onChange:l=>r(l.target.value),placeholder:"Enter markdown here..."})})]}),s.jsxs(o,{className:"flex flex-col min-h-0 shadow-md",children:[s.jsxs(n,{className:"flex flex-row items-center justify-between py-3 px-4 border-b space-y-0",children:[s.jsxs(c,{className:"text-base font-medium flex items-center gap-2",children:[s.jsx(v,{className:"w-4 h-4"}),"Preview"]}),s.jsxs(a,{variant:"outline",size:"sm",onClick:()=>t(p(e)),className:"h-8 px-2 text-xs",children:[s.jsx(d,{className:"mr-2 h-3.5 w-3.5"})," Copy HTML"]})]}),s.jsx(m,{className:"flex-1 p-0 relative bg-white dark:bg-zinc-950 overflow-hidden rounded-b-lg",children:s.jsx("div",{className:"absolute inset-0 w-full h-full overflow-auto p-6 prose prose-sm dark:prose-invert max-w-none",children:s.jsx("div",{dangerouslySetInnerHTML:{__html:p(e)}})})})]})]})]})});export{S as default};
