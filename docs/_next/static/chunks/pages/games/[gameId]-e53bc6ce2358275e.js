(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[103],
	{
		492: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => d });
			var n = t(5640),
				s = t(9569),
				l = t(6194),
				a = t(2461),
				o = t(6826),
				c = t.n(o),
				i = t(1238);
			let d = () => {
				let e = (0, l.I)('gameId');
				return (0, n.jsx)(a.U, {
					activeId: 'store',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, n.jsx)(c(), {
								href: '/store',
								children: (0, n.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, n.jsx)(i.FZc, {}),
										(0, n.jsx)('span', { className: 'font-medium', children: 'Games' }),
									],
								}),
							}),
							(0, n.jsx)('div', {
								className: 'aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, n.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, n.jsx)('div', { children: (0, n.jsx)(s.E, { children: 'Category' }) }),
									(0, n.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Game ', e] }),
									(0, n.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
								],
							}),
							(0, n.jsx)('button', {
								className: 'cursor-pointer rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								children: 'Play Now',
							}),
						],
					}),
				});
			};
		},
		2461: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => i });
			var n = t(5640);
			let s = (e) => {
				let { children: r = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: r,
				});
			};
			var l = t(6826),
				a = t.n(l),
				o = t(1238);
			let c = (e) => {
					let { activeId: r } = e;
					return (0, n.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, n.jsx)('div', {
							className: 'grid grid-cols-5',
							children: [
								{ id: 'home', href: '/', icon: (0, n.jsx)(o.cEk, {}), activeIcon: (0, n.jsx)(o.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, n.jsx)(o.SkF, {}),
									activeIcon: (0, n.jsx)(o.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, n.jsx)(o.Qsx, {}),
									activeIcon: (0, n.jsx)(o.XsE, {}),
									text: 'Store',
								},
								{
									id: 'news',
									href: '/news',
									icon: (0, n.jsx)(o.rRm, {}),
									activeIcon: (0, n.jsx)(o.mKO, {}),
									text: 'News',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, n.jsx)(o.NMe, {}),
									activeIcon: (0, n.jsx)(o.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: s = '',
										text: l = '',
										icon: o = (0, n.jsx)(n.Fragment, {}),
										activeIcon: c = (0, n.jsx)(n.Fragment, {}),
									} = e,
									i = t === r;
								return (0, n.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, n.jsx)(a(), {
											href: s,
											children: (0, n.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, n.jsx)('span', {
														className: 'text-3xl',
														children: i
															? (0, n.jsx)(n.Fragment, { children: c })
															: (0, n.jsx)(n.Fragment, { children: o }),
													}),
													(0, n.jsx)('span', { className: 'text-xs', children: l }),
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
				i = (e) => {
					let { activeId: r = '', children: t = (0, n.jsx)(n.Fragment, {}) } = e;
					return (0, n.jsxs)(s, {
						children: [
							(0, n.jsx)('header', {
								className: 'border-b border-neutral-900 pt-8 pb-4',
								children: (0, n.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, n.jsx)(c, { activeId: r }),
						],
					});
				};
		},
		6149: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games/[gameId]',
				function () {
					return t(492);
				},
			]);
		},
		6194: (e, r, t) => {
			'use strict';
			t.d(r, { I: () => s });
			var n = t(7871);
			let s = (e) => {
				var r, t;
				let { query: s } = (0, n.useRouter)(),
					l = null != (r = new Map(Object.entries(s)).get(e)) ? r : '';
				return Array.isArray(l) ? (null != (t = l.at(0)) ? t : '') : l;
			};
		},
		7182: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => d });
			var n = t(148),
				s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				l = n.createContext && n.createContext(s),
				a = ['attr', 'size', 'title'];
			function o() {
				return (o = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, n);
				}
				return t;
			}
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? c(Object(t), !0).forEach(function (r) {
								var n, s, l;
								(n = e),
									(s = r),
									(l = t[r]),
									(s = (function (e) {
										var r = (function (e, r) {
											if ('object' != typeof e || !e) return e;
											var t = e[Symbol.toPrimitive];
											if (void 0 !== t) {
												var n = t.call(e, r || 'default');
												if ('object' != typeof n) return n;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === r ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof r ? r : r + '';
									})(s)) in n
										? Object.defineProperty(n, s, { value: l, enumerable: !0, configurable: !0, writable: !0 })
										: (n[s] = l);
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
					n.createElement(
						u,
						o({ attr: i({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => n.createElement(r.tag, i({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function u(e) {
				var r = (r) => {
					var t,
						{ attr: s, size: l, title: c } = e,
						d = (function (e, r) {
							if (null == e) return {};
							var t,
								n,
								s = (function (e, r) {
									if (null == e) return {};
									var t = {};
									for (var n in e)
										if (Object.prototype.hasOwnProperty.call(e, n)) {
											if (r.indexOf(n) >= 0) continue;
											t[n] = e[n];
										}
									return t;
								})(e, r);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (n = 0; n < l.length; n++)
									(t = l[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t]);
							}
							return s;
						})(e, a),
						u = l || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						n.createElement(
							'svg',
							o({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, s, d, {
								className: t,
								style: i(i({ color: e.color || r.color }, r.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && n.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== l ? n.createElement(l.Consumer, null, (e) => r(e)) : r(s);
			}
		},
		7871: (e, r, t) => {
			e.exports = t(9743);
		},
		9569: (e, r, t) => {
			'use strict';
			t.d(r, { E: () => s });
			var n = t(5640);
			let s = (e) => {
				let { children: r = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('span', {
					className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
					children: r,
				});
			};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 826, 636, 593, 792], () => r(6149)), (_N_E = e.O());
	},
]);
