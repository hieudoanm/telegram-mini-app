(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[63],
	{
		4660: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => m });
			var r = s(5640),
				t = s(8377),
				n = s(5549),
				a = s(1211),
				c = s(158);
			let i = () => {
				var e;
				let [l] = (0, c.Lg)(),
					s = (0, c.c5)(),
					r = null != (e = null == s ? void 0 : s.account.address) ? e : '',
					t = (null == s ? void 0 : s.account.address) ? ''.concat(r.slice(0, 6), '...').concat(r.slice(-4)) : null;
				return {
					address: r,
					shortAddress: t,
					wallet: s,
					connect: () => {
						s && l.openModal();
					},
					disconnect: () => {
						s || l.openModal();
					},
				};
			};
			var d = s(6440);
			let o = (e) => {
				navigator.clipboard
					.writeText(e)
					.then(() => {
						alert('Copied to clipboard!');
					})
					.catch((e) => {
						console.error('Failed to copy: ', e);
					});
			};
			var x = s(58),
				u = s.n(x),
				h = s(5089),
				p = s.n(h),
				j = s(5160);
			let m = () => {
				var e, l, s;
				let { isAuthenticated: c, user: x } = (0, a.j)(),
					{ address: h, shortAddress: m, wallet: f, connect: b, disconnect: v } = i(),
					g = ''
						.concat(null != (e = null == x ? void 0 : x.first_name) ? e : '', ' ')
						.concat(null == x ? void 0 : x.last_name)
						.trim();
				return (0, r.jsx)(d.U, {
					activeId: 'profile',
					children: (0, r.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							x &&
								(0, r.jsxs)(r.Fragment, {
									children: [
										(0, r.jsxs)('div', {
											className:
												'flex gap-x-4 rounded-2xl border border-neutral-900 bg-neutral-950 p-4 shadow shadow-neutral-900',
											children: [
												(0, r.jsx)('div', {
													className: 'flex items-center',
													children: (0, r.jsx)('div', {
														className: 'aspect-square w-20 overflow-hidden rounded-full border border-neutral-900',
														children: (0, r.jsx)(u(), {
															src: x.photo_url,
															alt: null != (l = null == x ? void 0 : x.username) ? l : '',
															width: 128,
															height: 128,
														}),
													}),
												}),
												(0, r.jsxs)('div', {
													className: 'flex grow flex-col justify-center gap-y-2 truncate',
													children: [
														(0, r.jsx)('p', { className: 'truncate text-xl leading-none font-black', children: g }),
														(0, r.jsxs)('p', {
															className: 'truncate text-sm leading-none',
															children: ['@', x.username],
														}),
														(0, r.jsx)('div', {
															className: 'flex items-center gap-x-2',
															children: c
																? (0, r.jsx)(t.E, { type: 'success', children: 'Authenticated' })
																: (0, r.jsx)(t.E, { type: 'error', children: 'Unauthenticated' }),
														}),
													],
												}),
											],
										}),
										f
											? (0, r.jsxs)('div', {
													className: 'flex flex-col gap-y-4',
													children: [
														(0, r.jsxs)(n.$, { onClick: () => o(h), children: ['\uD83D\uDD17 ', m] }),
														(0, r.jsx)(n.r, { onClick: v, children: 'Disconnect' }),
													],
												})
											: (0, r.jsx)(n.$, { onClick: b, children: 'Connect TON Wallet' }),
										(0, r.jsx)('div', {
											className: 'px-4',
											children: (0, r.jsx)('hr', { className: 'border-neutral-900' }),
										}),
									],
								}),
							(0, r.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(j.xzC, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Currency' }),
										],
									}),
									(0, r.jsxs)('select', {
										id: 'currency',
										name: 'currency',
										className: 'text-align-last-right appearance-none text-right text-yellow-500',
										defaultValue: 'USD',
										children: [
											(0, r.jsxs)('optgroup', {
												label: 'Asia',
												children: [
													(0, r.jsx)('option', { value: 'CNY', children: 'CNY' }),
													(0, r.jsx)('option', { value: 'JPY', children: 'JPY' }),
													(0, r.jsx)('option', { value: 'KRW', children: 'KRW' }),
													(0, r.jsx)('option', { value: 'VND', children: 'VND' }),
												],
											}),
											(0, r.jsxs)('optgroup', {
												label: 'Europe',
												children: [
													(0, r.jsx)('option', { value: 'EUR', children: 'EUR' }),
													(0, r.jsx)('option', { value: 'GBP', children: 'GBP' }),
												],
											}),
											(0, r.jsxs)('optgroup', {
												label: 'North America',
												children: [
													(0, r.jsx)('option', { value: 'CAD', children: 'CAD' }),
													(0, r.jsx)('option', { value: 'USD', children: 'USD' }),
												],
											}),
											(0, r.jsx)('optgroup', {
												label: 'Oceania',
												children: (0, r.jsx)('option', { value: 'AUD', children: 'AUD' }),
											}),
										],
									}),
								],
							}),
							(0, r.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(j.qyE, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Language' }),
										],
									}),
									(0, r.jsxs)('select', {
										id: 'language',
										name: 'language',
										className: 'text-align-last-right appearance-none text-right text-yellow-500',
										defaultValue: null != (s = null == x ? void 0 : x.language_code) ? s : 'en',
										disabled: !0,
										children: [
											(0, r.jsx)('option', { value: 'en', children: 'English' }),
											(0, r.jsx)('option', { value: 'de', children: 'Deutsch' }),
											(0, r.jsx)('option', { value: 'kr', children: '한글' }),
										],
									}),
								],
							}),
							(0, r.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(j.JjX, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Version' }),
										],
									}),
									(0, r.jsx)('span', { className: 'text-yellow-500', children: 'v0.0.1' }),
								],
							}),
							(0, r.jsx)('div', { className: 'px-4', children: (0, r.jsx)('hr', { className: 'border-neutral-900' }) }),
							(0, r.jsx)(p(), {
								href: '/profile/privacy-policy',
								children: (0, r.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(j.NMB, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Privacy Policy' }),
										],
									}),
								}),
							}),
							(0, r.jsx)(p(), {
								href: '/profile/terms-of-use',
								children: (0, r.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(j.eF3, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Terms of Use' }),
										],
									}),
								}),
							}),
						],
					}),
				});
			};
		},
		5549: (e, l, s) => {
			'use strict';
			s.d(l, { $: () => t, r: () => n });
			var r = s(5640);
			let t = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: t = () => {},
						children: n = (0, r.jsx)(r.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, r.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
								onClick: t,
								children: n,
							})
						: (0, r.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								onClick: t,
								children: n,
							});
				},
				n = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: t = () => {},
						children: n = (0, r.jsx)(r.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, r.jsx)('button', {
								type: s,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: t,
								children: n,
							})
						: (0, r.jsx)('button', {
								type: s,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
								onClick: t,
								children: n,
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
			var n = s(5089),
				a = s.n(n),
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
									text: n = '',
									icon: c = (0, r.jsx)(r.Fragment, {}),
									activeIcon: i = (0, r.jsx)(r.Fragment, {}),
								} = e,
								d = s === l;
							return (0, r.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, r.jsx)(a(), {
										href: t,
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, r.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, r.jsx)(r.Fragment, { children: i })
														: (0, r.jsx)(r.Fragment, { children: c }),
												}),
												(0, r.jsx)('span', { className: 'text-xs', children: n }),
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
			let x = (e) => {
				let { activeId: l = '', children: s = (0, r.jsx)(r.Fragment, {}) } = e,
					{ requestFullscreen: n } = (0, d.j)();
				return (
					(0, o.useEffect)(() => {
						n();
					}, [n]),
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
		6678: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile',
				function () {
					return s(4660);
				},
			]);
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
		e.O(0, [89, 58, 636, 593, 792], () => l(6678)), (_N_E = e.O());
	},
]);
