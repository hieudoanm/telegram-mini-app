(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[731],
	{
		1190: (e, l, t) => {
			'use strict';
			t.d(l, { L: () => c });
			var r = t(5640),
				s = t(5549),
				n = t(3856),
				o = t(5089),
				u = t.n(o),
				d = t(148);
			let c = (e) => {
				let { code: l } = e,
					{ requestFullscreen: t } = (0, n.j)();
				return (
					(0, d.useEffect)(() => {
						t();
					}, [t]),
					(0, r.jsx)('div', {
						className:
							'mx-auto flex h-screen w-full max-w-lg items-center justify-center border border-neutral-800 p-8',
						children: (0, r.jsxs)('div', {
							className: 'flex flex-col items-center justify-center gap-y-8',
							children: [
								(0, r.jsx)('h1', { className: 'text-9xl', children: l }),
								(0, r.jsx)(u(), { href: '/', children: (0, r.jsx)(s.$, { children: 'Go Home' }) }),
							],
						}),
					})
				);
			};
		},
		5549: (e, l, t) => {
			'use strict';
			t.d(l, { $: () => s, r: () => n });
			var r = t(5640);
			let s = (e) => {
					let {
						size: l = 'md',
						type: t = 'button',
						onClick: s = () => {},
						children: n = (0, r.jsx)(r.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, r.jsx)('button', {
								type: t,
								className: 'w-full rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-neutral-900',
								onClick: s,
								children: n,
							})
						: (0, r.jsx)('button', {
								type: t,
								className: 'w-full rounded-full bg-yellow-500 px-4 py-2 font-semibold text-neutral-900',
								onClick: s,
								children: n,
							});
				},
				n = (e) => {
					let {
						size: l = 'md',
						type: t = 'button',
						onClick: s = () => {},
						children: n = (0, r.jsx)(r.Fragment, {}),
					} = e;
					return 'sm' === l
						? (0, r.jsx)('button', {
								type: t,
								className:
									'w-full rounded-full border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-500',
								onClick: s,
								children: n,
							})
						: (0, r.jsx)('button', {
								type: t,
								className: 'w-full rounded-full border border-yellow-500 px-4 py-2 font-semibold text-yellow-500',
								onClick: s,
								children: n,
							});
				};
		},
		6018: (e, l, t) => {
			'use strict';
			t.r(l), t.d(l, { default: () => n });
			var r = t(5640),
				s = t(1190);
			let n = () => (0, r.jsx)(s.L, { code: '500' });
		},
		7917: (e, l, t) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_error',
				function () {
					return t(6018);
				},
			]);
		},
	},
	(e) => {
		var l = (l) => e((e.s = l));
		e.O(0, [89, 636, 593, 792], () => l(7917)), (_N_E = e.O());
	},
]);
