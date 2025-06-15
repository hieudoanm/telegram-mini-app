import { trpcClient } from '@telegram/utils/trpc';
import { tryCatch } from '@telegram/utils/try-catch';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

const getTelegramUser = async (): Promise<{ initData: string; user: TelegramUser | null }> => {
	if (window?.Telegram?.WebApp?.initData) {
		const telegramWebAppInitData = window.Telegram.WebApp.initData;
		const initData = Object.fromEntries(new URLSearchParams(telegramWebAppInitData)) as InitData;
		const { user: userString } = initData;
		const { data: user, error } = await tryCatch<TelegramUser>(JSON.parse(userString));
		if (error) {
			console.error(error);
			return { user: null, initData: '' };
		}
		console.info('user', user);
		return { user, initData: telegramWebAppInitData };
	}
	return { user: null, initData: '' };
};

const UserContext = createContext<{
	isAuthenticated: boolean;
	user: TelegramUser | null;
}>({
	isAuthenticated: false,
	user: null,
});

export const TelegramUserProvider: React.FC<{ children: ReactNode }> = ({ children = <></> }) => {
	const [{ loading = false, isAuthenticated = false, user = null }, setState] = useState<{
		loading: boolean;
		isAuthenticated: boolean;
		user: TelegramUser | null;
	}>({
		loading: false,
		isAuthenticated: false,
		user: null,
	});

	useEffect(() => {
		const getTelegramUserAsync = async () => {
			setState((previous) => ({ ...previous, loading: true }));
			const { initData, user } = await getTelegramUser();
			const { data, error } = await tryCatch(trpcClient.auth.telegram.mutate({ initData }));
			if (error) console.error(error.message);
			if (!data) console.error('Invalid Data');
			const { data: authenticatedData, error: authenticatedError } = await tryCatch(
				trpcClient.app.authenticated.query(),
			);
			if (authenticatedError) console.error(authenticatedError.message);
			if (!authenticatedData) console.error('Invalid Data');
			const { isAuthenticated } = authenticatedData ?? { isAuthenticated: false };
			setState((previous) => ({ ...previous, loading: false, isAuthenticated, user }));
		};
		getTelegramUserAsync();
	}, []);

	const value = useMemo(() => ({ isAuthenticated, user }), [isAuthenticated, user]);

	return (
		<UserContext.Provider value={value}>
			{loading ? (
				<div className="flex h-screen w-screen items-center justify-center">
					<span className="text-xl">Loading</span>
				</div>
			) : (
				<>{children}</>
			)}
		</UserContext.Provider>
	);
};

export const useTelegramUser = () => {
	return useContext(UserContext);
};
