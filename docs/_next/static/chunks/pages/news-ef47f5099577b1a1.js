(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[277],
	{
		6440: (e, t, s) => {
			'use strict';
			s.d(t, { U: () => x });
			var a = s(5640);
			let r = (e) => {
				let { children: t = (0, a.jsx)(a.Fragment, {}) } = e;
				return (0, a.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var l = s(5089),
				n = s.n(l),
				i = s(5160);
			let c = (e) => {
				let { activeId: t } = e;
				return (0, a.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, a.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, a.jsx)(i.cEk, {}), activeIcon: (0, a.jsx)(i.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, a.jsx)(i.SkF, {}),
								activeIcon: (0, a.jsx)(i.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, a.jsx)(i.Qsx, {}),
								activeIcon: (0, a.jsx)(i.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, a.jsx)(i.rRm, {}),
								activeIcon: (0, a.jsx)(i.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, a.jsx)(i.NMe, {}),
								activeIcon: (0, a.jsx)(i.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: r = '',
									text: l = '',
									icon: i = (0, a.jsx)(a.Fragment, {}),
									activeIcon: c = (0, a.jsx)(a.Fragment, {}),
								} = e,
								d = s === t;
							return (0, a.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, a.jsx)(n(), {
										href: r,
										children: (0, a.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, a.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, a.jsx)(a.Fragment, { children: c })
														: (0, a.jsx)(a.Fragment, { children: i }),
												}),
												(0, a.jsx)('span', { className: 'text-xs', children: l }),
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
			var d = s(3856),
				o = s(148);
			let x = (e) => {
				let { activeId: t = '', children: s = (0, a.jsx)(a.Fragment, {}) } = e,
					{ requestFullscreen: l } = (0, d.j)();
				return (
					(0, o.useEffect)(() => {
						l();
					}, [l]),
					(0, a.jsxs)(r, {
						children: [
							(0, a.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, a.jsx)('h1', { className: 'text-center text-2xl font-semibold', children: 'Mini App' }),
							}),
							(0, a.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, a.jsx)(c, { activeId: t }),
						],
					})
				);
			};
		},
		7226: (e, t, s) => {
			'use strict';
			s.d(t, { Y: () => l });
			let a = [
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
				r = (e) => {
					let t = e % 10,
						s = e % 100;
					return 1 === t && 11 !== s ? 'st' : 2 === t && 12 !== s ? 'nd' : 3 === t && 13 !== s ? 'rd' : 'th';
				},
				l = (e) => {
					let t = a[e.getMonth()],
						s = e.getDate(),
						l = e.getFullYear(),
						n = r(s);
					return ''.concat(t, ' ').concat(s).concat(n, ' ').concat(l);
				};
		},
		8134: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/news',
				function () {
					return s(9241);
				},
			]);
		},
		9241: (e, t, s) => {
			'use strict';
			s.r(t), s.d(t, { default: () => o });
			var a = s(5640),
				r = s(6440),
				l = s(7226),
				n = s(5089),
				i = s.n(n),
				c = s(5160);
			let d =
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet pretium enim, egestas tincidunt orci. Nullam rutrum iaculis libero id suscipit. Nullam consectetur felis a hendrerit tincidunt. Nam sodales porttitor dui, id feugiat diam pulvinar at. Morbi pulvinar metus sed nisl egestas aliquam. In rhoncus augue a cursus tristique.',
				o = () =>
					(0, a.jsx)(r.U, {
						activeId: 'news',
						children: (0, a.jsx)('div', {
							className: 'flex flex-col gap-y-4 p-4',
							children: [
								{ id: '1', title: 'Article 1', date: new Date(), content: d, tags: ['Tag 1', 'Tag 2'] },
								{ id: '2', title: 'Article 2', date: new Date(), content: d, tags: ['Tag 1', 'Tag 2'] },
								{ id: '3', title: 'Article 3', date: new Date(), content: d, tags: ['Tag 1', 'Tag 2'] },
								{ id: '4', title: 'Article 4', date: new Date(), content: d, tags: ['Tag 1', 'Tag 2'] },
							].map((e) => {
								let { id: t = '', title: s = '', date: r = new Date(), content: n = '', tags: d = [] } = e;
								return (0, a.jsxs)(
									'div',
									{
										className: 'rounded-2xl border border-neutral-900 shadow shadow-neutral-900',
										children: [
											(0, a.jsx)('div', { className: 'aspect-video w-full border-b border-neutral-900' }),
											(0, a.jsxs)('div', {
												className: 'flex flex-col gap-y-2 p-4',
												children: [
													(0, a.jsx)('p', { className: 'text-xs text-neutral-500', children: (0, l.Y)(r) }),
													(0, a.jsx)('h1', { className: 'text-lg leading-none font-semibold', children: s }),
													(0, a.jsx)('div', {
														className: 'flex items-center gap-x-2',
														children: d.map((e) =>
															(0, a.jsx)(
																'span',
																{
																	className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
																	children: e,
																},
																e,
															),
														),
													}),
													(0, a.jsx)('p', { className: 'line-clamp-3 text-sm text-neutral-300', children: n }),
													(0, a.jsx)(i(), {
														href: '/news/'.concat(t),
														children: (0, a.jsxs)('div', {
															className: 'flex items-center gap-x-2',
															children: [
																(0, a.jsx)('p', { className: 'text-sm text-yellow-500', children: 'Find out more ' }),
																(0, a.jsx)(c.KiY, { className: 'text-yellow-500' }),
															],
														}),
													}),
												],
											}),
										],
									},
									t,
								);
							}),
						}),
					});
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [89, 636, 593, 792], () => t(8134)), (_N_E = e.O());
	},
]);
