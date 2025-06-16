(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[503],
	{
		58: (e, t, r) => {
			e.exports = r(7127);
		},
		812: (e, t, r) => {
			'use strict';
			r.d(t, { k5: () => c });
			var i = r(148),
				o = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
				n = i.createContext && i.createContext(o),
				l = ['attr', 'size', 'title'];
			function s() {
				return (s = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
							}
							return e;
						}).apply(this, arguments);
			}
			function a(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t &&
						(i = i.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						r.push.apply(r, i);
				}
				return r;
			}
			function u(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								var i, o, n;
								(i = e),
									(o = t),
									(n = r[t]),
									(o = (function (e) {
										var t = (function (e, t) {
											if ('object' != typeof e || !e) return e;
											var r = e[Symbol.toPrimitive];
											if (void 0 !== r) {
												var i = r.call(e, t || 'default');
												if ('object' != typeof i) return i;
												throw TypeError('@@toPrimitive must return a primitive value.');
											}
											return ('string' === t ? String : Number)(e);
										})(e, 'string');
										return 'symbol' == typeof t ? t : t + '';
									})(o)) in i
										? Object.defineProperty(i, o, { value: n, enumerable: !0, configurable: !0, writable: !0 })
										: (i[o] = n);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
								});
				}
				return e;
			}
			function c(e) {
				return (t) =>
					i.createElement(
						d,
						s({ attr: u({}, e.attr) }, t),
						(function e(t) {
							return t && t.map((t, r) => i.createElement(t.tag, u({ key: r }, t.attr), e(t.child)));
						})(e.child),
					);
			}
			function d(e) {
				var t = (t) => {
					var r,
						{ attr: o, size: n, title: a } = e,
						c = (function (e, t) {
							if (null == e) return {};
							var r,
								i,
								o = (function (e, t) {
									if (null == e) return {};
									var r = {};
									for (var i in e)
										if (Object.prototype.hasOwnProperty.call(e, i)) {
											if (t.indexOf(i) >= 0) continue;
											r[i] = e[i];
										}
									return r;
								})(e, t);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(e);
								for (i = 0; i < n.length; i++)
									(r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
							}
							return o;
						})(e, l),
						d = n || t.size || '1em';
					return (
						t.className && (r = t.className),
						e.className && (r = (r ? r + ' ' : '') + e.className),
						i.createElement(
							'svg',
							s({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, o, c, {
								className: r,
								style: u(u({ color: e.color || t.color }, t.style), e.style),
								height: d,
								width: d,
								xmlns: 'http://www.w3.org/2000/svg',
							}),
							a && i.createElement('title', null, a),
							e.children,
						)
					);
				};
				return void 0 !== n ? i.createElement(n.Consumer, null, (e) => t(e)) : t(o);
			}
		},
		1032: (e, t) => {
			'use strict';
			function r(e) {
				var t;
				let { config: r, src: i, width: o, quality: n } = e,
					l =
						n ||
						(null == (t = r.qualities) ? void 0 : t.reduce((e, t) => (Math.abs(t - 75) < Math.abs(e - 75) ? t : e))) ||
						75;
				return (
					r.path + '?url=' + encodeURIComponent(i) + '&w=' + o + '&q=' + l + (i.startsWith('/_next/static/media/'), '')
				);
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'default', {
					enumerable: !0,
					get: function () {
						return i;
					},
				}),
				(r.__next_img_default = !0);
			let i = r;
		},
		3349: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'Image', {
					enumerable: !0,
					get: function () {
						return w;
					},
				});
			let i = r(1532),
				o = r(8781),
				n = r(5640),
				l = o._(r(148)),
				s = i._(r(7897)),
				a = i._(r(9142)),
				u = r(6229),
				c = r(5058),
				d = r(758);
			r(6208);
			let f = r(8651),
				p = i._(r(1032)),
				g = r(5264),
				m = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
					path: '/telegram-mini-app/_next/image/',
					loader: 'default',
					dangerouslyAllowSVG: !1,
					unoptimized: !0,
				};
			function h(e, t, r, i, o, n, l) {
				let s = null == e ? void 0 : e.src;
				e &&
					e['data-loaded-src'] !== s &&
					((e['data-loaded-src'] = s),
					('decode' in e ? e.decode() : Promise.resolve())
						.catch(() => {})
						.then(() => {
							if (e.parentElement && e.isConnected) {
								if (('empty' !== t && o(!0), null == r ? void 0 : r.current)) {
									let t = new Event('load');
									Object.defineProperty(t, 'target', { writable: !1, value: e });
									let i = !1,
										o = !1;
									r.current({
										...t,
										nativeEvent: t,
										currentTarget: e,
										target: e,
										isDefaultPrevented: () => i,
										isPropagationStopped: () => o,
										persist: () => {},
										preventDefault: () => {
											(i = !0), t.preventDefault();
										},
										stopPropagation: () => {
											(o = !0), t.stopPropagation();
										},
									});
								}
								(null == i ? void 0 : i.current) && i.current(e);
							}
						}));
			}
			function b(e) {
				return l.use ? { fetchPriority: e } : { fetchpriority: e };
			}
			let v = (0, l.forwardRef)((e, t) => {
				let {
						src: r,
						srcSet: i,
						sizes: o,
						height: s,
						width: a,
						decoding: u,
						className: c,
						style: d,
						fetchPriority: f,
						placeholder: p,
						loading: m,
						unoptimized: v,
						fill: y,
						onLoadRef: w,
						onLoadingCompleteRef: O,
						setBlurComplete: j,
						setShowAltText: _,
						sizesInput: E,
						onLoad: P,
						onError: S,
						...C
					} = e,
					x = (0, l.useCallback)(
						(e) => {
							e && (S && (e.src = e.src), e.complete && h(e, p, w, O, j, v, E));
						},
						[r, p, w, O, j, S, v, E],
					),
					z = (0, g.useMergedRef)(t, x);
				return (0, n.jsx)('img', {
					...C,
					...b(f),
					loading: m,
					width: a,
					height: s,
					decoding: u,
					'data-nimg': y ? 'fill' : '1',
					className: c,
					style: d,
					sizes: o,
					srcSet: i,
					src: r,
					ref: z,
					onLoad: (e) => {
						h(e.currentTarget, p, w, O, j, v, E);
					},
					onError: (e) => {
						_(!0), 'empty' !== p && j(!0), S && S(e);
					},
				});
			});
			function y(e) {
				let { isAppRouter: t, imgAttributes: r } = e,
					i = {
						as: 'image',
						imageSrcSet: r.srcSet,
						imageSizes: r.sizes,
						crossOrigin: r.crossOrigin,
						referrerPolicy: r.referrerPolicy,
						...b(r.fetchPriority),
					};
				return t && s.default.preload
					? (s.default.preload(r.src, i), null)
					: (0, n.jsx)(a.default, {
							children: (0, n.jsx)(
								'link',
								{ rel: 'preload', href: r.srcSet ? void 0 : r.src, ...i },
								'__nimg-' + r.src + r.srcSet + r.sizes,
							),
						});
			}
			let w = (0, l.forwardRef)((e, t) => {
				let r = (0, l.useContext)(f.RouterContext),
					i = (0, l.useContext)(d.ImageConfigContext),
					o = (0, l.useMemo)(() => {
						var e;
						let t = m || i || c.imageConfigDefault,
							r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
							o = t.deviceSizes.sort((e, t) => e - t),
							n = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
						return { ...t, allSizes: r, deviceSizes: o, qualities: n };
					}, [i]),
					{ onLoad: s, onLoadingComplete: a } = e,
					g = (0, l.useRef)(s);
				(0, l.useEffect)(() => {
					g.current = s;
				}, [s]);
				let h = (0, l.useRef)(a);
				(0, l.useEffect)(() => {
					h.current = a;
				}, [a]);
				let [b, w] = (0, l.useState)(!1),
					[O, j] = (0, l.useState)(!1),
					{ props: _, meta: E } = (0, u.getImgProps)(e, {
						defaultLoader: p.default,
						imgConf: o,
						blurComplete: b,
						showAltText: O,
					});
				return (0, n.jsxs)(n.Fragment, {
					children: [
						(0, n.jsx)(v, {
							..._,
							unoptimized: E.unoptimized,
							placeholder: E.placeholder,
							fill: E.fill,
							onLoadRef: g,
							onLoadingCompleteRef: h,
							setBlurComplete: w,
							setShowAltText: j,
							sizesInput: e.sizes,
							ref: t,
						}),
						E.priority ? (0, n.jsx)(y, { isAppRouter: !r, imgAttributes: _ }) : null,
					],
				});
			});
			('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
				void 0 === t.default.__esModule &&
				(Object.defineProperty(t.default, '__esModule', { value: !0 }),
				Object.assign(t.default, t),
				(e.exports = t.default));
		},
		6229: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getImgProps', {
					enumerable: !0,
					get: function () {
						return a;
					},
				}),
				r(6208);
			let i = r(9606),
				o = r(5058),
				n = ['-moz-initial', 'fill', 'none', 'scale-down', void 0];
			function l(e) {
				return void 0 !== e.default;
			}
			function s(e) {
				return void 0 === e
					? e
					: 'number' == typeof e
						? Number.isFinite(e)
							? e
							: NaN
						: 'string' == typeof e && /^[0-9]+$/.test(e)
							? parseInt(e, 10)
							: NaN;
			}
			function a(e, t) {
				var r, a;
				let u,
					c,
					d,
					{
						src: f,
						sizes: p,
						unoptimized: g = !1,
						priority: m = !1,
						loading: h,
						className: b,
						quality: v,
						width: y,
						height: w,
						fill: O = !1,
						style: j,
						overrideSrc: _,
						onLoad: E,
						onLoadingComplete: P,
						placeholder: S = 'empty',
						blurDataURL: C,
						fetchPriority: x,
						decoding: z = 'async',
						layout: R,
						objectFit: N,
						objectPosition: M,
						lazyBoundary: k,
						lazyRoot: D,
						...I
					} = e,
					{ imgConf: A, showAltText: F, blurComplete: T, defaultLoader: B } = t,
					G = A || o.imageConfigDefault;
				if ('allSizes' in G) u = G;
				else {
					let e = [...G.deviceSizes, ...G.imageSizes].sort((e, t) => e - t),
						t = G.deviceSizes.sort((e, t) => e - t),
						i = null == (r = G.qualities) ? void 0 : r.sort((e, t) => e - t);
					u = { ...G, allSizes: e, deviceSizes: t, qualities: i };
				}
				if (void 0 === B)
					throw Object.defineProperty(
						Error(
							'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config',
						),
						'__NEXT_ERROR_CODE',
						{ value: 'E163', enumerable: !1, configurable: !0 },
					);
				let L = I.loader || B;
				delete I.loader, delete I.srcSet;
				let W = '__next_img_default' in L;
				if (W) {
					if ('custom' === u.loader)
						throw Object.defineProperty(
							Error(
								'Image with src "' +
									f +
									'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
							),
							'__NEXT_ERROR_CODE',
							{ value: 'E252', enumerable: !1, configurable: !0 },
						);
				} else {
					let e = L;
					L = (t) => {
						let { config: r, ...i } = t;
						return e(i);
					};
				}
				if (R) {
					'fill' === R && (O = !0);
					let e = { intrinsic: { maxWidth: '100%', height: 'auto' }, responsive: { width: '100%', height: 'auto' } }[R];
					e && (j = { ...j, ...e });
					let t = { responsive: '100vw', fill: '100vw' }[R];
					t && !p && (p = t);
				}
				let q = '',
					X = s(y),
					U = s(w);
				if ((a = f) && 'object' == typeof a && (l(a) || void 0 !== a.src)) {
					let e = l(f) ? f.default : f;
					if (!e.src)
						throw Object.defineProperty(
							Error(
								'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
									JSON.stringify(e),
							),
							'__NEXT_ERROR_CODE',
							{ value: 'E460', enumerable: !1, configurable: !0 },
						);
					if (!e.height || !e.width)
						throw Object.defineProperty(
							Error(
								'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
									JSON.stringify(e),
							),
							'__NEXT_ERROR_CODE',
							{ value: 'E48', enumerable: !1, configurable: !0 },
						);
					if (((c = e.blurWidth), (d = e.blurHeight), (C = C || e.blurDataURL), (q = e.src), !O))
						if (X || U) {
							if (X && !U) {
								let t = X / e.width;
								U = Math.round(e.height * t);
							} else if (!X && U) {
								let t = U / e.height;
								X = Math.round(e.width * t);
							}
						} else (X = e.width), (U = e.height);
				}
				let V = !m && ('lazy' === h || void 0 === h);
				(!(f = 'string' == typeof f ? f : q) || f.startsWith('data:') || f.startsWith('blob:')) && ((g = !0), (V = !1)),
					u.unoptimized && (g = !0),
					W && !u.dangerouslyAllowSVG && f.split('?', 1)[0].endsWith('.svg') && (g = !0);
				let J = s(v),
					Y = Object.assign(
						O
							? {
									position: 'absolute',
									height: '100%',
									width: '100%',
									left: 0,
									top: 0,
									right: 0,
									bottom: 0,
									objectFit: N,
									objectPosition: M,
								}
							: {},
						F ? {} : { color: 'transparent' },
						j,
					),
					H =
						T || 'empty' === S
							? null
							: 'blur' === S
								? 'url("data:image/svg+xml;charset=utf-8,' +
									(0, i.getImageBlurSvg)({
										widthInt: X,
										heightInt: U,
										blurWidth: c,
										blurHeight: d,
										blurDataURL: C || '',
										objectFit: Y.objectFit,
									}) +
									'")'
								: 'url("' + S + '")',
					$ = n.includes(Y.objectFit) ? ('fill' === Y.objectFit ? '100% 100%' : 'cover') : Y.objectFit,
					K = H
						? {
								backgroundSize: $,
								backgroundPosition: Y.objectPosition || '50% 50%',
								backgroundRepeat: 'no-repeat',
								backgroundImage: H,
							}
						: {},
					Q = (function (e) {
						let { config: t, src: r, unoptimized: i, width: o, quality: n, sizes: l, loader: s } = e;
						if (i) return { src: r, srcSet: void 0, sizes: void 0 };
						let { widths: a, kind: u } = (function (e, t, r) {
								let { deviceSizes: i, allSizes: o } = e;
								if (r) {
									let e = /(^|\s)(1?\d?\d)vw/g,
										t = [];
									for (let i; (i = e.exec(r)); ) t.push(parseInt(i[2]));
									if (t.length) {
										let e = 0.01 * Math.min(...t);
										return { widths: o.filter((t) => t >= i[0] * e), kind: 'w' };
									}
									return { widths: o, kind: 'w' };
								}
								return 'number' != typeof t
									? { widths: i, kind: 'w' }
									: {
											widths: [...new Set([t, 2 * t].map((e) => o.find((t) => t >= e) || o[o.length - 1]))],
											kind: 'x',
										};
							})(t, o, l),
							c = a.length - 1;
						return {
							sizes: l || 'w' !== u ? l : '100vw',
							srcSet: a
								.map((e, i) => s({ config: t, src: r, quality: n, width: e }) + ' ' + ('w' === u ? e : i + 1) + u)
								.join(', '),
							src: s({ config: t, src: r, quality: n, width: a[c] }),
						};
					})({ config: u, src: f, unoptimized: g, width: X, quality: J, sizes: p, loader: L });
				return {
					props: {
						...I,
						loading: V ? 'lazy' : h,
						fetchPriority: x,
						width: X,
						height: U,
						decoding: z,
						className: b,
						style: { ...Y, ...K },
						sizes: Q.sizes,
						srcSet: Q.srcSet,
						src: _ || Q.src,
					},
					meta: { unoptimized: g, priority: m, placeholder: S, fill: O },
				};
			}
		},
		7127: (e, t, r) => {
			'use strict';
			Object.defineProperty(t, '__esModule', { value: !0 }),
				!(function (e, t) {
					for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
				})(t, {
					default: function () {
						return a;
					},
					getImageProps: function () {
						return s;
					},
				});
			let i = r(1532),
				o = r(6229),
				n = r(3349),
				l = i._(r(1032));
			function s(e) {
				let { props: t } = (0, o.getImgProps)(e, {
					defaultLoader: l.default,
					imgConf: {
						deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
						imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
						path: '/telegram-mini-app/_next/image/',
						loader: 'default',
						dangerouslyAllowSVG: !1,
						unoptimized: !0,
					},
				});
				for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
				return { props: t };
			}
			let a = n.Image;
		},
		9606: (e, t) => {
			'use strict';
			function r(e) {
				let { widthInt: t, heightInt: r, blurWidth: i, blurHeight: o, blurDataURL: n, objectFit: l } = e,
					s = i ? 40 * i : t,
					a = o ? 40 * o : r,
					u = s && a ? "viewBox='0 0 " + s + ' ' + a + "'" : '';
				return (
					"%3Csvg xmlns='http://www.w3.org/2000/svg' " +
					u +
					"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
					(u ? 'none' : 'contain' === l ? 'xMidYMid' : 'cover' === l ? 'xMidYMid slice' : 'none') +
					"' style='filter: url(%23b);' href='" +
					n +
					"'/%3E%3C/svg%3E"
				);
			}
			Object.defineProperty(t, '__esModule', { value: !0 }),
				Object.defineProperty(t, 'getImageBlurSvg', {
					enumerable: !0,
					get: function () {
						return r;
					},
				});
		},
	},
]);
