"use strict"
const defaults = {inlineMap:true, bare:true}
module.exports = {
  getCacheKeyData: function(source, filename, options, meta) {
    const fs = require('fs')
    const path = require('path')
    const pkgJsonData = fs.readFileSync(path.join(meta.path, 'package.json'))
    const fn = (r, p)=> r + '\n' + fs.readFileSync(path.join(meta.path, p))
    const cacheKeyData = (options.cacheKeyFiles || []).reduce(fn, '')
    return cacheKeyData + '\nv:' + pkgJsonData.version
  },
  transpile: function(source, filename, options, meta) {
    console.warn("Compiling", filename);
    const path = require('path')
    const coffee = require('coffeescript')
    const opts = Object.assign(defaults, options.coffee, {
      sourceRoot: path.dirname(filename),
      filename: filename
    })
    return { code: coffee.compile(source, opts) }
  }
}
