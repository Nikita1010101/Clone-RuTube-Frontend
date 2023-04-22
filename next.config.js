/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
	},
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	images: {
		domains: ['localhost', 'yt3.ggpht.com/']
	}
}

module.exports = nextConfig