'use strict'

function WriteWebpackPlugin (files) {
  function emitHook (compilation, cb) {
    for (const file of files) {
      compilation.assets[file.name] = {
        size () { return file.data.byteLength },
        source () { return file.data }
      }
    }

    cb()
  }

  function apply (compiler) {
    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync('WriteWebpackPlugin', emitHook)
    } else {
      compiler.plugin('emit', emitHook)
    }
  }

  return { apply }
}

module.exports = WriteWebpackPlugin
