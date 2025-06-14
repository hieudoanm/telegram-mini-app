import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const BASE_PATH = 'telegram-mini-app';

const nextConfig: NextConfig = {
	/* config options here */
	trailingSlash: true,
	reactStrictMode: true,
	basePath: NODE_ENV === 'development' ? '' : `/${BASE_PATH}`,
	output: NODE_ENV === 'development' ? 'standalone' : 'export',
	distDir: NODE_ENV === 'development' ? '.next' : 'docs',
	images: { unoptimized: NODE_ENV !== 'development' },
};

export default nextConfig;
