export default {
    entry: ['index.tsx', 'lib/**/*.tsx'],
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    sourcemap: false,
    clean: false,
    external: ['react', 'react-dom'],
    // minify: true,
    // loader: { '.css': 'css' }
}