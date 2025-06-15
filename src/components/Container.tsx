import { useTelegram } from '@telegram/hooks/use-telegram';
import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	const { getPlatform } = useTelegram();

	const platform = getPlatform();

	return (
		<div className={`h-screen ${platform !== 'web' ? 'pt-18' : ''}`}>
			<div className="mx-auto flex h-full w-full max-w-lg flex-col overflow-hidden rounded-xl border border-neutral-800">
				{children}
			</div>
		</div>
	);
};
