module.exports = {
    env : {
        browser : true,
        es2021 : true,
    },
    extends : [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser : '@typescript-eslint/parser',
    parserOptions : {
        ecmaFeatures : {
            jsx : true,
        },
        ecmaVersion : 'latest',
        sourceType : 'module',
    },
    plugins : [
        'react',
        '@typescript-eslint',
        'json-format',
    ],
    rules : {
        semi : [ 'error', 'always' ],
        indent : [ 'error', 4 ],
        quotes : [ 'error', 'single' ],
        'object-curly-spacing' : [ 'error', 'always' ],
        'array-bracket-spacing' : [ 'error', 'always' ],
        'key-spacing' : [ 'error', { beforeColon : true } ],
        'jsx-quotes' : [ 'error', 'prefer-single' ],
        'react/jsx-filename-extension' : [ 1, { extensions : [ '.js', '.jsx', '.ts', '.tsx' ] } ],
        'react/react-in-jsx-scope' : 'off',
        'react/jsx-indent' : 'off',
        'import/prefer-default-export' : 'off',
        'import/no-unresolved' : 'off',
        'import/extensions' : 'off',
        'react/require-default-props' : 'off',
        'react/jsx-props-no-spreading' : 'off',
        'react/jsx-indent-props' : 'off',
        'padded-blocks' : 'off',
    },
    settings : {
        'json/sort-package-json' : 'standard',
        'json/ignore-files' : [ '**/package-lock.json' ],
        'json/json-with-comments-files' : [ '**/tsconfig.json', '.vscode/**' ],
    },
};
