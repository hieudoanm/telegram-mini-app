import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
	return (
		<div className="mx-auto flex h-screen w-full max-w-lg items-center justify-center border-r border-l border-neutral-800 p-8">
			<div className="flex flex-col items-center justify-center gap-y-8">
				<h1 className="text-9xl">404</h1>
				<Link href="/">
					<button className="cursor-pointer rounded-full border border-neutral-800 px-8 py-4 text-xl">Go Home</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
