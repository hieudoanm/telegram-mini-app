(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[581],
	{
		812: (e, r, t) => {
			'use strict';
			t.d(r, { k5: () => u });
			var s = t(148),
				n = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				o = s.createContext && s.createContext(n),
				l = ['attr', 'size', 'title'];
			function i() {
				return (i = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var r = 1; r < arguments.length; r++) {
								var t = arguments[r];
								for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
							}
							return e;
						}).apply(this, arguments);
			}
			function a(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					r &&
						(s = s.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable;
						})),
						t.push.apply(t, s);
				}
				return t;
			}
			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(t), !0).forEach(function (r) {
								var s, n, o;
								(s = e),
									(n = r),
									(o = t[r]),
									(n = (function (e) {
										var r = (function (e, r) {
											if ('object' != typeof e || !e) return e;
											var t = e[Symbol.toPrimitive];
											if (void 0 !== t) {
												var s = t.call(e, r || 'default');
												if ('object' != typeof s) return s;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === r ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof r ? r : r + '';
									})(n)) in s
										? Object.defineProperty(s, n, { value: o, enumerable: !0, configurable: !0, writable: !0 })
										: (s[n] = o);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
							: a(Object(t)).forEach(function (r) {
									Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
								});
				}
				return e;
			}
			function u(e) {
				return (r) =>
					s.createElement(
						d,
						i({ attr: c({}, e.attr) }, r),
						(function e(r) {
							return r && r.map((r, t) => s.createElement(r.tag, c({ key: t }, r.attr), e(r.child)));
						})(e.child),
					);
			}
			function d(e) {
				var r = (r) => {
					var t,
						{ attr: n, size: o, title: a } = e,
						u = (function (e, r) {
							if (null == e) return {};
							var t,
								s,
								n = (function (e, r) {
									if (null == e) return {};
									var t = {};
									for (var s in e)
										if (Object.prototype.hasOwnProperty.call(e, s)) {
											if (r.indexOf(s) >= 0) continue;
											t[s] = e[s];
										}
									return t;
								})(e, r);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(e);
								for (s = 0; s < o.length; s++)
									(t = o[s]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
							}
							return n;
						})(e, l),
						d = o || r.size || '1em';
					return (
						r.className && (t = r.className),
						e.className && (t = (t ? t + ' ' : '') + e.className),
						s.createElement(
							'svg',
							i({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, n, u, {
								className: t,
								style: c(c({ color: e.color || r.color }, r.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							a && s.createElement('title', null, a),
							e.children,
						)
					);
				};
				return void 0 !== o ? s.createElement(o.Consumer, null, (e) => r(e)) : r(n);
			}
		},
		1637: (e, r, t) => {
			'use strict';
			t.r(r), t.d(r, { default: () => o });
			var s = t(5640),
				n = t(6440);
			let o = () =>
				(0, s.jsx)(n.U, {
					activeId: 'profile',
					children: (0, s.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							(0, s.jsx)('h1', { className: 'text-3xl font-bold', children: 'Terms of Service' }),
							(0, s.jsx)('p', {
								children:
									'Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website or services.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '1. Acceptance of Terms' }),
							(0, s.jsx)('p', {
								children:
									'By accessing or using our services, you agree to be bound by these Terms. If you disagree, please do not use our services.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '2. Use of Services' }),
							(0, s.jsx)('p', {
								children:
									'You agree to use our services only for lawful purposes and in compliance with all applicable laws.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '3. Intellectual Property' }),
							(0, s.jsx)('p', {
								children:
									'All content and materials on our site are our intellectual property and may not be used without our prior written consent.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '4. Termination' }),
							(0, s.jsx)('p', {
								children:
									'We may suspend or terminate your access to our services at any time, without prior notice or liability.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '5. Limitation of Liability' }),
							(0, s.jsx)('p', {
								children:
									'We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '6. Changes to Terms' }),
							(0, s.jsx)('p', {
								children:
									'We reserve the right to modify these Terms at any time. Changes will be posted on this page.',
							}),
							(0, s.jsx)('h2', { className: 'text-xl font-semibold', children: '7. Contact Us' }),
							(0, s.jsx)('p', {
								children: 'If you have any questions about these Terms, please contact us at terms@example.com.',
							}),
						],
					}),
				});
		},
		6440: (e, r, t) => {
			'use strict';
			t.d(r, { U: () => d });
			var s = t(5640);
			let n = (e) => {
				let { children: r = (0, s.jsx)(s.Fragment, {}) } = e;
				return (0, s.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: r,
				});
			};
			var o = t(5089),
				l = t.n(o),
				i = t(9695);
			let a = (e) => {
				let { activeId: r } = e;
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
									id: t = '',
									href: n = '',
									text: o = '',
									icon: i = (0, s.jsx)(s.Fragment, {}),
									activeIcon: a = (0, s.jsx)(s.Fragment, {}),
								} = e,
								c = t === r;
							return (0, s.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, s.jsx)(l(), {
										href: n,
										children: (0, s.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, s.jsx)('span', {
													className: 'text-3xl',
													children: c
														? (0, s.jsx)(s.Fragment, { children: a })
														: (0, s.jsx)(s.Fragment, { children: i }),
												}),
												(0, s.jsx)('span', { className: 'text-xs', children: o }),
											],
										}),
									}),
								},
								t,
							);
						}),
					}),
				});
			};
			var c = t(1211),
				u = t(148);
			let d = (e) => {
				let { activeId: r = '', children: t = (0, s.jsx)(s.Fragment, {}) } = e,
					{ requestFullscreen: o } = (0, c.j)();
				return (
					(0, u.useEffect)(() => {
						o();
					}, [o]),
					(0, s.jsxs)(n, {
						children: [
							(0, s.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, s.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, s.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: t }),
							(0, s.jsx)(a, { activeId: r }),
						],
					})
				);
			};
		},
		9522: (e, r, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile/terms-of-use',
				function () {
					return t(1637);
				},
			]);
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [72, 89, 636, 593, 792], () => r(9522)), (_N_E = e.O());
	},
]);
