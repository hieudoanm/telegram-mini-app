(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[103],
	{
		2103: (e, s, r) => {
			'use strict';
			r.r(s), r.d(s, { default: () => o });
			var t = r(5640),
				l = r(8377),
				a = r(5549),
				n = r(5437),
				c = r(6440),
				x = r(5089),
				d = r.n(x),
				i = r(5160);
			let o = () => {
				let e = (0, n.I)('gameId');
				return (0, t.jsx)(c.U, {
					activeId: 'store',
					children: (0, t.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, t.jsx)(d(), {
								href: '/store',
								children: (0, t.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, t.jsx)(i.FZc, {}),
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
									(0, t.jsx)('div', { children: (0, t.jsx)(l.E, { type: 'primary', children: 'Category' }) }),
									(0, t.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Game ', e] }),
									(0, t.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
								],
							}),
							(0, t.jsx)(a.$, { children: 'Play Now' }),
						],
					}),
				});
			};
		},
		5437: (e, s, r) => {
			'use strict';
			r.d(s, { I: () => l });
			var t = r(8512);
			let l = (e) => {
				var s, r;
				let { query: l } = (0, t.useRouter)(),
					a = null != (s = new Map(Object.entries(l)).get(e)) ? s : '';
				return Array.isArray(a) ? (null != (r = a.at(0)) ? r : '') : a;
			};
		},
		5549: (e, s, r) => {
			'use strict';
			r.d(s, { $: () => l });
			var t = r(5640);
			let l = (e) => {
				let { size: s = 'md', type: r = 'button', onClick: l = () => {}, children: a = (0, t.jsx)(t.Fragment, {}) } = e;
				return 'sm' === s
					? (0, t.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: l,
							children: a,
						})
					: (0, t.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: l,
							children: a,
						});
			};
		},
		6440: (e, s, r) => {
			'use strict';
			r.d(s, { U: () => o });
			var t = r(5640);
			let l = (e) => {
				let { children: s = (0, t.jsx)(t.Fragment, {}) } = e;
				return (0, t.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: s,
				});
			};
			var a = r(5089),
				n = r.n(a),
				c = r(5160);
			let x = (e) => {
				let { activeId: s } = e;
				return (0, t.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, t.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, t.jsx)(c.cEk, {}), activeIcon: (0, t.jsx)(c.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, t.jsx)(c.SkF, {}),
								activeIcon: (0, t.jsx)(c.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, t.jsx)(c.Qsx, {}),
								activeIcon: (0, t.jsx)(c.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, t.jsx)(c.rRm, {}),
								activeIcon: (0, t.jsx)(c.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, t.jsx)(c.NMe, {}),
								activeIcon: (0, t.jsx)(c.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: r = '',
									href: l = '',
									text: a = '',
									icon: c = (0, t.jsx)(t.Fragment, {}),
									activeIcon: x = (0, t.jsx)(t.Fragment, {}),
								} = e,
								d = r === s;
							return (0, t.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, t.jsx)(n(), {
										href: l,
										children: (0, t.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, t.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, t.jsx)(t.Fragment, { children: x })
														: (0, t.jsx)(t.Fragment, { children: c }),
												}),
												(0, t.jsx)('span', { className: 'text-xs', children: a }),
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
				i = r(148);
			let o = (e) => {
				let { activeId: s = '', children: r = (0, t.jsx)(t.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, d.j)();
				return (
					(0, i.useEffect)(() => {
						a();
					}, [a]),
					(0, t.jsxs)(l, {
						children: [
							(0, t.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, t.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, t.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, t.jsx)(x, { activeId: s }),
						],
					})
				);
			};
		},
		6474: (e, s, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games/[gameId]',
				function () {
					return r(2103);
				},
			]);
		},
		8377: (e, s, r) => {
			'use strict';
			r.d(s, { E: () => l });
			var t = r(5640);
			let l = (e) => {
				let { type: s = 'primary', children: r = (0, t.jsx)(t.Fragment, {}) } = e;
				return 'success' === s
					? (0, t.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: r,
						})
					: 'error' === s
						? (0, t.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							})
						: (0, t.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							});
			};
		},
		8512: (e, s, r) => {
			e.exports = r(7203);
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		e.O(0, [89, 636, 593, 792], () => s(6474)), (_N_E = e.O());
	},
]);
