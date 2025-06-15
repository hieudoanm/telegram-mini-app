import { PageTemplate } from '@telegram/templates/PageTemplate';
import { NextPage } from 'next';

const GamesPage: NextPage = () => {
	return (
		<PageTemplate activeId="games">
			<div className="flex flex-col p-4">
				<div className="flex flex-col gap-y-4">
					<div className="aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900">
						<div className="flex h-full w-full flex-col p-4">
							<div className="grow"></div>
							<button className="w-full cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-4 py-2 text-base font-semibold text-neutral-900">
								Play Now
							</button>
						</div>
					</div>
					<h1 className="text-2xl font-black">Games</h1>
					{[
						{ id: '1', title: 'Game 1', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '2', title: 'Game 2', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '3', title: 'Game 3', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '4', title: 'Game 4', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '5', title: 'Game 5', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '6', title: 'Game 6', description: 'Lorem ipsum dolor sit amet.' },
					].map(({ id = '', title = '', description = '' }) => {
						return (
							<div
								key={id}
								className="rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-3 shadow shadow-neutral-900">
								<div className="flex w-full items-center gap-x-4">
									<div className="flex grow items-center gap-x-4 truncate">
										<div className="aspect-square h-12 rounded-lg border border-neutral-900"></div>
										<div className="flex grow flex-col gap-y-2 truncate">
											<h2 className="text-lg leading-none font-bold">{title}</h2>
											<p className="truncate text-sm leading-none">{description}</p>
										</div>
									</div>
									<div className="shrink-0">
										<button className="cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900">
											Play
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</PageTemplate>
	);
};

export default GamesPage;
