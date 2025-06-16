import { FC, ReactNode } from 'react';

export const Badge: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return <span className="rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900">{children}</span>;
};
