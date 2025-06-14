(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[336],
	{
		336: (e, r, l) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/404',
				function () {
					return l(4850);
				},
			]);
		},
		4850: (e, r, l) => {
			'use strict';
			l.r(r), l.d(r, { default: () => c });
			var s = l(5640),
				t = l(6826),
				n = l.n(t);
			let c = () =>
				(0, s.jsx)('div', {
					className:
						'mx-auto flex h-screen w-full max-w-lg items-center justify-center border-r border-l border-neutral-800 p-8',
					children: (0, s.jsxs)('div', {
						className: 'flex flex-col items-center justify-center gap-y-8',
						children: [
							(0, s.jsx)('h1', { className: 'text-9xl', children: '404' }),
							(0, s.jsx)(n(), {
								href: '/',
								children: (0, s.jsx)('button', {
									className: 'cursor-pointer rounded-full border border-neutral-800 px-8 py-4 text-xl',
									children: 'Go Home',
								}),
							}),
						],
					}),
				});
		},
	},
	(e) => {
		var r = (r) => e((e.s = r));
		e.O(0, [826, 636, 593, 792], () => r(336)), (_N_E = e.O());
	},
]);
