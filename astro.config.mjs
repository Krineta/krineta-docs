// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Krineta Docs',
          favicon: './src/assets/favicon.ico',
          expressiveCode: {
              themes: ['ayu-dark'],
              },
          head: [
              {
              tag: 'script',
              attrs: {
                  src: 'https://a.fxtelekom.hu/script.js',
                  'data-website-id': '0c95ea3c-6388-460f-a15a-7269b9b0f285',
                  defer: true,
                },
              },
            ],
          logo: {
              src: './src/assets/favicon.jpg',
              replacesTitle: true,
          },
          customCss: [
            './src/styles/global.css',
              ],
          components: {
              ThemeSelect: './src/components/ThemeComponent.astro',
              ThemeProvider: './src/components/ThemeProvider.astro',
              },
          social: [
             { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
             { icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
           ],
          locales: {
              root: {
                  label: 'Magyar',
                  lang: 'hu',
              },
              },
          sidebar: [
              {
                  label: 'Krineta VPN',
                  items: [
                      'vpn/info',
                      'vpn/dtag',
                      'vpn/services',
                      {
                          label: 'Első lépések',
                          items: [
                              'vpn/first-steps/config',
                              'vpn/first-steps/install',
                              'vpn/first-steps/setup',
                          ],
                      },
                      'vpn/router',
                      'vpn/troubleshoting',
                      'vpn/support',
                  ],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
