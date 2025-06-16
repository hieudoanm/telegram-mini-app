(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[315],
	{
		845: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store',
				function () {
					return t(9032);
				},
			]);
		},
		2461: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => i });
			var l = t(5640);
			let n = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: r,
				});
			};
			var s = t(6826),
				a = t.n(s),
				c = t(1238);
			let o = (e) => {
					let { activeId: r } = e;
					return (0, l.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, l.jsx)('div', {
							className: 'grid grid-cols-5',
							children: [
								{ id: 'home', href: '/', icon: (0, l.jsx)(c.cEk, {}), activeIcon: (0, l.jsx)(c.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, l.jsx)(c.SkF, {}),
									activeIcon: (0, l.jsx)(c.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, l.jsx)(c.Qsx, {}),
									activeIcon: (0, l.jsx)(c.XsE, {}),
									text: 'Store',
								},
								{
									id: 'news',
									href: '/news',
									icon: (0, l.jsx)(c.rRm, {}),
									activeIcon: (0, l.jsx)(c.mKO, {}),
									text: 'News',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, l.jsx)(c.NMe, {}),
									activeIcon: (0, l.jsx)(c.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: n = '',
										text: s = '',
										icon: c = (0, l.jsx)(l.Fragment, {}),
										activeIcon: o = (0, l.jsx)(l.Fragment, {}),
									} = e,
									i = t === r;
								return (0, l.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, l.jsx)(a(), {
											href: n,
											children: (0, l.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													i ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, l.jsx)('span', {
														className: 'text-3xl',
														children: i
															? (0, l.jsx)(l.Fragment, { children: o })
															: (0, l.jsx)(l.Fragment, { children: c }),
													}),
													(0, l.jsx)('span', { className: 'text-xs', children: s }),
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
					let { activeId: r = '', children: t = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsxs)(n, {
						children: [
							(0, l.jsx)('header', {
								className: 'border-b border-neutral-900 pt-8 pb-4',
								children: (0, l.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, l.jsx)(o, { activeId: r }),
						],
					});
				};
		},
		7182: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => d });
			var l = t(148),
				n = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = l.createContext && l.createContext(n),
				a = ['attr', 'size', 'title'];
			function c() {
				return (c = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
							}
							return e;
						}).apply(this, arguments);
			}
			function o(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					r &&
						(l = l.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, l);
				}
				return t;
			}
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? o(Object(t), !0).forEach(function (r) {
								var l, n, s;
								(l = e),
									(n = r),
									(s = t[r]),
									(n = (function (e) {
										var r = (function (e, r) {
											if ('object' != typeof e || !e) return e;
											var t = e[Symbol.toPrimitive];
											if (void 0 !== t) {
												var l = t.call(e, r || 'default');
												if ('object' != typeof l) return l;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === r ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof r ? r : r + '';
									})(n)) in l
										? Object.defineProperty(l, n, { value: s, enumerable: !0, configurable: !0, writable: !0 })
										: (l[n] = s);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: o(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
								});
				}
				return e;
			}
			function d(e) {
				return (r) =>
					l.createElement(
						u,
						c({ attr: i({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => l.createElement(r.tag, i({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function u(e) {
				var r = (r) => {
					var t,
						{ attr: n, size: s, title: o } = e,
						d = (function (e, r) {
							if (null == e) return {};
							var t,
								l,
								n = (function (e, r) {
									if (null == e) return {};
									var t = {};
									for (var l in e)
										if (Object.prototype.hasOwnProperty.call(e, l)) {
											if (r.indexOf(l) >= 0) continue;
											t[l] = e[l];
										}
									return t;
								})(e, r);
							if (Object.getOwnPropertySymbols) {
								var s = Object.getOwnPropertySymbols(e);
								for (l = 0; l < s.length; l++)
									(t = s[l]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
							}
							return n;
						})(e, a),
						u = s || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						l.createElement(
							'svg',
							c({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, n, d, {
								className: t,
								style: i(i({ color: e.color || r.color }, r.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							o && l.createElement('title', null, o),
							e.children,
						)
					);
				};
				return void 0 !== s ? l.createElement(s.Consumer, null, (e) => r(e)) : r(n);
			}
		},
		9032: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => o });
			var l = t(5640),
				n = t(9569),
				s = t(2461),
				a = t(6826),
				c = t.n(a);
			let o = () =>
				(0, l.jsx)(s.U, {
					activeId: 'store',
					children: (0, l.jsx)('div', {
						className: 'flex flex-col p-4',
						children: (0, l.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								(0, l.jsx)('div', {
									className:
										'aspect-video w-full rounded-2xl border border-neutral-900 bg-neutral-950 shadow shadow-neutral-900',
									children: (0, l.jsxs)('div', {
										className: 'flex h-full w-full flex-col p-4',
										children: [
											(0, l.jsx)('div', { className: 'grow' }),
											(0, l.jsx)('button', {
												className:
													'w-full cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-4 py-2 text-base font-semibold text-neutral-900',
												children: 'Buy Now',
											}),
										],
									}),
								}),
								(0, l.jsx)('h1', { className: 'text-2xl font-black', children: 'Store' }),
								[
									{ id: '1', name: 'Item 1', price: '$1.00', category: 'Category' },
									{ id: '2', name: 'Item 2', price: '$1.00', category: 'Category' },
									{ id: '3', name: 'Item 3', price: '$1.00', category: 'Category' },
									{ id: '4', name: 'Item 4', price: '$1.00', category: 'Category' },
									{ id: '5', name: 'Item 5', price: '$1.00', category: 'Category' },
									{ id: '6', name: 'Item 6', price: '$1.00', category: 'Category' },
								].map((e) => {
									let { id: r = '', name: t = '', price: s = '', category: a = '' } = e;
									return (0, l.jsx)(
										'div',
										{
											className:
												'rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-3 shadow shadow-neutral-900',
											children: (0, l.jsxs)('div', {
												className: 'flex w-full items-center gap-x-4',
												children: [
													(0, l.jsxs)('div', {
														className: 'flex grow items-center gap-x-4 truncate',
														children: [
															(0, l.jsx)('div', {
																className: 'aspect-square h-20 rounded-lg border border-neutral-900',
															}),
															(0, l.jsxs)('div', {
																className: 'flex grow flex-col gap-y-2 truncate',
																children: [
																	(0, l.jsx)('div', { children: (0, l.jsx)(n.E, { children: a }) }),
																	(0, l.jsx)('h2', { className: 'leading-none font-semibold', children: t }),
																	(0, l.jsx)('p', {
																		className: 'truncate text-lg leading-none font-black',
																		children: s,
																	}),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)(c(), {
															href: '/store/'.concat(r),
															children: (0, l.jsx)('button', {
																className:
																	'cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
																children: 'Buy',
															}),
														}),
													}),
												],
											}),
										},
										r,
									);
								}),
							],
						}),
					}),
				});
		},
		9569: (e, r, t) => {
			'use strict';
			t.d(r, { E: () => n });
			var l = t(5640);
			let n = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('span', {
					className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
					children: r,
				});
			};
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 826, 636, 593, 792], () => r(845)), (_N_E = e.O());
	},
]);
