(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[636],
	{
		158: (e, t, n) => {
			'use strict';
			let r, i;
			n.d(t, { Nl: () => l4, Lg: () => l8, c5: () => l7 });
			var o,
				s,
				a,
				l,
				c,
				u,
				d,
				h,
				f,
				p,
				g,
				m,
				y,
				v,
				w = n(5640),
				b = n(148),
				C = n(8339),
				x = n(1412);
			n(7595),
				!(function (e) {
					(e[(e.UNKNOWN_ERROR = 0)] = 'UNKNOWN_ERROR'),
						(e[(e.BAD_REQUEST_ERROR = 1)] = 'BAD_REQUEST_ERROR'),
						(e[(e.MANIFEST_NOT_FOUND_ERROR = 2)] = 'MANIFEST_NOT_FOUND_ERROR'),
						(e[(e.MANIFEST_CONTENT_ERROR = 3)] = 'MANIFEST_CONTENT_ERROR'),
						(e[(e.UNKNOWN_APP_ERROR = 100)] = 'UNKNOWN_APP_ERROR'),
						(e[(e.USER_REJECTS_ERROR = 300)] = 'USER_REJECTS_ERROR'),
						(e[(e.METHOD_NOT_SUPPORTED = 400)] = 'METHOD_NOT_SUPPORTED');
				})(o || (o = {})),
				(function (e) {
					(e[(e.UNKNOWN_ERROR = 0)] = 'UNKNOWN_ERROR'), (e[(e.METHOD_NOT_SUPPORTED = 400)] = 'METHOD_NOT_SUPPORTED');
				})(s || (s = {})),
				(function (e) {
					(e[(e.UNKNOWN_ERROR = 0)] = 'UNKNOWN_ERROR'),
						(e[(e.BAD_REQUEST_ERROR = 1)] = 'BAD_REQUEST_ERROR'),
						(e[(e.UNKNOWN_APP_ERROR = 100)] = 'UNKNOWN_APP_ERROR'),
						(e[(e.USER_REJECTS_ERROR = 300)] = 'USER_REJECTS_ERROR'),
						(e[(e.METHOD_NOT_SUPPORTED = 400)] = 'METHOD_NOT_SUPPORTED');
				})(a || (a = {})),
				(function (e) {
					(e[(e.UNKNOWN_ERROR = 0)] = 'UNKNOWN_ERROR'),
						(e[(e.BAD_REQUEST_ERROR = 1)] = 'BAD_REQUEST_ERROR'),
						(e[(e.UNKNOWN_APP_ERROR = 100)] = 'UNKNOWN_APP_ERROR'),
						(e[(e.USER_REJECTS_ERROR = 300)] = 'USER_REJECTS_ERROR'),
						(e[(e.METHOD_NOT_SUPPORTED = 400)] = 'METHOD_NOT_SUPPORTED');
				})(l || (l = {})),
				(function (e) {
					(e[(e.UNKNOWN_ERROR = 0)] = 'UNKNOWN_ERROR'),
						(e[(e.BAD_REQUEST_ERROR = 1)] = 'BAD_REQUEST_ERROR'),
						(e[(e.UNKNOWN_APP_ERROR = 100)] = 'UNKNOWN_APP_ERROR'),
						(e[(e.METHOD_NOT_SUPPORTED = 400)] = 'METHOD_NOT_SUPPORTED');
				})(c || (c = {})),
				(function (e) {
					(e.MAINNET = '-239'), (e.TESTNET = '-3');
				})(u || (u = {}));
			let S = {
				encode: function (e, t = !1) {
					let n;
					e instanceof Uint8Array ? (n = e) : ('string' != typeof e && (e = JSON.stringify(e)), (n = C.decodeUTF8(e)));
					var r = n;
					let i = C.encodeBase64(r);
					return t ? encodeURIComponent(i) : i;
				},
				decode: function (e, t = !1) {
					var n;
					let r = ((n = e), t && (n = decodeURIComponent(n)), C.decodeBase64(n));
					return {
						toString: () => C.encodeUTF8(r),
						toObject() {
							try {
								return JSON.parse(C.encodeUTF8(r));
							} catch (e) {
								return null;
							}
						},
						toUint8Array: () => r,
					};
				},
			};
			function k(e) {
				let t = '';
				return (
					e.forEach((e) => {
						t += ('0' + (255 & e).toString(16)).slice(-2);
					}),
					t
				);
			}
			function E(e) {
				if (e.length % 2 != 0) throw Error(`Cannot convert ${e} to bytesArray`);
				let t = new Uint8Array(e.length / 2);
				for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
				return t;
			}
			class R {
				constructor(e) {
					(this.nonceLength = 24),
						(this.keyPair = e ? this.createKeypairFromString(e) : this.createKeypair()),
						(this.sessionId = k(this.keyPair.publicKey));
				}
				createKeypair() {
					return x.box.keyPair();
				}
				createKeypairFromString(e) {
					return { publicKey: E(e.publicKey), secretKey: E(e.secretKey) };
				}
				createNonce() {
					return x.randomBytes(this.nonceLength);
				}
				encrypt(e, t) {
					let n = new TextEncoder().encode(e),
						r = this.createNonce(),
						i = x.box(n, r, t, this.keyPair.secretKey),
						o = new Uint8Array(r.length + i.length);
					return o.set(r), o.set(i, r.length), o;
				}
				decrypt(e, t) {
					let [n, r] = (function (e, t) {
							if (t >= e.length) throw Error('Index is out of buffer');
							return [e.slice(0, t), e.slice(t)];
						})(e, this.nonceLength),
						i = x.box.open(r, n, t, this.keyPair.secretKey);
					if (!i)
						throw Error(`Decryption error: 
 message: ${e.toString()} 
 sender pubkey: ${t.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
					return new TextDecoder().decode(i);
				}
				stringifyKeypair() {
					return { publicKey: k(this.keyPair.publicKey), secretKey: k(this.keyPair.secretKey) };
				}
			}
			var O = n(7595);
			function _(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
				if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
					for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
						0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
				return n;
			}
			function T(e, t, n, r) {
				return new (n || (n = Promise))(function (i, o) {
					function s(e) {
						try {
							l(r.next(e));
						} catch (e) {
							o(e);
						}
					}
					function a(e) {
						try {
							l(r.throw(e));
						} catch (e) {
							o(e);
						}
					}
					function l(e) {
						var t;
						e.done
							? i(e.value)
							: ((t = e.value) instanceof n
									? t
									: new n(function (e) {
											e(t);
										})
								).then(s, a);
					}
					l((r = r.apply(e, t || [])).next());
				});
			}
			class M extends Error {
				constructor(e, t) {
					super(e, t),
						(this.message = `${M.prefix} ${this.constructor.name}${this.info ? ': ' + this.info : ''}${e ? '\n' + e : ''}`),
						Object.setPrototypeOf(this, M.prototype);
				}
				get info() {
					return '';
				}
			}
			M.prefix = '[TON_CONNECT_SDK_ERROR]';
			class A extends M {
				get info() {
					return 'Passed DappMetadata is in incorrect format.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, A.prototype);
				}
			}
			class P extends M {
				get info() {
					return 'Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, P.prototype);
				}
			}
			class L extends M {
				get info() {
					return 'Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, L.prototype);
				}
			}
			class I extends M {
				get info() {
					return 'Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, I.prototype);
				}
			}
			class U extends M {
				get info() {
					return 'Send transaction or other protocol methods called while wallet is not connected.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, U.prototype);
				}
			}
			class N extends M {
				get info() {
					return 'There is an attempt to connect to the injected wallet while it is not exists in the webpage.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, N.prototype);
				}
			}
			class q extends M {
				get info() {
					return "Wallet doesn't support requested feature method.";
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, q.prototype);
				}
			}
			class $ extends M {
				get info() {
					return 'Missing required features. You need to update your wallet.';
				}
				constructor(e, t) {
					super(e, t), Object.setPrototypeOf(this, $.prototype);
				}
			}
			class D extends M {
				get info() {
					return 'User rejects the action in the wallet.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, D.prototype);
				}
			}
			class W extends M {
				get info() {
					return 'Request to the wallet contains errors.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, W.prototype);
				}
			}
			class j extends M {
				get info() {
					return 'App tries to send rpc request to the injected wallet while not connected.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, j.prototype);
				}
			}
			class B extends M {
				get info() {
					return 'An error occurred while fetching the wallets list.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, B.prototype);
				}
			}
			class F extends M {
				get info() {
					return 'Passed address is in incorrect format.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, F.prototype);
				}
			}
			class K extends M {
				get info() {
					return 'Passed hex is in incorrect format.';
				}
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, K.prototype);
				}
			}
			class H extends M {
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, H.prototype);
				}
			}
			let Q = {
				[o.UNKNOWN_ERROR]: H,
				[o.USER_REJECTS_ERROR]: D,
				[o.BAD_REQUEST_ERROR]: W,
				[o.UNKNOWN_APP_ERROR]: j,
				[o.MANIFEST_NOT_FOUND_ERROR]: L,
				[o.MANIFEST_CONTENT_ERROR]: P,
			};
			class V {
				parseError(e) {
					let t = H;
					return e.code in Q && (t = Q[e.code] || H), new t(e.message);
				}
			}
			let z = new V();
			class G {
				isError(e) {
					return 'error' in e;
				}
			}
			let Z = { [a.UNKNOWN_ERROR]: H, [a.USER_REJECTS_ERROR]: D, [a.BAD_REQUEST_ERROR]: W, [a.UNKNOWN_APP_ERROR]: j };
			class Y extends G {
				convertToRpcRequest(e) {
					return { method: 'sendTransaction', params: [JSON.stringify(e)] };
				}
				parseAndThrowError(e) {
					let t = H;
					throw (e.error.code in Z && (t = Z[e.error.code] || H), new t(e.error.message));
				}
				convertFromRpcResponse(e) {
					return { boc: e.result };
				}
			}
			let J = new Y();
			class X {
				constructor(e, t) {
					(this.storage = e), (this.storeKey = 'ton-connect-storage_http-bridge-gateway::' + t);
				}
				storeLastEventId(e) {
					return T(this, void 0, void 0, function* () {
						return this.storage.setItem(this.storeKey, e);
					});
				}
				removeLastEventId() {
					return T(this, void 0, void 0, function* () {
						return this.storage.removeItem(this.storeKey);
					});
				}
				getLastEventId() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.storage.getItem(this.storeKey);
						return e || null;
					});
				}
			}
			function ee(e, t) {
				return ('/' === e.slice(-1) ? e.slice(0, -1) : e) + '/' + t;
			}
			function et(e) {
				if (!e) return !1;
				let t = new URL(e);
				return 'tg:' === t.protocol || 't.me' === t.hostname;
			}
			function en(e) {
				return e
					.replaceAll('.', '%2E')
					.replaceAll('-', '%2D')
					.replaceAll('_', '%5F')
					.replaceAll('&', '-')
					.replaceAll('=', '__')
					.replaceAll('%', '--');
			}
			function er(e, t) {
				return T(this, void 0, void 0, function* () {
					return new Promise((n, r) => {
						var i, o;
						if (null == (i = null == t ? void 0 : t.signal) ? void 0 : i.aborted) return void r(new M('Delay aborted'));
						let s = setTimeout(() => n(), e);
						null == (o = null == t ? void 0 : t.signal) ||
							o.addEventListener('abort', () => {
								clearTimeout(s), r(new M('Delay aborted'));
							});
					});
				});
			}
			function ei(e) {
				let t = new AbortController();
				return (
					(null == e ? void 0 : e.aborted)
						? t.abort()
						: null == e || e.addEventListener('abort', () => t.abort(), { once: !0 }),
					t
				);
			}
			function eo(e, t) {
				var n, r;
				return T(this, void 0, void 0, function* () {
					let i,
						o = null != (n = null == t ? void 0 : t.attempts) ? n : 10,
						s = null != (r = null == t ? void 0 : t.delayMs) ? r : 200,
						a = ei(null == t ? void 0 : t.signal);
					if ('function' != typeof e) throw new M(`Expected a function, got ${typeof e}`);
					let l = 0;
					for (; l < o; ) {
						if (a.signal.aborted) throw new M(`Aborted after attempts ${l}`);
						try {
							return yield e({ signal: a.signal });
						} catch (e) {
							(i = e), ++l < o && (yield er(s));
						}
					}
					throw i;
				});
			}
			function es(...e) {
				try {
					console.debug('[TON_CONNECT_SDK]', ...e);
				} catch (e) {}
			}
			function ea(...e) {
				try {
					console.error('[TON_CONNECT_SDK]', ...e);
				} catch (e) {}
			}
			class el {
				constructor(e, t, n, r, i) {
					(this.bridgeUrl = t),
						(this.sessionId = n),
						(this.listener = r),
						(this.errorsListener = i),
						(this.ssePath = 'events'),
						(this.postPath = 'message'),
						(this.heartbeatMessage = 'heartbeat'),
						(this.defaultTtl = 300),
						(this.defaultReconnectDelay = 2e3),
						(this.defaultResendDelay = 5e3),
						(this.eventSource = (function (e, t) {
							let n = null,
								r = null,
								i = null,
								o = null,
								s = null,
								a = (a, ...l) =>
									T(this, void 0, void 0, function* () {
										if (((o = null != a ? a : null), null == s || s.abort(), (s = ei(a)).signal.aborted))
											throw new M('Resource creation was aborted');
										r = null != l ? l : null;
										let c = e(s.signal, ...l);
										i = c;
										let u = yield c;
										if (i !== c && u !== n)
											throw (yield t(u), new M('Resource creation was aborted by a new resource creation'));
										return (n = u);
									});
							return {
								create: a,
								current: () => (null != n ? n : null),
								dispose: () =>
									T(this, void 0, void 0, function* () {
										try {
											let e = n;
											n = null;
											let r = i;
											i = null;
											try {
												null == s || s.abort();
											} catch (e) {}
											yield Promise.allSettled([e ? t(e) : Promise.resolve(), r ? t(yield r) : Promise.resolve()]);
										} catch (e) {}
									}),
								recreate: (e) =>
									T(this, void 0, void 0, function* () {
										let t = n,
											s = i,
											l = r,
											c = o;
										if ((yield er(e), t === n && s === i && l === r && c === o))
											return yield a(o, ...(null != l ? l : []));
										throw new M('Resource recreation was aborted by a new resource creation');
									}),
							};
						})(
							(e, t) =>
								T(this, void 0, void 0, function* () {
									let n = {
										bridgeUrl: this.bridgeUrl,
										ssePath: this.ssePath,
										sessionId: this.sessionId,
										bridgeGatewayStorage: this.bridgeGatewayStorage,
										errorHandler: this.errorsHandler.bind(this),
										messageHandler: this.messagesHandler.bind(this),
										signal: e,
										openingDeadlineMS: t,
									};
									return yield (function (e) {
										return T(this, void 0, void 0, function* () {
											return yield (function (e, t) {
												let n = null == t ? void 0 : t.timeout,
													r = ei(null == t ? void 0 : t.signal);
												return new Promise((t, i) =>
													T(this, void 0, void 0, function* () {
														let o;
														if (r.signal.aborted) return void i(new M('Operation aborted'));
														void 0 !== n &&
															(o = setTimeout(() => {
																r.abort(), i(new M(`Timeout after ${n}ms`));
															}, n)),
															r.signal.addEventListener(
																'abort',
																() => {
																	clearTimeout(o), i(new M('Operation aborted'));
																},
																{ once: !0 },
															);
														let s = { timeout: n, abort: r.signal };
														yield e(
															(...e) => {
																clearTimeout(o), t(...e);
															},
															() => {
																clearTimeout(o), i();
															},
															s,
														);
													}),
												);
											})(
												(t, n, r) =>
													T(this, void 0, void 0, function* () {
														var i;
														let o = ei(r.signal).signal;
														if (o.aborted) return void n(new M('Bridge connection aborted'));
														let s = new URL(ee(e.bridgeUrl, e.ssePath));
														s.searchParams.append('client_id', e.sessionId);
														let a = yield e.bridgeGatewayStorage.getLastEventId();
														if ((a && s.searchParams.append('last_event_id', a), o.aborted))
															return void n(new M('Bridge connection aborted'));
														let l = new EventSource(s.toString());
														(l.onerror = (r) =>
															T(this, void 0, void 0, function* () {
																if (o.aborted) {
																	l.close(), n(new M('Bridge connection aborted'));
																	return;
																}
																try {
																	let n = yield e.errorHandler(l, r);
																	n !== l && l.close(), n && n !== l && t(n);
																} catch (e) {
																	l.close(), n(e);
																}
															})),
															(l.onopen = () => {
																if (o.aborted) {
																	l.close(), n(new M('Bridge connection aborted'));
																	return;
																}
																t(l);
															}),
															(l.onmessage = (t) => {
																if (o.aborted) {
																	l.close(), n(new M('Bridge connection aborted'));
																	return;
																}
																e.messageHandler(t);
															}),
															null == (i = e.signal) ||
																i.addEventListener('abort', () => {
																	l.close(), n(new M('Bridge connection aborted'));
																});
													}),
												{ timeout: e.openingDeadlineMS, signal: e.signal },
											);
										});
									})(n);
								}),
							(e) =>
								T(this, void 0, void 0, function* () {
									e.close();
								}),
						)),
						(this.bridgeGatewayStorage = new X(e, t));
				}
				get isReady() {
					let e = this.eventSource.current();
					return (null == e ? void 0 : e.readyState) === EventSource.OPEN;
				}
				get isClosed() {
					let e = this.eventSource.current();
					return (null == e ? void 0 : e.readyState) !== EventSource.OPEN;
				}
				get isConnecting() {
					let e = this.eventSource.current();
					return (null == e ? void 0 : e.readyState) === EventSource.CONNECTING;
				}
				registerSession(e) {
					return T(this, void 0, void 0, function* () {
						yield this.eventSource.create(null == e ? void 0 : e.signal, null == e ? void 0 : e.openingDeadlineMS);
					});
				}
				send(e, t, n, r) {
					var i;
					return T(this, void 0, void 0, function* () {
						let o = {};
						'number' == typeof r
							? (o.ttl = r)
							: ((o.ttl = null == r ? void 0 : r.ttl),
								(o.signal = null == r ? void 0 : r.signal),
								(o.attempts = null == r ? void 0 : r.attempts));
						let s = new URL(ee(this.bridgeUrl, this.postPath));
						s.searchParams.append('client_id', this.sessionId),
							s.searchParams.append('to', t),
							s.searchParams.append('ttl', ((null == o ? void 0 : o.ttl) || this.defaultTtl).toString()),
							s.searchParams.append('topic', n);
						let a = S.encode(e);
						yield eo(
							(e) =>
								T(this, void 0, void 0, function* () {
									let t = yield this.post(s, a, e.signal);
									if (!t.ok) throw new M(`Bridge send failed, status ${t.status}`);
								}),
							{
								attempts: null != (i = null == o ? void 0 : o.attempts) ? i : Number.MAX_SAFE_INTEGER,
								delayMs: this.defaultResendDelay,
								signal: null == o ? void 0 : o.signal,
							},
						);
					});
				}
				pause() {
					this.eventSource.dispose().catch((e) => ea(`Bridge pause failed, ${e}`));
				}
				unPause() {
					return T(this, void 0, void 0, function* () {
						yield this.eventSource.recreate(0);
					});
				}
				close() {
					return T(this, void 0, void 0, function* () {
						yield this.eventSource.dispose().catch((e) => ea(`Bridge close failed, ${e}`));
					});
				}
				setListener(e) {
					this.listener = e;
				}
				setErrorsListener(e) {
					this.errorsListener = e;
				}
				post(e, t, n) {
					return T(this, void 0, void 0, function* () {
						let r = yield fetch(e, { method: 'post', body: t, signal: n });
						if (!r.ok) throw new M(`Bridge send failed, status ${r.status}`);
						return r;
					});
				}
				errorsHandler(e, t) {
					return T(this, void 0, void 0, function* () {
						if (this.isConnecting) throw (e.close(), new M('Bridge error, failed to connect'));
						if (this.isReady) {
							try {
								this.errorsListener(t);
							} catch (e) {}
							return;
						}
						if (this.isClosed)
							return (
								e.close(),
								es(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`),
								yield this.eventSource.recreate(this.defaultReconnectDelay)
							);
						throw new M('Bridge error, unknown state');
					});
				}
				messagesHandler(e) {
					return T(this, void 0, void 0, function* () {
						let t;
						if (
							e.data !== this.heartbeatMessage &&
							(yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId), !this.isClosed)
						) {
							try {
								t = JSON.parse(e.data);
							} catch (e) {
								throw new M(`Bridge message parse failed, message ${e.data}`);
							}
							this.listener(t);
						}
					});
				}
			}
			function ec(e) {
				return !('connectEvent' in e);
			}
			class eu {
				constructor(e) {
					(this.storage = e), (this.storeKey = 'ton-connect-storage_bridge-connection');
				}
				storeConnection(e) {
					return T(this, void 0, void 0, function* () {
						if ('injected' === e.type) return this.storage.setItem(this.storeKey, JSON.stringify(e));
						if (!ec(e)) {
							let t = {
									sessionKeyPair: e.session.sessionCrypto.stringifyKeypair(),
									walletPublicKey: e.session.walletPublicKey,
									bridgeUrl: e.session.bridgeUrl,
								},
								n = {
									type: 'http',
									connectEvent: e.connectEvent,
									session: t,
									lastWalletEventId: e.lastWalletEventId,
									nextRpcRequestId: e.nextRpcRequestId,
								};
							return this.storage.setItem(this.storeKey, JSON.stringify(n));
						}
						let t = {
							type: 'http',
							connectionSource: e.connectionSource,
							sessionCrypto: e.sessionCrypto.stringifyKeypair(),
						};
						return this.storage.setItem(this.storeKey, JSON.stringify(t));
					});
				}
				removeConnection() {
					return T(this, void 0, void 0, function* () {
						return this.storage.removeItem(this.storeKey);
					});
				}
				getConnection() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.storage.getItem(this.storeKey);
						if (!e) return null;
						let t = JSON.parse(e);
						if ('injected' === t.type) return t;
						if ('connectEvent' in t) {
							let e = new R(t.session.sessionKeyPair);
							return {
								type: 'http',
								connectEvent: t.connectEvent,
								lastWalletEventId: t.lastWalletEventId,
								nextRpcRequestId: t.nextRpcRequestId,
								session: {
									sessionCrypto: e,
									bridgeUrl: t.session.bridgeUrl,
									walletPublicKey: t.session.walletPublicKey,
								},
							};
						}
						return { type: 'http', sessionCrypto: new R(t.sessionCrypto), connectionSource: t.connectionSource };
					});
				}
				getHttpConnection() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						if (!e) throw new M('Trying to read HTTP connection source while nothing is stored');
						if ('injected' === e.type)
							throw new M('Trying to read HTTP connection source while injected connection is stored');
						return e;
					});
				}
				getHttpPendingConnection() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						if (!e) throw new M('Trying to read HTTP connection source while nothing is stored');
						if ('injected' === e.type)
							throw new M('Trying to read HTTP connection source while injected connection is stored');
						if (!ec(e)) throw new M('Trying to read HTTP-pending connection while http connection is stored');
						return e;
					});
				}
				getInjectedConnection() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						if (!e) throw new M('Trying to read Injected bridge connection source while nothing is stored');
						if ((null == e ? void 0 : e.type) === 'http')
							throw new M('Trying to read Injected bridge connection source while HTTP connection is stored');
						return e;
					});
				}
				storedConnectionType() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.storage.getItem(this.storeKey);
						return e ? JSON.parse(e).type : null;
					});
				}
				storeLastWalletEventId(e) {
					return T(this, void 0, void 0, function* () {
						let t = yield this.getConnection();
						if (t && 'http' === t.type && !ec(t)) return (t.lastWalletEventId = e), this.storeConnection(t);
					});
				}
				getLastWalletEventId() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						if (e && 'lastWalletEventId' in e) return e.lastWalletEventId;
					});
				}
				increaseNextRpcRequestId() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						if (e && 'nextRpcRequestId' in e) {
							let t = e.nextRpcRequestId || 0;
							return (e.nextRpcRequestId = t + 1), this.storeConnection(e);
						}
					});
				}
				getNextRpcRequestId() {
					return T(this, void 0, void 0, function* () {
						let e = yield this.getConnection();
						return (e && 'nextRpcRequestId' in e && e.nextRpcRequestId) || 0;
					});
				}
			}
			class ed {
				constructor(e, t) {
					(this.storage = e),
						(this.walletConnectionSource = t),
						(this.type = 'http'),
						(this.standardUniversalLink = 'tc://'),
						(this.pendingRequests = new Map()),
						(this.session = null),
						(this.gateway = null),
						(this.pendingGateways = []),
						(this.listeners = []),
						(this.defaultOpeningDeadlineMS = 12e3),
						(this.defaultRetryTimeoutMS = 2e3),
						(this.connectionStorage = new eu(e));
				}
				static fromStorage(e) {
					return T(this, void 0, void 0, function* () {
						let t = new eu(e),
							n = yield t.getHttpConnection();
						return ec(n) ? new ed(e, n.connectionSource) : new ed(e, { bridgeUrl: n.session.bridgeUrl });
					});
				}
				connect(e, t) {
					var n;
					let r = ei(null == t ? void 0 : t.signal);
					null == (n = this.abortController) || n.abort(), (this.abortController = r), this.closeGateways();
					let i = new R();
					(this.session = {
						sessionCrypto: i,
						bridgeUrl: 'bridgeUrl' in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : '',
					}),
						this.connectionStorage
							.storeConnection({ type: 'http', connectionSource: this.walletConnectionSource, sessionCrypto: i })
							.then(() =>
								T(this, void 0, void 0, function* () {
									r.signal.aborted ||
										(yield eo(
											(e) => {
												var n;
												return this.openGateways(i, {
													openingDeadlineMS:
														null != (n = null == t ? void 0 : t.openingDeadlineMS) ? n : this.defaultOpeningDeadlineMS,
													signal: null == e ? void 0 : e.signal,
												});
											},
											{ attempts: Number.MAX_SAFE_INTEGER, delayMs: this.defaultRetryTimeoutMS, signal: r.signal },
										));
								}),
							);
					let o =
						'universalLink' in this.walletConnectionSource && this.walletConnectionSource.universalLink
							? this.walletConnectionSource.universalLink
							: this.standardUniversalLink;
					return this.generateUniversalLink(o, e);
				}
				restoreConnection(e) {
					var t, n;
					return T(this, void 0, void 0, function* () {
						let r = ei(null == e ? void 0 : e.signal);
						if ((null == (t = this.abortController) || t.abort(), (this.abortController = r), r.signal.aborted)) return;
						this.closeGateways();
						let i = yield this.connectionStorage.getHttpConnection();
						if (!i || r.signal.aborted) return;
						let o = null != (n = null == e ? void 0 : e.openingDeadlineMS) ? n : this.defaultOpeningDeadlineMS;
						if (ec(i))
							return (
								(this.session = {
									sessionCrypto: i.sessionCrypto,
									bridgeUrl: 'bridgeUrl' in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : '',
								}),
								yield this.openGateways(i.sessionCrypto, {
									openingDeadlineMS: o,
									signal: null == r ? void 0 : r.signal,
								})
							);
						if (Array.isArray(this.walletConnectionSource))
							throw new M('Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.');
						if (
							((this.session = i.session),
							this.gateway && (es('Gateway is already opened, closing previous gateway'), yield this.gateway.close()),
							(this.gateway = new el(
								this.storage,
								this.walletConnectionSource.bridgeUrl,
								i.session.sessionCrypto.sessionId,
								this.gatewayListener.bind(this),
								this.gatewayErrorsListener.bind(this),
							)),
							!r.signal.aborted)
						) {
							this.listeners.forEach((e) => e(i.connectEvent));
							try {
								yield eo((e) => this.gateway.registerSession({ openingDeadlineMS: o, signal: e.signal }), {
									attempts: Number.MAX_SAFE_INTEGER,
									delayMs: this.defaultRetryTimeoutMS,
									signal: r.signal,
								});
							} catch (e) {
								yield this.disconnect({ signal: r.signal });
								return;
							}
						}
					});
				}
				sendRequest(e, t) {
					let n = {};
					return (
						'function' == typeof t
							? (n.onRequestSent = t)
							: ((n.onRequestSent = null == t ? void 0 : t.onRequestSent),
								(n.signal = null == t ? void 0 : t.signal),
								(n.attempts = null == t ? void 0 : t.attempts)),
						new Promise((t, r) =>
							T(this, void 0, void 0, function* () {
								var i;
								if (!this.gateway || !this.session || !('walletPublicKey' in this.session))
									throw new M('Trying to send bridge request without session');
								let o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
								yield this.connectionStorage.increaseNextRpcRequestId(),
									es('Send http-bridge request:', Object.assign(Object.assign({}, e), { id: o }));
								let s = this.session.sessionCrypto.encrypt(
									JSON.stringify(Object.assign(Object.assign({}, e), { id: o })),
									E(this.session.walletPublicKey),
								);
								try {
									yield this.gateway.send(s, this.session.walletPublicKey, e.method, {
										attempts: null == n ? void 0 : n.attempts,
										signal: null == n ? void 0 : n.signal,
									}),
										null == (i = null == n ? void 0 : n.onRequestSent) || i.call(n),
										this.pendingRequests.set(o.toString(), t);
								} catch (e) {
									r(e);
								}
							}),
						)
					);
				}
				closeConnection() {
					this.closeGateways(), (this.listeners = []), (this.session = null), (this.gateway = null);
				}
				disconnect(e) {
					return T(this, void 0, void 0, function* () {
						return new Promise((t) =>
							T(this, void 0, void 0, function* () {
								let n = !1,
									r = null,
									i = () => {
										n || ((n = !0), this.removeBridgeAndSession().then(t));
									};
								try {
									this.closeGateways();
									let t = ei(null == e ? void 0 : e.signal);
									(r = setTimeout(() => {
										t.abort();
									}, this.defaultOpeningDeadlineMS)),
										yield this.sendRequest(
											{ method: 'disconnect', params: [] },
											{ onRequestSent: i, signal: t.signal, attempts: 1 },
										);
								} catch (e) {
									es('Disconnect error:', e), n || this.removeBridgeAndSession().then(t);
								} finally {
									r && clearTimeout(r), i();
								}
							}),
						);
					});
				}
				listen(e) {
					return this.listeners.push(e), () => (this.listeners = this.listeners.filter((t) => t !== e));
				}
				pause() {
					var e;
					null == (e = this.gateway) || e.pause(), this.pendingGateways.forEach((e) => e.pause());
				}
				unPause() {
					return T(this, void 0, void 0, function* () {
						let e = this.pendingGateways.map((e) => e.unPause());
						this.gateway && e.push(this.gateway.unPause()), yield Promise.all(e);
					});
				}
				pendingGatewaysListener(e, t, n) {
					return T(this, void 0, void 0, function* () {
						return this.pendingGateways.includes(e)
							? (this.closeGateways({ except: e }),
								this.gateway && (es('Gateway is already opened, closing previous gateway'), yield this.gateway.close()),
								(this.session.bridgeUrl = t),
								(this.gateway = e),
								this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)),
								this.gateway.setListener(this.gatewayListener.bind(this)),
								this.gatewayListener(n))
							: void (yield e.close());
					});
				}
				gatewayListener(e) {
					return T(this, void 0, void 0, function* () {
						let t = JSON.parse(this.session.sessionCrypto.decrypt(S.decode(e.message).toUint8Array(), E(e.from)));
						if ((es('Wallet message received:', t), !('event' in t))) {
							let e = t.id.toString(),
								n = this.pendingRequests.get(e);
							return n
								? (n(t), void this.pendingRequests.delete(e))
								: void es(`Response id ${e} doesn't match any request's id`);
						}
						if (void 0 !== t.id) {
							let e = yield this.connectionStorage.getLastWalletEventId();
							if (void 0 !== e && t.id <= e)
								return void ea(
									`Received event id (=${t.id}) must be greater than stored last wallet event id (=${e}) `,
								);
							'connect' !== t.event && (yield this.connectionStorage.storeLastWalletEventId(t.id));
						}
						let n = this.listeners;
						'connect' === t.event && (yield this.updateSession(t, e.from)),
							'disconnect' === t.event &&
								(es('Removing bridge and session: received disconnect event'), yield this.removeBridgeAndSession()),
							n.forEach((e) => e(t));
					});
				}
				gatewayErrorsListener(e) {
					return T(this, void 0, void 0, function* () {
						throw new M(`Bridge error ${JSON.stringify(e)}`);
					});
				}
				updateSession(e, t) {
					return T(this, void 0, void 0, function* () {
						this.session = Object.assign(Object.assign({}, this.session), { walletPublicKey: t });
						let n = e.payload.items.find((e) => 'ton_addr' === e.name),
							r = Object.assign(Object.assign({}, e), {
								payload: Object.assign(Object.assign({}, e.payload), { items: [n] }),
							});
						yield this.connectionStorage.storeConnection({
							type: 'http',
							session: this.session,
							lastWalletEventId: e.id,
							connectEvent: r,
							nextRpcRequestId: 0,
						});
					});
				}
				removeBridgeAndSession() {
					return T(this, void 0, void 0, function* () {
						this.closeConnection(), yield this.connectionStorage.removeConnection();
					});
				}
				generateUniversalLink(e, t) {
					return et(e) ? this.generateTGUniversalLink(e, t) : this.generateRegularUniversalLink(e, t);
				}
				generateRegularUniversalLink(e, t) {
					let n = new URL(e);
					return (
						n.searchParams.append('v', '2'),
						n.searchParams.append('id', this.session.sessionCrypto.sessionId),
						n.searchParams.append('r', JSON.stringify(t)),
						n.toString()
					);
				}
				generateTGUniversalLink(e, t) {
					let n = 'tonconnect-' + en(this.generateRegularUniversalLink('about:blank', t).split('?')[1]),
						r = new URL(this.convertToDirectLink(e));
					return r.searchParams.append('startapp', n), r.toString();
				}
				convertToDirectLink(e) {
					let t = new URL(e);
					return (
						t.searchParams.has('attach') && (t.searchParams.delete('attach'), (t.pathname += '/start')), t.toString()
					);
				}
				openGateways(e, t) {
					return T(this, void 0, void 0, function* () {
						if (!Array.isArray(this.walletConnectionSource))
							return (
								this.gateway && (es('Gateway is already opened, closing previous gateway'), yield this.gateway.close()),
								(this.gateway = new el(
									this.storage,
									this.walletConnectionSource.bridgeUrl,
									e.sessionId,
									this.gatewayListener.bind(this),
									this.gatewayErrorsListener.bind(this),
								)),
								yield this.gateway.registerSession({
									openingDeadlineMS: null == t ? void 0 : t.openingDeadlineMS,
									signal: null == t ? void 0 : t.signal,
								})
							);
						this.pendingGateways.map((e) => e.close().catch()),
							(this.pendingGateways = this.walletConnectionSource.map((t) => {
								let n = new el(
									this.storage,
									t.bridgeUrl,
									e.sessionId,
									() => {},
									() => {},
								);
								return n.setListener((e) => this.pendingGatewaysListener(n, t.bridgeUrl, e)), n;
							})),
							yield Promise.allSettled(
								this.pendingGateways.map((e) =>
									eo(
										(n) => {
											var r;
											return this.pendingGateways.some((t) => t === e)
												? e.registerSession({
														openingDeadlineMS:
															null != (r = null == t ? void 0 : t.openingDeadlineMS)
																? r
																: this.defaultOpeningDeadlineMS,
														signal: n.signal,
													})
												: e.close();
										},
										{
											attempts: Number.MAX_SAFE_INTEGER,
											delayMs: this.defaultRetryTimeoutMS,
											signal: null == t ? void 0 : t.signal,
										},
									),
								),
							);
					});
				}
				closeGateways(e) {
					var t;
					null == (t = this.gateway) || t.close(),
						this.pendingGateways.filter((t) => t !== (null == e ? void 0 : e.except)).forEach((e) => e.close()),
						(this.pendingGateways = []);
				}
			}
			function eh(e, t) {
				return !!e && 'object' == typeof e && t.every((t) => t in e);
			}
			class ef {
				constructor() {
					this.storage = {};
				}
				static getInstance() {
					return ef.instance || (ef.instance = new ef()), ef.instance;
				}
				get length() {
					return Object.keys(this.storage).length;
				}
				clear() {
					this.storage = {};
				}
				getItem(e) {
					var t;
					return null != (t = this.storage[e]) ? t : null;
				}
				key(e) {
					var t;
					let n = Object.keys(this.storage);
					return e < 0 || e >= n.length ? null : null != (t = n[e]) ? t : null;
				}
				removeItem(e) {
					delete this.storage[e];
				}
				setItem(e, t) {
					this.storage[e] = t;
				}
			}
			function ep() {
				if ('undefined' != typeof window) return window;
			}
			class eg {
				constructor(e, t) {
					(this.injectedWalletKey = t),
						(this.type = 'injected'),
						(this.unsubscribeCallback = null),
						(this.listenSubscriptions = !1),
						(this.listeners = []);
					let n = eg.window;
					if (!eg.isWindowContainsWallet(n, t)) throw new N();
					(this.connectionStorage = new eu(e)), (this.injectedWallet = n[t].tonconnect);
				}
				static fromStorage(e) {
					return T(this, void 0, void 0, function* () {
						let t = new eu(e);
						return new eg(e, (yield t.getInjectedConnection()).jsBridgeKey);
					});
				}
				static isWalletInjected(e) {
					return eg.isWindowContainsWallet(this.window, e);
				}
				static isInsideWalletBrowser(e) {
					return !!eg.isWindowContainsWallet(this.window, e) && this.window[e].tonconnect.isWalletBrowser;
				}
				static getCurrentlyInjectedWallets() {
					return this.window
						? (function () {
								let e = ep();
								if (!e) return [];
								try {
									return Object.keys(e);
								} catch (e) {
									return [];
								}
							})()
								.filter(([e, t]) =>
									(function (e) {
										try {
											var t, n, r;
											if (((t = 'tonconnect'), !eh(e, [t]) || ((n = e.tonconnect), (r = 'walletInfo'), !eh(n, [r]))))
												return !1;
											return eh(e.tonconnect.walletInfo, ['name', 'app_name', 'image', 'about_url', 'platforms']);
										} catch (e) {
											return !1;
										}
									})(t),
								)
								.map(([e, t]) => ({
									name: t.tonconnect.walletInfo.name,
									appName: t.tonconnect.walletInfo.app_name,
									aboutUrl: t.tonconnect.walletInfo.about_url,
									imageUrl: t.tonconnect.walletInfo.image,
									tondns: t.tonconnect.walletInfo.tondns,
									jsBridgeKey: e,
									injected: !0,
									embedded: t.tonconnect.isWalletBrowser,
									platforms: t.tonconnect.walletInfo.platforms,
									features: t.tonconnect.walletInfo.features,
								}))
						: [];
				}
				static isWindowContainsWallet(e, t) {
					return !!e && t in e && 'object' == typeof e[t] && 'tonconnect' in e[t];
				}
				connect(e) {
					this._connect(2, e);
				}
				restoreConnection() {
					return T(this, void 0, void 0, function* () {
						try {
							es('Injected Provider restoring connection...');
							let e = yield this.injectedWallet.restoreConnection();
							es('Injected Provider restoring connection response', e),
								'connect' === e.event
									? (this.makeSubscriptions(), this.listeners.forEach((t) => t(e)))
									: yield this.connectionStorage.removeConnection();
						} catch (e) {
							yield this.connectionStorage.removeConnection(), console.error(e);
						}
					});
				}
				closeConnection() {
					this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners();
				}
				disconnect() {
					return T(this, void 0, void 0, function* () {
						return new Promise((e) => {
							let t = () => {
								this.closeAllListeners(), this.connectionStorage.removeConnection().then(e);
							};
							try {
								this.injectedWallet.disconnect(), t();
							} catch (e) {
								es(e), this.sendRequest({ method: 'disconnect', params: [] }, t);
							}
						});
					});
				}
				closeAllListeners() {
					var e;
					(this.listenSubscriptions = !1),
						(this.listeners = []),
						null == (e = this.unsubscribeCallback) || e.call(this);
				}
				listen(e) {
					return this.listeners.push(e), () => (this.listeners = this.listeners.filter((t) => t !== e));
				}
				sendRequest(e, t) {
					var n;
					return T(this, void 0, void 0, function* () {
						let r = {};
						'function' == typeof t
							? (r.onRequestSent = t)
							: ((r.onRequestSent = null == t ? void 0 : t.onRequestSent), (r.signal = null == t ? void 0 : t.signal));
						let i = (yield this.connectionStorage.getNextRpcRequestId()).toString();
						yield this.connectionStorage.increaseNextRpcRequestId(),
							es('Send injected-bridge request:', Object.assign(Object.assign({}, e), { id: i }));
						let o = this.injectedWallet.send(Object.assign(Object.assign({}, e), { id: i }));
						return (
							o.then((e) => es('Wallet message received:', e)),
							null == (n = null == r ? void 0 : r.onRequestSent) || n.call(r),
							o
						);
					});
				}
				_connect(e, t) {
					return T(this, void 0, void 0, function* () {
						try {
							es(`Injected Provider connect request: protocolVersion: ${e}, message:`, t);
							let n = yield this.injectedWallet.connect(e, t);
							es('Injected Provider connect response:', n),
								'connect' === n.event && (yield this.updateSession(), this.makeSubscriptions()),
								this.listeners.forEach((e) => e(n));
						} catch (t) {
							es('Injected Provider connect error:', t);
							let e = { event: 'connect_error', payload: { code: 0, message: null == t ? void 0 : t.toString() } };
							this.listeners.forEach((t) => t(e));
						}
					});
				}
				makeSubscriptions() {
					(this.listenSubscriptions = !0),
						(this.unsubscribeCallback = this.injectedWallet.listen((e) => {
							es('Wallet message received:', e),
								this.listenSubscriptions && this.listeners.forEach((t) => t(e)),
								'disconnect' === e.event && this.disconnect();
						}));
				}
				updateSession() {
					return this.connectionStorage.storeConnection({
						type: 'injected',
						jsBridgeKey: this.injectedWalletKey,
						nextRpcRequestId: 0,
					});
				}
			}
			eg.window = ep();
			class em {
				constructor() {
					this.localStorage = (function () {
						if (
							(function () {
								try {
									return 'undefined' != typeof localStorage;
								} catch (e) {
									return !1;
								}
							})()
						)
							return localStorage;
						if (void 0 !== O && null != O.versions && null != O.versions.node)
							throw new M(
								'`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector',
							);
						return ef.getInstance();
					})();
				}
				getItem(e) {
					return T(this, void 0, void 0, function* () {
						return this.localStorage.getItem(e);
					});
				}
				removeItem(e) {
					return T(this, void 0, void 0, function* () {
						this.localStorage.removeItem(e);
					});
				}
				setItem(e, t) {
					return T(this, void 0, void 0, function* () {
						this.localStorage.setItem(e, t);
					});
				}
			}
			function ey(e) {
				return 'jsBridgeKey' in e && e.injected;
			}
			function ev(e) {
				return ey(e) && e.embedded;
			}
			function ew(e) {
				return 'bridgeUrl' in e;
			}
			let eb = [
				{
					app_name: 'telegram-wallet',
					name: 'Wallet',
					image: 'https://wallet.tg/images/logo-288.png',
					about_url: 'https://wallet.tg/',
					universal_url: 'https://t.me/wallet?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://walletbot.me/tonconnect-bridge/bridge' }],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'tonkeeper',
					name: 'Tonkeeper',
					image: 'https://tonkeeper.com/assets/tonconnect-icon.png',
					tondns: 'tonkeeper.ton',
					about_url: 'https://tonkeeper.com',
					universal_url: 'https://app.tonkeeper.com/ton-connect',
					deepLink: 'tonkeeper-tc://',
					bridge: [
						{ type: 'sse', url: 'https://bridge.tonapi.io/bridge' },
						{ type: 'js', key: 'tonkeeper' },
					],
					platforms: ['ios', 'android', 'chrome', 'firefox', 'macos'],
				},
				{
					app_name: 'mytonwallet',
					name: 'MyTonWallet',
					image: 'https://static.mytonwallet.io/icon-256.png',
					about_url: 'https://mytonwallet.io',
					universal_url: 'https://connect.mytonwallet.org',
					bridge: [
						{ type: 'js', key: 'mytonwallet' },
						{ type: 'sse', url: 'https://tonconnectbridge.mytonwallet.org/bridge/' },
					],
					platforms: ['chrome', 'windows', 'macos', 'linux', 'ios', 'android', 'firefox'],
				},
				{
					app_name: 'tonhub',
					name: 'Tonhub',
					image: 'https://tonhub.com/tonconnect_logo.png',
					about_url: 'https://tonhub.com',
					universal_url: 'https://tonhub.com/ton-connect',
					bridge: [
						{ type: 'js', key: 'tonhub' },
						{ type: 'sse', url: 'https://connect.tonhubapi.com/tonconnect' },
					],
					platforms: ['ios', 'android'],
				},
				{
					app_name: 'bitgetTonWallet',
					name: 'Bitget Wallet',
					image:
						'https://raw.githubusercontent.com/bitgetwallet/download/refs/heads/main/logo/png/bitget_wallet_logo_288_mini.png',
					about_url: 'https://web3.bitget.com',
					deepLink: 'bitkeep://',
					bridge: [
						{ type: 'js', key: 'bitgetTonWallet' },
						{ type: 'sse', url: 'https://ton-connect-bridge.bgwapi.io/bridge' },
					],
					platforms: ['ios', 'android', 'chrome'],
					universal_url: 'https://bkcode.vip/ton-connect',
				},
				{
					app_name: 'okxMiniWallet',
					name: 'OKX Mini Wallet',
					image: 'https://static.okx.com/cdn/assets/imgs/2411/8BE1A4A434D8F58A.png',
					about_url: 'https://www.okx.com/web3',
					universal_url: 'https://t.me/OKX_WALLET_BOT?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://www.okx.com/tonbridge/discover/rpc/bridge' }],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'binanceWeb3TonWallet',
					name: 'Binance Web3 Wallet',
					image: 'https://public.bnbstatic.com/static/binance-w3w/ton-provider/binancew3w.png',
					about_url: 'https://www.binance.com/en/web3wallet',
					deepLink: 'bnc://app.binance.com/cedefi/ton-connect',
					bridge: [
						{ type: 'js', key: 'binancew3w' },
						{ type: 'sse', url: 'https://wallet.binance.com/tonbridge/bridge' },
					],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
					universal_url: 'https://app.binance.com/cedefi/ton-connect',
				},
				{
					app_name: 'fintopio-tg',
					name: 'Fintopio',
					image: 'https://fintopio.com/tonconnect-icon.png',
					about_url: 'https://fintopio.com',
					universal_url: 'https://t.me/fintopio?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://wallet-bridge.fintopio.com/bridge' }],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'okxTonWallet',
					name: 'OKX Wallet',
					image: 'https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png',
					about_url: 'https://www.okx.com/web3',
					universal_url: 'https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect',
					bridge: [
						{ type: 'js', key: 'okxTonWallet' },
						{ type: 'sse', url: 'https://www.okx.com/tonbridge/discover/rpc/bridge' },
					],
					platforms: ['chrome', 'safari', 'firefox', 'ios', 'android'],
				},
				{
					app_name: 'hot',
					name: 'HOT',
					image: 'https://raw.githubusercontent.com/hot-dao/media/main/logo.png',
					about_url: 'https://hot-labs.org/',
					universal_url: 'https://t.me/herewalletbot?attach=wallet',
					bridge: [
						{ type: 'sse', url: 'https://sse-bridge.hot-labs.org' },
						{ type: 'js', key: 'hotWallet' },
					],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'bybitTonWallet',
					name: 'Bybit Wallet',
					image: 'https://raw.githubusercontent.com/bybit-web3/bybit-web3.github.io/main/docs/images/bybit-logo.png',
					about_url: 'https://www.bybit.com/web3',
					universal_url: 'https://app.bybit.com/ton-connect',
					deepLink: 'bybitapp://',
					bridge: [
						{ type: 'js', key: 'bybitTonWallet' },
						{ type: 'sse', url: 'https://api-node.bybit.com/spot/api/web3/bridge/ton/bridge' },
					],
					platforms: ['ios', 'android', 'chrome'],
				},
				{
					app_name: 'dewallet',
					name: 'DeWallet',
					image: 'https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png',
					about_url: 'https://delabwallet.com',
					universal_url: 'https://t.me/dewallet?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://bridge.dewallet.pro/bridge' }],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'safepalwallet',
					name: 'SafePal',
					image: 'https://s.pvcliping.com/web/public_image/SafePal_x288.png',
					tondns: '',
					about_url: 'https://www.safepal.com',
					universal_url: 'https://link.safepal.io/ton-connect',
					deepLink: 'safepal-tc://',
					bridge: [
						{ type: 'sse', url: 'https://ton-bridge.safepal.com/tonbridge/v1/bridge' },
						{ type: 'js', key: 'safepalwallet' },
					],
					platforms: ['ios', 'android', 'chrome', 'firefox'],
				},
				{
					app_name: 'GateWallet',
					name: 'GateWallet',
					image: 'https://img.gatedataimg.com/prd-ordinal-imgs/036f07bb8730716e/gateio-0925.png',
					about_url: 'https://www.gate.io/',
					bridge: [
						{ type: 'js', key: 'gatetonwallet' },
						{ type: 'sse', url: 'https://dapp.gateio.services/tonbridge_api/bridge/v1' },
					],
					platforms: ['ios', 'android'],
					universal_url: 'https://gateio.go.link/gateio/web3?adj_t=1ff8khdw_1fu4ccc7',
				},
				{
					app_name: 'openmask',
					name: 'OpenMask',
					image: 'https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png',
					about_url: 'https://www.openmask.app/',
					bridge: [{ type: 'js', key: 'openmask' }],
					platforms: ['chrome'],
				},
				{
					app_name: 'BitgetWeb3',
					name: 'BitgetWeb3',
					image: 'https://img.bitgetimg.com/image/third/1731638059795.png',
					about_url: '​https://www.bitget.com',
					universal_url: 'https://t.me/BitgetOfficialBot?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://ton-connect-bridge.bgwapi.io/bridge' }],
					platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
				},
				{
					app_name: 'tobi',
					name: 'Tobi',
					image: 'https://app.tobiwallet.app/icons/logo-288.png',
					about_url: 'https://tobi.fun',
					universal_url: 'https://t.me/TobiCopilotBot?attach=wallet',
					bridge: [{ type: 'sse', url: 'https://ton-bridge.tobiwallet.app/bridge' }],
					platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
				},
				{
					app_name: 'xtonwallet',
					name: 'XTONWallet',
					image: 'https://xtonwallet.com/assets/img/icon-256-back.png',
					about_url: 'https://xtonwallet.com',
					bridge: [{ type: 'js', key: 'xtonwallet' }],
					platforms: ['chrome', 'firefox'],
				},
				{
					app_name: 'tonwallet',
					name: 'TON Wallet',
					image: 'https://wallet.ton.org/assets/ui/qr-logo.png',
					about_url: 'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
					bridge: [{ type: 'js', key: 'tonwallet' }],
					platforms: ['chrome'],
				},
			];
			class eC {
				constructor(e) {
					var t;
					(this.walletsListCache = null),
						(this.walletsListCacheCreationTimestamp = null),
						(this.walletsListSource =
							null != (t = null == e ? void 0 : e.walletsListSource)
								? t
								: 'https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json'),
						(this.cacheTTLMs = null == e ? void 0 : e.cacheTTLMs);
				}
				getWallets() {
					return T(this, void 0, void 0, function* () {
						return (
							this.cacheTTLMs &&
								this.walletsListCacheCreationTimestamp &&
								Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs &&
								(this.walletsListCache = null),
							this.walletsListCache ||
								((this.walletsListCache = this.fetchWalletsList()),
								this.walletsListCache
									.then(() => {
										this.walletsListCacheCreationTimestamp = Date.now();
									})
									.catch(() => {
										(this.walletsListCache = null), (this.walletsListCacheCreationTimestamp = null);
									})),
							this.walletsListCache
						);
					});
				}
				getEmbeddedWallet() {
					return T(this, void 0, void 0, function* () {
						let e = (yield this.getWallets()).filter(ev);
						return 1 === e.length ? e[0] : null;
					});
				}
				fetchWalletsList() {
					return T(this, void 0, void 0, function* () {
						let e = [];
						try {
							let t = yield fetch(this.walletsListSource);
							if (((e = yield t.json()), !Array.isArray(e)))
								throw new B('Wrong wallets list format, wallets list must be an array.');
							let n = e.filter((e) => !this.isCorrectWalletConfigDTO(e));
							n.length &&
								(ea(
									`Wallet(s) ${n.map((e) => (null == e ? void 0 : e.name) || 'unknown').join(', ')} config format is wrong. They were removed from the wallets list.`,
								),
								(e = e.filter((e) => this.isCorrectWalletConfigDTO(e))));
						} catch (t) {
							ea(t), (e = eb);
						}
						let t = [];
						try {
							t = eg.getCurrentlyInjectedWallets();
						} catch (e) {
							ea(e);
						}
						return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e), t);
					});
				}
				walletConfigDTOListToWalletConfigList(e) {
					return e.map((e) => {
						let t = {
							name: e.name,
							appName: e.app_name,
							imageUrl: e.image,
							aboutUrl: e.about_url,
							tondns: e.tondns,
							platforms: e.platforms,
							features: e.features,
						};
						return (
							e.bridge.forEach((n) => {
								if (
									('sse' === n.type &&
										((t.bridgeUrl = n.url), (t.universalLink = e.universal_url), (t.deepLink = e.deepLink)),
									'js' === n.type)
								) {
									let e = n.key;
									(t.jsBridgeKey = e),
										(t.injected = eg.isWalletInjected(e)),
										(t.embedded = eg.isInsideWalletBrowser(e));
								}
							}),
							t
						);
					});
				}
				mergeWalletsLists(e, t) {
					return [...new Set(e.concat(t).map((e) => e.name)).values()].map((n) => {
						let r = e.find((e) => e.name === n),
							i = t.find((e) => e.name === n);
						return Object.assign(Object.assign({}, r && Object.assign({}, r)), i && Object.assign({}, i));
					});
				}
				isCorrectWalletConfigDTO(e) {
					if (!e || 'object' != typeof e) return !1;
					let t = 'name' in e,
						n = 'app_name' in e,
						r = 'image' in e,
						i = 'about_url' in e,
						o = 'platforms' in e;
					if (
						!t ||
						!r ||
						!i ||
						!o ||
						!n ||
						!e.platforms ||
						!Array.isArray(e.platforms) ||
						!e.platforms.length ||
						!('bridge' in e) ||
						!Array.isArray(e.bridge) ||
						!e.bridge.length
					)
						return !1;
					let s = e.bridge;
					if (s.some((e) => !e || 'object' != typeof e || !('type' in e))) return !1;
					let a = s.find((e) => 'sse' === e.type);
					if (a && (!('object' == typeof a && 'url' in a) || !a.url || !e.universal_url)) return !1;
					let l = s.find((e) => 'js' === e.type);
					return !l || ('object' == typeof l && 'key' in l && !!l.key);
				}
			}
			function ex(e, t) {
				if ('object' != typeof t) return !0;
				let { sendTransaction: n } = t;
				if (n) {
					let t = eS(e, 'SendTransaction');
					if (
						!t ||
						!(function (e, t) {
							let n = void 0 === t.minMessages || t.minMessages <= e.maxMessages,
								r = !t.extraCurrencyRequired || e.extraCurrencySupported;
							return !!(n && r);
						})(t, n)
					)
						return !1;
				}
				return !0;
			}
			function eS(e, t) {
				return e.find((e) => e && 'object' == typeof e && e.name === t);
			}
			function ek() {
				return { type: 'request-version' };
			}
			function eE(e) {
				return { type: 'response-version', version: e };
			}
			function eR(e) {
				return { ton_connect_sdk_lib: e.ton_connect_sdk_lib, ton_connect_ui_lib: e.ton_connect_ui_lib };
			}
			function eO(e, t) {
				var n, r, i, o, s, a, l, c;
				let u =
					(null == (n = null == t ? void 0 : t.connectItems) ? void 0 : n.tonProof) &&
					'proof' in t.connectItems.tonProof;
				return {
					wallet_address: null != (i = null == (r = null == t ? void 0 : t.account) ? void 0 : r.address) ? i : null,
					wallet_type: null != (o = null == t ? void 0 : t.device.appName) ? o : null,
					wallet_version: null != (s = null == t ? void 0 : t.device.appVersion) ? s : null,
					auth_type: u ? 'ton_proof' : 'ton_addr',
					custom_data: Object.assign(
						{
							chain_id: null != (l = null == (a = null == t ? void 0 : t.account) ? void 0 : a.chain) ? l : null,
							provider: null != (c = null == t ? void 0 : t.provider) ? c : null,
						},
						eR(e),
					),
				};
			}
			function e_(e) {
				return { type: 'connection-started', custom_data: eR(e) };
			}
			function eT(e, t) {
				return Object.assign({ type: 'connection-completed', is_success: !0 }, eO(e, t));
			}
			function eM(e, t, n) {
				return {
					type: 'connection-error',
					is_success: !1,
					error_message: t,
					error_code: null != n ? n : null,
					custom_data: eR(e),
				};
			}
			function eA(e) {
				return { type: 'connection-restoring-started', custom_data: eR(e) };
			}
			function eP(e, t) {
				return Object.assign({ type: 'connection-restoring-completed', is_success: !0 }, eO(e, t));
			}
			function eL(e, t) {
				return { type: 'connection-restoring-error', is_success: !1, error_message: t, custom_data: eR(e) };
			}
			function eI(e, t) {
				var n, r, i, o;
				return {
					valid_until: null != (n = String(t.validUntil)) ? n : null,
					from:
						null != (o = null != (r = t.from) ? r : null == (i = null == e ? void 0 : e.account) ? void 0 : i.address)
							? o
							: null,
					messages: t.messages.map((e) => {
						var t, n;
						return { address: null != (t = e.address) ? t : null, amount: null != (n = e.amount) ? n : null };
					}),
				};
			}
			function eU(e, t, n) {
				return Object.assign(Object.assign({ type: 'transaction-sent-for-signature' }, eO(e, t)), eI(t, n));
			}
			function eN(e, t, n, r) {
				return Object.assign(
					Object.assign({ type: 'transaction-signed', is_success: !0, signed_transaction: r.boc }, eO(e, t)),
					eI(t, n),
				);
			}
			function eq(e, t, n, r, i) {
				return Object.assign(
					Object.assign(
						{ type: 'transaction-signing-failed', is_success: !1, error_message: r, error_code: null != i ? i : null },
						eO(e, t),
					),
					eI(t, n),
				);
			}
			function e$(e, t, n) {
				return Object.assign({ type: 'disconnection', scope: n }, eO(e, t));
			}
			class eD {
				constructor() {
					this.window = ep();
				}
				dispatchEvent(e, t) {
					var n;
					return T(this, void 0, void 0, function* () {
						let r = new CustomEvent(e, { detail: t });
						null == (n = this.window) || n.dispatchEvent(r);
					});
				}
				addEventListener(e, t, n) {
					var r;
					return T(this, void 0, void 0, function* () {
						return (
							null == (r = this.window) || r.addEventListener(e, t, n),
							() => {
								var n;
								return null == (n = this.window) ? void 0 : n.removeEventListener(e, t);
							}
						);
					});
				}
			}
			class eW {
				constructor(e) {
					var t;
					(this.eventPrefix = 'ton-connect-'),
						(this.tonConnectUiVersion = null),
						(this.eventDispatcher = null != (t = null == e ? void 0 : e.eventDispatcher) ? t : new eD()),
						(this.tonConnectSdkVersion = e.tonConnectSdkVersion),
						this.init().catch();
				}
				get version() {
					return eR({ ton_connect_sdk_lib: this.tonConnectSdkVersion, ton_connect_ui_lib: this.tonConnectUiVersion });
				}
				init() {
					return T(this, void 0, void 0, function* () {
						try {
							yield this.setRequestVersionHandler(),
								(this.tonConnectUiVersion = yield this.requestTonConnectUiVersion());
						} catch (e) {}
					});
				}
				setRequestVersionHandler() {
					return T(this, void 0, void 0, function* () {
						yield this.eventDispatcher.addEventListener('ton-connect-request-version', () =>
							T(this, void 0, void 0, function* () {
								yield this.eventDispatcher.dispatchEvent('ton-connect-response-version', eE(this.tonConnectSdkVersion));
							}),
						);
					});
				}
				requestTonConnectUiVersion() {
					return T(this, void 0, void 0, function* () {
						return new Promise((e, t) =>
							T(this, void 0, void 0, function* () {
								try {
									yield this.eventDispatcher.addEventListener(
										'ton-connect-ui-response-version',
										(t) => {
											e(t.detail.version);
										},
										{ once: !0 },
									),
										yield this.eventDispatcher.dispatchEvent('ton-connect-ui-request-version', ek());
								} catch (e) {
									t(e);
								}
							}),
						);
					});
				}
				dispatchUserActionEvent(e) {
					try {
						this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch();
					} catch (e) {}
				}
				trackConnectionStarted(...e) {
					try {
						let t = e_(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionCompleted(...e) {
					try {
						let t = eT(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionError(...e) {
					try {
						let t = eM(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringStarted(...e) {
					try {
						let t = eA(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringCompleted(...e) {
					try {
						let t = eP(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringError(...e) {
					try {
						let t = eL(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackDisconnection(...e) {
					try {
						let t = e$(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSentForSignature(...e) {
					try {
						let t = eU(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSigned(...e) {
					try {
						let t = eN(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSigningFailed(...e) {
					try {
						let t = eq(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
			}
			class ej {
				constructor(e) {
					if (
						((this.walletsList = new eC()),
						(this._wallet = null),
						(this.provider = null),
						(this.statusChangeSubscriptions = []),
						(this.statusChangeErrorSubscriptions = []),
						(this.dappSettings = {
							manifestUrl:
								(null == e ? void 0 : e.manifestUrl) ||
								(function () {
									var e;
									let t = null == (e = ep()) ? void 0 : e.location.origin;
									return t ? t + '/tonconnect-manifest.json' : '';
								})(),
							storage: (null == e ? void 0 : e.storage) || new em(),
						}),
						(this.walletsRequiredFeatures = null == e ? void 0 : e.walletsRequiredFeatures),
						(this.walletsList = new eC({
							walletsListSource: null == e ? void 0 : e.walletsListSource,
							cacheTTLMs: null == e ? void 0 : e.walletsListCacheTTLMs,
						})),
						(this.tracker = new eW({
							eventDispatcher: null == e ? void 0 : e.eventDispatcher,
							tonConnectSdkVersion: '3.1.0',
						})),
						!this.dappSettings.manifestUrl)
					)
						throw new A(
							'Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest',
						);
					(this.bridgeConnectionStorage = new eu(this.dappSettings.storage)),
						(null == e ? void 0 : e.disableAutoPauseConnection) || this.addWindowFocusAndBlurSubscriptions();
				}
				static getWallets() {
					return this.walletsList.getWallets();
				}
				get connected() {
					return null !== this._wallet;
				}
				get account() {
					var e;
					return (null == (e = this._wallet) ? void 0 : e.account) || null;
				}
				get wallet() {
					return this._wallet;
				}
				set wallet(e) {
					(this._wallet = e), this.statusChangeSubscriptions.forEach((e) => e(this._wallet));
				}
				getWallets() {
					return this.walletsList.getWallets();
				}
				onStatusChange(e, t) {
					return (
						this.statusChangeSubscriptions.push(e),
						t && this.statusChangeErrorSubscriptions.push(t),
						() => {
							(this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter((t) => t !== e)),
								t && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter((e) => e !== t));
						}
					);
				}
				connect(e, t) {
					var n, r;
					let i = {};
					if (
						('object' == typeof t && 'tonProof' in t && (i.request = t),
						'object' == typeof t &&
							('openingDeadlineMS' in t || 'signal' in t || 'request' in t) &&
							((i.request = null == t ? void 0 : t.request),
							(i.openingDeadlineMS = null == t ? void 0 : t.openingDeadlineMS),
							(i.signal = null == t ? void 0 : t.signal)),
						this.connected)
					)
						throw new I();
					let o = ei(null == i ? void 0 : i.signal);
					if ((null == (n = this.abortController) || n.abort(), (this.abortController = o), o.signal.aborted))
						throw new M('Connection was aborted');
					return (
						null == (r = this.provider) || r.closeConnection(),
						(this.provider = this.createProvider(e)),
						o.signal.addEventListener('abort', () => {
							var e;
							null == (e = this.provider) || e.closeConnection(), (this.provider = null);
						}),
						this.tracker.trackConnectionStarted(),
						this.provider.connect(this.createConnectRequest(null == i ? void 0 : i.request), {
							openingDeadlineMS: null == i ? void 0 : i.openingDeadlineMS,
							signal: o.signal,
						})
					);
				}
				restoreConnection(e) {
					var t, n;
					return T(this, void 0, void 0, function* () {
						this.tracker.trackConnectionRestoringStarted();
						let r = ei(null == e ? void 0 : e.signal);
						if ((null == (t = this.abortController) || t.abort(), (this.abortController = r), r.signal.aborted))
							return void this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
						let [i, o] = yield Promise.all([
							this.bridgeConnectionStorage.storedConnectionType(),
							this.walletsList.getEmbeddedWallet(),
						]);
						if (r.signal.aborted)
							return void this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
						let s = null;
						try {
							switch (i) {
								case 'http':
									s = yield ed.fromStorage(this.dappSettings.storage);
									break;
								case 'injected':
									s = yield eg.fromStorage(this.dappSettings.storage);
									break;
								default:
									if (!o) return;
									s = this.createProvider(o);
							}
						} catch (e) {
							this.tracker.trackConnectionRestoringError('Provider is not restored'),
								yield this.bridgeConnectionStorage.removeConnection(),
								null == s || s.closeConnection(),
								(s = null);
							return;
						}
						if (r.signal.aborted) {
							null == s || s.closeConnection(),
								this.tracker.trackConnectionRestoringError('Connection restoring was aborted');
							return;
						}
						if (!s) {
							ea('Provider is not restored'), this.tracker.trackConnectionRestoringError('Provider is not restored');
							return;
						}
						null == (n = this.provider) || n.closeConnection(),
							(this.provider = s),
							s.listen(this.walletEventsListener.bind(this));
						let a = () => {
							this.tracker.trackConnectionRestoringError('Connection restoring was aborted'),
								null == s || s.closeConnection(),
								(s = null);
						};
						return (
							r.signal.addEventListener('abort', a),
							Promise.race([
								eo(
									(t) =>
										T(this, void 0, void 0, function* () {
											yield null == s
												? void 0
												: s.restoreConnection({
														openingDeadlineMS: null == e ? void 0 : e.openingDeadlineMS,
														signal: t.signal,
													}),
												r.signal.removeEventListener('abort', a),
												this.connected
													? this.tracker.trackConnectionRestoringCompleted(this.wallet)
													: this.tracker.trackConnectionRestoringError('Connection restoring failed');
										}),
									{ attempts: Number.MAX_SAFE_INTEGER, delayMs: 2e3, signal: null == e ? void 0 : e.signal },
								),
								new Promise((e) => setTimeout(() => e(), 12e3)),
							])
						);
					});
				}
				sendTransaction(e, t) {
					return T(this, void 0, void 0, function* () {
						let n = {};
						'function' == typeof t
							? (n.onRequestSent = t)
							: ((n.onRequestSent = null == t ? void 0 : t.onRequestSent), (n.signal = null == t ? void 0 : t.signal));
						let r = ei(null == n ? void 0 : n.signal);
						if (r.signal.aborted) throw new M('Transaction sending was aborted');
						this.checkConnection();
						let i = e.messages.length,
							o = e.messages.some((e) => e.extraCurrency && Object.keys(e.extraCurrency).length > 0);
						!(function (e, t) {
							let n = e.includes('SendTransaction'),
								r = eS(e, 'SendTransaction');
							if (!n && !r) throw new q("Wallet doesn't support SendTransaction feature.");
							if (t.requireExtraCurrencies && (!r || !r.extraCurrencySupported))
								throw new q(
									'Wallet is not able to handle such SendTransaction request. Extra currencies support is required.',
								);
							if (r && void 0 !== r.maxMessages) {
								if (r.maxMessages < t.requiredMessagesNumber)
									throw new q(
										`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`,
									);
								return;
							}
							!(function (...e) {
								try {
									console.warn('[TON_CONNECT_SDK]', ...e);
								} catch (e) {}
							})(
								"Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.",
							);
						})(this.wallet.device.features, { requiredMessagesNumber: i, requireExtraCurrencies: o }),
							this.tracker.trackTransactionSentForSignature(this.wallet, e);
						let { validUntil: s, messages: a } = e,
							l = _(e, ['validUntil', 'messages']),
							c = e.from || this.account.address,
							u = e.network || this.account.chain,
							d = yield this.provider.sendRequest(
								J.convertToRpcRequest(
									Object.assign(Object.assign({}, l), {
										from: c,
										network: u,
										valid_until: s,
										messages: a.map((e) => {
											var { extraCurrency: t } = e;
											return Object.assign(Object.assign({}, _(e, ['extraCurrency'])), { extra_currency: t });
										}),
									}),
								),
								{ onRequestSent: n.onRequestSent, signal: r.signal },
							);
						if (J.isError(d))
							return (
								this.tracker.trackTransactionSigningFailed(this.wallet, e, d.error.message, d.error.code),
								J.parseAndThrowError(d)
							);
						let h = J.convertFromRpcResponse(d);
						return this.tracker.trackTransactionSigned(this.wallet, e, h), h;
					});
				}
				disconnect(e) {
					var t;
					return T(this, void 0, void 0, function* () {
						if (!this.connected) throw new U();
						let n = ei(null == e ? void 0 : e.signal),
							r = this.abortController;
						if (((this.abortController = n), n.signal.aborted)) throw new M('Disconnect was aborted');
						this.onWalletDisconnected('dapp'),
							yield null == (t = this.provider) ? void 0 : t.disconnect({ signal: n.signal }),
							null == r || r.abort();
					});
				}
				pauseConnection() {
					var e;
					(null == (e = this.provider) ? void 0 : e.type) === 'http' && this.provider.pause();
				}
				unPauseConnection() {
					var e;
					return (null == (e = this.provider) ? void 0 : e.type) !== 'http'
						? Promise.resolve()
						: this.provider.unPause();
				}
				addWindowFocusAndBlurSubscriptions() {
					let e = (function () {
						if ('undefined' != typeof document) return document;
					})();
					if (e)
						try {
							e.addEventListener('visibilitychange', () => {
								e.hidden ? this.pauseConnection() : this.unPauseConnection().catch();
							});
						} catch (e) {
							ea('Cannot subscribe to the document.visibilitychange: ', e);
						}
				}
				createProvider(e) {
					let t;
					return (
						(t =
							!Array.isArray(e) && 'jsBridgeKey' in e
								? new eg(this.dappSettings.storage, e.jsBridgeKey)
								: new ed(this.dappSettings.storage, e)).listen(this.walletEventsListener.bind(this)),
						t
					);
				}
				walletEventsListener(e) {
					switch (e.event) {
						case 'connect':
							this.onWalletConnected(e.payload);
							break;
						case 'connect_error':
							this.tracker.trackConnectionError(e.payload.message, e.payload.code);
							let t = z.parseError(e.payload);
							this.onWalletConnectError(t);
							break;
						case 'disconnect':
							this.onWalletDisconnected('wallet');
					}
				}
				onWalletConnected(e) {
					var t;
					let n = e.items.find((e) => 'ton_addr' === e.name),
						r = e.items.find((e) => 'ton_proof' === e.name);
					if (!n) throw new M('ton_addr connection item was not found');
					if (!ex(e.device.features, this.walletsRequiredFeatures)) {
						null == (t = this.provider) || t.disconnect(),
							this.onWalletConnectError(
								new $('Wallet does not support required features', { cause: { connectEvent: e } }),
							);
						return;
					}
					let i = {
						device: e.device,
						provider: this.provider.type,
						account: {
							address: n.address,
							chain: n.network,
							walletStateInit: n.walletStateInit,
							publicKey: n.publicKey,
						},
					};
					r && (i.connectItems = { tonProof: r }), (this.wallet = i), this.tracker.trackConnectionCompleted(i);
				}
				onWalletConnectError(e) {
					if ((this.statusChangeErrorSubscriptions.forEach((t) => t(e)), es(e), e instanceof L || e instanceof P))
						throw (ea(e), e);
				}
				onWalletDisconnected(e) {
					this.tracker.trackDisconnection(this.wallet, e), (this.wallet = null);
				}
				checkConnection() {
					if (!this.connected) throw new U();
				}
				createConnectRequest(e) {
					let t = [{ name: 'ton_addr' }];
					return (
						(null == e ? void 0 : e.tonProof) && t.push({ name: 'ton_proof', payload: e.tonProof }),
						{ manifestUrl: this.dappSettings.manifestUrl, items: t }
					);
				}
			}
			function eB(e, t = !1) {
				let { wc: n, hex: r } = (function (e) {
						if (!e.includes(':')) throw new F(`Wrong address ${e}. Address must include ":".`);
						let t = e.split(':');
						if (2 !== t.length) throw new F(`Wrong address ${e}. Address must include ":" only once.`);
						let n = parseInt(t[0]);
						if (0 !== n && -1 !== n) throw new F(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
						let r = t[1];
						if ((null == r ? void 0 : r.length) !== 64)
							throw new F(
								`Wrong address ${e}. Hex part must be 64bytes length, but ${null == r ? void 0 : r.length} received.`,
							);
						return {
							wc: n,
							hex: (function (e) {
								let t = (e = e.toLowerCase()).length;
								if (t % 2 != 0) throw new K('Hex string must have length a multiple of 2: ' + e);
								let n = t / 2,
									r = new Uint8Array(n);
								for (let t = 0; t < n; t++) {
									let n = 2 * t,
										i = e.substring(n, n + 2);
									if (!eF.hasOwnProperty(i)) throw new K('Invalid hex character: ' + i);
									r[t] = eF[i];
								}
								return r;
							})(r),
						};
					})(e),
					i = 81;
				t && (i |= 128);
				let o = new Int8Array(34);
				(o[0] = i), (o[1] = n), o.set(r, 2);
				let s = new Uint8Array(36);
				return (
					s.set(o),
					s.set(
						(function (e) {
							let t = 0,
								n = new Uint8Array(e.length + 2);
							for (let r of (n.set(e), n)) {
								let e = 128;
								for (; e > 0; ) (t <<= 1), r & e && (t += 1), (e >>= 1), t > 65535 && ((t &= 65535), (t ^= 4129));
							}
							return new Uint8Array([Math.floor(t / 256), t % 256]);
						})(o),
						34,
					),
					S.encode(s).replace(/\+/g, '-').replace(/\//g, '_')
				);
			}
			(ej.walletsList = new eC()),
				(ej.isWalletInjected = (e) => eg.isWalletInjected(e)),
				(ej.isInsideWalletBrowser = (e) => eg.isInsideWalletBrowser(e));
			let eF = {};
			for (let e = 0; e <= 255; e++) {
				let t = e.toString(16);
				t.length < 2 && (t = '0' + t), (eF[t] = e);
			}
			var eK = n(9277),
				eH = n(6590),
				eQ = n(6001),
				eV = n(7595),
				ez = Object.defineProperty,
				eG = Object.defineProperties,
				eZ = Object.getOwnPropertyDescriptors,
				eY = Object.getOwnPropertySymbols,
				eJ = Object.prototype.hasOwnProperty,
				eX = Object.prototype.propertyIsEnumerable,
				e1 = (e, t, n) =>
					t in e ? ez(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
				e0 = (e, t) => {
					for (var n in t || (t = {})) eJ.call(t, n) && e1(e, n, t[n]);
					if (eY) for (var n of eY(t)) eX.call(t, n) && e1(e, n, t[n]);
					return e;
				},
				e2 = (e, t) => eG(e, eZ(t)),
				e5 = (e, t, n) => (e1(e, 'symbol' != typeof t ? t + '' : t, n), n),
				e4 = (e, t, n) =>
					new Promise((r, i) => {
						var o = (e) => {
								try {
									a(n.next(e));
								} catch (e) {
									i(e);
								}
							},
							s = (e) => {
								try {
									a(n.throw(e));
								} catch (e) {
									i(e);
								}
							},
							a = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(o, s));
						a((n = n.apply(e, t)).next());
					});
			let e3 = {},
				e6 = Symbol('solid-proxy'),
				e8 = Symbol('solid-track'),
				e9 = { equals: (e, t) => e === t },
				e7 = tk,
				te = { owned: null, cleanups: null, context: null, owner: null },
				tt = {};
			var tn = null;
			let tr = null,
				ti = null,
				to = null,
				ts = 0;
			function ta(e, t) {
				let n = tr,
					r = tn,
					i = 0 === e.length,
					o = i ? te : { owned: null, cleanups: null, context: null, owner: void 0 === t ? r : t },
					s = i ? e : () => e(() => tf(() => tO(o)));
				(tn = o), (tr = null);
				try {
					return tS(s, !0);
				} finally {
					(tr = n), (tn = r);
				}
			}
			function tl(e, t) {
				let n = {
					value: e,
					observers: null,
					observerSlots: null,
					comparator: (t = t ? Object.assign({}, e9, t) : e9).equals || void 0,
				};
				return [tv.bind(n), (e) => ('function' == typeof e && (e = e(n.value)), tw(n, e))];
			}
			function tc(e, t, n) {
				tb(tC(e, t, !0, 1));
			}
			function tu(e, t, n) {
				tb(tC(e, t, !1, 1));
			}
			function td(e, t, n) {
				e7 = tE;
				let r = tC(e, t, !1, 1);
				(r.user = !0), to ? to.push(r) : tb(r);
			}
			function th(e, t, n) {
				n = n ? Object.assign({}, e9, n) : e9;
				let r = tC(e, t, !0, 0);
				return (r.observers = null), (r.observerSlots = null), (r.comparator = n.equals || void 0), tb(r), tv.bind(r);
			}
			function tf(e) {
				if (null === tr) return e();
				let t = tr;
				tr = null;
				try {
					return e();
				} finally {
					tr = t;
				}
			}
			function tp(e) {
				return null === tn || (null === tn.cleanups ? (tn.cleanups = [e]) : tn.cleanups.push(e)), e;
			}
			function tg(e, t) {
				var n, r;
				let i = Symbol('context');
				return {
					id: i,
					Provider:
						((n = i),
						function (e) {
							let t;
							return tu(() => (t = tf(() => ((tn.context = { [n]: e.value }), ty(() => e.children)))), void 0), t;
						}),
					defaultValue: e,
				};
			}
			function tm(e) {
				let t;
				return void 0 !==
					(t = (function e(t, n) {
						return t ? (t.context && void 0 !== t.context[n] ? t.context[n] : e(t.owner, n)) : void 0;
					})(tn, e.id))
					? t
					: e.defaultValue;
			}
			function ty(e) {
				let t = th(e),
					n = th(() =>
						(function e(t) {
							if ('function' == typeof t && !t.length) return e(t());
							if (Array.isArray(t)) {
								let n = [];
								for (let r = 0; r < t.length; r++) {
									let i = e(t[r]);
									Array.isArray(i) ? n.push.apply(n, i) : n.push(i);
								}
								return n;
							}
							return t;
						})(t()),
					);
				return (
					(n.toArray = () => {
						let e = n();
						return Array.isArray(e) ? e : null != e ? [e] : [];
					}),
					n
				);
			}
			function tv() {
				if (this.sources && this.state)
					if (1 === this.state) tb(this);
					else {
						let e = ti;
						(ti = null), tS(() => tR(this), !1), (ti = e);
					}
				if (tr) {
					let e = this.observers ? this.observers.length : 0;
					tr.sources
						? (tr.sources.push(this), tr.sourceSlots.push(e))
						: ((tr.sources = [this]), (tr.sourceSlots = [e])),
						this.observers
							? (this.observers.push(tr), this.observerSlots.push(tr.sources.length - 1))
							: ((this.observers = [tr]), (this.observerSlots = [tr.sources.length - 1]));
				}
				return this.value;
			}
			function tw(e, t, n) {
				let r = e.value;
				return (
					(!e.comparator || !e.comparator(r, t)) &&
						((e.value = t),
						e.observers &&
							e.observers.length &&
							tS(() => {
								for (let t = 0; t < e.observers.length; t += 1) {
									let n = e.observers[t];
									n.state ||
										(n.pure ? ti.push(n) : to.push(n),
										n.observers &&
											(function e(t) {
												for (let n = 0; n < t.observers.length; n += 1) {
													let r = t.observers[n];
													(r.state && 1) || ((r.state = 2), r.pure ? ti.push(r) : to.push(r), r.observers && e(r));
												}
											})(n)),
										(n.state = 1);
								}
								if (ti.length > 1e6) throw ((ti = []), Error());
							}, !1)),
					t
				);
			}
			function tb(e) {
				if (!e.fn) return;
				tO(e);
				let t = tn,
					n = tr,
					r = ts;
				(tr = tn = e),
					(function (e, t, n) {
						let r;
						try {
							r = e.fn(t);
						} catch (t) {
							e.pure && ((e.state = 1), e.owned && e.owned.forEach(tO), (e.owned = null)), tT(t);
						}
						(!e.updatedAt || e.updatedAt <= n) &&
							(null != e.updatedAt && 'observers' in e ? tw(e, r) : (e.value = r), (e.updatedAt = n));
					})(e, e.value, r),
					(tr = n),
					(tn = t);
			}
			function tC(e, t, n, r = 1, i) {
				let o = {
					fn: e,
					state: r,
					updatedAt: null,
					owned: null,
					sources: null,
					sourceSlots: null,
					cleanups: null,
					value: t,
					owner: tn,
					context: null,
					pure: n,
				};
				return null === tn || (tn !== te && (tn.owned ? tn.owned.push(o) : (tn.owned = [o]))), o;
			}
			function tx(e) {
				if (0 === e.state) return;
				if (2 === e.state) return tR(e);
				if (e.suspense && tf(e.suspense.inFallback)) return e.suspense.effects.push(e);
				let t = [e];
				for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < ts); ) (e.state || 0) && t.push(e);
				for (let n = t.length - 1; n >= 0; n--)
					if (1 === (e = t[n]).state) tb(e);
					else if (2 === e.state) {
						let n = ti;
						(ti = null), tS(() => tR(e, t[0]), !1), (ti = n);
					}
			}
			function tS(e, t) {
				if (ti) return e();
				let n = !1;
				t || (ti = []), to ? (n = !0) : (to = []), ts++;
				try {
					let t = e();
					return (
						(function (e) {
							if ((ti && (tk(ti), (ti = null)), e)) return;
							let t = to;
							(to = null), t.length && tS(() => e7(t), !1);
						})(n),
						t
					);
				} catch (e) {
					n || (to = null), (ti = null), tT(e);
				}
			}
			function tk(e) {
				for (let t = 0; t < e.length; t++) tx(e[t]);
			}
			function tE(e) {
				let t,
					n = 0;
				for (t = 0; t < e.length; t++) {
					let r = e[t];
					r.user ? (e[n++] = r) : tx(r);
				}
				for (e3.context && (e3.context = void 0), t = 0; t < n; t++) tx(e[t]);
			}
			function tR(e, t) {
				e.state = 0;
				for (let n = 0; n < e.sources.length; n += 1) {
					let r = e.sources[n];
					r.sources && (1 === r.state ? r !== t && tx(r) : (2 !== r.state && 1) || tR(r, t));
				}
			}
			function tO(e) {
				let t;
				if (e.sources)
					for (; e.sources.length; ) {
						let t = e.sources.pop(),
							n = e.sourceSlots.pop(),
							r = t.observers;
						if (r && r.length) {
							let e = r.pop(),
								i = t.observerSlots.pop();
							n < r.length && ((e.sourceSlots[i] = n), (r[n] = e), (t.observerSlots[n] = i));
						}
					}
				if (e.owned) {
					for (t = 0; t < e.owned.length; t++) tO(e.owned[t]);
					e.owned = null;
				}
				if (e.cleanups) {
					for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
					e.cleanups = null;
				}
				(e.state = 0), (e.context = null);
			}
			function t_(e) {
				return e instanceof Error || 'string' == typeof e ? e : Error('Unknown error');
			}
			function tT(e) {
				throw (e = t_(e));
			}
			let tM = Symbol('fallback');
			function tA(e) {
				for (let t = 0; t < e.length; t++) e[t]();
			}
			function tP(e, t) {
				return tf(() => e(t || {}));
			}
			function tL() {
				return !0;
			}
			let tI = {
				get: (e, t, n) => (t === e6 ? n : e.get(t)),
				has: (e, t) => t === e6 || e.has(t),
				set: tL,
				deleteProperty: tL,
				getOwnPropertyDescriptor: (e, t) => ({
					configurable: !0,
					enumerable: !0,
					get: () => e.get(t),
					set: tL,
					deleteProperty: tL,
				}),
				ownKeys: (e) => e.keys(),
			};
			function tU(e) {
				return (e = 'function' == typeof e ? e() : e) ? e : {};
			}
			function tN(...e) {
				let t = !1;
				for (let n = 0; n < e.length; n++) {
					let r = e[n];
					(t = t || (!!r && e6 in r)), (e[n] = 'function' == typeof r ? ((t = !0), th(r)) : r);
				}
				if (t)
					return new Proxy(
						{
							get(t) {
								for (let n = e.length - 1; n >= 0; n--) {
									let r = tU(e[n])[t];
									if (void 0 !== r) return r;
								}
							},
							has(t) {
								for (let n = e.length - 1; n >= 0; n--) if (t in tU(e[n])) return !0;
								return !1;
							},
							keys() {
								let t = [];
								for (let n = 0; n < e.length; n++) t.push(...Object.keys(tU(e[n])));
								return [...new Set(t)];
							},
						},
						tI,
					);
				let n = {};
				for (let t = e.length - 1; t >= 0; t--)
					if (e[t]) {
						let r = Object.getOwnPropertyDescriptors(e[t]);
						for (let t in r)
							t in n ||
								Object.defineProperty(n, t, {
									enumerable: !0,
									get() {
										for (let n = e.length - 1; n >= 0; n--) {
											let r = (e[n] || {})[t];
											if (void 0 !== r) return r;
										}
									},
								});
					}
				return n;
			}
			function tq(e, ...t) {
				let n = new Set(t.flat());
				if (e6 in e) {
					let r = t.map(
						(t) =>
							new Proxy(
								{
									get: (n) => (t.includes(n) ? e[n] : void 0),
									has: (n) => t.includes(n) && n in e,
									keys: () => t.filter((t) => t in e),
								},
								tI,
							),
					);
					return (
						r.push(
							new Proxy(
								{
									get: (t) => (n.has(t) ? void 0 : e[t]),
									has: (t) => !n.has(t) && t in e,
									keys: () => Object.keys(e).filter((e) => !n.has(e)),
								},
								tI,
							),
						),
						r
					);
				}
				let r = Object.getOwnPropertyDescriptors(e);
				return (
					t.push(Object.keys(r).filter((e) => !n.has(e))),
					t.map((t) => {
						let n = {};
						for (let i = 0; i < t.length; i++) {
							let o = t[i];
							o in e && Object.defineProperty(n, o, r[o] ? r[o] : { get: () => e[o], set: () => !0, enumerable: !0 });
						}
						return n;
					})
				);
			}
			function t$(e) {
				let t = 'fallback' in e && { fallback: () => e.fallback };
				return th(
					(function (e, t, n = {}) {
						let r = [],
							i = [],
							o = [],
							s = 0,
							a = t.length > 1 ? [] : null;
						return (
							tp(() => tA(o)),
							() => {
								let l = e() || [],
									c,
									u;
								return (
									l[e8],
									tf(() => {
										let e = l.length,
											t,
											h,
											f,
											p,
											g,
											m,
											y,
											v,
											w;
										if (0 === e)
											0 !== s && (tA(o), (o = []), (r = []), (i = []), (s = 0), a && (a = [])),
												n.fallback && ((r = [tM]), (i[0] = ta((e) => ((o[0] = e), n.fallback()))), (s = 1));
										else if (0 === s) {
											for (u = 0, i = Array(e); u < e; u++) (r[u] = l[u]), (i[u] = ta(d));
											s = e;
										} else {
											for (
												f = Array(e), p = Array(e), a && (g = Array(e)), m = 0, y = Math.min(s, e);
												m < y && r[m] === l[m];
												m++
											);
											for (y = s - 1, v = e - 1; y >= m && v >= m && r[y] === l[v]; y--, v--)
												(f[v] = i[y]), (p[v] = o[y]), a && (g[v] = a[y]);
											for (t = new Map(), h = Array(v + 1), u = v; u >= m; u--)
												(w = l[u]), (c = t.get(w)), (h[u] = void 0 === c ? -1 : c), t.set(w, u);
											for (c = m; c <= y; c++)
												(w = r[c]),
													void 0 !== (u = t.get(w)) && -1 !== u
														? ((f[u] = i[c]), (p[u] = o[c]), a && (g[u] = a[c]), (u = h[u]), t.set(w, u))
														: o[c]();
											for (u = m; u < e; u++)
												u in f ? ((i[u] = f[u]), (o[u] = p[u]), a && ((a[u] = g[u]), a[u](u))) : (i[u] = ta(d));
											(i = i.slice(0, (s = e))), (r = l.slice(0));
										}
										return i;
									})
								);
								function d(e) {
									if (((o[u] = e), a)) {
										let [e, n] = tl(u);
										return (a[u] = n), t(l[u], e);
									}
									return t(l[u]);
								}
							}
						);
					})(() => e.each, e.children, t || void 0),
				);
			}
			function tD(e) {
				let t = !1,
					n = e.keyed,
					r = th(() => e.when, void 0, { equals: (e, n) => (t ? e === n : !e == !n) });
				return th(
					() => {
						let i = r();
						if (i) {
							let r = e.children,
								o = 'function' == typeof r && r.length > 0;
							return (t = n || o), o ? tf(() => r(i)) : r;
						}
						return e.fallback;
					},
					void 0,
					void 0,
				);
			}
			function tW(e) {
				let t = !1,
					n = !1,
					r = ty(() => e.children),
					i = th(
						() => {
							let e = r();
							Array.isArray(e) || (e = [e]);
							for (let t = 0; t < e.length; t++) {
								let r = e[t].when;
								if (r) return (n = !!e[t].keyed), [t, r, e[t]];
							}
							return [-1];
						},
						void 0,
						{ equals: (e, n) => e[0] === n[0] && (t ? e[1] === n[1] : !e[1] == !n[1]) && e[2] === n[2] },
					);
				return th(
					() => {
						let [r, o, s] = i();
						if (r < 0) return e.fallback;
						let a = s.children,
							l = 'function' == typeof a && a.length > 0;
						return (t = n || l), l ? tf(() => a(o)) : a;
					},
					void 0,
					void 0,
				);
			}
			function tj(e) {
				return e;
			}
			let tB = new Set([
					'className',
					'value',
					'readOnly',
					'formNoValidate',
					'isMap',
					'noModule',
					'playsInline',
					'allowfullscreen',
					'async',
					'autofocus',
					'autoplay',
					'checked',
					'controls',
					'default',
					'disabled',
					'formnovalidate',
					'hidden',
					'indeterminate',
					'ismap',
					'loop',
					'multiple',
					'muted',
					'nomodule',
					'novalidate',
					'open',
					'playsinline',
					'readonly',
					'required',
					'reversed',
					'seamless',
					'selected',
				]),
				tF = new Set(['innerHTML', 'textContent', 'innerText', 'children']),
				tK = Object.assign(Object.create(null), { className: 'class', htmlFor: 'for' }),
				tH = Object.assign(Object.create(null), {
					class: 'className',
					formnovalidate: 'formNoValidate',
					ismap: 'isMap',
					nomodule: 'noModule',
					playsinline: 'playsInline',
					readonly: 'readOnly',
				}),
				tQ = new Set([
					'beforeinput',
					'click',
					'dblclick',
					'contextmenu',
					'focusin',
					'focusout',
					'input',
					'keydown',
					'keyup',
					'mousedown',
					'mousemove',
					'mouseout',
					'mouseover',
					'mouseup',
					'pointerdown',
					'pointermove',
					'pointerout',
					'pointerover',
					'pointerup',
					'touchend',
					'touchmove',
					'touchstart',
				]),
				tV = new Set([
					'altGlyph',
					'altGlyphDef',
					'altGlyphItem',
					'animate',
					'animateColor',
					'animateMotion',
					'animateTransform',
					'circle',
					'clipPath',
					'color-profile',
					'cursor',
					'defs',
					'desc',
					'ellipse',
					'feBlend',
					'feColorMatrix',
					'feComponentTransfer',
					'feComposite',
					'feConvolveMatrix',
					'feDiffuseLighting',
					'feDisplacementMap',
					'feDistantLight',
					'feFlood',
					'feFuncA',
					'feFuncB',
					'feFuncG',
					'feFuncR',
					'feGaussianBlur',
					'feImage',
					'feMerge',
					'feMergeNode',
					'feMorphology',
					'feOffset',
					'fePointLight',
					'feSpecularLighting',
					'feSpotLight',
					'feTile',
					'feTurbulence',
					'filter',
					'font',
					'font-face',
					'font-face-format',
					'font-face-name',
					'font-face-src',
					'font-face-uri',
					'foreignObject',
					'g',
					'glyph',
					'glyphRef',
					'hkern',
					'image',
					'line',
					'linearGradient',
					'marker',
					'mask',
					'metadata',
					'missing-glyph',
					'mpath',
					'path',
					'pattern',
					'polygon',
					'polyline',
					'radialGradient',
					'rect',
					'set',
					'stop',
					'svg',
					'switch',
					'symbol',
					'text',
					'textPath',
					'tref',
					'tspan',
					'use',
					'view',
					'vkern',
				]),
				tz = { xlink: 'http://www.w3.org/1999/xlink', xml: 'http://www.w3.org/XML/1998/namespace' },
				tG = '_$DX_DELEGATE';
			function tZ(e, t, n) {
				if ('undefined' == typeof window) return null;
				let r = document.createElement('template');
				r.innerHTML = e;
				let i = r.content.firstChild;
				return n && (i = i.firstChild), i;
			}
			function tY(e, t, n) {
				null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
			}
			function tJ(e, t) {
				null == t ? e.removeAttribute('class') : (e.className = t);
			}
			function tX(e, t = {}, n, r) {
				let i = {};
				return (
					r || tu(() => (i.children = t3(e, t.children, i.children))),
					tu(() => t.ref && t.ref(e)),
					tu(() =>
						(function (e, t, n, r, i = {}, o = !1) {
							for (let r in (t || (t = {}), i))
								if (!(r in t)) {
									if ('children' === r) continue;
									i[r] = t5(e, r, null, i[r], n, o);
								}
							for (let s in t) {
								if ('children' === s) {
									r || t3(e, t.children);
									continue;
								}
								let a = t[s];
								i[s] = t5(e, s, a, i[s], n, o);
							}
						})(e, t, n, !0, i, !0),
					),
					i
				);
			}
			function t1(e, t, n) {
				return tf(() => e(t, n));
			}
			function t0(e, t, n, r) {
				if ((void 0 === n || r || (r = []), 'function' != typeof t)) return t3(e, t, r, n);
				tu((r) => t3(e, t(), r, n), r);
			}
			function t2(e, t, n) {
				let r = t.trim().split(/\s+/);
				for (let t = 0, i = r.length; t < i; t++) e.classList.toggle(r[t], n);
			}
			function t5(e, t, n, r, i, o) {
				let s, a, l;
				if ('style' === t) {
					let t, i;
					var c = n,
						u = r;
					if (!c) return u ? tY(e, 'style') : c;
					let o = e.style;
					if ('string' == typeof c) return (o.cssText = c);
					for (i in ('string' == typeof u && (o.cssText = u = void 0), u || (u = {}), c || (c = {}), u))
						null == c[i] && o.removeProperty(i), delete u[i];
					for (i in c) (t = c[i]) !== u[i] && (o.setProperty(i, t), (u[i] = t));
					return u;
				}
				if ('classList' === t)
					return (function (e, t, n = {}) {
						let r,
							i,
							o = Object.keys(t || {}),
							s = Object.keys(n);
						for (r = 0, i = s.length; r < i; r++) {
							let i = s[r];
							i && 'undefined' !== i && !t[i] && (t2(e, i, !1), delete n[i]);
						}
						for (r = 0, i = o.length; r < i; r++) {
							let i = o[r],
								s = !!t[i];
							i && 'undefined' !== i && n[i] !== s && s && (t2(e, i, !0), (n[i] = s));
						}
						return n;
					})(e, n, r);
				if (n === r) return r;
				if ('ref' === t) o || n(e);
				else if ('on:' === t.slice(0, 3)) {
					let i = t.slice(3);
					r && e.removeEventListener(i, r), n && e.addEventListener(i, n);
				} else if ('oncapture:' === t.slice(0, 10)) {
					let i = t.slice(10);
					r && e.removeEventListener(i, r, !0), n && e.addEventListener(i, n, !0);
				} else if ('on' === t.slice(0, 2)) {
					let i = t.slice(2).toLowerCase(),
						o = tQ.has(i);
					if (!o && r) {
						let t = Array.isArray(r) ? r[0] : r;
						e.removeEventListener(i, t);
					}
					if (o || n) {
						if (o) Array.isArray(n) ? ((e[`$$${i}`] = n[0]), (e[`$$${i}Data`] = n[1])) : (e[`$$${i}`] = n);
						else if (Array.isArray(n)) {
							let t = n[0];
							e.addEventListener(i, (n[0] = (r) => t.call(e, n[1], r)));
						} else e.addEventListener(i, n);
						o &&
							(function (e, t = window.document) {
								let n = t[tG] || (t[tG] = new Set());
								for (let r = 0, i = e.length; r < i; r++) {
									let i = e[r];
									n.has(i) || (n.add(i), t.addEventListener(i, t4));
								}
							})([i]);
					}
				} else if ((l = tF.has(t)) || (!i && (tH[t] || (a = tB.has(t)))) || (s = e.nodeName.includes('-')))
					'class' === t || 'className' === t
						? tJ(e, n)
						: !s || a || l
							? (e[tH[t] || t] = n)
							: (e[t.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase())] = n);
				else {
					let r = i && t.indexOf(':') > -1 && tz[t.split(':')[0]];
					r ? (null == n ? e.removeAttributeNS(r, t) : e.setAttributeNS(r, t, n)) : tY(e, tK[t] || t, n);
				}
				return n;
			}
			function t4(e) {
				let t = `$$${e.type}`,
					n = (e.composedPath && e.composedPath()[0]) || e.target;
				for (
					e.target !== n && Object.defineProperty(e, 'target', { configurable: !0, value: n }),
						Object.defineProperty(e, 'currentTarget', { configurable: !0, get: () => n || document }),
						e3.registry &&
							!e3.done &&
							((e3.done = !0),
							document.querySelectorAll('[id^=pl-]').forEach((t) => {
								for (; t && 8 !== t.nodeType && t.nodeValue !== 'pl-' + e; ) {
									let e = t.nextSibling;
									t.remove(), (t = e);
								}
								t && t.remove();
							}));
					n;

				) {
					let r = n[t];
					if (r && !n.disabled) {
						let i = n[`${t}Data`];
						if ((void 0 !== i ? r.call(n, i, e) : r.call(n, e), e.cancelBubble)) return;
					}
					n = n._$host || n.parentNode || n.host;
				}
			}
			function t3(e, t, n, r, i) {
				for (e3.context && !n && (n = [...e.childNodes]); 'function' == typeof n; ) n = n();
				if (t === n) return n;
				let o = typeof t,
					s = void 0 !== r;
				if (((e = (s && n[0] && n[0].parentNode) || e), 'string' === o || 'number' === o)) {
					if (e3.context) return n;
					if (('number' === o && (t = t.toString()), s)) {
						let i = n[0];
						i && 3 === i.nodeType ? (i.data = t) : (i = document.createTextNode(t)), (n = t8(e, n, r, i));
					} else n = '' !== n && 'string' == typeof n ? (e.firstChild.data = t) : (e.textContent = t);
				} else if (null == t || 'boolean' === o) {
					if (e3.context) return n;
					n = t8(e, n, r);
				} else if ('function' === o)
					return (
						tu(() => {
							let i = t();
							for (; 'function' == typeof i; ) i = i();
							n = t3(e, i, n, r);
						}),
						() => n
					);
				else if (Array.isArray(t)) {
					let o = [],
						a = n && Array.isArray(n);
					if (
						(function e(t, n, r, i) {
							let o = !1;
							for (let s = 0, a = n.length; s < a; s++) {
								let a = n[s],
									l = r && r[s];
								if (a instanceof Node) t.push(a);
								else if (null == a || !0 === a || !1 === a);
								else if (Array.isArray(a)) o = e(t, a, l) || o;
								else if ('function' == typeof a)
									if (i) {
										for (; 'function' == typeof a; ) a = a();
										o = e(t, Array.isArray(a) ? a : [a], Array.isArray(l) ? l : [l]) || o;
									} else t.push(a), (o = !0);
								else {
									let e = String(a);
									l && 3 === l.nodeType && l.data === e ? t.push(l) : t.push(document.createTextNode(e));
								}
							}
							return o;
						})(o, t, n, i)
					)
						return tu(() => (n = t3(e, o, n, r, !0))), () => n;
					if (e3.context) {
						if (!o.length) return n;
						for (let e = 0; e < o.length; e++) if (o[e].parentNode) return (n = o);
					}
					if (0 === o.length) {
						if (((n = t8(e, n, r)), s)) return n;
					} else
						a
							? 0 === n.length
								? t6(e, o, r)
								: (function (e, t, n) {
										let r = n.length,
											i = t.length,
											o = r,
											s = 0,
											a = 0,
											l = t[i - 1].nextSibling,
											c = null;
										for (; s < i || a < o; ) {
											if (t[s] === n[a]) {
												s++, a++;
												continue;
											}
											for (; t[i - 1] === n[o - 1]; ) i--, o--;
											if (i === s) {
												let t = o < r ? (a ? n[a - 1].nextSibling : n[o - a]) : l;
												for (; a < o; ) e.insertBefore(n[a++], t);
											} else if (o === a) for (; s < i; ) (c && c.has(t[s])) || t[s].remove(), s++;
											else if (t[s] === n[o - 1] && n[a] === t[i - 1]) {
												let r = t[--i].nextSibling;
												e.insertBefore(n[a++], t[s++].nextSibling), e.insertBefore(n[--o], r), (t[i] = n[o]);
											} else {
												if (!c) {
													c = new Map();
													let e = a;
													for (; e < o; ) c.set(n[e], e++);
												}
												let r = c.get(t[s]);
												if (null != r)
													if (a < r && r < o) {
														let l = s,
															u = 1,
															d;
														for (; ++l < i && l < o && null != (d = c.get(t[l])) && d === r + u; ) u++;
														if (u > r - a) {
															let i = t[s];
															for (; a < r; ) e.insertBefore(n[a++], i);
														} else e.replaceChild(n[a++], t[s++]);
													} else s++;
												else t[s++].remove();
											}
										}
									})(e, n, o)
							: (n && t8(e), t6(e, o));
					n = o;
				} else if (t instanceof Node) {
					if (e3.context && t.parentNode) return (n = s ? [t] : t);
					if (Array.isArray(n)) {
						if (s) return (n = t8(e, n, r, t));
						t8(e, n, null, t);
					} else null != n && '' !== n && e.firstChild ? e.replaceChild(t, e.firstChild) : e.appendChild(t);
					n = t;
				}
				return n;
			}
			function t6(e, t, n = null) {
				for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
			}
			function t8(e, t, n, r) {
				if (void 0 === n) return (e.textContent = '');
				let i = r || document.createTextNode('');
				if (t.length) {
					let r = !1;
					for (let o = t.length - 1; o >= 0; o--) {
						let s = t[o];
						if (i !== s) {
							let t = s.parentNode === e;
							r || o ? t && s.remove() : t ? e.replaceChild(i, s) : e.insertBefore(i, n);
						} else r = !0;
					}
				} else e.insertBefore(i, n);
				return [i];
			}
			function t9(e, t = !1) {
				return t ? document.createElementNS('http://www.w3.org/2000/svg', e) : document.createElement(e);
			}
			function t7(e) {
				let { useShadow: t } = e,
					n = document.createTextNode(''),
					r = e.mount || document.body;
				function i() {
					if (!e3.context) return () => e.children;
					{
						let [t, n] = tl(!1);
						return queueMicrotask(() => n(!0)), () => t() && e.children;
					}
				}
				if (r instanceof HTMLHeadElement) {
					let [e, t] = tl(!1),
						n = () => t(!0);
					ta((t) => t0(r, () => (e() ? t() : i()()), null)),
						tp(() => {
							e3.context ? queueMicrotask(n) : n();
						});
				} else {
					let o = t9(e.isSVG ? 'g' : 'div', e.isSVG),
						s = t && o.attachShadow ? o.attachShadow({ mode: 'open' }) : o;
					Object.defineProperty(o, '_$host', { get: () => n.parentNode, configurable: !0 }),
						t0(s, i()),
						r.appendChild(o),
						e.ref && e.ref(o),
						tp(() => r.removeChild(o));
				}
				return n;
			}
			function ne(e) {
				let [t, n] = tq(e, ['component']),
					r = th(() => t.component);
				return th(() => {
					let e = r();
					switch (typeof e) {
						case 'function':
							return tf(() => e(n));
						case 'string':
							let t,
								i,
								o = tV.has(e),
								s = e3.context
									? e3.context &&
										(t = e3.registry.get(
											(i = (function () {
												let e = e3.context;
												return `${e.id}${e.count++}`;
											})()),
										))
										? (e3.completed && e3.completed.add(t), e3.registry.delete(i), t)
										: (void 0).cloneNode(!0)
									: t9(e, o);
							return tX(s, n, o), s;
					}
				});
			}
			var nt = ((e) => ((e.DARK = 'DARK'), (e.LIGHT = 'LIGHT'), e))(nt || {});
			let nn = { data: '' },
				nr = (e) =>
					'object' == typeof window
						? (
								(e ? e.querySelector('#_goober') : window._goober) ||
								Object.assign((e || document.head).appendChild(document.createElement('style')), {
									innerHTML: ' ',
									id: '_goober',
								})
							).firstChild
						: e || nn,
				ni = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
				no = /\/\*[^]*?\*\/|  +/g,
				ns = /\n+/g,
				na = (e, t) => {
					let n = '',
						r = '',
						i = '';
					for (let o in e) {
						let s = e[o];
						'@' == o[0]
							? 'i' == o[1]
								? (n = o + ' ' + s + ';')
								: (r += 'f' == o[1] ? na(s, o) : o + '{' + na(s, 'k' == o[1] ? '' : t) + '}')
							: 'object' == typeof s
								? (r += na(
										s,
										t
											? t.replace(/([^,])+/g, (e) =>
													o.replace(/(^:.*)|([^,])+/g, (t) => (/&/.test(t) ? t.replace(/&/g, e) : e ? e + ' ' + t : t)),
												)
											: o,
									))
								: null != s &&
									((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, '-$&').toLowerCase()),
									(i += na.p ? na.p(o, s) : o + ':' + s + ';'));
					}
					return n + (t && i ? t + '{' + i + '}' : i) + r;
				},
				nl = {},
				nc = (e) => {
					if ('object' == typeof e) {
						let t = '';
						for (let n in e) t += n + nc(e[n]);
						return t;
					}
					return e;
				},
				nu = (e, t, n, r, i) => {
					let o = nc(e),
						s =
							nl[o] ||
							(nl[o] = ((e) => {
								let t = 0,
									n = 11;
								for (; t < e.length; ) n = (101 * n + e.charCodeAt(t++)) >>> 0;
								return 'go' + n;
							})(o));
					if (!nl[s]) {
						let t =
							o !== e
								? e
								: ((e) => {
										let t,
											n,
											r = [{}];
										for (; (t = ni.exec(e.replace(no, ''))); )
											t[4]
												? r.shift()
												: t[3]
													? ((n = t[3].replace(ns, ' ').trim()), r.unshift((r[0][n] = r[0][n] || {})))
													: (r[0][t[1]] = t[2].replace(ns, ' ').trim());
										return r[0];
									})(e);
						nl[s] = na(i ? { ['@keyframes ' + s]: t } : t, n ? '' : '.' + s);
					}
					let a = n && nl.g ? nl.g : null;
					return (
						n && (nl.g = nl[s]),
						((e, t, n, r) => {
							r ? (t.data = t.data.replace(r, e)) : -1 === t.data.indexOf(e) && (t.data = n ? e + t.data : t.data + e);
						})(nl[s], t, r, a),
						s
					);
				},
				nd = (e, t, n) =>
					e.reduce((e, r, i) => {
						let o = t[i];
						if (o && o.call) {
							let e = o(n),
								t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
							o = t ? '.' + t : e && 'object' == typeof e ? (e.props ? '' : na(e, '')) : !1 === e ? '' : e;
						}
						return e + r + (null == o ? '' : o);
					}, '');
			function nh(e) {
				let t = this || {},
					n = e.call ? e(t.p) : e;
				return nu(
					n.unshift
						? n.raw
							? nd(n, [].slice.call(arguments, 1), t.p)
							: n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {})
						: n,
					nr(t.target),
					t.g,
					t.o,
					t.k,
				);
			}
			nh.bind({ g: 1 });
			let nf = nh.bind({ k: 1 }),
				np = tg();
			function ng(e) {
				return tP(np.Provider, {
					value: e.theme,
					get children() {
						return e.children;
					},
				});
			}
			function nm() {
				return tm(np);
			}
			function ny(e) {
				let t = this || {};
				return (...n) => {
					let r = (r) => {
						let i,
							o = tN(r, { theme: tm(np) }),
							[s, a] = tq(
								tN(o, {
									get class() {
										let e = o.class,
											r = 'class' in o && /^go[0-9]+/.test(e);
										return [e, nh.apply({ target: t.target, o: r, p: o, g: t.g }, n)].filter(Boolean).join(' ');
									},
								}),
								['as', 'theme'],
							),
							l = s.as || e;
						return (
							'function' == typeof l
								? (i = l(a))
								: 1 == t.g
									? tX((i = document.createElement(l)), a)
									: (i = ne(tN({ component: l }, a))),
							i
						);
					};
					return (r.class = (e) => tf(() => nh.apply({ target: t.target, p: e, g: t.g }, n))), r;
				};
			}
			let nv = new Proxy(ny, { get: (e, t) => e(t) });
			function nw() {
				let e = ny.call({ g: 1 }, 'div').apply(null, arguments);
				return function (t) {
					return e(t), null;
				};
			}
			let nb = 'tc-root',
				nC = 'tc-disable-scroll',
				nx = 'tc-using-mouse',
				nS = () => (
					document.body.addEventListener('mousedown', () => document.body.classList.add(nx)),
					document.body.addEventListener('keydown', (e) => {
						'Tab' === e.key && document.body.classList.remove(nx);
					}),
					tP(
						nw`
    ${nb} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${nb} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${nb} *:focus {
        outline: #08f auto 2px;
    }
    
    ${nb} li {
        list-style: none;
    }
    
    ${nb} button {
        outline: none;
    }
    
    body.${nC} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${nx} ${nb} *:focus {
        outline: none;
    }
`,
						{},
					)
				);
			function nk(e, t) {
				return (
					'#' === e[0] &&
						(e = (function (e) {
							'#' === e[0] && (e = e.slice(1));
							let t = parseInt(e, 16);
							return [(t >> 16) & 255, (t >> 8) & 255, 255 & t].join(',');
						})(e)),
					`rgba(${e}, ${t})`
				);
			}
			function nE(e) {
				return e.toString() + 'px';
			}
			let nR = class {
				constructor() {
					e5(this, 'storage', {});
				}
				static getInstance() {
					return nR.instance || (nR.instance = new nR()), nR.instance;
				}
				get length() {
					return Object.keys(this.storage).length;
				}
				clear() {
					this.storage = {};
				}
				getItem(e) {
					var t;
					return null != (t = this.storage[e]) ? t : null;
				}
				key(e) {
					var t;
					let n = Object.keys(this.storage);
					return e < 0 || e >= n.length ? null : null != (t = n[e]) ? t : null;
				}
				removeItem(e) {
					delete this.storage[e];
				}
				setItem(e, t) {
					this.storage[e] = t;
				}
			};
			e5(nR, 'instance');
			class nO extends M {
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, nO.prototype);
				}
			}
			function n_(...e) {
				try {
					console.debug('[TON_CONNECT_UI]', ...e);
				} catch (e) {}
			}
			function nT(e, t = '_self') {
				n_('openLink', e, t), window.open(e, t, 'noopener noreferrer');
			}
			function nM(e) {
				nT(e, '_blank');
			}
			function nA(e, t) {
				let n = () => {
						nq('safari') || (nN('android') && nq('firefox')) || t();
					},
					r = setTimeout(() => n(), 200);
				window.addEventListener('blur', () => clearTimeout(r), { once: !0 }), nT(e, '_self');
			}
			function nP(e) {
				return e4(this, null, function* () {
					yield new Promise((e) => requestAnimationFrame(e)), e();
				});
			}
			function nL() {
				if ('undefined' != typeof window) return window;
			}
			function nI() {
				if (
					(function () {
						try {
							return 'undefined' != typeof localStorage;
						} catch (e) {
							return !1;
						}
					})()
				)
					return localStorage;
				if (void 0 !== eV && null != eV.versions && null != eV.versions.node)
					throw new nO(
						'`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector',
					);
				return nR.getInstance();
			}
			function nU() {
				var e, t, n;
				let r,
					i,
					o = new eK().getResult(),
					s = null == (e = o.os.name) ? void 0 : e.toLowerCase(),
					a = null == (t = o.device.model) ? void 0 : t.toLowerCase();
				switch (!0) {
					case 'ipad' === a:
						r = 'ipad';
						break;
					case 'ios' === s:
						r = 'ios';
						break;
					case 'android' === s:
						r = 'android';
						break;
					case 'mac os' === s:
						r = 'macos';
						break;
					case 'linux' === s:
						r = 'linux';
						break;
					case null == s ? void 0 : s.includes('windows'):
						r = 'windows';
				}
				let l = null == (n = o.browser.name) ? void 0 : n.toLowerCase();
				switch (!0) {
					case 'chrome' === l:
						i = 'chrome';
						break;
					case 'firefox' === l:
						i = 'firefox';
						break;
					case null == l ? void 0 : l.includes('safari'):
						i = 'safari';
						break;
					case null == l ? void 0 : l.includes('opera'):
						i = 'opera';
				}
				return { os: r, browser: i };
			}
			function nN(...e) {
				return e.includes(nU().os);
			}
			function nq(...e) {
				return e.includes(nU().browser);
			}
			function n$(e, t) {
				return t + new URL(e).search;
			}
			class nD {
				constructor() {
					e5(this, 'localStorage'), e5(this, 'storageKey', 'ton-connect-ui_wallet-info'), (this.localStorage = nI());
				}
				setWalletInfo(e) {
					this.localStorage.setItem(this.storageKey, JSON.stringify(e));
				}
				getWalletInfo() {
					let e = this.localStorage.getItem(this.storageKey);
					return e ? JSON.parse(e) : null;
				}
				removeWalletInfo() {
					this.localStorage.removeItem(this.storageKey);
				}
			}
			class nW {
				constructor() {
					e5(this, 'localStorage'),
						e5(this, 'storageKey', 'ton-connect-ui_preferred-wallet'),
						(this.localStorage = nI());
				}
				setPreferredWalletAppName(e) {
					this.localStorage.setItem(this.storageKey, e);
				}
				getPreferredWalletAppName() {
					return this.localStorage.getItem(this.storageKey) || void 0;
				}
			}
			class nj {
				constructor() {
					e5(this, 'localStorage'),
						e5(this, 'storageKey', 'ton-connect-ui_last-selected-wallet-info'),
						(this.localStorage = nI());
				}
				setLastSelectedWalletInfo(e) {
					this.localStorage.setItem(this.storageKey, JSON.stringify(e));
				}
				getLastSelectedWalletInfo() {
					let e = this.localStorage.getItem(this.storageKey);
					return e ? JSON.parse(e) : null;
				}
				removeLastSelectedWalletInfo() {
					this.localStorage.removeItem(this.storageKey);
				}
			}
			let [nB, nF] = tl({ status: 'closed', closeReason: null }),
				nK = th(() => 'opened' === nB().status),
				[nH, nQ] = tl({ status: 'closed', closeReason: null }),
				nV = th(() => 'opened' === nH().status),
				nz = th(() => {
					let e = nH();
					return 'opened' === e.status ? e.walletInfo : null;
				}),
				nG = 'undefined' != typeof window ? new nj() : void 0,
				[nZ, nY] = tl((null == nG ? void 0 : nG.getLastSelectedWalletInfo()) || null),
				nJ = (e) => {
					nG || (nG = new nj()), e ? nG.setLastSelectedWalletInfo(e) : nG.removeLastSelectedWalletInfo(), nY(e);
				},
				[nX, n1] = tl(null),
				n0 = {
					en: n2({
						common: {
							close: 'Close',
							openWallet: 'Open wallet',
							copyLink: 'Copy Link',
							linkCopied: 'Link Copied',
							copied: 'Copied',
							yourWallet: 'Your Wallet',
							retry: 'Retry',
							get: 'GET',
							mobile: 'Mobile',
							browserExtension: 'Browser Extension',
							desktop: 'Desktop',
						},
						button: {
							connectWallet: 'Connect Wallet',
							dropdown: { copy: 'Copy address', copied: 'Address copied!', disconnect: 'Disconnect' },
						},
						notifications: {
							confirm: { header: 'Open {{ name }} to\xa0confirm the\xa0transaction.' },
							transactionSent: {
								header: 'Transaction sent',
								text: 'Your transaction\xa0will be\xa0processed in\xa0a\xa0few seconds.',
							},
							transactionCanceled: {
								header: 'Transaction canceled',
								text: 'There will be no changes to\xa0your account.',
							},
						},
						walletItem: { walletOn: 'Wallet in', recent: 'Recent', installed: 'Installed', popular: 'Popular' },
						walletModal: {
							loading: 'Loading wallets',
							wallets: 'Wallets',
							mobileUniversalModal: {
								connectYourWallet: 'Connect your TON\xa0wallet',
								openWalletOnTelegramOrSelect: 'Use Wallet in Telegram or choose other application',
								openWalletOnTelegram: 'Connect Wallet in Telegram',
								chooseOtherApplication: 'Choose other application',
								openLink: 'Open Link',
								scan: 'Scan with your mobile\xa0wallet',
							},
							desktopUniversalModal: {
								connectYourWallet: 'Connect your TON wallet',
								scan: 'Scan with your mobile wallet',
								availableWallets: 'Available wallets',
							},
							mobileConnectionModal: {
								showQR: 'Show QR Code',
								scanQR: 'Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera',
								missingFeatures:
									'Please update {{ name }}, your version does not support required features for this dApp',
								notSupportedWallet:
									'{{ name }} doesn’t support the requested action. Please connect another wallet that supports it',
								continueIn: 'Continue in {{ name }}…',
								updateWallet: 'Update {{ name }}',
								chooseAnotherWallet: 'Choose Another Wallet',
								connectionDeclined: 'Connection declined',
							},
							desktopConnectionModal: {
								scanQR: 'Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera',
								continueInExtension: 'Continue in\xa0{{ name }} browser extension…',
								dontHaveExtension: "Seems you don't have installed {{ name }}\xa0browser\xa0extension",
								missingFeatures:
									'Please update {{ name }}, your version does not support required features for this dApp',
								notSupportedWallet:
									'{{ name }} doesn’t support the requested action. Please connect another wallet that supports it',
								getWallet: 'Get {{ name }}',
								updateWallet: 'Update {{ name }}',
								chooseAnotherWallet: 'Choose Another Wallet',
								continueOnDesktop: 'Continue in\xa0{{ name }} on desktop…',
								openWalletOnTelegram: 'Connect Wallet in Telegram on desktop',
								connectionDeclined: 'Connection declined',
							},
							infoModal: {
								whatIsAWallet: 'What is a wallet',
								secureDigitalAssets: 'Secure digital assets storage',
								walletProtects:
									'A wallet protects and manages your digital assets\xa0including TON, tokens and collectables.',
								controlIdentity: 'Control your Web3 identity',
								manageIdentity:
									'Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in\xa0the\xa0blockchain ecosystem.',
								effortlessCryptoTransactions: 'Effortless crypto transactions',
								easilySend:
									'Easily send, receive, monitor your cryptocurrencies.\xa0Streamline your operations with\xa0decentralized applications.',
								getAWallet: 'Get a Wallet',
							},
							allWallets: {
								walletsBelowNotSupported:
									'The wallets below don’t support all features of\xa0the connected service. You can use your recovery phrase in one of the supported wallets above.',
								walletNotSupportService: '{{ name }} doesn’t support connected service',
							},
						},
						actionModal: {
							confirmTransaction: {
								header: 'Confirm the\xa0transaction in\xa0{{ name }}',
								text: 'It will only take a\xa0moment.',
							},
							transactionSent: '$notifications.transactionSent',
							transactionCanceled: '$notifications.transactionCanceled',
						},
					}),
					ru: n2({
						common: {
							close: 'Закрыть',
							openWallet: 'Открыть кошелёк',
							copyLink: 'Скопировать',
							linkCopied: 'Ссылка скопирована',
							copied: 'Скопировано',
							yourWallet: 'Ваш кошелёк',
							retry: 'Повторить',
							get: 'Скачать',
							mobile: 'Мобильный',
							browserExtension: 'Расширение',
							desktop: 'Десктоп',
						},
						button: {
							connectWallet: 'Подключить кошелёк',
							dropdown: { copy: 'Скопировать адрес', copied: 'Адрес скопирован!', disconnect: 'Отключить кошелёк' },
						},
						notifications: {
							confirm: { header: 'Откройте {{ name }}, чтобы\xa0подтвердить транзакцию.' },
							transactionSent: {
								header: 'Транзакция отправлена',
								text: 'Ваша транзакция\xa0будет обработана через\xa0несколько секунд.',
							},
							transactionCanceled: { header: 'Транзакция отменена', text: 'Состояние вашего счёта не\xa0изменится.' },
						},
						walletItem: { walletOn: 'Wallet в', recent: 'Недавний', installed: 'Установлен', popular: 'Популярен' },
						walletModal: {
							loading: 'Кошельки загружаются',
							wallets: 'Кошельки',
							mobileUniversalModal: {
								connectYourWallet: 'Подключите TON\xa0кошелёк',
								openWalletOnTelegramOrSelect: 'Подключите Wallet в\xa0Telegram или\xa0выберете другое приложение',
								openWalletOnTelegram: 'Открыть Wallet в Telegram',
								chooseOtherApplication: 'Выберите другое приложение',
								openLink: 'Открыть',
								scan: 'Отсканируйте камерой вашего\xa0телефона',
							},
							desktopUniversalModal: {
								connectYourWallet: 'Подключите TON кошелёк',
								scan: 'Отсканируйте QR-код камерой вашего\xa0телефона',
								availableWallets: 'Доступные кошельки',
							},
							mobileConnectionModal: {
								showQR: 'Показать QR-код',
								scanQR: 'Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона',
								missingFeatures: 'Обновите {{ name }}, ваша версия не поддерживает необходимые функции для этого dApp',
								notSupportedWallet:
									'{{ name }} не поддерживает запрошенное действие. Пожалуйста, подключите другой кошелёк, который поддерживает это',
								continueIn: 'Продолжите в {{ name }}…',
								updateWallet: 'Обновить {{ name }}',
								chooseAnotherWallet: 'Выбрать другой кошелёк',
								connectionDeclined: 'Подключение отклонено',
							},
							desktopConnectionModal: {
								scanQR: 'Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона',
								continueInExtension: 'Откройте браузерное расширение {{ name }}',
								dontHaveExtension: 'Похоже, у вас не\xa0установлено браузерное\xa0расширение\xa0{{ name }}',
								missingFeatures: 'Обновите {{ name }}, ваша версия не поддерживает необходимые функции для этого dApp',
								notSupportedWallet:
									'{{ name }} не поддерживает запрошенное действие. Пожалуйста, подключите другой кошелёк, который поддерживает это',
								getWallet: 'Скачать {{ name }}',
								updateWallet: 'Обновить {{ name }}',
								chooseAnotherWallet: 'Выбрать другой кошелёк',
								continueOnDesktop: 'Откройте {{ name }} на\xa0компьютере…',
								openWalletOnTelegram: 'Открыть Wallet в\xa0Telegram',
								connectionDeclined: 'Подключение отклонено',
							},
							infoModal: {
								whatIsAWallet: 'Что такое кошелёк?',
								secureDigitalAssets: 'Надежное хранилище цифровых активов',
								walletProtects:
									'Кошелёк защищает ваши цифровые активы, включая TON, токены и\xa0предметы коллекционирования, и\xa0управляет ими.',
								controlIdentity: 'Контроль своей личности Web3',
								manageIdentity:
									'Управляйте своей цифровой идентификацией и\xa0с\xa0легкостью получайте доступ к\xa0децентрализованным приложениям. Сохраняйте контроль над\xa0своими данными и\xa0безопасно участвуйте в\xa0экосистеме\xa0блокчейна.',
								effortlessCryptoTransactions: 'Простые криптотранзакции',
								easilySend:
									'Легко отправляйте, получайте и\xa0отслеживайте свои криптовалюты. Оптимизируйте свои операции с\xa0помощью децентрализованных приложений.',
								getAWallet: 'Скачать кошелёк',
							},
							allWallets: {
								walletsBelowNotSupported:
									'Кошельки ниже не поддерживают все функции подключённого сервиса. Вы можете использовать свою фразу восстановления в одном из поддерживаемых выше кошельков.',
								walletNotSupportService: '{{ name }} не поддерживает подключённый сервис',
							},
						},
						actionModal: {
							confirmTransaction: { header: 'Подтвердите действие в\xa0{{ name }}', text: 'Это займет пару секунд.' },
							transactionSent: '$notifications.transactionSent',
							transactionCanceled: '$notifications.transactionCanceled',
						},
					}),
				};
			function n2(e) {
				let t = (n) => {
					Object.entries(n).forEach(([r, i]) => {
						if ('object' == typeof i && i) return t(i);
						if ('string' == typeof i) {
							if ('$' === i[0]) {
								let t = i.slice(1).split('.'),
									o = e;
								t.forEach((e) => {
									if (e in o) o = o[e];
									else throw Error(`Cannot parse translations: there is no property ${e} in translation`);
								}),
									(n[r] = o);
							}
							'\\$' === i.slice(0, 2) && (n[r] = i.slice(1));
						}
					});
				};
				return t(e), e;
			}
			let n5 = tg(),
				n4 = Symbol('store-raw'),
				n3 = Symbol('store-node'),
				n6 = Symbol('store-name');
			function n8(e, t) {
				let n = e[e6];
				if (!n && (Object.defineProperty(e, e6, { value: (n = new Proxy(e, ri)) }), !Array.isArray(e))) {
					let t = Object.keys(e),
						r = Object.getOwnPropertyDescriptors(e);
					for (let i = 0, o = t.length; i < o; i++) {
						let o = t[i];
						r[o].get && Object.defineProperty(e, o, { enumerable: r[o].enumerable, get: r[o].get.bind(n) });
					}
				}
				return n;
			}
			function n9(e) {
				let t;
				return (
					null != e &&
					'object' == typeof e &&
					(e[e6] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
				);
			}
			function n7(e, t = new Set()) {
				let n, r, i, o;
				if ((n = null != e && e[n4])) return n;
				if (!n9(e) || t.has(e)) return e;
				if (Array.isArray(e)) {
					Object.isFrozen(e) ? (e = e.slice(0)) : t.add(e);
					for (let n = 0, o = e.length; n < o; n++) (r = n7((i = e[n]), t)) !== i && (e[n] = r);
				} else {
					Object.isFrozen(e) ? (e = Object.assign({}, e)) : t.add(e);
					let n = Object.keys(e),
						s = Object.getOwnPropertyDescriptors(e);
					for (let a = 0, l = n.length; a < l; a++) s[(o = n[a])].get || ((r = n7((i = e[o]), t)) !== i && (e[o] = r));
				}
				return e;
			}
			function re(e) {
				let t = e[n3];
				return t || Object.defineProperty(e, n3, { value: (t = {}) }), t;
			}
			function rt(e, t, n) {
				return e[t] || (e[t] = rr(n));
			}
			function rn(e) {
				if (tr) {
					let t = re(e);
					(t._ || (t._ = rr()))();
				}
			}
			function rr(e) {
				let [t, n] = tl(e, { equals: !1, internal: !0 });
				return (t.$ = n), t;
			}
			let ri = {
				get(e, t, n) {
					if (t === n4) return e;
					if (t === e6) return n;
					if (t === e8) return rn(e), n;
					let r = re(e),
						i = r.hasOwnProperty(t),
						o = i ? r[t]() : e[t];
					if (t === n3 || '__proto__' === t) return o;
					if (!i) {
						let n = Object.getOwnPropertyDescriptor(e, t);
						tr && ('function' != typeof o || e.hasOwnProperty(t)) && !(n && n.get) && (o = rt(r, t, o)());
					}
					return n9(o) ? n8(o) : o;
				},
				has(e, t) {
					return t === n4 || t === e6 || t === e8 || t === n3 || '__proto__' === t || (this.get(e, t, e), t in e);
				},
				set: () => !0,
				deleteProperty: () => !0,
				ownKeys: function (e) {
					return rn(e), Reflect.ownKeys(e);
				},
				getOwnPropertyDescriptor: function (e, t) {
					let n = Reflect.getOwnPropertyDescriptor(e, t);
					return (
						n &&
							!n.get &&
							n.configurable &&
							t !== e6 &&
							t !== n3 &&
							t !== n6 &&
							(delete n.value, delete n.writable, (n.get = () => e[e6][t])),
						n
					);
				},
			};
			function ro(e, t, n, r = !1) {
				if (!r && e[t] === n) return;
				let i = e[t],
					o = e.length;
				void 0 === n ? delete e[t] : (e[t] = n);
				let s = re(e),
					a;
				(a = rt(s, t, i)) && a.$(() => n),
					Array.isArray(e) && e.length !== o && (a = rt(s, 'length', o)) && a.$(e.length),
					(a = s._) && a.$();
			}
			function rs(e, t) {
				let n = Object.keys(t);
				for (let r = 0; r < n.length; r += 1) {
					let i = n[r];
					ro(e, i, t[i]);
				}
			}
			function ra(...[e, t]) {
				let n = n7(e || {}),
					r = Array.isArray(n);
				return [
					n8(n),
					function (...e) {
						tS(() => {
							r && 1 === e.length
								? (function (e, t) {
										if (('function' == typeof t && (t = t(e)), Array.isArray((t = n7(t))))) {
											if (e === t) return;
											let n = 0,
												r = t.length;
											for (; n < r; n++) {
												let r = t[n];
												e[n] !== r && ro(e, n, r);
											}
											ro(e, 'length', r);
										} else rs(e, t);
									})(n, e[0])
								: (function e(t, n, r = []) {
										let i,
											o = t;
										if (n.length > 1) {
											let s = typeof (i = n.shift()),
												a = Array.isArray(t);
											if (Array.isArray(i)) {
												for (let o = 0; o < i.length; o++) e(t, [i[o]].concat(n), r);
												return;
											}
											if (a && 'function' === s) {
												for (let o = 0; o < t.length; o++) i(t[o], o) && e(t, [o].concat(n), r);
												return;
											}
											if (a && 'object' === s) {
												let { from: o = 0, to: s = t.length - 1, by: a = 1 } = i;
												for (let i = o; i <= s; i += a) e(t, [i].concat(n), r);
												return;
											} else if (n.length > 1) return void e(t[i], n, [i].concat(r));
											(o = t[i]), (r = [i].concat(r));
										}
										let s = n[0];
										('function' != typeof s || (s = s(o, r)) !== o) &&
											(void 0 !== i || void 0 != s) &&
											((s = n7(s)), void 0 === i || (n9(o) && n9(s) && !Array.isArray(s)) ? rs(o, s) : ro(t, i, s));
									})(n, e);
						}, !1);
					},
				];
			}
			let rl = {
				constant: { black: '#000000', white: '#FFFFFF' },
				connectButton: { background: '#0098EA', foreground: '#FFFFFF' },
				accent: '#0098EA',
				telegramButton: '#0098EA',
				icon: { primary: '#0F0F0F', secondary: '#7A8999', tertiary: '#C1CAD2', success: '#29CC6A', error: '#F5A73B' },
				background: { primary: '#FFFFFF', secondary: '#F1F3F5', segment: '#FFFFFF', tint: '#F1F3F5', qr: '#F1F3F5' },
				text: { primary: '#0F0F0F', secondary: '#6A7785' },
			};
			function rc(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function ru(e) {
				var t, n;
				return (
					!1 !== rc(e) &&
					(void 0 === (t = e.constructor) || (!1 !== rc((n = t.prototype)) && !1 !== n.hasOwnProperty('isPrototypeOf')))
				);
			}
			function rd(e, t) {
				return e ? eH(t, e, { arrayMerge: (e, t, n) => t, isMergeableObject: ru }) : t;
			}
			let [rh, rf] = ra({ theme: nt.LIGHT, colors: rl, borderRadius: 'm' }),
				rp = {
					[nt.LIGHT]: rl,
					[nt.DARK]: {
						constant: { black: '#000000', white: '#FFFFFF' },
						connectButton: { background: '#0098EA', foreground: '#FFFFFF' },
						accent: '#E5E5EA',
						telegramButton: '#31A6F5',
						icon: {
							primary: '#E5E5EA',
							secondary: '#909099',
							tertiary: '#434347',
							success: '#29CC6A',
							error: '#F5A73B',
						},
						background: {
							primary: '#121214',
							secondary: '#18181A',
							segment: '#262629',
							tint: '#222224',
							qr: '#FFFFFF',
						},
						text: { primary: '#E5E5EA', secondary: '#7D7D85' },
					},
				},
				rg = { [nt.LIGHT]: void 0, [nt.DARK]: void 0 };
			function rm(e, t) {
				t && ((rg[nt.DARK] = rd(t[nt.DARK], rg[nt.DARK])), (rg[nt.LIGHT] = rd(t[nt.LIGHT], rg[nt.LIGHT]))),
					rf({ theme: e, colors: rd(rg[e], rp[e]) });
			}
			let ry = nv.div`
    background-color: ${(e) => e.theme.colors.background.secondary};
`,
				rv = (e) => {
					let t,
						[n, r] = tl(null);
					return (
						td(() => {
							let t = new window.Image();
							return ((t.src = e.src),
							(t.alt = e.alt || ''),
							t.setAttribute('draggable', 'false'),
							e.class && t.classList.add(e.class),
							t.complete)
								? r(t)
								: (t.addEventListener('load', () => r(t)), () => t.removeEventListener('load', () => r(t)));
						}),
						[
							tP(tD, {
								get when() {
									return n();
								},
								get children() {
									return n();
								},
							}),
							tP(tD, {
								get when() {
									return !n();
								},
								get children() {
									return tP(ry, {
										get class() {
											return e.class;
										},
										ref(e) {
											let n = t;
											'function' == typeof n ? n(e) : (t = e);
										},
									});
								},
							}),
						]
					);
				},
				rw = {};
			try {
				let e = location.hash.toString();
				rw = (function (e) {
					e = e.replace(/^#/, '');
					let t = {};
					if (!e.length) return t;
					if (0 > e.indexOf('=') && 0 > e.indexOf('?')) return (t._path = rT(e)), t;
					let n = e.indexOf('?');
					n >= 0 && ((t._path = rT(e.substr(0, n))), (e = e.substr(n + 1)));
					let r = (function (e) {
						let t,
							n,
							r,
							i,
							o = {};
						if (!e.length) return o;
						let s = e.split('&');
						for (t = 0; t < s.length; t++)
							(r = rT((n = s[t].split('='))[0])), (i = null == n[1] ? null : rT(n[1])), (o[r] = i);
						return o;
					})(e);
					for (let e in r) t[e] = r[e];
					return t;
				})(e);
			} catch (e) {}
			let rb = 'unknown';
			if (
				((null == rw ? void 0 : rw.tgWebAppPlatform) && (rb = null != (d = rw.tgWebAppPlatform) ? d : 'unknown'),
				'unknown' === rb)
			) {
				let e = nL();
				rb =
					null !=
					(p = null == (f = null == (h = null == e ? void 0 : e.Telegram) ? void 0 : h.WebApp) ? void 0 : f.platform)
						? p
						: 'unknown';
			}
			let rC = '6.0';
			if (((null == rw ? void 0 : rw.tgWebAppVersion) && (rC = rw.tgWebAppVersion), !rC)) {
				let e = nL();
				rC =
					null !=
					(y = null == (m = null == (g = null == e ? void 0 : e.Telegram) ? void 0 : g.WebApp) ? void 0 : m.version)
						? y
						: '6.0';
			}
			function rx(...e) {
				return e.includes(rb);
			}
			function rS() {
				var e;
				return 'unknown' !== rb || !!(null == (e = nL()) ? void 0 : e.TelegramWebviewProxy);
			}
			function rk() {
				var e;
				let t = !!(null == (e = nL()) ? void 0 : e.TelegramWebview);
				return (rS() || t) && 'unknown' === rb;
			}
			function rE() {
				r_('web_app_expand', {});
			}
			function rR(e, t) {
				var n;
				let r = new URL(e);
				if ('http:' !== r.protocol && 'https:' !== r.protocol) {
					if (t) return t();
					throw new nO(`Url protocol is not supported: ${r}`);
				}
				if ('t.me' !== r.hostname) {
					if (t) return t();
					throw new nO(`Url host is not supported: ${r}`);
				}
				let i = r.pathname + r.search;
				rO() ||
				((n = '6.1'),
				(function (e, t) {
					let n, r, i, o;
					'string' != typeof e && (e = ''), 'string' != typeof t && (t = '');
					let s = e.replace(/^\s+|\s+$/g, '').split('.'),
						a = t.replace(/^\s+|\s+$/g, '').split('.');
					for (r = 0, n = Math.max(s.length, a.length); r < n; r++)
						if ((i = parseInt(s[r]) || 0) !== (o = parseInt(a[r]) || 0)) {
							if (i > o) return 1;
							return -1;
						}
					return 0;
				})(rC, '6.1') >= 0)
					? r_('web_app_open_tg_link', { path_full: i })
					: nM('https://t.me' + i);
			}
			function rO() {
				try {
					let e = nL();
					if (!e) return !1;
					return null != e.parent && e !== e.parent;
				} catch (e) {
					return !1;
				}
			}
			function r_(e, t) {
				try {
					let n = nL();
					if (!n) throw new nO("Can't post event to parent window: window is not defined");
					if (void 0 !== n.TelegramWebviewProxy)
						n_('postEvent', e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
					else if (n.external && 'notify' in n.external)
						n_('postEvent', e, t), n.external.notify(JSON.stringify({ eventType: e, eventData: t }));
					else if (rO()) {
						let r = JSON.stringify({ eventType: e, eventData: t });
						n_('postEvent', e, t), n.parent.postMessage(r, '*');
					} else throw new nO("Can't post event to TMA");
				} catch (e) {
					!(function (...e) {
						try {
							console.error('[TON_CONNECT_UI]', ...e);
						} catch (e) {}
					})(`Can't post event to parent window: ${e}`);
				}
			}
			function rT(e) {
				try {
					return (e = e.replace(/\+/g, '%20')), decodeURIComponent(e);
				} catch (t) {
					return e;
				}
			}
			let rM = { mobile: 440, tablet: 1020 };
			function rA(e) {
				let t = nL();
				if (!t) return 'desktop' === e;
				if (rx('weba')) return !0;
				let n = t.innerWidth;
				switch (e) {
					case 'desktop':
						return n > rM.tablet;
					case 'tablet':
						return n > rM.mobile;
					default:
						return n <= rM.mobile || nN('ios', 'android', 'ipad');
				}
			}
			function rP(e) {
				switch (e) {
					case 'mobile':
						return `@media (max-width: ${rM.mobile}px)`;
					case 'tablet':
						return `@media (max-width: ${rM.tablet}px) (min-width: ${rM.mobile}px)`;
					default:
						return `@media (min-width: ${rM.tablet}px)`;
				}
			}
			let rL = '@media (hover: none)',
				rI = '@media not all and (hover: none)',
				rU = { m: '100vh', s: '8px', none: '0' },
				rN = { s: 0.02, m: 0.04 },
				rq = nv.button`
    display: ${(e) => (e.leftIcon || e.rightIcon ? 'flex' : 'inline-block')};
    gap: ${(e) => (e.leftIcon || e.rightIcon ? '6px' : 'unset')};
    align-items: ${(e) => (e.leftIcon || e.rightIcon ? 'center' : 'unset')};
    justify-content: ${(e) => (e.leftIcon || e.rightIcon ? 'space-between' : 'unset')};
    background-color: ${(e) => ('flat' === e.appearance ? 'transparent' : 'secondary' === e.appearance ? e.theme.colors.background.tint : nk(e.theme.colors.accent, 0.12))};
    color: ${(e) => ('secondary' === e.appearance ? e.theme.colors.text.primary : e.theme.colors.accent)};

    padding: ${(e) => ('flat' === e.appearance ? '0' : '9px 16px')};
    padding-left: ${(e) => (e.leftIcon && 'flat' !== e.appearance ? '12px' : '16px')};
    padding-right: ${(e) => (e.rightIcon && 'flat' !== e.appearance ? '12px' : '16px')};
    border: none;
    border-radius: ${(e) => rU[e.theme.borderRadius]};
    cursor: ${(e) => (e.disabled ? 'not-allowed' : 'pointer')};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${rI} {
        &:hover {
            transform: ${(e) => (e.disabled ? 'unset' : `scale(${1 + rN[e.scale]})`)};
        }
    }

    &:active {
        transform: ${(e) => (e.disabled ? 'unset' : `scale(${1 - rN[e.scale]})`)};
    }

    ${rL} {
        &:active {
            transform: ${(e) => (e.disabled ? 'unset' : `scale(${1 - 2 * rN[e.scale]})`)};
        }
    }
`;
			function r$(e) {
				let t = tf(() => Object.keys(e).filter((e) => e.startsWith('data-'))),
					[n] = tq(e, t);
				return n;
			}
			let rD = (e) => {
				let t = r$(e);
				return tP(
					rq,
					tN(
						{
							get appearance() {
								return e.appearance || 'primary';
							},
							get class() {
								return e.class;
							},
							onClick: (t) => {
								var n;
								return null == (n = e.onClick) ? void 0 : n.call(e, t);
							},
							onMouseEnter: (t) => {
								var n;
								return null == (n = e.onMouseEnter) ? void 0 : n.call(e, t);
							},
							onMouseLeave: (t) => {
								var n;
								return null == (n = e.onMouseLeave) ? void 0 : n.call(e, t);
							},
							ref(t) {
								let n = e.ref;
								'function' == typeof n ? n(t) : (e.ref = t);
							},
							get disabled() {
								return e.disabled;
							},
							get scale() {
								return e.scale || 'm';
							},
							get leftIcon() {
								return !!e.leftIcon;
							},
							get rightIcon() {
								return !!e.rightIcon;
							},
							'data-tc-button': 'true',
						},
						t,
						{
							get children() {
								return [th(() => e.leftIcon), th(() => e.children), th(() => e.rightIcon)];
							},
						},
					),
				);
			};
			function rW(e) {
				requestAnimationFrame(() => {
					requestAnimationFrame(e);
				});
			}
			let rj = (e) => {
				let t,
					n = !0,
					[r, i] = tl(),
					[o, s] = tl(),
					a = ty(() => e.children),
					{ onBeforeEnter: l, onEnter: c, onAfterEnter: u, onBeforeExit: d, onExit: h, onAfterExit: f } = e,
					p = th(() => {
						let t = e.name || 's';
						return {
							enterActiveClass: e.enterActiveClass || t + '-enter-active',
							enterClass: e.enterClass || t + '-enter',
							enterToClass: e.enterToClass || t + '-enter-to',
							exitActiveClass: e.exitActiveClass || t + '-exit-active',
							exitClass: e.exitClass || t + '-exit',
							exitToClass: e.exitToClass || t + '-exit-to',
						};
					});
				function g(t, a) {
					if (!n || e.appear) {
						let n = function (l) {
								t &&
									(!l || l.target === t) &&
									(t.removeEventListener('transitionend', n),
									t.removeEventListener('animationend', n),
									t.classList.remove(...h),
									t.classList.remove(...f),
									tS(() => {
										r() !== t && i(t), o() === t && s(void 0);
									}, !1),
									u && u(t),
									'inout' === e.mode && m(t, a));
							},
							d = p().enterClass.split(' '),
							h = p().enterActiveClass.split(' '),
							f = p().enterToClass.split(' ');
						l && l(t),
							t.classList.add(...d),
							t.classList.add(...h),
							rW(() => {
								t.classList.remove(...d),
									t.classList.add(...f),
									c && c(t, () => n()),
									(!c || c.length < 2) &&
										(t.addEventListener('transitionend', n), t.addEventListener('animationend', n));
							});
					}
					a && !e.mode ? s(t) : i(t);
				}
				function m(t, n) {
					let o = p().exitClass.split(' '),
						s = p().exitActiveClass.split(' '),
						a = p().exitToClass.split(' ');
					if (!n.parentNode) return l();
					function l(o) {
						(o && o.target !== n) ||
							(n.removeEventListener('transitionend', l),
							n.removeEventListener('animationend', l),
							n.classList.remove(...s),
							n.classList.remove(...a),
							r() === n && i(void 0),
							f && f(n),
							'outin' === e.mode && g(t, n));
					}
					d && d(n),
						n.classList.add(...o),
						n.classList.add(...s),
						rW(() => {
							n.classList.remove(...o), n.classList.add(...a);
						}),
						h && h(n, () => l()),
						(!h || h.length < 2) && (n.addEventListener('transitionend', l), n.addEventListener('animationend', l));
				}
				return (
					tc((r) => {
						for (t = a(); 'function' == typeof t; ) t = t();
						return tf(
							() => (
								t && t !== r && ('outin' !== e.mode ? g(t, r) : n && i(t)),
								r && r !== t && 'inout' !== e.mode && m(t, r),
								(n = !1),
								t
							),
						);
					}),
					[r, o]
				);
			};
			function rB(e) {
				let { top: t, bottom: n, left: r, right: i, width: o, height: s } = e.getBoundingClientRect(),
					a = e.parentNode.getBoundingClientRect();
				return { top: t - a.top, bottom: n, left: r - a.left, right: i, width: o, height: s };
			}
			let rF = (e) => {
					let t = ty(() => e.children),
						n = th(() => {
							let t = e.name || 's';
							return {
								enterActiveClass: e.enterActiveClass || t + '-enter-active',
								enterClass: e.enterClass || t + '-enter',
								enterToClass: e.enterToClass || t + '-enter-to',
								exitActiveClass: e.exitActiveClass || t + '-exit-active',
								exitClass: e.exitClass || t + '-exit',
								exitToClass: e.exitToClass || t + '-exit-to',
								moveClass: e.moveClass || t + '-move',
							};
						}),
						{ onBeforeEnter: r, onEnter: i, onAfterEnter: o, onBeforeExit: s, onExit: a, onAfterExit: l } = e,
						[c, u] = tl(),
						d = [],
						h = !0;
					return (
						tc(() => {
							let e = t(),
								c = [...e],
								f = new Set(e),
								p = new Set(d),
								g = n().enterClass.split(' '),
								m = n().enterActiveClass.split(' '),
								y = n().enterToClass.split(' '),
								v = n().exitClass.split(' '),
								w = n().exitActiveClass.split(' '),
								b = n().exitToClass.split(' ');
							for (let t = 0; t < e.length; t++) {
								let n = e[t];
								if (!h && !p.has(n)) {
									let e = function (t) {
										n &&
											(!t || t.target === n) &&
											(n.removeEventListener('transitionend', e),
											n.removeEventListener('animationend', e),
											n.classList.remove(...m),
											n.classList.remove(...y),
											o && o(n));
									};
									r && r(n),
										n.classList.add(...g),
										n.classList.add(...m),
										rW(() => {
											n.classList.remove(...g),
												n.classList.add(...y),
												i && i(n, () => e()),
												(!i || i.length < 2) &&
													(n.addEventListener('transitionend', e), n.addEventListener('animationend', e));
										});
								}
							}
							for (let e = 0; e < d.length; e++) {
								let t = d[e];
								if (!f.has(t) && t.parentNode) {
									let n = function (e) {
										(e && e.target !== t) ||
											(t.removeEventListener('transitionend', n),
											t.removeEventListener('animationend', n),
											t.classList.remove(...w),
											t.classList.remove(...b),
											l && l(t),
											u((d = d.filter((e) => e !== t))));
									};
									c.splice(e, 0, t),
										s && s(t),
										t.classList.add(...v),
										t.classList.add(...w),
										rW(() => {
											t.classList.remove(...v), t.classList.add(...b);
										}),
										a && a(t, () => n()),
										(!a || a.length < 2) &&
											(t.addEventListener('transitionend', n), t.addEventListener('animationend', n));
								}
							}
							(d = c), u(c);
						}),
						td((e) => {
							let t = c();
							return (
								(t.forEach((t) => {
									let n;
									(n = e.get(t))
										? n.new && ((n.new = !1), (n.newPos = rB(t)))
										: e.set(t, (n = { pos: rB(t), new: !h })),
										n.new &&
											t.addEventListener(
												'transitionend',
												() => {
													(n.new = !1), t.parentNode && (n.newPos = rB(t));
												},
												{ once: !0 },
											),
										n.newPos && (n.pos = n.newPos),
										(n.newPos = rB(t));
								}),
								h)
									? (h = !1)
									: (t.forEach((t) => {
											let n = e.get(t),
												r = n.pos,
												i = n.newPos,
												o = r.left - i.left,
												s = r.top - i.top;
											if (o || s) {
												n.moved = !0;
												let e = t.style;
												(e.transform = `translate(${o}px,${s}px)`), (e.transitionDuration = '0s');
											}
										}),
										document.body.offsetHeight,
										t.forEach((t) => {
											let r = e.get(t);
											if (r.moved) {
												let e = function (n) {
													(!n || n.target === t) &&
														t.parentNode &&
														(!n || /transform$/.test(n.propertyName)) &&
														(t.removeEventListener('transitionend', e), t.classList.remove(...o));
												};
												r.moved = !1;
												let i = t.style,
													o = n().moveClass.split(' ');
												t.classList.add(...o),
													(i.transform = i.transitionDuration = ''),
													t.addEventListener('transitionend', e);
											}
										})),
								e
							);
						}, new Map()),
						c
					);
				},
				rK = 'androidBackHandler',
				rH = { [rK]: !0 },
				rQ = tZ(
					'<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',
					4,
					!0,
				),
				rV = { left: 0, top: 90, right: 180, bottom: 270 },
				rz = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary,
						r = () => e.direction || 'left';
					return tP(
						nv('svg')`
        transform: rotate(${(e) => rV[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: '16',
							height: '16',
							viewBox: '0 0 16 16',
							fill: 'none',
							get svgDirection() {
								return r();
							},
							get children() {
								let e = rQ.cloneNode(!0);
								return tu(() => tY(e, 'fill', n())), e;
							},
						},
					);
				},
				rG = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>',
				),
				rZ = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let e = rG.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				rY = nv.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(e) => e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${rI} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rL} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
				rJ = (e) => {
					let t = r$(e),
						n = () => e.icon || 'close';
					return tP(
						rY,
						tN(
							{
								get class() {
									return e.class;
								},
								onClick: () => e.onClick(),
								'data-tc-icon-button': 'true',
							},
							t,
							{
								get children() {
									return [
										tP(tD, {
											get when() {
												return !!e.children;
											},
											get children() {
												return e.children;
											},
										}),
										tP(tD, {
											get when() {
												return !e.children;
											},
											get children() {
												return tP(tW, {
													get children() {
														return [
															tP(tj, {
																get when() {
																	return 'close' === n();
																},
																get children() {
																	return tP(rZ, {
																		get fill() {
																			return e.fill;
																		},
																	});
																},
															}),
															tP(tj, {
																get when() {
																	return 'arrow' === n();
																},
																get children() {
																	return tP(rz, {
																		get fill() {
																			return e.fill;
																		},
																	});
																},
															}),
															tP(tj, {
																get when() {
																	return 'question' === n();
																},
																get children() {
																	return tP(oi, {
																		get fill() {
																			return e.fill;
																		},
																	});
																},
															}),
															tP(tj, {
																get when() {
																	return 'string' != typeof n();
																},
																get children() {
																	return n();
																},
															}),
														];
													},
												});
											},
										}),
									];
								},
							},
						),
					);
				},
				rX = { m: '24px', s: '16px', none: '0' },
				r1 = nv.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${rP('mobile')} {
        padding-bottom: 0;
    }
`,
				r0 = nh`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${rP('mobile')} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
				r2 = nv.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${(e) => e.theme.colors.background.primary};
    border-radius: ${(e) => rX[e.theme.borderRadius]};

    ${rP('mobile')} {
        width: 100%;
    }
`,
				r5 = nv(rJ)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
				r4 = nv.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${(e) => rX[e.theme.borderRadius]}
        ${(e) => rX[e.theme.borderRadius]};
`,
				r3 = nv(rJ)`
    background-color: ${(e) => nk(e.theme.colors.icon.secondary, 0.12)};
`;
			class r6 {
				constructor() {
					e5(this, 'currentTime', 0);
				}
			}
			let r8 = class {
				constructor() {
					e5(this, 'currentTime', 0),
						e5(this, 'playbackRate', 1),
						e5(this, 'startTime', null),
						e5(this, 'timeline', new r6()),
						e5(this, 'finished', Promise.resolve(this)),
						e5(this, 'effect', null),
						e5(this, 'id', ''),
						e5(this, 'pending', !1),
						e5(this, 'playState', 'finished'),
						e5(this, 'replaceState', 'active'),
						e5(this, 'ready', Promise.resolve(this)),
						e5(this, 'oncancel', null),
						e5(this, 'onfinish', null),
						e5(this, 'onremove', null);
				}
				static create() {
					return (
						r8._instance ||
							(!(function (...e) {
								try {
									console.warn('[TON_CONNECT_UI]', ...e);
								} catch (e) {}
							})(
								'Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API.',
							),
							(r8._instance = new r8())),
						r8._instance
					);
				}
				cancel() {}
				finish() {}
				pause() {}
				play() {}
				reverse() {}
				addEventListener(e, t, n) {}
				dispatchEvent(e) {
					return !1;
				}
				removeEventListener(e, t, n) {}
				updatePlaybackRate(e) {}
				commitStyles() {}
				persist() {}
			};
			function r9(e, t, n) {
				return 'animate' in e ? e.animate(t, n) : r8.create();
			}
			e5(r8, '_instance', null);
			let r7 = tZ('<div></div>'),
				ie = function (e, t) {
					let n = (n) => {
						var r;
						return !e.contains(n.target) && (null == (r = t()) ? void 0 : r());
					};
					document.body.addEventListener('click', n), tp(() => document.body.removeEventListener('click', n));
				},
				it = function (e, t) {
					let n = (e) => {
						var n, r;
						'Escape' === e.key && (null == (n = document.activeElement) || n.blur(), null == (r = t()) || r());
					};
					document.body.addEventListener('keydown', n), tp(() => document.body.removeEventListener('keydown', n));
				},
				ir = function (e, t) {
					let { isEnabled: n, onClose: r } = t();
					if (!n || 'android' !== nU().os) return;
					window.history.pushState(rH, '');
					let i = (e) => {
						e.preventDefault(), r();
					};
					window.addEventListener('popstate', i, { once: !0 }),
						tp(() => {
							window.removeEventListener('popstate', i),
								nP(() => {
									var e;
									(null == (e = window.history.state) ? void 0 : e[rK]) === !0 && window.history.back();
								});
						});
				},
				ii = (e) => {
					let t = nm(),
						n = r$(e);
					return (
						td(() => {
							e.opened
								? document.documentElement.scrollHeight !== document.documentElement.clientHeight &&
									((document.body.style.top = nE(-document.documentElement.scrollTop)), document.body.classList.add(nC))
								: (document.body.classList.remove(nC),
									document.documentElement.scrollTo({ top: -parseFloat(getComputedStyle(document.body).top) }),
									(document.body.style.top = 'auto'));
						}),
						tP(rj, {
							onBeforeEnter: (e) => {
								let t = rA('mobile') ? 200 : 100;
								r9(e, [{ opacity: 0 }, { opacity: 1 }], { duration: t }),
									rA('mobile') &&
										r9(e.firstElementChild, [{ transform: 'translateY(390px)' }, { transform: 'translateY(0)' }], {
											duration: t,
										});
							},
							onExit: (e, t) => {
								let n = rA('mobile') ? 200 : 100,
									r = r9(e, [{ opacity: 1 }, { opacity: 0 }], { duration: n });
								if (rA('mobile')) {
									let i = r9(
										e.firstElementChild,
										[{ transform: 'translateY(0)' }, { transform: 'translateY(390px)' }],
										{ duration: n },
									);
									Promise.all([r.finished, i.finished]).then(t);
								} else r.finished.then(t);
							},
							get children() {
								return tP(tD, {
									get when() {
										return e.opened;
									},
									get children() {
										return tP(
											r1,
											tN({ 'data-tc-modal': 'true' }, n, {
												get children() {
													let n = r7.cloneNode(!0);
													return (
														t1(ir, n, () => ({ isEnabled: e.enableAndroidBackHandler, onClose: () => e.onClose() })),
														t1(it, n, () => () => e.onClose()),
														t1(ie, n, () => () => e.onClose()),
														t0(
															n,
															tP(r2, {
																get class() {
																	return e.class;
																},
																get children() {
																	return [tP(r5, { icon: 'close', onClick: () => e.onClose() }), th(() => e.children)];
																},
															}),
															null,
														),
														t0(
															n,
															tP(tD, {
																get when() {
																	return e.onClickQuestion;
																},
																get children() {
																	return tP(r4, {
																		get children() {
																			return [
																				tP(on, {}),
																				tP(r3, {
																					get onClick() {
																						return e.onClickQuestion;
																					},
																					icon: 'question',
																				}),
																			];
																		},
																	});
																},
															}),
															null,
														),
														tu(() =>
															tJ(
																n,
																eQ(
																	r0,
																	nh`
                                border-radius: ${rX[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${rP('mobile')} {
                                    border-radius: ${rX[t.borderRadius]}
                                        ${rX[t.borderRadius]} 0 0;
                                }
                            `,
																),
															),
														),
														n
													);
												},
											}),
										);
									},
								});
							},
						})
					);
				},
				io = { m: '22px', s: '12px', none: '0' },
				is = { m: '18px', s: '8px', none: '0' },
				ia = nv.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${(e) => io[e.theme.borderRadius]};

    background-color: ${(e) => e.theme.colors.background.secondary};
`,
				il = nv.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${(e) => is[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.segment};

    transform: ${(e) => (e.right ? 'translateX(100%)' : 'translateX(0)')};

    transition: transform 0.13s ease-in-out;
`,
				ic = nv.input`
    display: none;
`,
				iu = nv.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${(e) => (e.isActive ? 'default' : 'pointer')};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${(e) => (e.isActive ? 'none' : 'scale(1.025)')};
    }

    > * {
        ${(e) => (e.isActive ? '' : `color: ${e.theme.colors.text.secondary};`)}
    }
`,
				id = { m: '16px', s: '12px', none: '0' },
				ih = { m: '12px', s: '8px', none: '0' },
				ip = nv.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
				ig = nv.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${(e) => e.theme.colors.background.qr};
    border-radius: ${(e) => id[e.theme.borderRadius]};
    padding: ${nE(24)} 0;
    height: ${nE(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${rI} {
        &:hover {
            ${ip.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${ip.class} {
            transform: scale(0.96);
        }
    }

    ${rL} {
        &:active {
            ${ip.class} {
                transform: scale(0.92);
            }
        }
    }
`,
				im = nv.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${(e) => e.theme.colors.constant.black};
    }
`,
				iy = nv.div`
    position: absolute;
    width: ${nE(60)};
    height: ${nE(60)};
    background: ${(e) => e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
				iv = nv(rv)`
    width: ${(e) => nE(e.size)};
    height: ${(e) => nE(e.size)};
    border-radius: ${(e) => ih[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.qr};
`,
				iw = nv.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${(e) => e.theme.colors.background.segment};
`;
			var ib = { exports: {} };
			!(function (e, t) {
				var n = (function () {
					var e,
						t,
						n,
						r,
						i,
						o,
						s,
						a = function (e, t) {
							var n = e,
								r = c[t],
								i = null,
								o = 0,
								s = null,
								a = [],
								l = {},
								u = function (e, t) {
									(i = (function (e) {
										for (var t = Array(e), n = 0; n < e; n += 1) {
											t[n] = Array(e);
											for (var r = 0; r < e; r += 1) t[n][r] = null;
										}
										return t;
									})((o = 4 * n + 17))),
										h(0, 0),
										h(o - 7, 0),
										h(0, o - 7),
										x(),
										C(),
										E(e, t),
										n >= 7 && S(e),
										null == s && (s = _(n, r, a)),
										R(s, t);
								},
								h = function (e, t) {
									for (var n = -1; n <= 7; n += 1)
										if (!(e + n <= -1) && !(o <= e + n))
											for (var r = -1; r <= 7; r += 1)
												t + r <= -1 ||
													o <= t + r ||
													((0 <= n && n <= 6 && (0 == r || 6 == r)) ||
													(0 <= r && r <= 6 && (0 == n || 6 == n)) ||
													(2 <= n && n <= 4 && 2 <= r && r <= 4)
														? (i[e + n][t + r] = !0)
														: (i[e + n][t + r] = !1));
								},
								b = function () {
									for (var e = 0, t = 0, n = 0; n < 8; n += 1) {
										u(!0, n);
										var r = d.getLostPoint(l);
										(0 == n || e > r) && ((e = r), (t = n));
									}
									return t;
								},
								C = function () {
									for (var e = 8; e < o - 8; e += 1) null == i[e][6] && (i[e][6] = e % 2 == 0);
									for (var t = 8; t < o - 8; t += 1) null == i[6][t] && (i[6][t] = t % 2 == 0);
								},
								x = function () {
									for (var e = d.getPatternPosition(n), t = 0; t < e.length; t += 1)
										for (var r = 0; r < e.length; r += 1) {
											var o = e[t],
												s = e[r];
											if (null == i[o][s])
												for (var a = -2; a <= 2; a += 1)
													for (var l = -2; l <= 2; l += 1)
														-2 == a || 2 == a || -2 == l || 2 == l || (0 == a && 0 == l)
															? (i[o + a][s + l] = !0)
															: (i[o + a][s + l] = !1);
										}
								},
								S = function (e) {
									for (var t = d.getBCHTypeNumber(n), r = 0; r < 18; r += 1) {
										var s = !e && ((t >> r) & 1) == 1;
										i[Math.floor(r / 3)][(r % 3) + o - 8 - 3] = s;
									}
									for (var r = 0; r < 18; r += 1) {
										var s = !e && ((t >> r) & 1) == 1;
										i[(r % 3) + o - 8 - 3][Math.floor(r / 3)] = s;
									}
								},
								E = function (e, t) {
									for (var n = (r << 3) | t, s = d.getBCHTypeInfo(n), a = 0; a < 15; a += 1) {
										var l = !e && ((s >> a) & 1) == 1;
										a < 6 ? (i[a][8] = l) : a < 8 ? (i[a + 1][8] = l) : (i[o - 15 + a][8] = l);
									}
									for (var a = 0; a < 15; a += 1) {
										var l = !e && ((s >> a) & 1) == 1;
										a < 8 ? (i[8][o - a - 1] = l) : a < 9 ? (i[8][15 - a - 1 + 1] = l) : (i[8][15 - a - 1] = l);
									}
									i[o - 8][8] = !e;
								},
								R = function (e, t) {
									for (var n = -1, r = o - 1, s = 7, a = 0, l = d.getMaskFunction(t), c = o - 1; c > 0; c -= 2)
										for (6 == c && (c -= 1); ; ) {
											for (var u = 0; u < 2; u += 1)
												if (null == i[r][c - u]) {
													var h = !1;
													a < e.length && (h = ((e[a] >>> s) & 1) == 1),
														l(r, c - u) && (h = !h),
														(i[r][c - u] = h),
														-1 == (s -= 1) && ((a += 1), (s = 7));
												}
											if ((r += n) < 0 || o <= r) {
												(r -= n), (n = -n);
												break;
											}
										}
								},
								O = function (e, t) {
									for (var n = 0, r = 0, i = 0, o = Array(t.length), s = Array(t.length), a = 0; a < t.length; a += 1) {
										var l = t[a].dataCount,
											c = t[a].totalCount - l;
										(r = Math.max(r, l)), (i = Math.max(i, c)), (o[a] = Array(l));
										for (var u = 0; u < o[a].length; u += 1) o[a][u] = 255 & e.getBuffer()[u + n];
										n += l;
										var h = d.getErrorCorrectPolynomial(c),
											p = f(o[a], h.getLength() - 1).mod(h);
										s[a] = Array(h.getLength() - 1);
										for (var u = 0; u < s[a].length; u += 1) {
											var g = u + p.getLength() - s[a].length;
											s[a][u] = g >= 0 ? p.getAt(g) : 0;
										}
									}
									for (var m = 0, u = 0; u < t.length; u += 1) m += t[u].totalCount;
									for (var y = Array(m), v = 0, u = 0; u < r; u += 1)
										for (var a = 0; a < t.length; a += 1) u < o[a].length && ((y[v] = o[a][u]), (v += 1));
									for (var u = 0; u < i; u += 1)
										for (var a = 0; a < t.length; a += 1) u < s[a].length && ((y[v] = s[a][u]), (v += 1));
									return y;
								},
								_ = function (e, t, n) {
									for (var r = p.getRSBlocks(e, t), i = g(), o = 0; o < n.length; o += 1) {
										var s = n[o];
										i.put(s.getMode(), 4), i.put(s.getLength(), d.getLengthInBits(s.getMode(), e)), s.write(i);
									}
									for (var a = 0, o = 0; o < r.length; o += 1) a += r[o].dataCount;
									if (i.getLengthInBits() > 8 * a)
										throw 'code length overflow. (' + i.getLengthInBits() + '>' + 8 * a + ')';
									for (i.getLengthInBits() + 4 <= 8 * a && i.put(0, 4); i.getLengthInBits() % 8 != 0; ) i.putBit(!1);
									for (; !(i.getLengthInBits() >= 8 * a) && (i.put(236, 8), !(i.getLengthInBits() >= 8 * a)); ) {
										i.put(17, 8);
									}
									return O(i, r);
								};
							(l.addData = function (e, t) {
								var n = null;
								switch ((t = t || 'Byte')) {
									case 'Numeric':
										n = m(e);
										break;
									case 'Alphanumeric':
										n = y(e);
										break;
									case 'Byte':
										n = v(e);
										break;
									case 'Kanji':
										n = w(e);
										break;
									default:
										throw 'mode:' + t;
								}
								a.push(n), (s = null);
							}),
								(l.isDark = function (e, t) {
									if (e < 0 || o <= e || t < 0 || o <= t) throw e + ',' + t;
									return i[e][t];
								}),
								(l.getModuleCount = function () {
									return o;
								}),
								(l.make = function () {
									if (n < 1) {
										for (var e = 1; e < 40; e++) {
											for (var t = p.getRSBlocks(e, r), i = g(), o = 0; o < a.length; o++) {
												var s = a[o];
												i.put(s.getMode(), 4), i.put(s.getLength(), d.getLengthInBits(s.getMode(), e)), s.write(i);
											}
											for (var l = 0, o = 0; o < t.length; o++) l += t[o].dataCount;
											if (i.getLengthInBits() <= 8 * l) break;
										}
										n = e;
									}
									u(!1, b());
								}),
								(l.createTableTag = function (e, t) {
									e = e || 2;
									var n = '';
									n +=
										'<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' +
										(t = void 0 === t ? 4 * e : t) +
										'px;"><tbody>';
									for (var r = 0; r < l.getModuleCount(); r += 1) {
										n += '<tr>';
										for (var i = 0; i < l.getModuleCount(); i += 1)
											n +=
												'<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' +
												e +
												'px;' +
												(' height: ' + e) +
												'px; background-color: ' +
												(l.isDark(r, i) ? '#000000' : '#ffffff') +
												';"/>';
										n += '</tr>';
									}
									return n + '</tbody></table>';
								}),
								(l.createSvgTag = function (e, t, n, r) {
									var i = {};
									'object' == typeof arguments[0] &&
										((i = arguments[0]), (e = i.cellSize), (t = i.margin), (n = i.alt), (r = i.title)),
										(e = e || 2),
										(t = void 0 === t ? 4 * e : t),
										((n = 'string' == typeof n ? { text: n } : n || {}).text = n.text || null),
										(n.id = n.text ? n.id || 'qrcode-description' : null),
										((r = 'string' == typeof r ? { text: r } : r || {}).text = r.text || null),
										(r.id = r.text ? r.id || 'qrcode-title' : null);
									var o,
										s,
										a,
										c,
										u = l.getModuleCount() * e + 2 * t,
										d = '';
									for (
										c = 'l' + e + ',0 0,' + e + ' -' + e + ',0 0,-' + e + 'z ',
											d += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
											d += i.scalable ? '' : ' width="' + u + 'px" height="' + u + 'px"',
											d += ' viewBox="0 0 ' + u + ' ' + u + '" ',
											d += ' preserveAspectRatio="xMinYMin meet"',
											d +=
												r.text || n.text
													? ' role="img" aria-labelledby="' + T([r.id, n.id].join(' ').trim()) + '"'
													: '',
											d += '>',
											d += r.text ? '<title id="' + T(r.id) + '">' + T(r.text) + '</title>' : '',
											d += n.text ? '<description id="' + T(n.id) + '">' + T(n.text) + '</description>' : '',
											d += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
											d += '<path d="',
											s = 0;
										s < l.getModuleCount();
										s += 1
									)
										for (o = 0, a = s * e + t; o < l.getModuleCount(); o += 1)
											l.isDark(s, o) && (d += 'M' + (o * e + t) + ',' + a + c);
									return (d += '" stroke="transparent" fill="black"/>'), (d += '</svg>');
								}),
								(l.createDataURL = function (e, t) {
									(e = e || 2), (t = void 0 === t ? 4 * e : t);
									var n = l.getModuleCount() * e + 2 * t,
										r = t,
										i = n - t;
									return k(n, n, function (t, n) {
										if (!(r <= t) || !(t < i) || !(r <= n) || !(n < i)) return 1;
										var o = Math.floor((t - r) / e),
											s = Math.floor((n - r) / e);
										return +!l.isDark(s, o);
									});
								}),
								(l.createImgTag = function (e, t, n) {
									(e = e || 2), (t = void 0 === t ? 4 * e : t);
									var r = l.getModuleCount() * e + 2 * t,
										i = '';
									return (
										(i += '<img'),
										(i += ' src="'),
										(i += l.createDataURL(e, t)),
										(i += '"'),
										(i += ' width="'),
										(i += r),
										(i += '"'),
										(i += ' height="'),
										(i += r),
										(i += '"'),
										n && ((i += ' alt="'), (i += T(n)), (i += '"')),
										(i += '/>')
									);
								});
							var T = function (e) {
									for (var t = '', n = 0; n < e.length; n += 1) {
										var r = e.charAt(n);
										switch (r) {
											case '<':
												t += '&lt;';
												break;
											case '>':
												t += '&gt;';
												break;
											case '&':
												t += '&amp;';
												break;
											case '"':
												t += '&quot;';
												break;
											default:
												t += r;
										}
									}
									return t;
								},
								M = function (e) {
									e = void 0 === e ? 2 : e;
									var t,
										n,
										r,
										i,
										o,
										s = +l.getModuleCount() + 2 * e,
										a = e,
										c = s - e,
										u = { '██': '█', '█ ': '▀', ' █': '▄', '  ': ' ' },
										d = { '██': '▀', '█ ': '▀', ' █': ' ', '  ': ' ' },
										h = '';
									for (t = 0; t < s; t += 2) {
										for (n = 0, r = Math.floor((t - a) / 1), i = Math.floor((t + 1 - a) / 1); n < s; n += 1)
											(o = '█'),
												a <= n && n < c && a <= t && t < c && l.isDark(r, Math.floor((n - a) / 1)) && (o = ' '),
												a <= n && n < c && a <= t + 1 && t + 1 < c && l.isDark(i, Math.floor((n - a) / 1))
													? (o += ' ')
													: (o += '█'),
												(h += e < 1 && t + 1 >= c ? d[o] : u[o]);
										h += '\n';
									}
									return s % 2 && e > 0
										? h.substring(0, h.length - s - 1) + Array(s + 1).join('▀')
										: h.substring(0, h.length - 1);
								};
							return (
								(l.createASCII = function (e, t) {
									if ((e = e || 1) < 2) return M(t);
									(e -= 1), (t = void 0 === t ? 2 * e : t);
									var n,
										r,
										i,
										o,
										s = l.getModuleCount() * e + 2 * t,
										a = t,
										c = s - t,
										u = Array(e + 1).join('██'),
										d = Array(e + 1).join('  '),
										h = '',
										f = '';
									for (n = 0; n < s; n += 1) {
										for (r = 0, i = Math.floor((n - a) / e), f = ''; r < s; r += 1)
											(o = 1),
												a <= r && r < c && a <= n && n < c && l.isDark(i, Math.floor((r - a) / e)) && (o = 0),
												(f += o ? u : d);
										for (i = 0; i < e; i += 1) h += f + '\n';
									}
									return h.substring(0, h.length - 1);
								}),
								(l.renderTo2dContext = function (e, t) {
									t = t || 2;
									for (var n = l.getModuleCount(), r = 0; r < n; r++)
										for (var i = 0; i < n; i++)
											(e.fillStyle = l.isDark(r, i) ? 'black' : 'white'), e.fillRect(r * t, i * t, t, t);
								}),
								l
							);
						};
					(a.stringToBytesFuncs = {
						default: function (e) {
							for (var t = [], n = 0; n < e.length; n += 1) {
								var r = e.charCodeAt(n);
								t.push(255 & r);
							}
							return t;
						},
					}),
						(a.stringToBytes = a.stringToBytesFuncs.default),
						(a.createStringToBytes = function (e, t) {
							var n = (function () {
								for (
									var n = x(e),
										r = function () {
											var e = n.read();
											if (-1 == e) throw 'eof';
											return e;
										},
										i = 0,
										o = {};
									;

								) {
									var s = n.read();
									if (-1 == s) break;
									var a = r(),
										l = r(),
										c = r(),
										u = String.fromCharCode((s << 8) | a),
										d = (l << 8) | c;
									(o[u] = d), (i += 1);
								}
								if (i != t) throw i + ' != ' + t;
								return o;
							})();
							return function (e) {
								for (var t = [], r = 0; r < e.length; r += 1) {
									var i = e.charCodeAt(r);
									if (i < 128) t.push(i);
									else {
										var o = n[e.charAt(r)];
										'number' == typeof o
											? (255 & o) == o
												? t.push(o)
												: (t.push(o >>> 8), t.push(255 & o))
											: t.push(63);
									}
								}
								return t;
							};
						});
					var l = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
						c = { L: 1, M: 0, Q: 3, H: 2 },
						u = {
							PATTERN000: 0,
							PATTERN001: 1,
							PATTERN010: 2,
							PATTERN011: 3,
							PATTERN100: 4,
							PATTERN101: 5,
							PATTERN110: 6,
							PATTERN111: 7,
						},
						d =
							((e = [
								[],
								[6, 18],
								[6, 22],
								[6, 26],
								[6, 30],
								[6, 34],
								[6, 22, 38],
								[6, 24, 42],
								[6, 26, 46],
								[6, 28, 50],
								[6, 30, 54],
								[6, 32, 58],
								[6, 34, 62],
								[6, 26, 46, 66],
								[6, 26, 48, 70],
								[6, 26, 50, 74],
								[6, 30, 54, 78],
								[6, 30, 56, 82],
								[6, 30, 58, 86],
								[6, 34, 62, 90],
								[6, 28, 50, 72, 94],
								[6, 26, 50, 74, 98],
								[6, 30, 54, 78, 102],
								[6, 28, 54, 80, 106],
								[6, 32, 58, 84, 110],
								[6, 30, 58, 86, 114],
								[6, 34, 62, 90, 118],
								[6, 26, 50, 74, 98, 122],
								[6, 30, 54, 78, 102, 126],
								[6, 26, 52, 78, 104, 130],
								[6, 30, 56, 82, 108, 134],
								[6, 34, 60, 86, 112, 138],
								[6, 30, 58, 86, 114, 142],
								[6, 34, 62, 90, 118, 146],
								[6, 30, 54, 78, 102, 126, 150],
								[6, 24, 50, 76, 102, 128, 154],
								[6, 28, 54, 80, 106, 132, 158],
								[6, 32, 58, 84, 110, 136, 162],
								[6, 26, 54, 82, 110, 138, 166],
								[6, 30, 58, 86, 114, 142, 170],
							]),
							(t = {}),
							(n = function (e) {
								for (var t = 0; 0 != e; ) (t += 1), (e >>>= 1);
								return t;
							}),
							(t.getBCHTypeInfo = function (e) {
								for (var t = e << 10; n(t) - n(1335) >= 0; ) t ^= 1335 << (n(t) - n(1335));
								return ((e << 10) | t) ^ 21522;
							}),
							(t.getBCHTypeNumber = function (e) {
								for (var t = e << 12; n(t) - n(7973) >= 0; ) t ^= 7973 << (n(t) - n(7973));
								return (e << 12) | t;
							}),
							(t.getPatternPosition = function (t) {
								return e[t - 1];
							}),
							(t.getMaskFunction = function (e) {
								switch (e) {
									case u.PATTERN000:
										return function (e, t) {
											return (e + t) % 2 == 0;
										};
									case u.PATTERN001:
										return function (e, t) {
											return e % 2 == 0;
										};
									case u.PATTERN010:
										return function (e, t) {
											return t % 3 == 0;
										};
									case u.PATTERN011:
										return function (e, t) {
											return (e + t) % 3 == 0;
										};
									case u.PATTERN100:
										return function (e, t) {
											return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0;
										};
									case u.PATTERN101:
										return function (e, t) {
											return ((e * t) % 2) + ((e * t) % 3) == 0;
										};
									case u.PATTERN110:
										return function (e, t) {
											return (((e * t) % 2) + ((e * t) % 3)) % 2 == 0;
										};
									case u.PATTERN111:
										return function (e, t) {
											return (((e * t) % 3) + ((e + t) % 2)) % 2 == 0;
										};
									default:
										throw 'bad maskPattern:' + e;
								}
							}),
							(t.getErrorCorrectPolynomial = function (e) {
								for (var t = f([1], 0), n = 0; n < e; n += 1) t = t.multiply(f([1, h.gexp(n)], 0));
								return t;
							}),
							(t.getLengthInBits = function (e, t) {
								if (1 <= t && t < 10)
									switch (e) {
										case l.MODE_NUMBER:
											return 10;
										case l.MODE_ALPHA_NUM:
											return 9;
										case l.MODE_8BIT_BYTE:
										case l.MODE_KANJI:
											return 8;
										default:
											throw 'mode:' + e;
									}
								if (t < 27)
									switch (e) {
										case l.MODE_NUMBER:
											return 12;
										case l.MODE_ALPHA_NUM:
											return 11;
										case l.MODE_8BIT_BYTE:
											return 16;
										case l.MODE_KANJI:
											return 10;
										default:
											throw 'mode:' + e;
									}
								if (t < 41)
									switch (e) {
										case l.MODE_NUMBER:
											return 14;
										case l.MODE_ALPHA_NUM:
											return 13;
										case l.MODE_8BIT_BYTE:
											return 16;
										case l.MODE_KANJI:
											return 12;
										default:
											throw 'mode:' + e;
									}
								throw 'type:' + t;
							}),
							(t.getLostPoint = function (e) {
								for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r += 1)
									for (var i = 0; i < t; i += 1) {
										for (var o = 0, s = e.isDark(r, i), a = -1; a <= 1; a += 1)
											if (!(r + a < 0) && !(t <= r + a))
												for (var l = -1; l <= 1; l += 1)
													i + l < 0 || t <= i + l || ((0 != a || 0 != l) && s == e.isDark(r + a, i + l) && (o += 1));
										o > 5 && (n += 3 + o - 5);
									}
								for (var r = 0; r < t - 1; r += 1)
									for (var i = 0; i < t - 1; i += 1) {
										var c = 0;
										e.isDark(r, i) && (c += 1),
											e.isDark(r + 1, i) && (c += 1),
											e.isDark(r, i + 1) && (c += 1),
											e.isDark(r + 1, i + 1) && (c += 1),
											(0 == c || 4 == c) && (n += 3);
									}
								for (var r = 0; r < t; r += 1)
									for (var i = 0; i < t - 6; i += 1)
										e.isDark(r, i) &&
											!e.isDark(r, i + 1) &&
											e.isDark(r, i + 2) &&
											e.isDark(r, i + 3) &&
											e.isDark(r, i + 4) &&
											!e.isDark(r, i + 5) &&
											e.isDark(r, i + 6) &&
											(n += 40);
								for (var i = 0; i < t; i += 1)
									for (var r = 0; r < t - 6; r += 1)
										e.isDark(r, i) &&
											!e.isDark(r + 1, i) &&
											e.isDark(r + 2, i) &&
											e.isDark(r + 3, i) &&
											e.isDark(r + 4, i) &&
											!e.isDark(r + 5, i) &&
											e.isDark(r + 6, i) &&
											(n += 40);
								for (var u = 0, i = 0; i < t; i += 1) for (var r = 0; r < t; r += 1) e.isDark(r, i) && (u += 1);
								return n + 10 * (Math.abs((100 * u) / t / t - 50) / 5);
							}),
							t),
						h = (function () {
							for (var e = Array(256), t = Array(256), n = 0; n < 8; n += 1) e[n] = 1 << n;
							for (var n = 8; n < 256; n += 1) e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
							for (var n = 0; n < 255; n += 1) t[e[n]] = n;
							var r = {};
							return (
								(r.glog = function (e) {
									if (e < 1) throw 'glog(' + e + ')';
									return t[e];
								}),
								(r.gexp = function (t) {
									for (; t < 0; ) t += 255;
									for (; t >= 256; ) t -= 255;
									return e[t];
								}),
								r
							);
						})();
					function f(e, t) {
						if (void 0 === e.length) throw e.length + '/' + t;
						var n = (function () {
								for (var n = 0; n < e.length && 0 == e[n]; ) n += 1;
								for (var r = Array(e.length - n + t), i = 0; i < e.length - n; i += 1) r[i] = e[i + n];
								return r;
							})(),
							r = {};
						return (
							(r.getAt = function (e) {
								return n[e];
							}),
							(r.getLength = function () {
								return n.length;
							}),
							(r.multiply = function (e) {
								for (var t = Array(r.getLength() + e.getLength() - 1), n = 0; n < r.getLength(); n += 1)
									for (var i = 0; i < e.getLength(); i += 1)
										t[n + i] ^= h.gexp(h.glog(r.getAt(n)) + h.glog(e.getAt(i)));
								return f(t, 0);
							}),
							(r.mod = function (e) {
								if (r.getLength() - e.getLength() < 0) return r;
								for (
									var t = h.glog(r.getAt(0)) - h.glog(e.getAt(0)), n = Array(r.getLength()), i = 0;
									i < r.getLength();
									i += 1
								)
									n[i] = r.getAt(i);
								for (var i = 0; i < e.getLength(); i += 1) n[i] ^= h.gexp(h.glog(e.getAt(i)) + t);
								return f(n, 0).mod(e);
							}),
							r
						);
					}
					var p =
							((r = [
								[1, 26, 19],
								[1, 26, 16],
								[1, 26, 13],
								[1, 26, 9],
								[1, 44, 34],
								[1, 44, 28],
								[1, 44, 22],
								[1, 44, 16],
								[1, 70, 55],
								[1, 70, 44],
								[2, 35, 17],
								[2, 35, 13],
								[1, 100, 80],
								[2, 50, 32],
								[2, 50, 24],
								[4, 25, 9],
								[1, 134, 108],
								[2, 67, 43],
								[2, 33, 15, 2, 34, 16],
								[2, 33, 11, 2, 34, 12],
								[2, 86, 68],
								[4, 43, 27],
								[4, 43, 19],
								[4, 43, 15],
								[2, 98, 78],
								[4, 49, 31],
								[2, 32, 14, 4, 33, 15],
								[4, 39, 13, 1, 40, 14],
								[2, 121, 97],
								[2, 60, 38, 2, 61, 39],
								[4, 40, 18, 2, 41, 19],
								[4, 40, 14, 2, 41, 15],
								[2, 146, 116],
								[3, 58, 36, 2, 59, 37],
								[4, 36, 16, 4, 37, 17],
								[4, 36, 12, 4, 37, 13],
								[2, 86, 68, 2, 87, 69],
								[4, 69, 43, 1, 70, 44],
								[6, 43, 19, 2, 44, 20],
								[6, 43, 15, 2, 44, 16],
								[4, 101, 81],
								[1, 80, 50, 4, 81, 51],
								[4, 50, 22, 4, 51, 23],
								[3, 36, 12, 8, 37, 13],
								[2, 116, 92, 2, 117, 93],
								[6, 58, 36, 2, 59, 37],
								[4, 46, 20, 6, 47, 21],
								[7, 42, 14, 4, 43, 15],
								[4, 133, 107],
								[8, 59, 37, 1, 60, 38],
								[8, 44, 20, 4, 45, 21],
								[12, 33, 11, 4, 34, 12],
								[3, 145, 115, 1, 146, 116],
								[4, 64, 40, 5, 65, 41],
								[11, 36, 16, 5, 37, 17],
								[11, 36, 12, 5, 37, 13],
								[5, 109, 87, 1, 110, 88],
								[5, 65, 41, 5, 66, 42],
								[5, 54, 24, 7, 55, 25],
								[11, 36, 12, 7, 37, 13],
								[5, 122, 98, 1, 123, 99],
								[7, 73, 45, 3, 74, 46],
								[15, 43, 19, 2, 44, 20],
								[3, 45, 15, 13, 46, 16],
								[1, 135, 107, 5, 136, 108],
								[10, 74, 46, 1, 75, 47],
								[1, 50, 22, 15, 51, 23],
								[2, 42, 14, 17, 43, 15],
								[5, 150, 120, 1, 151, 121],
								[9, 69, 43, 4, 70, 44],
								[17, 50, 22, 1, 51, 23],
								[2, 42, 14, 19, 43, 15],
								[3, 141, 113, 4, 142, 114],
								[3, 70, 44, 11, 71, 45],
								[17, 47, 21, 4, 48, 22],
								[9, 39, 13, 16, 40, 14],
								[3, 135, 107, 5, 136, 108],
								[3, 67, 41, 13, 68, 42],
								[15, 54, 24, 5, 55, 25],
								[15, 43, 15, 10, 44, 16],
								[4, 144, 116, 4, 145, 117],
								[17, 68, 42],
								[17, 50, 22, 6, 51, 23],
								[19, 46, 16, 6, 47, 17],
								[2, 139, 111, 7, 140, 112],
								[17, 74, 46],
								[7, 54, 24, 16, 55, 25],
								[34, 37, 13],
								[4, 151, 121, 5, 152, 122],
								[4, 75, 47, 14, 76, 48],
								[11, 54, 24, 14, 55, 25],
								[16, 45, 15, 14, 46, 16],
								[6, 147, 117, 4, 148, 118],
								[6, 73, 45, 14, 74, 46],
								[11, 54, 24, 16, 55, 25],
								[30, 46, 16, 2, 47, 17],
								[8, 132, 106, 4, 133, 107],
								[8, 75, 47, 13, 76, 48],
								[7, 54, 24, 22, 55, 25],
								[22, 45, 15, 13, 46, 16],
								[10, 142, 114, 2, 143, 115],
								[19, 74, 46, 4, 75, 47],
								[28, 50, 22, 6, 51, 23],
								[33, 46, 16, 4, 47, 17],
								[8, 152, 122, 4, 153, 123],
								[22, 73, 45, 3, 74, 46],
								[8, 53, 23, 26, 54, 24],
								[12, 45, 15, 28, 46, 16],
								[3, 147, 117, 10, 148, 118],
								[3, 73, 45, 23, 74, 46],
								[4, 54, 24, 31, 55, 25],
								[11, 45, 15, 31, 46, 16],
								[7, 146, 116, 7, 147, 117],
								[21, 73, 45, 7, 74, 46],
								[1, 53, 23, 37, 54, 24],
								[19, 45, 15, 26, 46, 16],
								[5, 145, 115, 10, 146, 116],
								[19, 75, 47, 10, 76, 48],
								[15, 54, 24, 25, 55, 25],
								[23, 45, 15, 25, 46, 16],
								[13, 145, 115, 3, 146, 116],
								[2, 74, 46, 29, 75, 47],
								[42, 54, 24, 1, 55, 25],
								[23, 45, 15, 28, 46, 16],
								[17, 145, 115],
								[10, 74, 46, 23, 75, 47],
								[10, 54, 24, 35, 55, 25],
								[19, 45, 15, 35, 46, 16],
								[17, 145, 115, 1, 146, 116],
								[14, 74, 46, 21, 75, 47],
								[29, 54, 24, 19, 55, 25],
								[11, 45, 15, 46, 46, 16],
								[13, 145, 115, 6, 146, 116],
								[14, 74, 46, 23, 75, 47],
								[44, 54, 24, 7, 55, 25],
								[59, 46, 16, 1, 47, 17],
								[12, 151, 121, 7, 152, 122],
								[12, 75, 47, 26, 76, 48],
								[39, 54, 24, 14, 55, 25],
								[22, 45, 15, 41, 46, 16],
								[6, 151, 121, 14, 152, 122],
								[6, 75, 47, 34, 76, 48],
								[46, 54, 24, 10, 55, 25],
								[2, 45, 15, 64, 46, 16],
								[17, 152, 122, 4, 153, 123],
								[29, 74, 46, 14, 75, 47],
								[49, 54, 24, 10, 55, 25],
								[24, 45, 15, 46, 46, 16],
								[4, 152, 122, 18, 153, 123],
								[13, 74, 46, 32, 75, 47],
								[48, 54, 24, 14, 55, 25],
								[42, 45, 15, 32, 46, 16],
								[20, 147, 117, 4, 148, 118],
								[40, 75, 47, 7, 76, 48],
								[43, 54, 24, 22, 55, 25],
								[10, 45, 15, 67, 46, 16],
								[19, 148, 118, 6, 149, 119],
								[18, 75, 47, 31, 76, 48],
								[34, 54, 24, 34, 55, 25],
								[20, 45, 15, 61, 46, 16],
							]),
							(i = function (e, t) {
								var n = {};
								return (n.totalCount = e), (n.dataCount = t), n;
							}),
							(o = {}),
							(s = function (e, t) {
								switch (t) {
									case c.L:
										return r[(e - 1) * 4 + 0];
									case c.M:
										return r[(e - 1) * 4 + 1];
									case c.Q:
										return r[(e - 1) * 4 + 2];
									case c.H:
										return r[(e - 1) * 4 + 3];
									default:
										return;
								}
							}),
							(o.getRSBlocks = function (e, t) {
								var n = s(e, t);
								if (void 0 === n) throw 'bad rs block @ typeNumber:' + e + '/errorCorrectionLevel:' + t;
								for (var r = n.length / 3, o = [], a = 0; a < r; a += 1)
									for (var l = n[3 * a + 0], c = n[3 * a + 1], u = n[3 * a + 2], d = 0; d < l; d += 1) o.push(i(c, u));
								return o;
							}),
							o),
						g = function () {
							var e = [],
								t = 0,
								n = {};
							return (
								(n.getBuffer = function () {
									return e;
								}),
								(n.getAt = function (t) {
									return ((e[Math.floor(t / 8)] >>> (7 - (t % 8))) & 1) == 1;
								}),
								(n.put = function (e, t) {
									for (var r = 0; r < t; r += 1) n.putBit(((e >>> (t - r - 1)) & 1) == 1);
								}),
								(n.getLengthInBits = function () {
									return t;
								}),
								(n.putBit = function (n) {
									var r = Math.floor(t / 8);
									e.length <= r && e.push(0), n && (e[r] |= 128 >>> t % 8), (t += 1);
								}),
								n
							);
						},
						m = function (e) {
							var t = l.MODE_NUMBER,
								n = {};
							(n.getMode = function () {
								return t;
							}),
								(n.getLength = function (t) {
									return e.length;
								}),
								(n.write = function (t) {
									for (var n = 0; n + 2 < e.length; ) t.put(r(e.substring(n, n + 3)), 10), (n += 3);
									n < e.length &&
										(e.length - n == 1
											? t.put(r(e.substring(n, n + 1)), 4)
											: e.length - n == 2 && t.put(r(e.substring(n, n + 2)), 7));
								});
							var r = function (e) {
									for (var t = 0, n = 0; n < e.length; n += 1) t = 10 * t + i(e.charAt(n));
									return t;
								},
								i = function (e) {
									if ('0' <= e && e <= '9') return e.charCodeAt(0) - 48;
									throw 'illegal char :' + e;
								};
							return n;
						},
						y = function (e) {
							var t = l.MODE_ALPHA_NUM,
								n = {};
							(n.getMode = function () {
								return t;
							}),
								(n.getLength = function (t) {
									return e.length;
								}),
								(n.write = function (t) {
									for (var n = 0; n + 1 < e.length; ) t.put(45 * r(e.charAt(n)) + r(e.charAt(n + 1)), 11), (n += 2);
									n < e.length && t.put(r(e.charAt(n)), 6);
								});
							var r = function (e) {
								if ('0' <= e && e <= '9') return e.charCodeAt(0) - 48;
								if ('A' <= e && e <= 'Z') return e.charCodeAt(0) - 65 + 10;
								switch (e) {
									case ' ':
										return 36;
									case '$':
										return 37;
									case '%':
										return 38;
									case '*':
										return 39;
									case '+':
										return 40;
									case '-':
										return 41;
									case '.':
										return 42;
									case '/':
										return 43;
									case ':':
										return 44;
									default:
										throw 'illegal char :' + e;
								}
							};
							return n;
						},
						v = function (e) {
							var t = l.MODE_8BIT_BYTE,
								n = a.stringToBytes(e),
								r = {};
							return (
								(r.getMode = function () {
									return t;
								}),
								(r.getLength = function (e) {
									return n.length;
								}),
								(r.write = function (e) {
									for (var t = 0; t < n.length; t += 1) e.put(n[t], 8);
								}),
								r
							);
						},
						w = function (e) {
							var t = l.MODE_KANJI,
								n = a.stringToBytesFuncs.SJIS;
							if (!n) throw 'sjis not supported.';
							var r = n('友');
							if (2 != r.length || ((r[0] << 8) | r[1]) != 38726) throw 'sjis not supported.';
							var i = n(e),
								o = {};
							return (
								(o.getMode = function () {
									return t;
								}),
								(o.getLength = function (e) {
									return ~~(i.length / 2);
								}),
								(o.write = function (e) {
									for (var t = 0; t + 1 < i.length; ) {
										var n = ((255 & i[t]) << 8) | (255 & i[t + 1]);
										if (33088 <= n && n <= 40956) n -= 33088;
										else if (57408 <= n && n <= 60351) n -= 49472;
										else throw 'illegal char at ' + (t + 1) + '/' + n;
										(n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13), (t += 2);
									}
									if (t < i.length) throw 'illegal char at ' + (t + 1);
								}),
								o
							);
						},
						b = function () {
							var e = [],
								t = {};
							return (
								(t.writeByte = function (t) {
									e.push(255 & t);
								}),
								(t.writeShort = function (e) {
									t.writeByte(e), t.writeByte(e >>> 8);
								}),
								(t.writeBytes = function (e, n, r) {
									(n = n || 0), (r = r || e.length);
									for (var i = 0; i < r; i += 1) t.writeByte(e[i + n]);
								}),
								(t.writeString = function (e) {
									for (var n = 0; n < e.length; n += 1) t.writeByte(e.charCodeAt(n));
								}),
								(t.toByteArray = function () {
									return e;
								}),
								(t.toString = function () {
									var t = '';
									t += '[';
									for (var n = 0; n < e.length; n += 1) n > 0 && (t += ','), (t += e[n]);
									return t + ']';
								}),
								t
							);
						},
						C = function () {
							var e = 0,
								t = 0,
								n = 0,
								r = '',
								i = {},
								o = function (e) {
									r += String.fromCharCode(s(63 & e));
								},
								s = function (e) {
									if (e < 0);
									else if (e < 26) return 65 + e;
									else if (e < 52) return 97 + (e - 26);
									else if (e < 62) return 48 + (e - 52);
									else if (62 == e) return 43;
									else if (63 == e) return 47;
									throw 'n:' + e;
								};
							return (
								(i.writeByte = function (r) {
									for (e = (e << 8) | (255 & r), t += 8, n += 1; t >= 6; ) o(e >>> (t - 6)), (t -= 6);
								}),
								(i.flush = function () {
									if ((t > 0 && (o(e << (6 - t)), (e = 0), (t = 0)), n % 3 != 0))
										for (var i = 3 - (n % 3), s = 0; s < i; s += 1) r += '=';
								}),
								(i.toString = function () {
									return r;
								}),
								i
							);
						},
						x = function (e) {
							var t = 0,
								n = 0,
								r = 0,
								i = {};
							i.read = function () {
								for (; r < 8; ) {
									if (t >= e.length) {
										if (0 == r) return -1;
										throw 'unexpected end of file./' + r;
									}
									var i = e.charAt(t);
									if (((t += 1), '=' == i)) return (r = 0), -1;
									i.match(/^\s$/) || ((n = (n << 6) | o(i.charCodeAt(0))), (r += 6));
								}
								var s = (n >>> (r - 8)) & 255;
								return (r -= 8), s;
							};
							var o = function (e) {
								if (65 <= e && e <= 90) return e - 65;
								if (97 <= e && e <= 122) return e - 97 + 26;
								if (48 <= e && e <= 57) return e - 48 + 52;
								if (43 == e) return 62;
								if (47 == e) return 63;
								else throw 'c:' + e;
							};
							return i;
						},
						S = function (e, t) {
							var n = Array(e * t),
								r = {};
							(r.setPixel = function (t, r, i) {
								n[r * e + t] = i;
							}),
								(r.write = function (n) {
									n.writeString('GIF87a'),
										n.writeShort(e),
										n.writeShort(t),
										n.writeByte(128),
										n.writeByte(0),
										n.writeByte(0),
										n.writeByte(0),
										n.writeByte(0),
										n.writeByte(0),
										n.writeByte(255),
										n.writeByte(255),
										n.writeByte(255),
										n.writeString(','),
										n.writeShort(0),
										n.writeShort(0),
										n.writeShort(e),
										n.writeShort(t),
										n.writeByte(0);
									var r = o(2);
									n.writeByte(2);
									for (var i = 0; r.length - i > 255; ) n.writeByte(255), n.writeBytes(r, i, 255), (i += 255);
									n.writeByte(r.length - i), n.writeBytes(r, i, r.length - i), n.writeByte(0), n.writeString(';');
								});
							var i = function (e) {
									var t = 0,
										n = 0,
										r = {};
									return (
										(r.write = function (r, i) {
											if (r >>> i != 0) throw 'length over';
											for (; t + i >= 8; )
												e.writeByte(255 & ((r << t) | n)), (i -= 8 - t), (r >>>= 8 - t), (n = 0), (t = 0);
											(n = (r << t) | n), (t += i);
										}),
										(r.flush = function () {
											t > 0 && e.writeByte(n);
										}),
										r
									);
								},
								o = function (e) {
									for (var t = 1 << e, r = (1 << e) + 1, o = e + 1, a = s(), l = 0; l < t; l += 1)
										a.add(String.fromCharCode(l));
									a.add(String.fromCharCode(t)), a.add(String.fromCharCode(r));
									var c = b(),
										u = i(c);
									u.write(t, o);
									var d = 0,
										h = String.fromCharCode(n[0]);
									for (d += 1; d < n.length; ) {
										var f = String.fromCharCode(n[d]);
										(d += 1),
											a.contains(h + f)
												? (h += f)
												: (u.write(a.indexOf(h), o),
													4095 > a.size() && (a.size() == 1 << o && (o += 1), a.add(h + f)),
													(h = f));
									}
									return u.write(a.indexOf(h), o), u.write(r, o), u.flush(), c.toByteArray();
								},
								s = function () {
									var e = {},
										t = 0,
										n = {};
									return (
										(n.add = function (r) {
											if (n.contains(r)) throw 'dup key:' + r;
											(e[r] = t), (t += 1);
										}),
										(n.size = function () {
											return t;
										}),
										(n.indexOf = function (t) {
											return e[t];
										}),
										(n.contains = function (t) {
											return void 0 !== e[t];
										}),
										n
									);
								};
							return r;
						},
						k = function (e, t, n) {
							for (var r = S(e, t), i = 0; i < t; i += 1) for (var o = 0; o < e; o += 1) r.setPixel(o, i, n(o, i));
							var s = b();
							r.write(s);
							for (var a = C(), l = s.toByteArray(), c = 0; c < l.length; c += 1) a.writeByte(l[c]);
							return a.flush(), 'data:image/gif;base64,' + a;
						};
					return a;
				})();
				(n.stringToBytesFuncs['UTF-8'] = function (e) {
					for (var t = [], n = 0; n < e.length; n++) {
						var r = e.charCodeAt(n);
						r < 128
							? t.push(r)
							: r < 2048
								? t.push(192 | (r >> 6), 128 | (63 & r))
								: r < 55296 || r >= 57344
									? t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
									: (n++,
										(r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
										t.push(240 | (r >> 18), 128 | ((r >> 12) & 63), 128 | ((r >> 6) & 63), 128 | (63 & r)));
					}
					return t;
				}),
					(e.exports = n);
			})(ib);
			let iC = ib.exports;
			function ix(e) {
				return e4(this, null, function* () {
					try {
						if (!(null == navigator ? void 0 : navigator.clipboard)) throw new nO('Clipboard API not available');
						return yield navigator.clipboard.writeText(e);
					} catch (e) {}
					var t = e;
					let n = document.createElement('textarea');
					(n.value = t),
						(n.style.top = '0'),
						(n.style.left = '0'),
						(n.style.position = 'fixed'),
						document.body.appendChild(n),
						n.focus(),
						n.select();
					try {
						document.execCommand('copy');
					} finally {
						document.body.removeChild(n);
					}
				});
			}
			let iS = tZ('<div></div>'),
				ik = (e) => {
					let t,
						n,
						r,
						[i, o] = tl(!1),
						[s, a] = tl(48);
					td(() => {
						let i = iC(0, 'L');
						i.addData(e.sourceUrl), i.make(), (t.innerHTML = i.createSvgTag(4, 0));
						let o = t.firstElementChild.clientWidth,
							s = Math.round((256 / o) * 1e5) / 1e5;
						if (r) {
							let e = 4 * Math.ceil(60 / (4 * s)),
								t = nE(4 * Math.ceil((o - e) / 8));
							(r.style.top = t),
								(r.style.left = t),
								(r.style.height = nE(e)),
								(r.style.width = nE(e)),
								a(Math.round(48 / s));
						}
						n.style.transform = `scale(${s})`;
					});
					let l = null;
					return tP(ig, {
						get class() {
							return e.class;
						},
						onClick: () => {
							o(!0), ix(e.sourceUrl), null != l && clearTimeout(l), (l = setTimeout(() => o(!1), 1500));
						},
						get children() {
							return [
								tP(im, {
									ref(e) {
										let t = n;
										'function' == typeof t ? t(e) : (n = e);
									},
									get children() {
										return [
											(() => {
												let e = iS.cloneNode(!0),
													n = t;
												return 'function' == typeof n ? t1(n, e) : (t = e), e;
											})(),
											tP(tD, {
												get when() {
													return e.imageUrl;
												},
												get children() {
													return tP(iy, {
														ref(e) {
															let t = r;
															'function' == typeof t ? t(e) : (r = e);
														},
														get children() {
															return tP(iv, {
																get src() {
																	return e.imageUrl;
																},
																alt: '',
																get size() {
																	return s();
																},
															});
														},
													});
												},
											}),
										];
									},
								}),
								tP(rj, {
									onBeforeEnter: (e) => {
										r9(
											e,
											[
												{ opacity: 0, transform: 'translate(-50%, 44px)' },
												{ opacity: 1, transform: 'translate(-50%, 0)' },
											],
											{ duration: 150, easing: 'ease-out' },
										);
									},
									onExit: (e, t) => {
										r9(
											e,
											[
												{ opacity: 1, transform: 'translate(-50%, 0)' },
												{ opacity: 0, transform: 'translate(-50%, 44px)' },
											],
											{ duration: 150, easing: 'ease-out' },
										).finished.then(() => {
											t();
										});
									},
									get children() {
										return tP(tD, {
											get when() {
												return i() && !e.disableCopy;
											},
											get children() {
												return tP(iw, {
													get children() {
														return [
															tP(i2, { size: 'xs' }),
															tP(iA, { translationKey: 'common.linkCopied', children: 'Link Copied' }),
														];
													},
												});
											},
										});
									},
								}),
								tP(tD, {
									get when() {
										return !e.disableCopy;
									},
									get children() {
										return tP(ip, {
											get children() {
												return tP(oR, {});
											},
										});
									},
								}),
							];
						},
					});
				};
			var iE = (e, t, n) => {
					let r = t
						.trim()
						.split('.')
						.reduce((e, t) => (e ? e[t] : void 0), e);
					return void 0 !== r ? r : n;
				},
				iR = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (e, n) => iE(t, n, '')),
				iO = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
					let [n, r] = tl(t),
						[i, o] = ra(e);
					return [
						(e, t, r) => {
							let o = iE(i[n()], e, r || '');
							return 'function' == typeof o ? o(t) : 'string' == typeof o ? iR(o, t || {}) : o;
						},
						{
							add(e, t) {
								o(e, (e) => Object.assign(e || {}, t));
							},
							locale: (e) => (e ? r(e) : n()),
							dict: (e) => iE(i, e),
						},
					];
				},
				i_ = tg({}),
				iT = () => tm(i_);
			let iM = nv.div`
    font-style: normal;
    font-weight: ${(e) => e.fontWeight};
    font-size: ${(e) => e.fontSize};
    line-height: ${(e) => e.lineHeight};

    color: ${(e) => e.color};
`,
				iA = (e) => {
					let t,
						n = nm(),
						[r] = iT(),
						i = () => e.color || n.colors.text.primary,
						o = tN({ fontSize: '14px', fontWeight: '510', lineHeight: '130%' }, e);
					return (
						td(() => {
							t && 'unset' !== o.cursor && 'pointer' !== getComputedStyle(t).cursor && (t.style.cursor = 'default');
						}),
						tP(iM, {
							get fontSize() {
								return o.fontSize;
							},
							get fontWeight() {
								return o.fontWeight;
							},
							get lineHeight() {
								return o.lineHeight;
							},
							get color() {
								return i();
							},
							get class() {
								return o.class;
							},
							ref(e) {
								let n = t;
								'function' == typeof n ? n(e) : (t = e);
							},
							'data-tc-text': 'true',
							get children() {
								var s;
								return th(() => !!o.translationKey)()
									? r(o.translationKey, o.translationValues, null == (s = o.children) ? void 0 : s.toString())
									: o.children;
							},
						})
					);
				},
				iP = nv.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);
        border-radius: inherit;
    }
`,
				iL = nv(rv)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
				iI = (e) =>
					tP(iP, {
						get class() {
							return e.class;
						},
						get children() {
							return [
								tP(iL, {
									get src() {
										return e.src;
									},
								}),
								th(() => e.badge),
							];
						},
					}),
				iU = { m: '16px', s: '12px', none: '0' },
				iN = { m: '6px', s: '6px', none: '0' },
				iq = nv.ul`
    display: flex;
    gap: 0;
    width: 100%;
    overflow-x: auto;
    padding: 8px 12px 16px 12px;
    margin: 0;
    list-style: none;
    flex-wrap: nowrap;

    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        display: flex;
        flex: 1;
        min-width: 78px;
        height: fit-content;
    }

    > li > button {
        width: 100%;
    }
`,
				i$ = nv.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 100%;
    min-width: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${rI} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rL} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
				iD = nv(iI)`
    width: 60px;
    height: 60px;
    border-radius: ${(e) => iU[e.theme.borderRadius]};
    margin-bottom: 8px;
    position: relative;
`,
				iW = nv(rv)`
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 24px;
    height: 24px;
    border-radius: ${(e) => iN[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
				ij = nv(iA)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${rP('mobile')} {
        max-width: 80px;
    }
`,
				iB = nv(iA)`
    font-weight: ${(e) => (e.colorPrimary ? '510' : '400')};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${(e) => (e.colorPrimary ? e.theme.colors.text.primary : e.theme.colors.text.secondary)};

    ${rP('mobile')} {
        max-width: 80px;
    }
`,
				iF = tZ('<div></div>'),
				iK = (e) => {
					var t;
					let n = null,
						r = () => {
							let e = null == n ? void 0 : n.querySelector('div');
							if (e && e.scrollWidth > e.clientWidth) {
								let t = 0;
								for (; e.scrollWidth > e.clientWidth && t >= -0.4; ) (t -= 0.05), (e.style.letterSpacing = `${t}px`);
								0 !== t && ((t -= 0.05), (e.style.letterSpacing = `${t}px`));
							}
						};
					return (
						(t = () => r()),
						td(() => tf(t)),
						td(() => {
							r();
						}),
						tP(i$, {
							get class() {
								return e.class;
							},
							onClick: () => e.onClick(),
							'data-tc-wallet-item': 'true',
							get children() {
								return [
									th(() =>
										th(() => 'string' == typeof e.icon)()
											? tP(iD, {
													get src() {
														return e.icon;
													},
													get badge() {
														return (
															th(() => !!e.badgeUrl)() &&
															tP(iW, {
																get src() {
																	return e.badgeUrl;
																},
															})
														);
													},
												})
											: e.icon,
									),
									(() => {
										let t = iF.cloneNode(!0);
										return (
											t1((e) => (n = e), t),
											t0(
												t,
												tP(ij, {
													get children() {
														return e.name;
													},
												}),
											),
											t
										);
									})(),
									th(
										() =>
											th(() => !!e.secondLine)() &&
											tP(iB, {
												get colorPrimary() {
													var t;
													return null == (t = e.secondLineColorPrimary) || t;
												},
												get children() {
													return e.secondLine;
												},
											}),
									),
								];
							},
						})
					);
				},
				iH = nv.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${(e) => e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
				iQ = (e) => {
					let [t] = iT();
					return tP(iH, {
						get class() {
							return e.class;
						},
						'data-tc-h1': 'true',
						get children() {
							var n;
							return th(() => !!e.translationKey)()
								? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString())
								: e.children;
						},
					});
				},
				iV = nv.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${(e) => e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,
				iz = (e) => {
					let [t] = iT();
					return tP(iV, {
						get class() {
							return e.class;
						},
						'data-tc-h2': 'true',
						get children() {
							var n;
							return th(() => !!e.translationKey)()
								? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString())
								: e.children;
						},
					});
				},
				iG = nv.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${(e) => e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
				iZ = (e) => {
					let [t] = iT();
					return tP(iG, {
						'data-tc-h3': 'true',
						get class() {
							return e.class;
						},
						get children() {
							var n;
							return th(() => !!e.translationKey)()
								? t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString())
								: e.children;
						},
					});
				},
				iY = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>',
				),
				iJ = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let e = iY.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				iX = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>',
				),
				i1 = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>',
				),
				i0 = tZ(
					'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>',
				),
				i2 = (e) => {
					let t = nm(),
						n = () => e.size || 's',
						r = () => e.fill || t.colors.icon.success;
					return th(
						(() => {
							let i = th(() => 'xs' === n());
							return () =>
								i()
									? (() => {
											let n = iX.cloneNode(!0),
												i = n.firstChild.firstChild,
												o = i.nextSibling;
											return (
												tu(
													(s) => {
														let a = e.class,
															l = r(),
															c = t.colors.constant.white;
														return (
															a !== s._v$ && tY(n, 'class', (s._v$ = a)),
															l !== s._v$2 && tY(i, 'fill', (s._v$2 = l)),
															c !== s._v$3 && tY(o, 'stroke', (s._v$3 = c)),
															s
														);
													},
													{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
												),
												n
											);
										})()
									: (() => {
											let i = th(() => 's' === n());
											return () =>
												i()
													? (() => {
															let n = i1.cloneNode(!0),
																i = n.firstChild,
																o = i.nextSibling;
															return (
																tu(
																	(s) => {
																		let a = e.class,
																			l = r(),
																			c = t.colors.constant.white;
																		return (
																			a !== s._v$4 && tY(n, 'class', (s._v$4 = a)),
																			l !== s._v$5 && tY(i, 'fill', (s._v$5 = l)),
																			c !== s._v$6 && tY(o, 'fill', (s._v$6 = c)),
																			s
																		);
																	},
																	{ _v$4: void 0, _v$5: void 0, _v$6: void 0 },
																),
																n
															);
														})()
													: (() => {
															let n = i0.cloneNode(!0),
																i = n.firstChild,
																o = i.nextSibling;
															return (
																tu(
																	(s) => {
																		let a = e.class,
																			l = r(),
																			c = t.colors.constant.white;
																		return (
																			a !== s._v$7 && tY(n, 'class', (s._v$7 = a)),
																			l !== s._v$8 && tY(i, 'fill', (s._v$8 = l)),
																			c !== s._v$9 && tY(o, 'fill', (s._v$9 = c)),
																			s
																		);
																	},
																	{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
																),
																n
															);
														})();
										})();
						})(),
					);
				},
				i5 = tZ(
					'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>',
				),
				i4 = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
				),
				i3 = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>',
				),
				i6 = (e) => {
					let t = nm(),
						n = () => e.size || 'm',
						r = () => e.fill || t.colors.icon.error;
					return th(
						(() => {
							let i = th(() => 'm' === n());
							return () =>
								i()
									? (() => {
											let n = i5.cloneNode(!0),
												i = n.firstChild,
												o = i.nextSibling;
											return (
												tu(
													(s) => {
														let a = e.class,
															l = r(),
															c = t.colors.constant.white;
														return (
															a !== s._v$ && tY(n, 'class', (s._v$ = a)),
															l !== s._v$2 && tY(i, 'fill', (s._v$2 = l)),
															c !== s._v$3 && tY(o, 'fill', (s._v$3 = c)),
															s
														);
													},
													{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
												),
												n
											);
										})()
									: (() => {
											let i = th(() => 's' === n());
											return () =>
												i()
													? (() => {
															let n = i4.cloneNode(!0),
																i = n.firstChild,
																o = i.nextSibling;
															return (
																tu(
																	(s) => {
																		let a = e.class,
																			l = r(),
																			c = t.colors.constant.white;
																		return (
																			a !== s._v$4 && tY(n, 'class', (s._v$4 = a)),
																			l !== s._v$5 && tY(i, 'fill', (s._v$5 = l)),
																			c !== s._v$6 && tY(o, 'stroke', (s._v$6 = c)),
																			s
																		);
																	},
																	{ _v$4: void 0, _v$5: void 0, _v$6: void 0 },
																),
																n
															);
														})()
													: (() => {
															let n = i3.cloneNode(!0),
																i = n.firstChild,
																o = i.nextSibling;
															return (
																tu(
																	(s) => {
																		let a = e.class,
																			l = r(),
																			c = t.colors.constant.white;
																		return (
																			a !== s._v$7 && tY(n, 'class', (s._v$7 = a)),
																			l !== s._v$8 && tY(i, 'fill', (s._v$8 = l)),
																			c !== s._v$9 && tY(o, 'fill', (s._v$9 = c)),
																			s
																		);
																	},
																	{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
																),
																n
															);
														})();
										})();
						})(),
					);
				},
				i8 = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>',
				),
				i9 = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>',
				),
				i7 = tZ(
					'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
				),
				oe = (e) => {
					let t = nm(),
						n = () => e.size || 'xs',
						r = () => e.fill || t.colors.icon.tertiary,
						i = nf`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
						o = nh`
        animation: ${i} 1s linear infinite;
    `;
					return th(
						(() => {
							let t = th(() => 'xs' === n());
							return () =>
								t()
									? (() => {
											let t = i8.cloneNode(!0),
												n = t.firstChild;
											return (
												tu(
													(i) => {
														let s = eQ(o, e.class),
															a = r();
														return (
															s !== i._v$ && tY(t, 'class', (i._v$ = s)), a !== i._v$2 && tY(n, 'fill', (i._v$2 = a)), i
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												t
											);
										})()
									: (() => {
											let t = th(() => 's' === n());
											return () =>
												t()
													? (() => {
															let t = i9.cloneNode(!0),
																n = t.firstChild;
															return (
																tu(
																	(i) => {
																		let s = eQ(o, e.class),
																			a = r();
																		return (
																			s !== i._v$3 && tY(t, 'class', (i._v$3 = s)),
																			a !== i._v$4 && tY(n, 'fill', (i._v$4 = a)),
																			i
																		);
																	},
																	{ _v$3: void 0, _v$4: void 0 },
																),
																t
															);
														})()
													: (() => {
															let t = i7.cloneNode(!0),
																n = t.firstChild;
															return (
																tu(
																	(i) => {
																		let s = eQ(o, e.class),
																			a = r();
																		return (
																			s !== i._v$5 && tY(t, 'class', (i._v$5 = s)),
																			a !== i._v$6 && tY(n, 'stroke', (i._v$6 = a)),
																			i
																		);
																	},
																	{ _v$5: void 0, _v$6: void 0 },
																),
																t
															);
														})();
										})();
						})(),
					);
				},
				ot = tZ(
					'<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>',
				),
				on = () => {
					let e = nm(),
						t = () => (e.theme === nt.DARK ? e.colors.constant.white : e.colors.constant.black);
					return (() => {
						let e = ot.cloneNode(!0),
							n = e.firstChild.nextSibling.nextSibling;
						return tu(() => tY(n, 'fill', t())), e;
					})();
				},
				or = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>',
				),
				oi = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let e = or.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				oo = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>',
				),
				os = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let e = oo.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				oa = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>',
				),
				ol = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let e = oa.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				oc = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>',
				),
				ou = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let e = oc.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				od = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>',
				),
				oh = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.accent;
					return (() => {
						let e = od.cloneNode(!0),
							t = e.firstChild.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				of = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>',
				),
				op = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.accent;
					return (() => {
						let e = of.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				og = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>',
				),
				om = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.accent;
					return (() => {
						let e = og.cloneNode(!0),
							t = e.firstChild.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				oy = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>',
				),
				ov = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let t = oy.cloneNode(!0),
							r = t.firstChild;
						return (
							tu(
								(i) => {
									let o = e.class,
										s = n();
									return o !== i._v$ && tY(t, 'class', (i._v$ = o)), s !== i._v$2 && tY(r, 'fill', (i._v$2 = s)), i;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							t
						);
					})();
				},
				ow = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>',
				),
				ob = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let t = ow.cloneNode(!0),
							r = t.firstChild;
						return (
							tu(
								(i) => {
									let o = e.class,
										s = n();
									return o !== i._v$ && tY(t, 'class', (i._v$ = o)), s !== i._v$2 && tY(r, 'fill', (i._v$2 = s)), i;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							t
						);
					})();
				},
				oC = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>',
				),
				ox = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let t = oC.cloneNode(!0),
							r = t.firstChild;
						return (
							tu(
								(i) => {
									let o = e.class,
										s = n();
									return o !== i._v$ && tY(t, 'class', (i._v$ = o)), s !== i._v$2 && tY(r, 'fill', (i._v$2 = s)), i;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							t
						);
					})();
				},
				oS = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>',
				),
				ok = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.constant.white;
					return (() => {
						let t = oS.cloneNode(!0),
							r = t.firstChild;
						return (
							tu(
								(i) => {
									let o = e.class,
										s = n();
									return o !== i._v$ && tY(t, 'class', (i._v$ = o)), s !== i._v$2 && tY(r, 'fill', (i._v$2 = s)), i;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							t
						);
					})();
				},
				oE = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>',
				),
				oR = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let e = oE.cloneNode(!0),
							t = e.firstChild;
						return (
							tu(
								(r) => {
									let i = n(),
										o = n();
									return i !== r._v$ && tY(e, 'fill', (r._v$ = i)), o !== r._v$2 && tY(t, 'fill', (r._v$2 = o)), r;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							e
						);
					})();
				},
				oO = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>',
				),
				o_ = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.secondary;
					return (() => {
						let e = oO.cloneNode(!0),
							t = e.firstChild;
						return tu(() => tY(t, 'fill', n())), e;
					})();
				},
				oT = { m: '16px', s: '12px', none: '0' },
				oM = { m: '6px', s: '6px', none: '0' },
				oA = nv.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${(e) => oT[e.theme.borderRadius]};
    background-color: ${(e) => e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
				oP = nv(iI)`
    width: 20px;
    height: 20px;
    border-radius: ${(e) => oM[e.theme.borderRadius]};
`,
				oL = (e) =>
					tP(iK, {
						get name() {
							return e.labelLine1;
						},
						get secondLine() {
							return e.labelLine2;
						},
						get icon() {
							return tP(oA, {
								get children() {
									return tP(t$, {
										each: [0, 1, 2, 3],
										children: (t) =>
											tP(oP, {
												get src() {
													return e.images[t];
												},
											}),
									});
								},
							});
						},
						onClick: () => e.onClick(),
					}),
				oI = 'telegram-wallet',
				oU = {
					TON: 'https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png',
					TG: 'https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png',
				},
				oN = (e) => {
					let [t] = iT(),
						n = () => {
							if (e.wallet.appName !== oI) {
								if ('isPreferred' in e.wallet && e.wallet.isPreferred) return t('walletItem.recent', {}, 'Recent');
								if (ey(e.wallet)) return t('walletItem.installed', {}, 'Installed');
								if ('Tonkeeper' === e.wallet.name) return t('walletItem.popular', {}, 'Popular');
							}
						};
					return th(
						(() => {
							let r = th(() => e.wallet.appName === oI);
							return () =>
								r()
									? tP(iK, {
											get icon() {
												return e.wallet.imageUrl;
											},
											get name() {
												return t('walletItem.walletOn', {}, 'Wallet in');
											},
											secondLine: 'Telegram',
											get badgeUrl() {
												return oU.TG;
											},
											onClick: () => e.onClick(),
											get class() {
												return e.class;
											},
										})
									: tP(iK, {
											get icon() {
												return e.wallet.imageUrl;
											},
											get name() {
												return e.wallet.name;
											},
											get secondLine() {
												return n();
											},
											secondLineColorPrimary: !1,
											onClick: () => e.onClick(),
											get class() {
												return e.class;
											},
										});
						})(),
					);
				},
				oq = nv.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${(e) => e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,
				o$ = nv.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${(e) => (e.isShown ? e.theme.colors.icon.secondary : 'transparent')};
    transition: background 0.15s ease-in-out;

    ${rP('mobile')} {
        width: 100%;
        margin: 0;
    }
`,
				[oD, oW] = tl((null == (v = nL()) ? void 0 : v.innerHeight) || 0);
			nL() && window.addEventListener('resize', () => oW(window.innerHeight));
			let [oj, oB] = tl(rA('mobile')),
				oF = () => oB(rA('mobile'));
			nL() &&
				(window.addEventListener('resize', () => oF()), window.addEventListener('load', () => oF(), { once: !0 }));
			let oK = (e) => {
					let [t, n] = tl(!1),
						r = () => (oj() ? 150 : 200),
						i = () => (void 0 !== e.maxHeight ? `${e.maxHeight}px` : `${oD() - r()}px`);
					return [
						tP(o$, {
							get isShown() {
								return t();
							},
						}),
						tP(oq, {
							get maxHeight() {
								return i();
							},
							onScroll: (e) => {
								n(e.target.scrollTop > 0);
							},
							get class() {
								return e.class;
							},
							get children() {
								return e.children;
							},
						}),
					];
				},
				oH = nv.a`
    display: block;
    text-decoration: unset;
`,
				oQ = (e) =>
					tP(
						oH,
						tN(
							{
								get href() {
									return e.href;
								},
								get target() {
									return e.blank ? '_blank' : '_self';
								},
								get class() {
									return e.class;
								},
							},
							() => (e.blank ? { rel: 'noreferrer noopener' } : {}),
							{
								get children() {
									return e.children;
								},
							},
						),
					),
				oV = tg(),
				oz = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>',
				),
				oG = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let t = oz.cloneNode(!0),
							r = t.firstChild;
						return (
							tu(
								(i) => {
									let o = e.class,
										s = n();
									return o !== i._v$ && tY(t, 'class', (i._v$ = o)), s !== i._v$2 && tY(r, 'fill', (i._v$2 = s)), i;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							t
						);
					})();
				},
				oZ = tZ(
					'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>',
				),
				oY = (e) => {
					let t = nm(),
						n = () => e.fill || t.colors.icon.primary;
					return (() => {
						let e = oZ.cloneNode(!0),
							t = e.firstChild,
							r = t.nextSibling;
						return (
							tu(
								(e) => {
									let i = n(),
										o = n();
									return i !== e._v$ && tY(t, 'fill', (e._v$ = i)), o !== e._v$2 && tY(r, 'fill', (e._v$2 = o)), e;
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							e
						);
					})();
				},
				oJ = { m: '8px', s: '4px', none: '0' },
				oX = { m: '16px', s: '8px', none: '0' },
				o1 = nv.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(e) => oX[e.theme.borderRadius]};

    background-color: ${(e) => e.theme.colors.background.primary}
           
    color: ${(e) => e.theme.colors.text.primary}
`,
				o0 = nv.ul`
    background-color: ${(e) => e.theme.colors.background.primary};
    padding: 8px;
`,
				o2 = nv.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${(e) => e.theme.colors.background.primary};
    border: none;
    border-radius: ${(e) => oJ[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(e) => e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
				o5 = tZ('<li></li>'),
				o4 = (e) =>
					tP(iA, {
						get translationKey() {
							return e.translationKey;
						},
						fontSize: '15px',
						fontWeight: '590',
						get children() {
							return e.children;
						},
					}),
				o3 = { m: '16px', s: '8px', none: '0' },
				o6 = nv.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${(e) => e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(e) => o3[e.theme.borderRadius]};
`,
				o8 = nv.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
				o9 = nv(iA)`
    margin-top: 4px;
    color: ${(e) => e.theme.colors.text.secondary};
`,
				o7 = (e) => {
					let t = r$(e);
					return tP(
						o6,
						tN(
							{
								get class() {
									return e.class;
								},
								'data-tc-notification': 'true',
							},
							t,
							{
								get children() {
									return [
										tP(o8, {
											get children() {
												return [
													tP(iZ, {
														get translationKey() {
															return e.header.translationKey;
														},
														get translationValues() {
															return e.header.translationValues;
														},
														get children() {
															return e.children;
														},
													}),
													tP(tD, {
														get when() {
															return e.text;
														},
														get children() {
															return tP(o9, {
																get translationKey() {
																	return e.text.translationKey;
																},
																get translationValues() {
																	return e.text.translationValues;
																},
															});
														},
													}),
												];
											},
										}),
										th(() => e.icon),
									];
								},
							},
						),
					);
				},
				se = nv(oe)`
    align-self: center;
`,
				st = (e) => {
					let t = tm(oV),
						[n] = iT(),
						r = () => (t.wallet && 'name' in t.wallet ? t.wallet.name : n('common.yourWallet', {}, 'Your wallet'));
					return tP(o7, {
						get header() {
							return { translationKey: 'notifications.confirm.header', translationValues: { name: r() } };
						},
						get class() {
							return e.class;
						},
						get icon() {
							return tP(se, {});
						},
						'data-tc-notification-confirm': 'true',
						children: 'Confirm operation in your wallet',
					});
				},
				sn = nv(i6)`
    margin-top: 2px;
`,
				sr = (e) =>
					tP(o7, {
						header: { translationKey: 'notifications.transactionCanceled.header' },
						text: { translationKey: 'notifications.transactionCanceled.text' },
						get icon() {
							return tP(sn, { size: 'xs' });
						},
						get class() {
							return e.class;
						},
						'data-tc-notification-tx-cancelled': 'true',
						children: 'Transaction cancelled',
					}),
				si = nv(i2)`
    margin-top: 2px;
`,
				so = (e) =>
					tP(o7, {
						header: { translationKey: 'notifications.transactionSent.header' },
						text: { translationKey: 'notifications.transactionSent.text' },
						get icon() {
							return tP(si, {});
						},
						get class() {
							return e.class;
						},
						'data-tc-notification-tx-sent': 'true',
						children: 'Transaction sent',
					}),
				ss = nh`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
				sa = { timeout: 4500 },
				[sl, sc] = tl(null),
				su = tZ('<div data-tc-list-notifications="true"></div>'),
				sd = nv(rD)`
    background-color: ${(e) => e.theme.colors.connectButton.background};
    color: ${(e) => e.theme.colors.connectButton.foreground};
    box-shadow: ${(e) => `0 4px 24px ${nk(e.theme.colors.constant.black, 0.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
				sh = nv(sd)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${(e) => e.theme.colors.background.primary};
`,
				sf = nv(rD)`
    min-width: 148px;
    height: 40px;

    background-color: ${(e) => e.theme.colors.background.primary};
    color: ${(e) => e.theme.colors.connectButton.foreground};
    box-shadow: ${(e) => `0 4px 24px ${nk(e.theme.colors.constant.black, 0.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
				sp = nv(oe)`
    height: 18px;
    width: 18px;
`,
				sg = nv.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
				sm = nv((e) => {
					let t = tm(oV),
						[n, r] = tl(!1),
						i = () =>
							e4(void 0, null, function* () {
								let e = eB(t.account.address, t.account.chain === u.TESTNET);
								yield ix(e), r(!0), setTimeout(() => r(!1), 1e3);
							}),
						o = () => {
							t.disconnect(), e.onClose();
						};
					return tP(o1, {
						ref(t) {
							let n = e.ref;
							'function' == typeof n ? n(t) : (e.ref = t);
						},
						get class() {
							return e.class;
						},
						'data-tc-dropdown': 'true',
						get children() {
							return tP(o0, {
								get children() {
									return [
										(() => {
											let e = o5.cloneNode(!0);
											return (
												t0(
													e,
													tP(o2, {
														onClick: () => i(),
														get children() {
															return [
																tP(oG, {}),
																tP(tD, {
																	get when() {
																		return !n();
																	},
																	get children() {
																		return tP(o4, { translationKey: 'button.dropdown.copy', children: 'Copy address' });
																	},
																}),
																tP(tD, {
																	get when() {
																		return n();
																	},
																	get children() {
																		return tP(o4, {
																			translationKey: 'button.dropdown.copied',
																			children: 'Address copied!',
																		});
																	},
																}),
															];
														},
													}),
												),
												e
											);
										})(),
										(() => {
											let e = o5.cloneNode(!0);
											return (
												t0(
													e,
													tP(o2, {
														onClick: () => o(),
														get children() {
															return [
																tP(oY, {}),
																tP(o4, { translationKey: 'button.dropdown.disconnect', children: 'Disconnect' }),
															];
														},
													}),
												),
												e
											);
										})(),
									];
								},
							});
						},
					});
				})`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
				sy = nv((e) => {
					let t = (function (e) {
						let { timeout: t } = e0(e0({}, sa), void 0),
							[n, r] = tl([]),
							[i, o] = tl([]);
						return (
							td(
								(function (e, t, n) {
									let r,
										i,
										o = Array.isArray(e);
									return (n) => {
										let s;
										if (o) {
											s = Array(e.length);
											for (let t = 0; t < e.length; t++) s[t] = e[t]();
										} else s = e();
										if (i) {
											i = !1;
											return;
										}
										let a = tf(() => t(s, r, n));
										return (r = s), a;
									};
								})(nX, (e) => {
									var n;
									if (
										!e ||
										!e.showNotification ||
										sl() === e ||
										((null == (n = sl()) ? void 0 : n.name) === 'confirm-transaction' &&
											'confirm-transaction' === e.name)
									)
										return;
									sc(e), r((e) => e.filter((e) => 'confirm-transaction' !== e.action));
									let i = { action: e.name };
									r((e) => [...e, i]);
									let s = setTimeout(() => {
										r((e) => e.filter((e) => e !== i)), o((e) => e.filter((e) => e !== s));
									}, t);
									o((e) => [...e, s]);
								}),
							),
							tp(() => {
								i().forEach((e) => clearTimeout(e));
							}),
							n
						);
					})();
					return (() => {
						let n = su.cloneNode(!0);
						return (
							t0(
								n,
								tP(rF, {
									onBeforeEnter: (e) => {
										r9(
											e,
											[
												{ opacity: 0, transform: 'translateY(0)' },
												{ opacity: 1, transform: 'translateY(-8px)' },
											],
											{ duration: 200 },
										);
									},
									onExit: (e, t) => {
										r9(
											e,
											[
												{ opacity: 1, transform: 'translateY(-8px)' },
												{ opacity: 0, transform: 'translateY(-30px)' },
											],
											{ duration: 200 },
										).finished.then(t);
									},
									get children() {
										return tP(t$, {
											get each() {
												return t();
											},
											children: (e) =>
												tP(tW, {
													get children() {
														return [
															tP(tj, {
																get when() {
																	return 'transaction-sent' === e.action;
																},
																get children() {
																	return tP(so, { class: ss });
																},
															}),
															tP(tj, {
																get when() {
																	return 'transaction-canceled' === e.action;
																},
																get children() {
																	return tP(sr, { class: ss });
																},
															}),
															tP(tj, {
																get when() {
																	return 'confirm-transaction' === e.action;
																},
																get children() {
																	return tP(st, { class: ss });
																},
															}),
														];
													},
												}),
										});
									},
								}),
							),
							tu(() => tJ(n, e.class)),
							n
						);
					})();
				})`
    > div:first-child {
        margin-top: 20px;
    }
`;
			function sv(e) {
				return e.split('-')[0];
			}
			function sw(e, t, n) {
				let r,
					{ reference: i, floating: o } = e,
					s = i.x + i.width / 2 - o.width / 2,
					a = i.y + i.height / 2 - o.height / 2,
					l = ['top', 'bottom'].includes(sv(t)) ? 'x' : 'y',
					c = 'y' === l ? 'height' : 'width',
					u = i[c] / 2 - o[c] / 2,
					d = sv(t),
					h = 'x' === l;
				switch (d) {
					case 'top':
						r = { x: s, y: i.y - o.height };
						break;
					case 'bottom':
						r = { x: s, y: i.y + i.height };
						break;
					case 'right':
						r = { x: i.x + i.width, y: a };
						break;
					case 'left':
						r = { x: i.x - o.width, y: a };
						break;
					default:
						r = { x: i.x, y: i.y };
				}
				switch (t.split('-')[1]) {
					case 'start':
						r[l] -= u * (n && h ? -1 : 1);
						break;
					case 'end':
						r[l] += u * (n && h ? -1 : 1);
				}
				return r;
			}
			let sb = (e, t, n) =>
				e4(void 0, null, function* () {
					let { placement: r = 'bottom', strategy: i = 'absolute', middleware: o = [], platform: s } = n,
						a = o.filter(Boolean),
						l = yield null == s.isRTL ? void 0 : s.isRTL(t);
					if (
						(null == s &&
							console.error(
								'Floating UI: `platform` property was not passed to config. If you want to use Floating UI on the web, install @floating-ui/dom instead of the /core package. Otherwise, you can create your own `platform`: https://floating-ui.com/docs/platform',
							),
						a.filter((e) => {
							let { name: t } = e;
							return 'autoPlacement' === t || 'flip' === t;
						}).length > 1)
					)
						throw Error(
							'Floating UI: duplicate `flip` and/or `autoPlacement` middleware detected. This will lead to an infinite loop. Ensure only one of either has been passed to the `middleware` array.',
						);
					(e && t) ||
						console.error(
							'Floating UI: The reference and/or floating element was not defined when `computePosition()` was called. Ensure that both elements have been created and can be measured.',
						);
					let c = yield s.getElementRects({ reference: e, floating: t, strategy: i }),
						{ x: u, y: d } = sw(c, r, l),
						h = r,
						f = {},
						p = 0;
					for (let n = 0; n < a.length; n++) {
						let { name: o, fn: g } = a[n],
							{
								x: m,
								y: y,
								data: v,
								reset: w,
							} = yield g({
								x: u,
								y: d,
								initialPlacement: r,
								placement: h,
								strategy: i,
								middlewareData: f,
								rects: c,
								platform: s,
								elements: { reference: e, floating: t },
							});
						if (
							((u = null != m ? m : u),
							(d = null != y ? y : d),
							(f = e2(e0({}, f), { [o]: e0(e0({}, f[o]), v) })),
							p > 50 &&
								console.warn(
									'Floating UI: The middleware lifecycle appears to be running in an infinite loop. This is usually caused by a `reset` continually being returned without a break condition.',
								),
							w && p <= 50)
						) {
							p++,
								'object' == typeof w &&
									(w.placement && (h = w.placement),
									w.rects &&
										(c =
											!0 === w.rects ? yield s.getElementRects({ reference: e, floating: t, strategy: i }) : w.rects),
									({ x: u, y: d } = sw(c, h, l))),
								(n = -1);
							continue;
						}
					}
					return { x: u, y: d, placement: h, strategy: i, middlewareData: f };
				});
			function sC(e) {
				return e2(e0({}, e), { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height });
			}
			function sx(e) {
				var t;
				return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
			}
			function sS(e) {
				return sx(e).getComputedStyle(e);
			}
			function sk(e) {
				return s_(e) ? (e.nodeName || '').toLowerCase() : '';
			}
			function sE() {
				if (i) return i;
				let e = navigator.userAgentData;
				return e && Array.isArray(e.brands)
					? (i = e.brands.map((e) => e.brand + '/' + e.version).join(' '))
					: navigator.userAgent;
			}
			function sR(e) {
				return e instanceof sx(e).HTMLElement;
			}
			function sO(e) {
				return e instanceof sx(e).Element;
			}
			function s_(e) {
				return e instanceof sx(e).Node;
			}
			function sT(e) {
				if ('undefined' == typeof ShadowRoot) return !1;
				let t = sx(e).ShadowRoot;
				return e instanceof t || e instanceof ShadowRoot;
			}
			function sM(e) {
				let { overflow: t, overflowX: n, overflowY: r, display: i } = sS(e);
				return /auto|scroll|overlay|hidden/.test(t + r + n) && !['inline', 'contents'].includes(i);
			}
			function sA(e) {
				let t = /firefox/i.test(sE()),
					n = sS(e),
					r = n.backdropFilter || n.WebkitBackdropFilter;
				return (
					'none' !== n.transform ||
					'none' !== n.perspective ||
					(!!r && 'none' !== r) ||
					(t && 'filter' === n.willChange) ||
					(t && !!n.filter && 'none' !== n.filter) ||
					['transform', 'perspective'].some((e) => n.willChange.includes(e)) ||
					['paint', 'layout', 'strict', 'content'].some((e) => {
						let t = n.contain;
						return null != t && t.includes(e);
					})
				);
			}
			function sP() {
				return !/^((?!chrome|android).)*safari/i.test(sE());
			}
			function sL(e) {
				return ['html', 'body', '#document'].includes(sk(e));
			}
			let sI = Math.min,
				sU = Math.max,
				sN = Math.round,
				sq = { x: 1, y: 1 };
			function s$(e) {
				let t = !sO(e) && e.contextElement ? e.contextElement : sO(e) ? e : null;
				if (!t) return sq;
				let n = t.getBoundingClientRect(),
					r = sS(t);
				if ('border-box' !== r.boxSizing)
					return sR(t)
						? {
								x: (t.offsetWidth > 0 && sN(n.width) / t.offsetWidth) || 1,
								y: (t.offsetHeight > 0 && sN(n.height) / t.offsetHeight) || 1,
							}
						: sq;
				let i = n.width / parseFloat(r.width),
					o = n.height / parseFloat(r.height);
				return (i && Number.isFinite(i)) || (i = 1), (o && Number.isFinite(o)) || (o = 1), { x: i, y: o };
			}
			function sD(e, t, n, r) {
				var i, o, s, a;
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				let l = e.getBoundingClientRect(),
					c = sq;
				t && (r ? sO(r) && (c = s$(r)) : (c = s$(e)));
				let u = sO(e) ? sx(e) : window,
					d = !sP() && n,
					h = (l.left + (d && null != (i = null == (o = u.visualViewport) ? void 0 : o.offsetLeft) ? i : 0)) / c.x,
					f = (l.top + (d && null != (s = null == (a = u.visualViewport) ? void 0 : a.offsetTop) ? s : 0)) / c.y,
					p = l.width / c.x,
					g = l.height / c.y;
				return { width: p, height: g, top: f, right: h + p, bottom: f + g, left: h, x: h, y: f };
			}
			function sW(e) {
				return ((s_(e) ? e.ownerDocument : e.document) || window.document).documentElement;
			}
			function sj(e) {
				return sO(e)
					? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
					: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
			}
			function sB(e) {
				return sD(sW(e)).left + sj(e).scrollLeft;
			}
			function sF(e) {
				if ('html' === sk(e)) return e;
				let t = e.assignedSlot || e.parentNode || (sT(e) ? e.host : null) || sW(e);
				return sT(t) ? t.host : t;
			}
			function sK(e) {
				return sR(e) && 'fixed' !== sS(e).position ? e.offsetParent : null;
			}
			function sH(e) {
				let t = sx(e),
					n = sK(e);
				for (; n && ['table', 'td', 'th'].includes(sk(n)) && 'static' === sS(n).position; ) n = sK(n);
				return n && ('html' === sk(n) || ('body' === sk(n) && 'static' === sS(n).position && !sA(n)))
					? t
					: n ||
							(function (e) {
								let t = sF(e);
								for (; sR(t) && !sL(t); )
									if (sA(t)) return t;
									else t = sF(t);
								return null;
							})(e) ||
							t;
			}
			function sQ(e, t) {
				var n;
				void 0 === t && (t = []);
				let r = (function e(t) {
						let n = sF(t);
						return sL(n) ? t.ownerDocument.body : sR(n) && sM(n) ? n : e(n);
					})(e),
					i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
					o = sx(r);
				return i ? t.concat(o, o.visualViewport || [], sM(r) ? r : []) : t.concat(r, sQ(r));
			}
			function sV(e, t, n) {
				return 'viewport' === t
					? sC(
							(function (e, t) {
								let n = sx(e),
									r = sW(e),
									i = n.visualViewport,
									o = r.clientWidth,
									s = r.clientHeight,
									a = 0,
									l = 0;
								if (i) {
									(o = i.width), (s = i.height);
									let e = sP();
									(e || (!e && 'fixed' === t)) && ((a = i.offsetLeft), (l = i.offsetTop));
								}
								return { width: o, height: s, x: a, y: l };
							})(e, n),
						)
					: sO(t)
						? (function (e, t) {
								let n = sD(e, !0, 'fixed' === t),
									r = n.top + e.clientTop,
									i = n.left + e.clientLeft,
									o = sR(e) ? s$(e) : { x: 1, y: 1 },
									s = e.clientWidth * o.x,
									a = e.clientHeight * o.y,
									l = i * o.x,
									c = r * o.y;
								return { top: c, left: l, right: l + s, bottom: c + a, x: l, y: c, width: s, height: a };
							})(t, n)
						: sC(
								(function (e) {
									var t;
									let n = sW(e),
										r = sj(e),
										i = null == (t = e.ownerDocument) ? void 0 : t.body,
										o = sU(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
										s = sU(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
										a = -r.scrollLeft + sB(e),
										l = -r.scrollTop;
									return (
										'rtl' === sS(i || n).direction && (a += sU(n.clientWidth, i ? i.clientWidth : 0) - o),
										{ width: o, height: s, x: a, y: l }
									);
								})(sW(e)),
							);
			}
			let sz = {
				getClippingRect: function (e) {
					let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
						o = [
							...('clippingAncestors' === n
								? (function (e, t) {
										let n = t.get(e);
										if (n) return n;
										let r = sQ(e).filter((e) => sO(e) && 'body' !== sk(e)),
											i = null,
											o = 'fixed' === sS(e).position,
											s = o ? sF(e) : e;
										for (; sO(s) && !sL(s); ) {
											let e = sS(s),
												t = sA(s);
											(o ? t || i : !(!t && 'static' === e.position && i && ['absolute', 'fixed'].includes(i.position)))
												? (i = e)
												: (r = r.filter((e) => e !== s)),
												(s = sF(s));
										}
										return t.set(e, r), r;
									})(t, this._c)
								: [].concat(n)),
							r,
						],
						s = o[0],
						a = o.reduce(
							(e, n) => {
								let r = sV(t, n, i);
								return (
									(e.top = sU(r.top, e.top)),
									(e.right = sI(r.right, e.right)),
									(e.bottom = sI(r.bottom, e.bottom)),
									(e.left = sU(r.left, e.left)),
									e
								);
							},
							sV(t, s, i),
						);
					return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
				},
				convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
					let { rect: t, offsetParent: n, strategy: r } = e,
						i = sR(n),
						o = sW(n);
					if (n === o) return t;
					let s = { scrollLeft: 0, scrollTop: 0 },
						a = { x: 1, y: 1 },
						l = { x: 0, y: 0 };
					if ((i || (!i && 'fixed' !== r)) && (('body' !== sk(n) || sM(o)) && (s = sj(n)), sR(n))) {
						let e = sD(n);
						(a = s$(n)), (l.x = e.x + n.clientLeft), (l.y = e.y + n.clientTop);
					}
					return {
						width: t.width * a.x,
						height: t.height * a.y,
						x: t.x * a.x - s.scrollLeft * a.x + l.x,
						y: t.y * a.y - s.scrollTop * a.y + l.y,
					};
				},
				isElement: sO,
				getDimensions: function (e) {
					if (sR(e)) return { width: e.offsetWidth, height: e.offsetHeight };
					let t = sD(e);
					return { width: t.width, height: t.height };
				},
				getOffsetParent: sH,
				getDocumentElement: sW,
				getScale: s$,
				getElementRects(e) {
					return e4(this, null, function* () {
						let { reference: t, floating: n, strategy: r } = e,
							i = this.getOffsetParent || sH,
							o = this.getDimensions;
						return {
							reference: (function (e, t, n) {
								let r = sR(t),
									i = sW(t),
									o = sD(e, !0, 'fixed' === n, t),
									s = { scrollLeft: 0, scrollTop: 0 },
									a = { x: 0, y: 0 };
								if (r || (!r && 'fixed' !== n))
									if ((('body' !== sk(t) || sM(i)) && (s = sj(t)), sR(t))) {
										let e = sD(t, !0);
										(a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
									} else i && (a.x = sB(i));
								return {
									x: o.left + s.scrollLeft - a.x,
									y: o.top + s.scrollTop - a.y,
									width: o.width,
									height: o.height,
								};
							})(t, yield i(n), r),
							floating: e0({ x: 0, y: 0 }, yield o(n)),
						};
					});
				},
				getClientRects: (e) => Array.from(e.getClientRects()),
				isRTL: (e) => 'rtl' === sS(e).direction,
			};
			function sG(e, t, n, r) {
				let i;
				void 0 === r && (r = {});
				let { ancestorScroll: o = !0, ancestorResize: s = !0, elementResize: a = !0, animationFrame: l = !1 } = r,
					c = o && !l,
					u = c || s ? [...(sO(e) ? sQ(e) : e.contextElement ? sQ(e.contextElement) : []), ...sQ(t)] : [];
				u.forEach((e) => {
					c && e.addEventListener('scroll', n, { passive: !0 }), s && e.addEventListener('resize', n);
				});
				let d = null;
				if (a) {
					let r = !0;
					(d = new ResizeObserver(() => {
						r || n(), (r = !1);
					})),
						sO(e) && !l && d.observe(e),
						sO(e) || !e.contextElement || l || d.observe(e.contextElement),
						d.observe(t);
				}
				let h = l ? sD(e) : null;
				return (
					l &&
						(function t() {
							let r = sD(e);
							h && (r.x !== h.x || r.y !== h.y || r.width !== h.width || r.height !== h.height) && n(),
								(h = r),
								(i = requestAnimationFrame(t));
						})(),
					n(),
					() => {
						var e;
						u.forEach((e) => {
							c && e.removeEventListener('scroll', n), s && e.removeEventListener('resize', n);
						}),
							null == (e = d) || e.disconnect(),
							(d = null),
							l && cancelAnimationFrame(i);
					}
				);
			}
			let sZ = (e, t, n) => {
					let r = new Map(),
						i = e0({ platform: sz }, n),
						o = e2(e0({}, i.platform), { _c: r });
					return sb(e, t, e2(e0({}, i), { platform: o }));
				},
				sY = tZ('<tc-root data-tc-dropdown-container="true"></tc-root>'),
				sJ = () => {
					var e;
					let t,
						n = nm(),
						r = tm(n5),
						i = tm(oV),
						[o, s] = tl(!1),
						[a, l] = tl(r.account),
						[c, d] = tl(!r.account),
						[h, f] = tl(),
						[p, g] = tl(),
						m = (function (e, t, n) {
							let r = () => {
									var e;
									return null != (e = null == n ? void 0 : n.placement) ? e : 'bottom';
								},
								i = () => {
									var e;
									return null != (e = null == n ? void 0 : n.strategy) ? e : 'absolute';
								},
								[o, s] = tl({ x: null, y: null, placement: r(), strategy: i(), middlewareData: {} }),
								[a, l] = tl();
							td(() => {
								let e = a();
								if (e) throw e.value;
							});
							let c = th(() => (e(), t(), {}));
							function u() {
								let o = e(),
									a = t();
								if (o && a) {
									let e = c();
									sZ(o, a, { middleware: null == n ? void 0 : n.middleware, placement: r(), strategy: i() }).then(
										(t) => {
											e === c() && s(t);
										},
										(e) => {
											l(e);
										},
									);
								}
							}
							return (
								td(() => {
									let o = e(),
										s = t();
									if ((null == n || n.middleware, r(), i(), o && s))
										if (null != n && n.whileElementsMounted) {
											let e = n.whileElementsMounted(o, s, u);
											e && tp(e);
										} else u();
								}),
								{
									get x() {
										return o().x;
									},
									get y() {
										return o().y;
									},
									get placement() {
										return o().placement;
									},
									get strategy() {
										return o().strategy;
									},
									get middlewareData() {
										return o().middlewareData;
									},
									update: u,
								}
							);
						})(p, h, { whileElementsMounted: sG, placement: 'bottom-end' }),
						y = () => {
							let e = a();
							if (e) {
								let t = eB(e.address, e.chain === u.TESTNET);
								return t.slice(0, 4) + '…' + t.slice(-4);
							}
							return '';
						};
					i.connectionRestored.then(() => d(!1));
					let v = r.onStatusChange((e) => {
							if (!e) {
								s(!1), l(null), d(!1);
								return;
							}
							l(e.account), d(!1);
						}),
						w = (e) => {
							if (!a() || !o()) return;
							let n = p().contains(e.target),
								r = t.contains(e.target);
							n || r || s(!1);
						};
					return (
						(e = () => {
							document.body.addEventListener('click', w);
						}),
						td(() => tf(e)),
						tp(() => {
							document.body.removeEventListener('click', w), v();
						}),
						tP(ne, {
							component: nb,
							get children() {
								return [
									tP(tD, {
										get when() {
											return c();
										},
										get children() {
											return tP(sf, {
												disabled: !0,
												'data-tc-connect-button-loading': 'true',
												get children() {
													return tP(sp, {});
												},
											});
										},
									}),
									tP(tD, {
										get when() {
											return !c();
										},
										get children() {
											return [
												tP(tD, {
													get when() {
														return !a();
													},
													get children() {
														return tP(sd, {
															onClick: () => i.openModal(),
															'data-tc-connect-button': 'true',
															scale: 's',
															get children() {
																return [
																	tP(iJ, {
																		get fill() {
																			return n.colors.connectButton.foreground;
																		},
																	}),
																	tP(iA, {
																		translationKey: 'button.connectWallet',
																		fontSize: '15px',
																		lineHeight: '18px',
																		fontWeight: '590',
																		get color() {
																			return n.colors.connectButton.foreground;
																		},
																		children: 'Connect wallet',
																	}),
																];
															},
														});
													},
												}),
												tP(tD, {
													get when() {
														return a();
													},
													get children() {
														return tP(sg, {
															get children() {
																return [
																	tP(sh, {
																		onClick: () => s((e) => !e),
																		ref: g,
																		'data-tc-dropdown-button': 'true',
																		scale: 's',
																		get children() {
																			return [
																				tP(iA, {
																					fontSize: '15px',
																					fontWeight: '590',
																					lineHeight: '18px',
																					get children() {
																						return y();
																					},
																				}),
																				tP(rz, { direction: 'bottom' }),
																			];
																		},
																	}),
																	tP(t7, {
																		get children() {
																			let e = tf(() => document.importNode(sY, !0));
																			return (
																				t1(f, e),
																				e.style.setProperty('z-index', '999'),
																				(e._$owner = tn),
																				t0(
																					e,
																					tP(rj, {
																						onBeforeEnter: (e) => {
																							r9(
																								e,
																								[
																									{ opacity: 0, transform: 'translateY(-8px)' },
																									{ opacity: 1, transform: 'translateY(0)' },
																								],
																								{ duration: 150 },
																							);
																						},
																						onExit: (e, t) => {
																							r9(
																								e,
																								[
																									{ opacity: 1, transform: 'translateY(0)' },
																									{ opacity: 0, transform: 'translateY(-8px)' },
																								],
																								{ duration: 150 },
																							).finished.then(t);
																						},
																						get children() {
																							return tP(tD, {
																								get when() {
																									return o();
																								},
																								get children() {
																									return tP(sm, {
																										get hidden() {
																											return !o();
																										},
																										onClose: () => s(!1),
																										ref(e) {
																											let n = t;
																											'function' == typeof n ? n(e) : (t = e);
																										},
																									});
																								},
																							});
																						},
																					}),
																					null,
																				),
																				t0(e, tP(sy, {}), null),
																				tu(
																					(t) => {
																						var n, r;
																						let i = m.strategy,
																							o = `${null != (n = m.y) ? n : 0}px`,
																							s = `${null != (r = m.x) ? r : 0}px`;
																						return (
																							i !== t._v$ && e.style.setProperty('position', (t._v$ = i)),
																							o !== t._v$2 && e.style.setProperty('top', (t._v$2 = o)),
																							s !== t._v$3 && e.style.setProperty('left', (t._v$3 = s)),
																							t
																						);
																					},
																					{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
																				),
																				e
																			);
																		},
																	}),
																];
															},
														});
													},
												}),
											];
										},
									}),
								];
							},
						})
					);
				},
				sX = nv(ii)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${rP('mobile')} {
        padding-left: 0;
        padding-right: 0;
    }
`,
				s1 = nv(iQ)`
    margin-top: 12px;

    ${rP('mobile')} {
        padding: 0 10px;
    }
`,
				s0 = nv.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${rP('mobile')} {
        height: 160px;
        align-items: center;
    }
`;
			nv(iA)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,
				nv((e) => {
					let t = 'tabBar' + Math.floor(1e4 * Math.random());
					return tP(ia, {
						get class() {
							return e.class;
						},
						'data-tc-tab-bar': 'true',
						get children() {
							return [
								tP(il, {
									get right() {
										return 1 === e.selectedTabIndex;
									},
								}),
								tP(iu, {
									get isActive() {
										return 0 === e.selectedTabIndex;
									},
									get children() {
										return [
											tP(ic, {
												type: 'radio',
												name: t,
												get checked() {
													return 0 === e.selectedTabIndex;
												},
												onInput: () => {
													var t;
													return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 0);
												},
											}),
											th(() => e.tab1),
										];
									},
								}),
								tP(iu, {
									get isActive() {
										return 1 === e.selectedTabIndex;
									},
									get children() {
										return [
											tP(ic, {
												type: 'radio',
												get checked() {
													return 1 === e.selectedTabIndex;
												},
												name: t,
												onInput: () => {
													var t;
													return null == (t = e.onSelectedTabIndexChange) ? void 0 : t.call(e, 1);
												},
											}),
											th(() => e.tab2),
										];
									},
								}),
							];
						},
					});
				})`
    margin: 0 auto 22px;
`;
			let [s2, s5] = ra({
				buttonRootId: null,
				language: 'en',
				returnStrategy: 'back',
				twaReturnUrl: void 0,
				walletsListConfiguration: {},
				enableAndroidBackHandler: !0,
			});
			function s4(e) {
				return 'jsBridgeKey' in e
					? e2(e0({}, e), {
							injected: ej.isWalletInjected(e.jsBridgeKey),
							embedded: ej.isInsideWalletBrowser(e.jsBridgeKey),
						})
					: e;
			}
			function s3(e, t) {
				var n, r, i, o;
				return t
					? ((null == (n = t.includeWallets) ? void 0 : n.length) &&
							((r = 'name'),
							(i = e),
							(o = t.includeWallets.map(s4)),
							(e = i
								.map((e) => {
									let t = o.find((t) => t[r] === e[r]);
									return (o = o.filter((t) => t[r] !== e[r])), void 0 === t ? e : t;
								})
								.concat(o))),
						e)
					: e;
			}
			function s6(e) {
				return e.platforms.some((e) => ['macos', 'linux', 'windows'].includes(e));
			}
			function s8(e) {
				return e.platforms.some((e) => ['ios', 'android'].includes(e));
			}
			function s9(e) {
				return e.platforms.some((e) => ['chrome', 'firefox', 'safari'].includes(e));
			}
			function s7(e, t) {
				return !!t && (e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase());
			}
			let ae = nv.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
				at = nv(iQ)`
    margin-bottom: 18px;
`;
			nv.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${(e) => (e.isShown ? e.theme.colors.icon.secondary : 'transparent')};
    transition: background 0.15s ease-in-out;

    ${rP('mobile')} {
        width: 100%;
    }
`;
			let an = nv.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;
    list-style: none;

    > li {
        display: block;
        height: fit-content;
    }

    ${rP('mobile')} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        padding: 8px 12px 16px;
        max-width: none;

        > li {
            min-width: 78px;
            display: flex;
        }

        > li > * {
            width: 100%;
        }
    }
`;
			nv(rD)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
			let ar = nv(rJ)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
				ai = nv(oN)`
    opacity: ${(e) => (e.withOpacity ? '0.4' : '1')};
`,
				ao = nv.div`
    display: grid;
    grid-template-columns: auto 28px;
    gap: 16px;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 16px;
    color: ${(e) => e.theme.colors.text.secondary};
    background: ${(e) => e.theme.colors.background.tint};

    ${rP('mobile')} {
        margin-left: 16px;
        margin-right: 16px;
    }
`,
				as = nv(iz)`
    color: ${(e) => e.theme.colors.text.secondary};
    text-align: left;
    margin: 0;
`,
				aa = nv.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    text-wrap: nowrap;
    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${(e) => e.theme.colors.background.segment};
`,
				al = tZ(
					'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5122_10355)"><circle cx="8" cy="8" r="8"></circle><circle cx="8" cy="11" r="1"></circle><path d="M7.04994 4.99875C7.02277 4.45542 7.45598 4 8 4C8.54402 4 8.97723 4.45541 8.95006 4.99875L8.78745 8.25094C8.76647 8.67055 8.42014 9 8 9C7.57986 9 7.23353 8.67055 7.21255 8.25094L7.04994 4.99875Z"></path></g><defs><clipPath id="clip0_5122_10355"><rect width="16" height="16"></rect></clipPath></defs></svg>',
				),
				ac = tZ(
					'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12"></circle><circle cx="14" cy="18.9" r="1.4"></circle><path d="M12.6658 8.89845C12.63 8.13698 13.2377 7.5 14 7.5C14.7623 7.5 15.37 8.13698 15.3342 8.89845L15.047 15.0013C15.0207 15.5604 14.5597 16.0002 14 16.0002C13.4403 16.0002 12.9793 15.5604 12.953 15.0013L12.6658 8.89845Z"></path></svg>',
				),
				au = (e) => {
					let t = nm(),
						n = () => e.size,
						r = () => e.fill || t.colors.icon.error;
					return th(
						(() => {
							let i = th(() => '16' === n());
							return () =>
								i()
									? (() => {
											let e = al.cloneNode(!0),
												n = e.firstChild,
												i = n.firstChild,
												o = i.nextSibling,
												s = o.nextSibling,
												a = n.nextSibling.firstChild.firstChild;
											return (
												tu(
													(e) => {
														let n = r(),
															l = t.colors.constant.white,
															c = t.colors.constant.white,
															u = t.colors.constant.white;
														return (
															n !== e._v$ && tY(i, 'fill', (e._v$ = n)),
															l !== e._v$2 && tY(o, 'fill', (e._v$2 = l)),
															c !== e._v$3 && tY(s, 'fill', (e._v$3 = c)),
															u !== e._v$4 && tY(a, 'fill', (e._v$4 = u)),
															e
														);
													},
													{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
												),
												e
											);
										})()
									: (() => {
											let i = th(() => '28' === n());
											return () =>
												i()
													? (() => {
															let n = ac.cloneNode(!0),
																i = n.firstChild,
																o = i.nextSibling,
																s = o.nextSibling;
															return (
																tu(
																	(a) => {
																		let l = e.class,
																			c = r(),
																			u = t.colors.constant.white,
																			d = t.colors.constant.white;
																		return (
																			l !== a._v$5 && tY(n, 'class', (a._v$5 = l)),
																			c !== a._v$6 && tY(i, 'fill', (a._v$6 = c)),
																			u !== a._v$7 && tY(o, 'fill', (a._v$7 = u)),
																			d !== a._v$8 && tY(s, 'fill', (a._v$8 = d)),
																			a
																		);
																	},
																	{ _v$5: void 0, _v$6: void 0, _v$7: void 0, _v$8: void 0 },
																),
																n
															);
														})()
													: null;
										})();
						})(),
					);
				},
				ad = tZ('<li></li>'),
				ah = (e) => {
					let t = () => (oj() ? void 0 : 510),
						[n, r] = tl(null),
						i = null,
						o = (e) => {
							r(e), null != i && clearTimeout(i), (i = setTimeout(() => r(null), 1500));
						},
						s = (t) => {
							if (!t.isSupportRequiredFeatures) return void o(t);
							e.onSelect(t);
						},
						a = () => (oj() ? e.walletsList.filter(s8) : e.walletsList),
						l = () => a().filter((e) => e.isSupportRequiredFeatures),
						c = () => a().filter((e) => !e.isSupportRequiredFeatures);
					return tP(ae, {
						'data-tc-wallets-modal-list': 'true',
						get children() {
							return [
								tP(ar, { icon: 'arrow', onClick: () => e.onBack() }),
								tP(at, { translationKey: 'walletModal.wallets', children: 'Wallets' }),
								tP(oK, {
									get maxHeight() {
										return t();
									},
									get children() {
										return [
											tP(an, {
												get children() {
													return tP(t$, {
														get each() {
															return l();
														},
														children: (t) =>
															(() => {
																let n = ad.cloneNode(!0);
																return t0(n, tP(ai, { wallet: t, onClick: () => e.onSelect(t) })), n;
															})(),
													});
												},
											}),
											tP(tD, {
												get when() {
													return c().length > 0;
												},
												get children() {
													return [
														tP(ao, {
															get children() {
																return [
																	tP(as, {
																		translationKey: 'walletModal.allWallets.walletsBelowNotSupported',
																		children:
																			'The wallets below don’t support all features of the connected service. You can use your recovery phrase in one of the supported wallets above.',
																	}),
																	tP(au, { size: '28' }),
																];
															},
														}),
														tP(an, {
															get children() {
																return tP(t$, {
																	get each() {
																		return c();
																	},
																	children: (e) =>
																		(() => {
																			let t = ad.cloneNode(!0);
																			return t0(t, tP(ai, { wallet: e, onClick: () => s(e), withOpacity: !0 })), t;
																		})(),
																});
															},
														}),
														tP(rj, {
															onBeforeEnter: (e) => {
																r9(
																	e,
																	[
																		{ opacity: 0, transform: 'translate(-50%, 44px)' },
																		{ opacity: 1, transform: 'translate(-50%, 0)' },
																	],
																	{ duration: 150, easing: 'ease-out' },
																);
															},
															onExit: (e, t) => {
																r9(
																	e,
																	[
																		{ opacity: 1, transform: 'translate(-50%, 0)' },
																		{ opacity: 0, transform: 'translate(-50%, 44px)' },
																	],
																	{ duration: 150, easing: 'ease-out' },
																).finished.then(() => {
																	t();
																});
															},
															get children() {
																return tP(tD, {
																	get when() {
																		return n();
																	},
																	get children() {
																		return tP(aa, {
																			get children() {
																				return [
																					tP(i6, { size: 'xs' }),
																					tP(iA, {
																						translationKey: 'walletModal.allWallets.walletNotSupportService',
																						get translationValues() {
																							return { name: n().name };
																						},
																						get children() {
																							return [th(() => n().name), ' doesn’t support connected service'];
																						},
																					}),
																				];
																			},
																		});
																	},
																});
															},
														}),
													];
												},
											}),
										];
									},
								}),
							];
						},
					});
				},
				af = { m: '16px', s: '12px', none: '0' },
				ap = { m: '6px', s: '6px', none: '0' },
				ag = nv.div`
    display: flex;
    flex-direction: column;
`,
				am = nv.div`
    flex: 1;
    margin-top: ${(e) => (e.qr ? '0' : '18px')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
				ay = nv(ik)`
    margin-bottom: 24px;
`,
				av = nv(iQ)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
				aw = nv(iz)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
				ab = nv(rJ)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
				aC = nv.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
				ax = nv(aC)`
    padding-bottom: 0;
`,
				aS = nv(rD)`
    margin-bottom: 24px;
`,
				ak = nv(oe)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
				aE = nv(i6)`
    margin-bottom: 16px;
`,
				aR = nv(iz)`
    color: ${(e) => e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
				aO = nv(rD)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${(e) => af[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
				a_ = nv(rv)`
    width: 32px;
    height: 32px;
    border-radius: ${(e) => ap[e.theme.borderRadius]};
`,
				aT = (e) => {
					let [t] = iT();
					return th(() => {
						var n;
						return t(e.translationKey, e.translationValues, null == (n = e.children) ? void 0 : n.toString());
					});
				};
			function aM(e, t) {
				let n,
					r = (function (e, t, n) {
						let r = new URL(e);
						return r.searchParams.append('ret', n), r.toString();
					})(e, 'ret', 'string' == typeof t ? t : rS() ? t.twaReturnUrl || t.returnStrategy : 'none');
				if (!et(e)) return r;
				let i = r.slice(r.lastIndexOf('&') + 1);
				return r.slice(0, r.lastIndexOf('&')) + '-' + en(i);
			}
			function aA(e, t) {
				t = e0({}, t);
				let n = new URL(
					(function (e) {
						let t = new URL(e);
						return (
							t.searchParams.has('attach') && (t.searchParams.delete('attach'), (t.pathname += '/start')), t.toString()
						);
					})(e),
				);
				if ((n.searchParams.has('startapp') || n.searchParams.append('startapp', 'tonconnect'), rk()))
					(t.returnStrategy = 'back'), nM(aM(n.toString(), t.returnStrategy));
				else if (rS())
					rx('ios', 'android', 'macos', 'tdesktop', 'web')
						? ((t.returnStrategy = 'back'), rR(aM(n.toString(), t.returnStrategy)))
						: rx('weba')
							? rR(aM(n.toString(), t))
							: nM(aM(n.toString(), t));
				else if (nN('ios')) {
					'back' === t.returnStrategy &&
						(nq('safari')
							? (t.returnStrategy = 'back')
							: nq('chrome')
								? (t.returnStrategy = 'googlechrome://')
								: nq('firefox')
									? (t.returnStrategy = 'firefox://')
									: nq('opera')
										? (t.returnStrategy = 'opera-http://')
										: (t.returnStrategy = location.href));
					let e = nq('chrome'),
						r = nq('firefox');
					if ((e || r) && !t.forceRedirect) {
						let e = aM(n.toString(), t.returnStrategy);
						nA(aL(e), () => nM(e));
					} else nM(aM(n.toString(), t.returnStrategy));
				} else if (nN('android')) {
					t.returnStrategy = 'back';
					let e = nq('chrome'),
						r = nq('firefox');
					if ((e || r) && !t.forceRedirect) {
						let e = aM(n.toString(), t.returnStrategy);
						nA(aL(e), () => nM(e));
					} else nM(aM(n.toString(), t.returnStrategy));
				} else if (nN('ipad')) {
					'back' === t.returnStrategy &&
						(nq('safari')
							? (t.returnStrategy = 'back')
							: nq('chrome')
								? (t.returnStrategy = 'googlechrome://')
								: nq('firefox')
									? (t.returnStrategy = 'firefox://')
									: nq('opera')
										? (t.returnStrategy = 'opera-http://')
										: (t.returnStrategy = location.href));
					let e = nq('chrome'),
						r = nq('firefox'),
						i = (e || r) && !t.forceRedirect,
						o = aM(n.toString(), t.returnStrategy);
					i ? nA(aL(o), () => nM(o)) : nM(o);
				} else if (nN('macos', 'windows', 'linux')) {
					(t.returnStrategy = 'back'), (t.twaReturnUrl = void 0);
					let e = aM(n.toString(), t.returnStrategy);
					t.forceRedirect ? nM(e) : nA(aL(e), () => nM(e));
				} else nM(aM(n.toString(), t));
			}
			function aP(e, t, n, r) {
				if (((n = e0({}, n)), rk()))
					nN('ios', 'android')
						? ('back' === n.returnStrategy && (n.returnStrategy = 'tg://resolve'),
							r('universal-link'),
							nT(aM(e, n.returnStrategy), '_self'))
						: (r('universal-link'), nM(aM(e, n.returnStrategy)));
				else if (rS())
					if (rx('ios', 'android')) {
						'back' === n.returnStrategy && (n.returnStrategy = 'tg://resolve'), r('universal-link');
						let t = aM(e, n.returnStrategy);
						rR(t, () => {
							r('universal-link'), nM(t);
						});
					} else if (rx('macos', 'tdesktop')) {
						'back' === n.returnStrategy && (n.returnStrategy = 'tg://resolve');
						let i = aM(e, n.returnStrategy);
						t && !n.forceRedirect
							? (r('custom-deeplink'),
								nA(n$(i, t), () => {
									r('universal-link'), nM(i);
								}))
							: (r('universal-link'), nM(i));
					} else if (rx('weba')) {
						'back' === n.returnStrategy &&
							(nq('safari')
								? (n.returnStrategy = location.href)
								: nq('chrome')
									? (n.returnStrategy = 'googlechrome://')
									: nq('firefox')
										? (n.returnStrategy = 'firefox://')
										: nq('opera')
											? (n.returnStrategy = 'opera-http://')
											: (n.returnStrategy = location.href));
						let i = aM(e, n.returnStrategy);
						t && !n.forceRedirect
							? (r('custom-deeplink'),
								nA(n$(i, t), () => {
									r('universal-link'), nM(i);
								}))
							: (r('universal-link'), nM(i));
					} else if (rx('web')) {
						'back' === n.returnStrategy &&
							(nq('safari')
								? (n.returnStrategy = location.href)
								: nq('chrome')
									? (n.returnStrategy = 'googlechrome://')
									: nq('firefox')
										? (n.returnStrategy = 'firefox://')
										: nq('opera')
											? (n.returnStrategy = 'opera-http://')
											: (n.returnStrategy = location.href));
						let i = aM(e, n.returnStrategy);
						t && !n.forceRedirect
							? (r('custom-deeplink'),
								nA(n$(i, t), () => {
									r('universal-link'), nM(i);
								}))
							: (r('universal-link'), nM(i));
					} else r('universal-link'), nM(aM(e, n.returnStrategy));
				else if (nN('ios'))
					'back' === n.returnStrategy &&
						(nq('safari')
							? (n.returnStrategy = 'none')
							: nq('chrome')
								? (n.returnStrategy = 'googlechrome://')
								: nq('firefox')
									? (n.returnStrategy = 'firefox://')
									: nq('opera')
										? (n.returnStrategy = 'opera-http://')
										: (n.returnStrategy = location.href)),
						nq('chrome')
							? (r('universal-link'), nT(aM(e, n.returnStrategy), '_self'))
							: (r('universal-link'), nM(aM(e, n.returnStrategy)));
				else if (nN('android'))
					'back' === n.returnStrategy &&
						(nq('chrome')
							? (n.returnStrategy = 'googlechrome://')
							: nq('firefox')
								? (n.returnStrategy = 'firefox://')
								: nq('opera')
									? (n.returnStrategy = 'opera-http://')
									: (n.returnStrategy = location.href)),
						r('universal-link'),
						nM(aM(e, n.returnStrategy));
				else if (nN('ipad'))
					'back' === n.returnStrategy &&
						(nq('safari')
							? (n.returnStrategy = 'none')
							: nq('chrome')
								? (n.returnStrategy = 'googlechrome://')
								: nq('firefox')
									? (n.returnStrategy = 'firefox://')
									: nq('opera')
										? (n.returnStrategy = 'opera-http://')
										: (n.returnStrategy = location.href)),
						nq('chrome')
							? (r('universal-link'), nT(aM(e, n.returnStrategy), '_self'))
							: (r('universal-link'), nM(aM(e, n.returnStrategy)));
				else if (nN('macos', 'windows', 'linux')) {
					'back' === n.returnStrategy &&
						(nq('safari')
							? (n.returnStrategy = 'none')
							: nq('chrome')
								? (n.returnStrategy = 'googlechrome://')
								: nq('firefox')
									? (n.returnStrategy = 'firefox://')
									: nq('opera')
										? (n.returnStrategy = 'opera-http://')
										: (n.returnStrategy = 'none'));
					let i = aM(e, n.returnStrategy);
					t && !n.forceRedirect
						? (r('custom-deeplink'),
							nA(n$(i, t), () => {
								r('universal-link'), nM(i);
							}))
						: (r('universal-link'), nM(i));
				} else r('universal-link'), nM(aM(e, n.returnStrategy));
			}
			function aL(e) {
				let t = new URL(e),
					[, n, r] = t.pathname.split('/'),
					i = t.searchParams.get('startapp');
				return `tg://resolve?domain=${n}&appname=${r}&startapp=${i}`;
			}
			let aI = (e) => {
					let [t, n] = tl('mobile'),
						[r, i] = tl(null);
					td(() => {
						var t;
						i(null != (t = e.defaultError) ? t : null);
					});
					let [o, s] = tl(),
						[a, l] = tl(!0),
						c = tm(n5);
					tp(
						c.onStatusChange(
							() => {},
							(t) => {
								if (t instanceof $) return void i('missing-features');
								e.wallet.appName !== oI && i('connection-declined');
							},
						),
					);
					let u = () => {
						try {
							let t = c.connect(
								{ universalLink: e.wallet.universalLink, bridgeUrl: e.wallet.bridgeUrl },
								e.additionalRequest,
							);
							s(t);
						} catch (e) {}
					};
					td(() => {
						'extension' !== tf(t) && (s8(e.wallet) || s6(e.wallet)) && u();
					});
					let d = () => {
							i(null), 'extension' === t() && u(), n('mobile'), nJ(e2(e0({}, e.wallet), { openMethod: 'qrcode' }));
						},
						h = () => {
							if ((i(null), 'extension' === t() && u(), n('desktop'), et(o()))) f();
							else {
								let t = !a();
								l(!1),
									aP(o(), e.wallet.deepLink, { returnStrategy: s2.returnStrategy, forceRedirect: t }, (t) => {
										nJ(e2(e0({}, e.wallet), { openMethod: t }));
									});
							}
						},
						f = () => {
							let t = !a();
							l(!1),
								nJ(e2(e0({}, e.wallet), { openMethod: 'universal-link' })),
								aA(o(), { returnStrategy: s2.returnStrategy, twaReturnUrl: s2.twaReturnUrl, forceRedirect: t });
						},
						p = () => {
							i(null),
								n('extension'),
								ey(e.wallet) && (nJ(e.wallet), c.connect({ jsBridgeKey: e.wallet.jsBridgeKey }, e.additionalRequest));
						};
					return (
						s8(e.wallet) ? d() : s9(e.wallet) ? p() : h(),
						tP(ag, {
							'data-tc-wallets-modal-connection-desktop': 'true',
							get children() {
								return [
									tP(tD, {
										get when() {
											return !e.backDisabled;
										},
										get children() {
											return tP(ab, { icon: 'arrow', onClick: () => e.onBackClick() });
										},
									}),
									tP(av, {
										get children() {
											return e.wallet.name;
										},
									}),
									tP(tD, {
										get when() {
											return th(() => 'mobile' === t())() && !r();
										},
										get children() {
											return tP(aw, {
												translationKey: 'walletModal.desktopConnectionModal.scanQR',
												get translationValues() {
													return { name: e.wallet.name };
												},
												get children() {
													return ['Scan the QR code below with your phone’s or ', th(() => e.wallet.name), '’s camera'];
												},
											});
										},
									}),
									tP(am, {
										get qr() {
											return 'mobile' === t();
										},
										get children() {
											return tP(tW, {
												get children() {
													return [
														tP(tj, {
															get when() {
																return r();
															},
															get children() {
																return [
																	tP(aE, { size: 's' }),
																	tP(tW, {
																		get children() {
																			return [
																				tP(tj, {
																					get when() {
																						return 'missing-features' === r();
																					},
																					get children() {
																						return tP(aR, {
																							translationKey: 'walletModal.desktopConnectionModal.missingFeatures',
																							get translationValues() {
																								return { name: e.wallet.name };
																							},
																							children:
																								'Please update Wallet, your version does not support required features for this dApp',
																						});
																					},
																				}),
																				tP(tj, {
																					get when() {
																						return 'connection-declined' === r();
																					},
																					get children() {
																						return tP(aR, {
																							translationKey: 'walletModal.desktopConnectionModal.connectionDeclined',
																							children: 'Connection declined',
																						});
																					},
																				}),
																				tP(tj, {
																					get when() {
																						return 'not-supported' === r();
																					},
																					get children() {
																						return tP(aR, {
																							translationKey: 'walletModal.desktopConnectionModal.notSupportedWallet',
																							get translationValues() {
																								return { name: e.wallet.name };
																							},
																							get children() {
																								return [
																									th(() => e.wallet.name),
																									' doesn’t support the requested action. Please connect another wallet that supports it.',
																								];
																							},
																						});
																					},
																				}),
																			];
																		},
																	}),
																	tP(aC, {
																		get children() {
																			return [
																				tP(tD, {
																					get when() {
																						return 'not-supported' !== r();
																					},
																					get children() {
																						return tP(rD, {
																							get leftIcon() {
																								return tP(oh, {});
																							},
																							get onClick() {
																								return 'extension' === t() ? p : h;
																							},
																							get children() {
																								return tP(aT, { translationKey: 'common.retry', children: 'Retry' });
																							},
																						});
																					},
																				}),
																				tP(tD, {
																					get when() {
																						return 'missing-features' === r();
																					},
																					get children() {
																						return tP(oQ, {
																							get href() {
																								return e.wallet.aboutUrl;
																							},
																							blank: !0,
																							get children() {
																								return tP(rD, {
																									get leftIcon() {
																										return tP(op, {});
																									},
																									get children() {
																										return tP(aT, {
																											translationKey: 'walletModal.desktopConnectionModal.updateWallet',
																											get translationValues() {
																												return { name: e.wallet.name };
																											},
																											get children() {
																												return ['Update ', th(() => e.wallet.name)];
																											},
																										});
																									},
																								});
																							},
																						});
																					},
																				}),
																				tP(tD, {
																					get when() {
																						return 'not-supported' === r();
																					},
																					get children() {
																						return tP(rD, {
																							onClick: () => e.onBackClick(),
																							get children() {
																								return tP(aT, {
																									translationKey:
																										'walletModal.desktopConnectionModal.chooseAnotherWallet',
																									children: 'Choose Another Wallet',
																								});
																							},
																						});
																					},
																				}),
																			];
																		},
																	}),
																];
															},
														}),
														tP(tj, {
															get when() {
																return 'mobile' === t();
															},
															get children() {
																return tP(ay, {
																	disableCopy: !1,
																	get sourceUrl() {
																		return aM(o(), 'none');
																	},
																	get imageUrl() {
																		return e.wallet.imageUrl;
																	},
																});
															},
														}),
														tP(tj, {
															get when() {
																return 'extension' === t();
															},
															get children() {
																return [
																	tP(tD, {
																		get when() {
																			return ey(e.wallet);
																		},
																		get children() {
																			return [
																				tP(ak, { size: 's' }),
																				tP(aR, {
																					translationKey: 'walletModal.desktopConnectionModal.continueInExtension',
																					get translationValues() {
																						return { name: e.wallet.name };
																					},
																					get children() {
																						return ['Continue in ', th(() => e.wallet.name), ' browser extension…'];
																					},
																				}),
																				tP(aC, {
																					get children() {
																						return tP(rD, {
																							get leftIcon() {
																								return tP(oh, {});
																							},
																							onClick: p,
																							get children() {
																								return tP(aT, { translationKey: 'common.retry', children: 'Retry' });
																							},
																						});
																					},
																				}),
																			];
																		},
																	}),
																	tP(tD, {
																		get when() {
																			return !ey(e.wallet);
																		},
																		get children() {
																			return [
																				tP(aR, {
																					translationKey: 'walletModal.desktopConnectionModal.dontHaveExtension',
																					get translationValues() {
																						return { name: e.wallet.name };
																					},
																					get children() {
																						return [
																							"Seems you don't have installed ",
																							th(() => e.wallet.name),
																							' browser extension',
																						];
																					},
																				}),
																				tP(aC, {
																					get children() {
																						return tP(oQ, {
																							get href() {
																								return e.wallet.aboutUrl;
																							},
																							blank: !0,
																							get children() {
																								return tP(rD, {
																									get rightIcon() {
																										return tP(op, {});
																									},
																									onClick: p,
																									get children() {
																										return tP(aT, {
																											translationKey: 'walletModal.desktopConnectionModal.getWallet',
																											get translationValues() {
																												return { name: e.wallet.name };
																											},
																											get children() {
																												return ['Get ', th(() => e.wallet.name)];
																											},
																										});
																									},
																								});
																							},
																						});
																					},
																				}),
																			];
																		},
																	}),
																];
															},
														}),
														tP(tj, {
															get when() {
																return 'desktop' === t();
															},
															get children() {
																return [
																	tP(oe, { size: 'm' }),
																	tP(aR, {
																		translationKey: 'walletModal.desktopConnectionModal.continueOnDesktop',
																		get translationValues() {
																			return { name: e.wallet.name };
																		},
																		get children() {
																			return ['Continue in ', th(() => e.wallet.name), ' on desktop…'];
																		},
																	}),
																	tP(aC, {
																		get children() {
																			return [
																				tP(rD, {
																					get leftIcon() {
																						return tP(oh, {});
																					},
																					onClick: h,
																					get children() {
																						return tP(aT, { translationKey: 'common.retry', children: 'Retry' });
																					},
																				}),
																				tP(oQ, {
																					get href() {
																						return e.wallet.aboutUrl;
																					},
																					blank: !0,
																					get children() {
																						return tP(rD, {
																							get rightIcon() {
																								return tP(op, {});
																							},
																							get children() {
																								return tP(aT, {
																									translationKey: 'walletModal.desktopConnectionModal.getWallet',
																									get translationValues() {
																										return { name: e.wallet.name };
																									},
																									get children() {
																										return ['Get ', th(() => e.wallet.name)];
																									},
																								});
																							},
																						});
																					},
																				}),
																			];
																		},
																	}),
																];
															},
														}),
													];
												},
											});
										},
									}),
									tP(tD, {
										get when() {
											return e.wallet.appName === oI;
										},
										get children() {
											return tP(aO, {
												get rightIcon() {
													return tP(a_, {
														get src() {
															return oU.TG;
														},
													});
												},
												scale: 's',
												onClick: f,
												get children() {
													return tP(aT, {
														translationKey: 'walletModal.desktopConnectionModal.openWalletOnTelegram',
														children: 'Open Wallet in Telegram on desktop',
													});
												},
											});
										},
									}),
									tP(tD, {
										get when() {
											return e.wallet.appName !== oI;
										},
										get children() {
											return tP(ax, {
												get children() {
													return [
														tP(tD, {
															get when() {
																return th(() => 'mobile' !== t())() && s8(e.wallet);
															},
															get children() {
																return tP(aS, {
																	appearance: 'secondary',
																	get leftIcon() {
																		return tP(ol, {});
																	},
																	onClick: d,
																	get children() {
																		return tP(aT, { translationKey: 'common.mobile', children: 'Mobile' });
																	},
																});
															},
														}),
														tP(tD, {
															get when() {
																return th(() => 'extension' !== t())() && s9(e.wallet);
															},
															get children() {
																return tP(aS, {
																	appearance: 'secondary',
																	get leftIcon() {
																		return tP(os, {});
																	},
																	onClick: p,
																	get children() {
																		return tP(aT, {
																			translationKey: 'common.browserExtension',
																			children: 'Browser Extension',
																		});
																	},
																});
															},
														}),
														tP(tD, {
															get when() {
																return th(() => 'desktop' !== t())() && s6(e.wallet);
															},
															get children() {
																return tP(aS, {
																	appearance: 'secondary',
																	get leftIcon() {
																		return tP(ou, {});
																	},
																	onClick: h,
																	get children() {
																		return tP(aT, { translationKey: 'common.desktop', children: 'Desktop' });
																	},
																});
															},
														}),
													];
												},
											});
										},
									}),
								];
							},
						})
					);
				},
				aU = nv.div``,
				aN = nv(rJ)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
				aq = nv(iQ)`
    margin-bottom: 18px;
`,
				a$ = nv.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
				aD = nh`
    margin-bottom: 12px;
`,
				aW = nv(iZ)`
    text-align: center;
    margin-bottom: 4px;
`,
				aj = nv(iA)`
    text-align: center;
    max-width: 352px;
    color: ${(e) => e.theme.colors.text.secondary};
`,
				aB = nv.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
				aF = {
					GET_A_WALLET: 'https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1',
				},
				aK = (e) =>
					tP(aU, {
						'data-tc-wallets-modal-info': 'true',
						get children() {
							return [
								tP(aN, { icon: 'arrow', onClick: () => e.onBackClick() }),
								tP(aq, { translationKey: 'walletModal.infoModal.whatIsAWallet', children: 'What is a wallet' }),
								tP(oK, {
									get children() {
										return [
											tP(a$, {
												get children() {
													return [
														tP(ov, { class: aD }),
														tP(aW, {
															translationKey: 'walletModal.infoModal.secureDigitalAssets',
															children: 'Secure digital assets storage',
														}),
														tP(aj, {
															translationKey: 'walletModal.infoModal.walletProtects',
															children:
																'A wallet protects and manages your digital assets including TON, tokens and collectables.',
														}),
													];
												},
											}),
											tP(a$, {
												get children() {
													return [
														tP(ob, { class: aD }),
														tP(aW, {
															translationKey: 'walletModal.infoModal.controlIdentity',
															children: 'Control your Web3 identity',
														}),
														tP(aj, {
															translationKey: 'walletModal.infoModal.manageIdentity',
															children:
																'Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.',
														}),
													];
												},
											}),
											tP(a$, {
												get children() {
													return [
														tP(ox, { class: aD }),
														tP(aW, {
															translationKey: 'walletModal.infoModal.effortlessCryptoTransactions',
															children: 'Effortless crypto transactions',
														}),
														tP(aj, {
															translationKey: 'walletModal.infoModal.easilySend',
															children:
																'Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.',
														}),
													];
												},
											}),
											tP(aB, {
												get children() {
													return tP(oQ, {
														get href() {
															return aF.GET_A_WALLET;
														},
														blank: !0,
														get children() {
															return tP(rD, {
																get rightIcon() {
																	return tP(om, {});
																},
																get children() {
																	return tP(aT, {
																		translationKey: 'walletModal.infoModal.getAWallet',
																		children: 'Get a Wallet',
																	});
																},
															});
														},
													});
												},
											}),
										];
									},
								}),
							];
						},
					}),
				aH = nv.div``,
				aQ = nv.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
				aV = nv(iQ)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
				az = nv(rJ)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
				aG = nv.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${(e) => nk(e.theme.colors.icon.secondary, 0.2)};
`,
				aZ = nv(rv)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
				aY = nv(oQ)`
    margin-left: auto;
`,
				aJ = nv(oe)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
				aX = nv(i6)`
    margin-bottom: 16px;
`,
				a1 = nv(iz)`
    color: ${(e) => e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
				a0 = nv.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
				a2 = { m: '16px', s: '8px', none: '0' },
				a5 = nv(iQ)`
    margin-bottom: 2px;
    padding: 0 52px;
`,
				a4 = nv(iz)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
				a3 = nv.div`
    padding: 0 24px 16px;
`,
				a6 = nv.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 24px 24px;
    margin-top: 0;
`,
				a8 = nv(rD)`
    width: 100%;
    height: 56px;
    border-radius: ${(e) => a2[e.theme.borderRadius]};
    background-color: ${(e) => nk(e.theme.colors.accent, 0.12)};
    color: ${(e) => e.theme.colors.accent};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 17px 20px 19px 20px;
`,
				a9 = (e) => [
					tP(a5, {
						get children() {
							return e.walletInfo.name;
						},
					}),
					tP(a4, {
						translationKey: 'walletModal.mobileConnectionModal.scanQR',
						get translationValues() {
							return { name: e.walletInfo.name };
						},
						get children() {
							return ['Scan the QR code below with your phone’s or ', th(() => e.walletInfo.name), '’s camera'];
						},
					}),
					tP(a3, {
						get children() {
							return tP(ik, {
								get imageUrl() {
									return e.walletInfo.imageUrl;
								},
								get sourceUrl() {
									return aM(e.universalLink, 'none');
								},
								disableCopy: !0,
							});
						},
					}),
					tP(a6, {
						get children() {
							return [
								tP(a8, {
									appearance: 'secondary',
									onClick: () => {
										var t;
										return null == (t = e.onOpenLink) ? void 0 : t.call(e);
									},
									get children() {
										return tP(aT, {
											translationKey: 'walletModal.mobileUniversalModal.openLink',
											children: 'Open Link',
										});
									},
								}),
								tP(a8, {
									appearance: 'secondary',
									onClick: () => {
										var t;
										return null == (t = e.onCopy) ? void 0 : t.call(e);
									},
									get children() {
										return tP(aT, {
											get translationKey() {
												return void 0 !== e.isCopiedShown ? 'common.copied' : 'common.copyLink';
											},
											get children() {
												return void 0 !== e.isCopiedShown ? 'Copied' : 'Copy Link';
											},
										});
									},
								}),
							];
						},
					}),
				],
				a7 = (e) => {
					let t = nm(),
						[n, r] = tl(!0),
						[i, o] = tl(!1),
						[s, a] = tl(null);
					td(() => {
						var t;
						a(null != (t = e.defaultError) ? t : null);
					});
					let l = tm(n5),
						c = l.onStatusChange(
							() => {},
							() => {
								a(null);
							},
						),
						u = th(() =>
							l.connect({ universalLink: e.wallet.universalLink, bridgeUrl: e.wallet.bridgeUrl }, e.additionalRequest),
						),
						d = () => {
							nJ(e2(e0({}, e.wallet), { openMethod: 'universal-link' })),
								aA(u(), { returnStrategy: s2.returnStrategy, twaReturnUrl: s2.twaReturnUrl, forceRedirect: !0 });
						},
						h = () => {
							if (et(u())) return d();
							a(null);
							let t = !n();
							r(!1),
								aP(u(), e.wallet.deepLink, { returnStrategy: s2.returnStrategy, forceRedirect: t }, (t) => {
									nJ(e2(e0({}, e.wallet), { openMethod: t }));
								});
						},
						[f, p] = tl(void 0),
						g = () =>
							e4(void 0, null, function* () {
								void 0 !== f() && clearTimeout(f()), yield ix(u());
								let e = setTimeout(() => p(void 0), 1500);
								p(e);
							}),
						m = () => {
							a(null), o(!0), nJ(e2(e0({}, e.wallet), { openMethod: 'qrcode' }));
						},
						y = () => {
							o(!1), nJ(e2(e0({}, e.wallet), { openMethod: 'universal-link' }));
						},
						v = () => {
							i() ? y() : e.onBackClick();
						};
					return (
						tp(c),
						h(),
						tP(aH, {
							'data-tc-wallets-modal-connection-mobile': 'true',
							get children() {
								return [
									tP(tD, {
										get when() {
											return !e.backDisabled || i();
										},
										get children() {
											return tP(az, { icon: 'arrow', onClick: v });
										},
									}),
									tP(tD, {
										get when() {
											return i();
										},
										get children() {
											return tP(a9, {
												get universalLink() {
													return u();
												},
												get walletInfo() {
													return e.wallet;
												},
												onOpenLink: h,
												onCopy: g,
												get isCopiedShown() {
													return f();
												},
											});
										},
									}),
									tP(tD, {
										get when() {
											return !i();
										},
										get children() {
											return [
												tP(aV, {
													get children() {
														return e.wallet.name;
													},
												}),
												tP(aQ, {
													get children() {
														return [
															tP(tD, {
																get when() {
																	return s();
																},
																get children() {
																	return [
																		tP(aX, { size: 's' }),
																		tP(tW, {
																			get children() {
																				return [
																					tP(tj, {
																						get when() {
																							return 'missing-features' === s();
																						},
																						get children() {
																							return tP(a1, {
																								translationKey: 'walletModal.mobileConnectionModal.missingFeatures',
																								get translationValues() {
																									return { name: e.wallet.name };
																								},
																								children:
																									'Please update Wallet, your version does not support required features for this dApp',
																							});
																						},
																					}),
																					tP(tj, {
																						get when() {
																							return 'connection-declined' === s();
																						},
																						get children() {
																							return tP(a1, {
																								translationKey: 'walletModal.mobileConnectionModal.connectionDeclined',
																								children: 'Connection declined',
																							});
																						},
																					}),
																					tP(tj, {
																						get when() {
																							return 'not-supported' === s();
																						},
																						get children() {
																							return tP(a1, {
																								translationKey: 'walletModal.mobileConnectionModal.notSupportedWallet',
																								get translationValues() {
																									return { name: e.wallet.name };
																								},
																								get children() {
																									return [
																										th(() => e.wallet.name),
																										' doesn’t support the requested action. Please connect another wallet that supports it.',
																									];
																								},
																							});
																						},
																					}),
																				];
																			},
																		}),
																		tP(a0, {
																			get children() {
																				return tP(tW, {
																					get children() {
																						return [
																							tP(tj, {
																								get when() {
																									return 'missing-features' === s();
																								},
																								get children() {
																									return [
																										tP(rD, {
																											get leftIcon() {
																												return tP(oh, {});
																											},
																											onClick: h,
																											get children() {
																												return tP(aT, {
																													translationKey: 'common.retry',
																													children: 'Retry',
																												});
																											},
																										}),
																										tP(oQ, {
																											get href() {
																												return e.wallet.aboutUrl;
																											},
																											blank: !0,
																											get children() {
																												return tP(rD, {
																													get leftIcon() {
																														return tP(op, {});
																													},
																													get children() {
																														return tP(aT, {
																															translationKey:
																																'walletModal.mobileConnectionModal.updateWallet',
																															get translationValues() {
																																return { name: e.wallet.name };
																															},
																															get children() {
																																return ['Update ', th(() => e.wallet.name)];
																															},
																														});
																													},
																												});
																											},
																										}),
																									];
																								},
																							}),
																							tP(tj, {
																								get when() {
																									return 'not-supported' === s();
																								},
																								get children() {
																									return tP(rD, {
																										onClick: () => e.onBackClick(),
																										get children() {
																											return tP(aT, {
																												translationKey:
																													'walletModal.mobileConnectionModal.chooseAnotherWallet',
																												children: 'Choose Another Wallet',
																											});
																										},
																									});
																								},
																							}),
																							tP(tj, {
																								get when() {
																									return 'connection-declined' === s();
																								},
																								get children() {
																									return [
																										tP(rD, {
																											get leftIcon() {
																												return tP(oh, {});
																											},
																											onClick: h,
																											get children() {
																												return tP(aT, {
																													translationKey: 'common.retry',
																													children: 'Retry',
																												});
																											},
																										}),
																										tP(rD, {
																											get leftIcon() {
																												return tP(o_, {
																													get fill() {
																														return t.colors.accent;
																													},
																												});
																											},
																											onClick: m,
																											get children() {
																												return tP(aT, {
																													translationKey: 'walletModal.mobileConnectionModal.showQR',
																													children: 'Show QR Code',
																												});
																											},
																										}),
																									];
																								},
																							}),
																						];
																					},
																				});
																			},
																		}),
																	];
																},
															}),
															tP(tD, {
																get when() {
																	return !s();
																},
																get children() {
																	return [
																		tP(aJ, { size: 's' }),
																		tP(a1, {
																			translationKey: 'walletModal.mobileConnectionModal.continueIn',
																			get translationValues() {
																				return { name: e.wallet.name };
																			},
																			get children() {
																				return ['Continue in ', th(() => e.wallet.name), '…'];
																			},
																		}),
																		tP(a0, {
																			get children() {
																				return [
																					tP(rD, {
																						get leftIcon() {
																							return tP(oh, {});
																						},
																						onClick: h,
																						get children() {
																							return tP(aT, { translationKey: 'common.retry', children: 'Retry' });
																						},
																					}),
																					tP(rD, {
																						get leftIcon() {
																							return tP(o_, {
																								get fill() {
																									return t.colors.accent;
																								},
																							});
																						},
																						onClick: m,
																						get children() {
																							return tP(aT, {
																								translationKey: 'walletModal.mobileConnectionModal.showQR',
																								children: 'Show QR Code',
																							});
																						},
																					}),
																				];
																			},
																		}),
																	];
																},
															}),
														];
													},
												}),
												tP(aG, {
													get children() {
														return [
															tP(aZ, {
																get src() {
																	return e.wallet.imageUrl;
																},
															}),
															tP(iZ, {
																get children() {
																	return e.wallet.name;
																},
															}),
															tP(aY, {
																get href() {
																	return e.wallet.aboutUrl;
																},
																blank: !0,
																get children() {
																	return tP(rD, {
																		get children() {
																			return tP(aT, { translationKey: 'common.get', children: 'GET' });
																		},
																	});
																},
															}),
														];
													},
												}),
											];
										},
									}),
								];
							},
						})
					);
				},
				le = { m: '16px', s: '12px', none: '0' },
				lt = { m: '6px', s: '6px', none: '0' };
			nv.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${rI} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${rL} {
        &:active {
            transform: scale(0.92);
        }
    }
`;
			let ln = nv(iQ)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
				lr = nv(iz)`
    margin: ${(e) => {
			var t;
			return null != (t = e.margin) ? t : '0 0 28px 0';
		}};
    padding: ${(e) => {
			var t;
			return null != (t = e.padding) ? t : '0 24px';
		}};
    min-height: ${(e) => {
			var t;
			return null != (t = e.padding) ? t : '44px';
		}};
    max-width: ${(e) => e.maxWidth}px;
    margin-left: ${(e) => (e.maxWidth ? 'auto' : '0px')};
    margin-right: ${(e) => (e.maxWidth ? 'auto' : '0px')};
`;
			nv(rD)`
    display: block;
    margin: 0 auto;
`;
			let li = nv(rD)`
    margin: 0 28px 24px;
    width: calc(100% - 56px);
    border-radius: ${(e) => le[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${(e) => e.theme.colors.telegramButton};

    color: ${(e) => e.theme.colors.constant.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    @media (max-width: 375px) {
        margin: 0 16px 24px;
        width: calc(100% - 32px);
    }
`,
				lo = nv(rv)`
    background-color: transparent;
    border-radius: ${(e) => lt[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
				ls = nv(rJ)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
				la = { m: '16px', s: '8px', none: '0' },
				ll = nv(iQ)`
    margin-bottom: 2px;
    padding: 0 52px;
`,
				lc = nv(iz)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
				lu = nv.div`
    padding: 0 24px 16px;
`,
				ld = nv.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 24px 24px;
    margin-top: 0;
`,
				lh = nv(rD)`
    width: 100%;
    height: 56px;
    border-radius: ${(e) => la[e.theme.borderRadius]};
    background-color: ${(e) => nk(e.theme.colors.accent, 0.12)};
    color: ${(e) => e.theme.colors.accent};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 17px 20px 19px 20px;
`,
				lf = (e) => [
					tP(ll, {
						translationKey: 'walletModal.mobileUniversalModal.connectYourWallet',
						children: 'Connect your TON wallet',
					}),
					tP(lc, { translationKey: 'walletModal.mobileUniversalModal.scan', children: 'Scan with your mobile wallet' }),
					tP(lu, {
						get children() {
							return tP(ik, {
								get imageUrl() {
									return oU.TON;
								},
								get sourceUrl() {
									return aM(e.universalLink, 'none');
								},
								disableCopy: !0,
							});
						},
					}),
					tP(ld, {
						get children() {
							return [
								tP(lh, {
									appearance: 'secondary',
									onClick: () => e.onOpenLink(),
									get children() {
										return tP(aT, {
											translationKey: 'walletModal.mobileUniversalModal.openLink',
											children: 'Open Link',
										});
									},
								}),
								tP(lh, {
									appearance: 'secondary',
									onClick: () => e.onCopy(),
									get children() {
										return tP(aT, {
											get translationKey() {
												return void 0 !== e.isCopiedShown ? 'common.copied' : 'common.copyLink';
											},
											get children() {
												return void 0 !== e.isCopiedShown ? 'Copied' : 'Copy Link';
											},
										});
									},
								}),
							];
						},
					}),
				];
			function lp(e) {
				return Array.from(new Set(e.filter(ew).map((e) => e.bridgeUrl))).map((e) => ({ bridgeUrl: e }));
			}
			function lg(e, t) {
				let n = new Set(null == e ? void 0 : e.map((e) => e.bridgeUrl)),
					r = new Set(null == t ? void 0 : t.map((e) => e.bridgeUrl));
				return n.size === r.size && [...n].every((e) => r.has(e));
			}
			let lm = tZ('<li></li>'),
				ly = tZ('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
				lv = (e) => {
					let [t, n] = tl(!1),
						[r, i] = tl(!0),
						[o, s] = tl(null),
						a = s2.connector,
						l = () => e.walletsList.filter((e) => s8(e) && e.appName !== oI),
						c = () => l().length > 7,
						u = th(() => lp(e.walletsList), null, { equals: lg }),
						d = th(() => {
							var t, n;
							return (
								null !=
									(n =
										null == (t = e.walletsList.find((e) => e.appName === oI)) ? void 0 : t.isSupportRequiredFeatures) &&
								n
							);
						}, null),
						h = () => (o() || s(a.connect(u(), e.additionalRequest)), o());
					nJ({ openMethod: 'universal-link' });
					let [f, p] = tl(void 0),
						g = () =>
							e4(void 0, null, function* () {
								void 0 !== f() && clearTimeout(f()), yield ix(h());
								let e = setTimeout(() => p(void 0), 1500);
								p(e);
							}),
						m = () => {
							let e = !r();
							i(!1),
								aP(h(), void 0, { returnStrategy: s2.returnStrategy, forceRedirect: e }, (e) => {
									nJ({ openMethod: e });
								});
						},
						y = () => {
							s(null);
							let t = e.walletsList.find((e) => e.appName === oI);
							if (!t || !ew(t)) throw new nO('@wallet bot not found in the wallets list');
							let n = a.connect({ bridgeUrl: t.bridgeUrl, universalLink: t.universalLink }, e.additionalRequest),
								o = !r();
							i(!1), aA(n, { returnStrategy: s2.returnStrategy, twaReturnUrl: s2.twaReturnUrl, forceRedirect: o });
						},
						v = () => {
							n(!0), nJ({ openMethod: 'qrcode' });
						},
						w = () => {
							n(!1), nJ({ openMethod: 'universal-link' });
						},
						b = th(() => l().filter((e) => e.isSupportRequiredFeatures), null),
						C = th(() => b().slice(0, 3), null),
						x = th(
							() =>
								l()
									.filter((e) => !C().find((t) => t.appName === e.appName))
									.slice(0, 4),
							null,
						);
					return (() => {
						let n = ly.cloneNode(!0);
						return (
							t0(
								n,
								tP(tD, {
									get when() {
										return t();
									},
									get children() {
										return [
											tP(ls, { icon: 'arrow', onClick: w }),
											tP(lf, {
												get universalLink() {
													return h();
												},
												get isCopiedShown() {
													return f();
												},
												onOpenLink: m,
												onCopy: g,
											}),
										];
									},
								}),
								null,
							),
							t0(
								n,
								tP(tD, {
									get when() {
										return !t();
									},
									get children() {
										return [
											tP(ls, {
												get icon() {
													return tP(o_, {});
												},
												onClick: v,
											}),
											tP(ln, {
												translationKey: 'walletModal.mobileUniversalModal.connectYourWallet',
												children: 'Connect your TON wallet',
											}),
											tP(tD, {
												get when() {
													return d();
												},
												get children() {
													return [
														tP(lr, {
															translationKey: 'walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect',
															maxWidth: 320,
															children: 'Use Wallet in Telegram or choose other application',
														}),
														tP(li, {
															get leftIcon() {
																return tP(ok, {});
															},
															get rightIcon() {
																return tP(lo, {
																	get src() {
																		return oU.TG;
																	},
																});
															},
															onClick: y,
															scale: 's',
															get children() {
																return tP(aT, {
																	translationKey: 'walletModal.mobileUniversalModal.openWalletOnTelegram',
																	children: 'Connect Wallet in Telegram',
																});
															},
														}),
													];
												},
											}),
											tP(lr, {
												translationKey: 'walletModal.mobileUniversalModal.chooseOtherApplication',
												maxWidth: 342,
												padding: '0 24px 8px 24px',
												margin: '0',
												children: 'Choose other application',
											}),
											tP(iq, {
												get children() {
													return [
														tP(t$, {
															get each() {
																return th(() => !!c())() ? C() : b();
															},
															children: (t) =>
																(() => {
																	let n = lm.cloneNode(!0);
																	return (
																		t0(
																			n,
																			tP(iK, {
																				get icon() {
																					return t.imageUrl;
																				},
																				get name() {
																					return t.name;
																				},
																				onClick: () => e.onSelect(t),
																			}),
																		),
																		n
																	);
																})(),
														}),
														tP(tD, {
															get when() {
																return c();
															},
															get children() {
																let t = lm.cloneNode(!0);
																return (
																	t0(
																		t,
																		tP(oL, {
																			labelLine1: 'View all',
																			labelLine2: 'wallets',
																			get images() {
																				return x().map((e) => e.imageUrl);
																			},
																			onClick: () => e.onSelectAllWallets(),
																		}),
																	),
																	t
																);
															},
														}),
													];
												},
											}),
										];
									},
								}),
								null,
							),
							n
						);
					})();
				},
				lw = { m: '16px', s: '8px', none: '0' },
				lb = { m: '8px', s: '4px', none: '0' },
				lC = nv.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
				lx = nv(iz)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
				lS = nv(iz)`
    margin-bottom: 16px;
`,
				lk = nv(ik)`
    margin-bottom: 24px;
`,
				lE = nv.ul`
    display: flex;
`;
			nv.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,
				nv(rD)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${(e) => lw[e.theme.borderRadius]};

    &:hover {
        ${(e) => (e.disableEventsAnimation ? 'transform: unset;' : '')}
    }

    &:active {
        ${(e) => (e.disableEventsAnimation ? 'transform: unset;' : '')}
    }
`,
				nv.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${(e) => e.theme.colors.background.primary};
    border-radius: ${(e) => lw[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,
				nv.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${(e) => lb[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(e) => e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
				nv(rv)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,
				nv.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,
				nv(iA)`
    color: ${(e) => e.theme.colors.text.secondary};
    font-size: 16px;
`;
			let lR = tZ('<li></li>'),
				lO = (e) => {
					let [t, n] = tl(!1),
						r = s2.connector,
						i = th(() => lp(e.walletsList), null, { equals: lg });
					nJ({ openMethod: 'qrcode' });
					let o = th(() => r.connect(i(), e.additionalRequest)),
						s = th(() => e.walletsList.filter((e) => e.isSupportRequiredFeatures), null),
						a = th(() => s().slice(0, 3), null),
						l = th(() => e.walletsList.filter((e) => !a().find((t) => t.appName === e.appName)).slice(0, 4), null);
					return tP(lC, {
						onClick: () => n(!1),
						'data-tc-wallets-modal-universal-desktop': 'true',
						get children() {
							return [
								tP(iQ, {
									translationKey: 'walletModal.desktopUniversalModal.connectYourWallet',
									children: 'Connect your wallet',
								}),
								tP(lx, {
									translationKey: 'walletModal.desktopUniversalModal.scan',
									children: 'Scan with your mobile wallet',
								}),
								tP(lk, {
									get sourceUrl() {
										return aM(o(), 'none');
									},
									get disableCopy() {
										return t();
									},
									get imageUrl() {
										return oU.TON;
									},
								}),
								tP(lS, {
									translationKey: 'walletModal.desktopUniversalModal.availableWallets',
									children: 'Available wallets',
								}),
								tP(lE, {
									get children() {
										return [
											tP(t$, {
												get each() {
													return a();
												},
												children: (t) =>
													(() => {
														let n = lR.cloneNode(!0);
														return t0(n, tP(oN, { wallet: t, onClick: () => e.onSelect(t) })), n;
													})(),
											}),
											tP(oL, {
												labelLine1: 'View all',
												labelLine2: 'wallets',
												get images() {
													return l().map((e) => e.imageUrl);
												},
												onClick: () => e.onSelectAllWallets(),
											}),
										];
									},
								}),
							];
						},
					});
				},
				l_ = () => {
					let { locale: e } = iT()[1];
					td(() => e(s2.language)),
						td(() => {
							nK() ? oF() : (s(null), u('universal'), h(!1));
						});
					let t = tm(n5),
						n = tm(oV),
						[i] = (function (e, t, n) {
							let i, o, s;
							(2 == arguments.length && 'object' == typeof t) || 1 == arguments.length
								? ((i = !0), (o = e), (s = t || {}))
								: ((i = e), (o = t), (s = n || {}));
							let a = null,
								l = tt,
								c = null,
								u = !1,
								d = 'initialValue' in s,
								h = 'function' == typeof i && th(i),
								f = new Set(),
								[p, g] = (s.storage || tl)(s.initialValue),
								[m, y] = tl(void 0),
								[v, w] = tl(void 0, { equals: !1 }),
								[b, C] = tl(d ? 'ready' : 'unresolved');
							if (e3.context) {
								let e;
								(c = `${e3.context.id}${e3.context.count++}`),
									'initial' === s.ssrLoadFrom ? (l = s.initialValue) : e3.load && (e = e3.load(c)) && (l = e[0]);
							}
							function x(e, t, n, r) {
								var i, o;
								return (
									a === e &&
										((a = null),
										(d = !0),
										(e === l || t === l) && s.onHydrated && queueMicrotask(() => s.onHydrated(r, { value: t })),
										(l = tt),
										(i = t),
										(o = n),
										tS(() => {
											for (let e of (void 0 === o && g(() => i), C(void 0 !== o ? 'errored' : 'ready'), y(o), f.keys()))
												e.decrement();
											f.clear();
										}, !1)),
									t
								);
							}
							function S() {
								let e = p(),
									t = m();
								if (void 0 !== t && !a) throw t;
								return (
									tr &&
										!tr.user &&
										r &&
										tc(() => {
											v(), a && (r.resolved || f.has(r) || (r.increment(), f.add(r)));
										}),
									e
								);
							}
							function k(e = !0) {
								if (!1 !== e && u) return;
								u = !1;
								let t = h ? h() : i;
								if (null == t || !1 === t) return void x(a, tf(p));
								let n = l !== tt ? l : tf(() => o(t, { value: p(), refetching: e }));
								return 'object' == typeof n && n && 'then' in n
									? ((a = n),
										(u = !0),
										queueMicrotask(() => (u = !1)),
										tS(() => {
											C(d ? 'refreshing' : 'pending'), w();
										}, !1),
										n.then(
											(e) => x(n, e, void 0, t),
											(e) => x(n, void 0, t_(e), t),
										))
									: (x(a, n, void 0, t), n);
							}
							return (
								Object.defineProperties(S, {
									state: { get: () => b() },
									error: { get: () => m() },
									loading: {
										get() {
											let e = b();
											return 'pending' === e || 'refreshing' === e;
										},
									},
									latest: {
										get() {
											if (!d) return S();
											let e = m();
											if (e && !a) throw e;
											return p();
										},
									},
								}),
								h ? tc(() => k(!1)) : k(!1),
								[S, { refetch: k, mutate: g }]
							);
						})(() => n.getWallets()),
						[o, s] = tl(null),
						[a, l] = tl(null),
						[c, u] = tl('universal'),
						[d, h] = tl(!1),
						f = th(() => {
							if ('ready' !== i.state) return null;
							let e = s3(i(), s2.walletsListConfiguration),
								t = e.filter(ey),
								r = e.filter((e) => !ey(e));
							e = (t || []).concat(r);
							let o = s2.preferredWalletAppName,
								s = e.find((e) => s7(e, o)),
								a = e.filter((e) => s7(e, o)).length >= 2;
							o && s && !a && (e = [e2(e0({}, s), { isPreferred: !0 })].concat(e.filter((e) => !s7(e, o))));
							let l = e.find((e) => s7(e, oI));
							return (
								l && (e = [l].concat(e.filter((e) => !s7(e, oI)))),
								e.map((e) => {
									var t;
									return e2(e0({}, e), {
										isSupportRequiredFeatures:
											null == n ||
											!n.walletsRequiredFeatures ||
											ex(null != (t = e.features) ? t : [], n.walletsRequiredFeatures),
									});
								})
							);
						}),
						p = () => {
							var e;
							return (null == (e = s2.connectRequestParameters) ? void 0 : e.state) === 'loading';
						},
						g = th(() => {
							var e;
							if (!p()) return null == (e = s2.connectRequestParameters) ? void 0 : e.value;
						}),
						m = (e) => {
							n.closeModal(e);
						},
						y = t.onStatusChange(
							(e) => {
								e && m('wallet-selected');
							},
							(e) => {
								var t;
								if (e instanceof $) {
									let n = e.cause.connectEvent.device.appName.toLowerCase(),
										r = null == (t = f()) ? void 0 : t.find((e) => e.appName.toLowerCase() === n);
									if (!r) throw new M('Wallet not found');
									l(r.isSupportRequiredFeatures ? 'missing-features' : 'not-supported'), s(r);
								}
							},
						),
						v = () => {
							u('all-wallets');
						},
						w = () => {
							u('universal');
						},
						b = () => {
							s(null), l(null);
						};
					return (
						tp(() => {
							s(null), l(null), h(!1);
						}),
						tp(y),
						tP(sX, {
							get opened() {
								return nK();
							},
							get enableAndroidBackHandler() {
								return s2.enableAndroidBackHandler;
							},
							onClose: () => m('action-cancelled'),
							onClickQuestion: () => h((e) => !e),
							'data-tc-wallets-modal-container': 'true',
							get children() {
								return [
									tP(tD, {
										get when() {
											return d();
										},
										get children() {
											return tP(aK, { onBackClick: () => h(!1) });
										},
									}),
									tP(tD, {
										get when() {
											return !d();
										},
										get children() {
											return [
												tP(tD, {
													get when() {
														return p() || !f();
													},
													get children() {
														return [
															tP(s1, { translationKey: 'walletModal.loading', children: 'Wallets list is loading' }),
															tP(s0, {
																get children() {
																	return tP(oe, { size: 'm' });
																},
															}),
														];
													},
												}),
												tP(tD, {
													get when() {
														return th(() => !p())() && f();
													},
													get children() {
														return tP(tW, {
															get children() {
																return [
																	tP(tj, {
																		get when() {
																			return o();
																		},
																		get children() {
																			return tP(ne, {
																				get component() {
																					return oj() ? a7 : aI;
																				},
																				get wallet() {
																					return o();
																				},
																				get additionalRequest() {
																					return g();
																				},
																				onBackClick: b,
																				get defaultError() {
																					return a();
																				},
																			});
																		},
																	}),
																	tP(tj, {
																		get when() {
																			return 'universal' === c();
																		},
																		get children() {
																			return tP(ne, {
																				get component() {
																					return oj() ? lv : lO;
																				},
																				onSelect: s,
																				get walletsList() {
																					return f();
																				},
																				get additionalRequest() {
																					return g();
																				},
																				onSelectAllWallets: v,
																			});
																		},
																	}),
																	tP(tj, {
																		get when() {
																			return 'all-wallets' === c();
																		},
																		get children() {
																			return tP(ah, {
																				get walletsList() {
																					return f();
																				},
																				onBack: w,
																				onSelect: s,
																			});
																		},
																	}),
																];
															},
														});
													},
												}),
											];
										},
									}),
								];
							},
						})
					);
				},
				lT = nv.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
				lM = nv(iQ)`
    margin-top: 16px;
`,
				lA = nv(iA)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${(e) => e.theme.colors.text.secondary};
`,
				lP = nv(rD)`
    min-width: 112px;
    margin-top: 32px;
`,
				lL = nv(oe)`
    height: 16px;
    width: 16px;
`,
				lI = nv(rD)`
    margin-top: 32px;
`,
				lU = (e) => {
					let t,
						n,
						r = r$(e),
						i = tm(oV),
						[o, s] = tl(!0),
						[a, l] = tl(!1);
					td(() => {
						let e = nX();
						l(!!e && 'sent' in e && e.sent);
					}),
						(null == i ? void 0 : i.wallet) &&
							'universalLink' in i.wallet &&
							('universal-link' === i.wallet.openMethod || (et(i.wallet.universalLink) && rS())) &&
							(t = i.wallet.universalLink),
						(null == i ? void 0 : i.wallet) &&
							'deepLink' in i.wallet &&
							('custom-deeplink' === i.wallet.openMethod || (et(i.wallet.deepLink) && rS())) &&
							(n = i.wallet.deepLink);
					let c = () => {
						let e = nX(),
							r = 'returnStrategy' in e ? e.returnStrategy : s2.returnStrategy,
							i = !o();
						s(!1),
							et(t)
								? aA(t, {
										returnStrategy: r,
										twaReturnUrl: 'twaReturnUrl' in e ? e.twaReturnUrl : s2.twaReturnUrl,
										forceRedirect: i,
									})
								: aP(t, n, { returnStrategy: r, forceRedirect: i }, () => {});
					};
					return tP(
						lT,
						tN(r, {
							get children() {
								return [
									th(() => e.icon),
									tP(lM, {
										get translationKey() {
											return e.headerTranslationKey;
										},
										get translationValues() {
											return e.headerTranslationValues;
										},
									}),
									tP(lA, {
										get translationKey() {
											return e.textTranslationKey;
										},
										get translationValues() {
											return e.textTranslationValues;
										},
									}),
									tP(tD, {
										get when() {
											return !a() && (('open-wallet' === e.showButton && t) || 'open-wallet' !== e.showButton);
										},
										get children() {
											return tP(lP, {
												disabled: !0,
												'data-tc-connect-button-loading': 'true',
												get children() {
													return tP(lL, {});
												},
											});
										},
									}),
									tP(tD, {
										get when() {
											return a();
										},
										get children() {
											return [
												tP(tD, {
													get when() {
														return 'open-wallet' !== e.showButton;
													},
													get children() {
														return tP(lI, {
															onClick: () => e.onClose(),
															get children() {
																return tP(aT, { translationKey: 'common.close', children: 'Close' });
															},
														});
													},
												}),
												tP(tD, {
													get when() {
														return 'open-wallet' === e.showButton && t;
													},
													get children() {
														return tP(lI, {
															onClick: c,
															get children() {
																return tP(aT, { translationKey: 'common.openWallet', children: 'Open wallet' });
															},
														});
													},
												}),
											];
										},
									}),
								];
							},
						}),
					);
				},
				lN = (e) => {
					let t = tm(oV),
						[n] = iT(),
						r = () => (t.wallet && 'name' in t.wallet ? t.wallet.name : n('common.yourWallet', {}, 'Your wallet'));
					return tP(lU, {
						headerTranslationKey: 'actionModal.confirmTransaction.header',
						get headerTranslationValues() {
							return { name: r() };
						},
						textTranslationKey: 'actionModal.confirmTransaction.text',
						get icon() {
							return tP(oe, { size: 'm' });
						},
						onClose: () => e.onClose(),
						showButton: 'open-wallet',
						'data-tc-confirm-modal': 'true',
					});
				},
				lq = (e) =>
					tP(lU, {
						headerTranslationKey: 'actionModal.transactionCanceled.header',
						textTranslationKey: 'actionModal.transactionCanceled.text',
						get icon() {
							return tP(i6, { size: 'm' });
						},
						onClose: () => e.onClose(),
						'data-tc-transaction-canceled-modal': 'true',
					}),
				l$ = (e) =>
					tP(lU, {
						headerTranslationKey: 'actionModal.transactionSent.header',
						textTranslationKey: 'actionModal.transactionSent.text',
						get icon() {
							return tP(i2, { size: 'm' });
						},
						onClose: () => e.onClose(),
						'data-tc-transaction-sent-modal': 'true',
					}),
				lD = () =>
					tP(ii, {
						get opened() {
							var e;
							return th(() => null !== nX())() && (null == (e = nX()) ? void 0 : e.openModal) === !0;
						},
						get enableAndroidBackHandler() {
							return s2.enableAndroidBackHandler;
						},
						onClose: () => n1(null),
						'data-tc-actions-modal-container': 'true',
						get children() {
							return tP(tW, {
								get children() {
									return [
										tP(tj, {
											get when() {
												return 'transaction-sent' === nX().name;
											},
											get children() {
												return tP(l$, { onClose: () => n1(null) });
											},
										}),
										tP(tj, {
											get when() {
												return 'transaction-canceled' === nX().name;
											},
											get children() {
												return tP(lq, { onClose: () => n1(null) });
											},
										}),
										tP(tj, {
											get when() {
												return 'confirm-transaction' === nX().name;
											},
											get children() {
												return tP(lN, { onClose: () => n1(null) });
											},
										}),
									];
								},
							});
						},
					}),
				lW = () => {
					let { locale: e } = iT()[1];
					td(() => e(s2.language)),
						td(() => {
							nV() && oF();
						});
					let t = tm(n5),
						n = tm(oV),
						[r, i] = tl(!1),
						o = () => {
							var e;
							return (null == (e = s2.connectRequestParameters) ? void 0 : e.state) === 'loading';
						},
						s = th(() => {
							var e;
							if (!o()) return null == (e = s2.connectRequestParameters) ? void 0 : e.value;
						}),
						a = (e) => {
							n.closeSingleWalletModal(e);
						};
					return (
						tp(
							t.onStatusChange((e) => {
								e && a('wallet-selected');
							}),
						),
						tp(() => {
							i(!1);
						}),
						tP(sX, {
							get opened() {
								return nV();
							},
							get enableAndroidBackHandler() {
								return s2.enableAndroidBackHandler;
							},
							onClose: () => a('action-cancelled'),
							onClickQuestion: () => i((e) => !e),
							'data-tc-wallets-modal-container': 'true',
							get children() {
								return [
									tP(tD, {
										get when() {
											return r();
										},
										get children() {
											return tP(aK, { onBackClick: () => i(!1) });
										},
									}),
									tP(tD, {
										get when() {
											return !r();
										},
										get children() {
											return [
												tP(tD, {
													get when() {
														return o();
													},
													get children() {
														return [
															tP(s1, { translationKey: 'walletModal.loading', children: 'Wallets list is loading' }),
															tP(s0, {
																get children() {
																	return tP(oe, { size: 'm' });
																},
															}),
														];
													},
												}),
												tP(tD, {
													get when() {
														return !o();
													},
													get children() {
														return tP(ne, {
															get component() {
																return oj() ? a7 : aI;
															},
															get wallet() {
																return nz();
															},
															get additionalRequest() {
																return s();
															},
															onBackClick: () => {},
															backDisabled: !0,
														});
													},
												}),
											];
										},
									}),
								];
							},
						})
					);
				},
				lj = (e) => {
					let t = iO(n0, s2.language);
					return (
						customElements.define(nb, class extends HTMLElement {}),
						document.body.hasAttribute('ontouchstart') || document.body.setAttribute('ontouchstart', ''),
						tP(i_.Provider, {
							value: t,
							get children() {
								return tP(oV.Provider, {
									get value() {
										return e.tonConnectUI;
									},
									get children() {
										return tP(n5.Provider, {
											get value() {
												return s2.connector;
											},
											get children() {
												return [
													tP(nS, {}),
													tP(ng, {
														theme: rh,
														get children() {
															return [
																tP(tD, {
																	get when() {
																		return s2.buttonRootId;
																	},
																	get children() {
																		return tP(t7, {
																			get mount() {
																				return document.getElementById(s2.buttonRootId);
																			},
																			get children() {
																				return tP(sJ, {});
																			},
																		});
																	},
																}),
																tP(ne, {
																	component: nb,
																	get children() {
																		return [tP(l_, {}), tP(lW, {}), tP(lD, {})];
																	},
																}),
															];
														},
													}),
												];
											},
										});
									},
								});
							},
						})
					);
				},
				lB = {
					openWalletsModal: () => void setTimeout(() => nF({ status: 'opened', closeReason: null })),
					closeWalletsModal: (e) => void setTimeout(() => nF({ status: 'closed', closeReason: e })),
					openSingleWalletModal: (e) => {
						setTimeout(() => nQ({ status: 'opened', closeReason: null, walletInfo: e }));
					},
					closeSingleWalletModal: (e) => void setTimeout(() => nQ({ status: 'closed', closeReason: e })),
					setAction: (e) => void setTimeout(() => n1(e)),
					clearAction: () => void setTimeout(() => n1(null)),
					getSelectedWalletInfo: () => nZ(),
					removeSelectedWalletInfo: () => nJ(null),
					renderApp: (e, t) =>
						(function (e, t, n, r = {}) {
							let i;
							return (
								ta((n) => {
									(i = n), t === document ? e() : t0(t, e(), t.firstChild ? null : void 0, void 0);
								}, r.owner),
								() => {
									i(), (t.textContent = '');
								}
							);
						})(() => tP(lj, { tonConnectUI: t }), document.getElementById(e)),
				};
			class lF {
				constructor(e) {
					e5(this, 'connector'),
						e5(this, 'setConnectRequestParametersCallback'),
						e5(this, 'consumers', []),
						e5(this, 'tracker'),
						e5(this, 'state', nB()),
						(this.connector = e.connector),
						(this.tracker = e.tracker),
						(this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback),
						td(() => {
							let e = nB();
							(this.state = e), this.consumers.forEach((t) => t(e));
						});
				}
				open() {
					return e4(this, null, function* () {
						this.tracker.trackConnectionStarted();
						let e = (yield this.connector.getWallets()).find(ev);
						return e ? this.connectEmbeddedWallet(e) : this.openWalletsModal();
					});
				}
				close(e = 'action-cancelled') {
					'action-cancelled' === e && this.tracker.trackConnectionError('Connection was cancelled'),
						lB.closeWalletsModal(e);
				}
				onStateChange(e) {
					return (
						this.consumers.push(e),
						() => {
							this.consumers = this.consumers.filter((t) => t !== e);
						}
					);
				}
				connectEmbeddedWallet(e) {
					let t = (t) => {
							nJ(e), this.connector.connect({ jsBridgeKey: e.jsBridgeKey }, t);
						},
						n = s2.connectRequestParameters;
					(null == n ? void 0 : n.state) === 'loading'
						? this.setConnectRequestParametersCallback(t)
						: t(null == n ? void 0 : n.value);
				}
				openWalletsModal() {
					return e4(this, null, function* () {
						return (
							rS() && rE(),
							lB.openWalletsModal(),
							new Promise((e) => {
								let t = this.onStateChange((n) => {
									let { status: r } = n;
									'opened' === r && (t(), e());
								});
							})
						);
					});
				}
			}
			class lK {
				constructor(e) {
					e5(this, 'connector'),
						e5(this, 'consumers', []),
						(this.connector = e.connector),
						td(() => {
							let e = nX();
							this.consumers.forEach((t) => t(e));
						});
				}
				onStateChange(e) {
					return (
						this.consumers.push(e),
						() => {
							this.consumers = this.consumers.filter((t) => t !== e);
						}
					);
				}
			}
			class lH {
				constructor(e) {
					e5(this, 'connector'),
						e5(this, 'setConnectRequestParametersCallback'),
						e5(this, 'consumers', []),
						e5(this, 'tracker'),
						e5(this, 'state', nH()),
						(this.connector = e.connector),
						(this.tracker = e.tracker),
						(this.setConnectRequestParametersCallback = e.setConnectRequestParametersCallback),
						td(() => {
							let e = nH();
							(this.state = e), this.consumers.forEach((t) => t(e));
						});
				}
				open(e) {
					return e4(this, null, function* () {
						this.tracker.trackConnectionStarted();
						let t = s3(yield this.connector.getWallets(), s2.walletsListConfiguration),
							n = t.find(ev);
						if (n) return this.connectEmbeddedWallet(n);
						let r = t.filter(ew).find((t) => s7(t, e));
						if (r) return this.openSingleWalletModal(r);
						let i = `Trying to open modal window with unknown wallet "${e}".`;
						throw (this.tracker.trackConnectionError(i), new nO(i));
					});
				}
				close(e = 'action-cancelled') {
					'action-cancelled' === e && this.tracker.trackConnectionError('Connection was cancelled'),
						lB.closeSingleWalletModal('action-cancelled');
				}
				onStateChange(e) {
					return (
						this.consumers.push(e),
						() => {
							this.consumers = this.consumers.filter((t) => t !== e);
						}
					);
				}
				connectEmbeddedWallet(e) {
					let t = (t) => {
							nJ(e), this.connector.connect({ jsBridgeKey: e.jsBridgeKey }, t);
						},
						n = s2.connectRequestParameters;
					(null == n ? void 0 : n.state) === 'loading'
						? this.setConnectRequestParametersCallback(t)
						: t(null == n ? void 0 : n.value);
				}
				openSingleWalletModal(e) {
					return e4(this, null, function* () {
						return (
							rS() && rE(),
							lB.openSingleWalletModal(e),
							new Promise((e) => {
								let t = this.onStateChange((n) => {
									let { status: r } = n;
									'opened' === r && (t(), e());
								});
							})
						);
					});
				}
			}
			class lQ {
				constructor(e) {
					var t;
					e5(this, 'eventPrefix', 'ton-connect-ui-'),
						e5(this, 'tonConnectUiVersion'),
						e5(this, 'tonConnectSdkVersion', null),
						e5(this, 'eventDispatcher'),
						(this.eventDispatcher = null != (t = null == e ? void 0 : e.eventDispatcher) ? t : new eD()),
						(this.tonConnectUiVersion = e.tonConnectUiVersion),
						this.init().catch();
				}
				get version() {
					return eR({ ton_connect_sdk_lib: this.tonConnectSdkVersion, ton_connect_ui_lib: this.tonConnectUiVersion });
				}
				init() {
					return e4(this, null, function* () {
						try {
							yield this.setRequestVersionHandler(),
								(this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion());
						} catch (e) {}
					});
				}
				setRequestVersionHandler() {
					return e4(this, null, function* () {
						yield this.eventDispatcher.addEventListener('ton-connect-ui-request-version', () =>
							e4(this, null, function* () {
								yield this.eventDispatcher.dispatchEvent(
									'ton-connect-ui-response-version',
									eE(this.tonConnectUiVersion),
								);
							}),
						);
					});
				}
				requestTonConnectSdkVersion() {
					return e4(this, null, function* () {
						return new Promise((e, t) =>
							e4(this, null, function* () {
								try {
									yield this.eventDispatcher.addEventListener(
										'ton-connect-response-version',
										(t) => {
											e(t.detail.version);
										},
										{ once: !0 },
									),
										yield this.eventDispatcher.dispatchEvent('ton-connect-request-version', ek());
								} catch (e) {
									t(e);
								}
							}),
						);
					});
				}
				dispatchUserActionEvent(e) {
					var t;
					try {
						null == (t = this.eventDispatcher) || t.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch();
					} catch (e) {}
				}
				trackConnectionStarted(...e) {
					try {
						let t = e_(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionCompleted(...e) {
					try {
						let t = eT(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionError(...e) {
					try {
						let t = eM(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringStarted(...e) {
					try {
						let t = eA(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringCompleted(...e) {
					try {
						let t = eP(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackConnectionRestoringError(...e) {
					try {
						let t = eL(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackDisconnection(...e) {
					try {
						let t = e$(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSentForSignature(...e) {
					try {
						let t = eU(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSigned(...e) {
					try {
						let t = eN(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
				trackTransactionSigningFailed(...e) {
					try {
						let t = eq(this.version, ...e);
						this.dispatchUserActionEvent(t);
					} catch (e) {}
				}
			}
			class lV {
				constructor(e) {
					if (
						(e5(this, 'walletInfoStorage', new nD()),
						e5(this, 'preferredWalletStorage', new nW()),
						e5(this, 'tracker'),
						e5(this, 'walletInfo', null),
						e5(this, 'systemThemeChangeUnsubscribe', null),
						e5(this, 'actionsConfiguration'),
						e5(this, 'walletsList'),
						e5(this, 'walletsRequiredFeatures'),
						e5(this, 'connectRequestParametersCallback'),
						e5(this, 'connector'),
						e5(this, 'modal'),
						e5(this, 'singleWalletModal'),
						e5(this, 'transactionModal'),
						e5(this, 'connectionRestored', Promise.resolve(!1)),
						e && 'connector' in e && e.connector)
					)
						this.connector = e.connector;
					else if (e && 'manifestUrl' in e && e.manifestUrl)
						this.connector = new ej({
							manifestUrl: e.manifestUrl,
							eventDispatcher: e.eventDispatcher,
							walletsRequiredFeatures: e.walletsRequiredFeatures,
						});
					else throw new nO('You have to specify a `manifestUrl` or a `connector` in the options.');
					(this.tracker = new lQ({
						eventDispatcher: null == e ? void 0 : e.eventDispatcher,
						tonConnectUiVersion: '2.1.0',
					})),
						(this.modal = new lF({
							connector: this.connector,
							tracker: this.tracker,
							setConnectRequestParametersCallback: (e) => {
								this.connectRequestParametersCallback = e;
							},
						})),
						(this.singleWalletModal = new lH({
							connector: this.connector,
							tracker: this.tracker,
							setConnectRequestParametersCallback: (e) => {
								this.connectRequestParametersCallback = e;
							},
						})),
						(this.transactionModal = new lK({ connector: this.connector })),
						(this.walletsRequiredFeatures = e.walletsRequiredFeatures),
						(this.walletsList = this.getWallets()),
						this.walletsList.then((e) =>
							(function e(t) {
								'complete' !== document.readyState
									? window.addEventListener('load', () => nP(() => e(t)), { once: !0 })
									: t.forEach((e) => {
											new window.Image().src = e;
										});
							})([...new Set(e.map((e) => e.imageUrl))]),
						);
					let t = this.normalizeWidgetRoot(null == e ? void 0 : e.widgetRootId);
					this.subscribeToWalletChange(),
						(null == e ? void 0 : e.restoreConnection) !== !1 &&
							(this.connectionRestored = (function (e) {
								return e4(this, null, function* () {
									return yield new Promise((e) => requestAnimationFrame(e)), e();
								});
							})(() =>
								e4(this, null, function* () {
									return (
										this.tracker.trackConnectionRestoringStarted(),
										yield this.connector.restoreConnection(),
										this.connector.connected
											? this.tracker.trackConnectionRestoringCompleted(this.wallet)
											: (this.tracker.trackConnectionRestoringError('Connection was not restored'),
												this.walletInfoStorage.removeWalletInfo()),
										this.connector.connected
									);
								}),
							)),
						(this.uiOptions = rd(e, { uiPreferences: { theme: 'SYSTEM' } }));
					let n = this.preferredWalletStorage.getPreferredWalletAppName();
					s5({ connector: this.connector, preferredWalletAppName: n }), lB.renderApp(t, this);
				}
				static getWallets() {
					return ej.getWallets();
				}
				get connected() {
					return this.connector.connected;
				}
				get account() {
					return this.connector.account;
				}
				get wallet() {
					return this.connector.wallet ? e0(e0({}, this.connector.wallet), this.walletInfo) : null;
				}
				set uiOptions(e) {
					var t, n, r, i, o, s;
					(this.checkButtonRootExist(e.buttonRootId),
					(this.actionsConfiguration = e.actionsConfiguration),
					null == (t = e.uiPreferences) ? void 0 : t.theme)
						? (null == (n = e.uiPreferences) ? void 0 : n.theme) !== 'SYSTEM'
							? (null == (r = this.systemThemeChangeUnsubscribe) || r.call(this),
								rm(e.uiPreferences.theme, e.uiPreferences.colorsSet))
							: (rm(
									window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? nt.LIGHT : nt.DARK,
									e.uiPreferences.colorsSet,
								),
								this.systemThemeChangeUnsubscribe ||
									(this.systemThemeChangeUnsubscribe = (function (e) {
										let t = (t) => e(t.matches ? nt.DARK : nt.LIGHT);
										return (
											window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', t),
											() => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', t)
										);
									})(rm)))
						: (null == (i = e.uiPreferences) ? void 0 : i.colorsSet) &&
							((s = e.uiPreferences.colorsSet),
							(rg[nt.DARK] = rd(s[nt.DARK], rg[nt.DARK])),
							(rg[nt.LIGHT] = rd(s[nt.LIGHT], rg[nt.LIGHT])),
							rf((e) => ({ colors: rd(rg[e.theme], rp[e.theme]) }))),
						(null == (o = e.uiPreferences) ? void 0 : o.borderRadius) &&
							rf({ borderRadius: e.uiPreferences.borderRadius }),
						s5((t) => {
							var n, r;
							let i = rd(
								e0(
									e0(
										e0(
											e0({}, e.language && { language: e.language }),
											!!(null == (n = e.actionsConfiguration) ? void 0 : n.returnStrategy) && {
												returnStrategy: e.actionsConfiguration.returnStrategy,
											},
										),
										!!(null == (r = e.actionsConfiguration) ? void 0 : r.twaReturnUrl) && {
											twaReturnUrl: e.actionsConfiguration.twaReturnUrl,
										},
									),
									!!e.walletsListConfiguration && { walletsListConfiguration: e.walletsListConfiguration },
								),
								n7(t),
							);
							return (
								void 0 !== e.buttonRootId && (i.buttonRootId = e.buttonRootId),
								void 0 !== e.enableAndroidBackHandler && (i.enableAndroidBackHandler = e.enableAndroidBackHandler),
								i
							);
						});
				}
				setConnectRequestParameters(e) {
					var t;
					s5({ connectRequestParameters: e }),
						((null == e ? void 0 : e.state) !== 'ready' && e) ||
							null == (t = this.connectRequestParametersCallback) ||
							t.call(this, null == e ? void 0 : e.value);
				}
				getWallets() {
					return e4(this, null, function* () {
						return this.connector.getWallets();
					});
				}
				onStatusChange(e, t) {
					return this.connector.onStatusChange(
						(t) =>
							e4(this, null, function* () {
								if (t) {
									let n = yield this.getSelectedWalletInfo(t);
									e(e0(e0({}, t), n || this.walletInfoStorage.getWalletInfo()));
								} else e(t);
							}),
						t,
					);
				}
				openModal() {
					return e4(this, null, function* () {
						return this.modal.open();
					});
				}
				closeModal(e) {
					this.modal.close(e);
				}
				onModalStateChange(e) {
					return this.modal.onStateChange(e);
				}
				get modalState() {
					return this.modal.state;
				}
				openSingleWalletModal(e) {
					return e4(this, null, function* () {
						return this.singleWalletModal.open(e);
					});
				}
				closeSingleWalletModal(e) {
					this.singleWalletModal.close(e);
				}
				onSingleWalletModalStateChange(e) {
					return this.singleWalletModal.onStateChange(e);
				}
				get singleWalletModalState() {
					return this.singleWalletModal.state;
				}
				connectWallet() {
					return e4(this, null, function* () {
						let e = (yield this.getWallets()).find(ev);
						return e ? yield this.connectEmbeddedWallet(e) : yield this.connectExternalWallet();
					});
				}
				disconnect() {
					return (
						this.tracker.trackDisconnection(this.wallet, 'dapp'),
						lB.clearAction(),
						lB.removeSelectedWalletInfo(),
						this.walletInfoStorage.removeWalletInfo(),
						this.connector.disconnect()
					);
				}
				sendTransaction(e, t) {
					return e4(this, null, function* () {
						if ((this.tracker.trackTransactionSentForSignature(this.wallet, e), !this.connected))
							throw (
								(this.tracker.trackTransactionSigningFailed(this.wallet, e, 'Wallet was not connected'),
								new nO('Connect wallet to send a transaction.'))
							);
						rS() && rE();
						let {
							notifications: n,
							modals: r,
							returnStrategy: i,
							twaReturnUrl: o,
						} = this.getModalsAndNotificationsConfiguration(t);
						lB.setAction({
							name: 'confirm-transaction',
							showNotification: n.includes('before'),
							openModal: r.includes('before'),
							sent: !1,
						});
						let s = new AbortController(),
							a = this.onTransactionModalStateChange((e) => {
								(null == e || !e.openModal) && (a(), e || s.abort());
							});
						try {
							let t = yield this.waitForSendTransaction({ transaction: e, signal: s.signal }, () => {
								!s.signal.aborted &&
									(lB.setAction({
										name: 'confirm-transaction',
										showNotification: n.includes('before'),
										openModal: r.includes('before'),
										sent: !0,
									}),
									this.walletInfo &&
										'universalLink' in this.walletInfo &&
										('universal-link' === this.walletInfo.openMethod ||
											'custom-deeplink' === this.walletInfo.openMethod) &&
										(et(this.walletInfo.universalLink)
											? aA(this.walletInfo.universalLink, {
													returnStrategy: i,
													twaReturnUrl: o || s2.twaReturnUrl,
													forceRedirect: !1,
												})
											: aP(
													this.walletInfo.universalLink,
													this.walletInfo.deepLink,
													{ returnStrategy: i, forceRedirect: !1 },
													() => {},
												)));
							});
							return (
								this.tracker.trackTransactionSigned(this.wallet, e, t),
								lB.setAction({
									name: 'transaction-sent',
									showNotification: n.includes('success'),
									openModal: r.includes('success'),
								}),
								t
							);
						} catch (e) {
							if (
								(lB.setAction({
									name: 'transaction-canceled',
									showNotification: n.includes('error'),
									openModal: r.includes('error'),
								}),
								e instanceof M)
							)
								throw e;
							throw (console.error(e), new nO('Unhandled error:' + e));
						} finally {
							a();
						}
					});
				}
				connectEmbeddedWallet(e) {
					return e4(this, null, function* () {
						let t = (t) => {
								nJ(e), this.connector.connect({ jsBridgeKey: e.jsBridgeKey }, t);
							},
							n = s2.connectRequestParameters;
						return (
							(null == n ? void 0 : n.state) === 'loading'
								? (this.connectRequestParametersCallback = t)
								: t(null == n ? void 0 : n.value),
							yield this.waitForWalletConnection({ ignoreErrors: !1 })
						);
					});
				}
				connectExternalWallet() {
					return e4(this, null, function* () {
						let e = new AbortController();
						lB.openWalletsModal();
						let t = this.onModalStateChange((n) => {
							let { status: r, closeReason: i } = n;
							'opened' !== r && (t(), 'action-cancelled' === i && e.abort());
						});
						return yield this.waitForWalletConnection({ ignoreErrors: !0, signal: e.signal });
					});
				}
				waitForWalletConnection(e) {
					return e4(this, null, function* () {
						return new Promise((t, n) => {
							this.tracker.trackConnectionStarted();
							let { ignoreErrors: r = !1, signal: i = null } = e;
							if (i && i.aborted)
								return (
									this.tracker.trackConnectionError('Connection was cancelled'), n(new nO('Wallet was not connected'))
								);
							let o = (e) =>
									e4(this, null, function* () {
										e
											? (this.tracker.trackConnectionCompleted(e), a(), t(e))
											: (this.tracker.trackConnectionError('Connection was cancelled'),
												r || (a(), n(new nO('Wallet was not connected'))));
									}),
								s = (e) => {
									this.tracker.trackConnectionError(e.message), r || (a(), n(e));
								},
								a = this.onStatusChange(
									(e) => o(e),
									(e) => s(e),
								);
							i &&
								i.addEventListener(
									'abort',
									() => {
										a(), n(new nO('Wallet was not connected'));
									},
									{ once: !0 },
								);
						});
					});
				}
				waitForSendTransaction(e, t) {
					return e4(this, null, function* () {
						return new Promise((n, r) => {
							let { transaction: i, signal: o } = e;
							if (o.aborted)
								return (
									this.tracker.trackTransactionSigningFailed(this.wallet, i, 'Transaction was cancelled'),
									r(new nO('Transaction was not sent'))
								);
							let s = (e) =>
									e4(this, null, function* () {
										n(e);
									}),
								a = (e) => {
									r(e);
								},
								l = () => {
									this.tracker.trackTransactionSigningFailed(this.wallet, i, 'Transaction was cancelled'),
										r(new nO('Transaction was not sent'));
								};
							o.addEventListener('abort', l, { once: !0 }),
								this.connector
									.sendTransaction(i, { onRequestSent: t, signal: o })
									.then((e) => (o.removeEventListener('abort', l), s(e)))
									.catch((e) => (o.removeEventListener('abort', l), a(e)));
						});
					});
				}
				onTransactionModalStateChange(e) {
					return this.transactionModal.onStateChange(e);
				}
				subscribeToWalletChange() {
					this.connector.onStatusChange((e) =>
						e4(this, null, function* () {
							var t;
							e
								? (yield this.updateWalletInfo(e),
									this.setPreferredWalletAppName(
										(null == (t = this.walletInfo) ? void 0 : t.appName) || e.device.appName,
									))
								: this.walletInfoStorage.removeWalletInfo();
						}),
					);
				}
				setPreferredWalletAppName(e) {
					this.preferredWalletStorage.setPreferredWalletAppName(e), s5({ preferredWalletAppName: e });
				}
				getSelectedWalletInfo(e) {
					return e4(this, null, function* () {
						let t,
							n = lB.getSelectedWalletInfo();
						if (!n) return null;
						if ('name' in n) t = n;
						else {
							let r = s3(yield this.walletsList, s2.walletsListConfiguration).find((t) => s7(t, e.device.appName));
							if (!r) throw new nO(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);
							t = e0(e0({}, r), n);
						}
						return t;
					});
				}
				updateWalletInfo(e) {
					return e4(this, null, function* () {
						let t = yield this.getSelectedWalletInfo(e);
						if (t) {
							(this.walletInfo = t), this.walletInfoStorage.setWalletInfo(t);
							return;
						}
						let n = this.walletInfoStorage.getWalletInfo();
						if (n) {
							this.walletInfo = n;
							return;
						}
						this.walletInfo = (yield this.walletsList).find((t) => s7(t, e.device.appName)) || null;
					});
				}
				normalizeWidgetRoot(e) {
					if (!e || !document.getElementById(e)) {
						e = 'tc-widget-root';
						let t = document.createElement('div');
						(t.id = e), document.body.appendChild(t);
					}
					return e;
				}
				checkButtonRootExist(e) {
					if (null != e && !document.getElementById(e)) throw new nO(`${e} element not found in the document.`);
				}
				getModalsAndNotificationsConfiguration(e) {
					var t, n, r, i, o, s;
					let a = ['before', 'success', 'error'],
						l = a;
					(null == (t = this.actionsConfiguration) ? void 0 : t.notifications) &&
						(null == (n = this.actionsConfiguration) ? void 0 : n.notifications) !== 'all' &&
						(l = this.actionsConfiguration.notifications),
						(null == e ? void 0 : e.notifications) && (l = 'all' === e.notifications ? a : e.notifications);
					let c = ['before'];
					(null == (r = this.actionsConfiguration) ? void 0 : r.modals) &&
						(c = 'all' === this.actionsConfiguration.modals ? a : this.actionsConfiguration.modals),
						(null == e ? void 0 : e.modals) && (c = 'all' === e.modals ? a : e.modals);
					let u =
							(null == e ? void 0 : e.returnStrategy) ||
							(null == (i = this.actionsConfiguration) ? void 0 : i.returnStrategy) ||
							'back',
						d =
							(null == e ? void 0 : e.twaReturnUrl) ||
							(null == (o = this.actionsConfiguration) ? void 0 : o.twaReturnUrl),
						h =
							(null == e ? void 0 : e.skipRedirectToWallet) ||
							(null == (s = this.actionsConfiguration) ? void 0 : s.skipRedirectToWallet) ||
							'ios';
					return (
						rS() && (h = 'never'),
						{ notifications: l, modals: c, returnStrategy: u, twaReturnUrl: d, skipRedirectToWallet: h }
					);
				}
			}
			var lz = Object.defineProperty,
				lG = Object.getOwnPropertySymbols,
				lZ = Object.prototype.hasOwnProperty,
				lY = Object.prototype.propertyIsEnumerable,
				lJ = (e, t, n) =>
					t in e ? lz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
				lX = (e, t) => {
					for (var n in t || (t = {})) lZ.call(t, n) && lJ(e, n, t[n]);
					if (lG) for (var n of lG(t)) lY.call(t, n) && lJ(e, n, t[n]);
					return e;
				},
				l1 = (e, t) => {
					var n = {};
					for (var r in e) lZ.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
					if (null != e && lG) for (var r of lG(e)) 0 > t.indexOf(r) && lY.call(e, r) && (n[r] = e[r]);
					return n;
				};
			function l0() {
				return 'undefined' != typeof window;
			}
			let l2 = (0, b.createContext)(null),
				l5 = null,
				l4 = (0, b.memo)((e) => {
					var { children: t } = e,
						n = l1(e, ['children']);
					return l0() && !l5 && (l5 = new lV(n)), (0, w.jsx)(l2.Provider, { value: l5, children: t });
				});
			class l3 extends nO {
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, l3.prototype);
				}
			}
			class l6 extends l3 {
				constructor(...e) {
					super(...e), Object.setPrototypeOf(this, l6.prototype);
				}
			}
			function l8() {
				let e = (0, b.useContext)(l2),
					t = (0, b.useCallback)(
						(t) => {
							e && (e.uiOptions = t);
						},
						[e],
					);
				return l0()
					? (!(function (e) {
							if (!e) throw new l6('You should add <TonConnectUIProvider> on the top of the app to use TonConnect');
						})(e),
						[e, t])
					: [null, () => {}];
			}
			let l9 = 'ton-connect-button';
			function l7() {
				let [e] = l8(),
					[t, n] = (0, b.useState)((null == e ? void 0 : e.wallet) || null);
				return (
					(0, b.useEffect)(() => {
						if (e)
							return (
								n(e.wallet),
								e.onStatusChange((e) => {
									n(e);
								})
							);
					}, [e]),
					t
				);
			}
			(0, b.memo)(({ className: e, style: t }) => {
				let [n, r] = l8();
				return (
					(0, b.useEffect)(() => (r({ buttonRootId: l9 }), () => r({ buttonRootId: null })), [r]),
					(0, w.jsx)('div', { id: l9, className: e, style: lX({ width: 'fit-content' }, t) })
				);
			});
		},
		1211: (e, t, n) => {
			'use strict';
			n.d(t, { Z: () => u, j: () => d });
			var r = n(5640),
				i = n(4209);
			let o = async (e) => {
				try {
					return { data: await e, error: null };
				} catch (e) {
					return { data: null, error: e };
				}
			};
			var s = n(148),
				a = (function (e) {
					return (
						(e.Android = 'android'), (e.IOS = 'ios'), (e.MacOS = 'macos'), (e.TDesktop = 'tdesktop'), (e.Web = 'web'), e
					);
				})(a || {});
			let l = async () => {
					var e, t, n;
					if (null == (n = window) || null == (t = n.Telegram) || null == (e = t.WebApp) ? void 0 : e.initData) {
						let e = window.Telegram.WebApp.initData,
							{ user: t } = Object.fromEntries(new URLSearchParams(e)),
							{ data: n, error: r } = await o(JSON.parse(t));
						return r ? (console.error(r), { user: null, initData: '' }) : { user: n, initData: e };
					}
					return { user: null, initData: '' };
				},
				c = (0, s.createContext)({
					isAuthenticated: !1,
					user: null,
					getPlatform: () => 'web',
					requestFullscreen: () => {},
				}),
				u = (e) => {
					var t;
					let { children: n = (0, r.jsx)(r.Fragment, {}) } = e,
						[{ loading: a = !0, isAuthenticated: u = !1, user: d = null }, h] = (0, s.useState)({
							loading: !1,
							isAuthenticated: !1,
							user: null,
						});
					(0, s.useEffect)(() => {
						(async () => {
							h((e) => ({ ...e, loading: !0 }));
							let { initData: e, user: t } = await l(),
								{ data: n, error: r } = await o(i.r.auth.telegram.mutate({ initData: e }));
							r && console.error(r.message), n || console.error('Invalid Data');
							let { data: s, error: a } = await o(i.r.app.authenticated.query());
							a && console.error(a.message), s || console.error('Invalid Data');
							let { isAuthenticated: c } = null != s ? s : { isAuthenticated: !1 };
							h((e) => ({ ...e, loading: !1, isAuthenticated: c, user: t }));
						})();
					}, []);
					let f = null == (t = window.Telegram) ? void 0 : t.WebApp,
						p = (0, s.useCallback)(() => {
							try {
								if (f) return f.ready(), f.platform;
							} catch (e) {
								console.error(e);
							}
							return 'web';
						}, [f]),
						g = (0, s.useCallback)(() => {
							try {
								if (f) {
									if ('web' === p()) return;
									f.ready(), f.requestFullscreen();
								}
							} catch (e) {
								console.error(e);
							}
						}, [f, p]),
						m = (0, s.useMemo)(
							() => ({ isAuthenticated: u, user: d, getPlatform: p, requestFullscreen: g }),
							[u, d, p, g],
						);
					return (0, r.jsx)(c.Provider, {
						value: m,
						children: a
							? (0, r.jsx)('div', {
									className: 'flex h-screen w-screen items-center justify-center',
									children: (0, r.jsx)('span', { className: 'text-xl', children: 'Loading' }),
								})
							: (0, r.jsx)(r.Fragment, { children: n }),
					});
				},
				d = () => (0, s.useContext)(c);
		},
		1412: (e, t, n) => {
			!(function (e) {
				'use strict';
				var t,
					r = function (e) {
						var t,
							n = new Float64Array(16);
						if (e) for (t = 0; t < e.length; t++) n[t] = e[t];
						return n;
					},
					i = function () {
						throw Error('no PRNG');
					},
					o = new Uint8Array(16),
					s = new Uint8Array(32);
				s[0] = 9;
				var a = r(),
					l = r([1]),
					c = r([56129, 1]),
					u = r([
						30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995,
					]),
					d = r([
						61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222,
					]),
					h = r([
						54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035,
						8553,
					]),
					f = r([
						26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
						26214,
					]),
					p = r([
						41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139,
					]);
				function g(e, t, n, r) {
					(e[t] = (n >> 24) & 255),
						(e[t + 1] = (n >> 16) & 255),
						(e[t + 2] = (n >> 8) & 255),
						(e[t + 3] = 255 & n),
						(e[t + 4] = (r >> 24) & 255),
						(e[t + 5] = (r >> 16) & 255),
						(e[t + 6] = (r >> 8) & 255),
						(e[t + 7] = 255 & r);
				}
				function m(e, t, n, r, i) {
					var o,
						s = 0;
					for (o = 0; o < i; o++) s |= e[t + o] ^ n[r + o];
					return (1 & ((s - 1) >>> 8)) - 1;
				}
				function y(e, t, n, r) {
					return m(e, t, n, r, 16);
				}
				function v(e, t, n, r) {
					return m(e, t, n, r, 32);
				}
				function w(e, t, n, r) {
					!(function (e, t, n, r) {
						for (
							var i,
								o = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
								s = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
								a = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
								l = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
								c = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
								u = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
								d = (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
								h = (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
								f = (255 & t[8]) | ((255 & t[9]) << 8) | ((255 & t[10]) << 16) | ((255 & t[11]) << 24),
								p = (255 & t[12]) | ((255 & t[13]) << 8) | ((255 & t[14]) << 16) | ((255 & t[15]) << 24),
								g = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
								m = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
								y = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
								v = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
								w = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
								b = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
								C = o,
								x = s,
								S = a,
								k = l,
								E = c,
								R = u,
								O = d,
								_ = h,
								T = f,
								M = p,
								A = g,
								P = m,
								L = y,
								I = v,
								U = w,
								N = b,
								q = 0;
							q < 20;
							q += 2
						)
							(E ^= ((i = (C + L) | 0) << 7) | (i >>> 25)),
								(T ^= ((i = (E + C) | 0) << 9) | (i >>> 23)),
								(L ^= ((i = (T + E) | 0) << 13) | (i >>> 19)),
								(C ^= ((i = (L + T) | 0) << 18) | (i >>> 14)),
								(M ^= ((i = (R + x) | 0) << 7) | (i >>> 25)),
								(I ^= ((i = (M + R) | 0) << 9) | (i >>> 23)),
								(x ^= ((i = (I + M) | 0) << 13) | (i >>> 19)),
								(R ^= ((i = (x + I) | 0) << 18) | (i >>> 14)),
								(U ^= ((i = (A + O) | 0) << 7) | (i >>> 25)),
								(S ^= ((i = (U + A) | 0) << 9) | (i >>> 23)),
								(O ^= ((i = (S + U) | 0) << 13) | (i >>> 19)),
								(A ^= ((i = (O + S) | 0) << 18) | (i >>> 14)),
								(k ^= ((i = (N + P) | 0) << 7) | (i >>> 25)),
								(_ ^= ((i = (k + N) | 0) << 9) | (i >>> 23)),
								(P ^= ((i = (_ + k) | 0) << 13) | (i >>> 19)),
								(N ^= ((i = (P + _) | 0) << 18) | (i >>> 14)),
								(x ^= ((i = (C + k) | 0) << 7) | (i >>> 25)),
								(S ^= ((i = (x + C) | 0) << 9) | (i >>> 23)),
								(k ^= ((i = (S + x) | 0) << 13) | (i >>> 19)),
								(C ^= ((i = (k + S) | 0) << 18) | (i >>> 14)),
								(O ^= ((i = (R + E) | 0) << 7) | (i >>> 25)),
								(_ ^= ((i = (O + R) | 0) << 9) | (i >>> 23)),
								(E ^= ((i = (_ + O) | 0) << 13) | (i >>> 19)),
								(R ^= ((i = (E + _) | 0) << 18) | (i >>> 14)),
								(P ^= ((i = (A + M) | 0) << 7) | (i >>> 25)),
								(T ^= ((i = (P + A) | 0) << 9) | (i >>> 23)),
								(M ^= ((i = (T + P) | 0) << 13) | (i >>> 19)),
								(A ^= ((i = (M + T) | 0) << 18) | (i >>> 14)),
								(L ^= ((i = (N + U) | 0) << 7) | (i >>> 25)),
								(I ^= ((i = (L + N) | 0) << 9) | (i >>> 23)),
								(U ^= ((i = (I + L) | 0) << 13) | (i >>> 19)),
								(N ^= ((i = (U + I) | 0) << 18) | (i >>> 14));
						(C = (C + o) | 0),
							(x = (x + s) | 0),
							(S = (S + a) | 0),
							(k = (k + l) | 0),
							(E = (E + c) | 0),
							(R = (R + u) | 0),
							(O = (O + d) | 0),
							(_ = (_ + h) | 0),
							(T = (T + f) | 0),
							(M = (M + p) | 0),
							(A = (A + g) | 0),
							(P = (P + m) | 0),
							(L = (L + y) | 0),
							(I = (I + v) | 0),
							(U = (U + w) | 0),
							(N = (N + b) | 0),
							(e[0] = (C >>> 0) & 255),
							(e[1] = (C >>> 8) & 255),
							(e[2] = (C >>> 16) & 255),
							(e[3] = (C >>> 24) & 255),
							(e[4] = (x >>> 0) & 255),
							(e[5] = (x >>> 8) & 255),
							(e[6] = (x >>> 16) & 255),
							(e[7] = (x >>> 24) & 255),
							(e[8] = (S >>> 0) & 255),
							(e[9] = (S >>> 8) & 255),
							(e[10] = (S >>> 16) & 255),
							(e[11] = (S >>> 24) & 255),
							(e[12] = (k >>> 0) & 255),
							(e[13] = (k >>> 8) & 255),
							(e[14] = (k >>> 16) & 255),
							(e[15] = (k >>> 24) & 255),
							(e[16] = (E >>> 0) & 255),
							(e[17] = (E >>> 8) & 255),
							(e[18] = (E >>> 16) & 255),
							(e[19] = (E >>> 24) & 255),
							(e[20] = (R >>> 0) & 255),
							(e[21] = (R >>> 8) & 255),
							(e[22] = (R >>> 16) & 255),
							(e[23] = (R >>> 24) & 255),
							(e[24] = (O >>> 0) & 255),
							(e[25] = (O >>> 8) & 255),
							(e[26] = (O >>> 16) & 255),
							(e[27] = (O >>> 24) & 255),
							(e[28] = (_ >>> 0) & 255),
							(e[29] = (_ >>> 8) & 255),
							(e[30] = (_ >>> 16) & 255),
							(e[31] = (_ >>> 24) & 255),
							(e[32] = (T >>> 0) & 255),
							(e[33] = (T >>> 8) & 255),
							(e[34] = (T >>> 16) & 255),
							(e[35] = (T >>> 24) & 255),
							(e[36] = (M >>> 0) & 255),
							(e[37] = (M >>> 8) & 255),
							(e[38] = (M >>> 16) & 255),
							(e[39] = (M >>> 24) & 255),
							(e[40] = (A >>> 0) & 255),
							(e[41] = (A >>> 8) & 255),
							(e[42] = (A >>> 16) & 255),
							(e[43] = (A >>> 24) & 255),
							(e[44] = (P >>> 0) & 255),
							(e[45] = (P >>> 8) & 255),
							(e[46] = (P >>> 16) & 255),
							(e[47] = (P >>> 24) & 255),
							(e[48] = (L >>> 0) & 255),
							(e[49] = (L >>> 8) & 255),
							(e[50] = (L >>> 16) & 255),
							(e[51] = (L >>> 24) & 255),
							(e[52] = (I >>> 0) & 255),
							(e[53] = (I >>> 8) & 255),
							(e[54] = (I >>> 16) & 255),
							(e[55] = (I >>> 24) & 255),
							(e[56] = (U >>> 0) & 255),
							(e[57] = (U >>> 8) & 255),
							(e[58] = (U >>> 16) & 255),
							(e[59] = (U >>> 24) & 255),
							(e[60] = (N >>> 0) & 255),
							(e[61] = (N >>> 8) & 255),
							(e[62] = (N >>> 16) & 255),
							(e[63] = (N >>> 24) & 255);
					})(e, t, n, r);
				}
				function b(e, t, n, r) {
					!(function (e, t, n, r) {
						for (
							var i,
								o = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
								s = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
								a = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
								l = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
								c = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
								u = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
								d = (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
								h = (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
								f = (255 & t[8]) | ((255 & t[9]) << 8) | ((255 & t[10]) << 16) | ((255 & t[11]) << 24),
								p = (255 & t[12]) | ((255 & t[13]) << 8) | ((255 & t[14]) << 16) | ((255 & t[15]) << 24),
								g = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
								m = (255 & n[16]) | ((255 & n[17]) << 8) | ((255 & n[18]) << 16) | ((255 & n[19]) << 24),
								y = (255 & n[20]) | ((255 & n[21]) << 8) | ((255 & n[22]) << 16) | ((255 & n[23]) << 24),
								v = (255 & n[24]) | ((255 & n[25]) << 8) | ((255 & n[26]) << 16) | ((255 & n[27]) << 24),
								w = (255 & n[28]) | ((255 & n[29]) << 8) | ((255 & n[30]) << 16) | ((255 & n[31]) << 24),
								b = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
								C = o,
								x = s,
								S = a,
								k = l,
								E = c,
								R = u,
								O = d,
								_ = h,
								T = f,
								M = p,
								A = g,
								P = m,
								L = y,
								I = v,
								U = w,
								N = b,
								q = 0;
							q < 20;
							q += 2
						)
							(E ^= ((i = (C + L) | 0) << 7) | (i >>> 25)),
								(T ^= ((i = (E + C) | 0) << 9) | (i >>> 23)),
								(L ^= ((i = (T + E) | 0) << 13) | (i >>> 19)),
								(C ^= ((i = (L + T) | 0) << 18) | (i >>> 14)),
								(M ^= ((i = (R + x) | 0) << 7) | (i >>> 25)),
								(I ^= ((i = (M + R) | 0) << 9) | (i >>> 23)),
								(x ^= ((i = (I + M) | 0) << 13) | (i >>> 19)),
								(R ^= ((i = (x + I) | 0) << 18) | (i >>> 14)),
								(U ^= ((i = (A + O) | 0) << 7) | (i >>> 25)),
								(S ^= ((i = (U + A) | 0) << 9) | (i >>> 23)),
								(O ^= ((i = (S + U) | 0) << 13) | (i >>> 19)),
								(A ^= ((i = (O + S) | 0) << 18) | (i >>> 14)),
								(k ^= ((i = (N + P) | 0) << 7) | (i >>> 25)),
								(_ ^= ((i = (k + N) | 0) << 9) | (i >>> 23)),
								(P ^= ((i = (_ + k) | 0) << 13) | (i >>> 19)),
								(N ^= ((i = (P + _) | 0) << 18) | (i >>> 14)),
								(x ^= ((i = (C + k) | 0) << 7) | (i >>> 25)),
								(S ^= ((i = (x + C) | 0) << 9) | (i >>> 23)),
								(k ^= ((i = (S + x) | 0) << 13) | (i >>> 19)),
								(C ^= ((i = (k + S) | 0) << 18) | (i >>> 14)),
								(O ^= ((i = (R + E) | 0) << 7) | (i >>> 25)),
								(_ ^= ((i = (O + R) | 0) << 9) | (i >>> 23)),
								(E ^= ((i = (_ + O) | 0) << 13) | (i >>> 19)),
								(R ^= ((i = (E + _) | 0) << 18) | (i >>> 14)),
								(P ^= ((i = (A + M) | 0) << 7) | (i >>> 25)),
								(T ^= ((i = (P + A) | 0) << 9) | (i >>> 23)),
								(M ^= ((i = (T + P) | 0) << 13) | (i >>> 19)),
								(A ^= ((i = (M + T) | 0) << 18) | (i >>> 14)),
								(L ^= ((i = (N + U) | 0) << 7) | (i >>> 25)),
								(I ^= ((i = (L + N) | 0) << 9) | (i >>> 23)),
								(U ^= ((i = (I + L) | 0) << 13) | (i >>> 19)),
								(N ^= ((i = (U + I) | 0) << 18) | (i >>> 14));
						(e[0] = (C >>> 0) & 255),
							(e[1] = (C >>> 8) & 255),
							(e[2] = (C >>> 16) & 255),
							(e[3] = (C >>> 24) & 255),
							(e[4] = (R >>> 0) & 255),
							(e[5] = (R >>> 8) & 255),
							(e[6] = (R >>> 16) & 255),
							(e[7] = (R >>> 24) & 255),
							(e[8] = (A >>> 0) & 255),
							(e[9] = (A >>> 8) & 255),
							(e[10] = (A >>> 16) & 255),
							(e[11] = (A >>> 24) & 255),
							(e[12] = (N >>> 0) & 255),
							(e[13] = (N >>> 8) & 255),
							(e[14] = (N >>> 16) & 255),
							(e[15] = (N >>> 24) & 255),
							(e[16] = (O >>> 0) & 255),
							(e[17] = (O >>> 8) & 255),
							(e[18] = (O >>> 16) & 255),
							(e[19] = (O >>> 24) & 255),
							(e[20] = (_ >>> 0) & 255),
							(e[21] = (_ >>> 8) & 255),
							(e[22] = (_ >>> 16) & 255),
							(e[23] = (_ >>> 24) & 255),
							(e[24] = (T >>> 0) & 255),
							(e[25] = (T >>> 8) & 255),
							(e[26] = (T >>> 16) & 255),
							(e[27] = (T >>> 24) & 255),
							(e[28] = (M >>> 0) & 255),
							(e[29] = (M >>> 8) & 255),
							(e[30] = (M >>> 16) & 255),
							(e[31] = (M >>> 24) & 255);
					})(e, t, n, r);
				}
				var C = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
				function x(e, t, n, r, i, o, s) {
					var a,
						l,
						c = new Uint8Array(16),
						u = new Uint8Array(64);
					for (l = 0; l < 16; l++) c[l] = 0;
					for (l = 0; l < 8; l++) c[l] = o[l];
					for (; i >= 64; ) {
						for (w(u, c, s, C), l = 0; l < 64; l++) e[t + l] = n[r + l] ^ u[l];
						for (l = 8, a = 1; l < 16; l++) (a = (a + (255 & c[l])) | 0), (c[l] = 255 & a), (a >>>= 8);
						(i -= 64), (t += 64), (r += 64);
					}
					if (i > 0) for (w(u, c, s, C), l = 0; l < i; l++) e[t + l] = n[r + l] ^ u[l];
					return 0;
				}
				function S(e, t, n, r, i) {
					var o,
						s,
						a = new Uint8Array(16),
						l = new Uint8Array(64);
					for (s = 0; s < 16; s++) a[s] = 0;
					for (s = 0; s < 8; s++) a[s] = r[s];
					for (; n >= 64; ) {
						for (w(l, a, i, C), s = 0; s < 64; s++) e[t + s] = l[s];
						for (s = 8, o = 1; s < 16; s++) (o = (o + (255 & a[s])) | 0), (a[s] = 255 & o), (o >>>= 8);
						(n -= 64), (t += 64);
					}
					if (n > 0) for (w(l, a, i, C), s = 0; s < n; s++) e[t + s] = l[s];
					return 0;
				}
				function k(e, t, n, r, i) {
					var o = new Uint8Array(32);
					b(o, r, i, C);
					for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = r[a + 16];
					return S(e, t, n, s, o);
				}
				function E(e, t, n, r, i, o, s) {
					var a = new Uint8Array(32);
					b(a, o, s, C);
					for (var l = new Uint8Array(8), c = 0; c < 8; c++) l[c] = o[c + 16];
					return x(e, t, n, r, i, l, a);
				}
				var R = function (e) {
					var t, n, r, i, o, s, a, l;
					(this.buffer = new Uint8Array(16)),
						(this.r = new Uint16Array(10)),
						(this.h = new Uint16Array(10)),
						(this.pad = new Uint16Array(8)),
						(this.leftover = 0),
						(this.fin = 0),
						(t = (255 & e[0]) | ((255 & e[1]) << 8)),
						(this.r[0] = 8191 & t),
						(n = (255 & e[2]) | ((255 & e[3]) << 8)),
						(this.r[1] = ((t >>> 13) | (n << 3)) & 8191),
						(r = (255 & e[4]) | ((255 & e[5]) << 8)),
						(this.r[2] = ((n >>> 10) | (r << 6)) & 7939),
						(i = (255 & e[6]) | ((255 & e[7]) << 8)),
						(this.r[3] = ((r >>> 7) | (i << 9)) & 8191),
						(o = (255 & e[8]) | ((255 & e[9]) << 8)),
						(this.r[4] = ((i >>> 4) | (o << 12)) & 255),
						(this.r[5] = (o >>> 1) & 8190),
						(s = (255 & e[10]) | ((255 & e[11]) << 8)),
						(this.r[6] = ((o >>> 14) | (s << 2)) & 8191),
						(a = (255 & e[12]) | ((255 & e[13]) << 8)),
						(this.r[7] = ((s >>> 11) | (a << 5)) & 8065),
						(l = (255 & e[14]) | ((255 & e[15]) << 8)),
						(this.r[8] = ((a >>> 8) | (l << 8)) & 8191),
						(this.r[9] = (l >>> 5) & 127),
						(this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
						(this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
						(this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
						(this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
						(this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
						(this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
						(this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
						(this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8));
				};
				function O(e, t, n, r, i, o) {
					var s = new R(o);
					return s.update(n, r, i), s.finish(e, t), 0;
				}
				function _(e, t, n, r, i, o) {
					var s = new Uint8Array(16);
					return O(s, 0, n, r, i, o), y(e, t, s, 0);
				}
				function T(e, t, n, r, i) {
					var o;
					if (n < 32) return -1;
					for (E(e, 0, t, 0, n, r, i), O(e, 16, e, 32, n - 32, e), o = 0; o < 16; o++) e[o] = 0;
					return 0;
				}
				function M(e, t, n, r, i) {
					var o,
						s = new Uint8Array(32);
					if (n < 32 || (k(s, 0, 32, r, i), 0 !== _(t, 16, t, 32, n - 32, s))) return -1;
					for (E(e, 0, t, 0, n, r, i), o = 0; o < 32; o++) e[o] = 0;
					return 0;
				}
				function A(e, t) {
					var n;
					for (n = 0; n < 16; n++) e[n] = 0 | t[n];
				}
				function P(e) {
					var t,
						n,
						r = 1;
					for (t = 0; t < 16; t++) (r = Math.floor((n = e[t] + r + 65535) / 65536)), (e[t] = n - 65536 * r);
					e[0] += r - 1 + 37 * (r - 1);
				}
				function L(e, t, n) {
					for (var r, i = ~(n - 1), o = 0; o < 16; o++) (r = i & (e[o] ^ t[o])), (e[o] ^= r), (t[o] ^= r);
				}
				function I(e, t) {
					var n,
						i,
						o,
						s = r(),
						a = r();
					for (n = 0; n < 16; n++) a[n] = t[n];
					for (P(a), P(a), P(a), i = 0; i < 2; i++) {
						for (n = 1, s[0] = a[0] - 65517; n < 15; n++)
							(s[n] = a[n] - 65535 - ((s[n - 1] >> 16) & 1)), (s[n - 1] &= 65535);
						(s[15] = a[15] - 32767 - ((s[14] >> 16) & 1)), (o = (s[15] >> 16) & 1), (s[14] &= 65535), L(a, s, 1 - o);
					}
					for (n = 0; n < 16; n++) (e[2 * n] = 255 & a[n]), (e[2 * n + 1] = a[n] >> 8);
				}
				function U(e, t) {
					var n = new Uint8Array(32),
						r = new Uint8Array(32);
					return I(n, e), I(r, t), v(n, 0, r, 0);
				}
				function N(e) {
					var t = new Uint8Array(32);
					return I(t, e), 1 & t[0];
				}
				function q(e, t) {
					var n;
					for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
					e[15] &= 32767;
				}
				function $(e, t, n) {
					for (var r = 0; r < 16; r++) e[r] = t[r] + n[r];
				}
				function D(e, t, n) {
					for (var r = 0; r < 16; r++) e[r] = t[r] - n[r];
				}
				function W(e, t, n) {
					var r,
						i,
						o = 0,
						s = 0,
						a = 0,
						l = 0,
						c = 0,
						u = 0,
						d = 0,
						h = 0,
						f = 0,
						p = 0,
						g = 0,
						m = 0,
						y = 0,
						v = 0,
						w = 0,
						b = 0,
						C = 0,
						x = 0,
						S = 0,
						k = 0,
						E = 0,
						R = 0,
						O = 0,
						_ = 0,
						T = 0,
						M = 0,
						A = 0,
						P = 0,
						L = 0,
						I = 0,
						U = 0,
						N = n[0],
						q = n[1],
						$ = n[2],
						D = n[3],
						W = n[4],
						j = n[5],
						B = n[6],
						F = n[7],
						K = n[8],
						H = n[9],
						Q = n[10],
						V = n[11],
						z = n[12],
						G = n[13],
						Z = n[14],
						Y = n[15];
					(o += (r = t[0]) * N),
						(s += r * q),
						(a += r * $),
						(l += r * D),
						(c += r * W),
						(u += r * j),
						(d += r * B),
						(h += r * F),
						(f += r * K),
						(p += r * H),
						(g += r * Q),
						(m += r * V),
						(y += r * z),
						(v += r * G),
						(w += r * Z),
						(b += r * Y),
						(s += (r = t[1]) * N),
						(a += r * q),
						(l += r * $),
						(c += r * D),
						(u += r * W),
						(d += r * j),
						(h += r * B),
						(f += r * F),
						(p += r * K),
						(g += r * H),
						(m += r * Q),
						(y += r * V),
						(v += r * z),
						(w += r * G),
						(b += r * Z),
						(C += r * Y),
						(a += (r = t[2]) * N),
						(l += r * q),
						(c += r * $),
						(u += r * D),
						(d += r * W),
						(h += r * j),
						(f += r * B),
						(p += r * F),
						(g += r * K),
						(m += r * H),
						(y += r * Q),
						(v += r * V),
						(w += r * z),
						(b += r * G),
						(C += r * Z),
						(x += r * Y),
						(l += (r = t[3]) * N),
						(c += r * q),
						(u += r * $),
						(d += r * D),
						(h += r * W),
						(f += r * j),
						(p += r * B),
						(g += r * F),
						(m += r * K),
						(y += r * H),
						(v += r * Q),
						(w += r * V),
						(b += r * z),
						(C += r * G),
						(x += r * Z),
						(S += r * Y),
						(c += (r = t[4]) * N),
						(u += r * q),
						(d += r * $),
						(h += r * D),
						(f += r * W),
						(p += r * j),
						(g += r * B),
						(m += r * F),
						(y += r * K),
						(v += r * H),
						(w += r * Q),
						(b += r * V),
						(C += r * z),
						(x += r * G),
						(S += r * Z),
						(k += r * Y),
						(u += (r = t[5]) * N),
						(d += r * q),
						(h += r * $),
						(f += r * D),
						(p += r * W),
						(g += r * j),
						(m += r * B),
						(y += r * F),
						(v += r * K),
						(w += r * H),
						(b += r * Q),
						(C += r * V),
						(x += r * z),
						(S += r * G),
						(k += r * Z),
						(E += r * Y),
						(d += (r = t[6]) * N),
						(h += r * q),
						(f += r * $),
						(p += r * D),
						(g += r * W),
						(m += r * j),
						(y += r * B),
						(v += r * F),
						(w += r * K),
						(b += r * H),
						(C += r * Q),
						(x += r * V),
						(S += r * z),
						(k += r * G),
						(E += r * Z),
						(R += r * Y),
						(h += (r = t[7]) * N),
						(f += r * q),
						(p += r * $),
						(g += r * D),
						(m += r * W),
						(y += r * j),
						(v += r * B),
						(w += r * F),
						(b += r * K),
						(C += r * H),
						(x += r * Q),
						(S += r * V),
						(k += r * z),
						(E += r * G),
						(R += r * Z),
						(O += r * Y),
						(f += (r = t[8]) * N),
						(p += r * q),
						(g += r * $),
						(m += r * D),
						(y += r * W),
						(v += r * j),
						(w += r * B),
						(b += r * F),
						(C += r * K),
						(x += r * H),
						(S += r * Q),
						(k += r * V),
						(E += r * z),
						(R += r * G),
						(O += r * Z),
						(_ += r * Y),
						(p += (r = t[9]) * N),
						(g += r * q),
						(m += r * $),
						(y += r * D),
						(v += r * W),
						(w += r * j),
						(b += r * B),
						(C += r * F),
						(x += r * K),
						(S += r * H),
						(k += r * Q),
						(E += r * V),
						(R += r * z),
						(O += r * G),
						(_ += r * Z),
						(T += r * Y),
						(g += (r = t[10]) * N),
						(m += r * q),
						(y += r * $),
						(v += r * D),
						(w += r * W),
						(b += r * j),
						(C += r * B),
						(x += r * F),
						(S += r * K),
						(k += r * H),
						(E += r * Q),
						(R += r * V),
						(O += r * z),
						(_ += r * G),
						(T += r * Z),
						(M += r * Y),
						(m += (r = t[11]) * N),
						(y += r * q),
						(v += r * $),
						(w += r * D),
						(b += r * W),
						(C += r * j),
						(x += r * B),
						(S += r * F),
						(k += r * K),
						(E += r * H),
						(R += r * Q),
						(O += r * V),
						(_ += r * z),
						(T += r * G),
						(M += r * Z),
						(A += r * Y),
						(y += (r = t[12]) * N),
						(v += r * q),
						(w += r * $),
						(b += r * D),
						(C += r * W),
						(x += r * j),
						(S += r * B),
						(k += r * F),
						(E += r * K),
						(R += r * H),
						(O += r * Q),
						(_ += r * V),
						(T += r * z),
						(M += r * G),
						(A += r * Z),
						(P += r * Y),
						(v += (r = t[13]) * N),
						(w += r * q),
						(b += r * $),
						(C += r * D),
						(x += r * W),
						(S += r * j),
						(k += r * B),
						(E += r * F),
						(R += r * K),
						(O += r * H),
						(_ += r * Q),
						(T += r * V),
						(M += r * z),
						(A += r * G),
						(P += r * Z),
						(L += r * Y),
						(w += (r = t[14]) * N),
						(b += r * q),
						(C += r * $),
						(x += r * D),
						(S += r * W),
						(k += r * j),
						(E += r * B),
						(R += r * F),
						(O += r * K),
						(_ += r * H),
						(T += r * Q),
						(M += r * V),
						(A += r * z),
						(P += r * G),
						(L += r * Z),
						(I += r * Y),
						(b += (r = t[15]) * N),
						(C += r * q),
						(x += r * $),
						(S += r * D),
						(k += r * W),
						(E += r * j),
						(R += r * B),
						(O += r * F),
						(_ += r * K),
						(T += r * H),
						(M += r * Q),
						(A += r * V),
						(P += r * z),
						(L += r * G),
						(I += r * Z),
						(U += r * Y),
						(o += 38 * C),
						(s += 38 * x),
						(a += 38 * S),
						(l += 38 * k),
						(c += 38 * E),
						(u += 38 * R),
						(d += 38 * O),
						(h += 38 * _),
						(f += 38 * T),
						(p += 38 * M),
						(g += 38 * A),
						(m += 38 * P),
						(y += 38 * L),
						(v += 38 * I),
						(w += 38 * U),
						(i = Math.floor((r = o + (i = 1) + 65535) / 65536)),
						(o = r - 65536 * i),
						(i = Math.floor((r = s + i + 65535) / 65536)),
						(s = r - 65536 * i),
						(i = Math.floor((r = a + i + 65535) / 65536)),
						(a = r - 65536 * i),
						(i = Math.floor((r = l + i + 65535) / 65536)),
						(l = r - 65536 * i),
						(i = Math.floor((r = c + i + 65535) / 65536)),
						(c = r - 65536 * i),
						(i = Math.floor((r = u + i + 65535) / 65536)),
						(u = r - 65536 * i),
						(i = Math.floor((r = d + i + 65535) / 65536)),
						(d = r - 65536 * i),
						(i = Math.floor((r = h + i + 65535) / 65536)),
						(h = r - 65536 * i),
						(i = Math.floor((r = f + i + 65535) / 65536)),
						(f = r - 65536 * i),
						(i = Math.floor((r = p + i + 65535) / 65536)),
						(p = r - 65536 * i),
						(i = Math.floor((r = g + i + 65535) / 65536)),
						(g = r - 65536 * i),
						(i = Math.floor((r = m + i + 65535) / 65536)),
						(m = r - 65536 * i),
						(i = Math.floor((r = y + i + 65535) / 65536)),
						(y = r - 65536 * i),
						(i = Math.floor((r = v + i + 65535) / 65536)),
						(v = r - 65536 * i),
						(i = Math.floor((r = w + i + 65535) / 65536)),
						(w = r - 65536 * i),
						(i = Math.floor((r = b + i + 65535) / 65536)),
						(b = r - 65536 * i),
						(o += i - 1 + 37 * (i - 1)),
						(i = Math.floor((r = o + (i = 1) + 65535) / 65536)),
						(o = r - 65536 * i),
						(i = Math.floor((r = s + i + 65535) / 65536)),
						(s = r - 65536 * i),
						(i = Math.floor((r = a + i + 65535) / 65536)),
						(a = r - 65536 * i),
						(i = Math.floor((r = l + i + 65535) / 65536)),
						(l = r - 65536 * i),
						(i = Math.floor((r = c + i + 65535) / 65536)),
						(c = r - 65536 * i),
						(i = Math.floor((r = u + i + 65535) / 65536)),
						(u = r - 65536 * i),
						(i = Math.floor((r = d + i + 65535) / 65536)),
						(d = r - 65536 * i),
						(i = Math.floor((r = h + i + 65535) / 65536)),
						(h = r - 65536 * i),
						(i = Math.floor((r = f + i + 65535) / 65536)),
						(f = r - 65536 * i),
						(i = Math.floor((r = p + i + 65535) / 65536)),
						(p = r - 65536 * i),
						(i = Math.floor((r = g + i + 65535) / 65536)),
						(g = r - 65536 * i),
						(i = Math.floor((r = m + i + 65535) / 65536)),
						(m = r - 65536 * i),
						(i = Math.floor((r = y + i + 65535) / 65536)),
						(y = r - 65536 * i),
						(i = Math.floor((r = v + i + 65535) / 65536)),
						(v = r - 65536 * i),
						(i = Math.floor((r = w + i + 65535) / 65536)),
						(w = r - 65536 * i),
						(i = Math.floor((r = b + i + 65535) / 65536)),
						(b = r - 65536 * i),
						(o += i - 1 + 37 * (i - 1)),
						(e[0] = o),
						(e[1] = s),
						(e[2] = a),
						(e[3] = l),
						(e[4] = c),
						(e[5] = u),
						(e[6] = d),
						(e[7] = h),
						(e[8] = f),
						(e[9] = p),
						(e[10] = g),
						(e[11] = m),
						(e[12] = y),
						(e[13] = v),
						(e[14] = w),
						(e[15] = b);
				}
				function j(e, t) {
					W(e, t, t);
				}
				function B(e, t) {
					var n,
						i = r();
					for (n = 0; n < 16; n++) i[n] = t[n];
					for (n = 253; n >= 0; n--) j(i, i), 2 !== n && 4 !== n && W(i, i, t);
					for (n = 0; n < 16; n++) e[n] = i[n];
				}
				function F(e, t) {
					var n,
						i = r();
					for (n = 0; n < 16; n++) i[n] = t[n];
					for (n = 250; n >= 0; n--) j(i, i), 1 !== n && W(i, i, t);
					for (n = 0; n < 16; n++) e[n] = i[n];
				}
				function K(e, t, n) {
					var i,
						o,
						s = new Uint8Array(32),
						a = new Float64Array(80),
						l = r(),
						u = r(),
						d = r(),
						h = r(),
						f = r(),
						p = r();
					for (o = 0; o < 31; o++) s[o] = t[o];
					for (s[31] = (127 & t[31]) | 64, s[0] &= 248, q(a, n), o = 0; o < 16; o++)
						(u[o] = a[o]), (h[o] = l[o] = d[o] = 0);
					for (o = 254, l[0] = h[0] = 1; o >= 0; --o)
						L(l, u, (i = (s[o >>> 3] >>> (7 & o)) & 1)),
							L(d, h, i),
							$(f, l, d),
							D(l, l, d),
							$(d, u, h),
							D(u, u, h),
							j(h, f),
							j(p, l),
							W(l, d, l),
							W(d, u, f),
							$(f, l, d),
							D(l, l, d),
							j(u, l),
							D(d, h, p),
							W(l, d, c),
							$(l, l, h),
							W(d, d, l),
							W(l, h, p),
							W(h, u, a),
							j(u, f),
							L(l, u, i),
							L(d, h, i);
					for (o = 0; o < 16; o++) (a[o + 16] = l[o]), (a[o + 32] = d[o]), (a[o + 48] = u[o]), (a[o + 64] = h[o]);
					var g = a.subarray(32),
						m = a.subarray(16);
					return B(g, g), W(m, m, g), I(e, m), 0;
				}
				function H(e, t) {
					return K(e, t, s);
				}
				function Q(e, t) {
					return i(t, 32), H(e, t);
				}
				function V(e, t, n) {
					var r = new Uint8Array(32);
					return K(r, n, t), b(e, o, r, C);
				}
				(R.prototype.blocks = function (e, t, n) {
					for (
						var r,
							i,
							o,
							s,
							a,
							l,
							c,
							u,
							d,
							h,
							f,
							p,
							g,
							m,
							y,
							v,
							w,
							b,
							C,
							x = 2048 * !this.fin,
							S = this.h[0],
							k = this.h[1],
							E = this.h[2],
							R = this.h[3],
							O = this.h[4],
							_ = this.h[5],
							T = this.h[6],
							M = this.h[7],
							A = this.h[8],
							P = this.h[9],
							L = this.r[0],
							I = this.r[1],
							U = this.r[2],
							N = this.r[3],
							q = this.r[4],
							$ = this.r[5],
							D = this.r[6],
							W = this.r[7],
							j = this.r[8],
							B = this.r[9];
						n >= 16;

					)
						(S += 8191 & (r = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))),
							(k += ((r >>> 13) | ((i = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3)) & 8191),
							(E += ((i >>> 10) | ((o = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6)) & 8191),
							(R += ((o >>> 7) | ((s = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9)) & 8191),
							(O += ((s >>> 4) | ((a = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) << 12)) & 8191),
							(_ += (a >>> 1) & 8191),
							(T += ((a >>> 14) | ((l = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) << 2)) & 8191),
							(M += ((l >>> 11) | ((c = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) << 5)) & 8191),
							(A += ((c >>> 8) | ((u = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) << 8)) & 8191),
							(P += (u >>> 5) | x),
							(d = (h = (d = 0) + S * L + 5 * B * k + 5 * j * E + 5 * W * R + 5 * D * O) >>> 13),
							(h &= 8191),
							(h += 5 * $ * _),
							(h += 5 * q * T),
							(h += 5 * N * M),
							(h += 5 * U * A),
							(h += 5 * I * P),
							(d += h >>> 13),
							(h &= 8191),
							(d = (f = d + S * I + k * L + 5 * B * E + 5 * j * R + 5 * W * O) >>> 13),
							(f &= 8191),
							(f += 5 * D * _),
							(f += 5 * $ * T),
							(f += 5 * q * M),
							(f += 5 * N * A),
							(f += 5 * U * P),
							(d += f >>> 13),
							(f &= 8191),
							(d = (p = d + S * U + k * I + E * L + 5 * B * R + 5 * j * O) >>> 13),
							(p &= 8191),
							(p += 5 * W * _),
							(p += 5 * D * T),
							(p += 5 * $ * M),
							(p += 5 * q * A),
							(p += 5 * N * P),
							(d += p >>> 13),
							(p &= 8191),
							(d = (g = d + S * N + k * U + E * I + R * L + 5 * B * O) >>> 13),
							(g &= 8191),
							(g += 5 * j * _),
							(g += 5 * W * T),
							(g += 5 * D * M),
							(g += 5 * $ * A),
							(g += 5 * q * P),
							(d += g >>> 13),
							(g &= 8191),
							(d = (m = d + S * q + k * N + E * U + R * I + O * L) >>> 13),
							(m &= 8191),
							(m += 5 * B * _),
							(m += 5 * j * T),
							(m += 5 * W * M),
							(m += 5 * D * A),
							(m += 5 * $ * P),
							(d += m >>> 13),
							(m &= 8191),
							(d = (y = d + S * $ + k * q + E * N + R * U + O * I) >>> 13),
							(y &= 8191),
							(y += _ * L),
							(y += 5 * B * T),
							(y += 5 * j * M),
							(y += 5 * W * A),
							(y += 5 * D * P),
							(d += y >>> 13),
							(y &= 8191),
							(d = (v = d + S * D + k * $ + E * q + R * N + O * U) >>> 13),
							(v &= 8191),
							(v += _ * I),
							(v += T * L),
							(v += 5 * B * M),
							(v += 5 * j * A),
							(v += 5 * W * P),
							(d += v >>> 13),
							(v &= 8191),
							(d = (w = d + S * W + k * D + E * $ + R * q + O * N) >>> 13),
							(w &= 8191),
							(w += _ * U),
							(w += T * I),
							(w += M * L),
							(w += 5 * B * A),
							(w += 5 * j * P),
							(d += w >>> 13),
							(w &= 8191),
							(d = (b = d + S * j + k * W + E * D + R * $ + O * q) >>> 13),
							(b &= 8191),
							(b += _ * N),
							(b += T * U),
							(b += M * I),
							(b += A * L),
							(b += 5 * B * P),
							(d += b >>> 13),
							(b &= 8191),
							(d = (C = d + S * B + k * j + E * W + R * D + O * $) >>> 13),
							(C &= 8191),
							(C += _ * q),
							(C += T * N),
							(C += M * U),
							(C += A * I),
							(C += P * L),
							(d += C >>> 13),
							(C &= 8191),
							(h = 8191 & (d = ((d = ((d << 2) + d) | 0) + h) | 0)),
							(d >>>= 13),
							(f += d),
							(S = h),
							(k = f),
							(E = p),
							(R = g),
							(O = m),
							(_ = y),
							(T = v),
							(M = w),
							(A = b),
							(P = C),
							(t += 16),
							(n -= 16);
					(this.h[0] = S),
						(this.h[1] = k),
						(this.h[2] = E),
						(this.h[3] = R),
						(this.h[4] = O),
						(this.h[5] = _),
						(this.h[6] = T),
						(this.h[7] = M),
						(this.h[8] = A),
						(this.h[9] = P);
				}),
					(R.prototype.finish = function (e, t) {
						var n,
							r,
							i,
							o,
							s = new Uint16Array(10);
						if (this.leftover) {
							for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
							(this.fin = 1), this.blocks(this.buffer, 0, 16);
						}
						for (n = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++)
							(this.h[o] += n), (n = this.h[o] >>> 13), (this.h[o] &= 8191);
						for (
							this.h[0] += 5 * n,
								n = this.h[0] >>> 13,
								this.h[0] &= 8191,
								this.h[1] += n,
								n = this.h[1] >>> 13,
								this.h[1] &= 8191,
								this.h[2] += n,
								s[0] = this.h[0] + 5,
								n = s[0] >>> 13,
								s[0] &= 8191,
								o = 1;
							o < 10;
							o++
						)
							(s[o] = this.h[o] + n), (n = s[o] >>> 13), (s[o] &= 8191);
						for (s[9] -= 8192, r = (1 ^ n) - 1, o = 0; o < 10; o++) s[o] &= r;
						for (o = 0, r = ~r; o < 10; o++) this.h[o] = (this.h[o] & r) | s[o];
						for (
							o = 1,
								this.h[0] = (this.h[0] | (this.h[1] << 13)) & 65535,
								this.h[1] = ((this.h[1] >>> 3) | (this.h[2] << 10)) & 65535,
								this.h[2] = ((this.h[2] >>> 6) | (this.h[3] << 7)) & 65535,
								this.h[3] = ((this.h[3] >>> 9) | (this.h[4] << 4)) & 65535,
								this.h[4] = ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)) & 65535,
								this.h[5] = ((this.h[6] >>> 2) | (this.h[7] << 11)) & 65535,
								this.h[6] = ((this.h[7] >>> 5) | (this.h[8] << 8)) & 65535,
								this.h[7] = ((this.h[8] >>> 8) | (this.h[9] << 5)) & 65535,
								i = this.h[0] + this.pad[0],
								this.h[0] = 65535 & i;
							o < 8;
							o++
						)
							(i = (((this.h[o] + this.pad[o]) | 0) + (i >>> 16)) | 0), (this.h[o] = 65535 & i);
						(e[t + 0] = (this.h[0] >>> 0) & 255),
							(e[t + 1] = (this.h[0] >>> 8) & 255),
							(e[t + 2] = (this.h[1] >>> 0) & 255),
							(e[t + 3] = (this.h[1] >>> 8) & 255),
							(e[t + 4] = (this.h[2] >>> 0) & 255),
							(e[t + 5] = (this.h[2] >>> 8) & 255),
							(e[t + 6] = (this.h[3] >>> 0) & 255),
							(e[t + 7] = (this.h[3] >>> 8) & 255),
							(e[t + 8] = (this.h[4] >>> 0) & 255),
							(e[t + 9] = (this.h[4] >>> 8) & 255),
							(e[t + 10] = (this.h[5] >>> 0) & 255),
							(e[t + 11] = (this.h[5] >>> 8) & 255),
							(e[t + 12] = (this.h[6] >>> 0) & 255),
							(e[t + 13] = (this.h[6] >>> 8) & 255),
							(e[t + 14] = (this.h[7] >>> 0) & 255),
							(e[t + 15] = (this.h[7] >>> 8) & 255);
					}),
					(R.prototype.update = function (e, t, n) {
						var r, i;
						if (this.leftover) {
							for ((i = 16 - this.leftover) > n && (i = n), r = 0; r < i; r++)
								this.buffer[this.leftover + r] = e[t + r];
							if (((n -= i), (t += i), (this.leftover += i), this.leftover < 16)) return;
							this.blocks(this.buffer, 0, 16), (this.leftover = 0);
						}
						if ((n >= 16 && ((i = n - (n % 16)), this.blocks(e, t, i), (t += i), (n -= i)), n)) {
							for (r = 0; r < n; r++) this.buffer[this.leftover + r] = e[t + r];
							this.leftover += n;
						}
					});
				var z = [
					0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b,
					0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242,
					0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe,
					0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
					0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc,
					0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f,
					0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967,
					0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
					0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1,
					0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218,
					0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08,
					0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
					0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814,
					0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915,
					0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f,
					0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
					0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be,
					0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
				];
				function G(e, t, n, r) {
					for (
						var i,
							o,
							s,
							a,
							l,
							c,
							u,
							d,
							h,
							f,
							p,
							g,
							m,
							y,
							v,
							w,
							b,
							C,
							x,
							S,
							k,
							E,
							R,
							O,
							_,
							T,
							M = new Int32Array(16),
							A = new Int32Array(16),
							P = e[0],
							L = e[1],
							I = e[2],
							U = e[3],
							N = e[4],
							q = e[5],
							$ = e[6],
							D = e[7],
							W = t[0],
							j = t[1],
							B = t[2],
							F = t[3],
							K = t[4],
							H = t[5],
							Q = t[6],
							V = t[7],
							G = 0;
						r >= 128;

					) {
						for (x = 0; x < 16; x++)
							(S = 8 * x + G),
								(M[x] = (n[S + 0] << 24) | (n[S + 1] << 16) | (n[S + 2] << 8) | n[S + 3]),
								(A[x] = (n[S + 4] << 24) | (n[S + 5] << 16) | (n[S + 6] << 8) | n[S + 7]);
						for (x = 0; x < 80; x++)
							if (
								((i = P),
								(o = L),
								(s = I),
								(a = U),
								(l = N),
								(c = q),
								(u = $),
								(d = D),
								(h = W),
								(f = j),
								(p = B),
								(g = F),
								(m = K),
								(y = H),
								(v = Q),
								(w = V),
								(k = D),
								(R = 65535 & (E = V)),
								(O = E >>> 16),
								(_ = 65535 & k),
								(T = k >>> 16),
								(k = ((N >>> 14) | (K << 18)) ^ ((N >>> 18) | (K << 14)) ^ ((K >>> 9) | (N << 23))),
								(R += 65535 & (E = ((K >>> 14) | (N << 18)) ^ ((K >>> 18) | (N << 14)) ^ ((N >>> 9) | (K << 23)))),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(k = (N & q) ^ (~N & $)),
								(R += 65535 & (E = (K & H) ^ (~K & Q))),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(k = z[2 * x]),
								(R += 65535 & (E = z[2 * x + 1])),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(k = M[x % 16]),
								(R += 65535 & (E = A[x % 16])),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(O += R >>> 16),
								(_ += O >>> 16),
								(T += _ >>> 16),
								(b = (65535 & _) | (T << 16)),
								(C = (65535 & R) | (O << 16)),
								(k = b),
								(R = 65535 & (E = C)),
								(O = E >>> 16),
								(_ = 65535 & k),
								(T = k >>> 16),
								(k = ((P >>> 28) | (W << 4)) ^ ((W >>> 2) | (P << 30)) ^ ((W >>> 7) | (P << 25))),
								(R += 65535 & (E = ((W >>> 28) | (P << 4)) ^ ((P >>> 2) | (W << 30)) ^ ((P >>> 7) | (W << 25)))),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(k = (P & L) ^ (P & I) ^ (L & I)),
								(R += 65535 & (E = (W & j) ^ (W & B) ^ (j & B))),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(O += R >>> 16),
								(_ += O >>> 16),
								(T += _ >>> 16),
								(d = (65535 & _) | (T << 16)),
								(w = (65535 & R) | (O << 16)),
								(k = a),
								(R = 65535 & (E = g)),
								(O = E >>> 16),
								(_ = 65535 & k),
								(T = k >>> 16),
								(k = b),
								(R += 65535 & (E = C)),
								(O += E >>> 16),
								(_ += 65535 & k),
								(T += k >>> 16),
								(O += R >>> 16),
								(_ += O >>> 16),
								(T += _ >>> 16),
								(a = (65535 & _) | (T << 16)),
								(g = (65535 & R) | (O << 16)),
								(L = i),
								(I = o),
								(U = s),
								(N = a),
								(q = l),
								($ = c),
								(D = u),
								(P = d),
								(j = h),
								(B = f),
								(F = p),
								(K = g),
								(H = m),
								(Q = y),
								(V = v),
								(W = w),
								x % 16 == 15)
							)
								for (S = 0; S < 16; S++)
									(k = M[S]),
										(R = 65535 & (E = A[S])),
										(O = E >>> 16),
										(_ = 65535 & k),
										(T = k >>> 16),
										(k = M[(S + 9) % 16]),
										(R += 65535 & (E = A[(S + 9) % 16])),
										(O += E >>> 16),
										(_ += 65535 & k),
										(T += k >>> 16),
										(k =
											(((b = M[(S + 1) % 16]) >>> 1) | ((C = A[(S + 1) % 16]) << 31)) ^
											((b >>> 8) | (C << 24)) ^
											(b >>> 7)),
										(R += 65535 & (E = ((C >>> 1) | (b << 31)) ^ ((C >>> 8) | (b << 24)) ^ ((C >>> 7) | (b << 25)))),
										(O += E >>> 16),
										(_ += 65535 & k),
										(T += k >>> 16),
										(k =
											(((b = M[(S + 14) % 16]) >>> 19) | ((C = A[(S + 14) % 16]) << 13)) ^
											((C >>> 29) | (b << 3)) ^
											(b >>> 6)),
										(R += 65535 & (E = ((C >>> 19) | (b << 13)) ^ ((b >>> 29) | (C << 3)) ^ ((C >>> 6) | (b << 26)))),
										(O += E >>> 16),
										(_ += 65535 & k),
										(T += k >>> 16),
										(O += R >>> 16),
										(_ += O >>> 16),
										(T += _ >>> 16),
										(M[S] = (65535 & _) | (T << 16)),
										(A[S] = (65535 & R) | (O << 16));
						(k = P),
							(R = 65535 & (E = W)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[0]),
							(R += 65535 & (E = t[0])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[0] = P = (65535 & _) | (T << 16)),
							(t[0] = W = (65535 & R) | (O << 16)),
							(k = L),
							(R = 65535 & (E = j)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[1]),
							(R += 65535 & (E = t[1])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[1] = L = (65535 & _) | (T << 16)),
							(t[1] = j = (65535 & R) | (O << 16)),
							(k = I),
							(R = 65535 & (E = B)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[2]),
							(R += 65535 & (E = t[2])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[2] = I = (65535 & _) | (T << 16)),
							(t[2] = B = (65535 & R) | (O << 16)),
							(k = U),
							(R = 65535 & (E = F)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[3]),
							(R += 65535 & (E = t[3])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[3] = U = (65535 & _) | (T << 16)),
							(t[3] = F = (65535 & R) | (O << 16)),
							(k = N),
							(R = 65535 & (E = K)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[4]),
							(R += 65535 & (E = t[4])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[4] = N = (65535 & _) | (T << 16)),
							(t[4] = K = (65535 & R) | (O << 16)),
							(k = q),
							(R = 65535 & (E = H)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[5]),
							(R += 65535 & (E = t[5])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[5] = q = (65535 & _) | (T << 16)),
							(t[5] = H = (65535 & R) | (O << 16)),
							(k = $),
							(R = 65535 & (E = Q)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[6]),
							(R += 65535 & (E = t[6])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[6] = $ = (65535 & _) | (T << 16)),
							(t[6] = Q = (65535 & R) | (O << 16)),
							(k = D),
							(R = 65535 & (E = V)),
							(O = E >>> 16),
							(_ = 65535 & k),
							(T = k >>> 16),
							(k = e[7]),
							(R += 65535 & (E = t[7])),
							(O += E >>> 16),
							(_ += 65535 & k),
							(T += k >>> 16),
							(O += R >>> 16),
							(_ += O >>> 16),
							(T += _ >>> 16),
							(e[7] = D = (65535 & _) | (T << 16)),
							(t[7] = V = (65535 & R) | (O << 16)),
							(G += 128),
							(r -= 128);
					}
					return r;
				}
				function Z(e, t, n) {
					var r,
						i = new Int32Array(8),
						o = new Int32Array(8),
						s = new Uint8Array(256),
						a = n;
					for (
						i[0] = 0x6a09e667,
							i[1] = 0xbb67ae85,
							i[2] = 0x3c6ef372,
							i[3] = 0xa54ff53a,
							i[4] = 0x510e527f,
							i[5] = 0x9b05688c,
							i[6] = 0x1f83d9ab,
							i[7] = 0x5be0cd19,
							o[0] = 0xf3bcc908,
							o[1] = 0x84caa73b,
							o[2] = 0xfe94f82b,
							o[3] = 0x5f1d36f1,
							o[4] = 0xade682d1,
							o[5] = 0x2b3e6c1f,
							o[6] = 0xfb41bd6b,
							o[7] = 0x137e2179,
							G(i, o, t, n),
							n %= 128,
							r = 0;
						r < n;
						r++
					)
						s[r] = t[a - n + r];
					for (
						s[n] = 128,
							s[(n = 256 - (n < 112) * 128) - 9] = 0,
							g(s, n - 8, (a / 0x20000000) | 0, a << 3),
							G(i, o, s, n),
							r = 0;
						r < 8;
						r++
					)
						g(e, 8 * r, i[r], o[r]);
					return 0;
				}
				function Y(e, t) {
					var n = r(),
						i = r(),
						o = r(),
						s = r(),
						a = r(),
						l = r(),
						c = r(),
						u = r(),
						h = r();
					D(n, e[1], e[0]),
						D(h, t[1], t[0]),
						W(n, n, h),
						$(i, e[0], e[1]),
						$(h, t[0], t[1]),
						W(i, i, h),
						W(o, e[3], t[3]),
						W(o, o, d),
						W(s, e[2], t[2]),
						$(s, s, s),
						D(a, i, n),
						D(l, s, o),
						$(c, s, o),
						$(u, i, n),
						W(e[0], a, l),
						W(e[1], u, c),
						W(e[2], c, l),
						W(e[3], a, u);
				}
				function J(e, t, n) {
					var r;
					for (r = 0; r < 4; r++) L(e[r], t[r], n);
				}
				function X(e, t) {
					var n = r(),
						i = r(),
						o = r();
					B(o, t[2]), W(n, t[0], o), W(i, t[1], o), I(e, i), (e[31] ^= N(n) << 7);
				}
				function ee(e, t, n) {
					var r, i;
					for (A(e[0], a), A(e[1], l), A(e[2], l), A(e[3], a), i = 255; i >= 0; --i)
						J(e, t, (r = (n[(i / 8) | 0] >> (7 & i)) & 1)), Y(t, e), Y(e, e), J(e, t, r);
				}
				function et(e, t) {
					var n = [r(), r(), r(), r()];
					A(n[0], h), A(n[1], f), A(n[2], l), W(n[3], h, f), ee(e, n, t);
				}
				function en(e, t, n) {
					var o,
						s = new Uint8Array(64),
						a = [r(), r(), r(), r()];
					for (
						n || i(t, 32), Z(s, t, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, et(a, s), X(e, a), o = 0;
						o < 32;
						o++
					)
						t[o + 32] = e[o];
					return 0;
				}
				var er = new Float64Array([
					237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 16,
				]);
				function ei(e, t) {
					var n, r, i, o;
					for (r = 63; r >= 32; --r) {
						for (n = 0, i = r - 32, o = r - 12; i < o; ++i)
							(t[i] += n - 16 * t[r] * er[i - (r - 32)]), (n = Math.floor((t[i] + 128) / 256)), (t[i] -= 256 * n);
						(t[i] += n), (t[r] = 0);
					}
					for (i = 0, n = 0; i < 32; i++) (t[i] += n - (t[31] >> 4) * er[i]), (n = t[i] >> 8), (t[i] &= 255);
					for (i = 0; i < 32; i++) t[i] -= n * er[i];
					for (r = 0; r < 32; r++) (t[r + 1] += t[r] >> 8), (e[r] = 255 & t[r]);
				}
				function eo(e) {
					var t,
						n = new Float64Array(64);
					for (t = 0; t < 64; t++) n[t] = e[t];
					for (t = 0; t < 64; t++) e[t] = 0;
					ei(e, n);
				}
				function es(e, t, n, i) {
					var o,
						s,
						a = new Uint8Array(64),
						l = new Uint8Array(64),
						c = new Uint8Array(64),
						u = new Float64Array(64),
						d = [r(), r(), r(), r()];
					for (Z(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, o = 0; o < n; o++) e[64 + o] = t[o];
					for (o = 0; o < 32; o++) e[32 + o] = a[32 + o];
					for (Z(c, e.subarray(32), n + 32), eo(c), et(d, c), X(e, d), o = 32; o < 64; o++) e[o] = i[o];
					for (Z(l, e, n + 64), eo(l), o = 0; o < 64; o++) u[o] = 0;
					for (o = 0; o < 32; o++) u[o] = c[o];
					for (o = 0; o < 32; o++) for (s = 0; s < 32; s++) u[o + s] += l[o] * a[s];
					return ei(e.subarray(32), u), n + 64;
				}
				function ea(e, t, n, i) {
					var o,
						s,
						c,
						d,
						h,
						f,
						g,
						m,
						y = new Uint8Array(32),
						w = new Uint8Array(64),
						b = [r(), r(), r(), r()],
						C = [r(), r(), r(), r()];
					if (
						n < 64 ||
						((o = r()),
						(s = r()),
						(c = r()),
						(d = r()),
						(h = r()),
						(f = r()),
						(g = r()),
						(A(C[2], l),
						q(C[1], i),
						j(c, C[1]),
						W(d, c, u),
						D(c, c, C[2]),
						$(d, C[2], d),
						j(h, d),
						j(f, h),
						W(g, f, h),
						W(o, g, c),
						W(o, o, d),
						F(o, o),
						W(o, o, c),
						W(o, o, d),
						W(o, o, d),
						W(C[0], o, d),
						j(s, C[0]),
						W(s, s, d),
						U(s, c) && W(C[0], C[0], p),
						j(s, C[0]),
						W(s, s, d),
						U(s, c))
							? -1
							: (N(C[0]) === i[31] >> 7 && D(C[0], a, C[0]), W(C[3], C[0], C[1]), 0))
					)
						return -1;
					for (m = 0; m < n; m++) e[m] = t[m];
					for (m = 0; m < 32; m++) e[m + 32] = i[m];
					if ((Z(w, e, n), eo(w), ee(b, C, w), et(C, t.subarray(32)), Y(b, C), X(y, b), (n -= 64), v(t, 0, y, 0))) {
						for (m = 0; m < n; m++) e[m] = 0;
						return -1;
					}
					for (m = 0; m < n; m++) e[m] = t[m + 64];
					return n;
				}
				function el(e, t) {
					if (32 !== e.length) throw Error('bad key size');
					if (24 !== t.length) throw Error('bad nonce size');
				}
				function ec() {
					for (var e = 0; e < arguments.length; e++)
						if (!(arguments[e] instanceof Uint8Array)) throw TypeError('unexpected type, use Uint8Array');
				}
				function eu(e) {
					for (var t = 0; t < e.length; t++) e[t] = 0;
				}
				(e.lowlevel = {
					crypto_core_hsalsa20: b,
					crypto_stream_xor: E,
					crypto_stream: k,
					crypto_stream_salsa20_xor: x,
					crypto_stream_salsa20: S,
					crypto_onetimeauth: O,
					crypto_onetimeauth_verify: _,
					crypto_verify_16: y,
					crypto_verify_32: v,
					crypto_secretbox: T,
					crypto_secretbox_open: M,
					crypto_scalarmult: K,
					crypto_scalarmult_base: H,
					crypto_box_beforenm: V,
					crypto_box_afternm: T,
					crypto_box: function (e, t, n, r, i, o) {
						var s = new Uint8Array(32);
						return V(s, i, o), T(e, t, n, r, s);
					},
					crypto_box_open: function (e, t, n, r, i, o) {
						var s = new Uint8Array(32);
						return V(s, i, o), M(e, t, n, r, s);
					},
					crypto_box_keypair: Q,
					crypto_hash: Z,
					crypto_sign: es,
					crypto_sign_keypair: en,
					crypto_sign_open: ea,
					crypto_secretbox_KEYBYTES: 32,
					crypto_secretbox_NONCEBYTES: 24,
					crypto_secretbox_ZEROBYTES: 32,
					crypto_secretbox_BOXZEROBYTES: 16,
					crypto_scalarmult_BYTES: 32,
					crypto_scalarmult_SCALARBYTES: 32,
					crypto_box_PUBLICKEYBYTES: 32,
					crypto_box_SECRETKEYBYTES: 32,
					crypto_box_BEFORENMBYTES: 32,
					crypto_box_NONCEBYTES: 24,
					crypto_box_ZEROBYTES: 32,
					crypto_box_BOXZEROBYTES: 16,
					crypto_sign_BYTES: 64,
					crypto_sign_PUBLICKEYBYTES: 32,
					crypto_sign_SECRETKEYBYTES: 64,
					crypto_sign_SEEDBYTES: 32,
					crypto_hash_BYTES: 64,
					gf: r,
					D: u,
					L: er,
					pack25519: I,
					unpack25519: q,
					M: W,
					A: $,
					S: j,
					Z: D,
					pow2523: F,
					add: Y,
					set25519: A,
					modL: ei,
					scalarmult: ee,
					scalarbase: et,
				}),
					(e.randomBytes = function (e) {
						var t = new Uint8Array(e);
						return i(t, e), t;
					}),
					(e.secretbox = function (e, t, n) {
						ec(e, t, n), el(n, t);
						for (var r = new Uint8Array(32 + e.length), i = new Uint8Array(r.length), o = 0; o < e.length; o++)
							r[o + 32] = e[o];
						return T(i, r, r.length, t, n), i.subarray(16);
					}),
					(e.secretbox.open = function (e, t, n) {
						ec(e, t, n), el(n, t);
						for (var r = new Uint8Array(16 + e.length), i = new Uint8Array(r.length), o = 0; o < e.length; o++)
							r[o + 16] = e[o];
						return r.length < 32 || 0 !== M(i, r, r.length, t, n) ? null : i.subarray(32);
					}),
					(e.secretbox.keyLength = 32),
					(e.secretbox.nonceLength = 24),
					(e.secretbox.overheadLength = 16),
					(e.scalarMult = function (e, t) {
						if ((ec(e, t), 32 !== e.length)) throw Error('bad n size');
						if (32 !== t.length) throw Error('bad p size');
						var n = new Uint8Array(32);
						return K(n, e, t), n;
					}),
					(e.scalarMult.base = function (e) {
						if ((ec(e), 32 !== e.length)) throw Error('bad n size');
						var t = new Uint8Array(32);
						return H(t, e), t;
					}),
					(e.scalarMult.scalarLength = 32),
					(e.scalarMult.groupElementLength = 32),
					(e.box = function (t, n, r, i) {
						var o = e.box.before(r, i);
						return e.secretbox(t, n, o);
					}),
					(e.box.before = function (e, t) {
						ec(e, t);
						if (32 !== e.length) throw Error('bad public key size');
						if (32 !== t.length) throw Error('bad secret key size');
						var n = new Uint8Array(32);
						return V(n, e, t), n;
					}),
					(e.box.after = e.secretbox),
					(e.box.open = function (t, n, r, i) {
						var o = e.box.before(r, i);
						return e.secretbox.open(t, n, o);
					}),
					(e.box.open.after = e.secretbox.open),
					(e.box.keyPair = function () {
						var e = new Uint8Array(32),
							t = new Uint8Array(32);
						return Q(e, t), { publicKey: e, secretKey: t };
					}),
					(e.box.keyPair.fromSecretKey = function (e) {
						if ((ec(e), 32 !== e.length)) throw Error('bad secret key size');
						var t = new Uint8Array(32);
						return H(t, e), { publicKey: t, secretKey: new Uint8Array(e) };
					}),
					(e.box.publicKeyLength = 32),
					(e.box.secretKeyLength = 32),
					(e.box.sharedKeyLength = 32),
					(e.box.nonceLength = 24),
					(e.box.overheadLength = e.secretbox.overheadLength),
					(e.sign = function (e, t) {
						if ((ec(e, t), 64 !== t.length)) throw Error('bad secret key size');
						var n = new Uint8Array(64 + e.length);
						return es(n, e, e.length, t), n;
					}),
					(e.sign.open = function (e, t) {
						if ((ec(e, t), 32 !== t.length)) throw Error('bad public key size');
						var n = new Uint8Array(e.length),
							r = ea(n, e, e.length, t);
						if (r < 0) return null;
						for (var i = new Uint8Array(r), o = 0; o < i.length; o++) i[o] = n[o];
						return i;
					}),
					(e.sign.detached = function (t, n) {
						for (var r = e.sign(t, n), i = new Uint8Array(64), o = 0; o < i.length; o++) i[o] = r[o];
						return i;
					}),
					(e.sign.detached.verify = function (e, t, n) {
						if ((ec(e, t, n), 64 !== t.length)) throw Error('bad signature size');
						if (32 !== n.length) throw Error('bad public key size');
						var r,
							i = new Uint8Array(64 + e.length),
							o = new Uint8Array(64 + e.length);
						for (r = 0; r < 64; r++) i[r] = t[r];
						for (r = 0; r < e.length; r++) i[r + 64] = e[r];
						return ea(o, i, i.length, n) >= 0;
					}),
					(e.sign.keyPair = function () {
						var e = new Uint8Array(32),
							t = new Uint8Array(64);
						return en(e, t), { publicKey: e, secretKey: t };
					}),
					(e.sign.keyPair.fromSecretKey = function (e) {
						if ((ec(e), 64 !== e.length)) throw Error('bad secret key size');
						for (var t = new Uint8Array(32), n = 0; n < t.length; n++) t[n] = e[32 + n];
						return { publicKey: t, secretKey: new Uint8Array(e) };
					}),
					(e.sign.keyPair.fromSeed = function (e) {
						if ((ec(e), 32 !== e.length)) throw Error('bad seed size');
						for (var t = new Uint8Array(32), n = new Uint8Array(64), r = 0; r < 32; r++) n[r] = e[r];
						return en(t, n, !0), { publicKey: t, secretKey: n };
					}),
					(e.sign.publicKeyLength = 32),
					(e.sign.secretKeyLength = 64),
					(e.sign.seedLength = 32),
					(e.sign.signatureLength = 64),
					(e.hash = function (e) {
						ec(e);
						var t = new Uint8Array(64);
						return Z(t, e, e.length), t;
					}),
					(e.hash.hashLength = 64),
					(e.verify = function (e, t) {
						return ec(e, t), 0 !== e.length && 0 !== t.length && e.length === t.length && 0 === m(e, 0, t, 0, e.length);
					}),
					(e.setPRNG = function (e) {
						i = e;
					}),
					(t = 'undefined' != typeof self ? self.crypto || self.msCrypto : null) && t.getRandomValues
						? e.setPRNG(function (e, n) {
								var r,
									i = new Uint8Array(n);
								for (r = 0; r < n; r += 65536) t.getRandomValues(i.subarray(r, r + Math.min(n - r, 65536)));
								for (r = 0; r < n; r++) e[r] = i[r];
								eu(i);
							})
						: (t = n(8308)) &&
							t.randomBytes &&
							e.setPRNG(function (e, n) {
								var r,
									i = t.randomBytes(n);
								for (r = 0; r < n; r++) e[r] = i[r];
								eu(i);
							});
			})(e.exports ? e.exports : (self.nacl = self.nacl || {}));
		},
		2252: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
				className: '__className_6f2501',
				variable: '__variable_6f2501',
			};
		},
		2379: (e, t, n) => {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/_app',
				function () {
					return n(5933);
				},
			]);
		},
		2611: (e, t, n) => {
			e.exports = n(9142);
		},
		4209: (e, t, n) => {
			'use strict';
			function r(e) {
				let t = {
					subscribe(t) {
						let n = null,
							r = !1,
							i = !1,
							o = !1;
						function s() {
							if (null === n) {
								o = !0;
								return;
							}
							!i && ((i = !0), 'function' == typeof n ? n() : n && n.unsubscribe());
						}
						return (
							(n = e({
								next(e) {
									r || t.next?.(e);
								},
								error(e) {
									r || ((r = !0), t.error?.(e), s());
								},
								complete() {
									r || ((r = !0), t.complete?.(), s());
								},
							})),
							o && s(),
							{ unsubscribe: s }
						);
					},
					pipe: (...e) => e.reduce(i, t),
				};
				return t;
			}
			function i(e, t) {
				return t(e);
			}
			n.d(t, { r: () => t_, t: () => tO });
			let o = {
				INTERNAL_SERVER_ERROR: -32603,
				BAD_GATEWAY: -32603,
				SERVICE_UNAVAILABLE: -32603,
				GATEWAY_TIMEOUT: -32603,
			};
			function s(e) {
				return !!e && !Array.isArray(e) && 'object' == typeof e;
			}
			o.BAD_GATEWAY, o.SERVICE_UNAVAILABLE, o.GATEWAY_TIMEOUT, o.INTERNAL_SERVER_ERROR;
			let a = 'function' == typeof Symbol && !!Symbol.asyncIterator;
			function l(e) {
				return a && s(e) && Symbol.asyncIterator in e;
			}
			var c = class e extends Error {
				cause;
				shape;
				data;
				meta;
				constructor(t, n) {
					let r = n?.cause;
					super(t, { cause: r }),
						(this.meta = n?.meta),
						(this.cause = r),
						(this.shape = n?.result?.error),
						(this.data = n?.result?.error.data),
						(this.name = 'TRPCClientError'),
						Object.setPrototypeOf(this, e.prototype);
				}
				static from(t, n = {}) {
					return t instanceof c
						? (n.meta && (t.meta = { ...t.meta, ...n.meta }), t)
						: s(t) && s(t.error) && 'number' == typeof t.error.code && 'string' == typeof t.error.message
							? new e(t.error.message, { ...n, result: t })
							: new e('string' == typeof t ? t : s(t) && 'string' == typeof t.message ? t.message : 'Unknown error', {
									...n,
									cause: t,
								});
				}
			};
			function u(e) {
				return e
					? 'input' in e
						? e
						: { input: e, output: e }
					: {
							input: { serialize: (e) => e, deserialize: (e) => e },
							output: { serialize: (e) => e, deserialize: (e) => e },
						};
			}
			let d = (e) => 'function' == typeof e,
				h = { query: 'GET', mutation: 'POST', subscription: 'PATCH' };
			function f(e) {
				return 'input' in e
					? e.transformer.input.serialize(e.input)
					: (function (e) {
							let t = {};
							for (let n = 0; n < e.length; n++) {
								let r = e[n];
								t[n] = r;
							}
							return t;
						})(e.inputs.map((t) => e.transformer.input.serialize(t)));
			}
			let p = (e) => {
					let t = e.url.split('?'),
						n = t[0].replace(/\/$/, '') + '/' + e.path,
						r = [];
					if (
						(t[1] && r.push(t[1]), 'inputs' in e && r.push('batch=1'), 'query' === e.type || 'subscription' === e.type)
					) {
						let t = f(e);
						void 0 !== t && 'POST' !== e.methodOverride && r.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
					}
					return r.length && (n += '?' + r.join('&')), n;
				},
				g = (e) => {
					if ('query' === e.type && 'POST' !== e.methodOverride) return;
					let t = f(e);
					return void 0 !== t ? JSON.stringify(t) : void 0;
				},
				m = (e) => b({ ...e, contentTypeHeader: 'application/json', getUrl: p, getBody: g });
			var y = class extends Error {
				constructor() {
					let e = 'AbortError';
					super(e), (this.name = e), (this.message = e);
				}
			};
			let v = (e) => {
				if (e?.aborted) {
					if ((e.throwIfAborted?.(), 'undefined' != typeof DOMException))
						throw new DOMException('AbortError', 'AbortError');
					throw new y();
				}
			};
			async function w(e) {
				v(e.signal);
				let t = e.getUrl(e),
					n = e.getBody(e),
					{ type: r } = e,
					i = await (async () => {
						let t = await e.headers();
						return Symbol.iterator in t ? Object.fromEntries(t) : t;
					})(),
					o = {
						...(e.contentTypeHeader ? { 'content-type': e.contentTypeHeader } : {}),
						...(e.trpcAcceptHeader ? { 'trpc-accept': e.trpcAcceptHeader } : void 0),
						...i,
					};
				return (function (e) {
					if (e) return e;
					if ('undefined' != typeof window && d(window.fetch)) return window.fetch;
					if ('undefined' != typeof globalThis && d(globalThis.fetch)) return globalThis.fetch;
					throw Error('No fetch implementation found');
				})(e.fetch)(t, { method: e.methodOverride ?? h[r], signal: e.signal, body: n, headers: o });
			}
			async function b(e) {
				let t = {},
					n = await w(e);
				t.response = n;
				let r = await n.json();
				return (t.responseJSON = r), { json: r, meta: t };
			}
			var C = class extends Error {},
				x = class extends Error {
					constructor() {
						super('Unable to transform response from server');
					}
				};
			Symbol('lazy');
			Symbol();
			let S = () => {
				throw Error('Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new');
			};
			function k(e) {
				let t = null,
					n = null,
					r = () => {
						clearTimeout(n), (n = null), (t = null);
					};
				function i() {
					let n = (function (t) {
						let n = [[]],
							r = 0;
						for (;;) {
							let i = t[r];
							if (!i) break;
							let o = n[n.length - 1];
							if (i.aborted) {
								i.reject?.(Error('Aborted')), r++;
								continue;
							}
							if (e.validate(o.concat(i).map((e) => e.key))) {
								o.push(i), r++;
								continue;
							}
							if (0 === o.length) {
								i.reject?.(Error('Input is too big for a single dispatch')), r++;
								continue;
							}
							n.push([]);
						}
						return n;
					})(t);
					for (let t of (r(), n)) {
						if (!t.length) continue;
						let n = { items: t };
						for (let e of t) e.batch = n;
						e.fetch(n.items.map((e) => e.key))
							.then(async (e) => {
								for (let t of (await Promise.all(
									e.map(async (e, t) => {
										let r = n.items[t];
										try {
											let t = await Promise.resolve(e);
											r.resolve?.(t);
										} catch (e) {
											r.reject?.(e);
										}
										(r.batch = null), (r.reject = null), (r.resolve = null);
									}),
								),
								n.items))
									t.reject?.(Error('Missing result')), (t.batch = null);
							})
							.catch((e) => {
								for (let t of n.items) t.reject?.(e), (t.batch = null);
							});
					}
				}
				return {
					load: function (e) {
						let r = { aborted: !1, key: e, batch: null, resolve: S, reject: S },
							o = new Promise((e, n) => {
								(r.reject = n), (r.resolve = e), (t ??= []).push(r);
							});
						return (n ??= setTimeout(i)), o;
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
				R = { enabled: !1, closeMs: 0 },
				O = { enabled: !1, pongTimeoutMs: 1e3, intervalMs: 5e3 },
				_ = (e) => (0 === e ? 0 : Math.min(1e3 * 2 ** e, 3e4)),
				T = (e, ...t) => ('function' == typeof e ? e(...t) : e);
			var M = class e extends Error {
					constructor(t) {
						super(t.message, { cause: t.cause }),
							(this.name = 'TRPCWebSocketClosedError'),
							Object.setPrototypeOf(this, e.prototype);
					}
				},
				A = class {
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
			function P() {
				let e, t;
				return {
					promise: new Promise((n, r) => {
						(e = n), (t = r);
					}),
					resolve: e,
					reject: t,
				};
			}
			async function L(e) {
				let t = await T(e.url);
				if (!e.connectionParams) return t;
				let n = t.includes('?') ? '&' : '?';
				return t + `${n}connectionParams=1`;
			}
			async function I(e) {
				return JSON.stringify({ method: 'connectionParams', data: await T(e) });
			}
			var U = class {
					outgoingRequests = [];
					pendingRequests = {};
					register(e, t) {
						let { promise: n, resolve: r } = P();
						return (
							this.outgoingRequests.push({
								id: String(e.id),
								message: e,
								end: n,
								callbacks: {
									next: t.next,
									complete: () => {
										t.complete(), r();
									},
									error: (e) => {
										t.error(e), r();
									},
								},
							}),
							() => {
								this.delete(e.id), t.complete(), r();
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
				N = class e {
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
						let t = L(this.urlOptions).then((e) => new this.WebSocketPonyfill(e));
						this.openPromise = t.then(async (e) => {
							(this.ws = e),
								e.addEventListener('message', function ({ data: e }) {
									'PING' === e && this.send('PONG');
								}),
								this.keepAliveOpts.enabled &&
									(function (e, { intervalMs: t, pongTimeoutMs: n }) {
										let r, i;
										function o() {
											r = setTimeout(() => {
												e.send('PING'),
													(i = setTimeout(() => {
														e.close();
													}, n));
											}, t);
										}
										e.addEventListener('open', o),
											e.addEventListener('message', ({ data: e }) => {
												clearTimeout(r), o(), 'PONG' === e && (clearTimeout(i), clearTimeout(r), o());
											}),
											e.addEventListener('close', () => {
												clearTimeout(r), clearTimeout(i);
											});
									})(e, this.keepAliveOpts),
								e.addEventListener('close', () => {
									this.ws === e && (this.ws = null);
								}),
								await (function (e) {
									let { promise: t, resolve: n, reject: r } = P();
									return (
										e.addEventListener('open', () => {
											e.removeEventListener('error', r), n();
										}),
										e.addEventListener('error', r),
										t
									);
								})(e),
								this.urlOptions.connectionParams && e.send(await I(this.urlOptions.connectionParams));
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
			let q = () => {},
				$ = (e) => {
					Object.freeze && Object.freeze(e);
				},
				D = (e) =>
					(function e(t, n, r) {
						let i = n.join('.');
						return (
							(r[i] ??= new Proxy(q, {
								get(i, o) {
									if ('string' == typeof o && 'then' !== o) return e(t, [...n, o], r);
								},
								apply(e, r, i) {
									let o = n[n.length - 1],
										s = { args: i, path: n };
									return (
										'call' === o
											? (s = { args: i.length >= 2 ? [i[1]] : [], path: n.slice(0, -1) })
											: 'apply' === o && (s = { args: i.length >= 2 ? i[1] : [], path: n.slice(0, -1) }),
										$(s.args),
										$(s.path),
										t(s)
									);
								},
							})),
							r[i]
						);
					})(e, [], Object.create(null)),
				W = (e) =>
					new Proxy(q, {
						get(t, n) {
							if ('then' !== n) return e(n);
						},
					}),
				j = {
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
			var B = Object.create,
				F = Object.defineProperty,
				K = Object.getOwnPropertyDescriptor,
				H = Object.getOwnPropertyNames,
				Q = Object.getPrototypeOf,
				V = Object.prototype.hasOwnProperty,
				z = (e, t, n, r) => {
					if ((t && 'object' == typeof t) || 'function' == typeof t)
						for (var i, o = H(t), s = 0, a = o.length; s < a; s++)
							(i = o[s]),
								V.call(e, i) ||
									i === n ||
									F(e, i, { get: ((e) => t[e]).bind(null, i), enumerable: !(r = K(t, i)) || r.enumerable });
					return e;
				},
				G = class {
					links;
					runtime;
					requestId;
					constructor(e) {
						(this.requestId = 0), (this.runtime = {}), (this.links = e.links.map((e) => e(this.runtime)));
					}
					$request(e) {
						var t;
						return ((t = { links: this.links, op: { ...e, context: e.context ?? {}, id: ++this.requestId } }),
						r((e) =>
							(function e(n = 0, r = t.op) {
								let i = t.links[n];
								if (!i) throw Error('No more links to execute - did you forget to add an ending link?');
								return i({ op: r, next: (t) => e(n + 1, t) });
							})().subscribe(e),
						)).pipe((e) => {
							let t = 0,
								n = null,
								i = [];
							return r(
								(r) => (
									t++,
									i.push(r),
									n ||
										(n = e.subscribe({
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
											if (0 == --t && n) {
												let e = n;
												(n = null), e.unsubscribe();
											}
											let e = i.findIndex((e) => e === r);
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
									return new Promise((n, r) => {
										let i = !1;
										function o() {
											i || ((i = !0), s.unsubscribe());
										}
										t.signal.addEventListener('abort', () => {
											r(t.signal.reason);
										});
										let s = e.subscribe({
											next(e) {
												(i = !0), n(e), o();
											},
											error(e) {
												r(e);
											},
											complete() {
												t.abort(), o();
											},
										});
									});
								})(t)
							).result.data;
						} catch (e) {
							throw c.from(e);
						}
					}
					query(e, t, n) {
						return this.requestAsPromise({ type: 'query', path: e, input: t, context: n?.context, signal: n?.signal });
					}
					mutation(e, t, n) {
						return this.requestAsPromise({
							type: 'mutation',
							path: e,
							input: t,
							context: n?.context,
							signal: n?.signal,
						});
					}
					subscription(e, t, n) {
						return this.$request({
							type: 'subscription',
							path: e,
							input: t,
							context: n.context,
							signal: n.signal,
						}).subscribe({
							next(e) {
								switch (e.result.type) {
									case 'state':
										n.onConnectionStateChange?.(e.result);
										break;
									case 'started':
										n.onStarted?.({ context: e.context });
										break;
									case 'stopped':
										n.onStopped?.();
										break;
									case 'data':
									case void 0:
										n.onData?.(e.result.data);
								}
							},
							error(e) {
								n.onError?.(e);
							},
							complete() {
								n.onComplete?.();
							},
						});
					}
				};
			let Z = Symbol.for('trpc_untypedClient'),
				Y = { query: 'query', mutate: 'mutation', subscribe: 'subscription' },
				J = (e) => Y[e];
			function X(e) {
				let t = D(({ path: t, args: n }) => {
					let r = [...t],
						i = J(r.pop()),
						o = r.join('.');
					return e[i](o, ...n);
				});
				return W((n) => (n === Z ? e : t[n]));
			}
			function ee(e) {
				return X(new G(e));
			}
			((e, t, n) => (
				(n = null != e ? B(Q(e)) : {}),
				z(!t && e && e.__esModule ? n : F(n, 'default', { value: e, enumerable: !0 }), e)
			))(
				((e, t) =>
					function () {
						return t || (0, e[H(e)[0]])((t = { exports: {} }).exports, t), t.exports;
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
												var n = Error();
												return (n.name = 'SuppressedError'), (n.error = e), (n.suppressed = t), n;
											},
								t = {},
								n = [];
							function r(e, t) {
								if (null != t) {
									if (Object(t) !== t)
										throw TypeError('using declarations can only be used with objects, functions, null, or undefined.');
									if (e) var r = t[Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')];
									if (void 0 === r && ((r = t[Symbol.dispose || Symbol.for('Symbol.dispose')]), e)) var i = r;
									if ('function' != typeof r) throw TypeError('Object is not disposable.');
									i &&
										(r = function () {
											try {
												i.call(t);
											} catch (e) {
												return Promise.reject(e);
											}
										}),
										n.push({ v: t, d: r, a: e });
								} else e && n.push({ d: t, a: e });
								return t;
							}
							return {
								e: t,
								u: r.bind(null, !1),
								a: r.bind(null, !0),
								d: function () {
									var r,
										i = this.e,
										o = 0;
									function s() {
										for (; (r = n.pop()); )
											try {
												if (!r.a && 1 === o) return (o = 0), n.push(r), Promise.resolve().then(s);
												if (r.d) {
													var e = r.d.call(r.v);
													if (r.a) return (o |= 2), Promise.resolve(e).then(s, a);
												} else o |= 1;
											} catch (e) {
												return a(e);
											}
										if (1 === o) return i !== t ? Promise.reject(i) : Promise.resolve();
										if (i !== t) throw i;
									}
									function a(n) {
										return (i = i !== t ? new e(n, i) : n), s();
									}
									return s();
								},
							};
						}),
							(t.exports.__esModule = !0),
							(t.exports.default = t.exports);
					},
				})(),
				1,
			);
			var et = n(148),
				en = n(5640),
				er = et.createContext(void 0),
				ei = (e) => {
					let t = et.useContext(er);
					if (e) return e;
					if (!t) throw Error('No QueryClient set, use QueryClientProvider to set one');
					return t;
				},
				eo = ({ client: e, children: t }) => (
					et.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					(0, en.jsx)(er.Provider, { value: e, children: t })
				),
				es = 'undefined' == typeof window || 'Deno' in globalThis;
			function ea() {}
			function el(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function ec(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function eu(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function ed(e, t) {
				return 'function' == typeof e ? e(t) : e;
			}
			function eh(e, t) {
				let { type: n = 'all', exact: r, fetchStatus: i, predicate: o, queryKey: s, stale: a } = e;
				if (s) {
					if (r) {
						if (t.queryHash !== ep(s, t.options)) return !1;
					} else if (!em(t.queryKey, s)) return !1;
				}
				if ('all' !== n) {
					let e = t.isActive();
					if (('active' === n && !e) || ('inactive' === n && e)) return !1;
				}
				return ('boolean' != typeof a || t.isStale() === a) && (!i || i === t.state.fetchStatus) && (!o || !!o(t));
			}
			function ef(e, t) {
				let { exact: n, status: r, predicate: i, mutationKey: o } = e;
				if (o) {
					if (!t.options.mutationKey) return !1;
					if (n) {
						if (eg(t.options.mutationKey) !== eg(o)) return !1;
					} else if (!em(t.options.mutationKey, o)) return !1;
				}
				return (!r || t.state.status === r) && (!i || !!i(t));
			}
			function ep(e, t) {
				return (t?.queryKeyHashFn || eg)(e);
			}
			function eg(e) {
				return JSON.stringify(e, (e, t) =>
					eb(t)
						? Object.keys(t)
								.sort()
								.reduce((e, n) => ((e[n] = t[n]), e), {})
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
						Object.keys(t).every((n) => em(e[n], t[n])))
				);
			}
			function ey(e, t) {
				if (e === t) return e;
				let n = ew(e) && ew(t);
				if (n || (eb(e) && eb(t))) {
					let r = n ? e : Object.keys(e),
						i = r.length,
						o = n ? t : Object.keys(t),
						s = o.length,
						a = n ? [] : {},
						l = new Set(r),
						c = 0;
					for (let r = 0; r < s; r++) {
						let i = n ? r : o[r];
						((!n && l.has(i)) || n) && void 0 === e[i] && void 0 === t[i]
							? ((a[i] = void 0), c++)
							: ((a[i] = ey(e[i], t[i])), a[i] === e[i] && void 0 !== e[i] && c++);
					}
					return i === s && c === i ? e : a;
				}
				return t;
			}
			function ev(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
				for (let n in e) if (e[n] !== t[n]) return !1;
				return !0;
			}
			function ew(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function eb(e) {
				if (!eC(e)) return !1;
				let t = e.constructor;
				if (void 0 === t) return !0;
				let n = t.prototype;
				return !!eC(n) && !!n.hasOwnProperty('isPrototypeOf') && Object.getPrototypeOf(e) === Object.prototype;
			}
			function eC(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function ex(e, t, n) {
				return 'function' == typeof n.structuralSharing
					? n.structuralSharing(e, t)
					: !1 !== n.structuralSharing
						? ey(e, t)
						: t;
			}
			function eS(e, t, n = 0) {
				let r = [...e, t];
				return n && r.length > n ? r.slice(1) : r;
			}
			function ek(e, t, n = 0) {
				let r = [t, ...e];
				return n && r.length > n ? r.slice(0, -1) : r;
			}
			var eE = Symbol();
			function eR(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== eE
						? e.queryFn
						: () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
			}
			function eO(e, t) {
				return 'function' == typeof e ? e(...t) : !!e;
			}
			function e_() {
				let e,
					t,
					n = new Promise((n, r) => {
						(e = n), (t = r);
					});
				function r(e) {
					Object.assign(n, e), delete n.resolve, delete n.reject;
				}
				return (
					(n.status = 'pending'),
					n.catch(() => {}),
					(n.resolve = (t) => {
						r({ status: 'fulfilled', value: t }), e(t);
					}),
					(n.reject = (e) => {
						r({ status: 'rejected', reason: e }), t(e);
					}),
					n
				);
			}
			function eT(e) {
				return e;
			}
			function eM(e, t, n) {
				if ('object' != typeof t || null === t) return;
				let r = e.getMutationCache(),
					i = e.getQueryCache(),
					o = n?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? eT,
					s = t.mutations || [],
					a = t.queries || [];
				s.forEach(({ state: t, ...i }) => {
					r.build(e, { ...e.getDefaultOptions().hydrate?.mutations, ...n?.defaultOptions?.mutations, ...i }, t);
				}),
					a.forEach(({ queryKey: t, state: r, queryHash: s, meta: a, promise: l, dehydratedAt: c }) => {
						let u = l
								? (function (e) {
										let t;
										if ((e.then((e) => ((t = e), e), ea)?.catch(ea), void 0 !== t)) return { data: t };
									})(l)
								: void 0,
							d = void 0 === r.data ? u?.data : r.data,
							h = void 0 === d ? d : o(d),
							f = i.get(s),
							p = f?.state.status === 'pending',
							g = f?.state.fetchStatus === 'fetching';
						if (f) {
							let e = u && void 0 !== c && c > f.state.dataUpdatedAt;
							if (r.dataUpdatedAt > f.state.dataUpdatedAt || e) {
								let { fetchStatus: e, ...t } = r;
								f.setState({ ...t, data: h });
							}
						} else
							f = i.build(
								e,
								{
									...e.getDefaultOptions().hydrate?.queries,
									...n?.defaultOptions?.queries,
									queryKey: t,
									queryHash: s,
									meta: a,
								},
								{ ...r, data: h, fetchStatus: 'idle', status: void 0 !== h ? 'success' : r.status },
							);
						l &&
							!p &&
							!g &&
							(void 0 === c || c > f.state.dataUpdatedAt) &&
							f.fetch(void 0, { initialPromise: Promise.resolve(l).then(o) });
					});
			}
			var eA = ({ children: e, options: t = {}, state: n, queryClient: r }) => {
				let i = ei(r),
					o = et.useRef(t);
				o.current = t;
				let s = et.useMemo(() => {
					if (n) {
						if ('object' != typeof n) return;
						let e = i.getQueryCache(),
							t = n.queries || [],
							r = [],
							s = [];
						for (let n of t) {
							let t = e.get(n.queryHash);
							t
								? (n.state.dataUpdatedAt > t.state.dataUpdatedAt ||
										(n.promise &&
											'pending' !== t.state.status &&
											'fetching' !== t.state.fetchStatus &&
											void 0 !== n.dehydratedAt &&
											n.dehydratedAt > t.state.dataUpdatedAt)) &&
									s.push(n)
								: r.push(n);
						}
						if ((r.length > 0 && eM(i, { queries: r }, o.current), s.length > 0)) return s;
					}
				}, [i, n]);
				return (
					et.useEffect(() => {
						s && eM(i, { queries: s }, o.current);
					}, [i, s]),
					e
				);
			};
			function eP(e, t, n) {
				let r = e.flatMap((e) => e.split('.'));
				if (!t && (!n || 'any' === n)) return r.length ? [r] : [];
				if ('infinite' === n && s(t) && ('direction' in t || 'cursor' in t)) {
					let { cursor: e, direction: n, ...i } = t;
					return [r, { input: i, type: 'infinite' }];
				}
				return [r, { ...(void 0 !== t && t !== eE && { input: t }), ...(n && 'any' !== n && { type: n }) }];
			}
			function eL(e) {
				return eP(e, void 0, 'any');
			}
			var eI = class {
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
				eU = new (class extends eI {
					#e;
					#t;
					#n;
					constructor() {
						super(),
							(this.#n = (e) => {
								if (!es && window.addEventListener) {
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
						this.#t || this.setEventListener(this.#n);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#n = e),
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
				eN = (e) => setTimeout(e, 0),
				eq = (function () {
					let e = [],
						t = 0,
						n = (e) => {
							e();
						},
						r = (e) => {
							e();
						},
						i = eN,
						o = (r) => {
							t
								? e.push(r)
								: i(() => {
										n(r);
									});
						},
						s = () => {
							let t = e;
							(e = []),
								t.length &&
									i(() => {
										r(() => {
											t.forEach((e) => {
												n(e);
											});
										});
									});
						};
					return {
						batch: (e) => {
							let n;
							t++;
							try {
								n = e();
							} finally {
								--t || s();
							}
							return n;
						},
						batchCalls:
							(e) =>
							(...t) => {
								o(() => {
									e(...t);
								});
							},
						schedule: o,
						setNotifyFunction: (e) => {
							n = e;
						},
						setBatchNotifyFunction: (e) => {
							r = e;
						},
						setScheduler: (e) => {
							i = e;
						},
					};
				})(),
				e$ = new (class extends eI {
					#r = !0;
					#t;
					#n;
					constructor() {
						super(),
							(this.#n = (e) => {
								if (!es && window.addEventListener) {
									let t = () => e(!0),
										n = () => e(!1);
									return (
										window.addEventListener('online', t, !1),
										window.addEventListener('offline', n, !1),
										() => {
											window.removeEventListener('online', t), window.removeEventListener('offline', n);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#n);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
					}
					setOnline(e) {
						this.#r !== e &&
							((this.#r = e),
							this.listeners.forEach((t) => {
								t(e);
							}));
					}
					isOnline() {
						return this.#r;
					}
				})();
			function eD(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function eW(e) {
				return (e ?? 'online') !== 'online' || e$.isOnline();
			}
			var ej = class extends Error {
				constructor(e) {
					super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent);
				}
			};
			function eB(e) {
				return e instanceof ej;
			}
			function eF(e) {
				let t,
					n = !1,
					r = 0,
					i = !1,
					o = e_(),
					s = () => eU.isFocused() && ('always' === e.networkMode || e$.isOnline()) && e.canRun(),
					a = () => eW(e.networkMode) && e.canRun(),
					l = (n) => {
						i || ((i = !0), e.onSuccess?.(n), t?.(), o.resolve(n));
					},
					c = (n) => {
						i || ((i = !0), e.onError?.(n), t?.(), o.reject(n));
					},
					u = () =>
						new Promise((n) => {
							(t = (e) => {
								(i || s()) && n(e);
							}),
								e.onPause?.();
						}).then(() => {
							(t = void 0), i || e.onContinue?.();
						}),
					d = () => {
						let t;
						if (i) return;
						let o = 0 === r ? e.initialPromise : void 0;
						try {
							t = o ?? e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(l)
							.catch((t) => {
								if (i) return;
								let o = e.retry ?? 3 * !es,
									a = e.retryDelay ?? eD,
									l = 'function' == typeof a ? a(r, t) : a,
									h = !0 === o || ('number' == typeof o && r < o) || ('function' == typeof o && o(r, t));
								if (n || !h) return void c(t);
								r++,
									e.onFail?.(r, t),
									new Promise((e) => {
										setTimeout(e, l);
									})
										.then(() => (s() ? void 0 : u()))
										.then(() => {
											n ? c(t) : d();
										});
							});
					};
				return {
					promise: o,
					cancel: (t) => {
						i || (c(new ej(t)), e.abort?.());
					},
					continue: () => (t?.(), o),
					cancelRetry: () => {
						n = !0;
					},
					continueRetry: () => {
						n = !1;
					},
					canStart: a,
					start: () => (a() ? d() : u().then(d), o),
				};
			}
			var eK = class {
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
						this.gcTime = Math.max(this.gcTime || 0, e ?? (es ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#i && (clearTimeout(this.#i), (this.#i = void 0));
					}
				},
				eH = class extends eK {
					#o;
					#s;
					#a;
					#l;
					#c;
					#u;
					#d;
					constructor(e) {
						super(),
							(this.#d = !1),
							(this.#u = e.defaultOptions),
							this.setOptions(e.options),
							(this.observers = []),
							(this.#l = e.client),
							(this.#a = this.#l.getQueryCache()),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#o = (function (e) {
								let t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
									n = void 0 !== t,
									r = n
										? 'function' == typeof e.initialDataUpdatedAt
											? e.initialDataUpdatedAt()
											: e.initialDataUpdatedAt
										: 0;
								return {
									data: t,
									dataUpdateCount: 0,
									dataUpdatedAt: n ? (r ?? Date.now()) : 0,
									error: null,
									errorUpdateCount: 0,
									errorUpdatedAt: 0,
									fetchFailureCount: 0,
									fetchFailureReason: null,
									fetchMeta: null,
									isInvalidated: !1,
									status: n ? 'success' : 'pending',
									fetchStatus: 'idle',
								};
							})(this.options)),
							(this.state = e.state ?? this.#o),
							this.scheduleGc();
					}
					get meta() {
						return this.options.meta;
					}
					get promise() {
						return this.#c?.promise;
					}
					setOptions(e) {
						(this.options = { ...this.#u, ...e }), this.updateGcTime(this.options.gcTime);
					}
					optionalRemove() {
						this.observers.length || 'idle' !== this.state.fetchStatus || this.#a.remove(this);
					}
					setData(e, t) {
						let n = ex(this.state.data, e, this.options);
						return this.#h({ data: n, type: 'success', dataUpdatedAt: t?.updatedAt, manual: t?.manual }), n;
					}
					setState(e, t) {
						this.#h({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						let t = this.#c?.promise;
						return this.#c?.cancel(e), t ? t.then(ea).catch(ea) : Promise.resolve();
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#o);
					}
					isActive() {
						return this.observers.some((e) => !1 !== ed(e.options.enabled, this));
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === eE || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
					}
					isStatic() {
						return (
							this.getObserversCount() > 0 && this.observers.some((e) => 'static' === eu(e.options.staleTime, this))
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
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					onOnline() {
						let e = this.observers.find((e) => e.shouldFetchOnReconnect());
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					addObserver(e) {
						this.observers.includes(e) ||
							(this.observers.push(e),
							this.clearGcTimeout(),
							this.#a.notify({ type: 'observerAdded', query: this, observer: e }));
					}
					removeObserver(e) {
						this.observers.includes(e) &&
							((this.observers = this.observers.filter((t) => t !== e)),
							this.observers.length ||
								(this.#c && (this.#d ? this.#c.cancel({ revert: !0 }) : this.#c.cancelRetry()), this.scheduleGc()),
							this.#a.notify({ type: 'observerRemoved', query: this, observer: e }));
					}
					getObserversCount() {
						return this.observers.length;
					}
					invalidate() {
						this.state.isInvalidated || this.#h({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus) {
							if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
							else if (this.#c) return this.#c.continueRetry(), this.#c.promise;
						}
						if ((e && this.setOptions(e), !this.options.queryFn)) {
							let e = this.observers.find((e) => e.options.queryFn);
							e && this.setOptions(e.options);
						}
						let n = new AbortController(),
							r = (e) => {
								Object.defineProperty(e, 'signal', { enumerable: !0, get: () => ((this.#d = !0), n.signal) });
							},
							i = () => {
								let e = eR(this.options, t),
									n = (() => {
										let e = { client: this.#l, queryKey: this.queryKey, meta: this.meta };
										return r(e), e;
									})();
								return ((this.#d = !1), this.options.persister) ? this.options.persister(e, n, this) : e(n);
							},
							o = (() => {
								let e = {
									fetchOptions: t,
									options: this.options,
									queryKey: this.queryKey,
									client: this.#l,
									state: this.state,
									fetchFn: i,
								};
								return r(e), e;
							})();
						this.options.behavior?.onFetch(o, this),
							(this.#s = this.state),
							('idle' === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) &&
								this.#h({ type: 'fetch', meta: o.fetchOptions?.meta });
						let s = (e) => {
							(eB(e) && e.silent) || this.#h({ type: 'error', error: e }),
								eB(e) || (this.#a.config.onError?.(e, this), this.#a.config.onSettled?.(this.state.data, e, this)),
								this.scheduleGc();
						};
						return (
							(this.#c = eF({
								initialPromise: t?.initialPromise,
								fn: o.fetchFn,
								abort: n.abort.bind(n),
								onSuccess: (e) => {
									if (void 0 === e) return void s(Error(`${this.queryHash} data is undefined`));
									try {
										this.setData(e);
									} catch (e) {
										s(e);
										return;
									}
									this.#a.config.onSuccess?.(e, this),
										this.#a.config.onSettled?.(e, this.state.error, this),
										this.scheduleGc();
								},
								onError: s,
								onFail: (e, t) => {
									this.#h({ type: 'failed', failureCount: e, error: t });
								},
								onPause: () => {
									this.#h({ type: 'pause' });
								},
								onContinue: () => {
									this.#h({ type: 'continue' });
								},
								retry: o.options.retry,
								retryDelay: o.options.retryDelay,
								networkMode: o.options.networkMode,
								canRun: () => !0,
							})),
							this.#c.start()
						);
					}
					#h(e) {
						(this.state = ((t) => {
							switch (e.type) {
								case 'failed':
									return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return { ...t, ...eQ(t.data, this.options), fetchMeta: e.meta ?? null };
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
									let n = e.error;
									if (eB(n) && n.revert && this.#s) return { ...this.#s, fetchStatus: 'idle' };
									return {
										...t,
										error: n,
										errorUpdateCount: t.errorUpdateCount + 1,
										errorUpdatedAt: Date.now(),
										fetchFailureCount: t.fetchFailureCount + 1,
										fetchFailureReason: n,
										fetchStatus: 'idle',
										status: 'error',
									};
								case 'invalidate':
									return { ...t, isInvalidated: !0 };
								case 'setState':
									return { ...t, ...e.state };
							}
						})(this.state)),
							eq.batch(() => {
								this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#a.notify({ query: this, type: 'updated', action: e });
							});
					}
				};
			function eQ(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: eW(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			var eV = class extends eI {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#l = e),
						(this.#f = null),
						(this.#p = e_()),
						this.options.experimental_prefetchInRender ||
							this.#p.reject(Error('experimental_prefetchInRender feature flag is not enabled')),
						this.bindMethods(),
						this.setOptions(t);
				}
				#l;
				#g = void 0;
				#m = void 0;
				#y = void 0;
				#v;
				#w;
				#p;
				#f;
				#b;
				#C;
				#x;
				#S;
				#k;
				#E;
				#R = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#g.addObserver(this), ez(this.#g, this.options) ? this.#O() : this.updateResult(), this.#_());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return eG(this.#g, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return eG(this.#g, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					(this.listeners = new Set()), this.#T(), this.#M(), this.#g.removeObserver(this);
				}
				setOptions(e) {
					let t = this.options,
						n = this.#g;
					if (
						((this.options = this.#l.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled &&
							'function' != typeof this.options.enabled &&
							'boolean' != typeof ed(this.options.enabled, this.#g))
					)
						throw Error('Expected enabled to be a boolean or a callback that returns a boolean');
					this.#A(),
						this.#g.setOptions(this.options),
						t._defaulted &&
							!ev(this.options, t) &&
							this.#l.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.#g, observer: this });
					let r = this.hasListeners();
					r && eZ(this.#g, n, this.options, t) && this.#O(),
						this.updateResult(),
						r &&
							(this.#g !== n ||
								ed(this.options.enabled, this.#g) !== ed(t.enabled, this.#g) ||
								eu(this.options.staleTime, this.#g) !== eu(t.staleTime, this.#g)) &&
							this.#P();
					let i = this.#L();
					r &&
						(this.#g !== n || ed(this.options.enabled, this.#g) !== ed(t.enabled, this.#g) || i !== this.#E) &&
						this.#I(i);
				}
				getOptimisticResult(e) {
					var t, n;
					let r = this.#l.getQueryCache().build(this.#l, e),
						i = this.createResult(r, e);
					return (
						(t = this),
						(n = i),
						ev(t.getCurrentResult(), n) || ((this.#y = i), (this.#w = this.options), (this.#v = this.#g.state)),
						i
					);
				}
				getCurrentResult() {
					return this.#y;
				}
				trackResult(e, t) {
					return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), Reflect.get(e, n)) });
				}
				trackProp(e) {
					this.#R.add(e);
				}
				getCurrentQuery() {
					return this.#g;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					let t = this.#l.defaultQueryOptions(e),
						n = this.#l.getQueryCache().build(this.#l, t);
					return n.fetch().then(() => this.createResult(n, t));
				}
				fetch(e) {
					return this.#O({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(() => (this.updateResult(), this.#y));
				}
				#O(e) {
					this.#A();
					let t = this.#g.fetch(this.options, e);
					return e?.throwOnError || (t = t.catch(ea)), t;
				}
				#P() {
					this.#T();
					let e = eu(this.options.staleTime, this.#g);
					if (es || this.#y.isStale || !el(e)) return;
					let t = ec(this.#y.dataUpdatedAt, e);
					this.#S = setTimeout(() => {
						this.#y.isStale || this.updateResult();
					}, t + 1);
				}
				#L() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#g)
							: this.options.refetchInterval) ?? !1
					);
				}
				#I(e) {
					this.#M(),
						(this.#E = e),
						!es &&
							!1 !== ed(this.options.enabled, this.#g) &&
							el(this.#E) &&
							0 !== this.#E &&
							(this.#k = setInterval(() => {
								(this.options.refetchIntervalInBackground || eU.isFocused()) && this.#O();
							}, this.#E));
				}
				#_() {
					this.#P(), this.#I(this.#L());
				}
				#T() {
					this.#S && (clearTimeout(this.#S), (this.#S = void 0));
				}
				#M() {
					this.#k && (clearInterval(this.#k), (this.#k = void 0));
				}
				createResult(e, t) {
					let n,
						r = this.#g,
						i = this.options,
						o = this.#y,
						s = this.#v,
						a = this.#w,
						l = e !== r ? e.state : this.#m,
						{ state: c } = e,
						u = { ...c },
						d = !1;
					if (t._optimisticResults) {
						let n = this.hasListeners(),
							o = !n && ez(e, t),
							s = n && eZ(e, r, t, i);
						(o || s) && (u = { ...u, ...eQ(c.data, e.options) }),
							'isRestoring' === t._optimisticResults && (u.fetchStatus = 'idle');
					}
					let { error: h, errorUpdatedAt: f, status: p } = u;
					n = u.data;
					let g = !1;
					if (void 0 !== t.placeholderData && void 0 === n && 'pending' === p) {
						let e;
						o?.isPlaceholderData && t.placeholderData === a?.placeholderData
							? ((e = o.data), (g = !0))
							: (e =
									'function' == typeof t.placeholderData
										? t.placeholderData(this.#x?.state.data, this.#x)
										: t.placeholderData),
							void 0 !== e && ((p = 'success'), (n = ex(o?.data, e, t)), (d = !0));
					}
					if (t.select && void 0 !== n && !g)
						if (o && n === s?.data && t.select === this.#b) n = this.#C;
						else
							try {
								(this.#b = t.select), (n = t.select(n)), (n = ex(o?.data, n, t)), (this.#C = n), (this.#f = null);
							} catch (e) {
								this.#f = e;
							}
					this.#f && ((h = this.#f), (n = this.#C), (f = Date.now()), (p = 'error'));
					let m = 'fetching' === u.fetchStatus,
						y = 'pending' === p,
						v = 'error' === p,
						w = y && m,
						b = void 0 !== n,
						C = {
							status: p,
							fetchStatus: u.fetchStatus,
							isPending: y,
							isSuccess: 'success' === p,
							isError: v,
							isInitialLoading: w,
							isLoading: w,
							data: n,
							dataUpdatedAt: u.dataUpdatedAt,
							error: h,
							errorUpdatedAt: f,
							failureCount: u.fetchFailureCount,
							failureReason: u.fetchFailureReason,
							errorUpdateCount: u.errorUpdateCount,
							isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
							isFetchedAfterMount: u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !y,
							isLoadingError: v && !b,
							isPaused: 'paused' === u.fetchStatus,
							isPlaceholderData: d,
							isRefetchError: v && b,
							isStale: eY(e, t),
							refetch: this.refetch,
							promise: this.#p,
						};
					if (this.options.experimental_prefetchInRender) {
						let t = (e) => {
								'error' === C.status ? e.reject(C.error) : void 0 !== C.data && e.resolve(C.data);
							},
							n = () => {
								t((this.#p = C.promise = e_()));
							},
							i = this.#p;
						switch (i.status) {
							case 'pending':
								e.queryHash === r.queryHash && t(i);
								break;
							case 'fulfilled':
								('error' === C.status || C.data !== i.value) && n();
								break;
							case 'rejected':
								('error' !== C.status || C.error !== i.reason) && n();
						}
					}
					return C;
				}
				updateResult() {
					let e = this.#y,
						t = this.createResult(this.#g, this.options);
					(this.#v = this.#g.state),
						(this.#w = this.options),
						void 0 !== this.#v.data && (this.#x = this.#g),
						ev(t, e) ||
							((this.#y = t),
							this.#U({
								listeners: (() => {
									if (!e) return !0;
									let { notifyOnChangeProps: t } = this.options,
										n = 'function' == typeof t ? t() : t;
									if ('all' === n || (!n && !this.#R.size)) return !0;
									let r = new Set(n ?? this.#R);
									return (
										this.options.throwOnError && r.add('error'),
										Object.keys(this.#y).some((t) => this.#y[t] !== e[t] && r.has(t))
									);
								})(),
							}));
				}
				#A() {
					let e = this.#l.getQueryCache().build(this.#l, this.options);
					if (e === this.#g) return;
					let t = this.#g;
					(this.#g = e), (this.#m = e.state), this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#_();
				}
				#U(e) {
					eq.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#y);
							}),
							this.#l.getQueryCache().notify({ query: this.#g, type: 'observerResultsUpdated' });
					});
				}
			};
			function ez(e, t) {
				return (
					(!1 !== ed(t.enabled, e) &&
						void 0 === e.state.data &&
						('error' !== e.state.status || !1 !== t.retryOnMount)) ||
					(void 0 !== e.state.data && eG(e, t, t.refetchOnMount))
				);
			}
			function eG(e, t, n) {
				if (!1 !== ed(t.enabled, e) && 'static' !== eu(t.staleTime, e)) {
					let r = 'function' == typeof n ? n(e) : n;
					return 'always' === r || (!1 !== r && eY(e, t));
				}
				return !1;
			}
			function eZ(e, t, n, r) {
				return (e !== t || !1 === ed(r.enabled, e)) && (!n.suspense || 'error' !== e.state.status) && eY(e, n);
			}
			function eY(e, t) {
				return !1 !== ed(t.enabled, e) && e.isStaleByTime(eu(t.staleTime, e));
			}
			var eJ = et.createContext(
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
				eX = () => et.useContext(eJ),
				e1 = (e, t) => {
					(e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1);
				},
				e0 = (e) => {
					et.useEffect(() => {
						e.clearReset();
					}, [e]);
				},
				e2 = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) =>
					e.isError && !t.isReset() && !e.isFetching && r && ((i && void 0 === e.data) || eO(n, [e.error, r])),
				e5 = et.createContext(!1),
				e4 = () => et.useContext(e5);
			e5.Provider;
			var e3 = (e, t) => void 0 === t.state.data,
				e6 = (e) => {
					if (e.suspense) {
						let t = (e) => ('static' === e ? e : Math.max(e ?? 1e3, 1e3)),
							n = e.staleTime;
						(e.staleTime = 'function' == typeof n ? (...e) => t(n(...e)) : t(n)),
							'number' == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3));
					}
				},
				e8 = (e, t) => e.isLoading && e.isFetching && !t,
				e9 = (e, t) => e?.suspense && t.isPending,
				e7 = (e, t, n) =>
					t.fetchOptimistic(e).catch(() => {
						n.clearReset();
					});
			function te(e, t, n) {
				let r = e4(),
					i = eX(),
					o = ei(n),
					s = o.defaultQueryOptions(e);
				o.getDefaultOptions().queries?._experimental_beforeQuery?.(s),
					(s._optimisticResults = r ? 'isRestoring' : 'optimistic'),
					e6(s),
					e1(s, i),
					e0(i);
				let a = !o.getQueryCache().get(s.queryHash),
					[l] = et.useState(() => new t(o, s)),
					c = l.getOptimisticResult(s),
					u = !r && !1 !== e.subscribed;
				if (
					(et.useSyncExternalStore(
						et.useCallback(
							(e) => {
								let t = u ? l.subscribe(eq.batchCalls(e)) : ea;
								return l.updateResult(), t;
							},
							[l, u],
						),
						() => l.getCurrentResult(),
						() => l.getCurrentResult(),
					),
					et.useEffect(() => {
						l.setOptions(s);
					}, [s, l]),
					e9(s, c))
				)
					throw e7(s, l, i);
				if (
					e2({
						result: c,
						errorResetBoundary: i,
						throwOnError: s.throwOnError,
						query: o.getQueryCache().get(s.queryHash),
						suspense: s.suspense,
					})
				)
					throw c.error;
				if (
					(o.getDefaultOptions().queries?._experimental_afterQuery?.(s, c),
					s.experimental_prefetchInRender && !es && e8(c, r))
				) {
					let e = a ? e7(s, l, i) : o.getQueryCache().get(s.queryHash)?.promise;
					e?.catch(ea).finally(() => {
						l.updateResult();
					});
				}
				return s.notifyOnChangeProps ? c : l.trackResult(c);
			}
			var tt = class extends eK {
				#N;
				#q;
				#c;
				constructor(e) {
					super(),
						(this.mutationId = e.mutationId),
						(this.#q = e.mutationCache),
						(this.#N = []),
						(this.state = e.state || tn()),
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
					this.#N.includes(e) ||
						(this.#N.push(e),
						this.clearGcTimeout(),
						this.#q.notify({ type: 'observerAdded', mutation: this, observer: e }));
				}
				removeObserver(e) {
					(this.#N = this.#N.filter((t) => t !== e)),
						this.scheduleGc(),
						this.#q.notify({ type: 'observerRemoved', mutation: this, observer: e });
				}
				optionalRemove() {
					this.#N.length || ('pending' === this.state.status ? this.scheduleGc() : this.#q.remove(this));
				}
				continue() {
					return this.#c?.continue() ?? this.execute(this.state.variables);
				}
				async execute(e) {
					let t = () => {
						this.#h({ type: 'continue' });
					};
					this.#c = eF({
						fn: () =>
							this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error('No mutationFn found')),
						onFail: (e, t) => {
							this.#h({ type: 'failed', failureCount: e, error: t });
						},
						onPause: () => {
							this.#h({ type: 'pause' });
						},
						onContinue: t,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => this.#q.canRun(this),
					});
					let n = 'pending' === this.state.status,
						r = !this.#c.canStart();
					try {
						if (n) t();
						else {
							this.#h({ type: 'pending', variables: e, isPaused: r }), await this.#q.config.onMutate?.(e, this);
							let t = await this.options.onMutate?.(e);
							t !== this.state.context && this.#h({ type: 'pending', context: t, variables: e, isPaused: r });
						}
						let i = await this.#c.start();
						return (
							await this.#q.config.onSuccess?.(i, e, this.state.context, this),
							await this.options.onSuccess?.(i, e, this.state.context),
							await this.#q.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
							await this.options.onSettled?.(i, null, e, this.state.context),
							this.#h({ type: 'success', data: i }),
							i
						);
					} catch (t) {
						try {
							throw (
								(await this.#q.config.onError?.(t, e, this.state.context, this),
								await this.options.onError?.(t, e, this.state.context),
								await this.#q.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this),
								await this.options.onSettled?.(void 0, t, e, this.state.context),
								t)
							);
						} finally {
							this.#h({ type: 'error', error: t });
						}
					} finally {
						this.#q.runNext(this);
					}
				}
				#h(e) {
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
						eq.batch(() => {
							this.#N.forEach((t) => {
								t.onMutationUpdate(e);
							}),
								this.#q.notify({ mutation: this, type: 'updated', action: e });
						});
				}
			};
			function tn() {
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
			var tr = class extends eI {
				#l;
				#y = void 0;
				#$;
				#D;
				constructor(e, t) {
					super(), (this.#l = e), this.setOptions(t), this.bindMethods(), this.#W();
				}
				bindMethods() {
					(this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
				}
				setOptions(e) {
					let t = this.options;
					(this.options = this.#l.defaultMutationOptions(e)),
						ev(this.options, t) ||
							this.#l.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.#$, observer: this }),
						t?.mutationKey && this.options.mutationKey && eg(t.mutationKey) !== eg(this.options.mutationKey)
							? this.reset()
							: this.#$?.state.status === 'pending' && this.#$.setOptions(this.options);
				}
				onUnsubscribe() {
					this.hasListeners() || this.#$?.removeObserver(this);
				}
				onMutationUpdate(e) {
					this.#W(), this.#U(e);
				}
				getCurrentResult() {
					return this.#y;
				}
				reset() {
					this.#$?.removeObserver(this), (this.#$ = void 0), this.#W(), this.#U();
				}
				mutate(e, t) {
					return (
						(this.#D = t),
						this.#$?.removeObserver(this),
						(this.#$ = this.#l.getMutationCache().build(this.#l, this.options)),
						this.#$.addObserver(this),
						this.#$.execute(e)
					);
				}
				#W() {
					let e = this.#$?.state ?? tn();
					this.#y = {
						...e,
						isPending: 'pending' === e.status,
						isSuccess: 'success' === e.status,
						isError: 'error' === e.status,
						isIdle: 'idle' === e.status,
						mutate: this.mutate,
						reset: this.reset,
					};
				}
				#U(e) {
					eq.batch(() => {
						if (this.#D && this.hasListeners()) {
							let t = this.#y.variables,
								n = this.#y.context;
							e?.type === 'success'
								? (this.#D.onSuccess?.(e.data, t, n), this.#D.onSettled?.(e.data, null, t, n))
								: e?.type === 'error' && (this.#D.onError?.(e.error, t, n), this.#D.onSettled?.(void 0, e.error, t, n));
						}
						this.listeners.forEach((e) => {
							e(this.#y);
						});
					});
				}
			};
			function ti(e) {
				return {
					onFetch: (t, n) => {
						let r = t.options,
							i = t.fetchOptions?.meta?.fetchMore?.direction,
							o = t.state.data?.pages || [],
							s = t.state.data?.pageParams || [],
							a = { pages: [], pageParams: [] },
							l = 0,
							c = async () => {
								let n = !1,
									c = (e) => {
										Object.defineProperty(e, 'signal', {
											enumerable: !0,
											get: () => (
												t.signal.aborted
													? (n = !0)
													: t.signal.addEventListener('abort', () => {
															n = !0;
														}),
												t.signal
											),
										});
									},
									u = eR(t.options, t.fetchOptions),
									d = async (e, r, i) => {
										if (n) return Promise.reject();
										if (null == r && e.pages.length) return Promise.resolve(e);
										let o = (() => {
												let e = {
													client: t.client,
													queryKey: t.queryKey,
													pageParam: r,
													direction: i ? 'backward' : 'forward',
													meta: t.options.meta,
												};
												return c(e), e;
											})(),
											s = await u(o),
											{ maxPages: a } = t.options,
											l = i ? ek : eS;
										return { pages: l(e.pages, s, a), pageParams: l(e.pageParams, r, a) };
									};
								if (i && o.length) {
									let e = 'backward' === i,
										t = { pages: o, pageParams: s },
										n = (e ? ts : to)(r, t);
									a = await d(t, n, e);
								} else {
									let t = e ?? o.length;
									do {
										let e = 0 === l ? (s[0] ?? r.initialPageParam) : to(r, a);
										if (l > 0 && null == e) break;
										(a = await d(a, e)), l++;
									} while (l < t);
								}
								return a;
							};
						t.options.persister
							? (t.fetchFn = () =>
									t.options.persister?.(
										c,
										{ client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
										n,
									))
							: (t.fetchFn = c);
					},
				};
			}
			function to(e, { pages: t, pageParams: n }) {
				let r = t.length - 1;
				return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
			}
			function ts(e, { pages: t, pageParams: n }) {
				return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
			}
			var ta = class extends eV {
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
					var n, r;
					let { state: i } = e,
						o = super.createResult(e, t),
						{ isFetching: s, isRefetching: a, isError: l, isRefetchError: c } = o,
						u = i.fetchMeta?.fetchMore?.direction,
						d = l && 'forward' === u,
						h = s && 'forward' === u,
						f = l && 'backward' === u,
						p = s && 'backward' === u;
					return {
						...o,
						fetchNextPage: this.fetchNextPage,
						fetchPreviousPage: this.fetchPreviousPage,
						hasNextPage: !!(n = i.data) && null != to(t, n),
						hasPreviousPage: !!(r = i.data) && !!t.getPreviousPageParam && null != ts(t, r),
						isFetchNextPageError: d,
						isFetchingNextPage: h,
						isFetchPreviousPageError: f,
						isFetchingPreviousPage: p,
						isRefetchError: c && !d && !f,
						isRefetching: a && !h && !p,
					};
				}
			};
			function tl(e, t) {
				let n = new Set(t);
				return e.filter((e) => !n.has(e));
			}
			var tc = class extends eI {
				#l;
				#j;
				#B;
				#F;
				#N;
				#K;
				#H;
				#Q;
				#V = [];
				constructor(e, t, n) {
					super(), (this.#l = e), (this.#F = n), (this.#B = []), (this.#N = []), (this.#j = []), this.setQueries(t);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						this.#N.forEach((e) => {
							e.subscribe((t) => {
								this.#z(e, t);
							});
						});
				}
				onUnsubscribe() {
					this.listeners.size || this.destroy();
				}
				destroy() {
					(this.listeners = new Set()),
						this.#N.forEach((e) => {
							e.destroy();
						});
				}
				setQueries(e, t) {
					(this.#B = e),
						(this.#F = t),
						eq.batch(() => {
							let e = this.#N,
								t = this.#G(this.#B);
							(this.#V = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions));
							let n = t.map((e) => e.observer),
								r = n.map((e) => e.getCurrentResult()),
								i = n.some((t, n) => t !== e[n]);
							(e.length !== n.length || i) &&
								((this.#N = n),
								(this.#j = r),
								this.hasListeners() &&
									(tl(e, n).forEach((e) => {
										e.destroy();
									}),
									tl(n, e).forEach((e) => {
										e.subscribe((t) => {
											this.#z(e, t);
										});
									}),
									this.#U()));
						});
				}
				getCurrentResult() {
					return this.#j;
				}
				getQueries() {
					return this.#N.map((e) => e.getCurrentQuery());
				}
				getObservers() {
					return this.#N;
				}
				getOptimisticResult(e, t) {
					let n = this.#G(e),
						r = n.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions));
					return [r, (e) => this.#Z(e ?? r, t), () => this.#Y(r, n)];
				}
				#Y(e, t) {
					return t.map((n, r) => {
						let i = e[r];
						return n.defaultedQueryOptions.notifyOnChangeProps
							? i
							: n.observer.trackResult(i, (e) => {
									t.forEach((t) => {
										t.observer.trackProp(e);
									});
								});
					});
				}
				#Z(e, t) {
					return t
						? ((this.#K && this.#j === this.#Q && t === this.#H) ||
								((this.#H = t), (this.#Q = this.#j), (this.#K = ey(this.#K, t(e)))),
							this.#K)
						: e;
				}
				#G(e) {
					let t = new Map(this.#N.map((e) => [e.options.queryHash, e])),
						n = [];
					return (
						e.forEach((e) => {
							let r = this.#l.defaultQueryOptions(e),
								i = t.get(r.queryHash);
							i
								? n.push({ defaultedQueryOptions: r, observer: i })
								: n.push({ defaultedQueryOptions: r, observer: new eV(this.#l, r) });
						}),
						n
					);
				}
				#z(e, t) {
					let n = this.#N.indexOf(e);
					-1 !== n &&
						((this.#j = (function (e, t, n) {
							let r = e.slice(0);
							return (r[t] = n), r;
						})(this.#j, n, t)),
						this.#U());
				}
				#U() {
					if (this.hasListeners()) {
						let e = this.#K,
							t = this.#Y(this.#j, this.#V);
						e !== this.#Z(t, this.#F?.combine) &&
							eq.batch(() => {
								this.listeners.forEach((e) => {
									e(this.#j);
								});
							});
					}
				}
			};
			function tu({ queries: e, ...t }, n) {
				let r = ei(n),
					i = e4(),
					o = eX(),
					s = et.useMemo(
						() =>
							e.map((e) => {
								let t = r.defaultQueryOptions(e);
								return (t._optimisticResults = i ? 'isRestoring' : 'optimistic'), t;
							}),
						[e, r, i],
					);
				s.forEach((e) => {
					e6(e), e1(e, o);
				}),
					e0(o);
				let [a] = et.useState(() => new tc(r, s, t)),
					[l, c, u] = a.getOptimisticResult(s, t.combine),
					d = !i && !1 !== t.subscribed;
				et.useSyncExternalStore(
					et.useCallback((e) => (d ? a.subscribe(eq.batchCalls(e)) : ea), [a, d]),
					() => a.getCurrentResult(),
					() => a.getCurrentResult(),
				),
					et.useEffect(() => {
						a.setQueries(s, t);
					}, [s, t, a]);
				let h = l.some((e, t) => e9(s[t], e))
					? l.flatMap((e, t) => {
							let n = s[t];
							if (n) {
								let t = new eV(r, n);
								if (e9(n, e)) return e7(n, t, o);
								e8(e, i) && e7(n, t, o);
							}
							return [];
						})
					: [];
				if (h.length > 0) throw Promise.all(h);
				let f = l.find((e, t) => {
					let n = s[t];
					return (
						n &&
						e2({
							result: e,
							errorResetBoundary: o,
							throwOnError: n.throwOnError,
							query: r.getQueryCache().get(n.queryHash),
							suspense: n.suspense,
						})
					);
				});
				if (f?.error) throw f.error;
				return c(u());
			}
			var td = class extends eI {
					constructor(e = {}) {
						super(), (this.config = e), (this.#B = new Map());
					}
					#B;
					build(e, t, n) {
						let r = t.queryKey,
							i = t.queryHash ?? ep(r, t),
							o = this.get(i);
						return (
							o ||
								((o = new eH({
									client: e,
									queryKey: r,
									queryHash: i,
									options: e.defaultQueryOptions(t),
									state: n,
									defaultOptions: e.getQueryDefaults(r),
								})),
								this.add(o)),
							o
						);
					}
					add(e) {
						this.#B.has(e.queryHash) || (this.#B.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
					}
					remove(e) {
						let t = this.#B.get(e.queryHash);
						t && (e.destroy(), t === e && this.#B.delete(e.queryHash), this.notify({ type: 'removed', query: e }));
					}
					clear() {
						eq.batch(() => {
							this.getAll().forEach((e) => {
								this.remove(e);
							});
						});
					}
					get(e) {
						return this.#B.get(e);
					}
					getAll() {
						return [...this.#B.values()];
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => eh(t, e));
					}
					findAll(e = {}) {
						let t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter((t) => eh(e, t)) : t;
					}
					notify(e) {
						eq.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						eq.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						eq.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				th = class extends eI {
					constructor(e = {}) {
						super(), (this.config = e), (this.#J = new Set()), (this.#X = new Map()), (this.#ee = 0);
					}
					#J;
					#X;
					#ee;
					build(e, t, n) {
						let r = new tt({
							mutationCache: this,
							mutationId: ++this.#ee,
							options: e.defaultMutationOptions(t),
							state: n,
						});
						return this.add(r), r;
					}
					add(e) {
						this.#J.add(e);
						let t = tf(e);
						if ('string' == typeof t) {
							let n = this.#X.get(t);
							n ? n.push(e) : this.#X.set(t, [e]);
						}
						this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						if (this.#J.delete(e)) {
							let t = tf(e);
							if ('string' == typeof t) {
								let n = this.#X.get(t);
								if (n)
									if (n.length > 1) {
										let t = n.indexOf(e);
										-1 !== t && n.splice(t, 1);
									} else n[0] === e && this.#X.delete(t);
							}
						}
						this.notify({ type: 'removed', mutation: e });
					}
					canRun(e) {
						let t = tf(e);
						if ('string' != typeof t) return !0;
						{
							let n = this.#X.get(t),
								r = n?.find((e) => 'pending' === e.state.status);
							return !r || r === e;
						}
					}
					runNext(e) {
						let t = tf(e);
						if ('string' != typeof t) return Promise.resolve();
						{
							let n = this.#X.get(t)?.find((t) => t !== e && t.state.isPaused);
							return n?.continue() ?? Promise.resolve();
						}
					}
					clear() {
						eq.batch(() => {
							this.#J.forEach((e) => {
								this.notify({ type: 'removed', mutation: e });
							}),
								this.#J.clear(),
								this.#X.clear();
						});
					}
					getAll() {
						return Array.from(this.#J);
					}
					find(e) {
						let t = { exact: !0, ...e };
						return this.getAll().find((e) => ef(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => ef(e, t));
					}
					notify(e) {
						eq.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						let e = this.getAll().filter((e) => e.state.isPaused);
						return eq.batch(() => Promise.all(e.map((e) => e.continue().catch(ea))));
					}
				};
			function tf(e) {
				return e.options.scope?.id;
			}
			var tp = class {
				#et;
				#q;
				#u;
				#en;
				#er;
				#ei;
				#eo;
				#es;
				constructor(e = {}) {
					(this.#et = e.queryCache || new td()),
						(this.#q = e.mutationCache || new th()),
						(this.#u = e.defaultOptions || {}),
						(this.#en = new Map()),
						(this.#er = new Map()),
						(this.#ei = 0);
				}
				mount() {
					this.#ei++,
						1 === this.#ei &&
							((this.#eo = eU.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onFocus());
							})),
							(this.#es = e$.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), this.#et.onOnline());
							})));
				}
				unmount() {
					this.#ei--, 0 === this.#ei && (this.#eo?.(), (this.#eo = void 0), this.#es?.(), (this.#es = void 0));
				}
				isFetching(e) {
					return this.#et.findAll({ ...e, fetchStatus: 'fetching' }).length;
				}
				isMutating(e) {
					return this.#q.findAll({ ...e, status: 'pending' }).length;
				}
				getQueryData(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state.data;
				}
				ensureQueryData(e) {
					let t = this.defaultQueryOptions(e),
						n = this.#et.build(this, t),
						r = n.state.data;
					return void 0 === r
						? this.fetchQuery(e)
						: (e.revalidateIfStale && n.isStaleByTime(eu(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
				}
				getQueriesData(e) {
					return this.#et.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
				}
				setQueryData(e, t, n) {
					let r = this.defaultQueryOptions({ queryKey: e }),
						i = this.#et.get(r.queryHash),
						o = i?.state.data,
						s = 'function' == typeof t ? t(o) : t;
					if (void 0 !== s) return this.#et.build(this, r).setData(s, { ...n, manual: !0 });
				}
				setQueriesData(e, t, n) {
					return eq.batch(() => this.#et.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
				}
				getQueryState(e) {
					let t = this.defaultQueryOptions({ queryKey: e });
					return this.#et.get(t.queryHash)?.state;
				}
				removeQueries(e) {
					let t = this.#et;
					eq.batch(() => {
						t.findAll(e).forEach((e) => {
							t.remove(e);
						});
					});
				}
				resetQueries(e, t) {
					let n = this.#et;
					return eq.batch(
						() => (
							n.findAll(e).forEach((e) => {
								e.reset();
							}),
							this.refetchQueries({ type: 'active', ...e }, t)
						),
					);
				}
				cancelQueries(e, t = {}) {
					let n = { revert: !0, ...t };
					return Promise.all(eq.batch(() => this.#et.findAll(e).map((e) => e.cancel(n))))
						.then(ea)
						.catch(ea);
				}
				invalidateQueries(e, t = {}) {
					return eq.batch(() =>
						(this.#et.findAll(e).forEach((e) => {
							e.invalidate();
						}),
						e?.refetchType === 'none')
							? Promise.resolve()
							: this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, t),
					);
				}
				refetchQueries(e, t = {}) {
					let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
					return Promise.all(
						eq.batch(() =>
							this.#et
								.findAll(e)
								.filter((e) => !e.isDisabled() && !e.isStatic())
								.map((e) => {
									let t = e.fetch(void 0, n);
									return n.throwOnError || (t = t.catch(ea)), 'paused' === e.state.fetchStatus ? Promise.resolve() : t;
								}),
						),
					).then(ea);
				}
				fetchQuery(e) {
					let t = this.defaultQueryOptions(e);
					void 0 === t.retry && (t.retry = !1);
					let n = this.#et.build(this, t);
					return n.isStaleByTime(eu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
				}
				prefetchQuery(e) {
					return this.fetchQuery(e).then(ea).catch(ea);
				}
				fetchInfiniteQuery(e) {
					return (e.behavior = ti(e.pages)), this.fetchQuery(e);
				}
				prefetchInfiniteQuery(e) {
					return this.fetchInfiniteQuery(e).then(ea).catch(ea);
				}
				ensureInfiniteQueryData(e) {
					return (e.behavior = ti(e.pages)), this.ensureQueryData(e);
				}
				resumePausedMutations() {
					return e$.isOnline() ? this.#q.resumePausedMutations() : Promise.resolve();
				}
				getQueryCache() {
					return this.#et;
				}
				getMutationCache() {
					return this.#q;
				}
				getDefaultOptions() {
					return this.#u;
				}
				setDefaultOptions(e) {
					this.#u = e;
				}
				setQueryDefaults(e, t) {
					this.#en.set(eg(e), { queryKey: e, defaultOptions: t });
				}
				getQueryDefaults(e) {
					let t = [...this.#en.values()],
						n = {};
					return (
						t.forEach((t) => {
							em(e, t.queryKey) && Object.assign(n, t.defaultOptions);
						}),
						n
					);
				}
				setMutationDefaults(e, t) {
					this.#er.set(eg(e), { mutationKey: e, defaultOptions: t });
				}
				getMutationDefaults(e) {
					let t = [...this.#er.values()],
						n = {};
					return (
						t.forEach((t) => {
							em(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
						}),
						n
					);
				}
				defaultQueryOptions(e) {
					if (e._defaulted) return e;
					let t = { ...this.#u.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
					return (
						t.queryHash || (t.queryHash = ep(t.queryKey, t)),
						void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
						void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
						!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
						t.queryFn === eE && (t.enabled = !1),
						t
					);
				}
				defaultMutationOptions(e) {
					return e?._defaulted
						? e
						: {
								...this.#u.mutations,
								...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
								...e,
								_defaulted: !0,
							};
				}
				clear() {
					this.#et.clear(), this.#q.clear();
				}
			};
			let tg = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
				tm = et.createContext?.(null),
				ty = (e) => {
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
				let t = e instanceof G ? e : e[Z];
				return D((e) => {
					let n = e.path,
						r = n.join('.'),
						[i, o] = e.args;
					return { queryKey: eP(n, i, 'query'), queryFn: () => t.query(r, i, o?.trpc), ...o };
				});
			}
			function tw(e, t, n) {
				let r = e[0],
					i = e[1]?.input;
				return (
					n && (i = { ...(i ?? {}), ...(n.pageParam ? { cursor: n.pageParam } : {}), direction: n.direction }),
					[r.join('.'), i, t?.trpc]
				);
			}
			function tb(e) {
				return { path: e.path.join('.') };
			}
			function tC(e) {
				let t = tb(e);
				return et.useMemo(() => t, [t]);
			}
			async function tx(e, t, n) {
				let r = t.getQueryCache().build(t, { queryKey: n });
				r.setState({ data: [], status: 'success' });
				let i = [];
				for await (let t of e) i.push(t), r.setState({ data: [...i] });
				return i;
			}
			let tS = (e, t) => new Proxy(e, { get: (e, n) => (t(n), e[n]) });
			function tk(e) {
				let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
					n = e?.context ?? tm;
				function r() {
					let e = et.useContext(n);
					if (!e) throw Error('Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?');
					return e;
				}
				function i(e, t) {
					let { queryClient: n, ssrState: i } = r();
					return i && 'mounted' !== i && n.getQueryCache().find({ queryKey: e })?.state.status === 'error'
						? { retryOnMount: !1, ...t }
						: t;
				}
				let o = { data: void 0, error: null, status: 'idle' },
					s = { data: void 0, error: null, status: 'connecting' };
				return {
					Provider: (e) => {
						let { abortOnUnmount: t = !1, queryClient: r, ssrContext: i } = e,
							[o, s] = et.useState(e.ssrState ?? !1),
							a = e.client instanceof G ? e.client : e.client[Z],
							c = et.useMemo(
								() =>
									(function (e) {
										let { client: t, queryClient: n } = e,
											r = t instanceof G ? t : t[Z];
										return {
											infiniteQueryOptions: (e, t, n) => {
												let i = t[1]?.input === eE,
													o = async (e) => {
														let i = {
															...n,
															trpc: {
																...n?.trpc,
																...(n?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
															},
														};
														return await r.query(...tw(t, i, { direction: e.direction, pageParam: e.pageParam }));
													};
												return Object.assign(
													{
														...n,
														initialData: n?.initialData,
														queryKey: t,
														queryFn: i ? eE : o,
														initialPageParam: n?.initialCursor ?? null,
													},
													{ trpc: tb({ path: e }) },
												);
											},
											queryOptions: (e, t, i) => {
												let o = t[1]?.input === eE,
													s = async (e) => {
														let o = {
																...i,
																trpc: {
																	...i?.trpc,
																	...(i?.trpc?.abortOnUnmount ? { signal: e.signal } : { signal: null }),
																},
															},
															s = await r.query(...tw(t, o));
														return l(s) ? tx(s, n, t) : s;
													};
												return Object.assign(
													{ ...i, initialData: i?.initialData, queryKey: t, queryFn: o ? eE : s },
													{ trpc: tb({ path: e }) },
												);
											},
											fetchQuery: (e, t) => n.fetchQuery({ ...t, queryKey: e, queryFn: () => r.query(...tw(e, t)) }),
											fetchInfiniteQuery: (e, t) =>
												n.fetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: n, direction: i }) =>
														r.query(...tw(e, t, { pageParam: n, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											prefetchQuery: (e, t) =>
												n.prefetchQuery({ ...t, queryKey: e, queryFn: () => r.query(...tw(e, t)) }),
											prefetchInfiniteQuery: (e, t) =>
												n.prefetchInfiniteQuery({
													...t,
													queryKey: e,
													queryFn: ({ pageParam: n, direction: i }) =>
														r.query(...tw(e, t, { pageParam: n, direction: i })),
													initialPageParam: t?.initialCursor ?? null,
												}),
											ensureQueryData: (e, t) =>
												n.ensureQueryData({ ...t, queryKey: e, queryFn: () => r.query(...tw(e, t)) }),
											invalidateQueries: (e, t, r) => n.invalidateQueries({ ...t, queryKey: e }, r),
											resetQueries: (e, t, r) => n.resetQueries({ ...t, queryKey: e }, r),
											refetchQueries: (e, t, r) => n.refetchQueries({ ...t, queryKey: e }, r),
											cancelQuery: (e, t) => n.cancelQueries({ queryKey: e }, t),
											setQueryData: (e, t, r) => n.setQueryData(e, t, r),
											setQueriesData: (e, t, r, i) => n.setQueriesData({ ...t, queryKey: e }, r, i),
											getQueryData: (e) => n.getQueryData(e),
											setInfiniteQueryData: (e, t, r) => n.setQueryData(e, t, r),
											getInfiniteQueryData: (e) => n.getQueryData(e),
											setMutationDefaults: (t, i) => {
												let o = t[0];
												return n.setMutationDefaults(
													t,
													'function' == typeof i
														? i({ canonicalMutationFn: (t) => r.mutation(...tw([o, { input: t }], e)) })
														: i,
												);
											},
											getMutationDefaults: (e) => n.getMutationDefaults(e),
											isMutating: (e) => n.isMutating({ ...e, exact: !0 }),
										};
									})({ client: a, queryClient: r }),
								[a, r],
							),
							u = et.useMemo(
								() => ({ abortOnUnmount: t, queryClient: r, client: a, ssrContext: i ?? null, ssrState: o, ...c }),
								[t, a, c, r, i, o],
							);
						return (
							et.useEffect(() => {
								s((e) => !!e && 'mounted');
							}, []),
							(0, en.jsx)(n.Provider, { value: u, children: e.children })
						);
					},
					createClient: ee,
					useContext: r,
					useUtils: r,
					useQuery: function (t, n, o) {
						let { abortOnUnmount: s, client: a, ssrState: c, queryClient: u, prefetchQuery: d } = r(),
							h = eP(t, n, 'query'),
							f = u.getQueryDefaults(h),
							p = n === eE;
						'undefined' != typeof window ||
							'prepass' !== c ||
							o?.trpc?.ssr === !1 ||
							(o?.enabled ?? f?.enabled) === !1 ||
							p ||
							u.getQueryCache().find({ queryKey: h }) ||
							d(h, o);
						let g = i(h, { ...f, ...o }),
							m = o?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? s,
							y = te(
								{
									...g,
									queryKey: h,
									queryFn: p
										? n
										: async (e) => {
												let t = { ...g, trpc: { ...g?.trpc, ...(m ? { signal: e.signal } : { signal: null }) } },
													n = await a.query(...tw(h, t));
												return l(n) ? tx(n, u, h) : n;
											},
								},
								eV,
								u,
							);
						return (y.trpc = tC({ path: t })), y;
					},
					usePrefetchQuery: function (t, n, i) {
						let o = r(),
							s = eP(t, n, 'query'),
							a = n === eE,
							l = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? o.abortOnUnmount;
						!(function (e, t) {
							let n = ei(void 0);
							n.getQueryState(e.queryKey) || n.prefetchQuery(e);
						})({
							...i,
							queryKey: s,
							queryFn: a
								? n
								: (e) => {
										let t = { trpc: { ...i?.trpc, ...(l ? { signal: e.signal } : {}) } };
										return o.client.query(...tw(s, t));
									},
						});
					},
					useSuspenseQuery: function (t, n, i) {
						var o, s;
						let a = r(),
							l = eP(t, n, 'query'),
							c = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a.abortOnUnmount,
							u =
								((o = {
									...i,
									queryKey: l,
									queryFn: (e) => {
										let t = { ...i, trpc: { ...i?.trpc, ...(c ? { signal: e.signal } : { signal: null }) } };
										return a.client.query(...tw(l, t));
									},
								}),
								(s = a.queryClient),
								te({ ...o, enabled: !0, suspense: !0, throwOnError: e3, placeholderData: void 0 }, eV, s));
						return (u.trpc = tC({ path: t })), [u.data, u];
					},
					useQueries: (e, t) => {
						let { ssrState: n, queryClient: i, prefetchQuery: o, client: s } = r(),
							a = e(tv(s));
						if ('undefined' == typeof window && 'prepass' === n)
							for (let e of a)
								e.trpc?.ssr === !1 || i.getQueryCache().find({ queryKey: e.queryKey }) || o(e.queryKey, e);
						return tu({ queries: a.map((e) => ({ ...e, queryKey: e.queryKey })), combine: t?.combine }, i);
					},
					useSuspenseQueries: (e) => {
						var t;
						let { queryClient: n, client: i } = r(),
							o =
								((t = { queries: e(tv(i)).map((e) => ({ ...e, queryFn: e.queryFn, queryKey: e.queryKey })) }),
								tu(
									{
										...t,
										queries: t.queries.map((e) => ({
											...e,
											suspense: !0,
											throwOnError: e3,
											enabled: !0,
											placeholderData: void 0,
										})),
									},
									n,
								));
						return [o.map((e) => e.data), o];
					},
					useMutation: function (e, n) {
						let { client: i, queryClient: o } = r(),
							s = eL(e),
							a = o.defaultMutationOptions(o.getMutationDefaults(s)),
							l = (function (e, t) {
								let n = ei(t),
									[r] = et.useState(() => new tr(n, e));
								et.useEffect(() => {
									r.setOptions(e);
								}, [r, e]);
								let i = et.useSyncExternalStore(
										et.useCallback((e) => r.subscribe(eq.batchCalls(e)), [r]),
										() => r.getCurrentResult(),
										() => r.getCurrentResult(),
									),
									o = et.useCallback(
										(e, t) => {
											r.mutate(e, t).catch(ea);
										},
										[r],
									);
								if (i.error && eO(r.options.throwOnError, [i.error])) throw i.error;
								return { ...i, mutate: o, mutateAsync: i.mutate };
							})(
								{
									...n,
									mutationKey: s,
									mutationFn: (t) => i.mutation(...tw([e, { input: t }], n)),
									onSuccess: (...e) =>
										t({
											originalFn: () => n?.onSuccess?.(...e) ?? a?.onSuccess?.(...e),
											queryClient: o,
											meta: n?.meta ?? a?.meta ?? {},
										}),
								},
								o,
							);
						return (l.trpc = tC({ path: e })), l;
					},
					useSubscription: function (e, t, n) {
						let i = n?.enabled ?? t !== eE,
							a = eg(eP(e, t, 'any')),
							{ client: l } = r(),
							c = et.useRef(n);
						et.useEffect(() => {
							c.current = n;
						});
						let [u] = et.useState(new Set([])),
							d = et.useCallback(
								(e) => {
									u.add(e);
								},
								[u],
							),
							h = et.useRef(null),
							f = et.useCallback(
								(e) => {
									let t = g.current,
										n = (g.current = e(t)),
										r = !1;
									for (let e of u)
										if (t[e] !== n[e]) {
											r = !0;
											break;
										}
									r && y(tS(n, d));
								},
								[d, u],
							),
							p = et.useCallback(() => {
								if ((h.current?.unsubscribe(), !i)) return void f(() => ({ ...o, reset: p }));
								f(() => ({ ...s, reset: p })),
									(h.current = l.subscription(e.join('.'), t ?? void 0, {
										onStarted: () => {
											c.current.onStarted?.(), f((e) => ({ ...e, status: 'pending', error: null }));
										},
										onData: (e) => {
											c.current.onData?.(e), f((t) => ({ ...t, status: 'pending', data: e, error: null }));
										},
										onError: (e) => {
											c.current.onError?.(e), f((t) => ({ ...t, status: 'error', error: e }));
										},
										onConnectionStateChange: (e) => {
											f((t) => {
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
											c.current.onComplete?.(), f((e) => ({ ...e, status: 'idle', error: null, data: void 0 }));
										},
									}));
							}, [l, a, i, f]);
						et.useEffect(
							() => (
								p(),
								() => {
									h.current?.unsubscribe();
								}
							),
							[p],
						);
						let g = et.useRef(i ? { ...s, reset: p } : { ...o, reset: p }),
							[m, y] = et.useState(tS(g.current, d));
						return m;
					},
					useInfiniteQuery: function (e, t, n) {
						let { client: o, ssrState: s, prefetchInfiniteQuery: a, queryClient: l, abortOnUnmount: c } = r(),
							u = eP(e, t, 'infinite'),
							d = l.getQueryDefaults(u),
							h = t === eE;
						'undefined' != typeof window ||
							'prepass' !== s ||
							n?.trpc?.ssr === !1 ||
							(n?.enabled ?? d?.enabled) === !1 ||
							h ||
							l.getQueryCache().find({ queryKey: u }) ||
							a(u, { ...d, ...n });
						let f = i(u, { ...d, ...n }),
							p = n?.trpc?.abortOnUnmount ?? c,
							g = te(
								{
									...f,
									initialPageParam: n.initialCursor ?? null,
									persister: n.persister,
									queryKey: u,
									queryFn: h
										? t
										: (e) => {
												let t = { ...f, trpc: { ...f?.trpc, ...(p ? { signal: e.signal } : { signal: null }) } };
												return o.query(
													...tw(u, t, { pageParam: e.pageParam ?? n.initialCursor, direction: e.direction }),
												);
											},
								},
								ta,
								l,
							);
						return (g.trpc = tC({ path: e })), g;
					},
					usePrefetchInfiniteQuery: function (e, t, n) {
						let o = r(),
							s = eP(e, t, 'infinite'),
							a = o.queryClient.getQueryDefaults(s),
							l = t === eE,
							c = i(s, { ...a, ...n }),
							u = n?.trpc?.abortOnUnmount ?? o.abortOnUnmount;
						!(function (e, t) {
							let n = ei(void 0);
							n.getQueryState(e.queryKey) || n.prefetchInfiniteQuery(e);
						})({
							...n,
							initialPageParam: n.initialCursor ?? null,
							queryKey: s,
							queryFn: l
								? t
								: (e) => {
										let t = { ...c, trpc: { ...c?.trpc, ...(u ? { signal: e.signal } : {}) } };
										return o.client.query(
											...tw(s, t, { pageParam: e.pageParam ?? n.initialCursor, direction: e.direction }),
										);
									},
						});
					},
					useSuspenseInfiniteQuery: function (e, t, n) {
						var o, s;
						let a = r(),
							l = eP(e, t, 'infinite'),
							c = a.queryClient.getQueryDefaults(l),
							u = i(l, { ...c, ...n }),
							d = n?.trpc?.abortOnUnmount ?? a.abortOnUnmount,
							h =
								((o = {
									...n,
									initialPageParam: n.initialCursor ?? null,
									queryKey: l,
									queryFn: (e) => {
										let t = { ...u, trpc: { ...u?.trpc, ...(d ? { signal: e.signal } : {}) } };
										return a.client.query(
											...tw(l, t, { pageParam: e.pageParam ?? n.initialCursor, direction: e.direction }),
										);
									},
								}),
								(s = a.queryClient),
								te({ ...o, enabled: !0, suspense: !0, throwOnError: e3 }, ta, s));
						return (h.trpc = tC({ path: e })), [h.data, h];
					},
				};
			}
			let tE = (e) => e.queryClient ?? new tp(e.queryClientConfig);
			n(7595);
			let tR = (function (e) {
					let t = {
							url: e.url.toString(),
							fetch: e.fetch,
							transformer: u(e.transformer),
							methodOverride: e.methodOverride,
						},
						n = e.maxURLLength ?? 1 / 0,
						i = e.maxItems ?? 1 / 0;
					return () => {
						let o = (r) => ({
								validate(e) {
									if (n === 1 / 0 && i === 1 / 0) return !0;
									if (e.length > i) return !1;
									let o = e.map((e) => e.path).join(','),
										s = e.map((e) => e.input);
									return p({ ...t, type: r, path: o, inputs: s, signal: null }).length <= n;
								},
								async fetch(n) {
									let i = n.map((e) => e.path).join(','),
										o = n.map((e) => e.input),
										s = (function (...e) {
											let t = new AbortController(),
												n = e.length,
												r = 0,
												i = () => {
													++r === n && t.abort();
												};
											for (let t of e) t?.aborted ? i() : t?.addEventListener('abort', i, { once: !0 });
											return t.signal;
										})(...n.map((e) => e.signal)),
										a = await m({
											...t,
											path: i,
											inputs: o,
											type: r,
											headers: () =>
												e.headers ? ('function' == typeof e.headers ? e.headers({ opList: n }) : e.headers) : {},
											signal: s,
										});
									return (Array.isArray(a.json) ? a.json : n.map(() => a.json)).map((e) => ({ meta: a.meta, json: e }));
								},
							}),
							a = { query: k(o('query')), mutation: k(o('mutation')) };
						return ({ op: e }) =>
							r((n) => {
								let r;
								if ('subscription' === e.type)
									throw Error('Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`');
								return (
									a[e.type]
										.load(e)
										.then((e) => {
											r = e;
											let i = (function (e, t) {
												let n;
												try {
													n = (function (e, t) {
														if ('error' in e) {
															let n = t.deserialize(e.error);
															return { ok: !1, error: { ...e, error: n } };
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
													throw new x();
												}
												if (
													(!n.ok && (!s(n.error.error) || 'number' != typeof n.error.error.code)) ||
													(n.ok && !s(n.result))
												)
													throw new x();
												return n;
											})(e.json, t.transformer.output);
											if (!i.ok) return void n.error(c.from(i.error, { meta: e.meta }));
											n.next({ context: e.meta, result: i.result }), n.complete();
										})
										.catch((e) => {
											n.error(c.from(e, { meta: r?.meta }));
										}),
									() => {}
								);
							});
					};
				})({ url: ''.concat('', '/api/trpc'), headers: async () => ({}) }),
				tO = (function (e) {
					let t = tk(e),
						n = (function (e) {
							let { config: t } = e,
								n = u(e.transformer);
							return (r) => {
								let i = tk(e),
									o = (o) => {
										let [s] = (0, et.useState)(() => {
												if (o.trpc) return o.trpc;
												let n = t({}),
													r = tE(n),
													s = i.createClient(n);
												return {
													abortOnUnmount: n.abortOnUnmount,
													queryClient: r,
													trpcClient: s,
													ssrState: !!e.ssr && 'mounting',
													ssrContext: null,
												};
											}),
											{ queryClient: a, trpcClient: l, ssrState: c, ssrContext: u } = s,
											d = o.pageProps?.trpcState,
											h = et.useMemo(() => (d ? n.input.deserialize(d) : d), [d]);
										return (0, en.jsx)(i.Provider, {
											abortOnUnmount: s.abortOnUnmount ?? !1,
											client: l,
											queryClient: a,
											ssrState: c,
											ssrContext: u,
											children: (0, en.jsx)(eo, {
												client: a,
												children: (0, en.jsx)(eA, { state: h, children: (0, en.jsx)(r, { ...o }) }),
											}),
										});
									};
								e.ssr
									? e.ssrPrepass({ parent: e, AppOrPage: r, WithTRPC: o })
									: r.getInitialProps &&
										(o.getInitialProps = async (e) => {
											let t,
												n = !!e.Component,
												i = {},
												o = await r.getInitialProps(e);
											return (t = i = { ...(n ? (o.pageProps ?? {}) : o), ...i }), n ? { pageProps: t } : t;
										});
								let s = r.displayName ?? r.name ?? 'Component';
								return (o.displayName = `withTRPC(${s})`), o;
							};
						})(e),
						r = D(({ path: e, args: n }) => {
							let r = [...e],
								i = r.pop();
							if ('useMutation' === i) return t[i](r, ...n);
							if ('_def' === i) return { path: r };
							let [o, ...s] = n,
								a = s[0] ?? {};
							return t[i](r, o, a);
						});
					return W((e) =>
						'useContext' === e || 'useUtils' === e
							? () => {
									let e = t.useUtils();
									return (0, et.useMemo)(
										() =>
											(function (e) {
												var t;
												let n = X(e.client),
													r =
														((t = e),
														D((e) => {
															let n = [...e.path],
																r = n.pop(),
																i = [...e.args],
																o = i.shift(),
																s = eP(n, o, ty(r));
															return {
																infiniteQueryOptions: () => t.infiniteQueryOptions(n, s, i[0]),
																queryOptions: () => t.queryOptions(n, s, ...i),
																fetch: () => t.fetchQuery(s, ...i),
																fetchInfinite: () => t.fetchInfiniteQuery(s, i[0]),
																prefetch: () => t.prefetchQuery(s, ...i),
																prefetchInfinite: () => t.prefetchInfiniteQuery(s, i[0]),
																ensureData: () => t.ensureQueryData(s, ...i),
																invalidate: () => t.invalidateQueries(s, ...i),
																reset: () => t.resetQueries(s, ...i),
																refetch: () => t.refetchQueries(s, ...i),
																cancel: () => t.cancelQuery(s, ...i),
																setData: () => {
																	t.setQueryData(s, i[0], i[1]);
																},
																setQueriesData: () => t.setQueriesData(s, i[0], i[1], i[2]),
																setInfiniteData: () => {
																	t.setInfiniteQueryData(s, i[0], i[1]);
																},
																getData: () => t.getQueryData(s),
																getInfiniteData: () => t.getInfiniteQueryData(s),
																setMutationDefaults: () => t.setMutationDefaults(eL(n), o),
																getMutationDefaults: () => t.getMutationDefaults(eL(n)),
																isMutating: () => t.isMutating({ mutationKey: eL(n) }),
															}[r]();
														}));
												return W((t) => ('client' === t ? n : tg.includes(t) ? e[t] : r[t]));
											})(e),
										[e],
									);
								}
							: 'useQueries' === e
								? t.useQueries
								: 'useSuspenseQueries' === e
									? t.useSuspenseQueries
									: 'withTRPC' === e
										? n
										: r[e],
					);
				})({ config: () => ({ links: [tR] }), ssr: !1 }),
				t_ = ee({ links: [tR] });
		},
		5933: (e, t, n) => {
			'use strict';
			n.r(t), n.d(t, { default: () => f });
			var r = n(5640),
				i = n(1211);
			n(8834);
			var o = n(4209),
				s = n(2252),
				a = n.n(s),
				l = n(6620),
				c = n.n(l),
				u = n(2611),
				d = n.n(u),
				h = n(158);
			let f = o.t.withTRPC((e) => {
				let { Component: t, pageProps: n } = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [
						(0, r.jsx)(d(), { children: (0, r.jsx)('title', { children: 'Telegram Mini App' }) }),
						(0, r.jsx)('div', {
							className: ''.concat(a().className, ' ').concat(c().className),
							children: (0, r.jsx)(h.Nl, {
								manifestUrl: 'https://YOUR_DOMAIN/tonconnect-manifest.json',
								children: (0, r.jsx)(i.Z, { children: (0, r.jsx)(t, { ...n }) }),
							}),
						}),
					],
				});
			});
		},
		6001: (e, t) => {
			var n;
			!(function () {
				'use strict';
				var r = {}.hasOwnProperty;
				function i() {
					for (var e = '', t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						n &&
							(e = o(
								e,
								(function (e) {
									if ('string' == typeof e || 'number' == typeof e) return e;
									if ('object' != typeof e) return '';
									if (Array.isArray(e)) return i.apply(null, e);
									if (e.toString !== Object.prototype.toString && !e.toString.toString().includes('[native code]'))
										return e.toString();
									var t = '';
									for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
									return t;
								})(n),
							));
					}
					return e;
				}
				function o(e, t) {
					return t ? (e ? e + ' ' + t : e + t) : e;
				}
				e.exports
					? ((i.default = i), (e.exports = i))
					: void 0 ===
							(n = function () {
								return i;
							}.apply(t, [])) || (e.exports = n);
			})();
		},
		6590: (e) => {
			'use strict';
			var t = function (e) {
					var t, r, i;
					return (
						!!(t = e) &&
						'object' == typeof t &&
						((r = e),
						'[object RegExp]' !== (i = Object.prototype.toString.call(r)) && '[object Date]' !== i && r.$$typeof !== n)
					);
				},
				n = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;
			function r(e, t) {
				return !1 !== t.clone && t.isMergeableObject(e) ? a(Array.isArray(e) ? [] : {}, e, t) : e;
			}
			function i(e, t, n) {
				return e.concat(t).map(function (e) {
					return r(e, n);
				});
			}
			function o(e) {
				return Object.keys(e).concat(
					Object.getOwnPropertySymbols
						? Object.getOwnPropertySymbols(e).filter(function (t) {
								return Object.propertyIsEnumerable.call(e, t);
							})
						: [],
				);
			}
			function s(e, t) {
				try {
					return t in e;
				} catch (e) {
					return !1;
				}
			}
			function a(e, n, l) {
				((l = l || {}).arrayMerge = l.arrayMerge || i),
					(l.isMergeableObject = l.isMergeableObject || t),
					(l.cloneUnlessOtherwiseSpecified = r);
				var c,
					u,
					d = Array.isArray(n);
				return d !== Array.isArray(e)
					? r(n, l)
					: d
						? l.arrayMerge(e, n, l)
						: ((u = {}),
							(c = l).isMergeableObject(e) &&
								o(e).forEach(function (t) {
									u[t] = r(e[t], c);
								}),
							o(n).forEach(function (t) {
								(s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))) ||
									(s(e, t) && c.isMergeableObject(n[t])
										? (u[t] = (function (e, t) {
												if (!t.customMerge) return a;
												var n = t.customMerge(e);
												return 'function' == typeof n ? n : a;
											})(t, c)(e[t], n[t], c))
										: (u[t] = r(n[t], c)));
							}),
							u);
			}
			(a.all = function (e, t) {
				if (!Array.isArray(e)) throw Error('first argument should be an array');
				return e.reduce(function (e, n) {
					return a(e, n, t);
				}, {});
			}),
				(e.exports = a);
		},
		6620: (e) => {
			e.exports = {
				style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
				className: '__className_44e023',
				variable: '__variable_44e023',
			};
		},
		8308: () => {},
		8339: function (e, t, n) {
			var r = n(8482).Buffer;
			!(function (t, n) {
				'use strict';
				e.exports ? (e.exports = n()) : (t.nacl || (t.nacl = {}), (t.nacl.util = n()));
			})(this, function () {
				'use strict';
				var e = {};
				function t(e) {
					if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))
						throw TypeError('invalid encoding');
				}
				return (
					(e.decodeUTF8 = function (e) {
						if ('string' != typeof e) throw TypeError('expected string');
						var t,
							n = unescape(encodeURIComponent(e)),
							r = new Uint8Array(n.length);
						for (t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
						return r;
					}),
					(e.encodeUTF8 = function (e) {
						var t,
							n = [];
						for (t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
						return decodeURIComponent(escape(n.join('')));
					}),
					'undefined' == typeof atob
						? void 0 !== r.from
							? ((e.encodeBase64 = function (e) {
									return r.from(e).toString('base64');
								}),
								(e.decodeBase64 = function (e) {
									return t(e), new Uint8Array(Array.prototype.slice.call(r.from(e, 'base64'), 0));
								}))
							: ((e.encodeBase64 = function (e) {
									return new r(e).toString('base64');
								}),
								(e.decodeBase64 = function (e) {
									return t(e), new Uint8Array(Array.prototype.slice.call(new r(e, 'base64'), 0));
								}))
						: ((e.encodeBase64 = function (e) {
								var t,
									n = [],
									r = e.length;
								for (t = 0; t < r; t++) n.push(String.fromCharCode(e[t]));
								return btoa(n.join(''));
							}),
							(e.decodeBase64 = function (e) {
								t(e);
								var n,
									r = atob(e),
									i = new Uint8Array(r.length);
								for (n = 0; n < r.length; n++) i[n] = r.charCodeAt(n);
								return i;
							})),
					e
				);
			});
		},
		8482: () => {},
		8834: () => {},
		9277: function (e, t, n) {
			var r;
			!(function (i, o) {
				'use strict';
				var s = 'function',
					a = 'undefined',
					l = 'object',
					c = 'string',
					u = 'major',
					d = 'model',
					h = 'name',
					f = 'type',
					p = 'vendor',
					g = 'version',
					m = 'architecture',
					y = 'console',
					v = 'mobile',
					w = 'tablet',
					b = 'smarttv',
					C = 'wearable',
					x = 'embedded',
					S = 'Amazon',
					k = 'Apple',
					E = 'ASUS',
					R = 'BlackBerry',
					O = 'Browser',
					_ = 'Chrome',
					T = 'Firefox',
					M = 'Google',
					A = 'Huawei',
					P = 'Microsoft',
					L = 'Motorola',
					I = 'Opera',
					U = 'Samsung',
					N = 'Sharp',
					q = 'Sony',
					$ = 'Xiaomi',
					D = 'Zebra',
					W = 'Facebook',
					j = 'Chromium OS',
					B = 'Mac OS',
					F = ' Browser',
					K = function (e, t) {
						var n = {};
						for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
						return n;
					},
					H = function (e) {
						for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
						return t;
					},
					Q = function (e, t) {
						return typeof e === c && -1 !== V(t).indexOf(V(e));
					},
					V = function (e) {
						return e.toLowerCase();
					},
					z = function (e, t) {
						if (typeof e === c) return (e = e.replace(/^\s\s*/, '')), typeof t === a ? e : e.substring(0, 500);
					},
					G = function (e, t) {
						for (var n, r, i, a, c, u, d = 0; d < t.length && !c; ) {
							var h = t[d],
								f = t[d + 1];
							for (n = r = 0; n < h.length && !c && h[n]; )
								if ((c = h[n++].exec(e)))
									for (i = 0; i < f.length; i++)
										(u = c[++r]),
											typeof (a = f[i]) === l && a.length > 0
												? 2 === a.length
													? typeof a[1] == s
														? (this[a[0]] = a[1].call(this, u))
														: (this[a[0]] = a[1])
													: 3 === a.length
														? typeof a[1] !== s || (a[1].exec && a[1].test)
															? (this[a[0]] = u ? u.replace(a[1], a[2]) : void 0)
															: (this[a[0]] = u ? a[1].call(this, u, a[2]) : void 0)
														: 4 === a.length && (this[a[0]] = u ? a[3].call(this, u.replace(a[1], a[2])) : o)
												: (this[a] = u || o);
							d += 2;
						}
					},
					Z = function (e, t) {
						for (var n in t)
							if (typeof t[n] === l && t[n].length > 0) {
								for (var r = 0; r < t[n].length; r++) if (Q(t[n][r], e)) return '?' === n ? o : n;
							} else if (Q(t[n], e)) return '?' === n ? o : n;
						return t.hasOwnProperty('*') ? t['*'] : e;
					},
					Y = {
						ME: '4.90',
						'NT 3.11': 'NT3.51',
						'NT 4.0': 'NT4.0',
						2e3: 'NT 5.0',
						XP: ['NT 5.1', 'NT 5.2'],
						Vista: 'NT 6.0',
						7: 'NT 6.1',
						8: 'NT 6.2',
						8.1: 'NT 6.3',
						10: ['NT 6.4', 'NT 10.0'],
						RT: 'ARM',
					},
					J = {
						browser: [
							[/\b(?:crmo|crios)\/([\w\.]+)/i],
							[g, [h, 'Chrome']],
							[/edg(?:e|ios|a)?\/([\w\.]+)/i],
							[g, [h, 'Edge']],
							[
								/(opera mini)\/([-\w\.]+)/i,
								/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
								/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
							],
							[h, g],
							[/opios[\/ ]+([\w\.]+)/i],
							[g, [h, I + ' Mini']],
							[/\bop(?:rg)?x\/([\w\.]+)/i],
							[g, [h, I + ' GX']],
							[/\bopr\/([\w\.]+)/i],
							[g, [h, I]],
							[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
							[g, [h, 'Baidu']],
							[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
							[g, [h, 'Maxthon']],
							[
								/(kindle)\/([\w\.]+)/i,
								/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
								/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
								/(?:ms|\()(ie) ([\w\.]+)/i,
								/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
								/(heytap|ovi|115)browser\/([\d\.]+)/i,
								/(weibo)__([\d\.]+)/i,
							],
							[h, g],
							[/quark(?:pc)?\/([-\w\.]+)/i],
							[g, [h, 'Quark']],
							[/\bddg\/([\w\.]+)/i],
							[g, [h, 'DuckDuckGo']],
							[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
							[g, [h, 'UC' + O]],
							[/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
							[g, [h, 'WeChat']],
							[/konqueror\/([\w\.]+)/i],
							[g, [h, 'Konqueror']],
							[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
							[g, [h, 'IE']],
							[/ya(?:search)?browser\/([\w\.]+)/i],
							[g, [h, 'Yandex']],
							[/slbrowser\/([\w\.]+)/i],
							[g, [h, 'Smart Lenovo ' + O]],
							[/(avast|avg)\/([\w\.]+)/i],
							[[h, /(.+)/, '$1 Secure ' + O], g],
							[/\bfocus\/([\w\.]+)/i],
							[g, [h, T + ' Focus']],
							[/\bopt\/([\w\.]+)/i],
							[g, [h, I + ' Touch']],
							[/coc_coc\w+\/([\w\.]+)/i],
							[g, [h, 'Coc Coc']],
							[/dolfin\/([\w\.]+)/i],
							[g, [h, 'Dolphin']],
							[/coast\/([\w\.]+)/i],
							[g, [h, I + ' Coast']],
							[/miuibrowser\/([\w\.]+)/i],
							[g, [h, 'MIUI' + F]],
							[/fxios\/([\w\.-]+)/i],
							[g, [h, T]],
							[/\bqihoobrowser\/?([\w\.]*)/i],
							[g, [h, '360']],
							[/\b(qq)\/([\w\.]+)/i],
							[[h, /(.+)/, '$1Browser'], g],
							[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
							[[h, /(.+)/, '$1' + F], g],
							[/samsungbrowser\/([\w\.]+)/i],
							[g, [h, U + ' Internet']],
							[/metasr[\/ ]?([\d\.]+)/i],
							[g, [h, 'Sogou Explorer']],
							[/(sogou)mo\w+\/([\d\.]+)/i],
							[[h, 'Sogou Mobile'], g],
							[
								/(electron)\/([\w\.]+) safari/i,
								/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
								/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
							],
							[h, g],
							[/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
							[h],
							[/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
							[g, h],
							[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
							[[h, W], g],
							[
								/(Klarna)\/([\w\.]+)/i,
								/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
								/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
								/safari (line)\/([\w\.]+)/i,
								/\b(line)\/([\w\.]+)\/iab/i,
								/(alipay)client\/([\w\.]+)/i,
								/(twitter)(?:and| f.+e\/([\w\.]+))/i,
								/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
							],
							[h, g],
							[/\bgsa\/([\w\.]+) .*safari\//i],
							[g, [h, 'GSA']],
							[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
							[g, [h, 'TikTok']],
							[/headlesschrome(?:\/([\w\.]+)| )/i],
							[g, [h, _ + ' Headless']],
							[/ wv\).+(chrome)\/([\w\.]+)/i],
							[[h, _ + ' WebView'], g],
							[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
							[g, [h, 'Android ' + O]],
							[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
							[h, g],
							[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
							[g, [h, 'Mobile Safari']],
							[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
							[g, h],
							[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
							[
								h,
								[
									g,
									Z,
									{
										'1.0': '/8',
										1.2: '/1',
										1.3: '/3',
										'2.0': '/412',
										'2.0.2': '/416',
										'2.0.3': '/417',
										'2.0.4': '/419',
										'?': '/',
									},
								],
							],
							[/(webkit|khtml)\/([\w\.]+)/i],
							[h, g],
							[/(navigator|netscape\d?)\/([-\w\.]+)/i],
							[[h, 'Netscape'], g],
							[/(wolvic|librewolf)\/([\w\.]+)/i],
							[h, g],
							[/mobile vr; rv:([\w\.]+)\).+firefox/i],
							[g, [h, T + ' Reality']],
							[
								/ekiohf.+(flow)\/([\w\.]+)/i,
								/(swiftfox)/i,
								/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
								/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
								/(firefox)\/([\w\.]+)/i,
								/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
								/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
								/(links) \(([\w\.]+)/i,
							],
							[h, [g, /_/g, '.']],
							[/(cobalt)\/([\w\.]+)/i],
							[h, [g, /master.|lts./, '']],
						],
						cpu: [
							[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
							[[m, 'amd64']],
							[/(ia32(?=;))/i],
							[[m, V]],
							[/((?:i[346]|x)86)[;\)]/i],
							[[m, 'ia32']],
							[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
							[[m, 'arm64']],
							[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
							[[m, 'armhf']],
							[/windows (ce|mobile); ppc;/i],
							[[m, 'arm']],
							[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
							[[m, /ower/, '', V]],
							[/(sun4\w)[;\)]/i],
							[[m, 'sparc']],
							[
								/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
							],
							[[m, V]],
						],
						device: [
							[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
							[d, [p, U], [f, w]],
							[
								/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
								/samsung[- ]((?!sm-[lr])[-\w]+)/i,
								/sec-(sgh\w+)/i,
							],
							[d, [p, U], [f, v]],
							[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
							[d, [p, k], [f, v]],
							[/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
							[d, [p, k], [f, w]],
							[/(macintosh);/i],
							[d, [p, k]],
							[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
							[d, [p, N], [f, v]],
							[/(?:honor)([-\w ]+)[;\)]/i],
							[d, [p, 'Honor'], [f, v]],
							[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
							[d, [p, A], [f, w]],
							[/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
							[d, [p, A], [f, v]],
							[
								/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
								/\b; (\w+) build\/hm\1/i,
								/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
								/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
								/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
								/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
							],
							[
								[d, /_/g, ' '],
								[p, $],
								[f, v],
							],
							[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
							[
								[d, /_/g, ' '],
								[p, $],
								[f, w],
							],
							[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
							[d, [p, 'OPPO'], [f, v]],
							[/\b(opd2\d{3}a?) bui/i],
							[d, [p, 'OPPO'], [f, w]],
							[/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
							[d, [p, 'Vivo'], [f, v]],
							[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
							[d, [p, 'Realme'], [f, v]],
							[
								/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
								/\bmot(?:orola)?[- ](\w*)/i,
								/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
							],
							[d, [p, L], [f, v]],
							[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
							[d, [p, L], [f, w]],
							[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
							[d, [p, 'LG'], [f, w]],
							[
								/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
								/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
								/\blg-?([\d\w]+) bui/i,
							],
							[d, [p, 'LG'], [f, v]],
							[/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
							[d, [p, 'Lenovo'], [f, w]],
							[/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
							[
								[d, /_/g, ' '],
								[p, 'Nokia'],
								[f, v],
							],
							[/(pixel c)\b/i],
							[d, [p, M], [f, w]],
							[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
							[d, [p, M], [f, v]],
							[
								/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
							],
							[d, [p, q], [f, v]],
							[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
							[
								[d, 'Xperia Tablet'],
								[p, q],
								[f, w],
							],
							[/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
							[d, [p, 'OnePlus'], [f, v]],
							[/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
							[d, [p, S], [f, w]],
							[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
							[
								[d, /(.+)/g, 'Fire Phone $1'],
								[p, S],
								[f, v],
							],
							[/(playbook);[-\w\),; ]+(rim)/i],
							[d, p, [f, w]],
							[/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
							[d, [p, R], [f, v]],
							[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
							[d, [p, E], [f, w]],
							[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
							[d, [p, E], [f, v]],
							[/(nexus 9)/i],
							[d, [p, 'HTC'], [f, w]],
							[
								/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
								/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
								/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
							],
							[p, [d, /_/g, ' '], [f, v]],
							[
								/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
							],
							[d, [p, 'TCL'], [f, w]],
							[/(itel) ((\w+))/i],
							[[p, V], d, [f, Z, { tablet: ['p10001l', 'w7001'], '*': 'mobile' }]],
							[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
							[d, [p, 'Acer'], [f, w]],
							[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
							[d, [p, 'Meizu'], [f, v]],
							[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
							[d, [p, 'Ulefone'], [f, v]],
							[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
							[d, [p, 'Energizer'], [f, v]],
							[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
							[d, [p, 'Cat'], [f, v]],
							[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
							[d, [p, 'Smartfren'], [f, v]],
							[/droid.+; (a(?:015|06[35]|142p?))/i],
							[d, [p, 'Nothing'], [f, v]],
							[
								/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
								/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
								/(hp) ([\w ]+\w)/i,
								/(asus)-?(\w+)/i,
								/(microsoft); (lumia[\w ]+)/i,
								/(lenovo)[-_ ]?([-\w]+)/i,
								/(jolla)/i,
								/(oppo) ?([\w ]+) bui/i,
							],
							[p, d, [f, v]],
							[
								/(imo) (tab \w+)/i,
								/(kobo)\s(ereader|touch)/i,
								/(archos) (gamepad2?)/i,
								/(hp).+(touchpad(?!.+tablet)|tablet)/i,
								/(kindle)\/([\w\.]+)/i,
								/(nook)[\w ]+build\/(\w+)/i,
								/(dell) (strea[kpr\d ]*[\dko])/i,
								/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
								/(trinity)[- ]*(t\d{3}) bui/i,
								/(gigaset)[- ]+(q\w{1,9}) bui/i,
								/(vodafone) ([\w ]+)(?:\)| bui)/i,
							],
							[p, d, [f, w]],
							[/(surface duo)/i],
							[d, [p, P], [f, w]],
							[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
							[d, [p, 'Fairphone'], [f, v]],
							[/(u304aa)/i],
							[d, [p, 'AT&T'], [f, v]],
							[/\bsie-(\w*)/i],
							[d, [p, 'Siemens'], [f, v]],
							[/\b(rct\w+) b/i],
							[d, [p, 'RCA'], [f, w]],
							[/\b(venue[\d ]{2,7}) b/i],
							[d, [p, 'Dell'], [f, w]],
							[/\b(q(?:mv|ta)\w+) b/i],
							[d, [p, 'Verizon'], [f, w]],
							[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
							[d, [p, 'Barnes & Noble'], [f, w]],
							[/\b(tm\d{3}\w+) b/i],
							[d, [p, 'NuVision'], [f, w]],
							[/\b(k88) b/i],
							[d, [p, 'ZTE'], [f, w]],
							[/\b(nx\d{3}j) b/i],
							[d, [p, 'ZTE'], [f, v]],
							[/\b(gen\d{3}) b.+49h/i],
							[d, [p, 'Swiss'], [f, v]],
							[/\b(zur\d{3}) b/i],
							[d, [p, 'Swiss'], [f, w]],
							[/\b((zeki)?tb.*\b) b/i],
							[d, [p, 'Zeki'], [f, w]],
							[/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
							[[p, 'Dragon Touch'], d, [f, w]],
							[/\b(ns-?\w{0,9}) b/i],
							[d, [p, 'Insignia'], [f, w]],
							[/\b((nxa|next)-?\w{0,9}) b/i],
							[d, [p, 'NextBook'], [f, w]],
							[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
							[[p, 'Voice'], d, [f, v]],
							[/\b(lvtel\-)?(v1[12]) b/i],
							[[p, 'LvTel'], d, [f, v]],
							[/\b(ph-1) /i],
							[d, [p, 'Essential'], [f, v]],
							[/\b(v(100md|700na|7011|917g).*\b) b/i],
							[d, [p, 'Envizen'], [f, w]],
							[/\b(trio[-\w\. ]+) b/i],
							[d, [p, 'MachSpeed'], [f, w]],
							[/\btu_(1491) b/i],
							[d, [p, 'Rotor'], [f, w]],
							[/(shield[\w ]+) b/i],
							[d, [p, 'Nvidia'], [f, w]],
							[/(sprint) (\w+)/i],
							[p, d, [f, v]],
							[/(kin\.[onetw]{3})/i],
							[
								[d, /\./g, ' '],
								[p, P],
								[f, v],
							],
							[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
							[d, [p, D], [f, w]],
							[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
							[d, [p, D], [f, v]],
							[/smart-tv.+(samsung)/i],
							[p, [f, b]],
							[/hbbtv.+maple;(\d+)/i],
							[
								[d, /^/, 'SmartTV'],
								[p, U],
								[f, b],
							],
							[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
							[
								[p, 'LG'],
								[f, b],
							],
							[/(apple) ?tv/i],
							[p, [d, k + ' TV'], [f, b]],
							[/crkey/i],
							[
								[d, _ + 'cast'],
								[p, M],
								[f, b],
							],
							[/droid.+aft(\w+)( bui|\))/i],
							[d, [p, S], [f, b]],
							[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
							[d, [p, N], [f, b]],
							[/(bravia[\w ]+)( bui|\))/i],
							[d, [p, q], [f, b]],
							[/(mitv-\w{5}) bui/i],
							[d, [p, $], [f, b]],
							[/Hbbtv.*(technisat) (.*);/i],
							[p, d, [f, b]],
							[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
							[
								[p, z],
								[d, z],
								[f, b],
							],
							[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
							[[f, b]],
							[/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
							[p, d, [f, y]],
							[/droid.+; (shield) bui/i],
							[d, [p, 'Nvidia'], [f, y]],
							[/(playstation [345portablevi]+)/i],
							[d, [p, q], [f, y]],
							[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
							[d, [p, P], [f, y]],
							[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
							[d, [p, U], [f, C]],
							[/((pebble))app/i],
							[p, d, [f, C]],
							[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
							[d, [p, k], [f, C]],
							[/droid.+; (glass) \d/i],
							[d, [p, M], [f, C]],
							[/droid.+; (wt63?0{2,3})\)/i],
							[d, [p, D], [f, C]],
							[/droid.+; (glass) \d/i],
							[d, [p, M], [f, C]],
							[/(pico) (4|neo3(?: link|pro)?)/i],
							[p, d, [f, C]],
							[/; (quest( \d| pro)?)/i],
							[d, [p, W], [f, C]],
							[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
							[p, [f, x]],
							[/(aeobc)\b/i],
							[d, [p, S], [f, x]],
							[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
							[d, [f, v]],
							[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
							[d, [f, w]],
							[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
							[[f, w]],
							[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
							[[f, v]],
							[/(android[-\w\. ]{0,9});.+buil/i],
							[d, [p, 'Generic']],
						],
						engine: [
							[/windows.+ edge\/([\w\.]+)/i],
							[g, [h, 'EdgeHTML']],
							[/(arkweb)\/([\w\.]+)/i],
							[h, g],
							[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
							[g, [h, 'Blink']],
							[
								/(presto)\/([\w\.]+)/i,
								/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
								/ekioh(flow)\/([\w\.]+)/i,
								/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
								/(icab)[\/ ]([23]\.[\d\.]+)/i,
								/\b(libweb)/i,
							],
							[h, g],
							[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
							[g, h],
						],
						os: [
							[/microsoft (windows) (vista|xp)/i],
							[h, g],
							[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
							[h, [g, Z, Y]],
							[
								/windows nt 6\.2; (arm)/i,
								/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
								/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
							],
							[
								[g, Z, Y],
								[h, 'Windows'],
							],
							[
								/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
								/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
								/cfnetwork\/.+darwin/i,
							],
							[
								[g, /_/g, '.'],
								[h, 'iOS'],
							],
							[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
							[
								[h, B],
								[g, /_/g, '.'],
							],
							[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
							[g, h],
							[
								/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
								/(blackberry)\w*\/([\w\.]*)/i,
								/(tizen|kaios)[\/ ]([\w\.]+)/i,
								/\((series40);/i,
							],
							[h, g],
							[/\(bb(10);/i],
							[g, [h, R]],
							[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
							[g, [h, 'Symbian']],
							[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
							[g, [h, T + ' OS']],
							[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
							[g, [h, 'webOS']],
							[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
							[g, [h, 'watchOS']],
							[/crkey\/([\d\.]+)/i],
							[g, [h, _ + 'cast']],
							[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
							[[h, j], g],
							[
								/panasonic;(viera)/i,
								/(netrange)mmh/i,
								/(nettv)\/(\d+\.[\w\.]+)/i,
								/(nintendo|playstation) ([wids345portablevuch]+)/i,
								/(xbox); +xbox ([^\);]+)/i,
								/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
								/(mint)[\/\(\) ]?(\w*)/i,
								/(mageia|vectorlinux)[; ]/i,
								/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
								/(hurd|linux) ?([\w\.]*)/i,
								/(gnu) ?([\w\.]*)/i,
								/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
								/(haiku) (\w+)/i,
							],
							[h, g],
							[/(sunos) ?([\w\.\d]*)/i],
							[[h, 'Solaris'], g],
							[
								/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
								/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
								/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
								/(unix) ?([\w\.]*)/i,
							],
							[h, g],
						],
					},
					X = function (e, t) {
						if ((typeof e === l && ((t = e), (e = o)), !(this instanceof X))) return new X(e, t).getResult();
						var n = typeof i !== a && i.navigator ? i.navigator : o,
							r = e || (n && n.userAgent ? n.userAgent : ''),
							y = n && n.userAgentData ? n.userAgentData : o,
							b = t ? K(J, t) : J,
							C = n && n.userAgent == r;
						return (
							(this.getBrowser = function () {
								var e,
									t = {};
								return (
									(t[h] = o),
									(t[g] = o),
									G.call(t, r, b.browser),
									(t[u] = typeof (e = t[g]) === c ? e.replace(/[^\d\.]/g, '').split('.')[0] : o),
									C && n && n.brave && typeof n.brave.isBrave == s && (t[h] = 'Brave'),
									t
								);
							}),
							(this.getCPU = function () {
								var e = {};
								return (e[m] = o), G.call(e, r, b.cpu), e;
							}),
							(this.getDevice = function () {
								var e = {};
								return (
									(e[p] = o),
									(e[d] = o),
									(e[f] = o),
									G.call(e, r, b.device),
									C && !e[f] && y && y.mobile && (e[f] = v),
									C &&
										'Macintosh' == e[d] &&
										n &&
										typeof n.standalone !== a &&
										n.maxTouchPoints &&
										n.maxTouchPoints > 2 &&
										((e[d] = 'iPad'), (e[f] = w)),
									e
								);
							}),
							(this.getEngine = function () {
								var e = {};
								return (e[h] = o), (e[g] = o), G.call(e, r, b.engine), e;
							}),
							(this.getOS = function () {
								var e = {};
								return (
									(e[h] = o),
									(e[g] = o),
									G.call(e, r, b.os),
									C &&
										!e[h] &&
										y &&
										y.platform &&
										'Unknown' != y.platform &&
										(e[h] = y.platform.replace(/chrome os/i, j).replace(/macos/i, B)),
									e
								);
							}),
							(this.getResult = function () {
								return {
									ua: this.getUA(),
									browser: this.getBrowser(),
									engine: this.getEngine(),
									os: this.getOS(),
									device: this.getDevice(),
									cpu: this.getCPU(),
								};
							}),
							(this.getUA = function () {
								return r;
							}),
							(this.setUA = function (e) {
								return (r = typeof e === c && e.length > 500 ? z(e, 500) : e), this;
							}),
							this.setUA(r),
							this
						);
					};
				(X.VERSION = '1.0.40'),
					(X.BROWSER = H([h, g, u])),
					(X.CPU = H([m])),
					(X.DEVICE = H([d, p, f, y, v, b, w, C, x])),
					(X.ENGINE = X.OS = H([h, g])),
					typeof t !== a
						? (e.exports && (t = e.exports = X), (t.UAParser = X))
						: n.amdO
							? o ===
									(r = function () {
										return X;
									}.call(t, n, t, e)) || (e.exports = r)
							: typeof i !== a && (i.UAParser = X);
				var ee = typeof i !== a && (i.jQuery || i.Zepto);
				if (ee && !ee.ua) {
					var et = new X();
					(ee.ua = et.getResult()),
						(ee.ua.get = function () {
							return et.getUA();
						}),
						(ee.ua.set = function (e) {
							et.setUA(e);
							var t = et.getResult();
							for (var n in t) ee.ua[n] = t[n];
						});
				}
			})('object' == typeof window ? window : this);
		},
	},
	(e) => {
		var t = (t) => e((e.s = t));
		e.O(0, [593, 792], () => (t(2379), t(7203))), (_N_E = e.O());
	},
]);
