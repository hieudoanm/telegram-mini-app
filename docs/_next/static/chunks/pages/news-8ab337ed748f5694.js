(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[277],
	{
		1477: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/news',
				function () {
					return r(9782);
				},
			]);
		},
		2461: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => o });
			var n = r(5640);
			let a = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var s = r(6826),
				l = r.n(s),
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
										href: a = '',
										text: s = '',
										icon: i = (0, n.jsx)(n.Fragment, {}),
										activeIcon: c = (0, n.jsx)(n.Fragment, {}),
									} = e,
									o = r === t;
								return (0, n.jsx)(
									'div',
									{
										className: 'col-span-1',
										children: (0, n.jsx)(l(), {
											href: a,
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
				o = (e) => {
					let { activeId: t = '', children: r = (0, n.jsx)(n.Fragment, {}) } = e;
					return (0, n.jsxs)(a, {
						children: [
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(c, { activeId: t }),
						],
					});
				};
		},
		4547: (e, t, r) => {
			'use strict';
			r.d(t, { Y: () => s });
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
				a = (e) => {
					let t = e % 10,
						r = e % 100;
					return 1 === t && 11 !== r ? 'st' : 2 === t && 12 !== r ? 'nd' : 3 === t && 13 !== r ? 'rd' : 'th';
				},
				s = (e) => {
					let t = n[e.getMonth()],
						r = e.getDate(),
						s = e.getFullYear(),
						l = a(r);
					return ''.concat(t, ' ').concat(r).concat(l, ' ').concat(s);
				};
		},
		7182: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var n = r(148),
				a = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				s = n.createContext && n.createContext(a),
				l = ['attr', 'size', 'title'];
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
								var n, a, s;
								(n = e),
									(a = t),
									(s = r[t]),
									(a = (function (e) {
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
									})(a)) in n
										? Object.defineProperty(n, a, { value: s, enumerable: !0, configurable: !0, writable: !0 })
										: (n[a] = s);
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
						{ attr: a, size: s, title: c } = e,
						u = (function (e, t) {
							if (null == e) return {};
							var r,
								n,
								a = (function (e, t) {
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
									(r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
							}
							return a;
						})(e, l),
						d = s || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, a, u, {
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
				return void 0 !== s ? n.createElement(s.Consumer, null, (e) => t(e)) : t(a);
			}
		},
		9782: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => u });
			var n = r(5640),
				a = r(2461),
				s = r(4547),
				l = r(6826),
				i = r.n(l),
				c = r(1238);
			let o =
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet pretium enim, egestas tincidunt orci. Nullam rutrum iaculis libero id suscipit. Nullam consectetur felis a hendrerit tincidunt. Nam sodales porttitor dui, id feugiat diam pulvinar at. Morbi pulvinar metus sed nisl egestas aliquam. In rhoncus augue a cursus tristique.',
				u = () =>
					(0, n.jsx)(a.U, {
						activeId: 'news',
						children: (0, n.jsx)('div', {
							className: 'flex flex-col gap-y-4 p-4',
							children: [
								{ id: '1', title: 'Article 1', date: new Date(), content: o, tags: ['Tag 1', 'Tag 2'] },
								{ id: '2', title: 'Article 2', date: new Date(), content: o, tags: ['Tag 1', 'Tag 2'] },
								{ id: '3', title: 'Article 3', date: new Date(), content: o, tags: ['Tag 1', 'Tag 2'] },
								{ id: '4', title: 'Article 4', date: new Date(), content: o, tags: ['Tag 1', 'Tag 2'] },
							].map((e) => {
								let { id: t = '', title: r = '', date: a = new Date(), content: l = '', tags: o = [] } = e;
								return (0, n.jsxs)(
									'div',
									{
										className: 'rounded-2xl border border-neutral-900 shadow shadow-neutral-900',
										children: [
											(0, n.jsx)('div', { className: 'aspect-video w-full border-b border-neutral-900' }),
											(0, n.jsxs)('div', {
												className: 'flex flex-col gap-y-2 p-4',
												children: [
													(0, n.jsx)('p', { className: 'text-xs text-neutral-500', children: (0, s.Y)(a) }),
													(0, n.jsx)('h1', { className: 'text-lg leading-none font-semibold', children: r }),
													(0, n.jsx)('div', {
														className: 'flex items-center gap-x-2',
														children: o.map((e) =>
															(0, n.jsx)(
																'span',
																{
																	className: 'rounded-full bg-yellow-500 px-2 py-0.5 text-xs text-neutral-900',
																	children: e,
																},
																e,
															),
														),
													}),
													(0, n.jsx)('p', { className: 'line-clamp-3 text-sm text-neutral-300', children: l }),
													(0, n.jsx)(i(), {
														href: '/news/'.concat(t),
														children: (0, n.jsxs)('div', {
															className: 'flex items-center gap-x-2',
															children: [
																(0, n.jsx)('p', { className: 'text-sm text-yellow-500', children: 'Find out more ' }),
																(0, n.jsx)(c.KiY, { className: 'text-yellow-500' }),
															],
														}),
													}),
												],
											}),
										],
									},
									t,
								);
							}),
						}),
					});
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 826, 636, 593, 792], () => t(1477)), (_N_E = e.O());
	},
]);
