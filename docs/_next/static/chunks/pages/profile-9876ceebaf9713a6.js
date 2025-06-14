(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[63],
	{
		2461: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => o });
			var s = t(5640);
			let l = (e) => {
				let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col border border-neutral-800',
					children: r,
				});
			};
			var n = t(6826),
				a = t.n(n),
				i = t(1238);
			let c = (e) => {
					let { activeId: r } = e;
					return (0, s.jsx)('nav', {
						className: 'border-t border-neutral-800',
						children: (0, s.jsx)('div', {
							className: 'grid grid-cols-4',
							children: [
								{ id: 'home', href: '/', icon: (0, s.jsx)(i.cEk, {}), activeIcon: (0, s.jsx)(i.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, s.jsx)(i.SkF, {}),
									activeIcon: (0, s.jsx)(i.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, s.jsx)(i.Qsx, {}),
									activeIcon: (0, s.jsx)(i.XsE, {}),
									text: 'Store',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, s.jsx)(i.NMe, {}),
									activeIcon: (0, s.jsx)(i.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: l = '',
										text: n = '',
										icon: i = (0, s.jsx)(s.Fragment, {}),
										activeIcon: c = (0, s.jsx)(s.Fragment, {}),
									} = e,
									o = t === r;
								return (0, s.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, s.jsx)(a(), {
											href: l,
											children: (0, s.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 py-4',
												children: [
													(0, s.jsx)('span', {
														className: 'text-3xl',
														children: o
															? (0, s.jsx)(s.Fragment, { children: c })
															: (0, s.jsx)(s.Fragment, { children: i }),
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
				},
				o = (e) => {
					let { activeId: r = '', children: t = (0, s.jsx)(s.Fragment, {}) } = e;
					return (0, s.jsxs)(l, {
						children: [
							(0, s.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, s.jsx)(c, { activeId: r }),
						],
					});
				};
		},
		7182: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => d });
			var s = t(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				n = s.createContext && s.createContext(l),
				a = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					r &&
						(s = s.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, s);
				}
				return t;
			}
			function o(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? c(Object(t), !0).forEach(function (r) {
								var s, l, n;
								(s = e),
									(l = r),
									(n = t[r]),
									(l = (function (e) {
										var r = (function (e, r) {
											if ('object' != typeof e || !e) return e;
											var t = e[Symbol.toPrimitive];
											if (void 0 !== t) {
												var s = t.call(e, r || 'default');
												if ('object' != typeof s) return s;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === r ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof r ? r : r + '';
									})(l)) in s
										? Object.defineProperty(s, l, { value: n, enumerable: !0, configurable: !0, writable: !0 })
										: (s[l] = n);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: c(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
								});
				}
				return e;
			}
			function d(e) {
				return (r) =>
					s.createElement(
						x,
						i({ attr: o({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => s.createElement(r.tag, o({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function x(e) {
				var r = (r) => {
					var t,
						{ attr: l, size: n, title: c } = e,
						d = (function (e, r) {
							if (null == e) return {};
							var t,
								s,
								l = (function (e, r) {
									if (null == e) return {};
									var t = {};
									for (var s in e)
										if (Object.prototype.hasOwnProperty.call(e, s)) {
											if (r.indexOf(s) >= 0) continue;
											t[s] = e[s];
										}
									return t;
								})(e, r);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(e);
								for (s = 0; s < n.length; s++)
									(t = n[s]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
							}
							return l;
						})(e, a),
						x = n || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						s.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, l, d, {
								className: t,
								style: o(o({ color: e.color || r.color }, r.style), e.style),
								height: x,
								width: x,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && s.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== n ? s.createElement(n.Consumer, null, (e) => r(e)) : r(l);
			}
		},
		7733: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile',
				function () {
					return t(9140);
				},
			]);
		},
		9140: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => a });
			var s = t(5640),
				l = t(2461),
				n = t(1238);
			let a = () =>
				(0, s.jsx)(l.U, {
					activeId: 'profile',
					children: (0, s.jsx)('div', {
						className: 'p-8',
						children: (0, s.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								(0, s.jsxs)('div', {
									className: 'flex gap-x-4 rounded-2xl border border-neutral-800 p-4 shadow shadow-neutral-800',
									children: [
										(0, s.jsx)('div', {
											className: 'flex items-center',
											children: (0, s.jsx)('div', {
												className: 'aspect-square w-24 overflow-hidden rounded-full border border-neutral-800',
											}),
										}),
										(0, s.jsxs)('div', {
											className: 'flex grow flex-col justify-center gap-y-1 truncate',
											children: [
												(0, s.jsx)('p', { className: 'truncate', children: '@username - First Last' }),
												(0, s.jsx)('p', { className: 'text-xl font-black', children: '$0.00' }),
												(0, s.jsx)('div', {
													children: (0, s.jsx)('button', {
														className:
															'cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
														children: 'Deposit',
													}),
												}),
											],
										}),
									],
								}),
								(0, s.jsx)('div', {
									className: 'px-4',
									children: (0, s.jsx)('hr', { className: 'border-neutral-800' }),
								}),
								(0, s.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800',
									children: [
										(0, s.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, s.jsx)(n.xzC, { className: 'text-xl text-yellow-500' }),
												(0, s.jsx)('span', { children: 'Currency' }),
											],
										}),
										(0, s.jsxs)('select', {
											id: 'currency',
											name: 'currency',
											className: 'appearance-none text-yellow-500',
											children: [
												(0, s.jsxs)('optgroup', {
													label: 'Asia',
													children: [
														(0, s.jsx)('option', { value: 'CNY', children: 'CNY' }),
														(0, s.jsx)('option', { value: 'JPY', children: 'JPY' }),
														(0, s.jsx)('option', { value: 'KRW', children: 'KRW' }),
														(0, s.jsx)('option', { value: 'VND', children: 'VND' }),
													],
												}),
												(0, s.jsxs)('optgroup', {
													label: 'Europe',
													children: [
														(0, s.jsx)('option', { value: 'EUR', children: 'EUR' }),
														(0, s.jsx)('option', { value: 'GBP', children: 'GBP' }),
													],
												}),
												(0, s.jsxs)('optgroup', {
													label: 'North America',
													children: [
														(0, s.jsx)('option', { value: 'CAD', children: 'CAD' }),
														(0, s.jsx)('option', { value: 'USD', children: 'USD' }),
													],
												}),
												(0, s.jsx)('optgroup', {
													label: 'Oceania',
													children: (0, s.jsx)('option', { value: 'AUD', children: 'AUD' }),
												}),
											],
										}),
									],
								}),
								(0, s.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800',
									children: [
										(0, s.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, s.jsx)(n.qyE, { className: 'text-xl text-yellow-500' }),
												(0, s.jsx)('span', { children: 'Language' }),
											],
										}),
										(0, s.jsxs)('select', {
											id: 'language',
											name: 'language',
											className: 'appearance-none text-yellow-500',
											children: [
												(0, s.jsx)('option', { value: 'en', children: 'English' }),
												(0, s.jsx)('option', { value: 'de', children: 'Deutsch' }),
												(0, s.jsx)('option', { value: 'kr', children: '한글' }),
											],
										}),
									],
								}),
								(0, s.jsxs)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800',
									children: [
										(0, s.jsxs)('div', {
											className: 'flex items-center gap-x-2',
											children: [
												(0, s.jsx)(n.JjX, { className: 'text-xl text-yellow-500' }),
												(0, s.jsx)('span', { children: 'Version' }),
											],
										}),
										(0, s.jsx)('span', { className: 'text-yellow-500', children: 'v0.0.1' }),
									],
								}),
								(0, s.jsx)('div', {
									className: 'px-4',
									children: (0, s.jsx)('hr', { className: 'border-neutral-800' }),
								}),
								(0, s.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800',
									children: (0, s.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, s.jsx)(n.NMB, { className: 'text-xl text-yellow-500' }),
											(0, s.jsx)('span', { children: 'Privacy Policy' }),
										],
									}),
								}),
								(0, s.jsx)('div', {
									className:
										'flex items-center justify-between rounded-full border border-neutral-800 px-4 py-2 shadow shadow-neutral-800',
									children: (0, s.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, s.jsx)(n.eF3, { className: 'text-xl text-yellow-500' }),
											(0, s.jsx)('span', { children: 'Terms of Service' }),
										],
									}),
								}),
							],
						}),
					}),
				});
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 826, 636, 593, 792], () => r(7733)), (_N_E = e.O());
	},
]);
