import Link from 'next/link';
import { FC } from 'react';
import {
	PiGameController,
	PiGameControllerFill,
	PiHouse,
	PiHouseFill,
	PiStorefront,
	PiStorefrontFill,
	PiUserCircle,
	PiUserCircleFill,
} from 'react-icons/pi';

export const Navbar: FC<{ activeId: string }> = ({ activeId }) => {
	return (
		<nav className="bg-neutral-900">
			<div className="grid grid-cols-4">
				{[
					{ id: 'home', href: '/', icon: <PiHouse />, activeIcon: <PiHouseFill />, text: 'Home' },
					{
						id: 'games',
						href: '/games',
						icon: <PiGameController />,
						activeIcon: <PiGameControllerFill />,
						text: 'Games',
					},
					{
						id: 'store',
						href: '/store',
						icon: <PiStorefront />,
						activeIcon: <PiStorefrontFill />,
						text: 'Store',
					},
					{
						id: 'profile',
						href: '/profile',
						icon: <PiUserCircle />,
						activeIcon: <PiUserCircleFill />,
						text: 'Profile',
					},
				].map(({ id = '', href = '', text = '', icon = <></>, activeIcon = <></> }) => {
					const active: boolean = id === activeId;
					return (
						<div key={id} className="col-span-1">
							<Link href={href}>
								<div className="flex flex-col items-center justify-center gap-y-0.5 py-4">
									<span className="text-3xl">{active ? <>{activeIcon}</> : <>{icon}</>}</span>
									<span className="text-xs">{text}</span>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</nav>
	);
};
