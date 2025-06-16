(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1],
	{
		3911: (e, s, r) => {
			'use strict';
			r.r(s), r.d(s, { default: () => d });
			var l = r(5640),
				t = r(8377),
				a = r(5549),
				n = r(6440),
				i = r(5089),
				c = r.n(i);
			let d = () =>
				(0, l.jsx)(n.U, {
					activeId: 'games',
					children: (0, l.jsx)('div', {
						className: 'flex flex-col p-4',
						children: (0, l.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								(0, l.jsx)('div', {
									className:
										'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
									children: (0, l.jsxs)('div', {
										className: 'flex h-full w-full flex-col p-4',
										children: [(0, l.jsx)('div', { className: 'grow' }), (0, l.jsx)(a.$, { children: 'Play Now' })],
									}),
								}),
								(0, l.jsx)('h1', { className: 'text-2xl font-black', children: 'Games' }),
								[
									{ id: '1', title: 'Game 1', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '2', title: 'Game 2', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '3', title: 'Game 3', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '4', title: 'Game 4', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '5', title: 'Game 5', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '6', title: 'Game 6', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
								].map((e) => {
									let { id: s = '', title: r = '', description: n = '', category: i = '' } = e;
									return (0, l.jsx)(
										'div',
										{
											className:
												'rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-3 shadow shadow-neutral-900',
											children: (0, l.jsxs)('div', {
												className: 'flex w-full items-center gap-x-4',
												children: [
													(0, l.jsxs)('div', {
														className: 'flex grow items-center gap-x-4 truncate',
														children: [
															(0, l.jsx)('div', {
																className: 'aspect-square h-20 rounded-lg border border-neutral-900',
															}),
															(0, l.jsxs)('div', {
																className: 'flex grow flex-col gap-y-2 truncate',
																children: [
																	(0, l.jsx)('div', {
																		className: 'flex items-center gap-x-2',
																		children: (0, l.jsx)(t.E, { type: 'primary', children: i }),
																	}),
																	(0, l.jsx)('h2', { className: 'text-lg leading-none font-bold', children: r }),
																	(0, l.jsx)('p', { className: 'truncate text-sm leading-none', children: n }),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)(c(), {
															href: '/games/'.concat(s),
															children: (0, l.jsx)(a.$, { size: 'sm', children: 'Play' }),
														}),
													}),
												],
											}),
										},
										s,
									);
								}),
							],
						}),
					}),
				});
		},
		4302: (e, s, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games',
				function () {
					return r(3911);
				},
			]);
		},
		5549: (e, s, r) => {
			'use strict';
			r.d(s, { $: () => t });
			var l = r(5640);
			let t = (e) => {
				let { size: s = 'md', type: r = 'button', onClick: t = () => {}, children: a = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'sm' === s
					? (0, l.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: t,
							children: a,
						})
					: (0, l.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: t,
							children: a,
						});
			};
		},
		6440: (e, s, r) => {
			'use strict';
			r.d(s, { U: () => x });
			var l = r(5640);
			let t = (e) => {
				let { children: s = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: s,
				});
			};
			var a = r(5089),
				n = r.n(a),
				i = r(5160);
			let c = (e) => {
				let { activeId: s } = e;
				return (0, l.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, l.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, l.jsx)(i.cEk, {}), activeIcon: (0, l.jsx)(i.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, l.jsx)(i.SkF, {}),
								activeIcon: (0, l.jsx)(i.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, l.jsx)(i.Qsx, {}),
								activeIcon: (0, l.jsx)(i.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, l.jsx)(i.rRm, {}),
								activeIcon: (0, l.jsx)(i.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, l.jsx)(i.NMe, {}),
								activeIcon: (0, l.jsx)(i.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: r = '',
									href: t = '',
									text: a = '',
									icon: i = (0, l.jsx)(l.Fragment, {}),
									activeIcon: c = (0, l.jsx)(l.Fragment, {}),
								} = e,
								d = r === s;
							return (0, l.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, l.jsx)(n(), {
										href: t,
										children: (0, l.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, l.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, l.jsx)(l.Fragment, { children: c })
														: (0, l.jsx)(l.Fragment, { children: i }),
												}),
												(0, l.jsx)('span', { className: 'text-xs', children: a }),
											],
										}),
									}),
								},
								r,
							);
						}),
					}),
				});
			};
			var d = r(1211),
				o = r(148);
			let x = (e) => {
				let { activeId: s = '', children: r = (0, l.jsx)(l.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, d.j)();
				return (
					(0, o.useEffect)(() => {
						a();
					}, [a]),
					(0, l.jsxs)(t, {
						children: [
							(0, l.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, l.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, l.jsx)(c, { activeId: s }),
						],
					})
				);
			};
		},
		8377: (e, s, r) => {
			'use strict';
			r.d(s, { E: () => t });
			var l = r(5640);
			let t = (e) => {
				let { type: s = 'primary', children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'success' === s
					? (0, l.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: r,
						})
					: 'error' === s
						? (0, l.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							})
						: (0, l.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							});
			};
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		e.O(0, [89, 636, 593, 792], () => s(4302)), (_N_E = e.O());
	},
]);
