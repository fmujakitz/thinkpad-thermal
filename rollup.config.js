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
  paths: {
    'gi://Adw': ['@girs/adw-1'],
    'gi://Clutter': ['@girs/clutter-15'],
    'gi://Gio': ['@girs/gio-2.0'],
    'gi://GLib': ['@girs/glib-2.0'],
    'gi://GObject': ['@girs/gobject-2.0'],
    'gi://Gtk': ['@girs/gtk-4.0'],
    'gi://Pango': ['@girs/pango-1.0'],
    'gi://St': ['@girs/st-15'],
    'resource:///org/gnome/shell/*': [
      './node_modules/@girs/gnome-shell/dist/*',
    ],
  },
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
