// Valida enlaces internos de las páginas Markdown del sitio.
// No consulta la red: solo comprueba que las rutas internas ([texto](/ruta))
// correspondan a un archivo .md existente bajo docs/. Ignora anclas y URLs externas.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'

const DOCS = resolve('docs')
const files = []
;(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    if (statSync(p).isDirectory()) { if (!p.includes('.vitepress')) walk(p) }
    else if (p.endsWith('.md')) files.push(p)
  }
})(DOCS)

const linkRe = /\[[^\]]*\]\(([^)]+)\)/g
let broken = 0, checked = 0
for (const f of files) {
  const txt = readFileSync(f, 'utf8')
  let m
  while ((m = linkRe.exec(txt))) {
    let target = m[1].trim()
    if (/^(https?:|mailto:|#)/.test(target)) continue           // externos/anclas
    target = target.split('#')[0].split('?')[0]
    if (!target) continue
    checked++
    // Resolver ruta interna (cleanUrls): /a/b  -> docs/a/b.md o docs/a/b/index.md
    let base = target.startsWith('/') ? join(DOCS, target) : resolve(dirname(f), target)
    const cands = [base, base + '.md', join(base, 'index.md'),
                   base.replace(/\/$/, '') + '.md', join(base, 'index.md')]
    if (!cands.some(c => existsSync(c))) {
      console.error(`ROTO  ${f.replace(DOCS, 'docs')}  ->  ${m[1]}`)
      broken++
    }
  }
}
console.log(`Enlaces internos revisados: ${checked}. Rotos: ${broken}.`)
process.exit(broken ? 1 : 0)
