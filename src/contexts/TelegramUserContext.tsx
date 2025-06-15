import { logger } from '@telegram/log/logger';
import { tryCatch } from '@telegram/utils/try-catch';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type InitData = {
	auth_date: string;
	chat_instance: string;
	chat_type: string;
	hash: string;
	user: string;
};

type TelegramUser = {
	id: number;
	first_name: string;
	last_name: string;
	username: string;
	language_code: string;
	allows_write_to_pm: boolean;
};

const getTelegramUser = async (): Promise<TelegramUser | null> => {
	if (window?.Telegram?.WebApp?.initData) {
		const telegramWebAppInitData = window.Telegram.WebApp.initData;
		const initData = Object.fromEntries(new URLSearchParams(telegramWebAppInitData)) as InitData;
		logger.info('initData', JSON.stringify(initData));
		const { user: userString } = initData;
		const { data: user, error } = await tryCatch<TelegramUser>(JSON.parse(userString));
		if (error) {
			console.error(error);
			return null;
		}
		return user;
	}
	return null;
};

const UserContext = createContext<{
	user: TelegramUser | null;
}>({
	user: null,
});

export const TelegramUserProvider: React.FC<{ children: ReactNode }> = ({ children = <></> }) => {
	const [{ user }, setState] = useState<{ user: TelegramUser | null }>({ user: null });

	useEffect(() => {
		const getTelegramUserAsync = async () => {
			const user = await getTelegramUser();
			setState((previous) => ({ ...previous, user }));
		};
		getTelegramUserAsync();
	}, []);

	const value = useMemo(() => ({ user }), [user]);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useTelegramUser = () => {
	return useContext(UserContext);
};
