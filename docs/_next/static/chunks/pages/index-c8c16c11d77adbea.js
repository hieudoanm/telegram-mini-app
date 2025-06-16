(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		812: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var n = r(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = n.createContext && n.createContext(l),
				o = ['attr', 'size', 'title'];
			function a() {
				return (a = Object.assign
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
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
						a({ attr: i({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, i({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: l, size: s, title: c } = e,
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
						})(e, o),
						d = s || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							a({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, l, u, {
								className: r,
								style: i(i({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							c && n.createElement('title', null, c),
							e.children,
						)
					);
				};
				return void 0 !== s ? n.createElement(s.Consumer, null, (e) => t(e)) : t(l);
			}
		},
		3171: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => o });
			var n = r(5640),
				l = r(5549),
				s = r(6440);
			let o = () =>
				(0, n.jsx)(s.U, {
					activeId: 'home',
					children: (0, n.jsx)('div', {
						className: 'p-4',
						children: (0, n.jsx)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								{ id: '1', action: 'Buy Now' },
								{ id: '2', action: 'Play Now' },
								{ id: '3', action: 'Buy Now' },
								{ id: '4', action: 'Play Now' },
							].map((e) => {
								let { id: t = '', action: r = 'action' } = e;
								return (0, n.jsx)(
									'div',
									{
										className:
											'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
										children: (0, n.jsxs)('div', {
											className: 'flex h-full w-full flex-col p-4',
											children: [(0, n.jsx)('div', { className: 'grow' }), (0, n.jsx)(l.$, { children: r })],
										}),
									},
									t,
								);
							}),
						}),
					}),
				});
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
				o = r.n(s),
				a = r(9695);
			let c = (e) => {
				let { activeId: t } = e;
				return (0, n.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, n.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, n.jsx)(a.cEk, {}), activeIcon: (0, n.jsx)(a.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, n.jsx)(a.SkF, {}),
								activeIcon: (0, n.jsx)(a.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, n.jsx)(a.Qsx, {}),
								activeIcon: (0, n.jsx)(a.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, n.jsx)(a.rRm, {}),
								activeIcon: (0, n.jsx)(a.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, n.jsx)(a.NMe, {}),
								activeIcon: (0, n.jsx)(a.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: r = '',
									href: l = '',
									text: s = '',
									icon: a = (0, n.jsx)(n.Fragment, {}),
									activeIcon: c = (0, n.jsx)(n.Fragment, {}),
								} = e,
								i = r === t;
							return (0, n.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, n.jsx)(o(), {
										href: l,
										children: (0, n.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, n.jsx)('span', {
													className: 'text-3xl',
													children: i
														? (0, n.jsx)(n.Fragment, { children: c })
														: (0, n.jsx)(n.Fragment, { children: a }),
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
							(0, n.jsx)(c, { activeId: t }),
						],
					})
				);
			};
		},
		7757: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return r(3171);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 89, 636, 593, 792], () => t(7757)), (_N_E = e.O());
	},
]);
