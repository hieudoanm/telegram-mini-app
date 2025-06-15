(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		1668: (e, t, r) => {
			e.exports = r(2738);
		},
		1800: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_44e023',
				variable: '__variable_44e023',
			};
		},
		4865: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => tF });
			var s = r(5640),
				i = r(9547);
			function n(e) {
				let t = {
					subscribe(t) {
						let r = null,
							s = !1,
							i = !1,
							n = !1;
						function a() {
							if (null === r) {
								n = !0;
								return;
							}
							!i && ((i = !0), 'function' == typeof r ? r() : r && r.unsubscribe());
						}
						return (
							(r = e({
								next(e) {
									s || t.next?.(e);
								},
								error(e) {
									s || ((s = !0), t.error?.(e), a());
								},
								complete() {
									s || ((s = !0), t.complete?.(), a());
								},
							})),
							n && a(),
							{ unsubscribe: a }
						);
					},
					pipe: (...e) => e.reduce(a, t),
				};
				return t;
			}
			function a(e, t) {
				return t(e);
			}
			r(8217);
			let u = {
				INTERNAL_SERVER_ERROR: -32603,
				BAD_GATEWAY: -32603,
				SERVICE_UNAVAILABLE: -32603,
				GATEWAY_TIMEOUT: -32603,
			};
			function o(e) {
				return !!e && !Array.isArray(e) && 'object' == typeof e;
			}
			u.BAD_GATEWAY, u.SERVICE_UNAVAILABLE, u.GATEWAY_TIMEOUT, u.INTERNAL_SERVER_ERROR;
			let l = 'function' == typeof Symbol && !!Symbol.asyncIterator;
			function c(e) {
				return l && o(e) && Symbol.asyncIterator in e;
			}
			var h = class e extends Error {
				cause;
				shape;
				data;
				meta;
				constructor(t, r) {
					let s = r?.cause;
					super(t, { cause: s }),
						(this.meta = r?.meta),
						(this.cause = s),
						(this.shape = r?.result?.error),
						(this.data = r?.result?.error.data),
						(this.name = 'TRPCClientError'),
						Object.setPrototypeOf(this, e.prototype);
				}
				static from(t, r = {}) {
					return t instanceof h
						? (r.meta && (t.meta = { ...t.meta, ...r.meta }), t)
						: o(t) && o(t.error) && 'number' == typeof t.error.code && 'string' == typeof t.error.message
							? new e(t.error.message, { ...r, result: t })
							: new e('string' == typeof t ? t : o(t) && 'string' == typeof t.message ? t.message : 'Unknown error', {
									...r,
									cause: t,
								});
				}
			};
			function d(e) {
				return e
					? 'input' in e
						? e
						: { input: e, output: e }
					: {
							input: { serialize: (e) => e, deserialize: (e) => e },
							output: { serialize: (e) => e, deserialize: (e) => e },
						};
			}
			let p = (e) => 'function' == typeof e,
				f = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
			function y(e) {
				return 'input' in e
					? e.transformer.input.serialize(e.input)
					: (function (e) {
							let t = {};
							for (let r = 0; r < e.length; r++) {
								let s = e[r];
								t[r] = s;
							}
							return t;
						})(e.inputs.map((t) => e.transformer.input.serialize(t)));
			}
			let m = (e) => {
					let t = e.url.split('?'),
						r = t[0].replace(/\/$/, '') + '/' + e.path,
						s = [];
					if (
						(t[1] && s.push(t[1]), 'inputs' in e && s.push('batch=1'), 'query' === e.type || 'subscription' === e.type)
					) {
						let t = y(e);
						void 0 !== t && 'POST' !== e.methodOverride && s.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
					}
					return s.length && (r += '?' + s.join('&')), r;
				},
				b = (e) => {
					if ('query' === e.type && 'POST' !== e.methodOverride) return;
					let t = y(e);
					return void 0 !== t ? JSON.stringify(t) : void 0;
				},
				g = (e) => w({ ...e, contentTypeHeader: 'application/json', getUrl: m, getBody: b });
			var v = class extends Error {
				constructor() {
					let e = 'AbortError';
					super(e), (this.name = e), (this.message = e);
				}
			};
			let O = (e) => {
				if (e?.aborted) {
					if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
						throw new DOMException('AbortError', 'AbortError');
					throw new v();
				}
			};
			async function R(e) {
				O(e.signal);
				let t = e.getUrl(e),
					r = e.getBody(e),
					{ type: s } = e,
					i = await (async () => {
						let t = await e.headers();
						return Symbol.iterator in t ? Object.fromEntries(t) : t;
					})(),
					n = {
						...(e.contentTypeHeader ? { 'content-type': e.contentTypeHeader } : {}),
						...(e.trpcAcceptHeader ? { 'trpc-accept': e.trpcAcceptHeader } : void 0),
						...i,
					};
				return (function (e) {
					if (e) return e;
					if ('undefined' != typeof window && p(window.fetch)) return window.fetch;
					if ('undefined' != typeof globalThis && p(globalThis.fetch)) return globalThis.fetch;
					throw Error('No fetch implementation found');
				})(e.fetch)(t, { method: e.methodOverride ?? f[s], signal: e.signal, body: r, headers: n });
			}
			async function w(e) {
				let t = {},
					r = await R(e);
				t.response = r;
				let s = await r.json();
				return (t.responseJSON = s), { json: s, meta: t };
			}
			var C = class extends Error {},
				S = class extends Error {
					constructor() {
						super('Unable to transform response from server');
					}
				};
			Symbol('lazy');
			Symbol();
			let P = () => {
				throw Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
			};
			function q(e) {
				let t = null,
					r = null,
					s = () => {
						clearTimeout(r), (r = null), (t = null);
					};
				function i() {
					let r = (function (t) {
						let r = [[]],
							s = 0;
						for (;;) {
							let i = t[s];
							if (!i) break;
							let n = r[r.length - 1];
							if (i.aborted) {
								i.reject?.(Error('Aborted')), s++;
								continue;
							}
							if (e.validate(n.concat(i).map((e) => e.key))) {
								n.push(i), s++;
								continue;
							}
							if (0 === n.length) {
								i.reject?.(Error('Input is too big for a single dispatch')), s++;
								continue;
							}
							r.push([]);
						}
						return r;
					})(t);
					for (let t of (s(), r)) {
						if (!t.length) continue;
						let r = { items: t };
						for (let e of t) e.batch = r;
						e.fetch(r.items.map((e) => e.key))
							.then(async (e) => {
								for (let t of (await Promise.all(
									e.map(async (e, t) => {
										let s = r.items[t];
										try {
											let t = await Promise.resolve(e);
											s.resolve?.(t);
										} catch (e) {
											s.reject?.(e);
										}
										(s.batch = null), (s.reject = null), (s.resolve = null);
									}),
								),
								r.items))
									t.reject?.(Error('Missing result')), (t.batch = null);
							})
							.catch((e) => {
								for (let t of r.items) t.reject?.(e), (t.batch = null);
							});
					}
				}
				return {
					load: function (e) {
						let s = { aborted: !1, key: e, batch: null, resolve: P, reject: P },
							n = new Promise((e, r) => {
								(s.reject = r), (s.resolve = e), (t ??= []).push(s);
							});
						return (r ??= setTimeout(i)), n;
					},
				};
			}
			let E = {
					css: { query: ['72e3ff', '3fb0d8'], mutation: ['c5a3fc', '904dfc'], subscription: ['ff49e1', 'd83fbe'] },
					ansi: {
						regular: {
							query: ['\x1b[30;46m', '\x1b[97;46m'],
							mutation: ['\x1b[30;45m', '\x1b[97;45m'],
							subscription: ['\x1b[30;42m', '\x1b[97;42m'],
						},
						bold: {
							query: ['\x1b[1;30;46m', '\x1b[1;97;46m'],
							mutation: ['\x1b[1;30;45m', '\x1b[1;97;45m'],
							subscription: ['\x1b[1;30;42m', '\x1b[1;97;42m'],
						},
					},
				},
				Q = { enabled: !1, closeMs: 0 },
				x = { enabled: !1, pongTimeoutMs: 1e3, intervalMs: 5e3 },
				D = (e) => (0 === e ? 0 : Math.min(1e3 * 2 ** e, 3e4)),
				T = (e, ...t) => ('function' == typeof e ? e(...t) : e);
			var M = class e extends Error {
					constructor(t) {
						super(t.message, { cause: t.cause }),
							(this.name = 'TRPCWebSocketClosedError'),
							Object.setPrototypeOf(this, e.prototype);
					}
				},
				I = class {
					timeout;
					constructor(e, t) {
						(this.onTimeout = e), (this.timeoutMs = t);
					}
					reset() {
						this.timeout && (clearTimeout(this.timeout), (this.timeout = setTimeout(this.onTimeout, this.timeoutMs)));
					}
					start() {
						clearTimeout(this.timeout), (this.timeout = setTimeout(this.onTimeout, this.timeoutMs));
					}
					stop() {
						clearTimeout(this.timeout), (this.timeout = void 0);
					}
				};
			function A() {
				let e, t;
				return {
					promise: new Promise((r, s) => {
						(e = r), (t = s);
					}),
					resolve: e,
					reject: t,
				};
			}
			async function F(e) {
				let t = await T(e.url);
				if (!e.connectionParams) return t;
				let r = t.includes('?') ? '&' : '?';
				return t + `${r}connectionParams=1`;
			}
			async function U(e) {
				return JSON.stringify({ method: 'connectionParams', data: await T(e) });
			}
			var k = class {
					outgoingRequests = [];
					pendingRequests = {};
					register(e, t) {
						let { promise: r, resolve: s } = A();
						return (
							this.outgoingRequests.push({
								id: String(e.id),
								message: e,
								end: r,
								callbacks: {
									next: t.next,
									complete: () => {
										t.complete(), s();
									},
									error: (e) => {
										t.error(e), s();
									},
								},
							}),
							() => {
								this.delete(e.id), t.complete(), s();
							}
						);
					}
					delete(e) {
						null !== e &&
							((this.outgoingRequests = this.outgoingRequests.filter(({ id: t }) => t !== String(e))),
							delete this.pendingRequests[String(e)]);
					}
					flush() {
						let e = this.outgoingRequests;
						for (let t of ((this.outgoingRequests = []), e)) this.pendingRequests[t.id] = t;
						return e;
					}
					getPendingRequests() {
						return Object.values(this.pendingRequests);
					}
					getPendingRequest(e) {
						return null === e ? null : this.pendingRequests[String(e)];
					}
					getOutgoingRequests() {
						return this.outgoingRequests;
					}
					getRequests() {
						return [
							...this.getOutgoingRequests().map((e) => ({
								state: 'outgoing',
								message: e.message,
								end: e.end,
								callbacks: e.callbacks,
							})),
							...this.getPendingRequests().map((e) => ({
								state: 'pending',
								message: e.message,
								end: e.end,
								callbacks: e.callbacks,
							})),
						];
					}
					hasPendingRequests() {
						return this.getPendingRequests().length > 0;
					}
					hasPendingSubscriptions() {
						return this.getPendingRequests().some((e) => 'subscription' === e.message.method);
					}
					hasOutgoingRequests() {
						return this.outgoingRequests.length > 0;
					}
				},
				j = class e {
					static connectCount = null;
					id = ++e.connectCount;
					WebSocketPonyfill;
					urlOptions;
					keepAliveOpts;
					wsObservable = behaviorSubject(null);
					constructor(e) {
						if (((this.WebSocketPonyfill = e.WebSocketPonyfill ?? WebSocket), !this.WebSocketPonyfill))
							throw Error(
								"No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill",
							);
						(this.urlOptions = e.urlOptions), (this.keepAliveOpts = e.keepAlive);
					}
					get ws() {
						return this.wsObservable.get();
					}
					set ws(e) {
						this.wsObservable.next(e);
					}
					isOpen() {
						return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise;
					}
					isClosed() {
						return (
							!!this.ws &&
							(this.ws.readyState === this.WebSocketPonyfill.CLOSING ||
								this.ws.readyState === this.WebSocketPonyfill.CLOSED)
						);
					}
					openPromise = null;
					async open() {
						if (this.openPromise) return this.openPromise;
						this.id = ++e.connectCount;
						let t = F(this.urlOptions).then((e) => new this.WebSocketPonyfill(e));
						this.openPromise = t.then(async (e) => {
							(this.ws = e),
								e.addEventListener('message', function ({ data: e }) {
									'PING' === e && this.send('PONG');
								}),
								this.keepAliveOpts.enabled &&
									(function (e, { intervalMs: t, pongTimeoutMs: r }) {
										let s, i;
										function n() {
											s = setTimeout(() => {
												e.send('PING'),
													(i = setTimeout(() => {
														e.close();
													}, r));
											}, t);
										}
										e.addEventListener('open', n),
											e.addEventListener('message', ({ data: e }) => {
												clearTimeout(s), n(), 'PONG' === e && (clearTimeout(i), clearTimeout(s), n());
											}),
											e.addEventListener('close', () => {
												clearTimeout(s), clearTimeout(i);
											});
									})(e, this.keepAliveOpts),
								e.addEventListener('close', () => {
									this.ws === e && (this.ws = null);
								}),
								await (function (e) {
									let { promise: t, resolve: r, reject: s } = A();
									return (
										e.addEventListener('open', () => {
											e.removeEventListener('error', s), r();
										}),
										e.addEventListener('error', s),
										t
									);
								})(e),
								this.urlOptions.connectionParams && e.send(await U(this.urlOptions.connectionParams));
						});
						try {
							await this.openPromise;
						} finally {
							this.openPromise = null;
						}
					}
					async close() {
						try {
							await this.openPromise;
						} finally {
							this.ws?.close();
						}
					}
				};
			Symbol();
			let _ = () => {},
				N = (e) => {
					Object.freeze && Object.freeze(e);
				},
				L = (e) =>
					(function e(t, r, s) {
						let i = r.join('.');
						return (
							(s[i] ??= new Proxy(_, {
								get(i, n) {
									if ('string' == typeof n && 'then' !== n) return e(t, [...r, n], s);
								},
								apply(e, s, i) {
									let n = r[r.length - 1],
										a = { args: i, path: r };
									return (
										'call' === n
											? (a = { args: i.length >= 2 ? [i[1]] : [], path: r.slice(0, -1) })
											: 'apply' === n && (a = { args: i.length >= 2 ? i[1] : [], path: r.slice(0, -1) }),
										N(a.args),
										N(a.path),
										t(a)
									);
								},
							})),
							s[i]
						);
					})(e, [], Object.create(null)),
				K = (e) =>
					new Proxy(_, {
						get(t, r) {
							if ('then' !== r) return e(r);
						},
					}),
				H = {
					PARSE_ERROR: 400,
					BAD_REQUEST: 400,
					UNAUTHORIZED: 401,
					PAYMENT_REQUIRED: 402,
					FORBIDDEN: 403,
					NOT_FOUND: 404,
					METHOD_NOT_SUPPORTED: 405,
					TIMEOUT: 408,
					CONFLICT: 409,
					PRECONDITION_FAILED: 412,
					PAYLOAD_TOO_LARGE: 413,
					UNSUPPORTED_MEDIA_TYPE: 415,
					UNPROCESSABLE_CONTENT: 422,
					TOO_MANY_REQUESTS: 429,
					CLIENT_CLOSED_REQUEST: 499,
					INTERNAL_SERVER_ERROR: 500,
					NOT_IMPLEMENTED: 501,
					BAD_GATEWAY: 502,
					SERVICE_UNAVAILABLE: 503,
					GATEWAY_TIMEOUT: 504,
				};
			var G = Object.create,
				W = Object.defineProperty,
				z = Object.getOwnPropertyDescriptor,
				B = Object.getOwnPropertyNames,
				Y = Object.getPrototypeOf,
				V = Object.prototype.hasOwnProperty,
				$ = (e, t, r, s) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var i, n = B(t), a = 0, u = n.length; a < u; a++)
							(i = n[a]),
								V.call(e, i) ||
									i === r ||
									W(e, i, { get: ((e) => t[e]).bind(null, i), enumerable: !(s = z(t, i)) || s.enumerable });
					return e;
				},
				J = class {
					links;
					runtime;
					requestId;
					constructor(e) {
						(this.requestId = 0), (this.runtime = {}), (this.links = e.links.map((e) => e(this.runtime)));
					}
					$request(e) {
						var t;
						return ((t = { links: this.links, op: { ...e, context: e.context ?? {}, id: ++this.requestId } }),
						n((e) =>
							(function e(r = 0, s = t.op) {
								let i = t.links[r];
								if (!i) throw Error('No more links to execute - did you forget to add an ending link?');
								return i({ op: s, next: (t) => e(r + 1, t) });
							})().subscribe(e),
						)).pipe((e) => {
							let t = 0,
								r = null,
								s = [];
							return n(
								(i) => (
									t++,
									s.push(i),
									r ||
										(r = e.subscribe({
											next(e) {
												for (let t of s) t.next?.(e);
											},
											error(e) {
												for (let t of s) t.error?.(e);
											},
											complete() {
												for (let e of s) e.complete?.();
											},
										})),
									{
										unsubscribe() {
											if (0 == --t && r) {
												let e = r;
												(r = null), e.unsubscribe();
											}
											let e = s.findIndex((e) => e === i);
											e > -1 && s.splice(e, 1);
										},
									}
								),
							);
						});
					}
					async requestAsPromise(e) {
						try {
							let t = this.$request(e);
							return (
								await (function (e) {
									let t = new AbortController();
									return new Promise((r, s) => {
										let i = !1;
										function n() {
											i || ((i = !0), a.unsubscribe());
										}
										t.signal.addEventListener('abort', () => {
											s(t.signal.reason);
										});
										let a = e.subscribe({
											next(e) {
												(i = !0), r(e), n();
											},
											error(e) {
												s(e);
											},
											complete() {
												t.abort(), n();
											},
										});
									});
								})(t)
							).result.data;
						} catch (e) {
							throw h.from(e);
						}
					}
					query(e, t, r) {
						return this.requestAsPromise({ type: 'query', path: e, input: t, context: r?.context, signal: r?.signal });
					}
					mutation(e, t, r) {
						return this.requestAsPromise({
							type: 'mutation',
							path: e,
							input: t,
							context: r?.context,
							signal: r?.signal,
						});
					}
					subscription(e, t, r) {
						return this.$request({
							type: 'subscription',
							path: e,
							input: t,
							context: r.context,
							signal: r.signal,
						}).subscribe({
							next(e) {
								switch (e.result.type) {
									case 'state':
										r.onConnectionStateChange?.(e.result);
										break;
									case 'started':
										r.onStarted?.({ context: e.context });
										break;
									case 'stopped':
										r.onStopped?.();
										break;
									case 'data':
									case void 0:
										r.onData?.(e.result.data);
								}
							},
							error(e) {
								r.onError?.(e);
							},
							complete() {
								r.onComplete?.();
							},
						});
					}
				};
			let X = Symbol.for('trpc_untypedClient'),
				Z = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
				ee = (e) => Z[e];
			function et(e) {
				let t = L(({ path: t, args: r }) => {
					let s = [...t],
						i = ee(s.pop()),
						n = s.join('.');
					return e[i](n, ...r);
				});
				return K((r) => (r === X ? e : t[r]));
			}
			function er(e) {
				return et(new J(e));
			}
			((e, t, r) => (
				(r = null != e ? G(Y(e)) : {}),
				$(!t && e && e.__esModule ? r : W(r, 'default', { value: e, enumerable: !0 }), e)
			))(
				((e, t) =>
					function () {
						return t || (0, e[B(e)[0]])((t = { exports: {} }).exports, t), t.exports;
					})({
					'../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js'(
						e,
						t,
					) {
						(t.exports = function () {
							var e =
									'function' == typeof SuppressedError
										? SuppressedError
										: function (e, t) {
												var r = Error();
												return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r;
											},
								t = {},
								r = [];
							function s(e, t) {
								if (null != t) {
									if (Object(t) !== t)
										throw TypeError('using declarations can only be used with objects, functions, null, or undefined.');
									if (e) var s = t[Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')];
									if (void 0 === s && ((s = t[Symbol.dispose || Symbol.for('Symbol.dispose')]), e)) var i = s;
									if ('function' != typeof s) throw TypeError('Object is not disposable.');
									i &&
										(s = function () {
											try {
												i.call(t);
											} catch (e) {
												return Promise.reject(e);
											}
										}),
										r.push({ v: t, d: s, a: e });
								} else e && r.push({ d: t, a: e });
								return t;
							}
							return {
								e: t,
								u: s.bind(null, !1),
								a: s.bind(null, !0),
								d: function () {
									var s,
										i = this.e,
										n = 0;
									function a() {
										for (; (s = r.pop()); )
											try {
												if (!s.a && 1 === n) return (n = 0), r.push(s), Promise.resolve().then(a);
												if (s.d) {
													var e = s.d.call(s.v);
													if (s.a) return (n |= 2), Promise.resolve(e).then(a, u);
												} else n |= 1;
											} catch (e) {
												return u(e);
											}
										if (1 === n) return i !== t ? Promise.reject(i) : Promise.resolve();
										if (i !== t) throw i;
									}
									function u(r) {
										return (i = i !== t ? new e(r, i) : r), a();
									}
									return a();
								},
							};
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports);
					},
				})(),
				1,
			);
			var es = r(148),
				ei = es.createContext(void 0),
				en = (e) => {
					let t = es.useContext(ei);
					if (e) return e;
					if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
					return t;
				},
				ea = ({ client: e, children: t }) => (
					es.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					(0, s.jsx)(ei.Provider, { value: e, children: t })
				),
				eu = 'undefined' == typeof window || 'Deno' in globalThis;
			function eo() {}
			function el(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function ec(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function eh(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function ed(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function ep(e, t) {
				let { type: r = 'all', exact: s, fetchStatus: i, predicate: n, queryKey: a, stale: u } = e;
				if (a) {
					if (s) {
						if (t.queryHash !== ey(a, t.options)) return !1;
					} else if (!eb(t.queryKey, a)) return !1;
				}
				if ('all' !== r) {
					let e = t.isActive();
					if (('active' === r && !e) || ('inactive' === r && e)) return !1;
				}
				return ('boolean' != typeof u || t.isStale() === u) && (!i || i === t.state.fetchStatus) && (!n || !!n(t));
			}
			function ef(e, t) {
				let { exact: r, status: s, predicate: i, mutationKey: n } = e;
				if (n) {
					if (!t.options.mutationKey) return !1;
					if (r) {
						if (em(t.options.mutationKey) !== em(n)) return !1;
					} else if (!eb(t.options.mutationKey, n)) return !1;
				}
				return (!s || t.state.status === s) && (!i || !!i(t));
			}
			function ey(e, t) {
				return (t?.queryKeyHashFn || em)(e);
			}
			function em(e) {
				return JSON.stringify(e, (e, t) =>
					eR(t)
						? Object.keys(t)
								.sort()
								.reduce((e, r) => ((e[r] = t[r]), e), {})
						: t,
				);
			}
			function eb(e, t) {
				return (
					e === t ||
					(typeof e == typeof t &&
						!!e &&
						!!t &&
						'object' == typeof e &&
						'object' == typeof t &&
						Object.keys(t).every((r) => eb(e[r], t[r])))
				);
			}
			function eg(e, t) {
				if (e === t) return e;
				let r = eO(e) && eO(t);
				if (r || (eR(e) && eR(t))) {
					let s = r ? e : Object.keys(e),
						i = s.length,
						n = r ? t : Object.keys(t),
						a = n.length,
						u = r ? [] : {},
						o = new Set(s),
						l = 0;
					for (let s = 0; s < a; s++) {
						let i = r ? s : n[s];
						((!r && o.has(i)) || r) && void 0 === e[i] && void 0 === t[i]
							? ((u[i] = void 0), l++)
							: ((u[i] = eg(e[i], t[i])), u[i] === e[i] && void 0 !== e[i] && l++);
					}
					return i === a && l === i ? e : u;
				}
				return t;
			}
			function ev(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
				for (let r in e) if (e[r] !== t[r]) return !1;
				return !0;
			}
			function eO(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function eR(e) {
				if (!ew(e)) return !1;
				let t = e.constructor;
				if (void 0 === t) return !0;
				let r = t.prototype;
				return !!ew(r) && !!r.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype;
			}
			function ew(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function eC(e, t, r) {
				return 'function' == typeof r.structuralSharing
					? r.structuralSharing(e, t)
					: !1 !== r.structuralSharing
						? eg(e, t)
						: t;
			}
			function eS(e, t, r = 0) {
				let s = [...e, t];
				return r && s.length > r ? s.slice(1) : s;
			}
			function eP(e, t, r = 0) {
				let s = [t, ...e];
				return r && s.length > r ? s.slice(0, -1) : s;
			}
			var eq = Symbol();
			function eE(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== eq
						? e.queryFn
						: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
			}
			function eQ(e, t) {
				return 'function' == typeof e ? e(...t) : !!e;
			}
			function ex() {
				let e,
					t,
					r = new Promise((r, s) => {
						(e = r), (t = s);
					});
				function s(e) {
					Object.assign(r, e), delete r.resolve, delete r.reject;
				}
				return (
					(r.status = 'pending'),
					r.catch(() => {}),
					(r.resolve = (t) => {
						s({ status: 'fulfilled', value: t }), e(t);
					}),
					(r.reject = (e) => {
						s({ status: 'rejected', reason: e }), t(e);
					}),
					r
				);
			}
			function eD(e) {
				return e;
			}
			function eT(e, t, r) {
				if ('object' != typeof t || null === t) return;
				let s = e.getMutationCache(),
					i = e.getQueryCache(),
					n = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? eD,
					a = t.mutations || [],
					u = t.queries || [];
				a.forEach(({ state: t, ...i }) => {
					s.build(e, { ...e.getDefaultOptions().hydrate?.mutations, ...r?.defaultOptions?.mutations, ...i }, t);
				}),
					u.forEach(({ queryKey: t, state: s, queryHash: a, meta: u, promise: o, dehydratedAt: l }) => {
						let c = o
								? (function (e) {
										let t;
										if ((e.then((e) => ((t = e), e), eo)?.catch(eo), void 0 !== t)) return { data: t };
									})(o)
								: void 0,
							h = void 0 === s.data ? c?.data : s.data,
							d = void 0 === h ? h : n(h),
							p = i.get(a),
							f = p?.state.status === 'pending',
							y = p?.state.fetchStatus === 'fetching';
						if (p) {
							let e = c && void 0 !== l && l > p.state.dataUpdatedAt;
							if (s.dataUpdatedAt > p.state.dataUpdatedAt || e) {
								let { fetchStatus: e, ...t } = s;
								p.setState({ ...t, data: d });
							}
						} else
							p = i.build(
								e,
								{
									...e.getDefaultOptions().hydrate?.queries,
									...r?.defaultOptions?.queries,
									queryKey: t,
									queryHash: a,
									meta: u,
								},
								{ ...s, data: d, fetchStatus: 'idle', status: void 0 !== d ? 'success' : s.status },
							);
						o &&
							!f &&
							!y &&
							(void 0 === l || l > p.state.dataUpdatedAt) &&
							p.fetch(void 0, { initialPromise: Promise.resolve(o).then(n) });
					});
			}
			var eM = ({ children: e, options: t = {}, state: r, queryClient: s }) => {
				let i = en(s),
					n = es.useRef(t);
				n.current = t;
				let a = es.useMemo(() => {
					if (r) {
						if ('object' != typeof r) return;
						let e = i.getQueryCache(),
							t = r.queries || [],
							s = [],
							a = [];
						for (let r of t) {
							let t = e.get(r.queryHash);
							t
								? (r.state.dataUpdatedAt > t.state.dataUpdatedAt ||
										(r.promise &&
											'pending' !== t.state.status &&
											'fetching' !== t.state.fetchStatus &&
											void 0 !== r.dehydratedAt &&
											r.dehydratedAt > t.state.dataUpdatedAt)) &&
									a.push(r)
								: s.push(r);
						}
						if ((s.length > 0 && eT(i, { queries: s }, n.current), a.length > 0)) return a;
					}
				}, [i, r]);
				return (
					es.useEffect(() => {
						a && eT(i, { queries: a }, n.current);
					}, [i, a]),
					e
				);
			};
			function eI(e, t, r) {
				let s = e.flatMap((e) => e.split('.'));
				if (!t && (!r || 'any' === r)) return s.length ? [s] : [];
				if ('infinite' === r && o(t) && ('direction' in t || 'cursor' in t)) {
					let { cursor: e, direction: r, ...i } = t;
					return [s, { input: i, type: 'infinite' }];
				}
				return [s, { ...(void 0 !== t && t !== eq && { input: t }), ...(r && 'any' !== r && { type: r }) }];
			}
			function eA(e) {
				return eI(e, void 0, 'any');
			}
			var eF = class {
					constructor() {
						(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
					}
					subscribe(e) {
						return (
							this.listeners.add(e),
							this.onSubscribe(),
							() => {
								this.listeners.delete(e), this.onUnsubscribe();
							}
						);
					}
					hasListeners() {
						return this.listeners.size > 0;
					}
					onSubscribe() {}
					onUnsubscribe() {}
				},
				eU = new (class extends eF {
					#e;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!eu && window.addEventListener) {
									let t = () => e();
									return (
										window.addEventListener('visibilitychange', t, !1),
										() => {
											window.removeEventListener('visibilitychange', t);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e),
							this.#t?.(),
							(this.#t = e((e) => {
								'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
							}));
					}
					setFocused(e) {
						this.#e !== e && ((this.#e = e), this.onFocus());
					}
					onFocus() {
						let e = this.isFocused();
						this.listeners.forEach((t) => {
							t(e);
						});
					}
					isFocused() {
						return 'boolean' == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== 'hidden';
					}
				})(),
				ek = (e) => setTimeout(e, 0),
				ej = (function () {
					let e = [],
						t = 0,
						r = (e) => {
							e();
						},
						s = (e) => {
							e();
						},
						i = ek,
						n = (s) => {
							t
								? e.push(s)
								: i(() => {
										r(s);
									});
						},
						a = () => {
							let t = e;
							(e = []),
								t.length &&
									i(() => {
										s(() => {
											t.forEach((e) => {
												r(e);
											});
										});
									});
						};
					return {
						batch: (e) => {
							let r;
							t++;
							try {
								r = e();
							} finally {
								--t || a();
							}
							return r;
						},
						batchCalls:
							(e) =>
							(...t) => {
								n(() => {
									e(...t);
								});
							},
						schedule: n,
						setNotifyFunction: (e) => {
							r = e;
						},
						setBatchNotifyFunction: (e) => {
							s = e;
						},
						setScheduler: (e) => {
							i = e;
						},
					};
				})(),
				e_ = new (class extends eF {
					#s = !0;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!eu && window.addEventListener) {
									let t = () => e(!0),
										r = () => e(!1);
									return (
										window.addEventListener('online', t, !1),
										window.addEventListener('offline', r, !1),
										() => {
											window.removeEventListener('online', t), window.removeEventListener('offline', r);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
					}
					setOnline(e) {
						this.#s !== e &&
							((this.#s = e),
							this.listeners.forEach((t) => {
								t(e);
							}));
					}
					isOnline() {
						return this.#s;
					}
				})();
			function eN(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function eL(e) {
				return (e ?? 'online') !== 'online' || e_.isOnline();
			}
			var eK = class extends Error {
				constructor(e) {
					super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent);
				}
			};
			function eH(e) {
				return e instanceof eK;
			}
			function eG(e) {
				let t,
					r = !1,
					s = 0,
					i = !1,
					n = ex(),
					a = () => eU.isFocused() && ('always' === e.networkMode || e_.isOnline()) && e.canRun(),
					u = () => eL(e.networkMode) && e.canRun(),
					o = (r) => {
						i || ((i = !0), e.onSuccess?.(r), t?.(), n.resolve(r));
					},
					l = (r) => {
						i || ((i = !0), e.onError?.(r), t?.(), n.reject(r));
					},
					c = () =>
						new Promise((r) => {
							(t = (e) => {
								(i || a()) && r(e);
							}),
								e.onPause?.();
						}).then(() => {
							(t = void 0), i || e.onContinue?.();
						}),
					h = () => {
						let t;
						if (i) return;
						let n = 0 === s ? e.initialPromise : void 0;
						try {
							t = n ?? e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(o)
							.catch((t) => {
								if (i) return;
								let n = e.retry ?? 3 * !eu,
									u = e.retryDelay ?? eN,
									o = 'function' == typeof u ? u(s, t) : u,
									d = !0 === n || ('number' == typeof n && s < n) || ('function' == typeof n && n(s, t));
								if (r || !d) return void l(t);
								s++,
									e.onFail?.(s, t),
									new Promise((e) => {
										setTimeout(e, o);
									})
										.then(() => (a() ? void 0 : c()))
										.then(() => {
											r ? l(t) : h();
										});
							});
					};
				return {
					promise: n,
					cancel: (t) => {
						i || (l(new eK(t)), e.abort?.());
					},
					continue: () => (t?.(), n),
					cancelRetry: () => {
						r = !0;
					},
					continueRetry: () => {
						r = !1;
					},
					canStart: u,
					start: () => (u() ? h() : c().then(h), n),
				};
			}
			var eW = class {
					#i;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						this.clearGcTimeout(),
							el(this.gcTime) &&
								(this.#i = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(this.gcTime || 0, e ?? (eu ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#i && (clearTimeout(this.#i), (this.#i = void 0));
					}
				},
				ez = class extends eW {
					#n;
					#a;
					#u;
					#o;
					#l;
					#c;
					#h;
					constructor(e) {
						super(),
							(this.#h = !1),
							(this.#c = e.defaultOptions),
							this.setOptions(e.options),
							(this.observers = []),
							(this.#o = e.client),
							(this.#u = this.#o.getQueryCache()),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#n = (function (e) {
								let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
									r = void 0 !== t,
									s = r
										? 'function' == typeof e.initialDataUpdatedAt
											? e.initialDataUpdatedAt()
											: e.initialDataUpdatedAt
										: 0;
								return {
									data: t,
									dataUpdateCount: 0,
									dataUpdatedAt: r ? (s ?? Date.now()) : 0,
									error: null,
									errorUpdateCount: 0,
									errorUpdatedAt: 0,
									fetchFailureCount: 0,
									fetchFailureReason: null,
									fetchMeta: null,
									isInvalidated: !1,
									status: r ? 'success' : 'pending',
									fetchStatus: 'idle',
								};
							})(this.options)),
							(this.state = e.state ?? this.#n),
							this.scheduleGc();
					}
					get meta() {
						return this.options.meta;
					}
					get promise() {
						return this.#l?.promise;
					}
					setOptions(e) {
						(this.options = { ...this.#c, ...e }), this.updateGcTime(this.options.gcTime);
					}
					optionalRemove() {
						this.observers.length || 'idle' !== this.state.fetchStatus || this.#u.remove(this);
					}
					setData(e, t) {
						let r = eC(this.state.data, e, this.options);
						return this.#d({ data: r, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }), r;
					}
					setState(e, t) {
						this.#d({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						let t = this.#l?.promise;
						return this.#l?.cancel(e), t ? t.then(eo).catch(eo) : Promise.resolve();
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#n);
					}
					isActive() {
						return this.observers.some((e) => !1 !== ed(e.options.enabled, this));
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === eq || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
					}
					isStatic() {
						return (
							this.getObserversCount() > 0 && this.observers.some((e) => 'static' === eh(e.options.staleTime, this))
						);
					}
					isStale() {
						return this.getObserversCount() > 0
							? this.observers.some((e) => e.getCurrentResult().isStale)
							: void 0 === this.state.data || this.state.isInvalidated;
					}
					isStaleByTime(e = 0) {
						return (
							void 0 === this.state.data ||
							('static' !== e && (!!this.state.isInvalidated || !ec(this.state.dataUpdatedAt, e)))
						);
					}
					onFocus() {
						let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
						e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
					}
					onOnline() {
						let e = this.observers.find((e) => e.shouldFetchOnReconnect());
						e?.refetch({ cancelRefetch: !1 }), this.#l?.continue();
					}
					addObserver(e) {
						this.observers.includes(e) ||
							(this.observers.push(e),
							this.clearGcTimeout(),
							this.#u.notify({ type: 'observerAdded', query: this, observer: e }));
					}
					removeObserver(e) {
						this.observers.includes(e) &&
							((this.observers = this.observers.filter((t) => t !== e)),
							this.observers.length ||
								(this.#l && (this.#h ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()), this.scheduleGc()),
							this.#u.notify({ type: 'observerRemoved', query: this, observer: e }));
					}
					getObserversCount() {
						return this.observers.length;
					}
					invalidate() {
						this.state.isInvalidated || this.#d({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus) {
							if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
							else if (this.#l) return this.#l.continueRetry(), this.#l.promise;
						}
						if ((e && this.setOptions(e), !this.options.queryFn)) {
							let e = this.observers.find((e) => e.options.queryFn);
							e && this.setOptions(e.options);
						}
						let r = new AbortController(),
							s = (e) => {
								Object.defineProperty(e, 'signal', { enumerable: !0, get: () => ((this.#h = !0), r.signal) });
							},
							i = () => {
								let e = eE(this.options, t),
									r = (() => {
										let e = { client: this.#o, queryKey: this.queryKey, meta: this.meta };
										return s(e), e;
									})();
								return ((this.#h = !1), this.options.persister) ? this.options.persister(e, r, this) : e(r);
							},
							n = (() => {
								let e = {
									fetchOptions: t,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#o,
									state: this.state,
									fetchFn: i,
								};
								return s(e), e;
							})();
						this.options.behavior?.onFetch(n, this),
							(this.#a = this.state),
							('idle' === this.state.fetchStatus || this.state.fetchMeta !== n.fetchOptions?.meta) &&
								this.#d({ type: 'fetch', meta: n.fetchOptions?.meta });
						let a = (e) => {
							(eH(e) && e.silent) || this.#d({ type: 'error', error: e }),
								eH(e) || (this.#u.config.onError?.(e, this), this.#u.config.onSettled?.(this.state.data, e, this)),
								this.scheduleGc();
						};
						return (
							(this.#l = eG({
								initialPromise: t?.initialPromise,
								fn: n.fetchFn,
								abort: r.abort.bind(r),
								onSuccess: (e) => {
									if (void 0 === e) return void a(Error(`${this.queryHash} data is undefined`));
									try {
										this.setData(e);
									} catch (e) {
										a(e);
										return;
									}
									this.#u.config.onSuccess?.(e, this),
										this.#u.config.onSettled?.(e, this.state.error, this),
										this.scheduleGc();
								},
								onError: a,
								onFail: (e, t) => {
									this.#d({ type: 'failed', failureCount: e, error: t });
								},
								onPause: () => {
									this.#d({ type: 'pause' });
								},
								onContinue: () => {
									this.#d({ type: 'continue' });
								},
								retry: n.options.retry,
								retryDelay: n.options.retryDelay,
								networkMode: n.options.networkMode,
								canRun: () => !0,
							})),
							this.#l.start()
						);
					}
					#d(e) {
						(this.state = ((t) => {
							switch (e.type) {
								case 'failed':
									return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return { ...t, ...eB(t.data, this.options), fetchMeta: e.meta ?? null };
								case 'success':
									return {
										...t,
										data: e.data,
										dataUpdateCount: t.dataUpdateCount + 1,
										dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
										error: null,
										isInvalidated: !1,
										status: 'success',
										...(!e.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
									};
								case 'error':
									let r = e.error;
									if (eH(r) && r.revert && this.#a) return { ...this.#a, fetchStatus: 'idle' };
									return {
										...t,
										error: r,
										errorUpdateCount: t.errorUpdateCount + 1,
										errorUpdatedAt: Date.now(),
										fetchFailureCount: t.fetchFailureCount + 1,
										fetchFailureReason: r,
										fetchStatus: 'idle',
										status: 'error',
									};
								case 'invalidate':
									return { ...t, isInvalidated: !0 };
								case 'setState':
									return { ...t, ...e.state };
							}
						})(this.state)),
							ej.batch(() => {
								this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#u.notify({ query: this, type: 'updated', action: e });
							});
					}
				};
			function eB(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: eL(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			var eY = class extends eF {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#o = e),
						(this.#p = null),
						(this.#f = ex()),
						this.options.experimental_prefetchInRender ||
							this.#f.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
						this.bindMethods(),
						this.setOptions(t);
				}
				#o;
				#y = void 0;
				#m = void 0;
				#b = void 0;
				#g;
				#v;
				#f;
				#p;
				#O;
				#R;
				#w;
				#C;
				#S;
				#P;
				#q = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#y.addObserver(this), eV(this.#y, this.options) ? this.#E() : this.updateResult(), this.#Q());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return e$(this.#y, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return e$(this.#y, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					(this.listeners = new Set()), this.#x(), this.#D(), this.#y.removeObserver(this);
				}
				setOptions(e) {
					let t = this.options,
						r = this.#y;
					if (
						((this.options = this.#o.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled &&
							'function' != typeof this.options.enabled &&
							'boolean' != typeof ed(this.options.enabled, this.#y))
					)
						throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
					this.#T(),
						this.#y.setOptions(this.options),
						t._defaulted &&
							!ev(this.options, t) &&
							this.#o.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.#y, observer: this });
					let s = this.hasListeners();
					s && eJ(this.#y, r, this.options, t) && this.#E(),
						this.updateResult(),
						s &&
							(this.#y !== r ||
								ed(this.options.enabled, this.#y) !== ed(t.enabled, this.#y) ||
								eh(this.options.staleTime, this.#y) !== eh(t.staleTime, this.#y)) &&
							this.#M();
					let i = this.#I();
					s &&
						(this.#y !== r || ed(this.options.enabled, this.#y) !== ed(t.enabled, this.#y) || i !== this.#P) &&
						this.#A(i);
				}
				getOptimisticResult(e) {
					var t, r;
					let s = this.#o.getQueryCache().build(this.#o, e),
						i = this.createResult(s, e);
					return (
						(t = this),
						(r = i),
						ev(t.getCurrentResult(), r) || ((this.#b = i), (this.#v = this.options), (this.#g = this.#y.state)),
						i
					);
				}
				getCurrentResult() {
					return this.#b;
				}
				trackResult(e, t) {
					return new Proxy(e, { get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)) });
				}
				trackProp(e) {
					this.#q.add(e);
				}
				getCurrentQuery() {
					return this.#y;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					let t = this.#o.defaultQueryOptions(e),
						r = this.#o.getQueryCache().build(this.#o, t);
					return r.fetch().then(() => this.createResult(r, t));
				}
				fetch(e) {
					return this.#E({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(() => (this.updateResult(), this.#b));
				}
				#E(e) {
					this.#T();
					let t = this.#y.fetch(this.options, e);
					return e?.throwOnError || (t = t.catch(eo)), t;
				}
				#M() {
					this.#x();
					let e = eh(this.options.staleTime, this.#y);
					if (eu || this.#b.isStale || !el(e)) return;
					let t = ec(this.#b.dataUpdatedAt, e);
					this.#C = setTimeout(() => {
						this.#b.isStale || this.updateResult();
					}, t + 1);
				}
				#I() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#y)
							: this.options.refetchInterval) ?? !1
					);
				}
				#A(e) {
					this.#D(),
						(this.#P = e),
						!eu &&
							!1 !== ed(this.options.enabled, this.#y) &&
							el(this.#P) &&
							0 !== this.#P &&
							(this.#S = setInterval(() => {
								(this.options.refetchIntervalInBackground || eU.isFocused()) && this.#E();
							}, this.#P));
				}
				#Q() {
					this.#M(), this.#A(this.#I());
				}
				#x() {
					this.#C && (clearTimeout(this.#C), (this.#C = void 0));
				}
				#D() {
					this.#S && (clearInterval(this.#S), (this.#S = void 0));
				}
				createResult(e, t) {
					let r,
						s = this.#y,
						i = this.options,
						n = this.#b,
						a = this.#g,
						u = this.#v,
						o = e !== s ? e.state : this.#m,
						{ state: l } = e,
						c = { ...l },
						h = !1;
					if (t._optimisticResults) {
						let r = this.hasListeners(),
							n = !r && eV(e, t),
							a = r && eJ(e, s, t, i);
						(n || a) && (c = { ...c, ...eB(l.data, e.options) }),
							'isRestoring' === t._optimisticResults && (c.fetchStatus = 'idle');
					}
					let { error: d, errorUpdatedAt: p, status: f } = c;
					r = c.data;
					let y = !1;
					if (void 0 !== t.placeholderData && void 0 === r && 'pending' === f) {
						let e;
						n?.isPlaceholderData && t.placeholderData === u?.placeholderData
							? ((e = n.data), (y = !0))
							: (e =
									'function' == typeof t.placeholderData
										? t.placeholderData(this.#w?.state.data, this.#w)
										: t.placeholderData),
							void 0 !== e && ((f = 'success'), (r = eC(n?.data, e, t)), (h = !0));
					}
					if (t.select && void 0 !== r && !y)
						if (n && r === a?.data && t.select === this.#O) r = this.#R;
						else
							try {
								(this.#O = t.select), (r = t.select(r)), (r = eC(n?.data, r, t)), (this.#R = r), (this.#p = null);
							} catch (e) {
								this.#p = e;
							}
					this.#p && ((d = this.#p), (r = this.#R), (p = Date.now()), (f = 'error'));
					let m = 'fetching' === c.fetchStatus,
						b = 'pending' === f,
						g = 'error' === f,
						v = b && m,
						O = void 0 !== r,
						R = {
							status: f,
							fetchStatus: c.fetchStatus,
							isPending: b,
							isSuccess: 'success' === f,
							isError: g,
							isInitialLoading: v,
							isLoading: v,
							data: r,
							dataUpdatedAt: c.dataUpdatedAt,
							error: d,
							errorUpdatedAt: p,
							failureCount: c.fetchFailureCount,
							failureReason: c.fetchFailureReason,
							errorUpdateCount: c.errorUpdateCount,
							isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
							isFetchedAfterMount: c.dataUpdateCount > o.dataUpdateCount || c.errorUpdateCount > o.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !b,
							isLoadingError: g && !O,
							isPaused: 'paused' === c.fetchStatus,
							isPlaceholderData: h,
							isRefetchError: g && O,
							isStale: eX(e, t),
							refetch: this.refetch,
							promise: this.#f,
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === R.status ? e.reject(R.error) : void 0 !== R.data && e.resolve(R.data);
							},
							r = () => {
								t((this.#f = R.promise = ex()));
							},
							i = this.#f;
						switch (i.status) {
							case 'pending':
								e.queryHash === s.queryHash && t(i);
								break;
							case 'fulfilled':
								('error' === R.status || R.data !== i.value) && r();
								break;
							case 'rejected':
								('error' !== R.status || R.error !== i.reason) && r();
						}
					}
					return R;
				}
				updateResult() {
					let e = this.#b,
						t = this.createResult(this.#y, this.options);
					(this.#g = this.#y.state),
						(this.#v = this.options),
						void 0 !== this.#g.data && (this.#w = this.#y),
						ev(t, e) ||
							((this.#b = t),
							this.#F({
								listeners: (() => {
									if (!e) return !0;
									let { notifyOnChangeProps: t } = this.options,
										r = 'function' == typeof t ? t() : t;
									if ('all' === r || (!r && !this.#q.size)) return !0;
									let s = new Set(r ?? this.#q);
									return (
										this.options.throwOnError && s.add('error'),
										Object.keys(this.#b).some((t) => this.#b[t] !== e[t] && s.has(t))
									);
								})(),
							}));
				}
				#T() {
					let e = this.#o.getQueryCache().build(this.#o, this.options);
					if (e === this.#y) return;
					let t = this.#y;
					(this.#y = e), (this.#m = e.state), this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#Q();
				}
				#F(e) {
					ej.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#b);
							}),
							this.#o.getQueryCache().notify({ query: this.#y, type: 'observerResultsUpdated' });
					});
				}
			};
			function eV(e, t) {
				return (
					(!1 !== ed(t.enabled, e) &&
						void 0 === e.state.data &&
						('error' !== e.state.status || !1 !== t.retryOnMount)) ||
					(void 0 !== e.state.data && e$(e, t, t.refetchOnMount))
				);
			}
			function e$(e, t, r) {
				if (!1 !== ed(t.enabled, e) && 'static' !== eh(t.staleTime, e)) {
					let s = 'function' == typeof r ? r(e) : r;
					return 'always' === s || (!1 !== s && eX(e, t));
				}
				return !1;
			}
			function eJ(e, t, r, s) {
				return (e !== t || !1 === ed(s.enabled, e)) && (!r.suspense || 'error' !== e.state.status) && eX(e, r);
			}
			function eX(e, t) {
				return !1 !== ed(t.enabled, e) && e.isStaleByTime(eh(t.staleTime, e));
			}
			var eZ = es.createContext(
					(function () {
						let e = !1;
						return {
							clearReset: () => {
								e = !1;
							},
							reset: () => {
								e = !0;
							},
							isReset: () => e,
						};
					})(),
				),
				e0 = () => es.useContext(eZ),
				e1 = (e, t) => {
					(e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1);
				},
				e4 = (e) => {
					es.useEffect(() => {
						e.clearReset();
					}, [e]);
				},
				e3 = ({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
					e.isError && !t.isReset() && !e.isFetching && s && ((i && void 0 === e.data) || eQ(r, [e.error, s])),
				e2 = es.createContext(!1),
				e5 = () => es.useContext(e2);
			e2.Provider;
			var e6 = (e, t) => void 0 === t.state.data,
				e9 = (e) => {
					if (e.suspense) {
						let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
							r = e.staleTime;
						(e.staleTime = 'function' == typeof r ? (...e) => t(r(...e)) : t(r)),
							'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3));
					}
				},
				e8 = (e, t) => e.isLoading && e.isFetching && !t,
				e7 = (e, t) => e?.suspense && t.isPending,
				te = (e, t, r) =>
					t.fetchOptimistic(e).catch(() => {
						r.clearReset();
					});
			function tt(e, t, r) {
				let s = e5(),
					i = e0(),
					n = en(r),
					a = n.defaultQueryOptions(e);
				n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
					(a._optimisticResults = s ? 'isRestoring' : 'optimistic'),
					e9(a),
					e1(a, i),
					e4(i);
				let u = !n.getQueryCache().get(a.queryHash),
					[o] = es.useState(() => new t(n, a)),
					l = o.getOptimisticResult(a),
					c = !s && !1 !== e.subscribed;
				if (
					(es.useSyncExternalStore(
						es.useCallback(
							(e) => {
								let t = c ? o.subscribe(ej.batchCalls(e)) : eo;
								return o.updateResult(), t;
							},
							[o, c],
						),
						() => o.getCurrentResult(),
						() => o.getCurrentResult(),
					),
					es.useEffect(() => {
						o.setOptions(a);
					}, [a, o]),
					e7(a, l))
				)
					throw te(a, o, i);
				if (
					e3({
						result: l,
						errorResetBoundary: i,
						throwOnError: a.throwOnError,
						query: n.getQueryCache().get(a.queryHash),
						suspense: a.suspense,
					})
				)
					throw l.error;
				if (
					(n.getDefaultOptions().queries?._experimental_afterQuery?.(a, l),
					a.experimental_prefetchInRender && !eu && e8(l, s))
				) {
					let e = u ? te(a, o, i) : n.getQueryCache().get(a.queryHash)?.promise;
					e?.catch(eo).finally(() => {
						o.updateResult();
					});
				}
				return a.notifyOnChangeProps ? l : o.trackResult(l);
			}
			var tr = class extends eW {
				#U;
				#k;
				#l;
				constructor(e) {
					super(),
						(this.mutationId = e.mutationId),
						(this.#k = e.mutationCache),
						(this.#U = []),
						(this.state = e.state || ts()),
						this.setOptions(e.options),
						this.scheduleGc();
				}
				setOptions(e) {
					(this.options = e), this.updateGcTime(this.options.gcTime);
				}
				get meta() {
					return this.options.meta;
				}
				addObserver(e) {
					this.#U.includes(e) ||
						(this.#U.push(e),
						this.clearGcTimeout(),
						this.#k.notify({ type: 'observerAdded', mutation: this, observer: e }));
				}
				removeObserver(e) {
					(this.#U = this.#U.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#k.notify({ type: 'observerRemoved', mutation: this, observer: e });
				}
				optionalRemove() {
					this.#U.length || ('pending' === this.state.status ? this.scheduleGc() : this.#k.remove(this));
				}
				continue() {
					return this.#l?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
						this.#d({ type: 'continue' });
					};
					this.#l = eG({
						fn: () =>
							this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error('No mutationFn found')),
						onFail: (e, t) => {
							this.#d({ type: 'failed', failureCount: e, error: t });
						},
						onPause: () => {
							this.#d({ type: 'pause' });
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#k.canRun(this),
					});
					let r = 'pending' === this.state.status,
						s = !this.#l.canStart();
					try {
						if (r) t();
						else {
							this.#d({ type: 'pending', variables: e, isPaused: s }), await this.#k.config.onMutate?.(e, this);
							let t = await this.options.onMutate?.(e);
							t !== this.state.context && this.#d({ type: 'pending', context: t, variables: e, isPaused: s });
						}
						let i = await this.#l.start();
						return (
							await this.#k.config.onSuccess?.(i, e, this.state.context, this),
							await this.options.onSuccess?.(i, e, this.state.context),
							await this.#k.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(i, null, e, this.state.context),
							this.#d({ type: 'success', data: i }),
							i
						);
					} catch (t) {
						try {
							throw (
								(await this.#k.config.onError?.(t, e, this.state.context, this),
								await this.options.onError?.(t, e, this.state.context),
								await this.#k.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
								await this.options.onSettled?.(void 0, t, e, this.state.context),
								t)
							);
						} finally {
							this.#d({ type: 'error', error: t });
						}
					} finally {
						this.#k.runNext(this);
					}
				}
				#d(e) {
					(this.state = ((t) => {
						switch (e.type) {
							case 'failed':
								return { ...t, failureCount: e.failureCount, failureReason: e.error };
							case 'pause':
								return { ...t, isPaused: !0 };
							case 'continue':
								return { ...t, isPaused: !1 };
							case 'pending':
								return {
									...t,
									context: e.context,
									data: void 0,
									failureCount: 0,
									failureReason: null,
									error: null,
									isPaused: e.isPaused,
									status: 'pending',
									variables: e.variables,
									submittedAt: Date.now(),
								};
							case 'success':
								return {
									...t,
									data: e.data,
									failureCount: 0,
									failureReason: null,
									error: null,
									status: 'success',
									isPaused: !1,
								};
							case 'error':
								return {
									...t,
									data: void 0,
									error: e.error,
									failureCount: t.failureCount + 1,
									failureReason: e.error,
									isPaused: !1,
									status: 'error',
								};
						}
					})(this.state)),
						ej.batch(() => {
							this.#U.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#k.notify({ mutation: this, type: 'updated', action: e });
						});
				}
			};
			function ts() {
				return {
					context: void 0,
					data: void 0,
					error: null,
					failureCount: 0,
					failureReason: null,
					isPaused: !1,
					status: 'idle',
					variables: void 0,
					submittedAt: 0,
				};
			}
			var ti = class extends eF {
				#o;
				#b = void 0;
				#j;
				#_;
				constructor(e, t) {
					super(), (this.#o = e), this.setOptions(t), this.bindMethods(), this.#N();
				}
				bindMethods() {
					(this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
				}
				setOptions(e) {
					let t = this.options;
					(this.options = this.#o.defaultMutationOptions(e)),
						ev(this.options, t) ||
							this.#o.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.#j, observer: this }),
						t?.mutationKey && this.options.mutationKey && em(t.mutationKey) !== em(this.options.mutationKey)
							? this.reset()
							: this.#j?.state.status === 'pending' && this.#j.setOptions(this.options);
				}
				onUnsubscribe() {
					this.hasListeners() || this.#j?.removeObserver(this);
				}
				onMutationUpdate(e) {
					this.#N(), this.#F(e);
				}
				getCurrentResult() {
					return this.#b;
				}
				reset() {
					this.#j?.removeObserver(this), (this.#j = void 0), this.#N(), this.#F();
				}
				mutate(e, t) {
					return (
						(this.#_ = t),
						this.#j?.removeObserver(this),
						(this.#j = this.#o.getMutationCache().build(this.#o, this.options)),
						this.#j.addObserver(this),
						this.#j.execute(e)
					);
				}
				#N() {
					let e = this.#j?.state ?? ts();
					this.#b = {
						...e,
						isPending: 'pending' === e.status,
						isSuccess: 'success' === e.status,
						isError: 'error' === e.status,
						isIdle: 'idle' === e.status,
						mutate: this.mutate,
						reset: this.reset,
					};
				}
				#F(e) {
					ej.batch(() => {
						if (this.#_ && this.hasListeners()) {
							let t = this.#b.variables,
								r = this.#b.context;
							e?.type === 'success'
								? (this.#_.onSuccess?.(e.data, t, r), this.#_.onSettled?.(e.data, null, t, r))
								: e?.type === 'error' && (this.#_.onError?.(e.error, t, r), this.#_.onSettled?.(void 0, e.error, t, r));
						}
						this.listeners.forEach((e) => {
							e(this.#b);
						});
					});
				}
			};
			function tn(e) {
				return {
					onFetch: (t, r) => {
						let s = t.options,
							i = t.fetchOptions?.meta?.fetchMore?.direction,
							n = t.state.data?.pages || [],
							a = t.state.data?.pageParams || [],
							u = { pages: [], pageParams: [] },
							o = 0,
							l = async () => {
								let r = !1,
									l = (e) => {
										Object.defineProperty(e, 'signal', {
											enumerable: !0,
											get: () => (
												t.signal.aborted
													? (r = !0)
													: t.signal.addEventListener('abort', () => {
															r = !0;
														}),
												t.signal
											),
										});
									},
									c = eE(t.options, t.fetchOptions),
									h = async (e, s, i) => {
										if (r) return Promise.reject();
										if (null == s && e.pages.length) return Promise.resolve(e);
										let n = (() => {
												let e = {
													client: t.client,
													queryKey: t.queryKey,
													pageParam: s,
													direction: i ? 'backward' : 'forward',
													meta: t.options.meta,
												};
												return l(e), e;
											})(),
											a = await c(n),
											{ maxPages: u } = t.options,
											o = i ? eP : eS;
										return { pages: o(e.pages, a, u), pageParams: o(e.pageParams, s, u) };
									};
								if (i && n.length) {
									let e = 'backward' === i,
										t = { pages: n, pageParams: a },
										r = (e ? tu : ta)(s, t);
									u = await h(t, r, e);
								} else {
									let t = e ?? n.length;
									do {
										let e = 0 === o ? (a[0] ?? s.initialPageParam) : ta(s, u);
										if (o > 0 && null == e) break;
										(u = await h(u, e)), o++;
									} while (o < t);
								}
								return u;
							};
						t.options.persister
							? (t.fetchFn = () =>
									t.options.persister?.(
										l,
										{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
										r,
									))
							: (t.fetchFn = l);
					},
				};
			}
			function ta(e, { pages: t, pageParams: r }) {
				let s = t.length - 1;
				return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
			}
			function tu(e, { pages: t, pageParams: r }) {
				return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
			}
			var to = class extends eY {
				constructor(e, t) {
					super(e, t);
				}
				bindMethods() {
					super.bindMethods(),
						(this.fetchNextPage = this.fetchNextPage.bind(this)),
						(this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
				}
				setOptions(e) {
					super.setOptions({ ...e, behavior: tn() });
				}
				getOptimisticResult(e) {
					return (e.behavior = tn()), super.getOptimisticResult(e);
				}
				fetchNextPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'forward' } } });
				}
				fetchPreviousPage(e) {
					return this.fetch({ ...e, meta: { fetchMore: { direction: 'backward' } } });
				}
				createResult(e, t) {
					var r, s;
					let { state: i } = e,
						n = super.createResult(e, t),
						{ isFetching: a, isRefetching: u, isError: o, isRefetchError: l } = n,
						c = i.fetchMeta?.fetchMore?.direction,
						h = o && 'forward' === c,
						d = a && 'forward' === c,
						p = o && 'backward' === c,
						f = a && 'backward' === c;
					return {
						...n,
						fetchNextPage: this.fetchNextPage,
						fetchPreviousPage: this.fetchPreviousPage,
						hasNextPage: !!(r = i.data) && null != ta(t, r),
						hasPreviousPage: !!(s = i.data) && !!t.getPreviousPageParam && null != tu(t, s),
						isFetchNextPageError: h,
						isFetchingNextPage: d,
						isFetchPreviousPageError: p,
						isFetchingPreviousPage: f,
						isRefetchError: l && !h && !p,
						isRefetching: u && !d && !f,
					};
				}
			};
			function tl(e, t) {
				let r = new Set(t);
				return e.filter((e) => !r.has(e));
			}
			var tc = class extends eF {
				#o;
				#L;
				#K;
				#H;
				#U;
				#G;
				#W;
				#z;
				#B = [];
				constructor(e, t, r) {
					super(), (this.#o = e), (this.#H = r), (this.#K = []), (this.#U = []), (this.#L = []), this.setQueries(t);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						this.#U.forEach((e) => {
							e.subscribe((t) => {
								this.#Y(e, t);
							});
						});
				}
				onUnsubscribe() {
					this.listeners.size || this.destroy();
				}
				destroy() {
					(this.listeners = new Set()),
						this.#U.forEach((e) => {
							e.destroy();
						});
				}
				setQueries(e, t) {
					(this.#K = e),
						(this.#H = t),
						ej.batch(() => {
							let e = this.#U,
								t = this.#V(this.#K);
							(this.#B = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions));
							let r = t.map((e) => e.observer),
								s = r.map((e) => e.getCurrentResult()),
								i = r.some((t, r) => t !== e[r]);
							(e.length !== r.length || i) &&
								((this.#U = r),
								(this.#L = s),
								this.hasListeners() &&
									(tl(e, r).forEach((e) => {
										e.destroy();
									}),
									tl(r, e).forEach((e) => {
										e.subscribe((t) => {
											this.#Y(e, t);
										});
									}),
									this.#F()));
						});
				}
				getCurrentResult() {
					return this.#L;
				}
				getQueries() {
					return this.#U.map((e) => e.getCurrentQuery());
				}
				getObservers() {
					return this.#U;
				}
				getOptimisticResult(e, t) {
					let r = this.#V(e),
						s = r.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions));
					return [s, (e) => this.#$(e ?? s, t), () => this.#J(s, r)];
				}
				#J(e, t) {
					return t.map((r, s) => {
						let i = e[s];
						return r.defaultedQueryOptions.notifyOnChangeProps
							? i
							: r.observer.trackResult(i, (e) => {
									t.forEach((t) => {
										t.observer.trackProp(e);
									});
								});
					});
				}
				#$(e, t) {
					return t
						? ((this.#G && this.#L === this.#z && t === this.#W) ||
								((this.#W = t), (this.#z = this.#L), (this.#G = eg(this.#G, t(e)))),
							this.#G)
						: e;
				}
				#V(e) {
					let t = new Map(this.#U.map((e) => [e.options.queryHash, e])),
						r = [];
					return (
						e.forEach((e) => {
							let s = this.#o.defaultQueryOptions(e),
								i = t.get(s.queryHash);
							i
								? r.push({ defaultedQueryOptions: s, observer: i })
								: r.push({ defaultedQueryOptions: s, observer: new eY(this.#o, s) });
						}),
						r
					);
				}
				#Y(e, t) {
					let r = this.#U.indexOf(e);
					-1 !== r &&
						((this.#L = (function (e, t, r) {
							let s = e.slice(0);
							return (s[t] = r), s;
						})(this.#L, r, t)),
						this.#F());
				}
				#F() {
					if (this.hasListeners()) {
						let e = this.#G,
							t = this.#J(this.#L, this.#B);
						e !== this.#$(t, this.#H?.combine) &&
							ej.batch(() => {
								this.listeners.forEach((e) => {
									e(this.#L);
								});
							});
					}
				}
			};
			function th({ queries: e, ...t }, r) {
				let s = en(r),
					i = e5(),
					n = e0(),
					a = es.useMemo(
						() =>
							e.map((e) => {
								let t = s.defaultQueryOptions(e);
								return (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t;
							}),
						[e, s, i],
					);
				a.forEach((e) => {
					e9(e), e1(e, n);
				}),
					e4(n);
				let [u] = es.useState(() => new tc(s, a, t)),
					[o, l, c] = u.getOptimisticResult(a, t.combine),
					h = !i && !1 !== t.subscribed;
				es.useSyncExternalStore(
					es.useCallback((e) => (h ? u.subscribe(ej.batchCalls(e)) : eo), [u, h]),
					() => u.getCurrentResult(),
					() => u.getCurrentResult(),
				),
					es.useEffect(() => {
						u.setQueries(a, t);
					}, [a, t, u]);
				let d = o.some((e, t) => e7(a[t], e))
					? o.flatMap((e, t) => {
							let r = a[t];
							if (r) {
								let t = new eY(s, r);
								if (e7(r, e)) return te(r, t, n);
								e8(e, i) && te(r, t, n);
							}
							return [];
						})
					: [];
				if (d.length > 0) throw Promise.all(d);
				let p = o.find((e, t) => {
					let r = a[t];
					return (
						r &&
						e3({
							result: e,
							errorResetBoundary: n,
							throwOnError: r.throwOnError,
							query: s.getQueryCache().get(r.queryHash),
							suspense: r.suspense,
						})
					);
				});
				if (p?.error) throw p.error;
				return l(c());
			}
			var td = class extends eF {
					constructor(e = {}) {
						super(), (this.config = e), (this.#K = new Map());
					}
					#K;
					build(e, t, r) {
						let s = t.queryKey,
							i = t.queryHash ?? ey(s, t),
							n = this.get(i);
						return (
							n ||
								((n = new ez({
									client: e,
									queryKey: s,
									queryHash: i,
									options: e.defaultQueryOptions(t),
									state: r,
									defaultOptions: e.getQueryDefaults(s),
								})),
								this.add(n)),
							n
						);
					}
					add(e) {
						this.#K.has(e.queryHash) || (this.#K.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
					}
					remove(e) {
						let t = this.#K.get(e.queryHash);
						t && (e.destroy(), t === e && this.#K.delete(e.queryHash), this.notify({ type: 'removed', query: e }));
					}
					clear() {
						ej.batch(() => {
							this.getAll().forEach((e) => {
								this.remove(e);
							});
						});
					}
					get(e) {
						return this.#K.get(e);
					}
					getAll() {
						return [...this.#K.values()];
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => ep(t, e));
					}
					findAll(e = {}) {
						let t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter((t) => ep(e, t)) : t;
					}
					notify(e) {
						ej.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						ej.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						ej.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				tp = class extends eF {
					constructor(e = {}) {
						super(), (this.config = e), (this.#X = new Set()), (this.#Z = new Map()), (this.#ee = 0);
					}
					#X;
					#Z;
					#ee;
					build(e, t, r) {
						let s = new tr({
							mutationCache: this,
							mutationId: ++this.#ee,
							options: e.defaultMutationOptions(t),
							state: r,
						});
						return this.add(s), s;
					}
					add(e) {
						this.#X.add(e);
						let t = tf(e);
						if ('string' == typeof t) {
							let r = this.#Z.get(t);
							r ? r.push(e) : this.#Z.set(t, [e]);
						}
						this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						if (this.#X.delete(e)) {
							let t = tf(e);
							if ('string' == typeof t) {
								let r = this.#Z.get(t);
								if (r)
									if (r.length > 1) {
										let t = r.indexOf(e);
										-1 !== t && r.splice(t, 1);
									} else r[0] === e && this.#Z.delete(t);
							}
						}
						this.notify({ type: 'removed', mutation: e });
					}
					canRun(e) {
						let t = tf(e);
						if ('string' != typeof t) return !0;
						{
							let r = this.#Z.get(t),
								s = r?.find((e) => 'pending' === e.state.status);
							return !s || s === e;
						}
					}
					runNext(e) {
						let t = tf(e);
						if ('string' != typeof t) return Promise.resolve();
						{
							let r = this.#Z.get(t)?.find((t) => t !== e && t.state.isPaused);
							return r?.continue() ?? Promise.resolve();
						}
					}
					clear() {
						ej.batch(() => {
							this.#X.forEach((e) => {
								this.notify({ type: 'removed', mutation: e });
							}),
								this.#X.clear(),
								this.#Z.clear();
						});
					}
					getAll() {
						return Array.from(this.#X);
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => ef(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => ef(e, t));
					}
					notify(e) {
						ej.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						let e = this.getAll().filter((e) => e.state.isPaused);
						return ej.batch(() => Promise.all(e.map((e) => e.continue().catch(eo))));
					}
				};
			function tf(e) {
				return e.options.scope?.id;
			}
			var ty = class {
				#et;
				#k;
				#c;
				#er;
				#es;
				#ei;
				#en;
				#ea;
				constructor(e = {}) {
					(this.#et = e.queryCache || new td()),
						(this.#k = e.mutationCache || new tp()),
						(this.#c = e.defaultOptions || {}),
						(this.#er = new Map()),
						(this.#es = new Map()),
						(this.#ei = 0);
				}
				mount() {
					this.#ei++,
						1 === this.#ei &&
							((this.#en = eU.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onFocus());
							})),
							(this.#ea = e_.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onOnline());
							})));
				}
				unmount() {
					this.#ei--, 0 === this.#ei && (this.#en?.(), (this.#en = void 0), this.#ea?.(), (this.#ea = void 0));
				}
				isFetching(e) {
					return this.#et.findAll({ ...e, fetchStatus: 'fetching' }).length;
				}
				isMutating(e) {
					return this.#k.findAll({ ...e, status: 'pending' }).length;
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state.data;
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						r = this.#et.build(this, t),
						s = r.state.data;
					return void 0 === s
						? this.fetchQuery(e)
						: (e.revalidateIfStale && r.isStaleByTime(eh(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(s));
				}
				getQueriesData(e) {
					return this.#et.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
				}
				setQueryData(e, t, r) {
					let s = this.defaultQueryOptions({ queryKey: e }),
						i = this.#et.get(s.queryHash),
						n = i?.state.data,
						a = 'function' == typeof t ? t(n) : t;
					if (void 0 !== a) return this.#et.build(this, s).setData(a, { ...r, manual: !0 });
				}
				setQueriesData(e, t, r) {
					return ej.batch(() => this.#et.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]));
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#et;
					ej.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let r = this.#et;
					return ej.batch(
						() => (
							r.findAll(e).forEach((e) => {
								e.reset();
							}),
							this.refetchQueries({ type: 'active', ...e }, t)
						),
					);
				}
				cancelQueries(e, t = {}) {
					let r = { revert: !0, ...t };
					return Promise.all(ej.batch(() => this.#et.findAll(e).map((e) => e.cancel(r))))
						.then(eo)
						.catch(eo);
				}
				invalidateQueries(e, t = {}) {
					return ej.batch(() =>
						(this.#et.findAll(e).forEach((e) => {
							e.invalidate();
						}),
						e?.refetchType === 'none')
							? Promise.resolve()
							: this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, t),
					);
				}
				refetchQueries(e, t = {}) {
					let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
					return Promise.all(
						ej.batch(() =>
							this.#et
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, r);
									return r.throwOnError || (t = t.catch(eo)), 'paused' === e.state.fetchStatus ? Promise.resolve() : t;
								}),
						),
					).then(eo);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let r = this.#et.build(this, t);
					return r.isStaleByTime(eh(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(eo).catch(eo);
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = tn(e.pages)), this.fetchQuery(e);
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(eo).catch(eo);
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = tn(e.pages)), this.ensureQueryData(e);
				}
				resumePausedMutations() {
					return e_.isOnline() ? this.#k.resumePausedMutations() : Promise.resolve();
				}
				getQueryCache() {
					return this.#et;
				}
				getMutationCache() {
					return this.#k;
				}
				getDefaultOptions() {
					return this.#c;
				}
				setDefaultOptions(e) {
					this.#c = e;
				}
				setQueryDefaults(e, t) {
					this.#er.set(em(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#er.values()],
						r = {};
					return (
						t.forEach((t) => {
							eb(e, t.queryKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				setMutationDefaults(e, t) {
					this.#es.set(em(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#es.values()],
						r = {};
					return (
						t.forEach((t) => {
							eb(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = { ...this.#c.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
					return (
						t.queryHash || (t.queryHash = ey(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === eq && (t.enabled = !1),
						t
					);
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#c.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							};
				}
				clear() {
					this.#et.clear(), this.#k.clear();
				}
			};
			let tm = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
				tb = es.createContext?.(null),
				tg = (e) => {
					switch (e) {
						case 'queryOptions':
						case 'fetch':
						case 'ensureData':
						case 'prefetch':
						case 'getData':
						case 'setData':
						case 'setQueriesData':
							return 'query';
						case 'infiniteQueryOptions':
						case 'fetchInfinite':
						case 'prefetchInfinite':
						case 'getInfiniteData':
						case 'setInfiniteData':
							return 'infinite';
						case 'setMutationDefaults':
						case 'getMutationDefaults':
						case 'isMutating':
						case 'cancel':
						case 'invalidate':
						case 'refetch':
						case 'reset':
							return 'any';
					}
				};
			function tv(e) {
				let t = e instanceof J ? e : e[X];
				return L((e) => {
					let r = e.path,
						s = r.join('.'),
						[i, n] = e.args;
					return { queryKey: eI(r, i, 'query'), queryFn: () => t.query(s, i, n?.trpc), ...n };
				});
			}
			function tO(e, t, r) {
				let s = e[0],
					i = e[1]?.input;
				return (
					r && (i = { ...(i ?? {}), ...(r.pageParam ? { cursor: r.pageParam } : {}), direction: r.direction }),
					[s.join('.'), i, t?.trpc]
				);
			}
			function tR(e) {
				return { path: e.path.join('.') };
			}
			function tw(e) {
				let t = tR(e);
				return es.useMemo(() => t, [t]);
			}
			async function tC(e, t, r) {
				let s = t.getQueryCache().build(t, { queryKey: r });
				s.setState({ data: [], status: 'success' });
				let i = [];
				for await (let t of e) i.push(t), s.setState({ data: [...i] });
				return i;
			}
			let tS = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
			function tP(e) {
				let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
					r = e?.context ?? tb;
				function i() {
					let e = es.useContext(r);
					if (!e) throw Error('Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?');
					return e;
				}
				function n(e, t) {
					let { queryClient: r, ssrState: s } = i();
					return s && 'mounted' !== s && r.getQueryCache().find({ queryKey: e })?.state.status === 'error'
						? { retryOnMount: !1, ...t }
						: t;
				}
				let a = { data: void 0, error: null, status: 'idle' },
					u = { data: void 0, error: null, status: 'connecting' };
				return {
					Provider: (e) => {
						let { abortOnUnmount: t = !1, queryClient: i, ssrContext: n } = e,
							[a, u] = es.useState(e.ssrState ?? !1),
							o = e.client instanceof J ? e.client : e.client[X],
							l = es.useMemo(
								() =>
									(function (e) {
										let { client: t, queryClient: r } = e,
											s = t instanceof J ? t : t[X];
										return {
											infiniteQueryOptions: (e, t, r) => {
												let i = t[1]?.input === eq,
													n = async (e) => {
														let i = {
															...r,
															trpc: {
																...r?.trpc,
																...(r?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
															},
														};
														return await s.query(...tO(t, i, { direction: e.direction, pageParam: e.pageParam }));
													};
												return Object.assign(
													{
														...r,
														initialData: r?.initialData,
														queryKey: t,
														queryFn: i ? eq : n,
														initialPageParam: r?.initialCursor ?? null,
													},
													{ trpc: tR({ path: e }) },
												);
											},
											queryOptions: (e, t, i) => {
												let n = t[1]?.input === eq,
													a = async (e) => {
														let n = {
																...i,
																trpc: {
																	...i?.trpc,
																	...(i?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
																},
															},
															a = await s.query(...tO(t, n));
														return c(a) ? tC(a, r, t) : a;
													};
												return Object.assign(
													{ ...i, initialData: i?.initialData, queryKey: t, queryFn: n ? eq : a },
													{ trpc: tR({ path: e }) },
												);
											},
											fetchQuery: (e, t) => r.fetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tO(e, t)) }),
											fetchInfiniteQuery: (e, t) =>
												r.fetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tO(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											prefetchQuery: (e, t) =>
												r.prefetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tO(e, t)) }),
											prefetchInfiniteQuery: (e, t) =>
												r.prefetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tO(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											ensureQueryData: (e, t) =>
												r.ensureQueryData({ ...t, queryKey: e, queryFn: () => s.query(...tO(e, t)) }),
											invalidateQueries: (e, t, s) => r.invalidateQueries({ ...t, queryKey: e }, s),
											resetQueries: (e, t, s) => r.resetQueries({ ...t, queryKey: e }, s),
											refetchQueries: (e, t, s) => r.refetchQueries({ ...t, queryKey: e }, s),
											cancelQuery: (e, t) => r.cancelQueries({ queryKey: e }, t),
											setQueryData: (e, t, s) => r.setQueryData(e, t, s),
											setQueriesData: (e, t, s, i) => r.setQueriesData({ ...t, queryKey: e }, s, i),
											getQueryData: (e) => r.getQueryData(e),
											setInfiniteQueryData: (e, t, s) => r.setQueryData(e, t, s),
											getInfiniteQueryData: (e) => r.getQueryData(e),
											setMutationDefaults: (t, i) => {
												let n = t[0];
												return r.setMutationDefaults(
													t,
													'function' == typeof i
														? i({ canonicalMutationFn: (t) => s.mutation(...tO([n, { input: t }], e)) })
														: i,
												);
											},
											getMutationDefaults: (e) => r.getMutationDefaults(e),
											isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
										};
									})({ client: o, queryClient: i }),
								[o, i],
							),
							h = es.useMemo(
								() => ({ abortOnUnmount: t, queryClient: i, client: o, ssrContext: n ?? null, ssrState: a, ...l }),
								[t, o, l, i, n, a],
							);
						return (
							es.useEffect(() => {
								u((e) => !!e && 'mounted');
							}, []),
							(0, s.jsx)(r.Provider, { value: h, children: e.children })
						);
					},
					createClient: er,
					useContext: i,
					useUtils: i,
					useQuery: function (t, r, s) {
						let { abortOnUnmount: a, client: u, ssrState: o, queryClient: l, prefetchQuery: h } = i(),
							d = eI(t, r, 'query'),
							p = l.getQueryDefaults(d),
							f = r === eq;
						'undefined' != typeof window ||
							'prepass' !== o ||
							s?.trpc?.ssr === !1 ||
							(s?.enabled ?? p?.enabled) === !1 ||
							f ||
							l.getQueryCache().find({ queryKey: d }) ||
							h(d, s);
						let y = n(d, { ...p, ...s }),
							m = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
							b = tt(
								{
									...y,
									queryKey: d,
									queryFn: f
										? r
										: async (e) => {
												let t = { ...y, trpc: { ...y?.trpc, ...(m ? { signal: e.signal } : { signal: null }) } },
													r = await u.query(...tO(d, t));
												return c(r) ? tC(r, l, d) : r;
											},
								},
								eY,
								l,
							);
						return (b.trpc = tw({ path: t })), b;
					},
					usePrefetchQuery: function (t, r, s) {
						let n = i(),
							a = eI(t, r, 'query'),
							u = r === eq,
							o = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? n.abortOnUnmount;
						!(function (e, t) {
							let r = en(void 0);
							r.getQueryState(e.queryKey) || r.prefetchQuery(e);
						})({
							...s,
							queryKey: a,
							queryFn: u
								? r
								: (e) => {
										let t = { trpc: { ...s?.trpc, ...(o ? { signal: e.signal } : {}) } };
										return n.client.query(...tO(a, t));
									},
						});
					},
					useSuspenseQuery: function (t, r, s) {
						var n, a;
						let u = i(),
							o = eI(t, r, 'query'),
							l = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? u.abortOnUnmount,
							c =
								((n = {
									...s,
									queryKey: o,
									queryFn: (e) => {
										let t = { ...s, trpc: { ...s?.trpc, ...(l ? { signal: e.signal } : { signal: null }) } };
										return u.client.query(...tO(o, t));
									},
								}),
								(a = u.queryClient),
								tt({ ...n, enabled: !0, suspense: !0, throwOnError: e6, placeholderData: void 0 }, eY, a));
						return (c.trpc = tw({ path: t })), [c.data, c];
					},
					useQueries: (e, t) => {
						let { ssrState: r, queryClient: s, prefetchQuery: n, client: a } = i(),
							u = e(tv(a));
						if ('undefined' == typeof window && 'prepass' === r)
							for (let e of u)
								e.trpc?.ssr === !1 || s.getQueryCache().find({ queryKey: e.queryKey }) || n(e.queryKey, e);
						return th({ queries: u.map((e) => ({ ...e, queryKey: e.queryKey })), combine: t?.combine }, s);
					},
					useSuspenseQueries: (e) => {
						var t;
						let { queryClient: r, client: s } = i(),
							n =
								((t = { queries: e(tv(s)).map((e) => ({ ...e, queryFn: e.queryFn, queryKey: e.queryKey })) }),
								th(
									{
										...t,
										queries: t.queries.map((e) => ({
											...e,
											suspense: !0,
											throwOnError: e6,
											enabled: !0,
											placeholderData: void 0,
										})),
									},
									r,
								));
						return [n.map((e) => e.data), n];
					},
					useMutation: function (e, r) {
						let { client: s, queryClient: n } = i(),
							a = eA(e),
							u = n.defaultMutationOptions(n.getMutationDefaults(a)),
							o = (function (e, t) {
								let r = en(t),
									[s] = es.useState(() => new ti(r, e));
								es.useEffect(() => {
									s.setOptions(e);
								}, [s, e]);
								let i = es.useSyncExternalStore(
										es.useCallback((e) => s.subscribe(ej.batchCalls(e)), [s]),
										() => s.getCurrentResult(),
										() => s.getCurrentResult(),
									),
									n = es.useCallback(
										(e, t) => {
											s.mutate(e, t).catch(eo);
										},
										[s],
									);
								if (i.error && eQ(s.options.throwOnError, [i.error])) throw i.error;
								return { ...i, mutate: n, mutateAsync: i.mutate };
							})(
								{
									...r,
									mutationKey: a,
									mutationFn: (t) => s.mutation(...tO([e, { input: t }], r)),
									onSuccess: (...e) =>
										t({
											originalFn: () => r?.onSuccess?.(...e) ?? u?.onSuccess?.(...e),
											queryClient: n,
											meta: r?.meta ?? u?.meta ?? {},
										}),
								},
								n,
							);
						return (o.trpc = tw({ path: e })), o;
					},
					useSubscription: function (e, t, r) {
						let s = r?.enabled ?? t !== eq,
							n = em(eI(e, t, 'any')),
							{ client: o } = i(),
							l = es.useRef(r);
						es.useEffect(() => {
							l.current = r;
						});
						let [c] = es.useState(new Set([])),
							h = es.useCallback(
								(e) => {
									c.add(e);
								},
								[c],
							),
							d = es.useRef(null),
							p = es.useCallback(
								(e) => {
									let t = y.current,
										r = (y.current = e(t)),
										s = !1;
									for (let e of c)
										if (t[e] !== r[e]) {
											s = !0;
											break;
										}
									s && b(tS(r, h));
								},
								[h, c],
							),
							f = es.useCallback(() => {
								if ((d.current?.unsubscribe(), !s)) return void p(() => ({ ...a, reset: f }));
								p(() => ({ ...u, reset: f })),
									(d.current = o.subscription(e.join('.'), t ?? void 0, {
										onStarted: () => {
											l.current.onStarted?.(), p((e) => ({ ...e, status: 'pending', error: null }));
										},
										onData: (e) => {
											l.current.onData?.(e), p((t) => ({ ...t, status: 'pending', data: e, error: null }));
										},
										onError: (e) => {
											l.current.onError?.(e), p((t) => ({ ...t, status: 'error', error: e }));
										},
										onConnectionStateChange: (e) => {
											p((t) => {
												switch (e.state) {
													case 'idle':
														return { ...t, status: e.state, error: null, data: void 0 };
													case 'connecting':
														return { ...t, error: e.error, status: e.state };
													case 'pending':
														return t;
												}
											});
										},
										onComplete: () => {
											l.current.onComplete?.(), p((e) => ({ ...e, status: 'idle', error: null, data: void 0 }));
										},
									}));
							}, [o, n, s, p]);
						es.useEffect(
							() => (
								f(),
								() => {
									d.current?.unsubscribe();
								}
							),
							[f],
						);
						let y = es.useRef(s ? { ...u, reset: f } : { ...a, reset: f }),
							[m, b] = es.useState(tS(y.current, h));
						return m;
					},
					useInfiniteQuery: function (e, t, r) {
						let { client: s, ssrState: a, prefetchInfiniteQuery: u, queryClient: o, abortOnUnmount: l } = i(),
							c = eI(e, t, 'infinite'),
							h = o.getQueryDefaults(c),
							d = t === eq;
						'undefined' != typeof window ||
							'prepass' !== a ||
							r?.trpc?.ssr === !1 ||
							(r?.enabled ?? h?.enabled) === !1 ||
							d ||
							o.getQueryCache().find({ queryKey: c }) ||
							u(c, { ...h, ...r });
						let p = n(c, { ...h, ...r }),
							f = r?.trpc?.abortOnUnmount ?? l,
							y = tt(
								{
									...p,
									initialPageParam: r.initialCursor ?? null,
									persister: r.persister,
									queryKey: c,
									queryFn: d
										? t
										: (e) => {
												let t = { ...p, trpc: { ...p?.trpc, ...(f ? { signal: e.signal } : { signal: null }) } };
												return s.query(
													...tO(c, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
												);
											},
								},
								to,
								o,
							);
						return (y.trpc = tw({ path: e })), y;
					},
					usePrefetchInfiniteQuery: function (e, t, r) {
						let s = i(),
							a = eI(e, t, 'infinite'),
							u = s.queryClient.getQueryDefaults(a),
							o = t === eq,
							l = n(a, { ...u, ...r }),
							c = r?.trpc?.abortOnUnmount ?? s.abortOnUnmount;
						!(function (e, t) {
							let r = en(void 0);
							r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
						})({
							...r,
							initialPageParam: r.initialCursor ?? null,
							queryKey: a,
							queryFn: o
								? t
								: (e) => {
										let t = { ...l, trpc: { ...l?.trpc, ...(c ? { signal: e.signal } : {}) } };
										return s.client.query(
											...tO(a, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
						});
					},
					useSuspenseInfiniteQuery: function (e, t, r) {
						var s, a;
						let u = i(),
							o = eI(e, t, 'infinite'),
							l = u.queryClient.getQueryDefaults(o),
							c = n(o, { ...l, ...r }),
							h = r?.trpc?.abortOnUnmount ?? u.abortOnUnmount,
							d =
								((s = {
									...r,
									initialPageParam: r.initialCursor ?? null,
									queryKey: o,
									queryFn: (e) => {
										let t = { ...c, trpc: { ...c?.trpc, ...(h ? { signal: e.signal } : {}) } };
										return u.client.query(
											...tO(o, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
								}),
								(a = u.queryClient),
								tt({ ...s, enabled: !0, suspense: !0, throwOnError: e6 }, to, a));
						return (d.trpc = tw({ path: e })), [d.data, d];
					},
				};
			}
			let tq = (e) => e.queryClient ?? new ty(e.queryClientConfig);
			r(6064);
			let tE = () => '',
				tQ = (function (e) {
					let t = tP(e),
						r = (function (e) {
							let { config: t } = e,
								r = d(e.transformer);
							return (i) => {
								let n = tP(e),
									a = (a) => {
										let [u] = (0, es.useState)(() => {
												if (a.trpc) return a.trpc;
												let r = t({}),
													s = tq(r),
													i = n.createClient(r);
												return {
													abortOnUnmount: r.abortOnUnmount,
													queryClient: s,
													trpcClient: i,
													ssrState: !!e.ssr && 'mounting',
													ssrContext: null,
												};
											}),
											{ queryClient: o, trpcClient: l, ssrState: c, ssrContext: h } = u,
											d = a.pageProps?.trpcState,
											p = es.useMemo(() => (d ? r.input.deserialize(d) : d), [d]);
										return (0, s.jsx)(n.Provider, {
											abortOnUnmount: u.abortOnUnmount ?? !1,
											client: l,
											queryClient: o,
											ssrState: c,
											ssrContext: h,
											children: (0, s.jsx)(ea, {
												client: o,
												children: (0, s.jsx)(eM, { state: p, children: (0, s.jsx)(i, { ...a }) }),
											}),
										});
									};
								e.ssr
									? e.ssrPrepass({ parent: e, AppOrPage: i, WithTRPC: a })
									: i.getInitialProps &&
										(a.getInitialProps = async (e) => {
											let t,
												r = !!e.Component,
												s = {},
												n = await i.getInitialProps(e);
											return (t = s = { ...(r ? (n.pageProps ?? {}) : n), ...s }), r ? { pageProps: t } : t;
										});
								let u = i.displayName ?? i.name ?? 'Component';
								return (a.displayName = `withTRPC(${u})`), a;
							};
						})(e),
						i = L(({ path: e, args: r }) => {
							let s = [...e],
								i = s.pop();
							if ('useMutation' === i) return t[i](s, ...r);
							if ('_def' === i) return { path: s };
							let [n, ...a] = r,
								u = a[0] ?? {};
							return t[i](s, n, u);
						});
					return K((e) =>
						'useContext' === e || 'useUtils' === e
							? () => {
									let e = t.useUtils();
									return (0, es.useMemo)(
										() =>
											(function (e) {
												var t;
												let r = et(e.client),
													s =
														((t = e),
														L((e) => {
															let r = [...e.path],
																s = r.pop(),
																i = [...e.args],
																n = i.shift(),
																a = eI(r, n, tg(s));
															return {
																infiniteQueryOptions: () => t.infiniteQueryOptions(r, a, i[0]),
																queryOptions: () => t.queryOptions(r, a, ...i),
																fetch: () => t.fetchQuery(a, ...i),
																fetchInfinite: () => t.fetchInfiniteQuery(a, i[0]),
																prefetch: () => t.prefetchQuery(a, ...i),
																prefetchInfinite: () => t.prefetchInfiniteQuery(a, i[0]),
																ensureData: () => t.ensureQueryData(a, ...i),
																invalidate: () => t.invalidateQueries(a, ...i),
																reset: () => t.resetQueries(a, ...i),
																refetch: () => t.refetchQueries(a, ...i),
																cancel: () => t.cancelQuery(a, ...i),
																setData: () => {
																	t.setQueryData(a, i[0], i[1]);
																},
																setQueriesData: () => t.setQueriesData(a, i[0], i[1], i[2]),
																setInfiniteData: () => {
																	t.setInfiniteQueryData(a, i[0], i[1]);
																},
																getData: () => t.getQueryData(a),
																getInfiniteData: () => t.getInfiniteQueryData(a),
																setMutationDefaults: () => t.setMutationDefaults(eA(r), n),
																getMutationDefaults: () => t.getMutationDefaults(eA(r)),
																isMutating: () => t.isMutating({ mutationKey: eA(r) }),
															}[s]();
														}));
												return K((t) => ('client' === t ? r : tm.includes(t) ? e[t] : s[t]));
											})(e),
										[e],
									);
								}
							: 'useQueries' === e
								? t.useQueries
								: 'useSuspenseQueries' === e
									? t.useSuspenseQueries
									: 'withTRPC' === e
										? r
										: i[e],
					);
				})({
					config: () => ({
						links: [
							(function (e) {
								let t = {
										url: e.url.toString(),
										fetch: e.fetch,
										transformer: d(e.transformer),
										methodOverride: e.methodOverride,
									},
									r = e.maxURLLength ?? 1 / 0,
									s = e.maxItems ?? 1 / 0;
								return () => {
									let i = (i) => ({
											validate(e) {
												if (r === 1 / 0 && s === 1 / 0) return !0;
												if (e.length > s) return !1;
												let n = e.map((e) => e.path).join(','),
													a = e.map((e) => e.input);
												return m({ ...t, type: i, path: n, inputs: a, signal: null }).length <= r;
											},
											async fetch(r) {
												let s = r.map((e) => e.path).join(','),
													n = r.map((e) => e.input),
													a = (function (...e) {
														let t = new AbortController(),
															r = e.length,
															s = 0,
															i = () => {
																++s === r && t.abort();
															};
														for (let t of e) t?.aborted ? i() : t?.addEventListener('abort', i, { once: !0 });
														return t.signal;
													})(...r.map((e) => e.signal)),
													u = await g({
														...t,
														path: s,
														inputs: n,
														type: i,
														headers: () =>
															e.headers ? ('function' == typeof e.headers ? e.headers({ opList: r }) : e.headers) : {},
														signal: a,
													});
												return (Array.isArray(u.json) ? u.json : r.map(() => u.json)).map((e) => ({
													meta: u.meta,
													json: e,
												}));
											},
										}),
										a = { query: q(i('query')), mutation: q(i('mutation')) };
									return ({ op: e }) =>
										n((r) => {
											let s;
											if ('subscription' === e.type)
												throw Error(
													'Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`',
												);
											return (
												a[e.type]
													.load(e)
													.then((e) => {
														s = e;
														let i = (function (e, t) {
															let r;
															try {
																r = (function (e, t) {
																	if ('error' in e) {
																		let r = t.deserialize(e.error);
																		return { ok: !1, error: { ...e, error: r } };
																	}
																	return {
																		ok: !0,
																		result: {
																			...e.result,
																			...((!e.result.type || 'data' === e.result.type) && {
																				type: 'data',
																				data: t.deserialize(e.result.data),
																			}),
																		},
																	};
																})(e, t);
															} catch {
																throw new S();
															}
															if (
																(!r.ok && (!o(r.error.error) || 'number' != typeof r.error.error.code)) ||
																(r.ok && !o(r.result))
															)
																throw new S();
															return r;
														})(e.json, t.transformer.output);
														if (!i.ok) return void r.error(h.from(i.error, { meta: e.meta }));
														r.next({ context: e.meta, result: i.result }), r.complete();
													})
													.catch((e) => {
														r.error(h.from(e, { meta: s?.meta }));
													}),
												() => {}
											);
										});
								};
							})({ url: ''.concat(tE(), '/api/trpc'), headers: async () => ({}) }),
						],
					}),
					ssr: !1,
				});
			var tx = r(5e3),
				tD = r.n(tx),
				tT = r(1800),
				tM = r.n(tT),
				tI = r(1668),
				tA = r.n(tI);
			let tF = tQ.withTRPC((e) => {
				let { Component: t, pageProps: r } = e;
				return (0, s.jsxs)(s.Fragment, {
					children: [
						(0, s.jsx)(tA(), { children: (0, s.jsx)('title', { children: 'Telegram Mini App' }) }),
						(0, s.jsx)('div', {
							className: ''.concat(tD().className, ' ').concat(tM().className),
							children: (0, s.jsx)(i.i, { children: (0, s.jsx)(t, { ...r }) }),
						}),
					],
				});
			});
		},
		5e3: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_6f2501',
				variable: '__variable_6f2501',
			};
		},
		8217: () => {},
		9547: (e, t, r) => {
			'use strict';
			r.d(t, { i: () => h, O: () => d });
			var s = r(5640);
			let i = { debug: '\x1b[36m', info: '\x1b[32m', warn: '\x1b[33m', error: '\x1b[31m' },
				n = { debug: 0, info: 1, warn: 2, error: 3 },
				a = (function () {
					var e, t;
					let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						s = null != (e = r.level) ? e : 'info',
						a = null == (t = r.timestamp) || t,
						u = (e) => n[e] >= n[s],
						o = (e, t, r) => {
							let s = i[e],
								n = a ? '['.concat(new Date().toISOString(), '] ') : '';
							return ''
								.concat(s)
								.concat(n)
								.concat(r ? '['.concat(r, '] ') : '')
								.concat(e.toUpperCase(), ': ')
								.concat(t)
								.concat('\x1b[0m');
						},
						l = (e, t, r) => {
							u(e) && console.log(o(e, t, r));
						};
					return {
						debug: (e, t) => l('debug', e, t),
						info: (e, t) => l('info', e, t),
						warn: (e, t) => l('warn', e, t),
						error: (e, t) => l('error', e, t),
					};
				})({ level: 'info' }),
				u = async (e) => {
					try {
						return { data: await e, error: null };
					} catch (e) {
						return { data: null, error: e };
					}
				};
			var o = r(148);
			let l = async () => {
					var e, t, r;
					if (null == (r = window) || null == (t = r.Telegram) || null == (e = t.WebApp) ? void 0 : e.initData) {
						let e = Object.fromEntries(new URLSearchParams(window.Telegram.WebApp.initData));
						a.info('initData', JSON.stringify(e));
						let { user: t } = e,
							{ data: r, error: s } = await u(JSON.parse(t));
						return s ? (console.error(s), null) : r;
					}
					return null;
				},
				c = (0, o.createContext)({ user: null }),
				h = (e) => {
					let { children: t = (0, s.jsx)(s.Fragment, {}) } = e,
						[{ user: r }, i] = (0, o.useState)({ user: null });
					(0, o.useEffect)(() => {
						(async () => {
							let e = await l();
							i((t) => ({ ...t, user: e }));
						})();
					}, []);
					let n = (0, o.useMemo)(() => ({ user: r }), [r]);
					return (0, s.jsx)(c.Provider, { value: n, children: t });
				},
				d = () => (0, o.useContext)(c);
		},
		9896: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(4865);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [593, 792], () => (t(9896), t(9743))), (_N_E = e.O());
	},
]);
