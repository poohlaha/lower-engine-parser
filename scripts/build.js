/**
 * @fileOverview build
 * @date 2023-03-14
 * @author poohlaha
 */
'use strict'
const fs= require('fs-extra')
const path = require('path')
const less = require('less')

const srcDir = path.resolve(__dirname, '../src')
const outDir = path.resolve(__dirname, '../dist')

async function compileLess(filePath) {
  const content = await fs.readFile(filePath, 'utf-8')

  const output = await less.render(content, { filename: filePath })

  const cssPath = filePath
      // .replace(srcDir, path.join(outDir, 'src'))
      .replace(/\.less$/, '.css')

  await fs.ensureDir(path.dirname(cssPath))
  await fs.writeFile(cssPath, output.css)
}

async function walk(dir) {
  await fs.ensureDir(outDir)
  const files = await fs.readdir(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = await fs.stat(fullPath)

    if (stat.isDirectory()) {
      await walk(fullPath)
    } else if (file.endsWith('.less')) {
      await compileLess(fullPath)
    }
  }
}

walk(srcDir)