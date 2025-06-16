(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[900],
	{
		1355: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store/[itemId]',
				function () {
					return r(9943);
				},
			]);
		},
		2461: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => o });
			var n = r(5640);
			let s = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var l = r(6826),
				a = r.n(l),
				c = r(1238);
			let i = (e) => {
					let { activeId: t } = e;
					return (0, n.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, n.jsx)('div', {
							className: 'grid grid-cols-5',
							children: [
								{ id: 'home', href: '/', icon: (0, n.jsx)(c.cEk, {}), activeIcon: (0, n.jsx)(c.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, n.jsx)(c.SkF, {}),
									activeIcon: (0, n.jsx)(c.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, n.jsx)(c.Qsx, {}),
									activeIcon: (0, n.jsx)(c.XsE, {}),
									text: 'Store',
								},
								{
									id: 'news',
									href: '/news',
									icon: (0, n.jsx)(c.rRm, {}),
									activeIcon: (0, n.jsx)(c.mKO, {}),
									text: 'News',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, n.jsx)(c.NMe, {}),
									activeIcon: (0, n.jsx)(c.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: r = '',
										href: s = '',
										text: l = '',
										icon: c = (0, n.jsx)(n.Fragment, {}),
										activeIcon: i = (0, n.jsx)(n.Fragment, {}),
									} = e,
									o = r === t;
								return (0, n.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, n.jsx)(a(), {
											href: s,
											children: (0, n.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													o ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, n.jsx)('span', {
														className: 'text-3xl',
														children: o
															? (0, n.jsx)(n.Fragment, { children: i })
															: (0, n.jsx)(n.Fragment, { children: c }),
													}),
													(0, n.jsx)('span', { className: 'text-xs', children: l }),
												],
											}),
										}),
									},
									r,
								);
							}),
						}),
					});
				},
				o = (e) => {
					let { activeId: t = '', children: r = (0, n.jsx)(n.Fragment, {}) } = e;
					return (0, n.jsxs)(s, {
						children: [
							(0, n.jsx)('header', {
								className: 'border-b border-neutral-900 pt-8 pb-4',
								children: (0, n.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(i, { activeId: t }),
						],
					});
				};
		},
		6194: (e, t, r) => {
			'use strict';
			r.d(t, { I: () => s });
			var n = r(7871);
			let s = (e) => {
				var t, r;
				let { query: s } = (0, n.useRouter)(),
					l = null != (t = new Map(Object.entries(s)).get(e)) ? t : '';
				return Array.isArray(l) ? (null != (r = l.at(0)) ? r : '') : l;
			};
		},
		7182: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => d });
			var n = r(148),
				s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				l = n.createContext && n.createContext(s),
				a = ['attr', 'size', 'title'];
			function c() {
				return (c = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
							}
							return e;
						}).apply(this, arguments);
			}
			function i(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								var n, s, l;
								(n = e),
									(s = t),
									(l = r[t]),
									(s = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var r = e[Symbol.toPrimitive];
											if (void 0 !== r) {
												var n = r.call(e, t || 'default');
												if ('object' != typeof n) return n;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(s)) in n
										? Object.defineProperty(n, s, { value: l, enumerable: !0, configurable: !0, writable: !0 })
										: (n[s] = l);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function d(e) {
				return (t) =>
					n.createElement(
						u,
						c({ attr: o({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, o({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function u(e) {
				var t = (t) => {
					var r,
						{ attr: s, size: l, title: i } = e,
						d = (function (e, t) {
							if (null == e) return {};
							var r,
								n,
								s = (function (e, t) {
									if (null == e) return {};
									var r = {};
									for (var n in e)
										if (Object.prototype.hasOwnProperty.call(e, n)) {
											if (t.indexOf(n) >= 0) continue;
											r[n] = e[n];
										}
									return r;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (n = 0; n < l.length; n++)
									(r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
							}
							return s;
						})(e, a),
						u = l || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							c({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, s, d, {
								className: r,
								style: o(o({ color: e.color || t.color }, t.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							i && n.createElement('title', null, i),
							e.children,
						)
					);
				};
				return void 0 !== l ? n.createElement(l.Consumer, null, (e) => t(e)) : t(s);
			}
		},
		7871: (e, t, r) => {
			e.exports = r(9743);
		},
		9569: (e, t, r) => {
			'use strict';
			r.d(t, { E: () => s });
			var n = r(5640);
			let s = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('span', {
					className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
					children: t,
				});
			};
		},
		9943: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => d });
			var n = r(5640),
				s = r(9569),
				l = r(6194),
				a = r(2461),
				c = r(6826),
				i = r.n(c),
				o = r(1238);
			let d = () => {
				let e = (0, l.I)('itemId');
				return (0, n.jsx)(a.U, {
					activeId: 'store',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, n.jsx)(i(), {
								href: '/store',
								children: (0, n.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, n.jsx)(o.FZc, {}),
										(0, n.jsx)('span', { className: 'font-medium', children: 'Store' }),
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
									(0, n.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Item ', e] }),
									(0, n.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
									(0, n.jsxs)('div', {
										className: 'flex items-center gap-x-2 leading-none',
										children: [
											(0, n.jsx)('span', { className: 'text-xl font-black', children: '$1.00' }),
											(0, n.jsx)('span', { className: 'text-base text-neutral-500 line-through', children: '$2.00' }),
										],
									}),
								],
							}),
							(0, n.jsx)('button', {
								className: 'cursor-pointer rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								children: 'Buy Now',
							}),
						],
					}),
				});
			};
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 826, 636, 593, 792], () => t(1355)), (_N_E = e.O());
	},
]);
