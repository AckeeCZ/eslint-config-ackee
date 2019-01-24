module.exports = {
    env: {
        node: true,
    },
    extends: ['./index.js'],
    rules: {
        /**
         * REASON: Some 3rd party libraries use dangles for functions names.
         */
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',

        /**
         * REASON: In case of using custom NODE_PATH (common case for backend) linter doesn't recognize
         *  the path and complains about unresolved paths.
         */
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
    },
};
