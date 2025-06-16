(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[63],
	{
		4711: (e, l, s) => {
			'use strict';
			s.r(l), s.d(l, { default: () => E });
			var t,
				r = s(5640),
				n = s(8377),
				a = s(5549),
				c = s(3856),
				i = s(2076);
			s(6376);
			var d = s(3441),
				o = s(7595);
			globalThis.Buffer = i.hp;
			o.env.USDT_JETTON_ADDRESS, (null != (t = o.env.TON_WALLET_MNEMONIC) ? t : '').split(' ');
			let x = new d.TonClient({ endpoint: 'https://toncenter.com/api/v2/jsonRPC' });
			var u = s(1851),
				h = s(158),
				p = s(148);
			let j = () => {
				var e;
				let [{ balance: l = BigInt(0) }, s] = (0, p.useState)({ balance: BigInt(0) }),
					[t] = (0, h.Lg)(),
					r = (0, h.c5)(),
					n = null != (e = null == r ? void 0 : r.account.address) ? e : '',
					a = (null == r ? void 0 : r.account.address) ? ''.concat(n.slice(0, 6), '...').concat(n.slice(-4)) : null;
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
						wallet: r,
						connect: () => {
							r || t.openModal();
						},
						disconnect: () => {
							r && t.disconnect();
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
				},
				b = (e) => ('number' != typeof e && 'bigint' != typeof e ? '' : e.toLocaleString('en-US'));
			var g = s(58),
				v = s.n(g),
				N = s(5089),
				y = s.n(N),
				w = s(5160);
			let E = () => {
				var e, l, s;
				let { isAuthenticated: t, user: i } = (0, c.j)(),
					{ balance: d = 0, address: o = '', shortAddress: x, wallet: u, connect: h, disconnect: p } = j(),
					g = ''
						.concat(null != (e = null == i ? void 0 : i.first_name) ? e : '', ' ')
						.concat(null == i ? void 0 : i.last_name)
						.trim();
				return (0, r.jsx)(m.U, {
					activeId: 'profile',
					children: (0, r.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							i &&
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
														children: (0, r.jsx)(v(), {
															src: i.photo_url,
															alt: null != (l = null == i ? void 0 : i.username) ? l : '',
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
															children: ['@', i.username],
														}),
														(0, r.jsx)('div', {
															className: 'flex items-center gap-x-2',
															children: t
																? (0, r.jsx)(n.E, { type: 'success', children: 'Authenticated' })
																: (0, r.jsx)(n.E, { type: 'error', children: 'Unauthenticated' }),
														}),
													],
												}),
											],
										}),
										u
											? (0, r.jsxs)('div', {
													className: 'flex flex-col gap-y-4',
													children: [
														(0, r.jsx)('p', { className: 'text-center text-4xl', children: b(d) }),
														(0, r.jsxs)(a.$, { onClick: () => f(o), children: ['\uD83D\uDD17 ', x] }),
														(0, r.jsx)(a.r, { onClick: p, children: 'Disconnect' }),
													],
												})
											: (0, r.jsx)(a.$, { onClick: h, children: 'Connect TON Wallet' }),
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
											(0, r.jsx)(w.xzC, { className: 'text-xl text-yellow-500' }),
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
											(0, r.jsx)(w.qyE, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Language' }),
										],
									}),
									(0, r.jsxs)('select', {
										id: 'language',
										name: 'language',
										className: 'text-align-last-right appearance-none text-right text-yellow-500',
										defaultValue: null != (s = null == i ? void 0 : i.language_code) ? s : 'en',
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
											(0, r.jsx)(w.JjX, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Version' }),
										],
									}),
									(0, r.jsx)('span', { className: 'text-yellow-500', children: 'v0.0.1' }),
								],
							}),
							(0, r.jsx)('div', { className: 'px-4', children: (0, r.jsx)('hr', { className: 'border-neutral-900' }) }),
							(0, r.jsx)(y(), {
								href: '/profile/privacy-policy',
								children: (0, r.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(w.NMB, { className: 'text-xl text-yellow-500' }),
											(0, r.jsx)('span', { children: 'Privacy Policy' }),
										],
									}),
								}),
							}),
							(0, r.jsx)(y(), {
								href: '/profile/terms-of-use',
								children: (0, r.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-900 bg-neutral-950 px-4 py-2 shadow shadow-neutral-900',
									children: (0, r.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, r.jsx)(w.eF3, { className: 'text-xl text-yellow-500' }),
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
			s.d(l, { $: () => r, r: () => n });
			var t = s(5640);
			let r = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: r = () => {},
						children: n = (0, t.jsx)(t.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
								onClick: r,
								children: n,
							})
						: (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								onClick: r,
								children: n,
							});
				},
				n = (e) => {
					let {
						size: l = 'md',
						type: s = 'button',
						onClick: r = () => {},
						children: n = (0, t.jsx)(t.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, t.jsx)('button', {
								type: s,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: r,
								children: n,
							})
						: (0, t.jsx)('button', {
								type: s,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
								onClick: r,
								children: n,
							});
				};
		},
		6440: (e, l, s) => {
			'use strict';
			s.d(l, { U: () => x });
			var t = s(5640);
			let r = (e) => {
				let { children: l = (0, t.jsx)(t.Fragment, {}) } = e;
				return (0, t.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: l,
				});
			};
			var n = s(5089),
				a = s.n(n),
				c = s(5160);
			let i = (e) => {
				let { activeId: l } = e;
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
									id: s = '',
									href: r = '',
									text: n = '',
									icon: c = (0, t.jsx)(t.Fragment, {}),
									activeIcon: i = (0, t.jsx)(t.Fragment, {}),
								} = e,
								d = s === l;
							return (0, t.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, t.jsx)(a(), {
										href: r,
										children: (0, t.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												d ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, t.jsx)('span', {
													className: 'text-3xl',
													children: d
														? (0, t.jsx)(t.Fragment, { children: i })
														: (0, t.jsx)(t.Fragment, { children: c }),
												}),
												(0, t.jsx)('span', { className: 'text-xs', children: n }),
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
				let { activeId: l = '', children: s = (0, t.jsx)(t.Fragment, {}) } = e,
					{ requestFullscreen: n } = (0, d.j)();
				return (
					(0, o.useEffect)(() => {
						n();
					}, [n]),
					(0, t.jsxs)(r, {
						children: [
							(0, t.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, t.jsx)('h1', { className: 'text-center text-2xl font-semibold', children: 'Mini App' }),
							}),
							(0, t.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, t.jsx)(i, { activeId: l }),
						],
					})
				);
			};
		},
		6678: (e, l, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile',
				function () {
					return s(4711);
				},
			]);
		},
		8377: (e, l, s) => {
			'use strict';
			s.d(l, { E: () => r });
			var t = s(5640);
			let r = (e) => {
				let { type: l = 'primary', children: s = (0, t.jsx)(t.Fragment, {}) } = e;
				return 'success' === l
					? (0, t.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: s,
						})
					: 'error' === l
						? (0, t.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							})
						: (0, t.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: s,
							});
			};
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 210, 636, 593, 792], () => l(6678)), (_N_E = e.O());
	},
]);
