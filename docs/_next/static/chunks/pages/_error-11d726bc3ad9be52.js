(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[731],
	{
		2351: (e, r, s) => {
			'use strict';
			s.d(r, { L: () => c });
			var t = s(5640),
				l = s(6826),
				n = s.n(l);
			let c = (e) => {
				let { code: r } = e;
				return (0, t.jsx)('div', {
					className: 'mx-auto flex h-screen w-full max-w-lg items-center justify-center border border-neutral-800 p-8',
					children: (0, t.jsxs)('div', {
						className: 'flex flex-col items-center justify-center gap-y-8',
						children: [
							(0, t.jsx)('h1', { className: 'text-9xl', children: r }),
							(0, t.jsx)(n(), {
								href: '/',
								children: (0, t.jsx)('button', {
									className: 'cursor-pointer rounded-full border border-neutral-800 px-8 py-4 text-xl',
									children: 'Go Home',
								}),
							}),
						],
					}),
				});
			};
		},
		6334: (e, r, s) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_error',
				function () {
					return s(6950);
				},
			]);
		},
		6950: (e, r, s) => {
			'use strict';
			s.r(r), s.d(r, { default: () => n });
			var t = s(5640),
				l = s(2351);
			let n = () => (0, t.jsx)(l.L, { code: '500' });
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [826, 636, 593, 792], () => r(6334)), (_N_E = e.O());
	},
]);
