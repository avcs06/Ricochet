import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const extensions = ['.js', '.ts']
export default {
    input: {
        action: 'src/action.ts',
        condition: 'src/condition.ts',
        reducer: 'src/reducer.ts',
        store: 'src/store.ts',
        epic: 'src/epic.ts'
    },

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: ['memoizee', 'invariant'],

    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] })
    ],

    output: [{
        dir: 'lib',
        format: 'cjs',
        exports: 'named'
    }, {
        dir: 'es',
        format: 'es',
        exports: 'named'
    }]
}
