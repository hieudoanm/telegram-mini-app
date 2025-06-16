(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		248: (e, t, r) => {
			'use strict';
			function s(e) {
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
					pipe: (...e) => e.reduce(i, t),
				};
				return t;
			}
			function i(e, t) {
				return t(e);
			}
			r.d(t, { r: () => tQ, t: () => tE });
			let n = {
				INTERNAL_SERVER_ERROR: -32603,
				BAD_GATEWAY: -32603,
				SERVICE_UNAVAILABLE: -32603,
				GATEWAY_TIMEOUT: -32603,
			};
			function a(e) {
				return !!e && !Array.isArray(e) && 'object' == typeof e;
			}
			n.BAD_GATEWAY, n.SERVICE_UNAVAILABLE, n.GATEWAY_TIMEOUT, n.INTERNAL_SERVER_ERROR;
			let u = 'function' == typeof Symbol && !!Symbol.asyncIterator;
			function o(e) {
				return u && a(e) && Symbol.asyncIterator in e;
			}
			var l = class e extends Error {
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
					return t instanceof l
						? (r.meta && (t.meta = { ...t.meta, ...r.meta }), t)
						: a(t) && a(t.error) && 'number' == typeof t.error.code && 'string' == typeof t.error.message
							? new e(t.error.message, { ...r, result: t })
							: new e('string' == typeof t ? t : a(t) && 'string' == typeof t.message ? t.message : 'Unknown error', {
									...r,
									cause: t,
								});
				}
			};
			function c(e) {
				return e
					? 'input' in e
						? e
						: { input: e, output: e }
					: {
							input: { serialize: (e) => e, deserialize: (e) => e },
							output: { serialize: (e) => e, deserialize: (e) => e },
						};
			}
			let h = (e) => 'function' == typeof e,
				d = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
			function p(e) {
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
			let f = (e) => {
					let t = e.url.split('?'),
						r = t[0].replace(/\/$/, '') + '/' + e.path,
						s = [];
					if (
						(t[1] && s.push(t[1]), 'inputs' in e && s.push('batch=1'), 'query' === e.type || 'subscription' === e.type)
					) {
						let t = p(e);
						void 0 !== t && 'POST' !== e.methodOverride && s.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
					}
					return s.length && (r += '?' + s.join('&')), r;
				},
				y = (e) => {
					if ('query' === e.type && 'POST' !== e.methodOverride) return;
					let t = p(e);
					return void 0 !== t ? JSON.stringify(t) : void 0;
				},
				m = (e) => O({ ...e, contentTypeHeader: 'application/json', getUrl: f, getBody: y });
			var b = class extends Error {
				constructor() {
					let e = 'AbortError';
					super(e), (this.name = e), (this.message = e);
				}
			};
			let g = (e) => {
				if (e?.aborted) {
					if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
						throw new DOMException('AbortError', 'AbortError');
					throw new b();
				}
			};
			async function v(e) {
				g(e.signal);
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
					if ('undefined' != typeof window && h(window.fetch)) return window.fetch;
					if ('undefined' != typeof globalThis && h(globalThis.fetch)) return globalThis.fetch;
					throw Error('No fetch implementation found');
				})(e.fetch)(t, { method: e.methodOverride ?? d[s], signal: e.signal, body: r, headers: n });
			}
			async function O(e) {
				let t = {},
					r = await v(e);
				t.response = r;
				let s = await r.json();
				return (t.responseJSON = s), { json: s, meta: t };
			}
			var R = class extends Error {},
				w = class extends Error {
					constructor() {
						super('Unable to transform response from server');
					}
				};
			Symbol('lazy');
			Symbol();
			let C = () => {
				throw Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
			};
			function P(e) {
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
						let s = { aborted: !1, key: e, batch: null, resolve: C, reject: C },
							n = new Promise((e, r) => {
								(s.reject = r), (s.resolve = e), (t ??= []).push(s);
							});
						return (r ??= setTimeout(i)), n;
					},
				};
			}
			let S = {
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
				q = { enabled: !1, closeMs: 0 },
				E = { enabled: !1, pongTimeoutMs: 1e3, intervalMs: 5e3 },
				Q = (e) => (0 === e ? 0 : Math.min(1e3 * 2 ** e, 3e4)),
				x = (e, ...t) => ('function' == typeof e ? e(...t) : e);
			var D = class e extends Error {
					constructor(t) {
						super(t.message, { cause: t.cause }),
							(this.name = 'TRPCWebSocketClosedError'),
							Object.setPrototypeOf(this, e.prototype);
					}
				},
				T = class {
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
			function M() {
				let e, t;
				return {
					promise: new Promise((r, s) => {
						(e = r), (t = s);
					}),
					resolve: e,
					reject: t,
				};
			}
			async function I(e) {
				let t = await x(e.url);
				if (!e.connectionParams) return t;
				let r = t.includes('?') ? '&' : '?';
				return t + `${r}connectionParams=1`;
			}
			async function A(e) {
				return JSON.stringify({ method: 'connectionParams', data: await x(e) });
			}
			var F = class {
					outgoingRequests = [];
					pendingRequests = {};
					register(e, t) {
						let { promise: r, resolve: s } = M();
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
						let t = I(this.urlOptions).then((e) => new this.WebSocketPonyfill(e));
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
									let { promise: t, resolve: r, reject: s } = M();
									return (
										e.addEventListener('open', () => {
											e.removeEventListener('error', s), r();
										}),
										e.addEventListener('error', s),
										t
									);
								})(e),
								this.urlOptions.connectionParams && e.send(await A(this.urlOptions.connectionParams));
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
			let k = () => {},
				U = (e) => {
					Object.freeze && Object.freeze(e);
				},
				_ = (e) =>
					(function e(t, r, s) {
						let i = r.join('.');
						return (
							(s[i] ??= new Proxy(k, {
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
										U(a.args),
										U(a.path),
										t(a)
									);
								},
							})),
							s[i]
						);
					})(e, [], Object.create(null)),
				N = (e) =>
					new Proxy(k, {
						get(t, r) {
							if ('then' !== r) return e(r);
						},
					}),
				L = {
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
			var K = Object.create,
				H = Object.defineProperty,
				G = Object.getOwnPropertyDescriptor,
				W = Object.getOwnPropertyNames,
				z = Object.getPrototypeOf,
				B = Object.prototype.hasOwnProperty,
				Y = (e, t, r, s) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var i, n = W(t), a = 0, u = n.length; a < u; a++)
							(i = n[a]),
								B.call(e, i) ||
									i === r ||
									H(e, i, { get: ((e) => t[e]).bind(null, i), enumerable: !(s = G(t, i)) || s.enumerable });
					return e;
				},
				V = class {
					links;
					runtime;
					requestId;
					constructor(e) {
						(this.requestId = 0), (this.runtime = {}), (this.links = e.links.map((e) => e(this.runtime)));
					}
					$request(e) {
						var t;
						return ((t = { links: this.links, op: { ...e, context: e.context ?? {}, id: ++this.requestId } }),
						s((e) =>
							(function e(r = 0, s = t.op) {
								let i = t.links[r];
								if (!i) throw Error('No more links to execute - did you forget to add an ending link?');
								return i({ op: s, next: (t) => e(r + 1, t) });
							})().subscribe(e),
						)).pipe((e) => {
							let t = 0,
								r = null,
								i = [];
							return s(
								(s) => (
									t++,
									i.push(s),
									r ||
										(r = e.subscribe({
											next(e) {
												for (let t of i) t.next?.(e);
											},
											error(e) {
												for (let t of i) t.error?.(e);
											},
											complete() {
												for (let e of i) e.complete?.();
											},
										})),
									{
										unsubscribe() {
											if (0 == --t && r) {
												let e = r;
												(r = null), e.unsubscribe();
											}
											let e = i.findIndex((e) => e === s);
											e > -1 && i.splice(e, 1);
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
							throw l.from(e);
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
			let $ = Symbol.for('trpc_untypedClient'),
				J = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
				X = (e) => J[e];
			function Z(e) {
				let t = _(({ path: t, args: r }) => {
					let s = [...t],
						i = X(s.pop()),
						n = s.join('.');
					return e[i](n, ...r);
				});
				return N((r) => (r === $ ? e : t[r]));
			}
			function ee(e) {
				return Z(new V(e));
			}
			((e, t, r) => Y(H((r = null != e ? K(z(e)) : {}), 'default', { value: e, enumerable: !0 }), e))(
				((e, t) =>
					function () {
						return t || (0, e[W(e)[0]])((t = { exports: {} }).exports, t), t.exports;
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
				0,
			);
			var et = r(148),
				er = r(5640),
				es = et.createContext(void 0),
				ei = (e) => {
					let t = et.useContext(es);
					if (e) return e;
					if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
					return t;
				},
				en = ({ client: e, children: t }) => (
					et.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					(0, er.jsx)(es.Provider, { value: e, children: t })
				),
				ea = 'undefined' == typeof window || 'Deno' in globalThis;
			function eu() {}
			function eo(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function el(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function ec(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eh(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function ed(e, t) {
				let { type: r = 'all', exact: s, fetchStatus: i, predicate: n, queryKey: a, stale: u } = e;
				if (a) {
					if (s) {
						if (t.queryHash !== ef(a, t.options)) return !1;
					} else if (!em(t.queryKey, a)) return !1;
				}
				if ('all' !== r) {
					let e = t.isActive();
					if (('active' === r && !e) || ('inactive' === r && e)) return !1;
				}
				return ('boolean' != typeof u || t.isStale() === u) && (!i || i === t.state.fetchStatus) && (!n || !!n(t));
			}
			function ep(e, t) {
				let { exact: r, status: s, predicate: i, mutationKey: n } = e;
				if (n) {
					if (!t.options.mutationKey) return !1;
					if (r) {
						if (ey(t.options.mutationKey) !== ey(n)) return !1;
					} else if (!em(t.options.mutationKey, n)) return !1;
				}
				return (!s || t.state.status === s) && (!i || !!i(t));
			}
			function ef(e, t) {
				return (t?.queryKeyHashFn || ey)(e);
			}
			function ey(e) {
				return JSON.stringify(e, (e, t) =>
					eO(t)
						? Object.keys(t)
								.sort()
								.reduce((e, r) => ((e[r] = t[r]), e), {})
						: t,
				);
			}
			function em(e, t) {
				return (
					e === t ||
					(typeof e == typeof t &&
						!!e &&
						!!t &&
						'object' == typeof e &&
						'object' == typeof t &&
						Object.keys(t).every((r) => em(e[r], t[r])))
				);
			}
			function eb(e, t) {
				if (e === t) return e;
				let r = ev(e) && ev(t);
				if (r || (eO(e) && eO(t))) {
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
							: ((u[i] = eb(e[i], t[i])), u[i] === e[i] && void 0 !== e[i] && l++);
					}
					return i === a && l === i ? e : u;
				}
				return t;
			}
			function eg(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
				for (let r in e) if (e[r] !== t[r]) return !1;
				return !0;
			}
			function ev(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function eO(e) {
				if (!eR(e)) return !1;
				let t = e.constructor;
				if (void 0 === t) return !0;
				let r = t.prototype;
				return !!eR(r) && !!r.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype;
			}
			function eR(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function ew(e, t, r) {
				return 'function' == typeof r.structuralSharing
					? r.structuralSharing(e, t)
					: !1 !== r.structuralSharing
						? eb(e, t)
						: t;
			}
			function eC(e, t, r = 0) {
				let s = [...e, t];
				return r && s.length > r ? s.slice(1) : s;
			}
			function eP(e, t, r = 0) {
				let s = [t, ...e];
				return r && s.length > r ? s.slice(0, -1) : s;
			}
			var eS = Symbol();
			function eq(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== eS
						? e.queryFn
						: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
			}
			function eE(e, t) {
				return 'function' == typeof e ? e(...t) : !!e;
			}
			function eQ() {
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
			function ex(e) {
				return e;
			}
			function eD(e, t, r) {
				if ('object' != typeof t || null === t) return;
				let s = e.getMutationCache(),
					i = e.getQueryCache(),
					n = r?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? ex,
					a = t.mutations || [],
					u = t.queries || [];
				a.forEach(({ state: t, ...i }) => {
					s.build(e, { ...e.getDefaultOptions().hydrate?.mutations, ...r?.defaultOptions?.mutations, ...i }, t);
				}),
					u.forEach(({ queryKey: t, state: s, queryHash: a, meta: u, promise: o, dehydratedAt: l }) => {
						let c = o
								? (function (e) {
										let t;
										if ((e.then((e) => ((t = e), e), eu)?.catch(eu), void 0 !== t)) return { data: t };
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
			var eT = ({ children: e, options: t = {}, state: r, queryClient: s }) => {
				let i = ei(s),
					n = et.useRef(t);
				n.current = t;
				let a = et.useMemo(() => {
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
						if ((s.length > 0 && eD(i, { queries: s }, n.current), a.length > 0)) return a;
					}
				}, [i, r]);
				return (
					et.useEffect(() => {
						a && eD(i, { queries: a }, n.current);
					}, [i, a]),
					e
				);
			};
			function eM(e, t, r) {
				let s = e.flatMap((e) => e.split('.'));
				if (!t && (!r || 'any' === r)) return s.length ? [s] : [];
				if ('infinite' === r && a(t) && ('direction' in t || 'cursor' in t)) {
					let { cursor: e, direction: r, ...i } = t;
					return [s, { input: i, type: 'infinite' }];
				}
				return [s, { ...(void 0 !== t && t !== eS && { input: t }), ...(r && 'any' !== r && { type: r }) }];
			}
			function eI(e) {
				return eM(e, void 0, 'any');
			}
			var eA = class {
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
				eF = new (class extends eA {
					#e;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!ea && window.addEventListener) {
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
				ej = (e) => setTimeout(e, 0),
				ek = (function () {
					let e = [],
						t = 0,
						r = (e) => {
							e();
						},
						s = (e) => {
							e();
						},
						i = ej,
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
				eU = new (class extends eA {
					#s = !0;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!ea && window.addEventListener) {
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
			function e_(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function eN(e) {
				return (e ?? 'online') !== 'online' || eU.isOnline();
			}
			var eL = class extends Error {
				constructor(e) {
					super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent);
				}
			};
			function eK(e) {
				return e instanceof eL;
			}
			function eH(e) {
				let t,
					r = !1,
					s = 0,
					i = !1,
					n = eQ(),
					a = () => eF.isFocused() && ('always' === e.networkMode || eU.isOnline()) && e.canRun(),
					u = () => eN(e.networkMode) && e.canRun(),
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
								let n = e.retry ?? 3 * !ea,
									u = e.retryDelay ?? e_,
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
						i || (l(new eL(t)), e.abort?.());
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
			var eG = class {
					#i;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						this.clearGcTimeout(),
							eo(this.gcTime) &&
								(this.#i = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(this.gcTime || 0, e ?? (ea ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#i && (clearTimeout(this.#i), (this.#i = void 0));
					}
				},
				eW = class extends eG {
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
						let r = ew(this.state.data, e, this.options);
						return this.#d({ data: r, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }), r;
					}
					setState(e, t) {
						this.#d({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						let t = this.#l?.promise;
						return this.#l?.cancel(e), t ? t.then(eu).catch(eu) : Promise.resolve();
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#n);
					}
					isActive() {
						return this.observers.some((e) => !1 !== eh(e.options.enabled, this));
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === eS || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
					}
					isStatic() {
						return (
							this.getObserversCount() > 0 && this.observers.some((e) => 'static' === ec(e.options.staleTime, this))
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
							('static' !== e && (!!this.state.isInvalidated || !el(this.state.dataUpdatedAt, e)))
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
								let e = eq(this.options, t),
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
							(eK(e) && e.silent) || this.#d({ type: 'error', error: e }),
								eK(e) || (this.#u.config.onError?.(e, this), this.#u.config.onSettled?.(this.state.data, e, this)),
								this.scheduleGc();
						};
						return (
							(this.#l = eH({
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
									return { ...t, ...ez(t.data, this.options), fetchMeta: e.meta ?? null };
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
									if (eK(r) && r.revert && this.#a) return { ...this.#a, fetchStatus: 'idle' };
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
							ek.batch(() => {
								this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#u.notify({ query: this, type: 'updated', action: e });
							});
					}
				};
			function ez(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: eN(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			var eB = class extends eA {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#o = e),
						(this.#p = null),
						(this.#f = eQ()),
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
				#P;
				#S;
				#q = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#y.addObserver(this), eY(this.#y, this.options) ? this.#E() : this.updateResult(), this.#Q());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return eV(this.#y, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return eV(this.#y, this.options, this.options.refetchOnWindowFocus);
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
							'boolean' != typeof eh(this.options.enabled, this.#y))
					)
						throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
					this.#T(),
						this.#y.setOptions(this.options),
						t._defaulted &&
							!eg(this.options, t) &&
							this.#o.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.#y, observer: this });
					let s = this.hasListeners();
					s && e$(this.#y, r, this.options, t) && this.#E(),
						this.updateResult(),
						s &&
							(this.#y !== r ||
								eh(this.options.enabled, this.#y) !== eh(t.enabled, this.#y) ||
								ec(this.options.staleTime, this.#y) !== ec(t.staleTime, this.#y)) &&
							this.#M();
					let i = this.#I();
					s &&
						(this.#y !== r || eh(this.options.enabled, this.#y) !== eh(t.enabled, this.#y) || i !== this.#S) &&
						this.#A(i);
				}
				getOptimisticResult(e) {
					var t, r;
					let s = this.#o.getQueryCache().build(this.#o, e),
						i = this.createResult(s, e);
					return (
						(t = this),
						(r = i),
						eg(t.getCurrentResult(), r) || ((this.#b = i), (this.#v = this.options), (this.#g = this.#y.state)),
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
					return e?.throwOnError || (t = t.catch(eu)), t;
				}
				#M() {
					this.#x();
					let e = ec(this.options.staleTime, this.#y);
					if (ea || this.#b.isStale || !eo(e)) return;
					let t = el(this.#b.dataUpdatedAt, e);
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
						(this.#S = e),
						!ea &&
							!1 !== eh(this.options.enabled, this.#y) &&
							eo(this.#S) &&
							0 !== this.#S &&
							(this.#P = setInterval(() => {
								(this.options.refetchIntervalInBackground || eF.isFocused()) && this.#E();
							}, this.#S));
				}
				#Q() {
					this.#M(), this.#A(this.#I());
				}
				#x() {
					this.#C && (clearTimeout(this.#C), (this.#C = void 0));
				}
				#D() {
					this.#P && (clearInterval(this.#P), (this.#P = void 0));
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
							n = !r && eY(e, t),
							a = r && e$(e, s, t, i);
						(n || a) && (c = { ...c, ...ez(l.data, e.options) }),
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
							void 0 !== e && ((f = 'success'), (r = ew(n?.data, e, t)), (h = !0));
					}
					if (t.select && void 0 !== r && !y)
						if (n && r === a?.data && t.select === this.#O) r = this.#R;
						else
							try {
								(this.#O = t.select), (r = t.select(r)), (r = ew(n?.data, r, t)), (this.#R = r), (this.#p = null);
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
							isStale: eJ(e, t),
							refetch: this.refetch,
							promise: this.#f,
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === R.status ? e.reject(R.error) : void 0 !== R.data && e.resolve(R.data);
							},
							r = () => {
								t((this.#f = R.promise = eQ()));
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
						eg(t, e) ||
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
					ek.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#b);
							}),
							this.#o.getQueryCache().notify({ query: this.#y, type: 'observerResultsUpdated' });
					});
				}
			};
			function eY(e, t) {
				return (
					(!1 !== eh(t.enabled, e) &&
						void 0 === e.state.data &&
						('error' !== e.state.status || !1 !== t.retryOnMount)) ||
					(void 0 !== e.state.data && eV(e, t, t.refetchOnMount))
				);
			}
			function eV(e, t, r) {
				if (!1 !== eh(t.enabled, e) && 'static' !== ec(t.staleTime, e)) {
					let s = 'function' == typeof r ? r(e) : r;
					return 'always' === s || (!1 !== s && eJ(e, t));
				}
				return !1;
			}
			function e$(e, t, r, s) {
				return (e !== t || !1 === eh(s.enabled, e)) && (!r.suspense || 'error' !== e.state.status) && eJ(e, r);
			}
			function eJ(e, t) {
				return !1 !== eh(t.enabled, e) && e.isStaleByTime(ec(t.staleTime, e));
			}
			var eX = et.createContext(
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
				eZ = () => et.useContext(eX),
				e0 = (e, t) => {
					(e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1);
				},
				e1 = (e) => {
					et.useEffect(() => {
						e.clearReset();
					}, [e]);
				},
				e4 = ({ result: e, errorResetBoundary: t, throwOnError: r, query: s, suspense: i }) =>
					e.isError && !t.isReset() && !e.isFetching && s && ((i && void 0 === e.data) || eE(r, [e.error, s])),
				e3 = et.createContext(!1),
				e2 = () => et.useContext(e3);
			e3.Provider;
			var e6 = (e, t) => void 0 === t.state.data,
				e5 = (e) => {
					if (e.suspense) {
						let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
							r = e.staleTime;
						(e.staleTime = 'function' == typeof r ? (...e) => t(r(...e)) : t(r)),
							'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3));
					}
				},
				e8 = (e, t) => e.isLoading && e.isFetching && !t,
				e9 = (e, t) => e?.suspense && t.isPending,
				e7 = (e, t, r) =>
					t.fetchOptimistic(e).catch(() => {
						r.clearReset();
					});
			function te(e, t, r) {
				let s = e2(),
					i = eZ(),
					n = ei(r),
					a = n.defaultQueryOptions(e);
				n.getDefaultOptions().queries?._experimental_beforeQuery?.(a),
					(a._optimisticResults = s ? 'isRestoring' : 'optimistic'),
					e5(a),
					e0(a, i),
					e1(i);
				let u = !n.getQueryCache().get(a.queryHash),
					[o] = et.useState(() => new t(n, a)),
					l = o.getOptimisticResult(a),
					c = !s && !1 !== e.subscribed;
				if (
					(et.useSyncExternalStore(
						et.useCallback(
							(e) => {
								let t = c ? o.subscribe(ek.batchCalls(e)) : eu;
								return o.updateResult(), t;
							},
							[o, c],
						),
						() => o.getCurrentResult(),
						() => o.getCurrentResult(),
					),
					et.useEffect(() => {
						o.setOptions(a);
					}, [a, o]),
					e9(a, l))
				)
					throw e7(a, o, i);
				if (
					e4({
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
					a.experimental_prefetchInRender && !ea && e8(l, s))
				) {
					let e = u ? e7(a, o, i) : n.getQueryCache().get(a.queryHash)?.promise;
					e?.catch(eu).finally(() => {
						o.updateResult();
					});
				}
				return a.notifyOnChangeProps ? l : o.trackResult(l);
			}
			var tt = class extends eG {
				#j;
				#k;
				#l;
				constructor(e) {
					super(),
						(this.mutationId = e.mutationId),
						(this.#k = e.mutationCache),
						(this.#j = []),
						(this.state = e.state || tr()),
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
					this.#j.includes(e) ||
						(this.#j.push(e),
						this.clearGcTimeout(),
						this.#k.notify({ type: 'observerAdded', mutation: this, observer: e }));
				}
				removeObserver(e) {
					(this.#j = this.#j.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#k.notify({ type: 'observerRemoved', mutation: this, observer: e });
				}
				optionalRemove() {
					this.#j.length || ('pending' === this.state.status ? this.scheduleGc() : this.#k.remove(this));
				}
				continue() {
					return this.#l?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
						this.#d({ type: 'continue' });
					};
					this.#l = eH({
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
						ek.batch(() => {
							this.#j.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#k.notify({ mutation: this, type: 'updated', action: e });
						});
				}
			};
			function tr() {
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
			var ts = class extends eA {
				#o;
				#b = void 0;
				#U;
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
						eg(this.options, t) ||
							this.#o.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.#U, observer: this }),
						t?.mutationKey && this.options.mutationKey && ey(t.mutationKey) !== ey(this.options.mutationKey)
							? this.reset()
							: this.#U?.state.status === 'pending' && this.#U.setOptions(this.options);
				}
				onUnsubscribe() {
					this.hasListeners() || this.#U?.removeObserver(this);
				}
				onMutationUpdate(e) {
					this.#N(), this.#F(e);
				}
				getCurrentResult() {
					return this.#b;
				}
				reset() {
					this.#U?.removeObserver(this), (this.#U = void 0), this.#N(), this.#F();
				}
				mutate(e, t) {
					return (
						(this.#_ = t),
						this.#U?.removeObserver(this),
						(this.#U = this.#o.getMutationCache().build(this.#o, this.options)),
						this.#U.addObserver(this),
						this.#U.execute(e)
					);
				}
				#N() {
					let e = this.#U?.state ?? tr();
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
					ek.batch(() => {
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
			function ti(e) {
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
									c = eq(t.options, t.fetchOptions),
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
											o = i ? eP : eC;
										return { pages: o(e.pages, a, u), pageParams: o(e.pageParams, s, u) };
									};
								if (i && n.length) {
									let e = 'backward' === i,
										t = { pages: n, pageParams: a },
										r = (e ? ta : tn)(s, t);
									u = await h(t, r, e);
								} else {
									let t = e ?? n.length;
									do {
										let e = 0 === o ? (a[0] ?? s.initialPageParam) : tn(s, u);
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
			function tn(e, { pages: t, pageParams: r }) {
				let s = t.length - 1;
				return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
			}
			function ta(e, { pages: t, pageParams: r }) {
				return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
			}
			var tu = class extends eB {
				constructor(e, t) {
					super(e, t);
				}
				bindMethods() {
					super.bindMethods(),
						(this.fetchNextPage = this.fetchNextPage.bind(this)),
						(this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
				}
				setOptions(e) {
					super.setOptions({ ...e, behavior: ti() });
				}
				getOptimisticResult(e) {
					return (e.behavior = ti()), super.getOptimisticResult(e);
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
						hasNextPage: !!(r = i.data) && null != tn(t, r),
						hasPreviousPage: !!(s = i.data) && !!t.getPreviousPageParam && null != ta(t, s),
						isFetchNextPageError: h,
						isFetchingNextPage: d,
						isFetchPreviousPageError: p,
						isFetchingPreviousPage: f,
						isRefetchError: l && !h && !p,
						isRefetching: u && !d && !f,
					};
				}
			};
			function to(e, t) {
				let r = new Set(t);
				return e.filter((e) => !r.has(e));
			}
			var tl = class extends eA {
				#o;
				#L;
				#K;
				#H;
				#j;
				#G;
				#W;
				#z;
				#B = [];
				constructor(e, t, r) {
					super(), (this.#o = e), (this.#H = r), (this.#K = []), (this.#j = []), (this.#L = []), this.setQueries(t);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						this.#j.forEach((e) => {
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
						this.#j.forEach((e) => {
							e.destroy();
						});
				}
				setQueries(e, t) {
					(this.#K = e),
						(this.#H = t),
						ek.batch(() => {
							let e = this.#j,
								t = this.#V(this.#K);
							(this.#B = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions));
							let r = t.map((e) => e.observer),
								s = r.map((e) => e.getCurrentResult()),
								i = r.some((t, r) => t !== e[r]);
							(e.length !== r.length || i) &&
								((this.#j = r),
								(this.#L = s),
								this.hasListeners() &&
									(to(e, r).forEach((e) => {
										e.destroy();
									}),
									to(r, e).forEach((e) => {
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
					return this.#j.map((e) => e.getCurrentQuery());
				}
				getObservers() {
					return this.#j;
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
								((this.#W = t), (this.#z = this.#L), (this.#G = eb(this.#G, t(e)))),
							this.#G)
						: e;
				}
				#V(e) {
					let t = new Map(this.#j.map((e) => [e.options.queryHash, e])),
						r = [];
					return (
						e.forEach((e) => {
							let s = this.#o.defaultQueryOptions(e),
								i = t.get(s.queryHash);
							i
								? r.push({ defaultedQueryOptions: s, observer: i })
								: r.push({ defaultedQueryOptions: s, observer: new eB(this.#o, s) });
						}),
						r
					);
				}
				#Y(e, t) {
					let r = this.#j.indexOf(e);
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
							ek.batch(() => {
								this.listeners.forEach((e) => {
									e(this.#L);
								});
							});
					}
				}
			};
			function tc({ queries: e, ...t }, r) {
				let s = ei(r),
					i = e2(),
					n = eZ(),
					a = et.useMemo(
						() =>
							e.map((e) => {
								let t = s.defaultQueryOptions(e);
								return (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t;
							}),
						[e, s, i],
					);
				a.forEach((e) => {
					e5(e), e0(e, n);
				}),
					e1(n);
				let [u] = et.useState(() => new tl(s, a, t)),
					[o, l, c] = u.getOptimisticResult(a, t.combine),
					h = !i && !1 !== t.subscribed;
				et.useSyncExternalStore(
					et.useCallback((e) => (h ? u.subscribe(ek.batchCalls(e)) : eu), [u, h]),
					() => u.getCurrentResult(),
					() => u.getCurrentResult(),
				),
					et.useEffect(() => {
						u.setQueries(a, t);
					}, [a, t, u]);
				let d = o.some((e, t) => e9(a[t], e))
					? o.flatMap((e, t) => {
							let r = a[t];
							if (r) {
								let t = new eB(s, r);
								if (e9(r, e)) return e7(r, t, n);
								e8(e, i) && e7(r, t, n);
							}
							return [];
						})
					: [];
				if (d.length > 0) throw Promise.all(d);
				let p = o.find((e, t) => {
					let r = a[t];
					return (
						r &&
						e4({
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
			var th = class extends eA {
					constructor(e = {}) {
						super(), (this.config = e), (this.#K = new Map());
					}
					#K;
					build(e, t, r) {
						let s = t.queryKey,
							i = t.queryHash ?? ef(s, t),
							n = this.get(i);
						return (
							n ||
								((n = new eW({
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
						ek.batch(() => {
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
						return this.getAll().find((e) => ed(t, e));
					}
					findAll(e = {}) {
						let t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter((t) => ed(e, t)) : t;
					}
					notify(e) {
						ek.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						ek.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						ek.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				td = class extends eA {
					constructor(e = {}) {
						super(), (this.config = e), (this.#X = new Set()), (this.#Z = new Map()), (this.#ee = 0);
					}
					#X;
					#Z;
					#ee;
					build(e, t, r) {
						let s = new tt({
							mutationCache: this,
							mutationId: ++this.#ee,
							options: e.defaultMutationOptions(t),
							state: r,
						});
						return this.add(s), s;
					}
					add(e) {
						this.#X.add(e);
						let t = tp(e);
						if ('string' == typeof t) {
							let r = this.#Z.get(t);
							r ? r.push(e) : this.#Z.set(t, [e]);
						}
						this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						if (this.#X.delete(e)) {
							let t = tp(e);
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
						let t = tp(e);
						if ('string' != typeof t) return !0;
						{
							let r = this.#Z.get(t),
								s = r?.find((e) => 'pending' === e.state.status);
							return !s || s === e;
						}
					}
					runNext(e) {
						let t = tp(e);
						if ('string' != typeof t) return Promise.resolve();
						{
							let r = this.#Z.get(t)?.find((t) => t !== e && t.state.isPaused);
							return r?.continue() ?? Promise.resolve();
						}
					}
					clear() {
						ek.batch(() => {
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
						return this.getAll().find((e) => ep(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => ep(e, t));
					}
					notify(e) {
						ek.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						let e = this.getAll().filter((e) => e.state.isPaused);
						return ek.batch(() => Promise.all(e.map((e) => e.continue().catch(eu))));
					}
				};
			function tp(e) {
				return e.options.scope?.id;
			}
			var tf = class {
				#et;
				#k;
				#c;
				#er;
				#es;
				#ei;
				#en;
				#ea;
				constructor(e = {}) {
					(this.#et = e.queryCache || new th()),
						(this.#k = e.mutationCache || new td()),
						(this.#c = e.defaultOptions || {}),
						(this.#er = new Map()),
						(this.#es = new Map()),
						(this.#ei = 0);
				}
				mount() {
					this.#ei++,
						1 === this.#ei &&
							((this.#en = eF.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onFocus());
							})),
							(this.#ea = eU.subscribe(async (e) => {
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
						: (e.revalidateIfStale && r.isStaleByTime(ec(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(s));
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
					return ek.batch(() => this.#et.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]));
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#et;
					ek.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let r = this.#et;
					return ek.batch(
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
					return Promise.all(ek.batch(() => this.#et.findAll(e).map((e) => e.cancel(r))))
						.then(eu)
						.catch(eu);
				}
				invalidateQueries(e, t = {}) {
					return ek.batch(() =>
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
						ek.batch(() =>
							this.#et
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, r);
									return r.throwOnError || (t = t.catch(eu)), 'paused' === e.state.fetchStatus ? Promise.resolve() : t;
								}),
						),
					).then(eu);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let r = this.#et.build(this, t);
					return r.isStaleByTime(ec(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(eu).catch(eu);
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = ti(e.pages)), this.fetchQuery(e);
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(eu).catch(eu);
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = ti(e.pages)), this.ensureQueryData(e);
				}
				resumePausedMutations() {
					return eU.isOnline() ? this.#k.resumePausedMutations() : Promise.resolve();
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
					this.#er.set(ey(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#er.values()],
						r = {};
					return (
						t.forEach((t) => {
							em(e, t.queryKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				setMutationDefaults(e, t) {
					this.#es.set(ey(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#es.values()],
						r = {};
					return (
						t.forEach((t) => {
							em(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
						}),
						r
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = { ...this.#c.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
					return (
						t.queryHash || (t.queryHash = ef(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === eS && (t.enabled = !1),
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
			let ty = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
				tm = et.createContext?.(null),
				tb = (e) => {
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
			function tg(e) {
				let t = e instanceof V ? e : e[$];
				return _((e) => {
					let r = e.path,
						s = r.join('.'),
						[i, n] = e.args;
					return { queryKey: eM(r, i, 'query'), queryFn: () => t.query(s, i, n?.trpc), ...n };
				});
			}
			function tv(e, t, r) {
				let s = e[0],
					i = e[1]?.input;
				return (
					r && (i = { ...(i ?? {}), ...(r.pageParam ? { cursor: r.pageParam } : {}), direction: r.direction }),
					[s.join('.'), i, t?.trpc]
				);
			}
			function tO(e) {
				return { path: e.path.join('.') };
			}
			function tR(e) {
				let t = tO(e);
				return et.useMemo(() => t, [t]);
			}
			async function tw(e, t, r) {
				let s = t.getQueryCache().build(t, { queryKey: r });
				s.setState({ data: [], status: 'success' });
				let i = [];
				for await (let t of e) i.push(t), s.setState({ data: [...i] });
				return i;
			}
			let tC = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
			function tP(e) {
				let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
					r = e?.context ?? tm;
				function s() {
					let e = et.useContext(r);
					if (!e) throw Error('Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?');
					return e;
				}
				function i(e, t) {
					let { queryClient: r, ssrState: i } = s();
					return i && 'mounted' !== i && r.getQueryCache().find({ queryKey: e })?.state.status === 'error'
						? { retryOnMount: !1, ...t }
						: t;
				}
				let n = { data: void 0, error: null, status: 'idle' },
					a = { data: void 0, error: null, status: 'connecting' };
				return {
					Provider: (e) => {
						let { abortOnUnmount: t = !1, queryClient: s, ssrContext: i } = e,
							[n, a] = et.useState(e.ssrState ?? !1),
							u = e.client instanceof V ? e.client : e.client[$],
							l = et.useMemo(
								() =>
									(function (e) {
										let { client: t, queryClient: r } = e,
											s = t instanceof V ? t : t[$];
										return {
											infiniteQueryOptions: (e, t, r) => {
												let i = t[1]?.input === eS,
													n = async (e) => {
														let i = {
															...r,
															trpc: {
																...r?.trpc,
																...(r?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
															},
														};
														return await s.query(...tv(t, i, { direction: e.direction, pageParam: e.pageParam }));
													};
												return Object.assign(
													{
														...r,
														initialData: r?.initialData,
														queryKey: t,
														queryFn: i ? eS : n,
														initialPageParam: r?.initialCursor ?? null,
													},
													{ trpc: tO({ path: e }) },
												);
											},
											queryOptions: (e, t, i) => {
												let n = t[1]?.input === eS,
													a = async (e) => {
														let n = {
																...i,
																trpc: {
																	...i?.trpc,
																	...(i?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
																},
															},
															a = await s.query(...tv(t, n));
														return o(a) ? tw(a, r, t) : a;
													};
												return Object.assign(
													{ ...i, initialData: i?.initialData, queryKey: t, queryFn: n ? eS : a },
													{ trpc: tO({ path: e }) },
												);
											},
											fetchQuery: (e, t) => r.fetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tv(e, t)) }),
											fetchInfiniteQuery: (e, t) =>
												r.fetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tv(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											prefetchQuery: (e, t) =>
												r.prefetchQuery({ ...t, queryKey: e, queryFn: () => s.query(...tv(e, t)) }),
											prefetchInfiniteQuery: (e, t) =>
												r.prefetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: r, direction: i }) =>
														s.query(...tv(e, t, { pageParam: r, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											ensureQueryData: (e, t) =>
												r.ensureQueryData({ ...t, queryKey: e, queryFn: () => s.query(...tv(e, t)) }),
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
														? i({ canonicalMutationFn: (t) => s.mutation(...tv([n, { input: t }], e)) })
														: i,
												);
											},
											getMutationDefaults: (e) => r.getMutationDefaults(e),
											isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
										};
									})({ client: u, queryClient: s }),
								[u, s],
							),
							c = et.useMemo(
								() => ({ abortOnUnmount: t, queryClient: s, client: u, ssrContext: i ?? null, ssrState: n, ...l }),
								[t, u, l, s, i, n],
							);
						return (
							et.useEffect(() => {
								a((e) => !!e && 'mounted');
							}, []),
							(0, er.jsx)(r.Provider, { value: c, children: e.children })
						);
					},
					createClient: ee,
					useContext: s,
					useUtils: s,
					useQuery: function (t, r, n) {
						let { abortOnUnmount: a, client: u, ssrState: l, queryClient: c, prefetchQuery: h } = s(),
							d = eM(t, r, 'query'),
							p = c.getQueryDefaults(d),
							f = r === eS;
						'undefined' != typeof window ||
							'prepass' !== l ||
							n?.trpc?.ssr === !1 ||
							(n?.enabled ?? p?.enabled) === !1 ||
							f ||
							c.getQueryCache().find({ queryKey: d }) ||
							h(d, n);
						let y = i(d, { ...p, ...n }),
							m = n?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
							b = te(
								{
									...y,
									queryKey: d,
									queryFn: f
										? r
										: async (e) => {
												let t = { ...y, trpc: { ...y?.trpc, ...(m ? { signal: e.signal } : { signal: null }) } },
													r = await u.query(...tv(d, t));
												return o(r) ? tw(r, c, d) : r;
											},
								},
								eB,
								c,
							);
						return (b.trpc = tR({ path: t })), b;
					},
					usePrefetchQuery: function (t, r, i) {
						let n = s(),
							a = eM(t, r, 'query'),
							u = r === eS,
							o = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? n.abortOnUnmount;
						!(function (e, t) {
							let r = ei(void 0);
							r.getQueryState(e.queryKey) || r.prefetchQuery(e);
						})({
							...i,
							queryKey: a,
							queryFn: u
								? r
								: (e) => {
										let t = { trpc: { ...i?.trpc, ...(o ? { signal: e.signal } : {}) } };
										return n.client.query(...tv(a, t));
									},
						});
					},
					useSuspenseQuery: function (t, r, i) {
						var n, a;
						let u = s(),
							o = eM(t, r, 'query'),
							l = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? u.abortOnUnmount,
							c =
								((n = {
									...i,
									queryKey: o,
									queryFn: (e) => {
										let t = { ...i, trpc: { ...i?.trpc, ...(l ? { signal: e.signal } : { signal: null }) } };
										return u.client.query(...tv(o, t));
									},
								}),
								(a = u.queryClient),
								te({ ...n, enabled: !0, suspense: !0, throwOnError: e6, placeholderData: void 0 }, eB, a));
						return (c.trpc = tR({ path: t })), [c.data, c];
					},
					useQueries: (e, t) => {
						let { ssrState: r, queryClient: i, prefetchQuery: n, client: a } = s(),
							u = e(tg(a));
						if ('undefined' == typeof window && 'prepass' === r)
							for (let e of u)
								e.trpc?.ssr === !1 || i.getQueryCache().find({ queryKey: e.queryKey }) || n(e.queryKey, e);
						return tc({ queries: u.map((e) => ({ ...e, queryKey: e.queryKey })), combine: t?.combine }, i);
					},
					useSuspenseQueries: (e) => {
						var t;
						let { queryClient: r, client: i } = s(),
							n =
								((t = { queries: e(tg(i)).map((e) => ({ ...e, queryFn: e.queryFn, queryKey: e.queryKey })) }),
								tc(
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
						let { client: i, queryClient: n } = s(),
							a = eI(e),
							u = n.defaultMutationOptions(n.getMutationDefaults(a)),
							o = (function (e, t) {
								let r = ei(t),
									[s] = et.useState(() => new ts(r, e));
								et.useEffect(() => {
									s.setOptions(e);
								}, [s, e]);
								let i = et.useSyncExternalStore(
										et.useCallback((e) => s.subscribe(ek.batchCalls(e)), [s]),
										() => s.getCurrentResult(),
										() => s.getCurrentResult(),
									),
									n = et.useCallback(
										(e, t) => {
											s.mutate(e, t).catch(eu);
										},
										[s],
									);
								if (i.error && eE(s.options.throwOnError, [i.error])) throw i.error;
								return { ...i, mutate: n, mutateAsync: i.mutate };
							})(
								{
									...r,
									mutationKey: a,
									mutationFn: (t) => i.mutation(...tv([e, { input: t }], r)),
									onSuccess: (...e) =>
										t({
											originalFn: () => r?.onSuccess?.(...e) ?? u?.onSuccess?.(...e),
											queryClient: n,
											meta: r?.meta ?? u?.meta ?? {},
										}),
								},
								n,
							);
						return (o.trpc = tR({ path: e })), o;
					},
					useSubscription: function (e, t, r) {
						let i = r?.enabled ?? t !== eS,
							u = ey(eM(e, t, 'any')),
							{ client: o } = s(),
							l = et.useRef(r);
						et.useEffect(() => {
							l.current = r;
						});
						let [c] = et.useState(new Set([])),
							h = et.useCallback(
								(e) => {
									c.add(e);
								},
								[c],
							),
							d = et.useRef(null),
							p = et.useCallback(
								(e) => {
									let t = y.current,
										r = (y.current = e(t)),
										s = !1;
									for (let e of c)
										if (t[e] !== r[e]) {
											s = !0;
											break;
										}
									s && b(tC(r, h));
								},
								[h, c],
							),
							f = et.useCallback(() => {
								if ((d.current?.unsubscribe(), !i)) return void p(() => ({ ...n, reset: f }));
								p(() => ({ ...a, reset: f })),
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
							}, [o, u, i, p]);
						et.useEffect(
							() => (
								f(),
								() => {
									d.current?.unsubscribe();
								}
							),
							[f],
						);
						let y = et.useRef(i ? { ...a, reset: f } : { ...n, reset: f }),
							[m, b] = et.useState(tC(y.current, h));
						return m;
					},
					useInfiniteQuery: function (e, t, r) {
						let { client: n, ssrState: a, prefetchInfiniteQuery: u, queryClient: o, abortOnUnmount: l } = s(),
							c = eM(e, t, 'infinite'),
							h = o.getQueryDefaults(c),
							d = t === eS;
						'undefined' != typeof window ||
							'prepass' !== a ||
							r?.trpc?.ssr === !1 ||
							(r?.enabled ?? h?.enabled) === !1 ||
							d ||
							o.getQueryCache().find({ queryKey: c }) ||
							u(c, { ...h, ...r });
						let p = i(c, { ...h, ...r }),
							f = r?.trpc?.abortOnUnmount ?? l,
							y = te(
								{
									...p,
									initialPageParam: r.initialCursor ?? null,
									persister: r.persister,
									queryKey: c,
									queryFn: d
										? t
										: (e) => {
												let t = { ...p, trpc: { ...p?.trpc, ...(f ? { signal: e.signal } : { signal: null }) } };
												return n.query(
													...tv(c, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
												);
											},
								},
								tu,
								o,
							);
						return (y.trpc = tR({ path: e })), y;
					},
					usePrefetchInfiniteQuery: function (e, t, r) {
						let n = s(),
							a = eM(e, t, 'infinite'),
							u = n.queryClient.getQueryDefaults(a),
							o = t === eS,
							l = i(a, { ...u, ...r }),
							c = r?.trpc?.abortOnUnmount ?? n.abortOnUnmount;
						!(function (e, t) {
							let r = ei(void 0);
							r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
						})({
							...r,
							initialPageParam: r.initialCursor ?? null,
							queryKey: a,
							queryFn: o
								? t
								: (e) => {
										let t = { ...l, trpc: { ...l?.trpc, ...(c ? { signal: e.signal } : {}) } };
										return n.client.query(
											...tv(a, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
						});
					},
					useSuspenseInfiniteQuery: function (e, t, r) {
						var n, a;
						let u = s(),
							o = eM(e, t, 'infinite'),
							l = u.queryClient.getQueryDefaults(o),
							c = i(o, { ...l, ...r }),
							h = r?.trpc?.abortOnUnmount ?? u.abortOnUnmount,
							d =
								((n = {
									...r,
									initialPageParam: r.initialCursor ?? null,
									queryKey: o,
									queryFn: (e) => {
										let t = { ...c, trpc: { ...c?.trpc, ...(h ? { signal: e.signal } : {}) } };
										return u.client.query(
											...tv(o, t, { pageParam: e.pageParam ?? r.initialCursor, direction: e.direction }),
										);
									},
								}),
								(a = u.queryClient),
								te({ ...n, enabled: !0, suspense: !0, throwOnError: e6 }, tu, a));
						return (d.trpc = tR({ path: e })), [d.data, d];
					},
				};
			}
			let tS = (e) => e.queryClient ?? new tf(e.queryClientConfig);
			r(6064);
			let tq = (function (e) {
					let t = {
							url: e.url.toString(),
							fetch: e.fetch,
							transformer: c(e.transformer),
							methodOverride: e.methodOverride,
						},
						r = e.maxURLLength ?? 1 / 0,
						i = e.maxItems ?? 1 / 0;
					return () => {
						let n = (s) => ({
								validate(e) {
									if (r === 1 / 0 && i === 1 / 0) return !0;
									if (e.length > i) return !1;
									let n = e.map((e) => e.path).join(','),
										a = e.map((e) => e.input);
									return f({ ...t, type: s, path: n, inputs: a, signal: null }).length <= r;
								},
								async fetch(r) {
									let i = r.map((e) => e.path).join(','),
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
										u = await m({
											...t,
											path: i,
											inputs: n,
											type: s,
											headers: () =>
												e.headers ? ('function' == typeof e.headers ? e.headers({ opList: r }) : e.headers) : {},
											signal: a,
										});
									return (Array.isArray(u.json) ? u.json : r.map(() => u.json)).map((e) => ({ meta: u.meta, json: e }));
								},
							}),
							u = { query: P(n('query')), mutation: P(n('mutation')) };
						return ({ op: e }) =>
							s((r) => {
								let s;
								if ('subscription' === e.type)
									throw Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
								return (
									u[e.type]
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
													throw new w();
												}
												if (
													(!r.ok && (!a(r.error.error) || 'number' != typeof r.error.error.code)) ||
													(r.ok && !a(r.result))
												)
													throw new w();
												return r;
											})(e.json, t.transformer.output);
											if (!i.ok) return void r.error(l.from(i.error, { meta: e.meta }));
											r.next({ context: e.meta, result: i.result }), r.complete();
										})
										.catch((e) => {
											r.error(l.from(e, { meta: s?.meta }));
										}),
									() => {}
								);
							});
					};
				})({ url: ''.concat('', '/api/trpc'), headers: async () => ({}) }),
				tE = (function (e) {
					let t = tP(e),
						r = (function (e) {
							let { config: t } = e,
								r = c(e.transformer);
							return (s) => {
								let i = tP(e),
									n = (n) => {
										let [a] = (0, et.useState)(() => {
												if (n.trpc) return n.trpc;
												let r = t({}),
													s = tS(r),
													a = i.createClient(r);
												return {
													abortOnUnmount: r.abortOnUnmount,
													queryClient: s,
													trpcClient: a,
													ssrState: !!e.ssr && 'mounting',
													ssrContext: null,
												};
											}),
											{ queryClient: u, trpcClient: o, ssrState: l, ssrContext: c } = a,
											h = n.pageProps?.trpcState,
											d = et.useMemo(() => (h ? r.input.deserialize(h) : h), [h]);
										return (0, er.jsx)(i.Provider, {
											abortOnUnmount: a.abortOnUnmount ?? !1,
											client: o,
											queryClient: u,
											ssrState: l,
											ssrContext: c,
											children: (0, er.jsx)(en, {
												client: u,
												children: (0, er.jsx)(eT, { state: d, children: (0, er.jsx)(s, { ...n }) }),
											}),
										});
									};
								e.ssr
									? e.ssrPrepass({ parent: e, AppOrPage: s, WithTRPC: n })
									: s.getInitialProps &&
										(n.getInitialProps = async (e) => {
											let t,
												r = !!e.Component,
												i = {},
												n = await s.getInitialProps(e);
											return (t = i = { ...(r ? (n.pageProps ?? {}) : n), ...i }), r ? { pageProps: t } : t;
										});
								let a = s.displayName ?? s.name ?? 'Component';
								return (n.displayName = `withTRPC(${a})`), n;
							};
						})(e),
						s = _(({ path: e, args: r }) => {
							let s = [...e],
								i = s.pop();
							if ('useMutation' === i) return t[i](s, ...r);
							if ('_def' === i) return { path: s };
							let [n, ...a] = r,
								u = a[0] ?? {};
							return t[i](s, n, u);
						});
					return N((e) =>
						'useContext' === e || 'useUtils' === e
							? () => {
									let e = t.useUtils();
									return (0, et.useMemo)(
										() =>
											(function (e) {
												var t;
												let r = Z(e.client),
													s =
														((t = e),
														_((e) => {
															let r = [...e.path],
																s = r.pop(),
																i = [...e.args],
																n = i.shift(),
																a = eM(r, n, tb(s));
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
																setMutationDefaults: () => t.setMutationDefaults(eI(r), n),
																getMutationDefaults: () => t.getMutationDefaults(eI(r)),
																isMutating: () => t.isMutating({ mutationKey: eI(r) }),
															}[s]();
														}));
												return N((t) => ('client' === t ? r : ty.includes(t) ? e[t] : s[t]));
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
										: s[e],
					);
				})({ config: () => ({ links: [tq] }), ssr: !1 }),
				tQ = ee({ links: [tq] });
		},
		1158: (e, t, r) => {
			'use strict';
			r.d(t, { i: () => l, O: () => c });
			var s = r(5640),
				i = r(248);
			let n = async (e) => {
				try {
					return { data: await e, error: null };
				} catch (e) {
					return { data: null, error: e };
				}
			};
			var a = r(148);
			let u = async () => {
					var e, t, r;
					if (null == (r = window) || null == (t = r.Telegram) || null == (e = t.WebApp) ? void 0 : e.initData) {
						let e = window.Telegram.WebApp.initData,
							{ user: t } = Object.fromEntries(new URLSearchParams(e)),
							{ data: r, error: s } = await n(JSON.parse(t));
						return s ? (console.error(s), { user: null, initData: '' }) : { user: r, initData: e };
					}
					return { user: null, initData: '' };
				},
				o = (0, a.createContext)({ isAuthenticated: !1, user: null }),
				l = (e) => {
					let { children: t = (0, s.jsx)(s.Fragment, {}) } = e,
						[{ loading: r = !0, isAuthenticated: l = !1, user: c = null }, h] = (0, a.useState)({
							loading: !1,
							isAuthenticated: !1,
							user: null,
						});
					(0, a.useEffect)(() => {
						(async () => {
							h((e) => ({ ...e, loading: !0 }));
							let { initData: e, user: t } = await u(),
								{ data: r, error: s } = await n(i.r.auth.telegram.mutate({ initData: e }));
							s && console.error(s.message), r || console.error('Invalid Data');
							let { data: a, error: o } = await n(i.r.app.authenticated.query());
							o && console.error(o.message), a || console.error('Invalid Data');
							let { isAuthenticated: l } = null != a ? a : { isAuthenticated: !1 };
							h((e) => ({ ...e, loading: !1, isAuthenticated: l, user: t }));
						})();
					}, []);
					let d = (0, a.useMemo)(() => ({ isAuthenticated: l, user: c }), [l, c]);
					return (0, s.jsx)(o.Provider, {
						value: d,
						children: r
							? (0, s.jsx)('div', {
									className: 'flex h-screen w-screen items-center justify-center',
									children: (0, s.jsx)('span', { className: 'text-xl', children: 'Loading' }),
								})
							: (0, s.jsx)(s.Fragment, { children: t }),
					});
				},
				c = () => (0, a.useContext)(o);
		},
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
		5e3: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_6f2501',
				variable: '__variable_6f2501',
			};
		},
		8217: () => {},
		8694: (e, t, r) => {
			'use strict';
			r.r(t), r.d(t, { default: () => d });
			var s = r(5640),
				i = r(1158);
			r(8217);
			var n = r(248),
				a = r(5e3),
				u = r.n(a),
				o = r(1800),
				l = r.n(o),
				c = r(1668),
				h = r.n(c);
			let d = n.t.withTRPC((e) => {
				let { Component: t, pageProps: r } = e;
				return (0, s.jsxs)(s.Fragment, {
					children: [
						(0, s.jsx)(h(), { children: (0, s.jsx)('title', { children: 'Telegram Mini App' }) }),
						(0, s.jsx)('div', {
							className: ''.concat(u().className, ' ').concat(l().className),
							children: (0, s.jsx)(i.i, { children: (0, s.jsx)(t, { ...r }) }),
						}),
					],
				});
			});
		},
		9896: (e, t, r) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return r(8694);
				},
			]);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [593, 792], () => (t(9896), t(9743))), (_N_E = e.O());
	},
]);
