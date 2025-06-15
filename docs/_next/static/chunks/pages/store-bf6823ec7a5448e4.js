(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[315],
	{
		845: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/store',
				function () {
					return r(9032);
				},
			]);
		},
		2461: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => c });
			var l = r(5640);
			let s = (e) => {
				let { children: t = (0, l.jsx)(l.Fragment, {}) } = e;
				return (0, l.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var n = r(6826),
				o = r.n(n),
				i = r(1238);
			let a = (e) => {
					let { activeId: t } = e;
					return (0, l.jsx)('nav', {
						className: 'border-t border-neutral-900 bg-neutral-950',
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
										id: r = '',
										href: s = '',
										text: n = '',
										icon: i = (0, l.jsx)(l.Fragment, {}),
										activeIcon: a = (0, l.jsx)(l.Fragment, {}),
									} = e,
									c = r === t;
								return (0, l.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, l.jsx)(o(), {
											href: s,
											children: (0, l.jsxs)('div', {
												className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
													c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
												),
												children: [
													(0, l.jsx)('span', {
														className: 'text-3xl',
														children: c
															? (0, l.jsx)(l.Fragment, { children: a })
															: (0, l.jsx)(l.Fragment, { children: i }),
													}),
													(0, l.jsx)('span', { className: 'text-xs', children: n }),
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
					let { activeId: t = '', children: r = (0, l.jsx)(l.Fragment, {}) } = e;
					return (0, l.jsxs)(s, {
						children: [
							(0, l.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, l.jsx)(a, { activeId: t }),
						],
					});
				};
		},
		7182: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => d });
			var l = r(148),
				s = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				n = l.createContext && l.createContext(s),
				o = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
							}
							return e;
						}).apply(this, arguments);
			}
			function a(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					t &&
						(l = l.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, l);
				}
				return r;
			}
			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								var l, s, n;
								(l = e),
									(s = t),
									(n = r[t]),
									(s = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var r = e[Symbol.toPrimitive];
											if (void 0 !== r) {
												var l = r.call(e, t || 'default');
												if ('object' != typeof l) return l;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(s)) in l
										? Object.defineProperty(l, s, { value: n, enumerable: !0, configurable: !0, writable: !0 })
										: (l[s] = n);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function d(e) {
				return (t) =>
					l.createElement(
						u,
						i({ attr: c({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => l.createElement(t.tag, c({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function u(e) {
				var t = (t) => {
					var r,
						{ attr: s, size: n, title: a } = e,
						d = (function (e, t) {
							if (null == e) return {};
							var r,
								l,
								s = (function (e, t) {
									if (null == e) return {};
									var r = {};
									for (var l in e)
										if (Object.prototype.hasOwnProperty.call(e, l)) {
											if (t.indexOf(l) >= 0) continue;
											r[l] = e[l];
										}
									return r;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(e);
								for (l = 0; l < n.length; l++)
									(r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
							}
							return s;
						})(e, o),
						u = n || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						l.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, s, d, {
								className: r,
								style: c(c({ color: e.color || t.color }, t.style), e.style),
								height: u,
								width: u,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							a && l.createElement('title', null, a),
							e.children,
						)
					);
				};
				return void 0 !== n ? l.createElement(n.Consumer, null, (e) => t(e)) : t(s);
			}
		},
		9032: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => n });
			var l = r(5640),
				s = r(2461);
			let n = () =>
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
									{ id: '1', title: 'Item 1', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '2', title: 'Item 2', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '3', title: 'Item 3', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '4', title: 'Item 4', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '5', title: 'Item 5', description: 'Lorem ipsum dolor sit amet.' },
									{ id: '6', title: 'Item 6', description: 'Lorem ipsum dolor sit amet.' },
								].map((e) => {
									let { id: t = '', title: r = '', description: s = '' } = e;
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
																className: 'aspect-square h-12 rounded-lg border border-neutral-900',
															}),
															(0, l.jsxs)('div', {
																className: 'flex grow flex-col gap-y-2 truncate',
																children: [
																	(0, l.jsx)('h2', { className: 'text-lg leading-none font-bold', children: r }),
																	(0, l.jsx)('p', { className: 'truncate text-sm leading-none', children: s }),
																],
															}),
														],
													}),
													(0, l.jsx)('div', {
														className: 'shrink-0',
														children: (0, l.jsx)('button', {
															className:
																'cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
															children: 'Buy',
														}),
													}),
												],
											}),
										},
										t,
									);
								}),
							],
						}),
					}),
				});
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 826, 636, 593, 792], () => t(845)), (_N_E = e.O());
	},
]);
