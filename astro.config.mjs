// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
	site: 'https://aicodingskills.dev',
	integrations: [
		starlight({
			plugins: [starlightThemeNext()],
			title: 'AI Coding Skills',
			description:
				'Community-maintained skills, plugins, agents, prompts, and examples for AI coding tools.',
			favicon: '/favicon.svg',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/AI-Coding-Skills',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/AI-Coding-Skills/website/edit/main/',
			},
			lastUpdated: true,
			components: {
				SocialIcons: './src/components/SiteNav.astro',
				Hero: './src/components/Hero.astro',
				Footer: './src/components/Footer.astro',
				Header: './src/components/Header.astro',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary',
					},
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Getting Started', slug: 'getting-started' },
					],
				},
				{
					label: 'Platforms',
					items: [
						{ label: 'Overview', slug: 'platforms/overview' },
						{ label: 'GitHub Copilot', slug: 'platforms/github-copilot' },
						{ label: 'Grok', slug: 'platforms/grok' },
						{ label: 'Claude Code', slug: 'platforms/claude-code' },
					],
				},
				{
					label: 'Grok Bot Templates',
					items: [
						{ label: 'Templates Overview', slug: 'platforms/grok/templates' },
						{
							label: 'Helidon Engineer',
							slug: 'platforms/grok/templates/helidon-engineer',
							badge: { text: 'Available', variant: 'success' },
						},
					],
				},
				{
					label: 'Languages',
					items: [{ label: 'Languages Overview', slug: 'languages/overview' }],
				},
				{
					label: 'Java',
					items: [{ label: 'Java Overview', slug: 'languages/java' }],
				},
				{
					label: 'Java Frameworks',
					items: [
						{ label: 'Frameworks Overview', slug: 'languages/java/frameworks' },
						{ label: 'Spring Boot', slug: 'languages/java/frameworks/spring-boot' },
						{ label: 'Helidon', slug: 'languages/java/frameworks/helidon' },
						{ label: 'Jetty', slug: 'languages/java/frameworks/jetty' },
					],
				},
				{
					label: 'Java Skills',
					items: [
						{ label: 'Skills Overview', slug: 'languages/java/skills' },
						{
							label: 'Spring Boot Bootstrap',
							slug: 'languages/java/skills/springboot-bootstrap',
							badge: { text: 'Available', variant: 'success' },
						},
						{
							label: 'Helidon Bootstrap',
							slug: 'languages/java/skills/helidon-bootstrap',
							badge: { text: 'In Progress', variant: 'caution' },
						},
						{
							label: 'Jetty Bootstrap',
							slug: 'languages/java/skills/jetty-bootstrap',
							badge: { text: 'Planned', variant: 'note' },
						},
					],
				},
				{
					label: 'Java Examples',
					items: [
						{ label: 'Examples Overview', slug: 'languages/java/examples' },
						{
							label: 'Spring Boot REST API',
							slug: 'languages/java/examples/spring-boot-rest-api',
						},
						{
							label: 'Helidon SE Service',
							slug: 'languages/java/examples/helidon-se-service',
						},
						{
							label: 'Embedded Jetty',
							slug: 'languages/java/examples/embedded-jetty',
						},
					],
				},
				{
					label: 'Java Guides',
					items: [
						{ label: 'Guides Overview', slug: 'languages/java/guides' },
						{ label: 'Testing', slug: 'languages/java/guides/testing' },
						{ label: 'Security', slug: 'languages/java/guides/security' },
						{ label: 'Modernization', slug: 'languages/java/guides/modernization' },
						{ label: 'Compatibility', slug: 'languages/java/compatibility' },
					],
				},
				{
					label: 'Project',
					items: [
						{ label: 'Contributing', slug: 'contributing' },
						{ label: 'Roadmap', slug: 'roadmap' },
						{ label: 'About', slug: 'about' },
					],
				},
			],
		}),
	],
});
