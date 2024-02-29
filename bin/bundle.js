const {build} = await import('esbuild')
await build({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  format: 'esm',
  inject: ['./bin/cjs-shims.js'],
  loader: {'.node': 'copy'},
  outfile: './bin/run.mjs',
  platform: 'node',
  plugins: [],
  splitting: false,
  treeShaking: true,
})
