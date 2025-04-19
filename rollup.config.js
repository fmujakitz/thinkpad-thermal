import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'

const dest = 'dist'

const external = (id) =>
  ['gettext', 'system', 'cairo'].includes(id) ||
  ['gi://', 'resource://'].some((p) => id.startsWith(p))

const tsconfig = {
  tsconfig: 'tsconfig.json',
  rootDir: 'src',
  baseUrl: '.',
}

const toDest = (src) => ({ src, dest })

export default [
  {
    input: 'src/extension.ts',
    output: {
      file: `${dest}/extension.js`,
      format: 'esm',
    },
    external,
    plugins: [
      typescript(tsconfig),
      copy({
        targets: [
          './resources/icons',
          './resources/metadata.json',
          './resources/stylesheet.css',
        ].map(toDest),
      }),
    ],
  },
  {
    input: 'src/prefs.ts',
    output: {
      file: `${dest}/prefs.js`,
      format: 'esm',
    },
    external,
    plugins: [
      typescript(tsconfig),
      copy({
        targets: [
          './resources/schemas', //
          './resources/prefs.xml',
          './resources/preview.png',
        ].map(toDest),
      }),
    ],
  },
]
