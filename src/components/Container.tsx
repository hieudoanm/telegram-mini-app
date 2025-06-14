import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return <div className="mx-auto flex h-screen w-full max-w-lg flex-col border border-neutral-800">{children}</div>;
};
