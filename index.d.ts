interface File {
  name: string
  data: Buffer
}

declare class WriteFilesWebpackPlugin {
  constructor (files: File[])
}

export = WriteFilesWebpackPlugin
