(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[421],
	{
		95: (e, t, l) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/500',
				function () {
					return l(6818);
				},
			]);
		},
		1190: (e, t, l) => {
			'use strict';
			l.d(t, { L: () => a });
			var s = l(5640),
				r = l(5549),
				n = l(1211),
				u = l(5089),
				c = l.n(u),
				d = l(148);
			let a = (e) => {
				let { code: t } = e,
					{ requestFullscreen: l } = (0, n.j)();
				return (
					(0, d.useEffect)(() => {
						l();
					}, [l]),
					(0, s.jsx)('div', {
						className:
							'mx-auto flex h-screen w-full max-w-lg items-center justify-center border border-neutral-800 p-8',
						children: (0, s.jsxs)('div', {
							className: 'flex flex-col items-center justify-center gap-y-8',
							children: [
								(0, s.jsx)('h1', { className: 'text-9xl', children: t }),
								(0, s.jsx)(c(), { href: '/', children: (0, s.jsx)(r.$, { children: 'Go Home' }) }),
							],
						}),
					})
				);
			};
		},
		5549: (e, t, l) => {
			'use strict';
			l.d(t, { $: () => r });
			var s = l(5640);
			let r = (e) => {
				let { size: t = 'md', type: l = 'button', onClick: r = () => {}, children: n = (0, s.jsx)(s.Fragment, {}) } = e;
				return 'sm' === t
					? (0, s.jsx)('button', {
							type: l,
							className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
							onClick: r,
							children: n,
						})
					: (0, s.jsx)('button', {
							type: l,
							className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
							onClick: r,
							children: n,
						});
			};
		},
		6818: (e, t, l) => {
			'use strict';
			l.r(t), l.d(t, { default: () => n });
			var s = l(5640),
				r = l(1190);
			let n = () => (0, s.jsx)(r.L, { code: '500' });
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [89, 636, 593, 792], () => t(95)), (_N_E = e.O());
	},
]);
