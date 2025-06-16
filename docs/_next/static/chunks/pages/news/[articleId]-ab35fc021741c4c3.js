(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[13],
	{
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
				i = r(1238);
			let c = (e) => {
					let { activeId: t } = e;
					return (0, n.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, n.jsx)('div', {
							className: 'grid grid-cols-5',
							children: [
								{ id: 'home', href: '/', icon: (0, n.jsx)(i.cEk, {}), activeIcon: (0, n.jsx)(i.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, n.jsx)(i.SkF, {}),
									activeIcon: (0, n.jsx)(i.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, n.jsx)(i.Qsx, {}),
									activeIcon: (0, n.jsx)(i.XsE, {}),
									text: 'Store',
								},
								{
									id: 'news',
									href: '/news',
									icon: (0, n.jsx)(i.rRm, {}),
									activeIcon: (0, n.jsx)(i.mKO, {}),
									text: 'News',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, n.jsx)(i.NMe, {}),
									activeIcon: (0, n.jsx)(i.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: r = '',
										href: s = '',
										text: l = '',
										icon: i = (0, n.jsx)(n.Fragment, {}),
										activeIcon: c = (0, n.jsx)(n.Fragment, {}),
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
															? (0, n.jsx)(n.Fragment, { children: c })
															: (0, n.jsx)(n.Fragment, { children: i }),
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
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(c, { activeId: t }),
						],
					});
				};
		},
		4547: (e, t, r) => {
			'use strict';
			r.d(t, { Y: () => l });
			let n = [
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
				s = (e) => {
					let t = e % 10,
						r = e % 100;
					return 1 === t && 11 !== r ? 'st' : 2 === t && 12 !== r ? 'nd' : 3 === t && 13 !== r ? 'rd' : 'th';
				},
				l = (e) => {
					let t = n[e.getMonth()],
						r = e.getDate(),
						l = e.getFullYear(),
						a = s(r);
					return ''.concat(t, ' ').concat(r).concat(a, ' ').concat(l);
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
			r.d(t, { k5: () => u });
			var n = r(148),
				s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				l = n.createContext && n.createContext(s),
				a = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, t) {
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
						? c(Object(r), !0).forEach(function (t) {
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
							: c(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function u(e) {
				return (t) =>
					n.createElement(
						d,
						i({ attr: o({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, o({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: s, size: l, title: c } = e,
						u = (function (e, t) {
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
						d = l || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, s, u, {
								className: r,
								style: o(o({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && n.createElement('title', null, c),
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
		8829: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/news/[articleId]',
				function () {
					return r(9806);
				},
			]);
		},
		9806: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => u });
			var n = r(5640),
				s = r(6194),
				l = r(2461),
				a = r(4547),
				i = r(6826),
				c = r.n(i),
				o = r(1238);
			let u = () => {
				let e = (0, s.I)('articleId');
				return (0, n.jsx)(l.U, {
					activeId: 'news',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, n.jsx)(c(), {
								href: '/news',
								children: (0, n.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [(0, n.jsx)(o.FZc, {}), (0, n.jsx)('span', { className: 'font-medium', children: 'News' })],
								}),
							}),
							(0, n.jsx)('div', {
								className: 'aspect-square w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, n.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, n.jsx)('p', { className: 'text-xs text-neutral-500', children: (0, a.Y)(new Date()) }),
									(0, n.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Article ', e] }),
									(0, n.jsx)('div', {
										children: (0, n.jsx)('span', {
											className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
											children: 'Category',
										}),
									}),
									(0, n.jsx)('p', {
										className: 'text-sm text-neutral-300',
										children:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet pretium enim, egestas tincidunt orci. Nullam rutrum iaculis libero id suscipit. Nullam consectetur felis a hendrerit tincidunt. Nam sodales porttitor dui, id feugiat diam pulvinar at. Morbi pulvinar metus sed nisl egestas aliquam. In rhoncus augue a cursus tristique.',
									}),
								],
							}),
						],
					}),
				});
			};
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 826, 636, 593, 792], () => t(8829)), (_N_E = e.O());
	},
]);
