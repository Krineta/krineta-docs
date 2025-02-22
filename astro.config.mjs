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
