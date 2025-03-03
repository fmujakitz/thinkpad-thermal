import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const dest = 'dist'

const external = id =>
  ['gettext', 'system', 'cairo'].includes(id) ||
  ['gi://', 'resource://'].some(p => id.startsWith(p))

export default [
  {
    input: 'src/extension.ts',
    output: {
      file: `${dest}/extension.js`,
      format: 'esm',
    },
    external,
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        rootDir: 'src',
        baseUrl: '.',
        paths: {
          'gi://Adw':     ['@girs/adw-1'],
          'gi://Clutter': ['@girs/clutter-15'],
          'gi://Gio':     ['@girs/gio-2.0'],
          'gi://GLib':    ['@girs/glib-2.0'],
          'gi://GObject': ['@girs/gobject-2.0'],
          'gi://Gtk':     ['@girs/gtk-4.0'],
          'gi://St':      ['@girs/st-15'],
          'resource:///org/gnome/shell/*': ['./node_modules/@girs/gnome-shell/dist/*']
        }
      }),
      copy({
        targets: [
          { src: './resources/icons', dest },
          { src: './resources/metadata.json', dest },
          { src: './resources/stylesheet.css', dest },
          // { src: './resources/images', dest },
          // { src: './resources/schemas', dest },
          // { src: './resources/dbus', dest },
        ],
      })
    ],
  },
  // {
  //   input: 'src/prefs/prefs.ts',
  //   output: {
  //     file: `${buildPath}/prefs.js`,
  //     format: 'iife',
  //     exports: 'default',
  //     name: 'prefs',
  //     banner: prefsBanner,
  //     footer: prefsFooter,
  //     globals,
  //   },
  //   treeshake: {
  //     moduleSideEffects: 'no-external',
  //   },
  //   external,
  //   plugins: [
  //     commonjs(),
  //     nodeResolve({
  //       preferBuiltins: false,
  //     }),
  //     typescript({
  //       tsconfig: './tsconfig.json',
  //     }),
  //     cleanup({
  //       comments: 'none',
  //     }),
  //   ],
  // },
]
