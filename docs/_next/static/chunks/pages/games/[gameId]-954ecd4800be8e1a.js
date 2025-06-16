(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[103],
	{
		2103: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => i });
			var t = s(5640),
				r = s(8377),
				n = s(5549),
				a = s(5437),
				x = s(6440),
				c = s(5089),
				d = s.n(c),
				o = s(5160);
			let i = () => {
				let e = (0, a.I)('gameId');
				return (0, t.jsx)(x.U, {
					activeId: 'store',
					children: (0, t.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, t.jsx)(d(), {
								href: '/store',
								children: (0, t.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, t.jsx)(o.FZc, {}),
										(0, t.jsx)('span', { className: 'font-medium', children: 'Games' }),
									],
								}),
							}),
							(0, t.jsx)('div', {
								className: 'aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, t.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, t.jsx)('div', { children: (0, t.jsx)(r.E, { type: 'primary', children: 'Category' }) }),
									(0, t.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Game ', e] }),
									(0, t.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
								],
							}),
							(0, t.jsx)(n.$, { children: 'Play Now' }),
						],
					}),
				});
			};
		},
		5437: (e, l, s) => {
			'use strict';
			s.d(l, { I: () => r });
			var t = s(8512);
			let r = (e) => {
				var l, s;
				let { query: r } = (0, t.useRouter)(),
					n = null != (l = new Map(Object.entries(r)).get(e)) ? l : '';
				return Array.isArray(n) ? (null != (s = n.at(0)) ? s : '') : n;
			};
		},
		5549: (e, l, s) => {
			'use strict';
			s.d(l, { $: () => r, r: () => n });
			var t = s(5640);
			let r = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: r = () => {},
						children: n = (0, t.jsx)(t.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
								onClick: r,
								children: n,
							})
						: (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								onClick: r,
								children: n,
							});
				},
				n = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: r = () => {},
						children: n = (0, t.jsx)(t.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, t.jsx)('button', {
								type: s,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: r,
								children: n,
							})
						: (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
								onClick: r,
								children: n,
							});
				};
		},
		6440: (e, l, s) => {
			'use strict';
			s.d(l, { U: () => i });
			var t = s(5640);
			let r = (e) => {
				let { children: l = (0, t.jsx)(t.Fragment, {}) } = e;
				return (0, t.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: l,
				});
			};
			var n = s(5089),
				a = s.n(n),
				x = s(5160);
			let c = (e) => {
				let { activeId: l } = e;
				return (0, t.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, t.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, t.jsx)(x.cEk, {}), activeIcon: (0, t.jsx)(x.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, t.jsx)(x.SkF, {}),
								activeIcon: (0, t.jsx)(x.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, t.jsx)(x.Qsx, {}),
								activeIcon: (0, t.jsx)(x.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, t.jsx)(x.rRm, {}),
								activeIcon: (0, t.jsx)(x.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, t.jsx)(x.NMe, {}),
								activeIcon: (0, t.jsx)(x.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: r = '',
									text: n = '',
									icon: x = (0, t.jsx)(t.Fragment, {}),
									activeIcon: c = (0, t.jsx)(t.Fragment, {}),
								} = e,
								d = s === l;
							return (0, t.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, t.jsx)(a(), {
										href: r,
										children: (0, t.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, t.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, t.jsx)(t.Fragment, { children: c })
														: (0, t.jsx)(t.Fragment, { children: x }),
												}),
												(0, t.jsx)('span', { className: 'text-xs', children: n }),
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
			var d = s(1211),
				o = s(148);
			let i = (e) => {
				let { activeId: l = '', children: s = (0, t.jsx)(t.Fragment, {}) } = e,
					{ requestFullscreen: n } = (0, d.j)();
				return (
					(0, o.useEffect)(() => {
						n();
					}, [n]),
					(0, t.jsxs)(r, {
						children: [
							(0, t.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, t.jsx)('h1', { className: 'text-center text-2xl font-semibold', children: 'Mini App' }),
							}),
							(0, t.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, t.jsx)(c, { activeId: l }),
						],
					})
				);
			};
		},
		6474: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games/[gameId]',
				function () {
					return s(2103);
				},
			]);
		},
		8377: (e, l, s) => {
			'use strict';
			s.d(l, { E: () => r });
			var t = s(5640);
			let r = (e) => {
				let { type: l = 'primary', children: s = (0, t.jsx)(t.Fragment, {}) } = e;
				return 'success' === l
					? (0, t.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: s,
						})
					: 'error' === l
						? (0, t.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							})
						: (0, t.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							});
			};
		},
		8512: (e, l, s) => {
			e.exports = s(7203);
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 636, 593, 792], () => l(6474)), (_N_E = e.O());
	},
]);
