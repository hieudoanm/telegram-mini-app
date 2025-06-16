(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[103],
	{
		812: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var n = r(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = n.createContext && n.createContext(l),
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
			function o(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
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
							: o(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function u(e) {
				return (t) =>
					n.createElement(
						d,
						c({ attr: i({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, i({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: l, size: s, title: o } = e,
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
							c({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, l, u, {
								className: r,
								style: i(i({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							o && n.createElement('title', null, o),
							e.children,
						)
					);
				};
				return void 0 !== s ? n.createElement(s.Consumer, null, (e) => t(e)) : t(l);
			}
		},
		2103: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => d });
			var n = r(5640),
				l = r(8377),
				s = r(5549),
				a = r(5437),
				c = r(6440),
				o = r(5089),
				i = r.n(o),
				u = r(9695);
			let d = () => {
				let e = (0, a.I)('gameId');
				return (0, n.jsx)(c.U, {
					activeId: 'store',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-6 p-4',
						children: [
							(0, n.jsx)(i(), {
								href: '/store',
								children: (0, n.jsxs)('div', {
									className: 'flex items-center gap-x-2 text-yellow-500',
									children: [
										(0, n.jsx)(u.FZc, {}),
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
									(0, n.jsx)('div', { children: (0, n.jsx)(l.E, { type: 'primary', children: 'Category' }) }),
									(0, n.jsxs)('h1', { className: 'text-xl leading-none font-semibold', children: ['Game ', e] }),
									(0, n.jsx)('p', {
										className: 'text-sm leading-none text-neutral-500',
										children: 'Lorem ipsum dolor sit amet.',
									}),
								],
							}),
							(0, n.jsx)(s.$, { children: 'Play Now' }),
						],
					}),
				});
			};
		},
		5437: (e, t, r) => {
			'use strict';
			r.d(t, { I: () => l });
			var n = r(8512);
			let l = (e) => {
				var t, r;
				let { query: l } = (0, n.useRouter)(),
					s = null != (t = new Map(Object.entries(l)).get(e)) ? t : '';
				return Array.isArray(s) ? (null != (r = s.at(0)) ? r : '') : s;
			};
		},
		5549: (e, t, r) => {
			'use strict';
			r.d(t, { $: () => l });
			var n = r(5640);
			let l = (e) => {
				let { size: t = 'md', type: r = 'button', onClick: l = () => {}, children: s = (0, n.jsx)(n.Fragment, {}) } = e;
				return 'sm' === t
					? (0, n.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: l,
							children: s,
						})
					: (0, n.jsx)('button', {
							type: r,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: l,
							children: s,
						});
			};
		},
		6440: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => d });
			var n = r(5640);
			let l = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var s = r(5089),
				a = r.n(s),
				c = r(9695);
			let o = (e) => {
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
									href: l = '',
									text: s = '',
									icon: c = (0, n.jsx)(n.Fragment, {}),
									activeIcon: o = (0, n.jsx)(n.Fragment, {}),
								} = e,
								i = r === t;
							return (0, n.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, n.jsx)(a(), {
										href: l,
										children: (0, n.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, n.jsx)('span', {
													className: 'text-3xl',
													children: i
														? (0, n.jsx)(n.Fragment, { children: o })
														: (0, n.jsx)(n.Fragment, { children: c }),
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
			};
			var i = r(1211),
				u = r(148);
			let d = (e) => {
				let { activeId: t = '', children: r = (0, n.jsx)(n.Fragment, {}) } = e,
					{ requestFullscreen: s } = (0, i.j)();
				return (
					(0, u.useEffect)(() => {
						s();
					}, [s]),
					(0, n.jsxs)(l, {
						children: [
							(0, n.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, n.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(o, { activeId: t }),
						],
					})
				);
			};
		},
		6474: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games/[gameId]',
				function () {
					return r(2103);
				},
			]);
		},
		8377: (e, t, r) => {
			'use strict';
			r.d(t, { E: () => l });
			var n = r(5640);
			let l = (e) => {
				let { type: t = 'primary', children: r = (0, n.jsx)(n.Fragment, {}) } = e;
				return 'success' === t
					? (0, n.jsx)('span', {
							className: 'rounded-full bg-green-900 px-2 py-0.5 text-xs text-neutral-900',
							children: r,
						})
					: 'error' === t
						? (0, n.jsx)('span', {
								className: 'rounded-full bg-red-900 px-2 py-0.5 text-xs text-neutral-900',
								children: r,
							})
						: (0, n.jsx)('span', {
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
		e.O(0, [72, 89, 636, 593, 792], () => t(6474)), (_N_E = e.O());
	},
]);
