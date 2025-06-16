import { FC, ReactNode } from 'react';

export const Badge: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return <span className="rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900">{children}</span>;
};

export const ErrorBadge: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return <span className="rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900">{children}</span>;
};

export const SuccessBadge: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return <span className="rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900">{children}</span>;
};
