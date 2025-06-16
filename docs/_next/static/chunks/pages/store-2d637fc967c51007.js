(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[315],
	{
		2758: (e, r, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store',
				function () {
					return s(6201);
				},
			]);
		},
		5549: (e, r, s) => {
			'use strict';
			s.d(r, { $: () => t });
			var l = s(5640);
			let t = (e) => {
				let { size: r = 'md', type: s = 'button', onClick: t = () => {}, children: a = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'sm' === r
					? (0, l.jsx)('button', {
							type: s,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: t,
							children: a,
						})
					: (0, l.jsx)('button', {
							type: s,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: t,
							children: a,
						});
			};
		},
		6201: (e, r, s) => {
			'use strict';
			s.r(r), s.d(r, { default: () => i });
			var l = s(5640),
				t = s(8377),
				a = s(5549),
				n = s(6440),
				c = s(5089),
				d = s.n(c);
			let i = () =>
				(0, l.jsx)(n.U, {
					activeId: 'store',
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
										children: [(0, l.jsx)('div', { className: 'grow' }), (0, l.jsx)(a.$, { children: 'Buy Now' })],
									}),
								}),
								(0, l.jsx)('h1', { className: 'text-2xl font-black', children: 'Store' }),
								[
									{ id: '1', name: 'Item 1', price: '$1.00', category: 'Category' },
									{ id: '2', name: 'Item 2', price: '$1.00', category: 'Category' },
									{ id: '3', name: 'Item 3', price: '$1.00', category: 'Category' },
									{ id: '4', name: 'Item 4', price: '$1.00', category: 'Category' },
									{ id: '5', name: 'Item 5', price: '$1.00', category: 'Category' },
									{ id: '6', name: 'Item 6', price: '$1.00', category: 'Category' },
								].map((e) => {
									let { id: r = '', name: s = '', price: n = '', category: c = '' } = e;
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
																	(0, l.jsx)('div', { children: (0, l.jsx)(t.E, { type: 'primary', children: c }) }),
																	(0, l.jsx)('h2', { className: 'leading-none font-semibold', children: s }),
																	(0, l.jsx)('p', {
																		className: 'truncate text-lg leading-none font-black',
																		children: n,
																	}),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)(d(), {
															href: '/store/'.concat(r),
															children: (0, l.jsx)(a.$, { size: 'sm', children: 'Buy' }),
														}),
													}),
												],
											}),
										},
										r,
									);
								}),
							],
						}),
					}),
				});
		},
		6440: (e, r, s) => {
			'use strict';
			s.d(r, { U: () => o });
			var l = s(5640);
			let t = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: r,
				});
			};
			var a = s(5089),
				n = s.n(a),
				c = s(5160);
			let d = (e) => {
				let { activeId: r } = e;
				return (0, l.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, l.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, l.jsx)(c.cEk, {}), activeIcon: (0, l.jsx)(c.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, l.jsx)(c.SkF, {}),
								activeIcon: (0, l.jsx)(c.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, l.jsx)(c.Qsx, {}),
								activeIcon: (0, l.jsx)(c.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, l.jsx)(c.rRm, {}),
								activeIcon: (0, l.jsx)(c.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, l.jsx)(c.NMe, {}),
								activeIcon: (0, l.jsx)(c.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: t = '',
									text: a = '',
									icon: c = (0, l.jsx)(l.Fragment, {}),
									activeIcon: d = (0, l.jsx)(l.Fragment, {}),
								} = e,
								i = s === r;
							return (0, l.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, l.jsx)(n(), {
										href: t,
										children: (0, l.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, l.jsx)('span', {
													className: 'text-3xl',
													children: i
														? (0, l.jsx)(l.Fragment, { children: d })
														: (0, l.jsx)(l.Fragment, { children: c }),
												}),
												(0, l.jsx)('span', { className: 'text-xs', children: a }),
											],
										}),
									}),
								},
								s,
							);
						}),
					}),
				});
			};
			var i = s(1211),
				x = s(148);
			let o = (e) => {
				let { activeId: r = '', children: s = (0, l.jsx)(l.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, i.j)();
				return (
					(0, x.useEffect)(() => {
						a();
					}, [a]),
					(0, l.jsxs)(t, {
						children: [
							(0, l.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, l.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, l.jsx)(d, { activeId: r }),
						],
					})
				);
			};
		},
		8377: (e, r, s) => {
			'use strict';
			s.d(r, { E: () => t });
			var l = s(5640);
			let t = (e) => {
				let { type: r = 'primary', children: s = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'success' === r
					? (0, l.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: s,
						})
					: 'error' === r
						? (0, l.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							})
						: (0, l.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							});
			};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [89, 636, 593, 792], () => r(2758)), (_N_E = e.O());
	},
]);
