(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[13],
	{
		2401: (e, t, s) => {
			'use strict';
			s.r(t), s.d(t, { default: () => o });
			var r = s(5640),
				l = s(8377),
				a = s(5437),
				n = s(6440),
				c = s(7226),
				i = s(5089),
				x = s.n(i),
				d = s(5160);
			let o = () => {
				let e = (0, a.I)('articleId');
				return (0, r.jsx)(n.U, {
					activeId: 'news',
					children: (0, r.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, r.jsx)(x(), {
								href: '/news',
								children: (0, r.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [(0, r.jsx)(d.FZc, {}), (0, r.jsx)('span', { className: 'font-medium', children: 'News' })],
								}),
							}),
							(0, r.jsx)('div', {
								className: 'aspect-video w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, r.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, r.jsx)('p', { className: 'text-xs text-neutral-500', children: (0, c.Y)(new Date()) }),
									(0, r.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Article ', e] }),
									(0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(l.E, { type: 'primary', children: 'Tag 1' }),
											(0, r.jsx)(l.E, { type: 'primary', children: 'Tag 2' }),
										],
									}),
									(0, r.jsx)('p', {
										className: 'text-sm text-neutral-300',
										children:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet pretium enim, egestas tincidunt orci. Nullam rutrum iaculis libero id suscipit. Nullam consectetur felis a hendrerit tincidunt. Nam sodales porttitor dui, id feugiat diam pulvinar at. Morbi pulvinar metus sed nisl egestas aliquam. In rhoncus augue a cursus tristique.',
									}),
								],
							}),
						],
					}),
				});
			};
		},
		4914: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/news/[articleId]',
				function () {
					return s(2401);
				},
			]);
		},
		5437: (e, t, s) => {
			'use strict';
			s.d(t, { I: () => l });
			var r = s(8512);
			let l = (e) => {
				var t, s;
				let { query: l } = (0, r.useRouter)(),
					a = null != (t = new Map(Object.entries(l)).get(e)) ? t : '';
				return Array.isArray(a) ? (null != (s = a.at(0)) ? s : '') : a;
			};
		},
		6440: (e, t, s) => {
			'use strict';
			s.d(t, { U: () => o });
			var r = s(5640);
			let l = (e) => {
				let { children: t = (0, r.jsx)(r.Fragment, {}) } = e;
				return (0, r.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var a = s(5089),
				n = s.n(a),
				c = s(5160);
			let i = (e) => {
				let { activeId: t } = e;
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
									href: l = '',
									text: a = '',
									icon: c = (0, r.jsx)(r.Fragment, {}),
									activeIcon: i = (0, r.jsx)(r.Fragment, {}),
								} = e,
								x = s === t;
							return (0, r.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, r.jsx)(n(), {
										href: l,
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												x ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, r.jsx)('span', {
													className: 'text-3xl',
													children: x
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
			var x = s(1211),
				d = s(148);
			let o = (e) => {
				let { activeId: t = '', children: s = (0, r.jsx)(r.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, x.j)();
				return (
					(0, d.useEffect)(() => {
						a();
					}, [a]),
					(0, r.jsxs)(l, {
						children: [
							(0, r.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, r.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, r.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, r.jsx)(i, { activeId: t }),
						],
					})
				);
			};
		},
		7226: (e, t, s) => {
			'use strict';
			s.d(t, { Y: () => a });
			let r = [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
				l = (e) => {
					let t = e % 10,
						s = e % 100;
					return 1 === t && 11 !== s ? 'st' : 2 === t && 12 !== s ? 'nd' : 3 === t && 13 !== s ? 'rd' : 'th';
				},
				a = (e) => {
					let t = r[e.getMonth()],
						s = e.getDate(),
						a = e.getFullYear(),
						n = l(s);
					return ''.concat(t, ' ').concat(s).concat(n, ' ').concat(a);
				};
		},
		8377: (e, t, s) => {
			'use strict';
			s.d(t, { E: () => l });
			var r = s(5640);
			let l = (e) => {
				let { type: t = 'primary', children: s = (0, r.jsx)(r.Fragment, {}) } = e;
				return 'success' === t
					? (0, r.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: s,
						})
					: 'error' === t
						? (0, r.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							})
						: (0, r.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							});
			};
		},
		8512: (e, t, s) => {
			e.exports = s(7203);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [89, 636, 593, 792], () => t(4914)), (_N_E = e.O());
	},
]);
