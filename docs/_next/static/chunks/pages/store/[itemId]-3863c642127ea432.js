(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[900],
	{
		2732: (e, s, t) => {
			'use strict';
			t.r(s), t.d(s, { default: () => o });
			var l = t(5640),
				r = t(8377),
				n = t(5549),
				a = t(5437),
				c = t(6440),
				x = t(5089),
				i = t.n(x),
				d = t(5160);
			let o = () => {
				let e = (0, a.I)('itemId');
				return (0, l.jsx)(c.U, {
					activeId: 'store',
					children: (0, l.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, l.jsx)(i(), {
								href: '/store',
								children: (0, l.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, l.jsx)(d.FZc, {}),
										(0, l.jsx)('span', { className: 'font-medium', children: 'Store' }),
									],
								}),
							}),
							(0, l.jsx)('div', {
								className: 'aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, l.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, l.jsx)('div', { children: (0, l.jsx)(r.E, { type: 'primary', children: 'Category' }) }),
									(0, l.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Item ', e] }),
									(0, l.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
									(0, l.jsxs)('div', {
										className: 'flex items-center gap-x-2 leading-none',
										children: [
											(0, l.jsx)('span', { className: 'text-xl font-black', children: '$1.00' }),
											(0, l.jsx)('span', { className: 'text-base text-neutral-500 line-through', children: '$2.00' }),
										],
									}),
								],
							}),
							(0, l.jsx)(n.$, { children: 'Buy Now' }),
						],
					}),
				});
			};
		},
		5044: (e, s, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store/[itemId]',
				function () {
					return t(2732);
				},
			]);
		},
		5437: (e, s, t) => {
			'use strict';
			t.d(s, { I: () => r });
			var l = t(8512);
			let r = (e) => {
				var s, t;
				let { query: r } = (0, l.useRouter)(),
					n = null != (s = new Map(Object.entries(r)).get(e)) ? s : '';
				return Array.isArray(n) ? (null != (t = n.at(0)) ? t : '') : n;
			};
		},
		5549: (e, s, t) => {
			'use strict';
			t.d(s, { $: () => r });
			var l = t(5640);
			let r = (e) => {
				let { size: s = 'md', type: t = 'button', onClick: r = () => {}, children: n = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'sm' === s
					? (0, l.jsx)('button', {
							type: t,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: r,
							children: n,
						})
					: (0, l.jsx)('button', {
							type: t,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: r,
							children: n,
						});
			};
		},
		6440: (e, s, t) => {
			'use strict';
			t.d(s, { U: () => o });
			var l = t(5640);
			let r = (e) => {
				let { children: s = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: s,
				});
			};
			var n = t(5089),
				a = t.n(n),
				c = t(5160);
			let x = (e) => {
				let { activeId: s } = e;
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
									id: t = '',
									href: r = '',
									text: n = '',
									icon: c = (0, l.jsx)(l.Fragment, {}),
									activeIcon: x = (0, l.jsx)(l.Fragment, {}),
								} = e,
								i = t === s;
							return (0, l.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, l.jsx)(a(), {
										href: r,
										children: (0, l.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, l.jsx)('span', {
													className: 'text-3xl',
													children: i
														? (0, l.jsx)(l.Fragment, { children: x })
														: (0, l.jsx)(l.Fragment, { children: c }),
												}),
												(0, l.jsx)('span', { className: 'text-xs', children: n }),
											],
										}),
									}),
								},
								t,
							);
						}),
					}),
				});
			};
			var i = t(1211),
				d = t(148);
			let o = (e) => {
				let { activeId: s = '', children: t = (0, l.jsx)(l.Fragment, {}) } = e,
					{ requestFullscreen: n } = (0, i.j)();
				return (
					(0, d.useEffect)(() => {
						n();
					}, [n]),
					(0, l.jsxs)(r, {
						children: [
							(0, l.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, l.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, l.jsx)(x, { activeId: s }),
						],
					})
				);
			};
		},
		8377: (e, s, t) => {
			'use strict';
			t.d(s, { E: () => r });
			var l = t(5640);
			let r = (e) => {
				let { type: s = 'primary', children: t = (0, l.jsx)(l.Fragment, {}) } = e;
				return 'success' === s
					? (0, l.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: t,
						})
					: 'error' === s
						? (0, l.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: t,
							})
						: (0, l.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: t,
							});
			};
		},
		8512: (e, s, t) => {
			e.exports = t(7203);
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		e.O(0, [89, 636, 593, 792], () => s(5044)), (_N_E = e.O());
	},
]);
