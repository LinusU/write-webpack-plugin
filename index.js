'use strict'

function WriteFilesWebpackPlugin (files) {
  function apply (compiler) {
    compiler.plugin('emit', (compilation, cb) => {
      for (const file of files) {
        compilation.assets[file.name] = {
          size () { return file.data.byteLength },
          source () { return file.data }
        }
      }

      cb()
    })
  }

  return { apply }
}

module.exports = WriteFilesWebpackPlugin
