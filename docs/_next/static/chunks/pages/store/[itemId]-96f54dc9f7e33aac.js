(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[900],
	{
		1355: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store/[itemId]',
				function () {
					return r(3527);
				},
			]);
		},
		2461: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => c });
			var n = r(5640);
			let l = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var s = r(6826),
				a = r.n(s),
				o = r(1238);
			let i = (e) => {
					let { activeId: t } = e;
					return (0, n.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, n.jsx)('div', {
							className: 'grid grid-cols-4',
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
									id: 'profile',
									href: '/profile',
									icon: (0, n.jsx)(o.NMe, {}),
									activeIcon: (0, n.jsx)(o.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: r = '',
										href: l = '',
										text: s = '',
										icon: o = (0, n.jsx)(n.Fragment, {}),
										activeIcon: i = (0, n.jsx)(n.Fragment, {}),
									} = e,
									c = r === t;
								return (0, n.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, n.jsx)(a(), {
											href: l,
											children: (0, n.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, n.jsx)('span', {
														className: 'text-3xl',
														children: c
															? (0, n.jsx)(n.Fragment, { children: i })
															: (0, n.jsx)(n.Fragment, { children: o }),
													}),
													(0, n.jsx)('span', { className: 'text-xs', children: s }),
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
				c = (e) => {
					let { activeId: t = '', children: r = (0, n.jsx)(n.Fragment, {}) } = e;
					return (0, n.jsxs)(l, {
						children: [
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(i, { activeId: t }),
						],
					});
				};
		},
		3527: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => u });
			var n = r(5640),
				l = r(7871);
			let s = (e) => {
				var t, r;
				let { query: n } = (0, l.useRouter)(),
					s = null != (t = new Map(Object.entries(n)).get(e)) ? t : '';
				return Array.isArray(s) ? (null != (r = s.at(0)) ? r : '') : s;
			};
			var a = r(2461),
				o = r(6826),
				i = r.n(o),
				c = r(1238);
			let u = () => {
				let e = s('itemId');
				return (0, n.jsx)(a.U, {
					activeId: 'store',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, n.jsx)(i(), {
								href: '/store',
								children: (0, n.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [(0, n.jsx)(c.FZc, {}), (0, n.jsx)('span', { className: 'font-medium', children: 'Back' })],
								}),
							}),
							(0, n.jsx)('div', {
								className: 'aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, n.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, n.jsx)('div', {
										children: (0, n.jsx)('span', {
											className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
											children: 'Category',
										}),
									}),
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
								children: 'Buy',
							}),
						],
					}),
				});
			};
		},
		7182: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var n = r(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = n.createContext && n.createContext(l),
				a = ['attr', 'size', 'title'];
			function o() {
				return (o = Object.assign
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
			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								var n, l, s;
								(n = e),
									(l = t),
									(s = r[t]),
									(l = (function (e) {
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
									})(l)) in n
										? Object.defineProperty(n, l, { value: s, enumerable: !0, configurable: !0, writable: !0 })
										: (n[l] = s);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function u(e) {
				return (t) =>
					n.createElement(
						d,
						o({ attr: c({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, c({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: l, size: s, title: i } = e,
						u = (function (e, t) {
							if (null == e) return {};
							var r,
								n,
								l = (function (e, t) {
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
								var s = Object.getOwnPropertySymbols(e);
								for (n = 0; n < s.length; n++)
									(r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
							}
							return l;
						})(e, a),
						d = s || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							o({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, l, u, {
								className: r,
								style: c(c({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							i && n.createElement('title', null, i),
							e.children,
						)
					);
				};
				return void 0 !== s ? n.createElement(s.Consumer, null, (e) => t(e)) : t(l);
			}
		},
		7871: (e, t, r) => {
			e.exports = r(9743);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 826, 636, 593, 792], () => t(1355)), (_N_E = e.O());
	},
]);
