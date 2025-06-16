(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[13],
	{
		812: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var s = r(148),
				n = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				l = s.createContext && s.createContext(n),
				a = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
							}
							return e;
						}).apply(this, arguments);
			}
			function c(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					t &&
						(s = s.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, s);
				}
				return r;
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
								var s, n, l;
								(s = e),
									(n = t),
									(l = r[t]),
									(n = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var r = e[Symbol.toPrimitive];
											if (void 0 !== r) {
												var s = r.call(e, t || 'default');
												if ('object' != typeof s) return s;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(n)) in s
										? Object.defineProperty(s, n, { value: l, enumerable: !0, configurable: !0, writable: !0 })
										: (s[n] = l);
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
					s.createElement(
						d,
						i({ attr: o({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => s.createElement(t.tag, o({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: n, size: l, title: c } = e,
						u = (function (e, t) {
							if (null == e) return {};
							var r,
								s,
								n = (function (e, t) {
									if (null == e) return {};
									var r = {};
									for (var s in e)
										if (Object.prototype.hasOwnProperty.call(e, s)) {
											if (t.indexOf(s) >= 0) continue;
											r[s] = e[s];
										}
									return r;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (s = 0; s < l.length; s++)
									(r = l[s]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
							}
							return n;
						})(e, a),
						d = l || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						s.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, n, u, {
								className: r,
								style: o(o({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && s.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== l ? s.createElement(l.Consumer, null, (e) => t(e)) : t(n);
			}
		},
		2401: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => d });
			var s = r(5640),
				n = r(8377),
				l = r(5437),
				a = r(6440),
				i = r(7226),
				c = r(5089),
				o = r.n(c),
				u = r(9695);
			let d = () => {
				let e = (0, l.I)('articleId');
				return (0, s.jsx)(a.U, {
					activeId: 'news',
					children: (0, s.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, s.jsx)(o(), {
								href: '/news',
								children: (0, s.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [(0, s.jsx)(u.FZc, {}), (0, s.jsx)('span', { className: 'font-medium', children: 'News' })],
								}),
							}),
							(0, s.jsx)('div', {
								className: 'aspect-video w-full rounded-xl border border-neutral-900 shadow shadow-neutral-900',
							}),
							(0, s.jsxs)('div', {
								className: 'flex flex-col gap-y-3',
								children: [
									(0, s.jsx)('p', { className: 'text-xs text-neutral-500', children: (0, i.Y)(new Date()) }),
									(0, s.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Article ', e] }),
									(0, s.jsxs)('div', {
										className: 'flex items-center gap-x-2',
										children: [
											(0, s.jsx)(n.E, { type: 'primary', children: 'Tag 1' }),
											(0, s.jsx)(n.E, { type: 'primary', children: 'Tag 2' }),
										],
									}),
									(0, s.jsx)('p', {
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
		4914: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/news/[articleId]',
				function () {
					return r(2401);
				},
			]);
		},
		5437: (e, t, r) => {
			'use strict';
			r.d(t, { I: () => n });
			var s = r(8512);
			let n = (e) => {
				var t, r;
				let { query: n } = (0, s.useRouter)(),
					l = null != (t = new Map(Object.entries(n)).get(e)) ? t : '';
				return Array.isArray(l) ? (null != (r = l.at(0)) ? r : '') : l;
			};
		},
		6440: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => d });
			var s = r(5640);
			let n = (e) => {
				let { children: t = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var l = r(5089),
				a = r.n(l),
				i = r(9695);
			let c = (e) => {
				let { activeId: t } = e;
				return (0, s.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, s.jsx)('div', {
						className: 'grid grid-cols-5',
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
								id: 'news',
								href: '/news',
								icon: (0, s.jsx)(i.rRm, {}),
								activeIcon: (0, s.jsx)(i.mKO, {}),
								text: 'News',
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
									id: r = '',
									href: n = '',
									text: l = '',
									icon: i = (0, s.jsx)(s.Fragment, {}),
									activeIcon: c = (0, s.jsx)(s.Fragment, {}),
								} = e,
								o = r === t;
							return (0, s.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, s.jsx)(a(), {
										href: n,
										children: (0, s.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												o ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, s.jsx)('span', {
													className: 'text-3xl',
													children: o
														? (0, s.jsx)(s.Fragment, { children: c })
														: (0, s.jsx)(s.Fragment, { children: i }),
												}),
												(0, s.jsx)('span', { className: 'text-xs', children: l }),
											],
										}),
									}),
								},
								r,
							);
						}),
					}),
				});
			};
			var o = r(1211),
				u = r(148);
			let d = (e) => {
				let { activeId: t = '', children: r = (0, s.jsx)(s.Fragment, {}) } = e,
					{ requestFullscreen: l } = (0, o.j)();
				return (
					(0, u.useEffect)(() => {
						l();
					}, [l]),
					(0, s.jsxs)(n, {
						children: [
							(0, s.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, s.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, s.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, s.jsx)(c, { activeId: t }),
						],
					})
				);
			};
		},
		7226: (e, t, r) => {
			'use strict';
			r.d(t, { Y: () => l });
			let s = [
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
				n = (e) => {
					let t = e % 10,
						r = e % 100;
					return 1 === t && 11 !== r ? 'st' : 2 === t && 12 !== r ? 'nd' : 3 === t && 13 !== r ? 'rd' : 'th';
				},
				l = (e) => {
					let t = s[e.getMonth()],
						r = e.getDate(),
						l = e.getFullYear(),
						a = n(r);
					return ''.concat(t, ' ').concat(r).concat(a, ' ').concat(l);
				};
		},
		8377: (e, t, r) => {
			'use strict';
			r.d(t, { E: () => n });
			var s = r(5640);
			let n = (e) => {
				let { type: t = 'primary', children: r = (0, s.jsx)(s.Fragment, {}) } = e;
				return 'success' === t
					? (0, s.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: r,
						})
					: 'error' === t
						? (0, s.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							})
						: (0, s.jsx)('span', {
								className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							});
			};
		},
		8512: (e, t, r) => {
			e.exports = r(7203);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 89, 636, 593, 792], () => t(4914)), (_N_E = e.O());
	},
]);
