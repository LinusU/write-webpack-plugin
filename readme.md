# Write Webpack Plugin

Writes individual files to the build directory.

## Installation

```sh
npm install --save-dev write-webpack-plugin
```

## Usage

```js
const WriteWebpackPlugin = require('write-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new WriteWebpackPlugin([
      { name: 'hello.txt', data: Buffer.from('Hello, World!') },
      { name: 'icon.svg', data: Buffer.from('<?xml ...') }
    ])
  ]
}
```

This will output two files: `hello.txt`, and `icon.svg`.

## API

### File Properties

| Name | Type | Required | Details |
| ---- | ---- | :------: | ------- |
| `name` | `string` | Y | The name of the file to be written. |
| `data` | `Buffer` | Y | The content to be written into the file. |
