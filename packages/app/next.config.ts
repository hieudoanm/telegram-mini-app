import type { NextConfig } from 'next';

const PLATFORM = process.env.PLATFORM ?? '';
const NODE_ENV = process.env.NODE_ENV ?? 'development';
const BASE_PATH = 'telegram-mini-app';

const buildConfig: Pick<NextConfig, 'basePath' | 'output' | 'distDir'> =
	PLATFORM !== 'vercel'
		? {
				basePath: NODE_ENV === 'development' ? '' : `/${BASE_PATH}`,
				output: NODE_ENV === 'development' ? 'standalone' : 'export',
				distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
			}
		: {};

const nextConfig: NextConfig = {
	/* config options here */
	...buildConfig,
	trailingSlash: true,
	reactStrictMode: true,
	images: { unoptimized: NODE_ENV !== 'development' },
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback,
			buffer: require.resolve('buffer/'),
		};
		return config;
	},
};

export default nextConfig;
