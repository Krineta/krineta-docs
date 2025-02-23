// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Krineta Docs',
			favicon: './src/assets/krineta.jpg',
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
				src: './src/assets/krineta.jpg',
				replacesTitle: true,
			},
		    customCss: [
			  './src/styles/custom.css',
				],
			components: {
				ThemeSelect: './src/components/ThemeComponent.astro',
				},
			social: {
				github: 'https://github.com/krineta',
				discord: 'https://discord.gg/n2WmGaEn3H',
			},
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
});
