(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[849],
	{
		812: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => u });
			var n = r(148),
				o = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				i = n.createContext && n.createContext(o),
				s = ['attr', 'size', 'title'];
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
			function l(e, t) {
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
			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? l(Object(r), !0).forEach(function (t) {
								var n, o, i;
								(n = e),
									(o = t),
									(i = r[t]),
									(o = (function (e) {
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
									})(o)) in n
										? Object.defineProperty(n, o, { value: i, enumerable: !0, configurable: !0, writable: !0 })
										: (n[o] = i);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: l(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function u(e) {
				return (t) =>
					n.createElement(
						d,
						a({ attr: c({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => n.createElement(t.tag, c({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: o, size: i, title: l } = e,
						u = (function (e, t) {
							if (null == e) return {};
							var r,
								n,
								o = (function (e, t) {
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
								var i = Object.getOwnPropertySymbols(e);
								for (n = 0; n < i.length; n++)
									(r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
							}
							return o;
						})(e, s),
						d = i || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						n.createElement(
							'svg',
							a({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, o, u, {
								className: r,
								style: c(c({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							l && n.createElement('title', null, l),
							e.children,
						)
					);
				};
				return void 0 !== i ? n.createElement(i.Consumer, null, (e) => t(e)) : t(o);
			}
		},
		3469: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => i });
			var n = r(5640),
				o = r(6440);
			let i = () =>
				(0, n.jsx)(o.U, {
					activeId: 'profile',
					children: (0, n.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							(0, n.jsx)('h1', { className: 'text-3xl font-bold', children: 'Privacy Policy' }),
							(0, n.jsx)('p', {
								children:
									'Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.',
							}),
							(0, n.jsx)('h2', { className: 'text-xl font-semibold', children: '1. Information We Collect' }),
							(0, n.jsx)('p', {
								children:
									'We may collect personal information you provide directly to us, such as your name, email address, and other contact details.',
							}),
							(0, n.jsx)('h2', { className: 'text-xl font-semibold', children: '2. How We Use Information' }),
							(0, n.jsx)('p', {
								children:
									'We use the information to provide, maintain, and improve our services, and to communicate with you.',
							}),
							(0, n.jsx)('h2', { className: 'text-xl font-semibold', children: '3. Data Security' }),
							(0, n.jsx)('p', {
								children: 'We implement security measures to protect your data but cannot guarantee absolute security.',
							}),
							(0, n.jsx)('h2', { className: 'text-xl font-semibold', children: '4. Changes to This Policy' }),
							(0, n.jsx)('p', {
								children:
									'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
							}),
							(0, n.jsx)('h2', { className: 'text-xl font-semibold', children: '5. Contact Us' }),
							(0, n.jsx)('p', {
								children:
									'If you have any questions about this Privacy Policy, please contact us at privacy@example.com.',
							}),
						],
					}),
				});
		},
		6440: (e, t, r) => {
			'use strict';
			r.d(t, { U: () => d });
			var n = r(5640);
			let o = (e) => {
				let { children: t = (0, n.jsx)(n.Fragment, {}) } = e;
				return (0, n.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var i = r(5089),
				s = r.n(i),
				a = r(9695);
			let l = (e) => {
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
									href: o = '',
									text: i = '',
									icon: a = (0, n.jsx)(n.Fragment, {}),
									activeIcon: l = (0, n.jsx)(n.Fragment, {}),
								} = e,
								c = r === t;
							return (0, n.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, n.jsx)(s(), {
										href: o,
										children: (0, n.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, n.jsx)('span', {
													className: 'text-3xl',
													children: c
														? (0, n.jsx)(n.Fragment, { children: l })
														: (0, n.jsx)(n.Fragment, { children: a }),
												}),
												(0, n.jsx)('span', { className: 'text-xs', children: i }),
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
			var c = r(1211),
				u = r(148);
			let d = (e) => {
				let { activeId: t = '', children: r = (0, n.jsx)(n.Fragment, {}) } = e,
					{ requestFullscreen: i } = (0, c.j)();
				return (
					(0, u.useEffect)(() => {
						i();
					}, [i]),
					(0, n.jsxs)(o, {
						children: [
							(0, n.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, n.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, n.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, n.jsx)(l, { activeId: t }),
						],
					})
				);
			};
		},
		6826: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile/privacy-policy',
				function () {
					return r(3469);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [72, 89, 636, 593, 792], () => t(6826)), (_N_E = e.O());
	},
]);
