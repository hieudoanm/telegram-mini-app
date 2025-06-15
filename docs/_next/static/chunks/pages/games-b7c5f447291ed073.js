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
			var n = t(6826),
				a = t.n(n),
				i = t(1238);
			let o = (e) => {
					let { activeId: r } = e;
					return (0, l.jsx)('nav', {
						className: 'bg-neutral-900',
						children: (0, l.jsx)('div', {
							className: 'grid grid-cols-4',
							children: [
								{ id: 'home', href: '/', icon: (0, l.jsx)(i.cEk, {}), activeIcon: (0, l.jsx)(i.ZVi, {}), text: 'Home' },
								{
									id: 'games',
									href: '/games',
									icon: (0, l.jsx)(i.SkF, {}),
									activeIcon: (0, l.jsx)(i.rNT, {}),
									text: 'Games',
								},
								{
									id: 'store',
									href: '/store',
									icon: (0, l.jsx)(i.Qsx, {}),
									activeIcon: (0, l.jsx)(i.XsE, {}),
									text: 'Store',
								},
								{
									id: 'profile',
									href: '/profile',
									icon: (0, l.jsx)(i.NMe, {}),
									activeIcon: (0, l.jsx)(i.MrL, {}),
									text: 'Profile',
								},
							].map((e) => {
								let {
										id: t = '',
										href: s = '',
										text: n = '',
										icon: i = (0, l.jsx)(l.Fragment, {}),
										activeIcon: o = (0, l.jsx)(l.Fragment, {}),
									} = e,
									c = t === r;
								return (0, l.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, l.jsx)(a(), {
											href: s,
											children: (0, l.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 py-4',
												children: [
													(0, l.jsx)('span', {
														className: 'text-3xl',
														children: c
															? (0, l.jsx)(l.Fragment, { children: o })
															: (0, l.jsx)(l.Fragment, { children: i }),
													}),
													(0, l.jsx)('span', { className: 'text-xs', children: n }),
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
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, l.jsx)(o, { activeId: r }),
						],
					});
				};
		},
		7082: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => n });
			var l = t(5640),
				s = t(2461);
			let n = () =>
				(0, l.jsx)(s.U, {
					activeId: 'games',
					children: (0, l.jsx)('div', {
						className: 'flex flex-col p-4',
						children: (0, l.jsxs)('div', {
							className: 'flex flex-col gap-y-4',
							children: [
								(0, l.jsx)('div', {
									className:
										'aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900 shadow shadow-neutral-900',
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
									{ id: '1', title: 'Game 1', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '2', title: 'Game 2', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '3', title: 'Game 3', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '4', title: 'Game 4', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '5', title: 'Game 5', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '6', title: 'Game 6', description: 'Lorem ipsum dolor sit amet.' },
								].map((e) => {
									let { id: r = '', title: t = '', description: s = '' } = e;
									return (0, l.jsx)(
										'div',
										{
											className: 'rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3',
											children: (0, l.jsxs)('div', {
												className: 'flex w-full items-center gap-x-4',
												children: [
													(0, l.jsxs)('div', {
														className: 'flex grow items-center gap-x-4 truncate',
														children: [
															(0, l.jsx)('div', {
																className: 'aspect-square h-12 rounded-lg border border-neutral-800',
															}),
															(0, l.jsxs)('div', {
																className: 'flex grow flex-col gap-y-2 truncate',
																children: [
																	(0, l.jsx)('h2', { className: 'text-lg leading-none font-bold', children: t }),
																	(0, l.jsx)('p', { className: 'truncate text-sm leading-none', children: s }),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)('button', {
															className:
																'cursor-pointer rounded-full border border-neutral-800 bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
															children: 'Play',
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
				n = l.createContext && l.createContext(s),
				a = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
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
			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? o(Object(t), !0).forEach(function (r) {
								var l, s, n;
								(l = e),
									(s = r),
									(n = t[r]),
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
										? Object.defineProperty(l, s, { value: n, enumerable: !0, configurable: !0, writable: !0 })
										: (l[s] = n);
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
						i({ attr: c({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => l.createElement(r.tag, c({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function u(e) {
				var r = (r) => {
					var t,
						{ attr: s, size: n, title: o } = e,
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
								var n = Object.getOwnPropertySymbols(e);
								for (l = 0; l < n.length; l++)
									(t = n[l]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t]);
							}
							return s;
						})(e, a),
						u = n || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						l.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, s, d, {
								className: t,
								style: c(c({ color: e.color || r.color }, r.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							o && l.createElement('title', null, o),
							e.children,
						)
					);
				};
				return void 0 !== n ? l.createElement(n.Consumer, null, (e) => r(e)) : r(s);
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
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 826, 636, 593, 792], () => r(8429)), (_N_E = e.O());
	},
]);
