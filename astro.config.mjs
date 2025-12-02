import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import starlightImageZoomPlugin from 'starlight-image-zoom';
import inoxToolsStarWarp from '@inox-tools/star-warp';

// https://astro.build/config
export default defineConfig({
	site: 'https://thegreatoutdoors.guide/',
	prefetch: {
		prefetchAll: true,
	},
	integrations: [
		starlight({
			lastUpdated: true,
			plugins: [starlightImageZoomPlugin(), inoxToolsStarWarp()],
			title: 'The Great Outdoors',
			editLink: {
				baseUrl: 'https://github.com/tgoHQ/guide/tree/main',
			},
			logo: {
				src: './src/assets/brand/wordmark.svg',
				replacesTitle: true,
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: ['./src/tailwind.css'],
			social: {
				discord:
					'https://discord.gg/the-great-outdoors-345621611770282004',
				github: 'https://github.com/tgoHQ/guide',
			},
			components: {
				Head: './src/components/starlight/Head.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				PageTitle: './src/components/starlight/PageTitle.astro',
				Footer: './src/components/starlight/Footer.astro',
			},
			sidebar: [
				{
					label: 'Basics',
					autogenerate: {
						directory: 'basics',
					},
					badge: {
						text: 'Start Here',
						variant: 'tip',
					},
				},
				{
					label: 'Gear Selection',
					collapsed: true,
					autogenerate: {
						directory: 'gear',
					},
				},
				{
					label: 'Essential Skills',
					collapsed: true,
					autogenerate: {
						directory: 'skills',
					},
				},
				{
					label: 'Trail Logistics',
					collapsed: true,
					autogenerate: {
						directory: 'logistics',
					},
				},
				{
					label: 'Appendix',
					collapsed: true,
					autogenerate: {
						directory: 'appendix',
					},
				},
				{
					label: 'Contributing',
					collapsed: true,
					autogenerate: {
						directory: 'contribute',
					},
					badge: {
						text: 'Meta',
						variant: 'note',
					},
				},
			],
		}),

		tailwind({
			applyBaseStyles: false,
		}),
		metaTags(),
	],
});
