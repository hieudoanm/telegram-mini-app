(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[63],
	{
		2461: (e, l, s) => {
			'use strict';
			s.d(l, { U: () => d });
			var a = s(5640);
			let r = (e) => {
				let { children: l = (0, a.jsx)(a.Fragment, {}) } = e;
				return (0, a.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: l,
				});
			};
			var n = s(6826),
				t = s.n(n),
				i = s(1238);
			let c = (e) => {
					let { activeId: l } = e;
					return (0, a.jsx)('nav', {
						className: 'bg-neutral-900',
						children: (0, a.jsx)('div', {
							className: 'grid grid-cols-4',
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
										text: n = '',
										icon: i = (0, a.jsx)(a.Fragment, {}),
										activeIcon: c = (0, a.jsx)(a.Fragment, {}),
									} = e,
									d = s === l;
								return (0, a.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, a.jsx)(t(), {
											href: r,
											children: (0, a.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 py-4',
												children: [
													(0, a.jsx)('span', {
														className: 'text-3xl',
														children: d
															? (0, a.jsx)(a.Fragment, { children: c })
															: (0, a.jsx)(a.Fragment, { children: i }),
													}),
													(0, a.jsx)('span', { className: 'text-xs', children: n }),
												],
											}),
										}),
									},
									s,
								);
							}),
						}),
					});
				},
				d = (e) => {
					let { activeId: l = '', children: s = (0, a.jsx)(a.Fragment, {}) } = e;
					return (0, a.jsxs)(r, {
						children: [
							(0, a.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, a.jsx)(c, { activeId: l }),
						],
					});
				};
		},
		7733: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile',
				function () {
					return s(9140);
				},
			]);
		},
		9140: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => d });
			var a = s(5640),
				r = s(1158),
				n = s(2461),
				t = s(9343),
				i = s.n(t),
				c = s(1238);
			let d = () => {
				var e, l, s;
				let { isAuthenticated: t, user: d } = (0, r.O)(),
					x = ''
						.concat(null != (e = null == d ? void 0 : d.first_name) ? e : '', ' ')
						.concat(null == d ? void 0 : d.last_name)
						.trim();
				return (0, a.jsx)(n.U, {
					activeId: 'profile',
					children: (0, a.jsx)('div', {
						className: 'p-4',
						children: (0, a.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								d &&
									(0, a.jsxs)(a.Fragment, {
										children: [
											(0, a.jsxs)('div', {
												className:
													'flex gap-x-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow shadow-neutral-900',
												children: [
													(0, a.jsx)('div', {
														className: 'flex items-center',
														children: (0, a.jsx)('div', {
															className: 'aspect-square w-20 overflow-hidden rounded-full border border-neutral-800',
															children: (0, a.jsx)(i(), {
																src: d.photo_url,
																alt: null != (l = null == d ? void 0 : d.username) ? l : '',
																width: 128,
																height: 128,
															}),
														}),
													}),
													(0, a.jsxs)('div', {
														className: 'flex grow flex-col justify-center gap-y-2 truncate',
														children: [
															(0, a.jsx)('p', { className: 'truncate text-xl leading-none font-black', children: x }),
															(0, a.jsxs)('p', {
																className: 'truncate text-sm leading-none',
																children: ['@', d.username],
															}),
															(0, a.jsx)('div', {
																children: t
																	? (0, a.jsx)('div', {
																			className:
																				'inline-block rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-100',
																			children: 'Authenticated',
																		})
																	: (0, a.jsx)('div', {
																			className:
																				'inline-block rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-100',
																			children: 'Unauthenticated',
																		}),
															}),
														],
													}),
												],
											}),
											(0, a.jsx)('div', {
												className: 'px-4',
												children: (0, a.jsx)('hr', { className: 'border-neutral-900' }),
											}),
										],
									}),
								(0, a.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 shadow shadow-neutral-900',
									children: [
										(0, a.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, a.jsx)(c.xzC, { className: 'text-xl text-yellow-500' }),
												(0, a.jsx)('span', { children: 'Currency' }),
											],
										}),
										(0, a.jsxs)('select', {
											id: 'currency',
											name: 'currency',
											className: 'text-align-last-right appearance-none text-right text-yellow-500',
											defaultValue: 'USD',
											children: [
												(0, a.jsxs)('optgroup', {
													label: 'Asia',
													children: [
														(0, a.jsx)('option', { value: 'CNY', children: 'CNY' }),
														(0, a.jsx)('option', { value: 'JPY', children: 'JPY' }),
														(0, a.jsx)('option', { value: 'KRW', children: 'KRW' }),
														(0, a.jsx)('option', { value: 'VND', children: 'VND' }),
													],
												}),
												(0, a.jsxs)('optgroup', {
													label: 'Europe',
													children: [
														(0, a.jsx)('option', { value: 'EUR', children: 'EUR' }),
														(0, a.jsx)('option', { value: 'GBP', children: 'GBP' }),
													],
												}),
												(0, a.jsxs)('optgroup', {
													label: 'North America',
													children: [
														(0, a.jsx)('option', { value: 'CAD', children: 'CAD' }),
														(0, a.jsx)('option', { value: 'USD', children: 'USD' }),
													],
												}),
												(0, a.jsx)('optgroup', {
													label: 'Oceania',
													children: (0, a.jsx)('option', { value: 'AUD', children: 'AUD' }),
												}),
											],
										}),
									],
								}),
								(0, a.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 shadow shadow-neutral-900',
									children: [
										(0, a.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, a.jsx)(c.qyE, { className: 'text-xl text-yellow-500' }),
												(0, a.jsx)('span', { children: 'Language' }),
											],
										}),
										(0, a.jsxs)('select', {
											id: 'language',
											name: 'language',
											className: 'text-align-last-right appearance-none text-right text-yellow-500',
											defaultValue: null != (s = null == d ? void 0 : d.language_code) ? s : 'en',
											disabled: !0,
											children: [
												(0, a.jsx)('option', { value: 'en', children: 'English' }),
												(0, a.jsx)('option', { value: 'de', children: 'Deutsch' }),
												(0, a.jsx)('option', { value: 'kr', children: '한글' }),
											],
										}),
									],
								}),
								(0, a.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 shadow shadow-neutral-900',
									children: [
										(0, a.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, a.jsx)(c.JjX, { className: 'text-xl text-yellow-500' }),
												(0, a.jsx)('span', { children: 'Version' }),
											],
										}),
										(0, a.jsx)('span', { className: 'text-yellow-500', children: 'v0.0.1' }),
									],
								}),
								(0, a.jsx)('div', {
									className: 'px-4',
									children: (0, a.jsx)('hr', { className: 'border-neutral-900' }),
								}),
								(0, a.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 shadow shadow-neutral-900',
									children: (0, a.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, a.jsx)(c.NMB, { className: 'text-xl text-yellow-500' }),
											(0, a.jsx)('span', { children: 'Privacy Policy' }),
										],
									}),
								}),
								(0, a.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 shadow shadow-neutral-900',
									children: (0, a.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, a.jsx)(c.eF3, { className: 'text-xl text-yellow-500' }),
											(0, a.jsx)('span', { children: 'Terms of Service' }),
										],
									}),
								}),
							],
						}),
					}),
				});
			};
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [72, 826, 312, 636, 593, 792], () => l(7733)), (_N_E = e.O());
	},
]);
