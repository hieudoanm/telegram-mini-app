(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[332],
	{
		2461: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => c });
			var n = t(5640);
			let l = (e) => {
				let { children: r = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col border-r border-l border-neutral-800',
					children: r,
				});
			};
			var o = t(6826),
				a = t.n(o),
				s = t(1238);
			let i = (e) => {
					let { activeId: r } = e;
					return (0, n.jsx)('nav', {
						className: 'border-t border-neutral-800',
						children: (0, n.jsx)('div', {
							className: 'grid grid-cols-4',
							children: [
								{ id: 'home', href: '/', icon: (0, n.jsx)(s.cEk, {}), activeIcon: (0, n.jsx)(s.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, n.jsx)(s.SkF, {}),
									activeIcon: (0, n.jsx)(s.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, n.jsx)(s.Qsx, {}),
									activeIcon: (0, n.jsx)(s.XsE, {}),
									text: 'Store',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, n.jsx)(s.NMe, {}),
									activeIcon: (0, n.jsx)(s.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: l = '',
										text: o = '',
										icon: s = (0, n.jsx)(n.Fragment, {}),
										activeIcon: i = (0, n.jsx)(n.Fragment, {}),
									} = e,
									c = t === r;
								return (0, n.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, n.jsx)(a(), {
											href: l,
											children: (0, n.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 py-4',
												children: [
													(0, n.jsx)('span', {
														className: 'text-3xl',
														children: c
															? (0, n.jsx)(n.Fragment, { children: i })
															: (0, n.jsx)(n.Fragment, { children: s }),
													}),
													(0, n.jsx)('span', { className: 'text-xs', children: o }),
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
				c = (e) => {
					let { activeId: r = '', children: t = (0, n.jsx)(n.Fragment, {}) } = e;
					return (0, n.jsxs)(l, {
						children: [
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, n.jsx)(i, { activeId: r }),
						],
					});
				};
		},
		3396: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return t(6310);
				},
			]);
		},
		6310: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => o });
			var n = t(5640),
				l = t(2461);
			let o = () =>
				(0, n.jsx)(l.U, {
					activeId: 'home',
					children: (0, n.jsx)('div', {
						className: 'p-8',
						children: (0, n.jsx)('div', {
							className: 'flex flex-col gap-y-8',
							children: [
								{ id: '1', action: 'Buy Now' },
								{ id: '2', action: 'Play Now' },
								{ id: '2', action: 'Buy Now' },
								{ id: '2', action: 'Play Now' },
							].map((e) => {
								let { id: r = '', action: t = 'action' } = e;
								return (0, n.jsx)(
									'div',
									{
										className: 'aspect-video w-full rounded-2xl border border-neutral-800 shadow shadow-neutral-800',
										children: (0, n.jsxs)('div', {
											className: 'flex h-full w-full flex-col p-4',
											children: [
												(0, n.jsx)('div', { className: 'grow' }),
												(0, n.jsx)('button', {
													className:
														'w-full cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-4 py-2 text-base font-semibold text-neutral-900',
													children: t,
												}),
											],
										}),
									},
									r,
								);
							}),
						}),
					}),
				});
		},
		7182: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => u });
			var n = t(148),
				l = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				o = n.createContext && n.createContext(l),
				a = ['attr', 'size', 'title'];
			function s() {
				return (s = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}
							return e;
						}).apply(this, arguments);
			}
			function i(e, r) {
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
			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? i(Object(t), !0).forEach(function (r) {
								var n, l, o;
								(n = e),
									(l = r),
									(o = t[r]),
									(l = (function (e) {
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
									})(l)) in n
										? Object.defineProperty(n, l, { value: o, enumerable: !0, configurable: !0, writable: !0 })
										: (n[l] = o);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: i(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
								});
				}
				return e;
			}
			function u(e) {
				return (r) =>
					n.createElement(
						d,
						s({ attr: c({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => n.createElement(r.tag, c({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function d(e) {
				var r = (r) => {
					var t,
						{ attr: l, size: o, title: i } = e,
						u = (function (e, r) {
							if (null == e) return {};
							var t,
								n,
								l = (function (e, r) {
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
								var o = Object.getOwnPropertySymbols(e);
								for (n = 0; n < o.length; n++)
									(t = o[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
							}
							return l;
						})(e, a),
						d = o || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						n.createElement(
							'svg',
							s({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, l, u, {
								className: t,
								style: c(c({ color: e.color || r.color }, r.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							i && n.createElement('title', null, i),
							e.children,
						)
					);
				};
				return void 0 !== o ? n.createElement(o.Consumer, null, (e) => r(e)) : r(l);
			}
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 826, 636, 593, 792], () => r(3396)), (_N_E = e.O());
	},
]);
