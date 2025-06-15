import { PageTemplate } from '@telegram/templates/PageTemplate';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<PageTemplate activeId="home">
			<div className="p-4">
				<div className="flex flex-col gap-y-4">
					{[
						{ id: '1', action: 'Buy Now' },
						{ id: '2', action: 'Play Now' },
						{ id: '3', action: 'Buy Now' },
						{ id: '4', action: 'Play Now' },
					].map(({ id = '', action = 'action' }) => {
						return (
							<div
								key={id}
								className="aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900">
								<div className="flex h-full w-full flex-col p-4">
									<div className="grow"></div>
									<button className="w-full cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-4 py-2 text-base font-semibold text-neutral-900">
										{action}
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</PageTemplate>
	);
};

export default HomePage;
