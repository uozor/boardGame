import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'boardgame',
  globalStyle: 'src/app.css',
  plugins: [
    postcss({
      plugins: [tailwind(), autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
