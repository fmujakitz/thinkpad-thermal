import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import styles from 'rollup-plugin-styles';
import { visualizer } from 'rollup-plugin-visualizer';

const buildPath = 'dist'

export default [
  {
    input: 'src/extension.ts',
    treeshake: {
      moduleSideEffects: 'no-external',
    },
    output: {
      file: `${buildPath}/extension.js`,
      format: 'es',
      exports: 'default',
      globals: {},
      assetFileNames: '[name][extname]',
      interop: 'esModule'
    },
    external: [
      'gi://Clutter',
      'gi://Gio',
      'gi://GLib',
      'gi://GObject',
      'gi://St',
      'resource:///org/gnome/shell/ui/panelMenu.js',
      'resource:///org/gnome/shell/ui/popupMenu.js',
      'resource:///org/gnome/shell/ui/main.js',
      'resource:///org/gnome/shell/extensions/extension.js'
    ],
    plugins: [
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      // styles({
      //   mode: ['extract', 'stylesheet.css'],
      // }),
      copy({
        targets: [
          { src: './resources/icons', dest: `${buildPath}` },
          { src: './resources/metadata.json', dest: `${buildPath}` },
          { src: './resources/stylesheet.css', dest: `${buildPath}` },
          // { src: './resources/images', dest: `${buildPath}` },
          // { src: './resources/schemas', dest: `${buildPath}` },
          // { src: './resources/dbus', dest: `${buildPath}` },
        ],
      }),
      cleanup({
        comments: 'none',
      }),
      visualizer(),
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
