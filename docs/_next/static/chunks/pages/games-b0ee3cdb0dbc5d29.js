(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1],
	{
		3911: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => d });
			var r = s(5640),
				t = s(8377),
				a = s(5549),
				n = s(6440),
				i = s(5089),
				o = s.n(i);
			let d = () =>
				(0, r.jsx)(n.U, {
					activeId: 'games',
					children: (0, r.jsx)('div', {
						className: 'flex flex-col p-4',
						children: (0, r.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								(0, r.jsx)('div', {
									className:
										'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
									children: (0, r.jsxs)('div', {
										className: 'flex h-full w-full flex-col p-4',
										children: [(0, r.jsx)('div', { className: 'grow' }), (0, r.jsx)(a.$, { children: 'Play Now' })],
									}),
								}),
								(0, r.jsx)('h1', { className: 'text-2xl font-black', children: 'Games' }),
								[
									{ id: '1', title: 'Game 1', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '2', title: 'Game 2', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '3', title: 'Game 3', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '4', title: 'Game 4', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '5', title: 'Game 5', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '6', title: 'Game 6', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
								].map((e) => {
									let { id: l = '', title: s = '', description: n = '', category: i = '' } = e;
									return (0, r.jsx)(
										'div',
										{
											className:
												'rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-3 shadow shadow-neutral-900',
											children: (0, r.jsxs)('div', {
												className: 'flex w-full items-center gap-x-4',
												children: [
													(0, r.jsxs)('div', {
														className: 'flex grow items-center gap-x-4 truncate',
														children: [
															(0, r.jsx)('div', {
																className: 'aspect-square h-20 rounded-lg border border-neutral-900',
															}),
															(0, r.jsxs)('div', {
																className: 'flex grow flex-col gap-y-2 truncate',
																children: [
																	(0, r.jsx)('div', {
																		className: 'flex items-center gap-x-2',
																		children: (0, r.jsx)(t.E, { type: 'primary', children: i }),
																	}),
																	(0, r.jsx)('h2', { className: 'text-lg leading-none font-bold', children: s }),
																	(0, r.jsx)('p', { className: 'truncate text-sm leading-none', children: n }),
																],
															}),
														],
													}),
													(0, r.jsx)('div', {
														className: 'shrink-0',
														children: (0, r.jsx)(o(), {
															href: '/games/'.concat(l),
															children: (0, r.jsx)(a.$, { size: 'sm', children: 'Play' }),
														}),
													}),
												],
											}),
										},
										l,
									);
								}),
							],
						}),
					}),
				});
		},
		4302: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games',
				function () {
					return s(3911);
				},
			]);
		},
		5549: (e, l, s) => {
			'use strict';
			s.d(l, { $: () => t, r: () => a });
			var r = s(5640);
			let t = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: t = () => {},
						children: a = (0, r.jsx)(r.Fragment, {}),
					} = e;
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
				},
				a = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: t = () => {},
						children: a = (0, r.jsx)(r.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, r.jsx)('button', {
								type: s,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: t,
								children: a,
							})
						: (0, r.jsx)('button', {
								type: s,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
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
				i = s(5160);
			let o = (e) => {
				let { activeId: l } = e;
				return (0, r.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, r.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, r.jsx)(i.cEk, {}), activeIcon: (0, r.jsx)(i.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, r.jsx)(i.SkF, {}),
								activeIcon: (0, r.jsx)(i.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, r.jsx)(i.Qsx, {}),
								activeIcon: (0, r.jsx)(i.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, r.jsx)(i.rRm, {}),
								activeIcon: (0, r.jsx)(i.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, r.jsx)(i.NMe, {}),
								activeIcon: (0, r.jsx)(i.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: t = '',
									text: a = '',
									icon: i = (0, r.jsx)(r.Fragment, {}),
									activeIcon: o = (0, r.jsx)(r.Fragment, {}),
								} = e,
								d = s === l;
							return (0, r.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, r.jsx)(n(), {
										href: t,
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, r.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, r.jsx)(r.Fragment, { children: o })
														: (0, r.jsx)(r.Fragment, { children: i }),
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
			var d = s(1211),
				c = s(148);
			let x = (e) => {
				let { activeId: l = '', children: s = (0, r.jsx)(r.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, d.j)();
				return (
					(0, c.useEffect)(() => {
						a();
					}, [a]),
					(0, r.jsxs)(t, {
						children: [
							(0, r.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, r.jsx)('h1', { className: 'text-center text-2xl font-semibold', children: 'Mini App' }),
							}),
							(0, r.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, r.jsx)(o, { activeId: l }),
						],
					})
				);
			};
		},
		8377: (e, l, s) => {
			'use strict';
			s.d(l, { E: () => t });
			var r = s(5640);
			let t = (e) => {
				let { type: l = 'primary', children: s = (0, r.jsx)(r.Fragment, {}) } = e;
				return 'success' === l
					? (0, r.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: s,
						})
					: 'error' === l
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
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 636, 593, 792], () => l(4302)), (_N_E = e.O());
	},
]);
