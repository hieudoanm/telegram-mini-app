import { Container } from '@telegram/components/Container';
import { Navbar } from '@telegram/components/Navbar';
import { FC, ReactNode } from 'react';

export const PageTemplate: FC<{ activeId: string; children: ReactNode }> = ({ activeId = '', children = <></> }) => {
	return (
		<Container>
			<main className="scrollbar-none grow overflow-y-auto">{children}</main>
			<Navbar activeId={activeId} />
		</Container>
	);
};
