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
				tg.ready();
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
				if (getPlatform() === TelegramPlatform.Web) return;
				tg.ready();
				tg.requestFullscreen();
			}
		} catch (error) {
			console.error(error);
		}
	}, [tg]);

	return { getPlatform, requestFullscreen };
};
