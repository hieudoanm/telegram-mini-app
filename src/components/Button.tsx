import { FC, ReactNode } from 'react';

export const Button: FC<{ type?: 'button' | 'submit' | 'reset'; onClick?: () => void; children: ReactNode }> = ({
	type = 'button',
	onClick = () => {},
	children = <></>,
}) => {
	return (
		<button
			type={type}
			className="w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900"
			onClick={onClick}>
			{children}
		</button>
	);
};
