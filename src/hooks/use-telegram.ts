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
		try {
			if (tg) {
				return tg.platform;
			}
		} catch (error) {
			console.error(error);
			return TelegramPlatform.Web;
		}
		return TelegramPlatform.Web;
	}, [tg]);

	const requestFullscreen = useCallback(() => {
		try {
			if (tg) {
				tg.ready();
				tg.requestFullscreen();
			}
		} catch (error) {
			console.error(error);
		}
	}, [tg]);

	return { getPlatform, requestFullscreen };
};
