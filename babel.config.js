module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@Entities': './src/Entities',
        '@Repositories': './src/Repositories',
        '@Routes': './src/Routes',
        '@UseCases': './src/UseCases',
        '@Providers': './src/Providers',
        '@Schema': './src/Schema',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
