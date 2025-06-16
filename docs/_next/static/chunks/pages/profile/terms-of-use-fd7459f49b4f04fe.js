(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[581],
	{
		1637: (e, s, r) => {
			'use strict';
			r.r(s), r.d(s, { default: () => a });
			var t = r(5640),
				l = r(6440);
			let a = () =>
				(0, t.jsx)(l.U, {
					activeId: 'profile',
					children: (0, t.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							(0, t.jsx)('h1', { className: 'text-3xl font-bold', children: 'Terms of Service' }),
							(0, t.jsx)('p', {
								children:
									'Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website or services.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '1. Acceptance of Terms' }),
							(0, t.jsx)('p', {
								children:
									'By accessing or using our services, you agree to be bound by these Terms. If you disagree, please do not use our services.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '2. Use of Services' }),
							(0, t.jsx)('p', {
								children:
									'You agree to use our services only for lawful purposes and in compliance with all applicable laws.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '3. Intellectual Property' }),
							(0, t.jsx)('p', {
								children:
									'All content and materials on our site are our intellectual property and may not be used without our prior written consent.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '4. Termination' }),
							(0, t.jsx)('p', {
								children:
									'We may suspend or terminate your access to our services at any time, without prior notice or liability.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '5. Limitation of Liability' }),
							(0, t.jsx)('p', {
								children:
									'We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '6. Changes to Terms' }),
							(0, t.jsx)('p', {
								children:
									'We reserve the right to modify these Terms at any time. Changes will be posted on this page.',
							}),
							(0, t.jsx)('h2', { className: 'text-xl font-semibold', children: '7. Contact Us' }),
							(0, t.jsx)('p', {
								children: 'If you have any questions about these Terms, please contact us at terms@example.com.',
							}),
						],
					}),
				});
		},
		6440: (e, s, r) => {
			'use strict';
			r.d(s, { U: () => d });
			var t = r(5640);
			let l = (e) => {
				let { children: s = (0, t.jsx)(t.Fragment, {}) } = e;
				return (0, t.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: s,
				});
			};
			var a = r(5089),
				i = r.n(a),
				n = r(5160);
			let o = (e) => {
				let { activeId: s } = e;
				return (0, t.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, t.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, t.jsx)(n.cEk, {}), activeIcon: (0, t.jsx)(n.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, t.jsx)(n.SkF, {}),
								activeIcon: (0, t.jsx)(n.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, t.jsx)(n.Qsx, {}),
								activeIcon: (0, t.jsx)(n.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, t.jsx)(n.rRm, {}),
								activeIcon: (0, t.jsx)(n.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, t.jsx)(n.NMe, {}),
								activeIcon: (0, t.jsx)(n.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: r = '',
									href: l = '',
									text: a = '',
									icon: n = (0, t.jsx)(t.Fragment, {}),
									activeIcon: o = (0, t.jsx)(t.Fragment, {}),
								} = e,
								c = r === s;
							return (0, t.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, t.jsx)(i(), {
										href: l,
										children: (0, t.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												c ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, t.jsx)('span', {
													className: 'text-3xl',
													children: c
														? (0, t.jsx)(t.Fragment, { children: o })
														: (0, t.jsx)(t.Fragment, { children: n }),
												}),
												(0, t.jsx)('span', { className: 'text-xs', children: a }),
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
				x = r(148);
			let d = (e) => {
				let { activeId: s = '', children: r = (0, t.jsx)(t.Fragment, {}) } = e,
					{ requestFullscreen: a } = (0, c.j)();
				return (
					(0, x.useEffect)(() => {
						a();
					}, [a]),
					(0, t.jsxs)(l, {
						children: [
							(0, t.jsx)('header', {
								className: 'border-b border-neutral-900 pt-7 pb-4',
								children: (0, t.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, t.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: r }),
							(0, t.jsx)(o, { activeId: s }),
						],
					})
				);
			};
		},
		9522: (e, s, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile/terms-of-use',
				function () {
					return r(1637);
				},
			]);
		},
	},
	(e) => {
		var s = (s) => e((e.s = s));
		e.O(0, [89, 636, 593, 792], () => s(9522)), (_N_E = e.O());
	},
]);
