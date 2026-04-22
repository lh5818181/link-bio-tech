#!/usr/bin/env node
/**
 * create-component.js
 * Uso: node scripts/create-component.js <tipo> <NomeComponente>
 *
 * Tipos: atom | molecule | organism | page
 *
 * Exemplos:
 *   node scripts/create-component.js atom Button
 *   node scripts/create-component.js molecule ContactCard
 *   node scripts/create-component.js organism Navbar
 */

import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')

const TYPE_MAP = {
  atom:      'atoms',
  molecule:  'molecules',
  organism:  'organisms',
  page:      'pages',
}

const [,, type, name] = process.argv

if (!type || !name) {
  console.error('\n❌  Uso: node scripts/create-component.js <tipo> <Nome>\n')
  console.error('   Tipos disponíveis: atom | molecule | organism | page\n')
  process.exit(1)
}

const folder = TYPE_MAP[type]
if (!folder) {
  console.error(`\n❌  Tipo inválido: "${type}". Use atom | molecule | organism | page\n`)
  process.exit(1)
}

// Capitaliza o nome
const componentName = name.charAt(0).toUpperCase() + name.slice(1)
const dir = join(ROOT, 'src', folder, componentName)

if (existsSync(dir)) {
  console.error(`\n⚠️   Componente já existe: ${dir}\n`)
  process.exit(1)
}

mkdirSync(dir, { recursive: true })

// ─── JSX template ───────────────────────────────────────────────
const jsxContent = `import { motion } from 'framer-motion'
import styles from './${componentName}.module.css'

export default function ${componentName}() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className={styles.text}>${componentName}</p>
    </motion.div>
  )
}
`

// ─── CSS Module template ─────────────────────────────────────────
const cssContent = `.wrapper {
  /* ${componentName} styles */
}

.text {
  font-family: var(--font-body);
  color: var(--color-text);
}
`

// ─── Index barrel ────────────────────────────────────────────────
const indexContent = `export { default } from './${componentName}'
`

writeFileSync(join(dir, `${componentName}.jsx`), jsxContent)
writeFileSync(join(dir, `${componentName}.module.css`), cssContent)
writeFileSync(join(dir, 'index.js'), indexContent)

console.log(`\n✅  Componente criado com sucesso!\n`)
console.log(`   📁  src/${folder}/${componentName}/`)
console.log(`   ├── ${componentName}.jsx`)
console.log(`   ├── ${componentName}.module.css`)
console.log(`   └── index.js\n`)
console.log(`   Importe com:`)
console.log(`   import ${componentName} from '@/${folder}/${componentName}'\n`)
