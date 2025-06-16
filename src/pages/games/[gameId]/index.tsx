import { Badge } from '@telegram/components/Badge';
import { useQuery } from '@telegram/hooks/use-query';
import { PageTemplate } from '@telegram/templates/PageTemplate';
import Link from 'next/link';
import { PiCaretLeftBold } from 'react-icons/pi';

const StoreItemPage = () => {
	const gameId: string = useQuery('gameId');

	return (
		<PageTemplate activeId="store">
			<div className="flex flex-col gap-y-6 p-4">
				<Link href="/store">
					<div className="flex items-center gap-x-2 text-yellow-500">
						<PiCaretLeftBold />
						<span className="font-medium">Games</span>
					</div>
				</Link>
				<div className="aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900"></div>
				<div className="flex flex-col gap-y-3">
					<div>
						<Badge>Category</Badge>
					</div>
					<h1 className="text-xl leading-none font-semibold">Game {gameId}</h1>
					<p className="text-sm leading-none text-neutral-500">Lorem ipsum dolor sit amet.</p>
				</div>
				<button className="cursor-pointer rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900">
					Play Now
				</button>
			</div>
		</PageTemplate>
	);
};

export default StoreItemPage;
