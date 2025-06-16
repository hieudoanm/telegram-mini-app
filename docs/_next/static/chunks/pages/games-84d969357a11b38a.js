(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1],
	{
		2461: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => c });
			var l = t(5640);
			let s = (e) => {
				let { children: r = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: r,
				});
			};
			var a = t(6826),
				n = t.n(a),
				o = t(1238);
			let i = (e) => {
					let { activeId: r } = e;
					return (0, l.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
						children: (0, l.jsx)('div', {
							className: 'grid grid-cols-5',
							children: [
								{ id: 'home', href: '/', icon: (0, l.jsx)(o.cEk, {}), activeIcon: (0, l.jsx)(o.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, l.jsx)(o.SkF, {}),
									activeIcon: (0, l.jsx)(o.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, l.jsx)(o.Qsx, {}),
									activeIcon: (0, l.jsx)(o.XsE, {}),
									text: 'Store',
								},
								{
									id: 'news',
									href: '/news',
									icon: (0, l.jsx)(o.rRm, {}),
									activeIcon: (0, l.jsx)(o.mKO, {}),
									text: 'News',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, l.jsx)(o.NMe, {}),
									activeIcon: (0, l.jsx)(o.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: s = '',
										text: a = '',
										icon: o = (0, l.jsx)(l.Fragment, {}),
										activeIcon: i = (0, l.jsx)(l.Fragment, {}),
									} = e,
									c = t === r;
								return (0, l.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, l.jsx)(n(), {
											href: s,
											children: (0, l.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, l.jsx)('span', {
														className: 'text-3xl',
														children: c
															? (0, l.jsx)(l.Fragment, { children: i })
															: (0, l.jsx)(l.Fragment, { children: o }),
													}),
													(0, l.jsx)('span', { className: 'text-xs', children: a }),
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
					let { activeId: r = '', children: t = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsxs)(s, {
						children: [
							(0, l.jsx)('header', {
								className: 'border-b border-neutral-900 py-4',
								children: (0, l.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, l.jsx)(i, { activeId: r }),
						],
					});
				};
		},
		7082: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => i });
			var l = t(5640),
				s = t(9569),
				a = t(2461),
				n = t(6826),
				o = t.n(n);
			let i = () =>
				(0, l.jsx)(a.U, {
					activeId: 'games',
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
												children: 'Play Now',
											}),
										],
									}),
								}),
								(0, l.jsx)('h1', { className: 'text-2xl font-black', children: 'Games' }),
								[
									{ id: '1', title: 'Game 1', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '2', title: 'Game 2', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '3', title: 'Game 3', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '4', title: 'Game 4', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '5', title: 'Game 5', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
									{ id: '6', title: 'Game 6', description: 'Lorem ipsum dolor sit amet.', category: 'Category' },
								].map((e) => {
									let { id: r = '', title: t = '', description: a = '', category: n = '' } = e;
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
																	(0, l.jsx)('div', {
																		className: 'flex items-center gap-x-2',
																		children: (0, l.jsx)(s.E, { children: n }),
																	}),
																	(0, l.jsx)('h2', { className: 'text-lg leading-none font-bold', children: t }),
																	(0, l.jsx)('p', { className: 'truncate text-sm leading-none', children: a }),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)(o(), {
															href: '/games/'.concat(r),
															children: (0, l.jsx)('button', {
																className:
																	'cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
																children: 'Play',
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
		7182: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => d });
			var l = t(148),
				s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				a = l.createContext && l.createContext(s),
				n = ['attr', 'size', 'title'];
			function o() {
				return (o = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
							}
							return e;
						}).apply(this, arguments);
			}
			function i(e, r) {
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
			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? i(Object(t), !0).forEach(function (r) {
								var l, s, a;
								(l = e),
									(s = r),
									(a = t[r]),
									(s = (function (e) {
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
									})(s)) in l
										? Object.defineProperty(l, s, { value: a, enumerable: !0, configurable: !0, writable: !0 })
										: (l[s] = a);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: i(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
								});
				}
				return e;
			}
			function d(e) {
				return (r) =>
					l.createElement(
						u,
						o({ attr: c({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => l.createElement(r.tag, c({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function u(e) {
				var r = (r) => {
					var t,
						{ attr: s, size: a, title: i } = e,
						d = (function (e, r) {
							if (null == e) return {};
							var t,
								l,
								s = (function (e, r) {
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
								var a = Object.getOwnPropertySymbols(e);
								for (l = 0; l < a.length; l++)
									(t = a[l]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t]);
							}
							return s;
						})(e, n),
						u = a || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						l.createElement(
							'svg',
							o({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, s, d, {
								className: t,
								style: c(c({ color: e.color || r.color }, r.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							i && l.createElement('title', null, i),
							e.children,
						)
					);
				};
				return void 0 !== a ? l.createElement(a.Consumer, null, (e) => r(e)) : r(s);
			}
		},
		8429: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/games',
				function () {
					return t(7082);
				},
			]);
		},
		9569: (e, r, t) => {
			'use strict';
			t.d(r, { E: () => s });
			var l = t(5640);
			let s = (e) => {
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
		e.O(0, [72, 826, 636, 593, 792], () => r(8429)), (_N_E = e.O());
	},
]);
