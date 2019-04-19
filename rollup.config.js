import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/typeditor.js',
    format: 'umd',
    name: 'typeditor'
  },
  plugins: [
    typescript(),
    babel({
      babelrc: false,
      presets: [['@babel/preset-env']],
    })
  ]
}