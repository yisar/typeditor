import typescript from 'rollup-plugin-typescript'
import babel from 'rollup-plugin-babel'

export default {
  input: './packages/index.ts',
  output: {
    file: './dist/smox.js',
    format: 'umd',
    name: 'typeditor'
  },
  plugins: [
    typescript(),
    babel({
      babelrc: false
    })
  ]
}