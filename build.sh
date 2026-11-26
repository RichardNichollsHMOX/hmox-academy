#!/usr/bin/env bash
# Inline content.js into app.html -> dist/hmox-academy.html (the file that gets published).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
node -e '
const fs=require("fs");
const app=fs.readFileSync("app.html","utf8"), content=fs.readFileSync("content.js","utf8")+"\n"+fs.readFileSync("glossary.js","utf8");
if(!app.includes("/*CONTENT*/")) throw new Error("placeholder missing");
const safe=content.replace(/<\/script/gi,"<\\/script");
fs.writeFileSync("dist/hmox-academy.html", app.replace("/*CONTENT*/", ()=>safe));
// sanity: content parses and every answer index is valid
global.window={}; eval(content); const C=window.HMOX_COURSE; let q=0;
for(const m of C.modules){ for(const x of m.questions){ q++; if(!(x.a>=0&&x.a<x.o.length)) throw new Error(m.id+": bad answer index"); } }
console.log(C.modules.length+" modules, "+q+" questions -> dist/hmox-academy.html");
'
