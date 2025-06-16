(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		3171: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => n });
			var r = s(5640),
				t = s(5549),
				a = s(6440);
			let n = () =>
				(0, r.jsx)(a.U, {
					activeId: 'home',
					children: (0, r.jsx)('div', {
						className: 'p-4',
						children: (0, r.jsx)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								{ id: '1', action: 'Buy Now' },
								{ id: '2', action: 'Play Now' },
								{ id: '3', action: 'Buy Now' },
								{ id: '4', action: 'Play Now' },
							].map((e) => {
								let { id: l = '', action: s = 'action' } = e;
								return (0, r.jsx)(
									'div',
									{
										className:
											'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
										children: (0, r.jsxs)('div', {
											className: 'flex h-full w-full flex-col p-4',
											children: [(0, r.jsx)('div', { className: 'grow' }), (0, r.jsx)(t.$, { children: s })],
										}),
									},
									l,
								);
							}),
						}),
					}),
				});
		},
		5549: (e, l, s) => {
			'use strict';
			s.d(l, { $: () => t });
			var r = s(5640);
			let t = (e) => {
				let { size: l = 'md', type: s = 'button', onClick: t = () => {}, children: a = (0, r.jsx)(r.Fragment, {}) } = e;
				return 'sm' === l
					? (0, r.jsx)('button', {
							type: s,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: t,
							children: a,
						})
					: (0, r.jsx)('button', {
							type: s,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: t,
							children: a,
						});
			};
		},
		6440: (e, l, s) => {
			'use strict';
			s.d(l, { U: () => x });
			var r = s(5640);
			let t = (e) => {
				let { children: l = (0, r.jsx)(r.Fragment, {}) } = e;
				return (0, r.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: l,
				});
			};
			var a = s(5089),
				n = s.n(a),
				c = s(5160);
			let i = (e) => {
				let { activeId: l } = e;
				return (0, r.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, r.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, r.jsx)(c.cEk, {}), activeIcon: (0, r.jsx)(c.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, r.jsx)(c.SkF, {}),
								activeIcon: (0, r.jsx)(c.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, r.jsx)(c.Qsx, {}),
								activeIcon: (0, r.jsx)(c.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, r.jsx)(c.rRm, {}),
								activeIcon: (0, r.jsx)(c.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, r.jsx)(c.NMe, {}),
								activeIcon: (0, r.jsx)(c.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: t = '',
									text: a = '',
									icon: c = (0, r.jsx)(r.Fragment, {}),
									activeIcon: i = (0, r.jsx)(r.Fragment, {}),
								} = e,
								o = s === l;
							return (0, r.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, r.jsx)(n(), {
										href: t,
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												o ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, r.jsx)('span', {
													className: 'text-3xl',
													children: o
														? (0, r.jsx)(r.Fragment, { children: i })
														: (0, r.jsx)(r.Fragment, { children: c }),
												}),
												(0, r.jsx)('span', { className: 'text-xs', children: a }),
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
			var o = s(1211),
				d = s(148);
			let x = (e) => {
				let { activeId: l = '', children: s = (0, r.jsx)(r.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, o.j)();
				return (
					(0, d.useEffect)(() => {
						a();
					}, [a]),
					(0, r.jsxs)(t, {
						children: [
							(0, r.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, r.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, r.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, r.jsx)(i, { activeId: l }),
						],
					})
				);
			};
		},
		7757: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(3171);
				},
			]);
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 636, 593, 792], () => l(7757)), (_N_E = e.O());
	},
]);
