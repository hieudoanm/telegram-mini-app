import { useCallback } from 'react';

enum TelegramPlatform {
	Android = 'android',
	IOS = 'ios',
	MacOS = 'macos',
	TDesktop = 'tdesktop',
	Web = 'web',
}

export const useTelegram = () => {
	const tg = typeof window !== 'undefined' && window.Telegram?.WebApp;

	const getPlatform = useCallback((): TelegramPlatform => {
		if (tg) {
			return tg.platform;
		}
		return TelegramPlatform.Web;
	}, [tg]);

	const requestFullscreen = useCallback(() => {
		if (tg) {
			tg.ready();
			tg.requestFullscreen();
		}
	}, [tg]);

	return { getPlatform, requestFullscreen };
};
