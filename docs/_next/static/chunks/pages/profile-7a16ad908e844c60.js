(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[63],
	{
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
					return s(8887);
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
		8887: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => y });
			var r,
				t = s(5640),
				n = s(8377),
				a = s(5549),
				c = s(1211),
				i = s(2076);
			s(6376);
			var d = s(3441),
				o = s(7595);
			globalThis.Buffer = i.hp;
			o.env.USDT_JETTON_ADDRESS, (null != (r = o.env.TON_WALLET_MNEMONIC) ? r : '').split(' ');
			let x = new d.TonClient({ endpoint: 'https://toncenter.com/api/v2/jsonRPC' });
			var u = s(1851),
				h = s(158),
				p = s(148);
			let j = () => {
				var e;
				let [{ balance: l = BigInt(0) }, s] = (0, p.useState)({ balance: BigInt(0) }),
					[r] = (0, h.Lg)(),
					t = (0, h.c5)(),
					n = null != (e = null == t ? void 0 : t.account.address) ? e : '',
					a = (null == t ? void 0 : t.account.address) ? ''.concat(n.slice(0, 6), '...').concat(n.slice(-4)) : null;
				return (
					(0, p.useEffect)(() => {
						n &&
							(async () => {
								let e = u.Address.parse(n),
									l = await x.getBalance(e);
								s((e) => ({ ...e, balance: l }));
							})();
					}, [n]),
					{
						balance: l,
						address: n,
						shortAddress: a,
						wallet: t,
						connect: () => {
							t && r.openModal();
						},
						disconnect: () => {
							t || r.disconnect();
						},
					}
				);
			};
			var m = s(6440);
			let f = (e) => {
				navigator.clipboard
					.writeText(e)
					.then(() => {
						alert('Copied to clipboard!');
					})
					.catch((e) => {
						console.error('Failed to copy: ', e);
					});
			};
			var v = s(58),
				b = s.n(v),
				g = s(5089),
				N = s.n(g),
				w = s(5160);
			let y = () => {
				var e, l, s;
				let { isAuthenticated: r, user: i } = (0, c.j)(),
					{ address: d, shortAddress: o, wallet: x, connect: u, disconnect: h } = j(),
					p = ''
						.concat(null != (e = null == i ? void 0 : i.first_name) ? e : '', ' ')
						.concat(null == i ? void 0 : i.last_name)
						.trim();
				return (0, t.jsx)(m.U, {
					activeId: 'profile',
					children: (0, t.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							i &&
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsxs)('div', {
											className:
												'flex gap-x-4 rounded-2xl border border-neutral-900 bg-neutral-950 p-4 shadow shadow-neutral-900',
											children: [
												(0, t.jsx)('div', {
													className: 'flex items-center',
													children: (0, t.jsx)('div', {
														className: 'aspect-square w-20 overflow-hidden rounded-full border border-neutral-900',
														children: (0, t.jsx)(b(), {
															src: i.photo_url,
															alt: null != (l = null == i ? void 0 : i.username) ? l : '',
															width: 128,
															height: 128,
														}),
													}),
												}),
												(0, t.jsxs)('div', {
													className: 'flex grow flex-col justify-center gap-y-2 truncate',
													children: [
														(0, t.jsx)('p', { className: 'truncate text-xl leading-none font-black', children: p }),
														(0, t.jsxs)('p', {
															className: 'truncate text-sm leading-none',
															children: ['@', i.username],
														}),
														(0, t.jsx)('div', {
															className: 'flex items-center gap-x-2',
															children: r
																? (0, t.jsx)(n.E, { type: 'success', children: 'Authenticated' })
																: (0, t.jsx)(n.E, { type: 'error', children: 'Unauthenticated' }),
														}),
													],
												}),
											],
										}),
										x
											? (0, t.jsxs)('div', {
													className: 'flex flex-col gap-y-4',
													children: [
														(0, t.jsxs)(a.$, { onClick: () => f(d), children: ['\uD83D\uDD17 ', o] }),
														(0, t.jsx)(a.r, { onClick: h, children: 'Disconnect' }),
													],
												})
											: (0, t.jsx)(a.$, { onClick: u, children: 'Connect TON Wallet' }),
										(0, t.jsx)('div', {
											className: 'px-4',
											children: (0, t.jsx)('hr', { className: 'border-neutral-900' }),
										}),
									],
								}),
							(0, t.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, t.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, t.jsx)(w.xzC, { className: 'text-xl text-yellow-500' }),
											(0, t.jsx)('span', { children: 'Currency' }),
										],
									}),
									(0, t.jsxs)('select', {
										id: 'currency',
										name: 'currency',
										className: 'text-align-last-right appearance-none text-right text-yellow-500',
										defaultValue: 'USD',
										children: [
											(0, t.jsxs)('optgroup', {
												label: 'Asia',
												children: [
													(0, t.jsx)('option', { value: 'CNY', children: 'CNY' }),
													(0, t.jsx)('option', { value: 'JPY', children: 'JPY' }),
													(0, t.jsx)('option', { value: 'KRW', children: 'KRW' }),
													(0, t.jsx)('option', { value: 'VND', children: 'VND' }),
												],
											}),
											(0, t.jsxs)('optgroup', {
												label: 'Europe',
												children: [
													(0, t.jsx)('option', { value: 'EUR', children: 'EUR' }),
													(0, t.jsx)('option', { value: 'GBP', children: 'GBP' }),
												],
											}),
											(0, t.jsxs)('optgroup', {
												label: 'North America',
												children: [
													(0, t.jsx)('option', { value: 'CAD', children: 'CAD' }),
													(0, t.jsx)('option', { value: 'USD', children: 'USD' }),
												],
											}),
											(0, t.jsx)('optgroup', {
												label: 'Oceania',
												children: (0, t.jsx)('option', { value: 'AUD', children: 'AUD' }),
											}),
										],
									}),
								],
							}),
							(0, t.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, t.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, t.jsx)(w.qyE, { className: 'text-xl text-yellow-500' }),
											(0, t.jsx)('span', { children: 'Language' }),
										],
									}),
									(0, t.jsxs)('select', {
										id: 'language',
										name: 'language',
										className: 'text-align-last-right appearance-none text-right text-yellow-500',
										defaultValue: null != (s = null == i ? void 0 : i.language_code) ? s : 'en',
										disabled: !0,
										children: [
											(0, t.jsx)('option', { value: 'en', children: 'English' }),
											(0, t.jsx)('option', { value: 'de', children: 'Deutsch' }),
											(0, t.jsx)('option', { value: 'kr', children: '한글' }),
										],
									}),
								],
							}),
							(0, t.jsxs)('div', {
								className:
									'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
								children: [
									(0, t.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, t.jsx)(w.JjX, { className: 'text-xl text-yellow-500' }),
											(0, t.jsx)('span', { children: 'Version' }),
										],
									}),
									(0, t.jsx)('span', { className: 'text-yellow-500', children: 'v0.0.1' }),
								],
							}),
							(0, t.jsx)('div', { className: 'px-4', children: (0, t.jsx)('hr', { className: 'border-neutral-900' }) }),
							(0, t.jsx)(N(), {
								href: '/profile/privacy-policy',
								children: (0, t.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, t.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, t.jsx)(w.NMB, { className: 'text-xl text-yellow-500' }),
											(0, t.jsx)('span', { children: 'Privacy Policy' }),
										],
									}),
								}),
							}),
							(0, t.jsx)(N(), {
								href: '/profile/terms-of-use',
								children: (0, t.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, t.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, t.jsx)(w.eF3, { className: 'text-xl text-yellow-500' }),
											(0, t.jsx)('span', { children: 'Terms of Use' }),
										],
									}),
								}),
							}),
						],
					}),
				});
			};
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 210, 636, 593, 792], () => l(6678)), (_N_E = e.O());
	},
]);
