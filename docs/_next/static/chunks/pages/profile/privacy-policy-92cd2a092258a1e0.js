(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[849],
	{
		3469: (e, t, s) => {
			'use strict';
			s.r(t), s.d(t, { default: () => i });
			var r = s(5640),
				a = s(6440);
			let i = () =>
				(0, r.jsx)(a.U, {
					activeId: 'profile',
					children: (0, r.jsxs)('div', {
						className: 'flex flex-col gap-y-4 p-4',
						children: [
							(0, r.jsx)('h1', { className: 'text-3xl font-bold', children: 'Privacy Policy' }),
							(0, r.jsx)('p', {
								children:
									'Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.',
							}),
							(0, r.jsx)('h2', { className: 'text-xl font-semibold', children: '1. Information We Collect' }),
							(0, r.jsx)('p', {
								children:
									'We may collect personal information you provide directly to us, such as your name, email address, and other contact details.',
							}),
							(0, r.jsx)('h2', { className: 'text-xl font-semibold', children: '2. How We Use Information' }),
							(0, r.jsx)('p', {
								children:
									'We use the information to provide, maintain, and improve our services, and to communicate with you.',
							}),
							(0, r.jsx)('h2', { className: 'text-xl font-semibold', children: '3. Data Security' }),
							(0, r.jsx)('p', {
								children: 'We implement security measures to protect your data but cannot guarantee absolute security.',
							}),
							(0, r.jsx)('h2', { className: 'text-xl font-semibold', children: '4. Changes to This Policy' }),
							(0, r.jsx)('p', {
								children:
									'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
							}),
							(0, r.jsx)('h2', { className: 'text-xl font-semibold', children: '5. Contact Us' }),
							(0, r.jsx)('p', {
								children:
									'If you have any questions about this Privacy Policy, please contact us at privacy@example.com.',
							}),
						],
					}),
				});
		},
		6440: (e, t, s) => {
			'use strict';
			s.d(t, { U: () => d });
			var r = s(5640);
			let a = (e) => {
				let { children: t = (0, r.jsx)(r.Fragment, {}) } = e;
				return (0, r.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg flex-col overflow-hidden bg-neutral-950/10',
					children: t,
				});
			};
			var i = s(5089),
				l = s.n(i),
				c = s(5160);
			let n = (e) => {
				let { activeId: t } = e;
				return (0, r.jsx)('nav', {
					className: 'border-t border-neutral-900 bg-neutral-950',
					children: (0, r.jsx)('div', {
						className: 'grid grid-cols-5',
						children: [
							{ id: 'home', href: '/', icon: (0, r.jsx)(c.cEk, {}), activeIcon: (0, r.jsx)(c.ZVi, {}), text: 'Home' },
							{
								id: 'games',
								href: '/games',
								icon: (0, r.jsx)(c.SkF, {}),
								activeIcon: (0, r.jsx)(c.rNT, {}),
								text: 'Games',
							},
							{
								id: 'store',
								href: '/store',
								icon: (0, r.jsx)(c.Qsx, {}),
								activeIcon: (0, r.jsx)(c.XsE, {}),
								text: 'Store',
							},
							{
								id: 'news',
								href: '/news',
								icon: (0, r.jsx)(c.rRm, {}),
								activeIcon: (0, r.jsx)(c.mKO, {}),
								text: 'News',
							},
							{
								id: 'profile',
								href: '/profile',
								icon: (0, r.jsx)(c.NMe, {}),
								activeIcon: (0, r.jsx)(c.MrL, {}),
								text: 'Profile',
							},
						].map((e) => {
							let {
									id: s = '',
									href: a = '',
									text: i = '',
									icon: c = (0, r.jsx)(r.Fragment, {}),
									activeIcon: n = (0, r.jsx)(r.Fragment, {}),
								} = e,
								o = s === t;
							return (0, r.jsx)(
								'div',
								{
									className: 'col-span-1',
									children: (0, r.jsx)(l(), {
										href: a,
										children: (0, r.jsxs)('div', {
											className: 'flex flex-col items-center justify-center gap-y-0.5 pb-2 '.concat(
												o ? 'text-yellow-500 border-t-4 border-yellow-500 pt-2' : 'pt-3',
											),
											children: [
												(0, r.jsx)('span', {
													className: 'text-3xl',
													children: o
														? (0, r.jsx)(r.Fragment, { children: n })
														: (0, r.jsx)(r.Fragment, { children: c }),
												}),
												(0, r.jsx)('span', { className: 'text-xs', children: i }),
											],
										}),
									}),
								},
								s,
							);
						}),
					}),
				});
			};
			var o = s(1211),
				x = s(148);
			let d = (e) => {
				let { activeId: t = '', children: s = (0, r.jsx)(r.Fragment, {}) } = e,
					{ requestFullscreen: i } = (0, o.j)();
				return (
					(0, x.useEffect)(() => {
						i();
					}, [i]),
					(0, r.jsxs)(a, {
						children: [
							(0, r.jsx)('header', {
								className: 'border-b border-neutral-900 pt-6 pb-4',
								children: (0, r.jsx)('h1', { className: 'text-center text-2xl font-black', children: 'Mini App' }),
							}),
							(0, r.jsx)('main', { className: 'scrollbar-none grow overflow-y-auto', children: s }),
							(0, r.jsx)(n, { activeId: t }),
						],
					})
				);
			};
		},
		6826: (e, t, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/profile/privacy-policy',
				function () {
					return s(3469);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [89, 636, 593, 792], () => t(6826)), (_N_E = e.O());
	},
]);
