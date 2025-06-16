import { Container } from '@telegram/components/Container';
import { Navbar } from '@telegram/components/Navbar';
import { FC, ReactNode } from 'react';

export const PageTemplate: FC<{ activeId: string; children: ReactNode }> = ({ activeId = '', children = <></> }) => {
	return (
		<Container>
			<header className="border-b border-neutral-900 pt-8 pb-4">
				<h1 className="text-center text-2xl font-black">Mini App</h1>
			</header>
			<main className="scrollbar-none grow overflow-y-auto">{children}</main>
			<Navbar activeId={activeId} />
		</Container>
	);
};
