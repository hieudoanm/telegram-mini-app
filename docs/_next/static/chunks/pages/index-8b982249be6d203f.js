(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		3171: (e, l, t) => {
			'use strict';
			t.r(l), t.d(l, { default: () => a });
			var s = t(5640),
				r = t(5549),
				n = t(6440);
			let a = () =>
				(0, s.jsx)(n.U, {
					activeId: 'home',
					children: (0, s.jsx)('div', {
						className: 'p-4',
						children: (0, s.jsx)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								{ id: '1', action: 'Buy Now' },
								{ id: '2', action: 'Play Now' },
								{ id: '3', action: 'Buy Now' },
								{ id: '4', action: 'Play Now' },
							].map((e) => {
								let { id: l = '', action: t = 'action' } = e;
								return (0, s.jsx)(
									'div',
									{
										className:
											'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
										children: (0, s.jsxs)('div', {
											className: 'flex h-full w-full flex-col p-4',
											children: [(0, s.jsx)('div', { className: 'grow' }), (0, s.jsx)(r.$, { children: t })],
										}),
									},
									l,
								);
							}),
						}),
					}),
				});
		},
		5549: (e, l, t) => {
			'use strict';
			t.d(l, { $: () => r, r: () => n });
			var s = t(5640);
			let r = (e) => {
					let {
						size: l = 'md',
						type: t = 'button',
						onClick: r = () => {},
						children: n = (0, s.jsx)(s.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, s.jsx)('button', {
								type: t,
								className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
								onClick: r,
								children: n,
							})
						: (0, s.jsx)('button', {
								type: t,
								className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								onClick: r,
								children: n,
							});
				},
				n = (e) => {
					let {
						size: l = 'md',
						type: t = 'button',
						onClick: r = () => {},
						children: n = (0, s.jsx)(s.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, s.jsx)('button', {
								type: t,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: r,
								children: n,
							})
						: (0, s.jsx)('button', {
								type: t,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
								onClick: r,
								children: n,
							});
				};
		},
		6440: (e, l, t) => {
			'use strict';
			t.d(l, { U: () => x });
			var s = t(5640);
			let r = (e) => {
				let { children: l = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: l,
				});
			};
			var n = t(5089),
				a = t.n(n),
				o = t(5160);
			let c = (e) => {
				let { activeId: l } = e;
				return (0, s.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, s.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, s.jsx)(o.cEk, {}), activeIcon: (0, s.jsx)(o.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, s.jsx)(o.SkF, {}),
								activeIcon: (0, s.jsx)(o.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, s.jsx)(o.Qsx, {}),
								activeIcon: (0, s.jsx)(o.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, s.jsx)(o.rRm, {}),
								activeIcon: (0, s.jsx)(o.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, s.jsx)(o.NMe, {}),
								activeIcon: (0, s.jsx)(o.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: t = '',
									href: r = '',
									text: n = '',
									icon: o = (0, s.jsx)(s.Fragment, {}),
									activeIcon: c = (0, s.jsx)(s.Fragment, {}),
								} = e,
								d = t === l;
							return (0, s.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, s.jsx)(a(), {
										href: r,
										children: (0, s.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, s.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, s.jsx)(s.Fragment, { children: c })
														: (0, s.jsx)(s.Fragment, { children: o }),
												}),
												(0, s.jsx)('span', { className: 'text-xs', children: n }),
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
			var d = t(1211),
				i = t(148);
			let x = (e) => {
				let { activeId: l = '', children: t = (0, s.jsx)(s.Fragment, {}) } = e,
					{ requestFullscreen: n } = (0, d.j)();
				return (
					(0, i.useEffect)(() => {
						n();
					}, [n]),
					(0, s.jsxs)(r, {
						children: [
							(0, s.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, s.jsx)('h1', { className: 'text-center text-2xl font-semibold', children: 'Mini App' }),
							}),
							(0, s.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, s.jsx)(c, { activeId: l }),
						],
					})
				);
			};
		},
		7757: (e, l, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return t(3171);
				},
			]);
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 636, 593, 792], () => l(7757)), (_N_E = e.O());
	},
]);
