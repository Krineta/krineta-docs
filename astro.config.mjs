// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'FXTELEKOM Docs',
		  defaultLocale: 'root',
          favicon: '/assets/favicon.ico',
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
              src: './public/assets/favicon.jpg',
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
             { icon: 'github', label: 'GitHub', href: 'https://github.com/fxtelekom' },
             { icon: 'discord', label: 'Discord', href: 'https://discord.gg/n2WmGaEn3H' },
           ],
          locales: {
              root: {
                  label: 'English',
                  lang: 'en',
              },
              hu: {
                  label: 'Magyar',
                  lang: 'hu',
              },
        },
		  sidebar: [
			  {
				  label: "Login Flow",
				  translations: {
					"hu": "Bejelentkezési Folyamat",
					},
					items: [
						{ slug: "login-flow/register" },
						{ slug: "login-flow/login" },
					],
			  },
			  {
				  label: 'Managing Subscriptions',
				  translations: {
					"hu": "Előfizetés Kezelése",
					},
					items: [
						"subscription/funds",
						"subscription/plans",
						"subscription/subscription",
						"subscription/cancel",
						"subscription/track",

					],
			  },
			  {
				  label: 'Using Configurations',
				  translations: {
					"hu": "Konfiguráció Használata",
					},
					items: [
						"config/create",
						"config/custom-ip",
						"config/testing",
						{
							label: "Using WireGuard",
				  		    translations: {
							  "hu": "WireGuard Használata",
							  },
								items: [
									"config/wg-install",
									"config/wg-use",
								],
						},
					],
			  },
		  ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
