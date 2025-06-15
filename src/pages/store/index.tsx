import { PageTemplate } from '@telegram/templates/PageTemplate';
import { NextPage } from 'next';

const StorePage: NextPage = () => {
	return (
		<PageTemplate activeId="store">
			<div className="flex flex-col p-4">
				<div className="flex flex-col gap-y-4">
					<div className="aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900">
						<div className="flex h-full w-full flex-col p-4">
							<div className="grow"></div>
							<button className="w-full cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-4 py-2 text-base font-semibold text-neutral-900">
								Buy Now
							</button>
						</div>
					</div>
					<h1 className="text-2xl font-black">Store</h1>
					{[
						{ id: '1', title: 'Item 1', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '2', title: 'Item 2', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '3', title: 'Item 3', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '4', title: 'Item 4', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '5', title: 'Item 5', description: 'Lorem ipsum dolor sit amet.' },
						{ id: '6', title: 'Item 6', description: 'Lorem ipsum dolor sit amet.' },
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
											Buy
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

export default StorePage;
