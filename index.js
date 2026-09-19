var visualizer = (() => {
  var e, t, P = Object.create, n = Object.defineProperty, U = Object.getOwnPropertyDescriptor, I = Object.getOwnPropertyNames, N = Object.getPrototypeOf, O = Object.prototype.hasOwnProperty, M = (t, r, i, a) => { if (r && "object" == typeof r || "function" == typeof r) for (let e of I(r)) O.call(t, e) || e === i || n(t, e, { get: () => r[e], enumerable: !(a = U(r, e)) || a.enumerable }); return t }, r = (e, t, r) => (r = null != e ? P(N(e)) : {}, M(!t && e && e.__esModule ? r : n(r, "default", { value: e, enumerable: !0 }), e)), i = (e = { "external-global-plugin:react"(e, t) { t.exports = Spicetify.React } }, function () { return t || (0, e[I(e)[0]])((t = { exports: {} }).exports, t), t.exports }), k = {}, g = (((e, t) => { for (var r in t) n(e, r, { get: t[r], enumerable: !0 }) })(k, { default: () => function () { return _e.default.createElement(we, null) } }), r(i())), y = { main_menu_button: "app-module__main_menu_button___wQmMP_visualizer", error_container: "app-module__error_container___8JcIQ_visualizer", error_message: "app-module__error_message___soZdL_visualizer" }, a = r(i()); function B() { return a.default.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, a.default.createElement("circle", { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", "stroke-width": "2" }, a.default.createElement("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: "0s" }), a.default.createElement("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: "0s" })), a.default.createElement("circle", { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", "stroke-width": "2" }, a.default.createElement("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: "-0.5s" }), a.default.createElement("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: "-0.5s" }))) } var o = r(i()), m = r(i()); function s(a) { let { contextType: n, onInit: o, onResize: s, onRender: u, style: e, data: l, isEnabled: t } = a, c = (0, m.useRef)(null), [f, d] = (0, m.useState)(null), dataRef = (0, m.useRef)(l); dataRef.current = l; let h = (0, m.useCallback)((e, t) => { var r = Math.round(e.clientWidth * window.devicePixelRatio), i = Math.round(e.clientHeight * window.devicePixelRatio), { width: r, height: i } = a.sizeConstraint?.(r, i) ?? { width: r, height: i }; e.width === r && e.height === i || (e.width = r, e.height = i) }, []); return (0, m.useEffect)(() => { if (o) { var e = c.current; if (e) { var t, r, i = e.ownerDocument.defaultView; if (i) return t = e.getContext(n, { powerPreference: "high-performance" }), r = o(t), h(e, i), s(t, r), d(r), () => d(null) } } }, [n, o]), (0, m.useEffect)(() => { if (t && f && u) { var e = c.current; if (e) { let a = e.ownerDocument.defaultView; if (a) { let t = e.getContext(n, { powerPreference: "high-performance" }), r = 0, i = e => { f && (u(t, dataRef.current, f, e), r = a.requestAnimationFrame(i)) }; return r = a.requestAnimationFrame(i), () => { r && a.cancelAnimationFrame(r) } } } } }, [n, u, f, t]), (0, m.useEffect)(() => { if (c.current) { var t = c.current.ownerDocument.defaultView; if (t) { let e = new t.ResizeObserver(() => { var e, t = c.current; t && (e = t.ownerDocument.defaultView) && (h(t, e), e = t.getContext(n, { powerPreference: "high-performance" })) && f && s(e, f) }); return e.observe(c.current), () => e.disconnect() } } }, [n, s, f]), m.default.createElement("canvas", { ref: c, style: { ...e || {}, ...t ? {} : { visibility: "hidden" } } }) } function R(e, t, r) { let i = 0, a = e.length; for (; 1 < a - i;) { var n = Math.floor((a + i) / 2); t(e[n], n) <= r ? i = n : a = n } return i } function S(e) { return Math.min(Math.max(Math.pow(10, e / 20), 0), 1) } function V(e) { return e * e * (3 - 2 * e) } function w(e, t, r, i, a) { return e = (e = (e - t) / (r - t)) * (a - i) + i } function h(e, t) { return -.5 * (e.x - t.x) * (e.y + t.y) } function z(e, t, r, i, a) { var n, o = R(e, t, a), s = e[o]; return e.length - 2 < o ? r(s, o) : (e = e[o + 1], a = a, n = t(s, o), t = t(e, o + 1), i = i, s = r(s, o), r = r(e, o + 1), a = (a = i(a = (a - n) / (t - n))) * (r - s) + s) } var p = (0, r(i()).createContext)(() => { }); function X(e, t) { for (var r = new v(31), i = 0; i < 31; ++i)r[i] = t += 1 << e[i - 1]; for (var a = new G(r[30]), i = 1; i < 30; ++i)for (var n = r[i]; n < r[i + 1]; ++n)a[n] = n - r[i] << 5 | i; return { b: r, r: a } } var u, l = r(i()), q = Uint8Array, v = Uint16Array, G = Int32Array, j = new q([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Q = new q([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), $ = new q([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = X(j, 2), K = c.b, c = (c.r[K[28] = 258] = 28, X(Q, 0)), J = c.b, Z = new v(32768); for (d = 0; d < 32768; ++d)Z[d] = ((65280 & (u = (61680 & (u = (52428 & (u = (43690 & d) >> 1 | (21845 & d) << 1)) >> 2 | (13107 & u) << 2)) >> 4 | (3855 & u) << 4)) >> 8 | (255 & u) << 8) >> 1; var W = function (e, t, r) { for (var i = e.length, a = 0, n = new v(t); a < i; ++a)e[a] && ++n[e[a] - 1]; var o = new v(t); for (a = 1; a < t; ++a)o[a] = o[a - 1] + n[a - 1] << 1; if (r) { for (var s = new v(1 << t), u = 15 - t, a = 0; a < i; ++a)if (e[a]) for (var l = a << 4 | e[a], c = t - e[a], f = o[e[a] - 1]++ << c, d = f | (1 << c) - 1; f <= d; ++f)s[Z[f] >> u] = l } else for (s = new v(i), a = 0; a < i; ++a)e[a] && (s[a] = Z[o[e[a] - 1]++] >> 15 - e[a]); return s }, f = new q(288); for (d = 0; d < 144; ++d)f[d] = 8; for (d = 144; d < 256; ++d)f[d] = 9; for (d = 256; d < 280; ++d)f[d] = 7; for (d = 280; d < 288; ++d)f[d] = 8; var d, ee = new q(32); for (d = 0; d < 32; ++d)ee[d] = 5; var te = W(f, 9, 1), re = W(ee, 5, 1), ie = function (e) { for (var t = e[0], r = 1; r < e.length; ++r)t < e[r] && (t = e[r]); return t }, Y = function (e, t, r) { var i = t / 8 | 0; return (e[i] | e[1 + i] << 8) >> (7 & t) & r }, ae = function (e, t) { var r = t / 8 | 0; return (e[r] | e[1 + r] << 8 | e[2 + r] << 16) >> (7 & t) }, ne = function (e) { return (e + 7) / 8 | 0 }, oe = function (e, t, r) { return (null == r || r > e.length) && (r = e.length), new q(e.subarray(t = null == t || t < 0 ? 0 : t, r)) }, se = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], H = function (e, t, r) { t = new Error(t || se[e]); if (t.code = e, Error.captureStackTrace && Error.captureStackTrace(t, H), r) return t; throw t }, ue = function (e, t, r, i) { var a = e.length, O = i ? i.length : 0; if (!a || t.f && !t.l) return r || new q(0); function n(e) { var t = r.length; t < e && ((t = new q(Math.max(2 * t, e))).set(r), r = t) } var o = !r, s = o || 2 != t.i, u = t.i, l = (o && (r = new q(3 * a)), t.f || 0), c = t.p || 0, f = t.b || 0, d = t.l, h = t.d, m = t.m, g = t.n, y = 8 * a; do { if (!d) { var l = Y(e, c, 1), p = Y(e, c + 1, 3); if (c += 3, !p) { var v = e[(w = ne(c) + 4) - 4] | e[w - 3] << 8, E = w + v; if (a < E) { u && H(0); break } s && n(f + v), r.set(e.subarray(w, E), f), t.b = f += v, t.p = c = 8 * E, t.f = l; continue } if (1 == p) d = te, h = re, m = 9, g = 5; else if (2 == p) { for (var v = Y(e, c, 31) + 257, x = Y(e, c + 10, 15) + 4, b = v + Y(e, c + 5, 31) + 1, T = (c += 14, new q(b)), R = new q(19), S = 0; S < x; ++S)R[$[S]] = Y(e, c + 3 * S, 7); c += 3 * x; for (var E = ie(R), M = (1 << E) - 1, k = W(R, E, 1), S = 0; S < b;) { var w, _ = k[Y(e, c, M)]; if (c += 15 & _, (w = _ >> 4) < 16) T[S++] = w; else { var A = 0, C = 0; for (16 == w ? (C = 3 + Y(e, c, 3), c += 2, A = T[S - 1]) : 17 == w ? (C = 3 + Y(e, c, 7), c += 3) : 18 == w && (C = 11 + Y(e, c, 127), c += 7); C--;)T[S++] = A } } var D = T.subarray(0, v), F = T.subarray(v), m = ie(D), g = ie(F), d = W(D, m, 1), h = W(F, g, 1) } else H(1); if (y < c) { u && H(0); break } } s && n(f + 131072); for (var B = (1 << m) - 1, V = (1 << g) - 1, L = c; ; L = c) { var P = (A = d[ae(e, c) & B]) >> 4; if (y < (c += 15 & A)) { u && H(0); break } if (A || H(2), P < 256) r[f++] = P; else { if (256 == P) { L = c, d = null; break } var U, I = P - 254, P = (264 < P && (U = j[S = P - 257], I = Y(e, c, (1 << U) - 1) + K[S], c += U), h[ae(e, c) & V]), N = P >> 4, F = (P || H(3), c += 15 & P, J[N]); if (3 < N && (U = Q[N], F += ae(e, c) & (1 << U) - 1, c += U), y < c) { u && H(0); break } s && n(f + 131072); var z = f + I; if (f < F) { var X = O - F, G = Math.min(F, z); for (X + f < 0 && H(3); f < G; ++f)r[f] = i[X + f] } for (; f < z; ++f)r[f] = r[f - F] } } t.l = d, t.p = L, t.b = f, t.f = l, d && (l = 1, t.m = m, t.d = h, t.n = g) } while (!l); return f != r.length && o ? oe(r, 0, f) : r.subarray(0, f) }, c = new q(0), le = function (e, t) { return (8 != (15 & e[0]) || 7 < e[0] >> 4 || (e[0] << 8 | e[1]) % 31) && H(6, "invalid zlib data"), (e[1] >> 5 & 1) == +!t && H(6, "invalid zlib data: " + (32 & e[1] ? "need" : "unexpected") + " dictionary"), 2 + (e[1] >> 3 & 4) }; var E = "undefined" != typeof TextDecoder && new TextDecoder; try { E.decode(c, { stream: !0 }) } catch (e) { } function ce(e) { e = e.replace(/-/g, "+").replace(/_/g, "/"); var e = new Uint8Array(atob(e).split("").map(e => e.charCodeAt(0))), e = ue(e.subarray(le(e, i && i.dictionary), -4), { i: 2 }, i && i.out, i && i.dictionary), t = (new TextDecoder).decode(e).split(" ").map(e => parseInt(e)), r = []; if (!(t.length < 3)) { var i = t.shift(), a = t.shift() / i, n = t.shift(); if (!(t.length < n)) for (let e = 0; e < n; e++) { var o = [], s = t.shift(); if (t.length < s + (n - e - 1)) return r; for (let e = 0; e < s; e++) { var u = t.shift() * a; o.push(0 == e ? u : o[e - 1] + u) } r.push(o) } } return r } var fe = [1, 2], de = [{ name: "Beats", layer: "background", render: (t, r, i, a) => { var n = R(r.analysis.beats, e => e.start, i.start), o = R(r.analysis.beats, e => e.start, i.end); t.lineWidth = 1, t.strokeStyle = "#FFFFFF33", t.beginPath(); for (let e = n; e <= o; e++) { var s = w(r.analysis.beats[e].start, i.start, i.end, a.x, a.x + a.width); t.moveTo(s, a.y), t.lineTo(s, a.y + a.height) } t.stroke() } }, { name: "Bars", layer: "background", render: (t, r, i, a) => { var n = R(r.analysis.bars, e => e.start, i.start), o = R(r.analysis.bars, e => e.start, i.end); t.lineWidth = 3, t.strokeStyle = "#FFFFFF66", t.beginPath(); for (let e = n; e <= o; e++) { var s = w(r.analysis.bars[e].start, i.start, i.end, a.x, a.x + a.width); t.moveTo(s, a.y), t.lineTo(s, a.y + a.height) } t.stroke() } }, { name: "Position", layer: "overlay", render: (e, t, r, i) => { e.lineWidth = 5, e.strokeStyle = e.fillStyle = "white", e.beginPath(); r = w(r.current, r.start, r.end, i.x, i.x + i.width); e.moveTo(r, i.y), e.lineTo(r, i.y + i.height), e.stroke(); e.beginPath(), e.moveTo(r - 10, i.y), e.lineTo(r + 10, i.y), e.lineTo(r, i.y + 10), e.lineTo(r - 10, i.y), e.moveTo(r - 10, i.y + i.height), e.lineTo(r + 10, i.y + i.height), e.lineTo(r, i.y + i.height - 10), e.lineTo(r - 10, i.y + i.height), e.fill() } }, { name: "Loudness", layer: "content", height: 1, render: (t, r, i, a) => { var n = R(r.analysis.segments, e => e.start, i.start), o = R(r.analysis.segments, e => e.start, i.end), s = e => S(e); t.lineWidth = 2, t.strokeStyle = "white", t.beginPath(); for (let e = n; e <= o + 1 && e < r.analysis.segments.length; e++) { var u = r.analysis.segments[e], l = w(u.start, i.start, i.end, a.x, a.x + a.width), c = w(s(u.loudness_start), 0, 1, a.y + a.height, a.y), f = w(u.start + u.loudness_max_time, i.start, i.end, a.x, a.x + a.width), d = w(s(u.loudness_max), 0, 1, a.y + a.height, a.y); e === n ? t.moveTo(l, c) : t.lineTo(l, c), t.lineTo(f, d), e === r.analysis.segments.length - 1 && (l = w(u.start + u.duration, i.start, i.end, a.x, a.x + a.width), c = w(s(u.loudness_end), 0, 1, a.y + a.height, a.y), t.lineTo(l, c)) } t.stroke() } }, { name: "Confidence", layer: "content", height: .25, render: (t, r, i, a) => { var n = R(r.analysis.segments, e => e.start, i.start), o = R(r.analysis.segments, e => e.start, i.end); t.beginPath(); for (let e = n; e <= o; e++) { var s = r.analysis.segments[e], u = w(s.start, i.start, i.end, a.x, a.x + a.width), l = w(s.start + s.duration, i.start, i.end, a.x, a.x + a.width); t.fillStyle = `rgba(255, 255, 255, ${s.confidence})`, t.fillRect(u, a.y, l - u, a.height) } t.fill() } }, { name: "Timbre", layer: "content", height: 1.5, render: (r, i, a, n) => { var o = n.height / 12, s = R(i.analysis.segments, e => e.start, a.start), u = R(i.analysis.segments, e => e.start, a.end); for (let t = 0; t < 12; t++) { var e = (Math.sqrt(5) - 1) / 2, l = t * e; r.beginPath(); for (let e = s; e <= u; e++) { var c = i.analysis.segments[e], f = w(Math.tanh(.02 * c.timbre[t]), -1, 1, 0, 1), d = w(c.start, a.start, a.end, n.x, n.x + n.width), c = w(c.start + c.duration, a.start, a.end, n.x, n.x + n.width), h = n.y + t / 12 * n.height; r.fillStyle = `hsla(${360 * l}, 100%, 70%, ${f})`, r.fillRect(d, h, c - d, o) } r.fill() } } }, { name: "Pitches", layer: "content", height: 1.5, render: (r, i, a, n) => { var o = n.height / 12, s = R(i.analysis.segments, e => e.start, a.start), u = R(i.analysis.segments, e => e.start, a.end); for (let t = 0; t < 12; t++) { var l = t / 12; r.beginPath(); for (let e = s; e <= u; e++) { var c = i.analysis.segments[e], f = w(c.start, a.start, a.end, n.x, n.x + n.width), d = w(c.start + c.duration, a.start, a.end, n.x, n.x + n.width), h = n.y + t / 12 * n.height; r.fillStyle = `hsla(${360 * l}, 100%, 70%, ${c.pitches[t]})`, r.fillRect(f, h, d - f, o) } r.fill() } } }, { name: "Rhythm", layer: "content", height: .5, render: (r, i, a, n) => { var o = n.height / i.rhythm.length, s = Math.min(o, 20), e = s / 2 / n.width * (a.end - a.start); r.fillStyle = "white", r.beginPath(); for (let t = i.rhythm.length - 1; 0 <= t; t--) { var u = R(i.rhythm[t], e => e, a.start - e), l = R(i.rhythm[t], e => e, a.end + e); for (let e = u; e <= l; e++) { var c = w(i.rhythm[t][e], a.start, a.end, n.x, n.x + n.width), f = n.y + t * o; r.rect(c - s / 2, f, s, o) } } r.fill() } }]; var x = r(i()); var b = r(i()), T = b.default.memo(e => b.default.createElement(Spicetify.ReactComponent.IconComponent, { semanticColor: "textBase", dangerouslySetInnerHTML: { __html: "empty" !== e.name ? Spicetify.SVGIcons[e.name] : void 0 }, iconSize: e.size })), he = b.default.memo(t => b.default.createElement(Spicetify.ReactComponent.Menu, null, b.default.createElement(Spicetify.ReactComponent.MenuSubMenuItem, { displayText: "Renderer" }, t.renderers.map(e => b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.onSelectRenderer(e.id), leadingIcon: b.default.createElement(T, { name: e.id === t.currentRendererId ? "check" : "empty", size: 16 }) }, e.name))), b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.isFullscreen ? t.onExitFullscreen() : t.onEnterFullscreen(), trailingIcon: b.default.createElement(T, { name: t.isFullscreen ? "minimize" : "fullscreen", size: 16 }) }, t.isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"), b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.onOpenWindow(), trailingIcon: b.default.createElement(T, { name: "external-link", size: 16 }) }, "Open Window"))), me = b.default.memo(e => b.default.createElement(Spicetify.ReactComponent.ContextMenu, { trigger: "click", renderInline: e.renderInline, menu: b.default.createElement(he, { ...e }) }, b.default.createElement(Spicetify.ReactComponent.ButtonSecondary, { "aria-label": "menu", className: e.className, iconOnly: () => b.default.createElement(T, { name: "menu", size: 16 }) }))), _ = r(i()); function A(e, t, r = []) { if ("function" != typeof e) return !1; let i = (e => { try { return "function" == typeof e ? Function.prototype.toString.call(e) : String(e) } catch { return "" } })(e); return t.every(e => i.includes(e)) && r.every(e => !i.includes(e)) } function ge(e, t) { return "function" == typeof e && "SERVICE_ID" in e && e.SERVICE_ID === t } function C(e) { return !(!e || "object" != typeof e) && "$$typeof" in e && e.$$typeof === Symbol.for("react.memo") && "type" in e } var D = class { static init() { this.webpack = window.webpackChunkclient_web ?? window.webpackChunkopen, this.require = this.webpack.push([[Symbol()], {}, e => e]), this.refreshModules() } static async loadFiles(e) { this.require || this.init(), await Promise.allSettled(e.map(e => this.require.e(e))), this.refreshModules() } static refreshModules() { this.require || this.init(), this.loadedModules = {}; var e = Object.keys(this.require.m).map(e => { try { return this.require(e) } catch { } }); this.modules = e.filter(e => "object" == typeof e).map(e => { try { return Object.values(e) } catch { } }).flat() } static getValue(e, t) { this.require || this.init(), e in this.loadedModules || (this.loadedModules[e] = t()); t = this.loadedModules[e]; return "failed" === t.state ? null : "succeeded" === t.state ? t.value : void 0 } static getValueFiltered(e, t) { return this.getValue(e, () => { var e = this.modules.filter(t), e = [...new Set(e)]; return 1 === e.length ? { state: "succeeded", value: e[0] } : { state: "failed" } }) } static getMetadataService() { return this.getValueFiltered("metadataService", e => ge(e, "spotify.mdata_esperanto.proto.MetadataService")) } static getOfflinePlayableCache() { return this.getValueFiltered("offlinePlayableCache", e => ge(e, "spotify.offline_playable_cache_esperanto.proto.OfflinePlayableCache")) } static getCreateTransport() { return this.getValueFiltered("createTransport", e => A(e, ["executeEsperantoCall", "cancelEsperantoCall"])) } static getTrackList() { return this.getValueFiltered("trackList", e => C(e) && A(e.type, ["tracks", "nrTracks", "fetchTracks", "itemsCache", "initialItems"])) } static getTrackListItem() { return this.getValueFiltered("trackListItem", e => C(e) && A(e.type, ["displayedColumns", "albumOrShow", "associatedAudioUri"])) } static getCardRenderer() { return this.getValueFiltered("cardRenderer", e => { return !(!(t = e) || "object" != typeof t) && "$$typeof" in t && t.$$typeof === Symbol.for("react.forward_ref") && "render" in t && A(e.render, ["card-title-", "card-subtitle-"]); var t }) } static getStyleSheetManager() { return this.getValueFiltered("styleSheetManager", e => A(e, ["stylisPlugins", "reconstructWithOptions", "disableCSSOMInjection", "disableVendorPrefixes"])) } static getHeartRenderer() { return this.getValueFiltered("heartRenderer", e => C(e) && A(e.type, ["remove-from-library", "add-to-library", "className"], ["isEpisode"])) } static getAlignedCurationRenderer() { return this.getValueFiltered("alignedCurationRenderer", e => C(e) && A(e.type, ["defaultCurationContextUri", "web-player.aligned-curation", "isCurated", "default-curation"])) } }, ye = (D.webpack = null, D.require = null, D.modules = null, D.loadedModules = {}, (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OK = 1] = "OK", e[e.NOT_RESOLVED = 2] = "NOT_RESOLVED", e[e.NOT_FOUND = 3] = "NOT_FOUND", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 4] = "UNAVAILABLE_FOR_LEGAL_REASONS", e))(ye || {})), pe = class { constructor() { var e = D.getMetadataService(), t = D.getCreateTransport(); e && t && (this.serviceDescriptor = e, this.service = new this.serviceDescriptor(t())) } fetch(e, t) { return new Promise((i, a) => { if (this.service && this.serviceDescriptor) { let r = this.service.observe(this.serviceDescriptor.METHODS.observe.requestType.fromPartial({ extensionQuery: [{ entityUri: t, extensionKind: e }] }), e => { try { if (e.pendingResponse) return; r.cancel(); var t = e?.extensionResult?.[0]; if (!t) return void a(0); 1 === t.status ? i(t.extensionData) : a(t.details?.cacheStatus ?? 0) } catch (e) { a(0) } }) } else a(0) }) } fetchAll(i) { return new Promise((r, e) => { if (this.service && this.serviceDescriptor) { let t = this.service.observe(this.serviceDescriptor.METHODS.observe.requestType.fromPartial({ extensionQuery: i.map(e => ({ entityUri: e.uri, extensionKind: e.kind })) }), e => { e.pendingResponse || (t.cancel(), r(e.extensionResult.map(e => { var t = 1 === e.status, r = { uri: e.entityUri, kind: e.extensionKind, success: t }; return t ? { ...r, typeUrl: e.extensionData.typeUrl, value: e.extensionData.value } : { ...r, status: e.details.cacheStatus } }))) }) } else e() }) } }, ve = class { constructor(e) { e instanceof DataView && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), this.buffer = e, this.offset = 0 } getVarIntView() { let e = this.offset; for (; e < this.buffer.length - 1 && 128 & this.buffer[e];)e++; return e++, this.getView(e - this.offset) } getVarInt() { if (this.isExhausted()) return 0n; let e = 0n, t = 0n; for (var r; r = BigInt(this.buffer[this.offset++]), e |= (0x7fn & r) << t, t += 7n, 0x80n & r && !this.isExhausted();); return e } getArray(e) { var e = Math.min(e, this.buffer.length - this.offset), t = this.buffer.slice(this.offset, this.offset + e); return this.offset += e, t } getView(e) { var e = Math.min(e, this.buffer.length - this.offset), t = new DataView(this.buffer.buffer, this.buffer.byteOffset + this.offset, e); return this.offset += e, t } has(e) { return this.buffer.length - this.offset >= e } isExhausted() { return !this.has(1) } }; function Ee(e, t) { return e & 1n << BigInt(8 * t - 1) ? e - (1n << BigInt(8 * t)) : e } function F(t, r) { return [t[0], e => r(t[1](e))] } var E = [0, e => new ve(e).getVarInt()], c = F(E, e => !!e), xe = F(E, Number); F(E, e => Number(Ee(e, 4))), F(E, e => Ee(e, 8)); function L(e, t) { return { id: e, value: t } } function be(t) { return [3, e => { for (var r = new ve(e), i = {}, a = Object.entries(t).map(([e, t]) => ({ name: e, ...t })); !r.isExhausted();) { let t = Number(r.getVarInt()); var n = a.find(e => e.id == t >> 3); if (n && ((e, t) => { switch (t) { case 0: return 0 == (7 & e); case 1: return 5 == (7 & e); case 2: return 1 == (7 & e); case 3: return 2 == (7 & e) } })(t, n.value[0])) { var o = n.value, [s, u] = ((e, t) => { switch (t[0]) { case 1: return e.has(4) ? [!0, t[1](e.getView(4))] : [!1, void 0]; case 2: return e.has(8) ? [!0, t[1](e.getView(8))] : [!1, void 0]; case 0: return [!0, t[1](e.getVarIntView())]; case 3: var r = Number(e.getVarInt()); return [!0, t[1](e.getView(r))] } })(r, o); if (!s) break; o[2] ? (s = i[n.name] ?? [], i[n.name] = s.concat(u)) : i[n.name] = u } else { c = o = l = void 0; var l = r, o = t; switch (7 & o) { case 5: l.getView(4); break; case 1: l.getView(8); break; case 0: l.getVarIntView(); break; case 2: var c = Number(l.getVarInt()); l.getView(c) } } } return i }] } var E = be({ rgb: L(1, xe), isFallback: L(2, c) }), Te = be({ colorRaw: L(1, E), colorLight: L(2, E), colorDark: L(3, E) }); var Re = r(i()); var Se = [{
    id: "ncs", name: "NCS", renderer: function (a) {
      let M = (0, o.useContext)(p); var e = (0, o.useMemo)(() => { if (!a.audioAnalysis) return [{ x: 0, y: 0 }]; var e = a.audioAnalysis.segments; if (!e.length) { let r = a.audioAnalysis.track?.duration || 180, i = [], n = Math.max(8, Math.ceil(2 * r)); for (let e = 0; e <= n; e++) { var o = e / n * r, s = .45 + .18 * Math.sin(2 * Math.PI * o / 2.3) + .1 * Math.sin(2 * Math.PI * o / 0.9 + 1.4); i.push({ x: o, y: Math.min(Math.max(s, 0), 1) }) } return i[0].accumulatedIntegral = 0, i.forEach((e, t) => { 0 < t && (e.accumulatedIntegral = (i[t - 1].accumulatedIntegral ?? 0) + h(i[t - 1], e)) }), i } var t = e.flatMap(e => e.loudness_max_time ? [{ x: e.start, y: S(e.loudness_start) }, { x: e.start + e.loudness_max_time, y: S(e.loudness_max) }] : [{ x: e.start, y: S(e.loudness_start) }]); if (e.length) { t[0].accumulatedIntegral = 0; for (let e = 1; e < t.length; e++) { var r = t[e - 1], i = t[e]; i.accumulatedIntegral = (r.accumulatedIntegral ?? 0) + h(r, i) } e = e[e.length - 1]; t.push({ x: e.start + e.duration, y: S(e.loudness_end) }) } return t }, [a.audioAnalysis]), t = a.audioAnalysis?.meta?.timestamp ?? 0, r = (0, o.useCallback)(a => { if (!a) return M("Error: WebGL2 is not supported", 2), { isError: !0 }; let dbg = a.getExtension("WEBGL_debug_renderer_info"); if (dbg) console.log("[Visualizer WebGL Renderer]:", a.getParameter(dbg.UNMASKED_RENDERER_WEBGL)); if (!a.getExtension("EXT_color_buffer_float")) return M("Error: Rendering to floating-point textures is not supported", 2), { isError: !0 }; var e = (e, t, r) => { e = a.createShader(e); return a.shaderSource(e, t), a.compileShader(e), a.getShaderParameter(e, a.COMPILE_STATUS) || a.isContextLost() ? e : (t = `Error: Failed to compile '${r}' shader`, r = a.getShaderInfoLog(e), console.error("[Visualizer] " + t, r), M(t, 2), null) }, t = (e, t, r) => { var i = a.createProgram(); return a.attachShader(i, e), a.attachShader(i, t), a.linkProgram(i), a.getProgramParameter(i, a.LINK_STATUS) || a.isContextLost() ? i : (e = `Error: Failed to link '${r}' shader`, t = a.getProgramInfoLog(i), console.error("[Visualizer] " + e, t), M(e, 2), null) }, r = e => { var t = a.createFramebuffer(), r = (a.bindFramebuffer(a.FRAMEBUFFER, t), a.createTexture()); return a.bindTexture(a.TEXTURE_2D, r), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, r, 0), { framebuffer: t, texture: r } }, i = e(a.VERTEX_SHADER, `#version 300 es

in vec2 inPosition;
out vec2 fragUV;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
}
`, "particle vertex"); if (!i) return { isError: !0 }; var n = e(a.FRAGMENT_SHADER, `#version 300 es
precision highp float;

uniform float uNoiseOffset;
uniform float uAmplitude;
uniform int uSeed;

uniform float uDotSpacing;
uniform float uDotOffset;

uniform float uSphereRadius;
uniform float uFeather;

uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;

in vec2 fragUV;
out vec2 outColor;

// https://github.com/Auburn/FastNoiseLite

const float FREQUENCY = 0.01;

const float GAIN = 0.5;
const float LACUNARITY = 1.5;
const float FRACTAL_BOUNDING = 1.0 / 1.75;

const ivec3 PRIMES = ivec3(501125321, 1136930381, 1720413743);

const float GRADIENTS_3D[] = float[](
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    0., 1., 1., 0.,  0.,-1., 1., 0.,  0., 1.,-1., 0.,  0.,-1.,-1., 0.,
    1., 0., 1., 0., -1., 0., 1., 0.,  1., 0.,-1., 0., -1., 0.,-1., 0.,
    1., 1., 0., 0., -1., 1., 0., 0.,  1.,-1., 0., 0., -1.,-1., 0., 0.,
    1., 1., 0., 0.,  0.,-1., 1., 0., -1., 1., 0., 0.,  0.,-1.,-1., 0.
);

float smootherStep(float t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
vec3 smootherStep(vec3 coord) {
    return vec3(smootherStep(coord.x), smootherStep(coord.y), smootherStep(coord.z));
}

int hash(int seed, ivec3 primed) {
    return (seed ^ primed.x ^ primed.y ^ primed.z) * 0x27d4eb2d;
}

float gradCoord(int seed, ivec3 primed, vec3 d) {
    int hash = hash(seed, primed);
    hash ^= hash >> 15;
    hash &= 63 << 2;
    return d.x * GRADIENTS_3D[hash] + d.y * GRADIENTS_3D[hash | 1] + d.z * GRADIENTS_3D[hash | 2];
}

float perlinSingle(int seed, vec3 coord) {
    ivec3 coord0 = ivec3(floor(coord));
    vec3 d0 = coord - vec3(coord0);
    vec3 d1 = d0 - 1.0;
    vec3 s = smootherStep(d0);
    coord0 *= PRIMES;
    ivec3 coord1 = coord0 + PRIMES;
    float xf00 = mix(gradCoord(seed,                              coord0,                     d0), gradCoord(seed,          ivec3(coord1.x, coord0.yz),      vec3(d1.x, d0.yz)), s.x);
    float xf10 = mix(gradCoord(seed, ivec3(coord0.x, coord1.y, coord0.z), vec3(d0.x, d1.y, d0.z)), gradCoord(seed,          ivec3(coord1.xy, coord0.z),      vec3(d1.xy, d0.z)), s.x);
    float xf01 = mix(gradCoord(seed,          ivec3(coord0.xy, coord1.z),      vec3(d0.xy, d1.z)), gradCoord(seed, ivec3(coord1.x, coord0.y, coord1.z), vec3(d1.x, d0.y, d1.z)), s.x);
    float xf11 = mix(gradCoord(seed,          ivec3(coord0.x, coord1.yz),      vec3(d0.x, d1.yz)), gradCoord(seed,                              coord1,                     d1), s.x);
    float yf0 = mix(xf00, xf10, s.y);
    float yf1 = mix(xf01, xf11, s.y);
    return mix(yf0, yf1, s.z) * 0.964921414852142333984375f;
}

float fractalNoise(vec3 coord) {
    return perlinSingle(uSeed, coord) * FRACTAL_BOUNDING
        + perlinSingle(uSeed + 1, coord * LACUNARITY) * FRACTAL_BOUNDING * GAIN
        + perlinSingle(uSeed + 2, coord * LACUNARITY * LACUNARITY) * FRACTAL_BOUNDING * GAIN * GAIN;
}

void main() {
    float noise = fractalNoise(vec3(fragUV * uNoiseFrequency, uNoiseOffset)) * uNoiseAmplitude;
    vec3 dotCenter = vec3(fragUV * uDotSpacing + uDotOffset + noise, (noise + 0.5 * uNoiseAmplitude) * uAmplitude * 0.4);
    
    float distanceFromCenter = length(dotCenter);
    dotCenter /= distanceFromCenter;
    distanceFromCenter = min(uSphereRadius, distanceFromCenter);
    dotCenter *= distanceFromCenter;

    float featherRadius = uSphereRadius - uFeather;
    float featherStrength = 1.0 - clamp((distanceFromCenter - featherRadius) / uFeather, 0.0, 1.0);
    dotCenter *= featherStrength * (uSphereRadius / distanceFromCenter - 1.0) + 1.0;

    dotCenter.y *= -1.0;
    outColor = dotCenter.xy;
}
`, "particle fragment"); if (!n) return { isError: !0 }; var o, s, u, l, c, f, d, h, m, g, y, p, v, E, x, b, T, R, S, w, _, A, C, D, F, L, P, U, I, O, N, i = t(i, n, "particle"); if (i) return n = a.getAttribLocation(i, "inPosition"), o = a.getUniformLocation(i, "uNoiseOffset"), s = a.getUniformLocation(i, "uAmplitude"), u = a.getUniformLocation(i, "uSeed"), l = a.getUniformLocation(i, "uDotSpacing"), c = a.getUniformLocation(i, "uDotOffset"), f = a.getUniformLocation(i, "uSphereRadius"), d = a.getUniformLocation(i, "uFeather"), h = a.getUniformLocation(i, "uNoiseFrequency"), m = a.getUniformLocation(i, "uNoiseAmplitude"), (g = e(a.VERTEX_SHADER, `#version 300 es

uniform int uDotCount;
uniform float uDotRadius;
uniform float uDotRadiusPX;

uniform sampler2D uParticleTexture;

in vec2 inPosition;

out vec2 fragUV;
out float fragDotRadiusPX;

void main() {
    ivec2 dotIndex = ivec2(gl_InstanceID % uDotCount, gl_InstanceID / uDotCount);
    vec2 dotCenter = texelFetch(uParticleTexture, dotIndex, 0).xy;

    gl_Position = vec4(dotCenter + inPosition * uDotRadius * (1.0 + 1.0 / uDotRadiusPX), 0.0, 1.0);
    fragUV = inPosition;
    fragDotRadiusPX = uDotRadiusPX + 1.0;
}
`, "dot vertex")) && (y = e(a.FRAGMENT_SHADER, `#version 300 es
precision highp float;

in vec2 fragUV;
in float fragDotRadiusPX;
out float outColor;

void main() {
    float t = clamp((1.0 - length(fragUV)) * fragDotRadiusPX, 0.0, 1.0);
    outColor = t;
}
`, "dot fragment")) && (g = t(g, y, "dot")) && (y = a.getAttribLocation(g, "inPosition"), p = a.getUniformLocation(g, "uDotCount"), v = a.getUniformLocation(g, "uDotRadius"), E = a.getUniformLocation(g, "uDotRadiusPX"), x = a.getUniformLocation(g, "uParticleTexture"), b = e(a.VERTEX_SHADER, `#version 300 es

uniform float uBlurRadius;
uniform vec2 uBlurDirection;

in vec2 inPosition;

out vec2 fragUV;
flat out vec2 fragBlurDirection;
flat out int fragSupport;
flat out vec3 fragGaussCoefficients;

float calculateGaussianTotal(int support, vec3 fragGaussCoefficients) {
    float total = fragGaussCoefficients.x;
    for (int i = 1; i < support; i++) {
        fragGaussCoefficients.xy *= fragGaussCoefficients.yz;
        total += 2.0 * fragGaussCoefficients.x;
    }
    return total;
}

void main() {
    fragSupport = int(ceil(1.5 * uBlurRadius)) * 2;
    fragGaussCoefficients = vec3(1.0 / (sqrt(2.0 * 3.14159265) * uBlurRadius), exp(-0.5 / (uBlurRadius * uBlurRadius)), 0.0);
    fragGaussCoefficients.z = fragGaussCoefficients.y * fragGaussCoefficients.y;
    fragGaussCoefficients.x /= calculateGaussianTotal(fragSupport, fragGaussCoefficients);

    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragBlurDirection = uBlurDirection;
}
`, "blur vertex")) && (T = e(a.FRAGMENT_SHADER, `#version 300 es
precision highp float;

uniform sampler2D uInputTexture;

in vec2 fragUV;
flat in vec2 fragBlurDirection;
flat in int fragSupport;
flat in vec3 fragGaussCoefficients;

out float outColor;

void main() {
    vec3 gaussCoefficients = fragGaussCoefficients;
    outColor = gaussCoefficients.x * texture(uInputTexture, fragUV).r;

    for (int i = 1; i < fragSupport; i += 2) {
        gaussCoefficients.xy *= gaussCoefficients.yz;
        float coefficientSum = gaussCoefficients.x;
        gaussCoefficients.xy *= gaussCoefficients.yz;
        coefficientSum += gaussCoefficients.x;

        float pixelRatio = gaussCoefficients.x / coefficientSum;
        vec2 offset = (float(i) + pixelRatio) * fragBlurDirection;

        outColor += coefficientSum * (texture(uInputTexture, fragUV + offset).r + texture(uInputTexture, fragUV - offset).r);
    }
}
`, "blur fragment")) && (b = t(b, T, "blur")) && (T = a.getAttribLocation(b, "inPosition"), R = a.getUniformLocation(b, "uBlurRadius"), S = a.getUniformLocation(b, "uBlurDirection"), w = a.getUniformLocation(b, "uInputTexture"), _ = e(a.VERTEX_SHADER, `#version 300 es

uniform vec3 uOutputColor;
in vec2 inPosition;

out vec2 fragUV;
out vec3 fragOutputColor;

void main() {
    gl_Position = vec4(inPosition, 0.0, 1.0);
    fragUV = (inPosition + 1.0) / 2.0;
    fragOutputColor = uOutputColor;
}
`, "finalize vertex")) && (e = e(a.FRAGMENT_SHADER, `#version 300 es
precision highp float;

uniform sampler2D uBlurredTexture;
uniform sampler2D uOriginalTexture;

in vec2 fragUV;
in vec3 fragOutputColor;

out vec4 outColor;

void main() {
    float value = max(texture(uBlurredTexture, fragUV).r, texture(uOriginalTexture, fragUV).r);
    outColor = vec4(fragOutputColor * value, value);
}
`, "finalize fragment")) && (t = t(_, e, "finalize")) ? (_ = a.getAttribLocation(t, "inPosition"), e = a.getUniformLocation(t, "uOutputColor"), A = a.getUniformLocation(t, "uBlurredTexture"), C = a.getUniformLocation(t, "uOriginalTexture"), { framebuffer: D, texture: F } = r(a.NEAREST), { framebuffer: L, texture: P } = r(a.NEAREST), { framebuffer: U, texture: I } = r(a.LINEAR), { framebuffer: r, texture: O } = r(a.NEAREST), N = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, N), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), a.STATIC_DRAW), a.enable(a.BLEND), a.blendEquation(a.MAX), { isError: !1, particleShader: i, dotShader: g, blurShader: b, finalizeShader: t, viewportSize: 0, particleTextureSize: 0, inPositionLoc: n, inPositionLocDot: y, inPositionLocBlur: T, inPositionLocFinalize: _, uNoiseOffsetLoc: o, uAmplitudeLoc: s, uSeedLoc: u, uDotSpacingLoc: l, uDotOffsetLoc: c, uSphereRadiusLoc: f, uFeatherLoc: d, uNoiseFrequencyLoc: h, uNoiseAmplitudeLoc: m, uDotCountLoc: p, uDotRadiusLoc: v, uDotRadiusPXLoc: E, uParticleTextureLoc: x, uBlurRadiusLoc: R, uBlurDirectionLoc: S, uBlurInputTextureLoc: w, uOutputColorLoc: e, uBlurredTextureLoc: A, uOriginalTextureLoc: C, quadBuffer: N, particleFramebuffer: D, particleTexture: F, dotFramebuffer: L, dotTexture: P, blurXFramebuffer: U, blurXTexture: I, blurYFramebuffer: r, blurYTexture: O }) : { isError: !0 }; return { isError: !0 }
      }, []), i = (0, o.useCallback)((e, t) => { !t.isError && e && (t.viewportSize = Math.min(1440, Math.min(e.canvas.width, e.canvas.height)), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.bindTexture(e.TEXTURE_2D, t.dotTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null), e.bindTexture(e.TEXTURE_2D, t.blurXTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null), e.bindTexture(e.TEXTURE_2D, t.blurYTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null)) }, []), n = (0, o.useCallback)((n, e, t) => { if (!t.isError && n) { let i = null, a = []; if (window.do_ncs_perf_test) { i = n.getExtension("EXT_disjoint_timer_query_webgl2"); for (let e = 0; e < 4; e++)a[e] = n.createQuery() } var now = performance.now(); if (!t.lastFrameTime) { t.lastFrameTime = now; t.smoothProgress = Spicetify.Player.getProgress() / 1000; } var dt = (now - t.lastFrameTime) / 1000; t.lastFrameTime = now; if (e.isPlaying) { t.smoothProgress += dt; var actualProgress = Spicetify.Player.getProgress() / 1000; if (Math.abs(t.smoothProgress - actualProgress) > 0.8) { t.smoothProgress = actualProgress; } } else { t.smoothProgress = Spicetify.Player.getProgress() / 1000; } var r = t.smoothProgress, o = 75 * (.5 * r + (l = (e.amplitudeCurve && e.amplitudeCurve.length ? e.amplitudeCurve : [{ x: 0, y: 0.001, accumulatedIntegral: 0 }, { x: 1e9, y: 0.001, accumulatedIntegral: 0 }]), o = R(l, e => e.x, s = r), u = l[o], l.length <= o + 1 ? (u.accumulatedIntegral ?? 0) + u.y * (s - u.x) : (l = { x: s, y: w(s, u.x, (s = l[o + 1]).x, u.y, s.y) }, (u.accumulatedIntegral ?? 0) + h(u, l)))) * .01, s = ((i, e, t) => { if (!i || !i.length) return 0; if (0 == t) return z(i, e => e.x, e => e.y, e => e, e); var r, a = e - t / 2, e = e + t / 2, n = R(i, e => e.x, a), o = R(i, e => e.x, e); let s = 0; if (n == o) return u = i[n], i.length - 2 < n ? u.y : (w(a, u.x, (r = i[n + 1]).x, u.y, r.y) + w(e, u.x, r.x, u.y, r.y)) / 2; { let t = i[n], r = i[n + 1]; var u = { x: a, y: w(a, t.x, r.x, t.y, r.y) }; s = h(u, r); for (let e = n + 1; e < o; e++)t = r, r = i[e + 1], s += h(t, r); t = r, i.length - 2 < o ? s += t.y * (e - t.x) : (r = i[o + 1], u = { x: e, y: w(e, t.x, r.x, t.y, r.y) }, s += h(t, u)) } return s / t })(e.amplitudeCurve, r, .15), u = e.seed, l = 240, r = .9 / l, c = .5 * r * t.viewportSize, f = w(s, 0, 1, .73, .86), d = Math.pow(s + 3, 2) * (45 / 1568); if (t.particleTextureSize !== l && (t.particleTextureSize = l, n.bindTexture(n.TEXTURE_2D, t.particleTexture), n.texImage2D(n.TEXTURE_2D, 0, n.RG32F, l, l, 0, n.RG, n.FLOAT, null)), window.do_ncs_perf_test && n.beginQuery(i.TIME_ELAPSED_EXT, a[0]), n.disable(n.BLEND), n.bindFramebuffer(n.FRAMEBUFFER, t.particleFramebuffer), n.viewport(0, 0, l, l), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.particleShader), n.uniform1f(t.uNoiseOffsetLoc, o), n.uniform1f(t.uAmplitudeLoc, s), n.uniform1i(t.uSeedLoc, u), n.uniform1f(t.uDotSpacingLoc, .9), n.uniform1f(t.uDotOffsetLoc, -.45), n.uniform1f(t.uSphereRadiusLoc, f), n.uniform1f(t.uFeatherLoc, d), n.uniform1f(t.uNoiseFrequencyLoc, 4), n.uniform1f(t.uNoiseAmplitudeLoc, .32 * .9), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLoc), n.vertexAttribPointer(t.inPositionLoc, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[1])), n.enable(n.BLEND), n.bindFramebuffer(n.FRAMEBUFFER, t.dotFramebuffer), n.viewport(0, 0, t.viewportSize, t.viewportSize), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.dotShader), n.uniform1i(t.uDotCountLoc, l), n.uniform1f(t.uDotRadiusLoc, r), n.uniform1f(t.uDotRadiusPXLoc, c), n.uniform1i(t.uParticleTextureLoc, 0), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.particleTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocDot), n.vertexAttribPointer(t.inPositionLocDot, 2, n.FLOAT, !1, 0, 0), n.drawArraysInstanced(n.TRIANGLE_FAN, 0, 4, l * l), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[2])), n.bindFramebuffer(n.FRAMEBUFFER, t.blurXFramebuffer), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.blurShader), n.uniform1f(t.uBlurRadiusLoc, .01 * t.viewportSize), n.uniform2f(t.uBlurDirectionLoc, 1 / t.viewportSize, 0), n.uniform1i(t.uBlurInputTextureLoc, 0), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.dotTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocBlur), n.vertexAttribPointer(t.inPositionLocBlur, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), n.bindFramebuffer(n.FRAMEBUFFER, t.blurYFramebuffer), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.uniform2f(t.uBlurDirectionLoc, 0, 1 / t.viewportSize), n.bindTexture(n.TEXTURE_2D, t.blurXTexture), n.drawArrays(n.TRIANGLE_FAN, 0, 4), n.bindFramebuffer(n.FRAMEBUFFER, null), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[3])), n.useProgram(t.finalizeShader), n.uniform3f(t.uOutputColorLoc, e.themeColor.rgb.r / 255, e.themeColor.rgb.g / 255, e.themeColor.rgb.b / 255), n.uniform1i(t.uBlurredTextureLoc, 0), n.uniform1i(t.uOriginalTextureLoc, 1), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.blurYTexture), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, t.dotTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocFinalize), n.vertexAttribPointer(t.inPositionLocFinalize, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), window.do_ncs_perf_test) { n.endQuery(i.TIME_ELAPSED_EXT), window.do_ncs_perf_test = !1; let r = () => { var e, t; 0 !== a.length && (t = n.getParameter(i.GPU_DISJOINT_EXT), e = a.map(e => n.getQueryParameter(e, n.QUERY_RESULT_AVAILABLE)).reduce((e, t) => e && t, !0), t ? (a.map(e => n.deleteQuery(e)), console.log("NCS PERF RESULT: FAILED (disjoint)"), a.length = 0) : e ? (t = a.map(e => n.getQueryParameter(e, n.QUERY_RESULT)), console.log("NCS PERF RESULT: ", t), window.ncs_perf_test_out || (window.ncs_perf_test_out = []), window.ncs_perf_test_out.push(t), a.length = 0) : window.requestAnimationFrame(r)) }; r() } } }, []); return o.default.createElement(s, { isEnabled: a.isEnabled, data: { themeColor: a.themeColor, seed: t, amplitudeCurve: e, isPlaying: a.isPlaying }, contextType: "webgl2", onInit: r, onResize: i, onRender: n, style: { width: "100%", height: "100%", objectFit: "contain" }, sizeConstraint: (e, t) => { e = Math.min(e, t); return { width: e, height: e } } })
    }
  }]; function _injectFonts(doc) {
    if (!doc) return;
    try {
      if (!doc.querySelector("link[data-visualizer-fonts='true']")) {
        var p1 = doc.createElement("link");
        p1.rel = "preconnect";
        p1.href = "https://fonts.googleapis.com";
        p1.setAttribute("data-visualizer-fonts", "true");
        doc.head.appendChild(p1);

        var p2 = doc.createElement("link");
        p2.rel = "preconnect";
        p2.href = "https://fonts.gstatic.com";
        p2.crossOrigin = "anonymous";
        p2.setAttribute("data-visualizer-fonts", "true");
        doc.head.appendChild(p2);

        var fl = doc.createElement("link");
        fl.rel = "stylesheet";
        fl.href = "https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Rubik+Spray+Paint&family=Sniglet:wght@400;800&family=Palanquin+Dark:wght@400;500;600;700&display=swap";
        fl.setAttribute("data-visualizer-fonts", "true");
        doc.head.appendChild(fl);

        var fl2 = doc.createElement("link");
        fl2.rel = "stylesheet";
        fl2.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        fl2.setAttribute("data-visualizer-fonts", "true");
        doc.head.appendChild(fl2);

        var fl3 = doc.createElement("link");
        fl3.rel = "stylesheet";
        fl3.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
        fl3.setAttribute("data-visualizer-fonts", "true");
        doc.head.appendChild(fl3);
      }
    } catch (e) { }
  }
  var _lyricsMemCache = new Map();
  var _cachedTrackId = "";
  var _cachedLyrics = undefined;
  var _fetching = false;

  // ---- Auto-update (download + spicetify apply) & lyrics romanization pipeline ----
  var _LOCAL_SHA = "433fcd8651b74cacef7ec989805c270bf53eca5f";
    var _UPDATE_REPO = "WatashiAD/ncs-visualiser";
    var _UPDATE_BRANCH = "main";
    var _UPDATE_FILES = ["index.js", "style.css", "manifest.json"];

    // ---- Lyrics romanization (SpicyLyrics-compatible client pipeline) ----
    var _JS_TEXT_TEST = /[ぁ-んァ-ン]/;
    var _ZH_TEXT_TEST = /[一-鿿]/;
    var _KR_TEXT_TEST = /[가-힯]|[ᄀ-ᇿ]|[㄰-㆏]|[ꥠ-꥿]|[ힰ-퟿]/;
    var _CYR_TEXT_TEST = /[Ѐ-ӿԀ-ԯⷠ-ⷿꙀ-ꚟ]/;
    var _GRK_TEXT_TEST = /[Ͱ-Ͽἀ-῿]/;

    var _CYR_MAP = { "а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"shch","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"E","Ж":"Zh","З":"Z","И":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"Kh","Ц":"Ts","Ч":"Ch","Ш":"Sh","Щ":"Shch","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya" };

    var _GRK_MAP = { "ά":"a","έ":"e","ή":"i","ί":"i","ό":"o","ύ":"y","ώ":"o","Ά":"A","Έ":"E","Ή":"I","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"O","ϊ":"i","ΐ":"i","ϋ":"y","ΰ":"y","ϐ":"v","ϑ":"th","ϕ":"f","ϖ":"p","ϒ":"Y","ϓ":"Y","ϔ":"Y", "α":"a","Α":"A","β":"v","Β":"V","γ":"g","Γ":"G","δ":"d","Δ":"D","ε":"e","Ε":"E","ζ":"z","Ζ":"Z","η":"i","Η":"I","θ":"th","Θ":"Th","ι":"i","Ι":"I","κ":"k","Κ":"K","λ":"l","Λ":"L","μ":"m","Μ":"M","ν":"n","Ν":"N","ξ":"x","Ξ":"X","ο":"o","Ο":"O","π":"p","Π":"P","ρ":"r","Ρ":"R","σ":"s","ς":"s","τ":"t","Τ":"T","υ":"y","Υ":"Y","φ":"f","Φ":"F","χ":"ch","Χ":"Ch","ψ":"ps","Ψ":"Ps","ω":"o","Ω":"O" };

    var _KANA = { "あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"o","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o","ゔ":"vu","ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o","カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko","サ":"sa","シ":"shi","ス":"su","セ":"se","ソ":"so","タ":"ta","チ":"chi","ツ":"tsu","テ":"te","ト":"to","ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no","ハ":"ha","ヒ":"hi","フ":"fu","ヘ":"he","ホ":"ho","マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo","ヤ":"ya","ユ":"yu","ヨ":"yo","ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro","ワ":"wa","ヲ":"o","ン":"n","ガ":"ga","ギ":"gi","グ":"gu","ゲ":"ge","ゴ":"go","ザ":"za","ジ":"ji","ズ":"zu","ゼ":"ze","ゾ":"zo","ダ":"da","ヂ":"ji","ヅ":"zu","デ":"de","ド":"do","バ":"ba","ビ":"bi","ブ":"bu","ベ":"be","ボ":"bo","パ":"pa","ピ":"pi","プ":"pu","ペ":"pe","ポ":"po","ァ":"a","ィ":"i","ゥ":"u","ェ":"e","ォ":"o","ヴ":"vu","キャ":"kya","キュ":"kyu","キョ":"kyo","シャ":"sha","シュ":"shu","ショ":"sho","チャ":"cha","チュ":"chu","チョ":"cho","ニャ":"nya","ニュ":"nyu","ニョ":"nyo","ヒャ":"hya","ヒュ":"hyu","ヒョ":"hyo","ミャ":"mya","ミュ":"myu","ミョ":"myo","リャ":"rya","リュ":"ryu","リョ":"ryo","ギャ":"gya","ギュ":"gyu","ギョ":"gyo","ジャ":"ja","ジュ":"ju","ジョ":"jo","ヂャ":"ja","ヂュ":"ju","ヂョ":"jo","ビャ":"bya","ビュ":"byu","ビョ":"byo","ピャ":"pya","ピュ":"pyu","ピョ":"pyo","きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo" };
    var _KANA_SMALL_TA = "っッ";
    var _KANA_LONG = "ー";
    var _KANA_KOMBINE = { "し":"sh","ち":"ch","じ":"j","ぢ":"j","き":"k","ぎ":"g","に":"n","ひ":"h","び":"b","ぴ":"p","み":"m","り":"r","シ":"sh","チ":"ch","ジ":"j","ヂ":"j","キ":"k","ギ":"g","ニ":"n","ヒ":"h","ビ":"b","ピ":"p","ミ":"m","リ":"r" };
    var _KANA_SMALL = { "ゃ":"ya","ゅ":"yu","ょ":"yo","ャ":"ya","ュ":"yu","ョ":"yo" };

    function _kanaToRomaji(txt) {
      var out = "", pendingTsu = false;
      for (var i = 0; i < txt.length; i++) {
        var ch = txt[i];
        if (_KANA_SMALL_TA.indexOf(ch) >= 0) { pendingTsu = true; continue; }
        if (_KANA[ch]) {
          var r;
          if (ch in _KANA_KOMBINE && i + 1 < txt.length && _KANA_SMALL[txt[i + 1]]) {
            r = _KANA_KOMBINE[ch] + _KANA_SMALL[txt[i + 1]];
            i++;
          } else {
            r = _KANA[ch];
          }
          if (pendingTsu) { r = _geminateTsu(r); pendingTsu = false; }
          out += r;
        } else if (_KANA_LONG.indexOf(ch) >= 0) {
          var last = out[out.length - 1];
          if (last && "aeiou".indexOf(last) >= 0) out += last;
        } else {
          out += ch;
        }
      }
      return out;
    }
    function _geminateTsu(r) {
      if (r.slice(0, 2) === "ts") return "tt" + r.slice(2);
      if (r.slice(0, 2) === "ch") return "tch" + r.slice(2);
      if (r.slice(0, 2) === "sh") return "ss" + r.slice(2);
      if (r.slice(0, 1) === "j") return "jj" + r.slice(1);
      if ("kgsztdbpfh".indexOf(r[0]) >= 0) return r[0] + r;
      return r;
    }

    var _HCHO = ["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"];
    var _HJOONG = ["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","wo","we","wi","yu","eu","ui","i"];
    var _HJONG = ["","k","k","ks","n","nj","nh","t","l","lk","lm","lb","ls","lt","lp","lh","m","p","ps","t","tt","ng","t","ch","k","t","p","h"];

    function _hangulToRomaji(txt) {
      var out = "";
      var re = /[\uac00-\ud7a3]/g;
      var last = 0, m;
      while ((m = re.exec(txt))) {
        out += txt.slice(last, m.index);
        var c = txt.charCodeAt(m.index) - 0xac00;
        var cho = Math.floor(c / (21 * 28));
        var jung = Math.floor(c / 28) % 21;
        var jong = c % 28;
        out += _HCHO[cho] + _HJOONG[jung];
        if (jong > 0) out += _HJONG[jong];
        last = m.index + 1;
      }
      out += txt.slice(last);
      return out;
    }

    function _cyrillicToLatin(txt) {
      var out = "";
      for (var i = 0; i < txt.length; i++) out += _CYR_MAP[txt[i]] !== undefined ? _CYR_MAP[txt[i]] : txt[i];
      return out;
    }

    function _greekToLatin(txt) {
      var out = "";
      for (var i = 0; i < txt.length; i++) out += _GRK_MAP[txt[i]] !== undefined ? _GRK_MAP[txt[i]] : txt[i];
      return out;
    }

    var _convPromises = {};
    function _loadConv(name) {
      if (_convPromises[name]) return _convPromises[name];
      var pr;
      if (name === "kuroshiro") {
        pr = (async function () {
          var Kuroshiro = (await import(/* webpackIgnore: true */ "https://esm.sh/kuroshiro@1.2.0")).default;
          var KuromojiAnalyzer = (await import(/* webpackIgnore: true */ "https://esm.sh/kuroshiro-analyzer-kuromoji@1.1.0")).default;
          var k = new Kuroshiro();
          await k.init(new KuromojiAnalyzer());
          return { conv: function (t) { return k.convert(t, { to: "romaji", mode: "spaced" }); } };
        })();
      } else if (name === "pinyin") {
        pr = (async function () {
          var mod = await import(/* webpackIgnore: true */ "https://pkgs.spikerko.org/pinyin/pinyin@4.0.0.mjs");
          var fn = (mod && (mod.default || {}).pinyin) || (mod && mod.pinyin);
          return { conv: function (t) { return fn ? fn(t, { segment: false, group: true }).join("-") : null; } };
        })();
      } else if (name === "aromanize") {
        pr = (async function () {
          var mod = await import(/* webpackIgnore: true */ "https://pkgs.spikerko.org/aromanize/aromanize@1.0.0.js");
          var fn = mod && ((mod.default && mod.default.default) || mod.default || mod);
          return { conv: function (t) { return typeof fn === "function" ? fn(t, "RevisedRomanizationTransliteration") : null; } };
        })();
      } else {
        pr = Promise.resolve(null);
      }
      _convPromises[name] = pr;
      if (pr && pr.catch) pr.catch(function () { delete _convPromises[name]; });
      return pr;
    }

    function _chooseScript(text) {
      if (_JS_TEXT_TEST.test(text)) return "japanese";
      if (_ZH_TEXT_TEST.test(text)) return "chinese";
      if (_KR_TEXT_TEST.test(text)) return "korean";
      if (_CYR_TEXT_TEST.test(text)) return "cyrillic";
      if (_GRK_TEXT_TEST.test(text)) return "greek";
      return null;
    }

    function _romanizeSimple(txt, script) {
      if (txt === undefined || txt === null) return null;
      var out = txt;
      if (script === "cyrillic") out = _cyrillicToLatin(out);
      else if (script === "greek") out = _greekToLatin(out);
      else if (script === "korean") out = _hangulToRomaji(out);
      else if (script === "japanese") out = _kanaToRomaji(out);
      else return null;
      return out !== txt ? out : null;
    }

    function _cleanRomanized(v) {
      if (typeof v !== "string") return v;
      v = v.replace(/\s+/g, " ").trim();
      v = v.replace(/\s+([\)\]\},;.:!?〜～♪♫♬、。！？」）…])/g, "$1");
      return v;
    }

    function _setTranslit(target, line, value) {
      if (!value || value === "" || typeof value !== "string" || target.TransliteratedText !== undefined) return false;
      var cleaned = _cleanRomanized(value);
      target.TransliteratedText = cleaned || value;
      if (line) line.HasTransliterations = true;
      return true;
    }

    async function _romanizeLyrics(lyrics) {
      if (!lyrics || !lyrics.Content || !Array.isArray(lyrics.Content) || (lyrics.Type !== "Line" && lyrics.Type !== "Syllable")) return lyrics;
      try {
        var probe = "";
        for (var q = 0; q < lyrics.Content.length; q++) {
          var item = lyrics.Content[q];
          if (!item) continue;
          if (lyrics.Type === "Syllable") {
            if (item.Lead) { var ls = item.Lead.Syllables || []; for (var u = 0; u < ls.length; u++) probe += (ls[u].Text || "") + "\n"; }
            if (item.Background) for (var v = 0; v < item.Background.length; v++) { var bg = item.Background[v] || {}; var bs = bg.Syllables || []; for (var w = 0; w < bs.length; w++) probe += (bs[w].Text || "") + "\n"; }
          } else if (item.Type === "Vocal" && item.Text) probe += item.Text + "\n";
        }
        var script = _chooseScript(probe);
        if (!script) return lyrics;
        var jp = script === "japanese", cn = script === "chinese", kor = script === "korean";
        var jpConv = null;
        if (jp) { try { var m1 = await _loadConv("kuroshiro"); jpConv = m1 ? m1.conv : null; } catch (e) { jpConv = null; } }
        var cnConv = null;
        if (cn) { try { var m2 = await _loadConv("pinyin"); cnConv = m2 ? m2.conv : null; } catch (e2) { cnConv = null; } }
        var korConv = null;
        if (kor) { try { var m3 = await _loadConv("aromanize"); korConv = m3 ? m3.conv : null; } catch (e3) { korConv = null; } }

        var any = false;
        for (var i = 0; i < lyrics.Content.length; i++) {
          var it = lyrics.Content[i];
          if (!it) continue;
          if (lyrics.Type === "Syllable") {
            var groups = [];
            if (it.Lead && it.Lead.Syllables) groups.push({ line: it, syl: it.Lead.Syllables });
            if (it.Background) for (var b = 0; b < it.Background.length; b++) if (it.Background[b] && it.Background[b].Syllables) groups.push({ line: it, syl: it.Background[b].Syllables });
            for (var g = 0; g < groups.length; g++) {
              for (var s = 0; s < groups[g].syl.length; s++) {
                var sy = groups[g].syl[s];
                if (!sy || !sy.Text || sy.TransliteratedText) continue;
                var v = null;
                if (jp) { if (jpConv) { try { v = await jpConv(sy.Text); } catch (e4) { v = null; } } if (!v) v = _romanizeSimple(sy.Text, "japanese"); }
                else if (cn && cnConv) { try { v = cnConv(sy.Text); } catch (e5) { v = null; } }
                else if (kor) { if (korConv) { try { v = korConv(sy.Text); } catch (e6) { v = null; } } if (!v) v = _romanizeSimple(sy.Text, "korean"); }
                else if (script === "cyrillic" || script === "greek") v = _romanizeSimple(sy.Text, script);
                if (_setTranslit(sy, groups[g].line, v)) any = true;
              }
            }
          } else if (it.Type === "Vocal" && it.Text) {
            if (it.TransliteratedText) continue;
            var val = null;
            if (jp) { if (jpConv) { try { val = await jpConv(it.Text); } catch (e7) { val = null; } } if (!val) val = _romanizeSimple(it.Text, "japanese"); }
            else if (cn && cnConv) { try { val = cnConv(it.Text); } catch (e8) { val = null; } }
            else if (kor) { if (korConv) { try { val = korConv(it.Text); } catch (e9) { val = null; } } if (!val) val = _romanizeSimple(it.Text, "korean"); }
            else if (script === "cyrillic" || script === "greek") val = _romanizeSimple(it.Text, script);
            if (_setTranslit(it, it, val)) any = true;
          }
        }
        if (any) lyrics.HasTransliterations = true;
      } catch (e) {
        console.warn("[Visualizer] Romanization pipeline error:", e && e.message ? e.message : e);
      }
return lyrics;
  }


  const _KW_BLUR_SIZE = 128;
  const _KW_VS = `attribute vec2 a_pos;attribute vec2 a_uv;varying vec2 v_uv;void main(){gl_Position=vec4(a_pos,0.,1.);v_uv=a_uv;}`;
  const _KW_BLUR_FS = `precision highp float;uniform sampler2D u_tex;uniform vec2 u_res;uniform float u_off;varying vec2 v_uv;void main(){vec2 ts=1./u_res;vec4 c=vec4(0.);c+=texture2D(u_tex,v_uv+vec2(-u_off,-u_off)*ts);c+=texture2D(u_tex,v_uv+vec2(u_off,-u_off)*ts);c+=texture2D(u_tex,v_uv+vec2(-u_off,u_off)*ts);c+=texture2D(u_tex,v_uv+vec2(u_off,u_off)*ts);gl_FragColor=c*.25;}`;
  const _KW_BLEND_FS = `precision highp float;uniform sampler2D u_tex1;uniform sampler2D u_tex2;uniform float u_blend;varying vec2 v_uv;void main(){vec4 c1=texture2D(u_tex1,v_uv);vec4 c2=texture2D(u_tex2,v_uv);gl_FragColor=mix(c1,c2,u_blend);}`;
  const _KW_TINT_FS = `precision highp float;uniform sampler2D u_tex;uniform vec3 u_tintColor;uniform float u_tintIntensity;varying vec2 v_uv;void main(){vec4 c=texture2D(u_tex,v_uv);float luma=dot(c.rgb,vec3(.299,.587,.114));float dm=1.-smoothstep(0.,.5,luma);c.rgb=mix(c.rgb,u_tintColor,dm*u_tintIntensity);gl_FragColor=c;}`;
  const _KW_WARP_FS = `precision highp float;uniform sampler2D u_tex;uniform float u_time;uniform float u_intensity;varying vec2 v_uv;vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}float snoise(vec2 v){const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);m=m*m;m=m*m;vec3 x=2.*fract(p*C.www)-1.;vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;m*=1.79284291400159-.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.*dot(m,g);}void main(){vec2 uv=v_uv;float t=u_time*.05;vec2 center=uv-.5;float cw=1.-smoothstep(0.,.7,length(center));float n1=snoise(uv*.35+vec2(t,t*.7));float n2=snoise(uv*.35+vec2(-t*.8,t*.5)+vec2(50.,50.));float n3=snoise(uv*.9+vec2(t*1.2,-t)+vec2(100.,0.));float n4=snoise(uv*.9+vec2(-t,t*1.1)+vec2(0.,100.));vec2 warp=vec2(n1*.65+n3*.35,n2*.65+n4*.35)*cw;vec2 wuv=clamp(uv+warp*u_intensity,0.,1.);gl_FragColor=texture2D(u_tex,wuv);}`;
  const _KW_OUT_FS = `precision highp float;uniform sampler2D u_tex;uniform float u_sat;uniform float u_dith;uniform float u_time;uniform float u_scale;uniform vec2 u_res;varying vec2 v_uv;float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.zyx+31.32);return fract((p.x+p.y)*p.z);}void main(){vec2 uv=clamp((v_uv-.5)/u_scale+.5,0.,1.);vec4 c=texture2D(u_tex,uv);vec2 center=v_uv-.5;c.rgb*=(1.-dot(center,center)*.3);float gray=dot(c.rgb,vec3(.299,.587,.114));c.rgb=mix(vec3(gray),c.rgb,u_sat);vec2 pp=floor(v_uv*u_res);c.rgb+=(hash(vec3(pp,floor(u_time*60.)))-.5)*u_dith;gl_FragColor=c;}`;

  class Kawarp {
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      const gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: true, powerPreference: "high-performance" });
      if (!gl) throw new Error("WebGL not supported");
      this.gl = gl;
      this.halfFloatExt = gl.getExtension("OES_texture_half_float");
      this.halfFloatLinearExt = gl.getExtension("OES_texture_half_float_linear");
      this._warpIntensity = options.warpIntensity ?? 1.0;
      this._blurPasses = options.blurPasses ?? 8;
      this._animationSpeed = options.animationSpeed ?? 1.0;
      this._targetAnimationSpeed = this._animationSpeed;
      this._transitionDuration = options.transitionDuration ?? 1000;
      this._saturation = options.saturation ?? 1.5;
      this._tintColor = options.tintColor ?? [0.157, 0.157, 0.235];
      this._tintIntensity = options.tintIntensity ?? 0.15;
      this._dithering = options.dithering ?? 0.008;
      this._scale = options.scale ?? 1.0;

      this.blurProgram = this.createProgram(_KW_VS, _KW_BLUR_FS);
      this.blendProgram = this.createProgram(_KW_VS, _KW_BLEND_FS);
      this.tintProgram = this.createProgram(_KW_VS, _KW_TINT_FS);
      this.warpProgram = this.createProgram(_KW_VS, _KW_WARP_FS);
      this.outputProgram = this.createProgram(_KW_VS, _KW_OUT_FS);

      this.attribs = {
        position: gl.getAttribLocation(this.blurProgram, "a_pos"),
        texCoord: gl.getAttribLocation(this.blurProgram, "a_uv"),
      };
      this.uniforms = {
        blur: { resolution: gl.getUniformLocation(this.blurProgram, "u_res"), texture: gl.getUniformLocation(this.blurProgram, "u_tex"), offset: gl.getUniformLocation(this.blurProgram, "u_off") },
        blend: { texture1: gl.getUniformLocation(this.blendProgram, "u_tex1"), texture2: gl.getUniformLocation(this.blendProgram, "u_tex2"), blend: gl.getUniformLocation(this.blendProgram, "u_blend") },
        warp: { texture: gl.getUniformLocation(this.warpProgram, "u_tex"), time: gl.getUniformLocation(this.warpProgram, "u_time"), intensity: gl.getUniformLocation(this.warpProgram, "u_intensity") },
        tint: { texture: gl.getUniformLocation(this.tintProgram, "u_tex"), tintColor: gl.getUniformLocation(this.tintProgram, "u_tintColor"), tintIntensity: gl.getUniformLocation(this.tintProgram, "u_tintIntensity") },
        output: { texture: gl.getUniformLocation(this.outputProgram, "u_tex"), saturation: gl.getUniformLocation(this.outputProgram, "u_sat"), dithering: gl.getUniformLocation(this.outputProgram, "u_dith"), time: gl.getUniformLocation(this.outputProgram, "u_time"), scale: gl.getUniformLocation(this.outputProgram, "u_scale"), resolution: gl.getUniformLocation(this.outputProgram, "u_res") },
      };

      this.positionBuffer = this.createBuffer(new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]));
      this.texCoordBuffer = this.createBuffer(new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]));
      this.sourceTexture = this.createTexture();
      this.blurFBO1 = this.createFramebuffer(_KW_BLUR_SIZE, _KW_BLUR_SIZE, true);
      this.blurFBO2 = this.createFramebuffer(_KW_BLUR_SIZE, _KW_BLUR_SIZE, true);
      this.currentAlbumFBO = this.createFramebuffer(_KW_BLUR_SIZE, _KW_BLUR_SIZE, true);
      this.nextAlbumFBO = this.createFramebuffer(_KW_BLUR_SIZE, _KW_BLUR_SIZE, true);
      const initW = Math.max(1, canvas.width || 640);
      const initH = Math.max(1, canvas.height || 360);
      this.warpFBO = this.createFramebuffer(initW, initH, true);

      this.animationId = null;
      this.lastFrameTime = 0;
      this.accumulatedTime = 0;
      this.isPlaying = false;
      this.disposed = false;
      this.isTransitioning = false;
      this.transitionStartTime = 0;
      this.hasImage = false;
    }

    setOptions(opts) {
      if (opts.warpIntensity !== undefined) this._warpIntensity = opts.warpIntensity;
      if (opts.blurPasses !== undefined) this._blurPasses = opts.blurPasses;
      if (opts.animationSpeed !== undefined) this._targetAnimationSpeed = Math.max(0.05, Math.min(5, opts.animationSpeed));
      if (opts.transitionDuration !== undefined) this._transitionDuration = opts.transitionDuration;
      if (opts.saturation !== undefined) this._saturation = opts.saturation;
      if (opts.scale !== undefined) this._scale = opts.scale;
    }

    async loadImage(src) {
      if (!src || this.disposed) return;
      let bitmap = null;
      try {
        const res = await fetch(src, { mode: "cors" });
        if (res.ok) {
          const blob = await res.blob();
          bitmap = await createImageBitmap(blob);
        }
      } catch (e) { }
      if (!bitmap) {
        try {
          bitmap = await new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            img.src = src;
          });
        } catch (e) {
          return;
        }
      }
      if (this.disposed) return;
      const gl = this.gl;
      gl.bindTexture(gl.TEXTURE_2D, this.sourceTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
      if ("close" in bitmap && typeof bitmap.close === "function") {
        bitmap.close();
      }
      this.processNewImage();
    }

    processNewImage() {
      if (!this.hasImage) {
        this.blurSourceInto(this.nextAlbumFBO);
        this.blurSourceInto(this.currentAlbumFBO);
        this.hasImage = true;
        this.isTransitioning = false;
        return;
      }
      const prevFBO = this.currentAlbumFBO;
      this.currentAlbumFBO = this.nextAlbumFBO;
      this.nextAlbumFBO = prevFBO;
      this.blurSourceInto(this.nextAlbumFBO);
      this.isTransitioning = true;
      this.transitionStartTime = performance.now();
    }

    blurSourceInto(targetFBO) {
      const gl = this.gl;
      gl.useProgram(this.tintProgram);
      this.setupAttributes();
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.blurFBO1.framebuffer);
      gl.viewport(0, 0, _KW_BLUR_SIZE, _KW_BLUR_SIZE);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.sourceTexture);
      gl.uniform1i(this.uniforms.tint.texture, 0);
      gl.uniform3fv(this.uniforms.tint.tintColor, this._tintColor);
      gl.uniform1f(this.uniforms.tint.tintIntensity, this._tintIntensity);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      gl.useProgram(this.blurProgram);
      this.setupAttributes();
      gl.uniform2f(this.uniforms.blur.resolution, _KW_BLUR_SIZE, _KW_BLUR_SIZE);
      gl.uniform1i(this.uniforms.blur.texture, 0);
      let readFBO = this.blurFBO1;
      let writeFBO = this.blurFBO2;
      for (let i = 0; i < this._blurPasses; i++) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, writeFBO.framebuffer);
        gl.viewport(0, 0, _KW_BLUR_SIZE, _KW_BLUR_SIZE);
        gl.bindTexture(gl.TEXTURE_2D, readFBO.texture);
        gl.uniform1f(this.uniforms.blur.offset, i + 0.5);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        const swap = readFBO;
        readFBO = writeFBO;
        writeFBO = swap;
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, targetFBO.framebuffer);
      gl.viewport(0, 0, _KW_BLUR_SIZE, _KW_BLUR_SIZE);
      gl.bindTexture(gl.TEXTURE_2D, readFBO.texture);
      gl.uniform1f(this.uniforms.blur.offset, 0.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    start() {
      if (this.disposed || this.isPlaying) return;
      this.isPlaying = true;
      this.lastFrameTime = performance.now();
      this.renderLoop = (timestamp) => {
        if (!this.isPlaying) return;
        const dt = (timestamp - this.lastFrameTime) / 1000;
        this.lastFrameTime = timestamp;
        this._animationSpeed += (this._targetAnimationSpeed - this._animationSpeed) * 0.05;
        this.accumulatedTime += dt * this._animationSpeed;
        this.render(this.accumulatedTime, timestamp);
        this.animationId = requestAnimationFrame(this.renderLoop);
      };
      this.animationId = requestAnimationFrame(this.renderLoop);
    }

    stop() {
      this.isPlaying = false;
      if (this.animationId !== null) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }

    render(time, timestamp = performance.now()) {
      if (this.disposed || !this.hasImage) return;
      const gl = this.gl;
      if (this.canvas.clientWidth && this.canvas.clientHeight) {
        const targetW = Math.round(this.canvas.clientWidth);
        const targetH = Math.round(this.canvas.clientHeight);
        if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
          this.canvas.width = targetW;
          this.canvas.height = targetH;
        }
      }
      const width = Math.max(1, this.canvas.width);
      const height = Math.max(1, this.canvas.height);
      if (this.warpFBO.width !== width || this.warpFBO.height !== height) {
        this.deleteFramebuffer(this.warpFBO);
        this.warpFBO = this.createFramebuffer(width, height, true);
      }
      let blendFactor = 1.0;
      if (this.isTransitioning) {
        const elapsed = timestamp - this.transitionStartTime;
        blendFactor = Math.min(1.0, elapsed / this._transitionDuration);
        if (blendFactor >= 1.0) {
          this.isTransitioning = false;
        }
      }
      let currentTexture;
      if (this.isTransitioning && blendFactor < 1.0) {
        gl.useProgram(this.blendProgram);
        this.setupAttributes();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.blurFBO1.framebuffer);
        gl.viewport(0, 0, _KW_BLUR_SIZE, _KW_BLUR_SIZE);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.currentAlbumFBO.texture);
        gl.uniform1i(this.uniforms.blend.texture1, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.nextAlbumFBO.texture);
        gl.uniform1i(this.uniforms.blend.texture2, 1);
        const easedBlend = 0.5 - 0.5 * Math.cos(blendFactor * Math.PI);
        gl.uniform1f(this.uniforms.blend.blend, easedBlend);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        currentTexture = this.blurFBO1.texture;
      } else {
        currentTexture = this.nextAlbumFBO.texture;
      }
      gl.useProgram(this.warpProgram);
      this.setupAttributes();
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.warpFBO.framebuffer);
      gl.viewport(0, 0, width, height);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, currentTexture);
      gl.uniform1i(this.uniforms.warp.texture, 0);
      gl.uniform1f(this.uniforms.warp.time, time);
      gl.uniform1f(this.uniforms.warp.intensity, this._warpIntensity);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      gl.useProgram(this.outputProgram);
      this.setupAttributes();
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, width, height);
      gl.bindTexture(gl.TEXTURE_2D, this.warpFBO.texture);
      gl.uniform1i(this.uniforms.output.texture, 0);
      gl.uniform1f(this.uniforms.output.saturation, this._saturation);
      gl.uniform1f(this.uniforms.output.dithering, this._dithering);
      gl.uniform1f(this.uniforms.output.time, time);
      gl.uniform1f(this.uniforms.output.scale, this._scale);
      gl.uniform2f(this.uniforms.output.resolution, width, height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    setupAttributes() {
      const gl = this.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
      gl.enableVertexAttribArray(this.attribs.position);
      gl.vertexAttribPointer(this.attribs.position, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
      gl.enableVertexAttribArray(this.attribs.texCoord);
      gl.vertexAttribPointer(this.attribs.texCoord, 2, gl.FLOAT, false, 0, 0);
    }

    createShader(type, source) {
      const gl = this.gl;
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Failed to create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(`Shader compile error: ${error}`);
      }
      return shader;
    }

    createProgram(vertexSource, fragmentSource) {
      const gl = this.gl;
      const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexSource);
      const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentSource);
      const program = gl.createProgram();
      if (!program) throw new Error("Failed to create program");
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const error = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw new Error(`Program link error: ${error}`);
      }
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return program;
    }

    createBuffer(data) {
      const gl = this.gl;
      const buffer = gl.createBuffer();
      if (!buffer) throw new Error("Failed to create buffer");
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      return buffer;
    }

    createTexture() {
      const gl = this.gl;
      const texture = gl.createTexture();
      if (!texture) throw new Error("Failed to create texture");
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      return texture;
    }

    createFramebuffer(width, height, useHighPrecision = false) {
      const gl = this.gl;
      const texture = this.createTexture();
      const canUseHalfFloat = useHighPrecision && this.halfFloatExt && this.halfFloatLinearExt;
      const type = canUseHalfFloat ? this.halfFloatExt.HALF_FLOAT_OES : gl.UNSIGNED_BYTE;
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, type, null);
      const framebuffer = gl.createFramebuffer();
      if (!framebuffer) throw new Error("Failed to create framebuffer");
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      return { framebuffer, texture, width, height };
    }

    deleteFramebuffer(fbo) {
      if (!fbo) return;
      this.gl.deleteFramebuffer(fbo.framebuffer);
      this.gl.deleteTexture(fbo.texture);
    }

    dispose() {
      if (this.disposed) return;
      this.disposed = true;
      this.stop();
      const gl = this.gl;
      try {
        gl.deleteProgram(this.blurProgram);
        gl.deleteProgram(this.blendProgram);
        gl.deleteProgram(this.tintProgram);
        gl.deleteProgram(this.warpProgram);
        gl.deleteProgram(this.outputProgram);
        gl.deleteBuffer(this.positionBuffer);
        gl.deleteBuffer(this.texCoordBuffer);
        gl.deleteTexture(this.sourceTexture);
        this.deleteFramebuffer(this.blurFBO1);
        this.deleteFramebuffer(this.blurFBO2);
        this.deleteFramebuffer(this.currentAlbumFBO);
        this.deleteFramebuffer(this.nextAlbumFBO);
        this.deleteFramebuffer(this.warpFBO);
      } catch (e) { }
    }
  }

  class BackgroundAnimationController {
    constructor() {
      this.BASE_TEMPO = 120.0;
      this.BEAT_PULSE_MAX = 1.5;
      this.BEAT_PULSE_DECAY = 5.0;
      this.MIN_BEAT_CONFIDENCE = 0.4;
    }
    getActiveElement(elements, currentTime) {
      if (!elements) return null;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (currentTime >= el.start && currentTime < (el.start + el.duration)) return el;
      }
      return null;
    }
    getLoudnessFactor(dB) {
      const normalized = Math.max(0, (dB + 40) / 40);
      return 0.5 + (normalized * 0.7);
    }
    getSpeedMultiplier(currentTime, data) {
      if (!data) return 1.0;
      let currentSpeed = 1.0;
      const currentSection = this.getActiveElement(data.sections, currentTime);
      if (currentSection) {
        const tempoMultiplier = (currentSection.tempo || 120) / this.BASE_TEMPO;
        const loudnessMultiplier = this.getLoudnessFactor(currentSection.loudness || -10);
        currentSpeed = tempoMultiplier * loudnessMultiplier;
      } else if (data.track) {
        currentSpeed = ((data.track.tempo || 120) / this.BASE_TEMPO) * this.getLoudnessFactor(data.track.loudness || -10);
      }
      const currentBeat = this.getActiveElement(data.beats, currentTime);
      if (currentBeat && (currentBeat.confidence || 0) > this.MIN_BEAT_CONFIDENCE) {
        const progressIntoBeat = (currentTime - currentBeat.start) / (currentBeat.duration || 0.5);
        const pulseDecay = Math.exp(-this.BEAT_PULSE_DECAY * Math.max(0, Math.min(1, progressIntoBeat)));
        const beatPulseAddition = this.BEAT_PULSE_MAX * pulseDecay * currentBeat.confidence;
        currentSpeed += beatPulseAddition;
      }
      return Math.max(0.1, Math.min(currentSpeed, 3.0));
    }
  }

  var _bgAnimController = new BackgroundAnimationController();

  function we(r) {
    let [t, i] = (0, g.useState)(() => { var e = new Set(Se.map(e => e.id)), t = r.initialRenderer; return t && e.has(t) || (t = new URLSearchParams(Spicetify.Platform?.History?.location?.search || "").get("renderer")) && e.has(t) ? t : "ncs" }); (0, g.useEffect)(() => { var e = new URLSearchParams; e.set("renderer", t), Spicetify.Platform?.History?.replace({ search: e.toString() }) }, [t]); var e = Se.find(e => e.id === t)?.renderer; let [albumArt, setAlbumArt] = (0, g.useState)(Spicetify.Player.data?.item?.metadata?.image_url ?? ""), [currentArt, setCurrentArt] = (0, g.useState)(Spicetify.Player.data?.item?.metadata?.image_url ?? ""), [prevArt, setPrevArt] = (0, g.useState)(""), [fadeKey, setFadeKey] = (0, g.useState)(0), [isPlaying, setIsPlaying] = (0, g.useState)(Spicetify.Player.isPlaying), [trackTitle, setTrackTitle] = (0, g.useState)(Spicetify.Player.data?.item?.name ?? ""), [trackProgress, setTrackProgress] = (0, g.useState)(Spicetify.Player.getProgress() / 1e3), [volume, setVolume] = (0, g.useState)(Spicetify.Player.getVolume() || 0), [shuffle, setShuffle] = (0, g.useState)("function" == typeof Spicetify.Player.getShuffle && Spicetify.Player.getShuffle()), [repeatMode, setRepeatMode] = (0, g.useState)("function" == typeof Spicetify.Player.getRepeat ? +Spicetify.Player.getRepeat() || 0 : 0), [isDraggingSeek, setIsDraggingSeek] = (0, g.useState)(!1), [dragProgress, setDragProgress] = (0, g.useState)(0), [isLiked, setIsLiked] = (0, g.useState)(() => { try { if (typeof Spicetify.Player.getHeart === "function") return !!Spicetify.Player.getHeart(); } catch (e) { } var meta = Spicetify.Player.data?.item?.metadata || Spicetify.Player.origin?._state?.item?.metadata; return meta?.["collection.in_collection"] === "true"; }), [lyricsLine, setLyricsLine] = (0, g.useState)(""),[showLyrics, setShowLyrics] = (0, g.useState)(true), [refreshTrigger, setRefreshTrigger] = (0, g.useState)(0), [hasNoLyrics, setHasNoLyrics] = (0, g.useState)(false), [hasUpdate, setHasUpdate] = (0, g.useState)(false), [isDownloadingUpdate, setIsDownloadingUpdate] = (0, g.useState)(false), [updateDownloaded, setUpdateDownloaded] = (0, g.useState)(() => { try { return sessionStorage.getItem("ncs-vis-update-downloaded") === "1"; } catch (e) { return false; } }), [isRomanized, setIsRomanized] = (0, g.useState)(() => { try { var s = Spicetify.LocalStorage.get("SL:uiState"); return s ? !!JSON.parse(s)?.romanization : false } catch(e) { return false } }); let progressBarContainerRef = (0, g.useRef)(null), lastUriRef = (0, g.useRef)(""), lyricsContainerRef = (0, g.useRef)(null), lyricsBgContainerRef = (0, g.useRef)(null), kawarpCanvasRef = (0, g.useRef)(null), kawarpInstanceRef = (0, g.useRef)(null), backdropParallaxRef = (0, g.useRef)(null);
    (0, g.useEffect)(() => {
      var canvas = kawarpCanvasRef.current;
      if (canvas && !kawarpInstanceRef.current) {
        try {
          var kw = new Kawarp(canvas, {
            warpIntensity: 1.0,
            blurPasses: 8,
            animationSpeed: 0.1,
            saturation: 1.5,
            dithering: 0.008,
            transitionDuration: 1000,
            scale: 1.0
          });
          kw.start();
          kawarpInstanceRef.current = kw;
          if (currentArt) kw.loadImage(currentArt);
        } catch (e) {
          console.error("[Visualizer] Kawarp init error:", e);
        }
      }
      return () => {
        if (kawarpInstanceRef.current) {
          kawarpInstanceRef.current.dispose();
          kawarpInstanceRef.current = null;
        }
      };
    }, []);
    (0, g.useEffect)(() => {
      if (kawarpInstanceRef.current && currentArt) {
        kawarpInstanceRef.current.loadImage(currentArt);
      }
    }, [currentArt]);
    (0, g.useEffect)(() => {
      var el = backdropParallaxRef.current;
      if (!el) return;
      var raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
      var step = function () {
        raf = 0;
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        el.style.setProperty("--prlx-x", (cx * 42).toFixed(2) + "px");
        el.style.setProperty("--prlx-y", (cy * 30).toFixed(2) + "px");
        el.style.setProperty("--prlx-rx", (-cy * 6).toFixed(2) + "deg");
        el.style.setProperty("--prlx-ry", (cx * 6).toFixed(2) + "deg");
        if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) raf = requestAnimationFrame(step);
      };
      var onMove = function (e) {
        var w = window.innerWidth || 1, h = window.innerHeight || 1;
        tx = (e.clientX / w - 0.5) * 2;
        ty = (e.clientY / h - 0.5) * 2;
        if (!raf) raf = requestAnimationFrame(step);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return function () {
        window.removeEventListener("pointermove", onMove);
        if (raf) cancelAnimationFrame(raf);
      };
    }, []);
    (0, g.useEffect)(() => {
      if (kawarpInstanceRef.current) {
        kawarpInstanceRef.current.setOptions({
          animationSpeed: isPlaying ? 1.0 : 0.1
        });
      }
    }, [isPlaying]);
    (0, g.useEffect)(() => { var check = function () { try { var cached = null; try { cached = sessionStorage.getItem("ncs-vis-update-check"); } catch (e) { } if (cached) { try { var parsed = JSON.parse(cached); if (parsed && parsed.t && Date.now() - parsed.t < 3600e3) { setHasUpdate(!!parsed.up); return; } } catch (e) { } } fetch("https://api.github.com/repos/" + _UPDATE_REPO + "/commits?per_page=1", { headers: { Accept: "application/vnd.github.v3+json" } }).then(r => r.ok ? r.json() : null).then(data => { if (data && Array.isArray(data) && data.length > 0) { var isNewer = data[0].sha !== _LOCAL_SHA; setHasUpdate(isNewer); try { sessionStorage.setItem("ncs-vis-update-check", JSON.stringify({ t: Date.now(), up: isNewer })); } catch (e) { } } }).catch(() => { }) } catch (e) { } }; check(); }, []); const handleSeekMouseDown = e => { const container = progressBarContainerRef.current; if (container) { const rect = container.getBoundingClientRect(), duration = u.audioAnalysis?.track?.duration || 0; if (duration > 0) { setIsDraggingSeek(!0); const calculateProgress = clientX => { let frac = (clientX - rect.left) / rect.width; return frac = Math.max(0, Math.min(1, frac)), frac * duration }; setDragProgress(calculateProgress(e.clientX)); const onMouseMove = moveEvent => { setDragProgress(calculateProgress(moveEvent.clientX)) }, onMouseUp = upEvent => { const finalProgress = calculateProgress(upEvent.clientX); Spicetify.Player.seek(Math.round(1000 * finalProgress)); setIsDraggingSeek(!1); const win = container.ownerDocument.defaultView || window; win.removeEventListener("mousemove", onMouseMove); win.removeEventListener("mouseup", onMouseUp) }; const win = container.ownerDocument.defaultView || window; win.addEventListener("mousemove", onMouseMove); win.addEventListener("mouseup", onMouseUp) } } };
    const handleRefreshLyrics = async () => {
      var uri = Spicetify.Player.data?.item?.uri;
      if (!uri) return;
      var tid = uri.split(":")[2];
      if (!tid) return;
      Spicetify.showNotification("Refreshing lyrics...");
      _lyricsMemCache.delete(tid);
      _cachedTrackId = "";
      _cachedLyrics = undefined;
      setHasNoLyrics(false);
      setRefreshTrigger(prev => prev + 1);
    };
    const handleToggleRomanization = () => {
      var nextVal = !isRomanized;
      setIsRomanized(nextVal);
      try {
        var raw = Spicetify.LocalStorage.get("SL:uiState");
        var uiState = raw ? JSON.parse(raw) : {};
        uiState.romanization = nextVal;
        Spicetify.LocalStorage.set("SL:uiState", JSON.stringify(uiState));
      } catch (e) { }
      setRefreshTrigger(prev => prev + 1);
    };
    const handleUpdateDownload = async () => {
      if (isDownloadingUpdate) return;
      setIsDownloadingUpdate(true);
      var saved = 0;
      try {
        var nativeFetch = fetch;
        try { if (window.parent && window.parent.fetch) nativeFetch = window.parent.fetch; } catch (e) { }
        for (var i = 0; i < _UPDATE_FILES.length; i++) {
          try {
            var f = _UPDATE_FILES[i];
            var res = await nativeFetch("https://raw.githubusercontent.com/" + _UPDATE_REPO + "/" + _UPDATE_BRANCH + "/" + f);
            if (!res.ok) continue;
            var text = await res.text();
            var type = f.indexOf(".css") > -1 ? "text/css" : (f.indexOf(".json") > -1 ? "application/json" : "application/javascript");
            var objUrl = URL.createObjectURL(new Blob([text], { type: type }));
            var a = document.createElement("a");
            a.href = objUrl; a.download = f; a.rel = "noopener";
            document.body.appendChild(a);
            a.click();
            setTimeout(function () { URL.revokeObjectURL(objUrl); try { a.remove(); } catch (e) { } }, 4000);
            saved++;
          } catch (e2) { console.warn("[Visualizer] Update download failed for", f, e2); }
        }
        if (saved > 0) {
          try { sessionStorage.setItem("ncs-vis-update-downloaded", "1"); } catch (e3) { }
          setUpdateDownloaded(true);
          Spicetify.showNotification("Update downloaded (" + saved + "/" + _UPDATE_FILES.length + ") - run: spicetify apply");
        } else {
          Spicetify.showNotification("Update download failed - check DevTools console");
        }
      } catch (e4) {
        console.error("[Visualizer] Update download error:", e4);
        Spicetify.showNotification("Update download failed - check DevTools console");
      }
      setIsDownloadingUpdate(false);
    };
    const handleToggleLike = async () => {
      var uri = Spicetify.Player.data?.item?.uri || Spicetify.Player.origin?._state?.item?.uri;
      if (!uri) return;
      var nextLiked = !isLiked;
      setIsLiked(nextLiked);
      try {
        if (typeof Spicetify.Player.setHeart === "function") {
          Spicetify.Player.setHeart(nextLiked);
        } else if (typeof Spicetify.Player.toggleHeart === "function") {
          Spicetify.Player.toggleHeart();
        } else if (Spicetify.Platform?.LibraryAPI) {
          if (nextLiked) {
            Spicetify.Platform.LibraryAPI.add({ uris: [uri] });
          } else {
            Spicetify.Platform.LibraryAPI.remove({ uris: [uri] });
          }
        }
      } catch (e) {
        console.warn("[Visualizer] Toggle like error:", e);
      }
    };
    (0, g.useEffect)(() => { if (r.isSecondaryWindow) { let isDragging = !1, startX, startY; const onMouseDown = e => { if (e.target.closest("button,input,.visualizer-overlay__progress-bar-container,.visualizer-overlay__volume-wrap")) return; isDragging = !0; startX = e.screenX; startY = e.screenY }, onMouseMove = e => { if (isDragging) { const dx = e.screenX - startX, dy = e.screenY - startY; window.moveBy(dx, dy); startX = e.screenX; startY = e.screenY } }, onMouseUp = () => { isDragging = !1 }; window.addEventListener("mousedown", onMouseDown); window.addEventListener("mousemove", onMouseMove); window.addEventListener("mouseup", onMouseUp); return () => { window.removeEventListener("mousedown", onMouseDown); window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp) } } }, [r.isSecondaryWindow]); function formatTime(s) { if (!s || !isFinite(s)) return "0:00"; var m = Math.floor(s / 60), sec = Math.floor(s % 60); return m + ":" + String(sec).padStart(2, "0") } let a = (0, g.useRef)(null); a.current && !a.current.ownerDocument.defaultView && r.onWindowDestroyed?.(); var n = !!(t => { let [e, r] = (0, Re.useState)(t?.fullscreenElement ?? null); return (0, Re.useEffect)(() => { if (t) { let e = () => r(t.fullscreenElement); return t.addEventListener("fullscreenchange", e), () => t.removeEventListener("fullscreenchange", e) } }, [t]), e })(a.current?.ownerDocument); let [o, s] = (0, g.useState)({ state: "loading" }), [u, l] = (0, g.useState)({ themeColor: Spicetify.Color.fromHex("#535353") }), themeColorRef = (0, g.useRef)(null); themeColorRef.current = u.themeColor; let c = (0, g.useCallback)(t => s(e => "error" === e.state && 2 === e.errorData.recovery ? e : t), []), f = (0, g.useCallback)((e, t) => { c({ state: "error", errorData: { message: e, recovery: t } }) }, []), d = "error" === o.state && 2 === o.errorData.recovery, h = (0, g.useMemo)(() => new pe, []), m = (0, g.useCallback)(async e => { e = e?.item; if (e) { var t = Spicetify.URI.fromString(e.uri); if (t.type !== Spicetify.URI.Type.TRACK) f("Error: The type of track you're listening to is currently not supported", 1); else { c({ state: "loading" }); try { var r, i, t = `https://spclient.wg.spotify.com/audio-attributes/v1/audio-analysis/${t.id}?format=json`, [t, e] = await Promise.all([Spicetify.CosmosAsync.get(t).catch(e => (console.error("[Visualizer]", e), { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] })), h.fetch(23, e.metadata.image_url).catch(e => (console.error("[Visualizer] Could not load extracted color metadata. Status: " + ye[e]), null)).then(e => { try { var t; return e && 0 !== e.value.length && "type.googleapis.com/spotify.context_track_color.ColorResult" === e.typeUrl ? (e = e.value, t = Te, e = new DataView(e.buffer, e.byteOffset, e.byteLength), t = t[1](e).colorLight?.rgb?.toString(16).padStart(6, "0") ?? "535353", Spicetify.Color.fromHex("#" + t)) : Spicetify.Color.fromHex("#535353") } catch (r) { return console.error("[Visualizer] Failed to parse extracted color metadata, using fallback.", r), Spicetify.Color.fromHex("#535353") } })]); if (t) if ("object" != typeof t) f(`Invalid audio analysis data (${t})`, 0); else { if (!("track" in t && "segments" in t)) { console.warn("[Visualizer] No audio analysis available for this track, using fallback.", t); t = { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] } } l({ audioAnalysis: t, themeColor: e }), c({ state: "running" }) } else f("Error: The audio analysis could not be loaded, please check your internet connection", 0) } catch (r) { console.error("[Visualizer] Unexpected error while loading track data, using fallback.", r), l({ audioAnalysis: { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] }, themeColor: Spicetify.Color.fromHex("#535353") }), c({ state: "running" }) } } } else f("Start playing a song to see the visualization!", 1) }, [h]); return (0, g.useEffect)(() => { if (!d) { let e = e => { e?.data && m(e.data); try { var lk = (typeof Spicetify.Player.getHeart === "function") ? !!Spicetify.Player.getHeart() : (e?.data?.item?.metadata?.["collection.in_collection"] === "true"); setIsLiked(lk); } catch (err) { } }; return Spicetify.Player.addEventListener("songchange", e), m(Spicetify.Player.data), () => Spicetify.Player.removeEventListener("songchange", e) } }, [d, m]), (0, g.useEffect)(() => {
      if (!d) {
        let tick = 0; const e = () => {
          isDraggingSeek || setTrackProgress(Spicetify.Player.getProgress() / 1e3); setAlbumArt(prev => {
            var nextArt = Spicetify.Player.data?.item?.metadata?.image_url ?? "";
            if (nextArt !== prev) {
              setPrevArt(prev);
              setCurrentArt(nextArt);
              setFadeKey(k => k + 1);
            }
            return nextArt;
          }); setIsPlaying(Spicetify.Player.isPlaying); setTrackTitle(Spicetify.Player.data?.item?.name ?? ""); setVolume(Spicetify.Player.getVolume() || 0); setShuffle("function" == typeof Spicetify.Player.getShuffle && Spicetify.Player.getShuffle()); setRepeatMode("function" == typeof Spicetify.Player.getRepeat ? +Spicetify.Player.getRepeat() || 0 : 0);
          const uri = Spicetify.Player.data?.item?.uri;
          if (uri && uri !== lastUriRef.current) {
            lastUriRef.current = uri;
            try {
              var initLiked = (typeof Spicetify.Player.getHeart === "function") ? !!Spicetify.Player.getHeart() : (Spicetify.Player.data?.item?.metadata?.["collection.in_collection"] === "true");
              setIsLiked(initLiked);
            } catch (err) { }
            if (Spicetify.Platform?.LibraryAPI) {
              try {
                var p = Spicetify.Platform.LibraryAPI.contains({ uris: [uri] });
                if (!p || typeof p.then !== "function") p = Spicetify.Platform.LibraryAPI.contains([uri]);
                if (p && typeof p.then === "function") {
                  p.then(res => {
                    const val = Array.isArray(res) ? res[0] : (res && typeof res === 'object' ? (res[uri] ?? res.isSaved ?? res.contains) : res);
                    if (val !== undefined && val !== null) setIsLiked(!!val);
                  }).catch(() => { });
                }
              } catch (err) { }
            }
          }
          tick++;
        }; e(); const t = window.setInterval(e, 100); return () => window.clearInterval(t)
      }
    }, [d, isDraggingSeek]), (0, g.useEffect)(() => { var t = a.current; if (t) { var e = new ResizeObserver(function (e) { e = e[0]; var r = e.contentRect; t.style.setProperty("--vis-w", r.width), t.style.setProperty("--vis-h", r.height) }); return e.observe(t), function () { e.disconnect() } } }, []), (0, g.useEffect)(() => {
      _cachedTrackId = ""; _cachedLyrics = undefined; _fetching = false;
      var _lastLineIdx = -1, _wordSpans = [], _lineWords = [];
      var _lastBgLineIdx = -1, _bgWordSpans = [], _bgLineWords = [];
      var _letterStyleCache = new WeakMap();
      function _setStyle(el, prop, val) {
        var rec = _letterStyleCache.get(el);
        if (!rec) { rec = {}; _letterStyleCache.set(el, rec); }
        if (rec[prop] !== val) { rec[prop] = val; el.style[prop] = val; }
      }

      var syncedPosition = null;
      var predictedProgress = null;
      var syncTimings = [0.05, 0.1, 0.15, 0.75];
      var canSyncNonLocalTimestamp = Spicetify.Player.isPlaying() ? syncTimings.length : 0;
      var syncTimeoutId = null;

      function clampToTrack(position) {
        var duration = Spicetify.Player.data?.item?.duration?.milliseconds || (u.audioAnalysis?.track?.duration * 1000) || 180000;
        var clamped = Math.max(0, position);
        if (duration > 0) {
          clamped = Math.min(clamped, duration);
        }
        return clamped;
      }

      function normalizeProgress(position, isPlaying) {
        var trackId = Spicetify.Player.data?.item?.uri ?? null;
        var measured = clampToTrack(position);
        var now = Date.now();

        if (
          !predictedProgress ||
          predictedProgress.TrackId !== trackId ||
          !isPlaying
        ) {
          predictedProgress = { TrackId: trackId, Position: measured, UpdatedAt: now };
          return measured;
        }

        var elapsed = Math.max(0, now - predictedProgress.UpdatedAt);
        var predicted = predictedProgress.Position + elapsed;

        var error = measured - predicted;
        if (Math.abs(error) > 500) {
          predicted = measured;
        } else {
          var alpha = 1 - Math.exp(-elapsed / 300);
          predicted += error * alpha;
        }

        predicted = clampToTrack(predicted);
        predictedProgress = { TrackId: trackId, Position: predicted, UpdatedAt: now };

        return predicted;
      }

      function requestPositionSync() {
        try {
          var SpotifyPlatform = Spicetify.Platform;
          if (!SpotifyPlatform) return;
          var startedAt = Date.now();
          var isLocallyPlaying = SpotifyPlatform.PlaybackAPI?._isLocal;

          var getLocalPosition = function() {
            return SpotifyPlatform.PlayerAPI._contextPlayer
              .getPositionState({})
              .then(function(res) {
                return {
                  StartedSyncAt: startedAt + (Date.now() - startedAt) / 2,
                  Position: Number(res.position)
                };
              });
          };

          var getNonLocalPosition = function() {
            var promise = Promise.resolve();
            if (canSyncNonLocalTimestamp > 0 && SpotifyPlatform.PlayerAPI?._contextPlayer?.resume) {
              promise = SpotifyPlatform.PlayerAPI._contextPlayer.resume({});
            }
            return promise.then(function() {
              canSyncNonLocalTimestamp = Math.max(0, canSyncNonLocalTimestamp - 1);
              var state = SpotifyPlatform.PlayerAPI?._state;
              var Position = Spicetify.Player.isPlaying()
                ? state.positionAsOfTimestamp + (Date.now() - state.timestamp)
                : state.positionAsOfTimestamp;
              return {
                StartedSyncAt: startedAt,
                Position: Position
              };
            });
          };

          var sync = isLocallyPlaying ? getLocalPosition() : getNonLocalPosition();

          sync
            .then(function(pos) {
              syncedPosition = pos;
            })
            .then(function() {
              var delay = isLocallyPlaying
                ? 1 / 60
                : (canSyncNonLocalTimestamp === 0
                  ? 1 / 60
                  : syncTimings[syncTimings.length - canSyncNonLocalTimestamp]);

              syncTimeoutId = setTimeout(requestPositionSync, delay * 1000);
            });
        } catch (error) {
          console.error("Sync Position: Fail, More Details:", error);
        }
      }

      requestPositionSync();

      _injectFonts(document);

      function unpackSLObjPack(packed) {
        if (!packed) return null;
        if (typeof packed === "object" && packed.Type && packed.Content) return packed;
        if (typeof packed === "string") {
          try {
            var parsed = JSON.parse(packed);
            if (parsed && (parsed.Type || parsed.Content)) return parsed;
            packed = parsed;
          } catch (e) { console.error("[Visualizer Lyrics] _tick error:", e); }
        }
        if (!Array.isArray(packed) || packed.length !== 2) {
          if (typeof packed === "object" && (packed.Type || packed.Content)) return packed;
          return null;
        }
        var valuesList = packed[0];
        var stream = packed[1];
        if (!Array.isArray(valuesList) || !Array.isArray(stream)) return null;
        var streamLen = stream.length;
        var cursor = 0;
        function decode(depth) {
          if (depth > 512) throw new Error("Max depth exceeded");
          if (cursor >= streamLen) throw new Error("Unexpected end of stream");
          var op = stream[cursor++];
          if (op >= 0) {
            if (op >= valuesList.length) throw new Error("Invalid pointer " + op);
            return valuesList[op];
          }
          switch (op) {
            case -1: {
              var numKeys = stream[cursor++];
              var keys = [];
              for (var i = 0; i < numKeys; i++) {
                var kPtr = stream[cursor++];
                keys.push(valuesList[kPtr]);
              }
              var obj = {};
              for (var i = 0; i < numKeys; i++) {
                obj[keys[i]] = decode(depth + 1);
              }
              return obj;
            }
            case -2: {
              var numItems = stream[cursor++];
              var arr = [];
              for (var i = 0; i < numItems; i++) {
                arr.push(decode(depth + 1));
              }
              return arr;
            }
            case -3: {
              var numItems = stream[cursor++];
              var numKeys = stream[cursor++];
              var keys = [];
              for (var i = 0; i < numKeys; i++) {
                var kPtr = stream[cursor++];
                keys.push(valuesList[kPtr]);
              }
              var arr = [];
              for (var i = 0; i < numItems; i++) {
                var obj = {};
                for (var k = 0; k < numKeys; k++) {
                  obj[keys[k]] = decode(depth + 1);
                }
                arr[i] = obj;
              }
              return arr;
            }
            case -4: return [];
            case -5: return [decode(depth + 1)];
            case -6: return {};
            default: throw new Error("Unknown opcode " + op);
          }
        }
        try {
          return decode(0);
        } catch (e) {
          console.warn("[Visualizer Lyrics] unpackSLObjPack decode error:", e);
          return null;
        }
      }

      var _spotifyTokenCache = null;
      var _spotifyTokenExpiresAt = 0;

      async function _getSpotifyToken() {
        if (_spotifyTokenCache && Date.now() < _spotifyTokenExpiresAt - 5000) {
          return _spotifyTokenCache;
        }
        try {
          if (Spicetify.CosmosAsync) {
            var tokenObj = await Spicetify.CosmosAsync.get("sp://oauth/v2/token");
            if (tokenObj && tokenObj.accessToken) {
              _spotifyTokenCache = tokenObj.accessToken;
              _spotifyTokenExpiresAt = tokenObj.expiresAtTime || (Date.now() + 3600000);
              return _spotifyTokenCache;
            }
          }
        } catch (e) {
          console.warn("[Visualizer Lyrics] Cosmos token fetch failed, falling back to Platform.Session:", e?.message || e);
        }
        if (Spicetify.Platform?.Session?.accessToken) {
          _spotifyTokenCache = Spicetify.Platform.Session.accessToken;
          _spotifyTokenExpiresAt = Spicetify.Platform.Session.accessTokenExpirationTimestampMs || (Date.now() + 300000);
          return _spotifyTokenCache;
        }
        return null;
      }

      function _getSpicyLyricsVersion() {
        try {
          var parentMeta = window.parent?._spicy_lyrics_metadata || window._spicy_lyrics_metadata;
          if (parentMeta) {
            if (parentMeta.LoadedVersion) return parentMeta.LoadedVersion;
            if (parentMeta.version) return parentMeta.version;
            if (parentMeta.Version) return parentMeta.Version;
          }
          var v = Spicetify.LocalStorage?.get("SL:version") || Spicetify.LocalStorage?.get("spicylyrics:version");
          if (v) return v;
          if (window.parent?._spicy_lyrics?.version) return window.parent._spicy_lyrics.version;
          if (window._spicy_lyrics?.version) return window._spicy_lyrics.version;
        } catch (e) { }
        return "6.3.20";
      }

      async function _fetchSpicyLyricsApi(id, _retryCount) {
        if (!_retryCount) _retryCount = 0;
        if (_retryCount > 3) { console.warn("[Visualizer Lyrics] SpicyLyrics max retries reached"); return null; }
        try {
          var token = await _getSpotifyToken();
          if (!token) { console.warn("[Visualizer Lyrics] No Spotify token available"); return null; }

          var slVersion = _getSpicyLyricsVersion();

          var url = "https://api.spicylyrics.org/query";
          var body = {
            queries: [{ operation: "lyrics", variables: { id: id, auth: "SpicyLyrics-WebAuth" } }],
            client: { version: slVersion }
          };
          var headers = {
            "Content-Type": "application/json",
            "SpicyLyrics-Version": slVersion,
            "SpicyLyrics-WebAuth": "Bearer " + token
          };

          console.log("[Visualizer Lyrics] Fetching SpicyLyrics (v" + slVersion + ") for:", id, "(attempt " + (_retryCount + 1) + ")");

          var data = null;

          // Determine fetch function (prefer window.parent.fetch to execute in main XPUI context to bypass iframe CORS/CSP)
          var nativeFetch = fetch;
          try {
            if (window.parent && window.parent.fetch) {
              nativeFetch = window.parent.fetch;
            }
          } catch (e) { }

          try {
            var res = await nativeFetch(url, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(body)
            });
            if (!res.ok) {
              var errText = ""; try { errText = await res.text(); } catch (e) { }
              console.warn("[Visualizer Lyrics] API fetch failed:", res.status, errText.substring(0, 200));
              return null;
            }
            data = await res.json();
            console.log("[Visualizer Lyrics] API fetch succeeded from main context");
          } catch (e2) {
            console.warn("[Visualizer Lyrics] API fetch from main context failed, trying CosmosAsync.post fallback:", e2?.message || e2);
            try {
              data = await Spicetify.CosmosAsync.post(url, body, headers);
              console.log("[Visualizer Lyrics] CosmosAsync.post fallback succeeded");
            } catch (e1) {
              console.error("[Visualizer Lyrics] All fetch methods failed:", e1?.message || e1);
              return null;
            }
          }

          if (!data) { console.warn("[Visualizer Lyrics] No response data"); return null; }

          var queryRes = null;
          if (data.queries && Array.isArray(data.queries)) {
            for (var qi = 0; qi < data.queries.length; qi++) {
              if (data.queries[qi].result) { queryRes = data.queries[qi].result; break; }
            }
          } else if (data.result) {
            queryRes = data.result;
          } else if (data.httpStatus !== undefined) {
            queryRes = data;
          }

          if (!queryRes) {
            console.warn("[Visualizer Lyrics] No query result. Response:", JSON.stringify(data).substring(0, 500));
            return null;
          }

          console.log("[Visualizer Lyrics] Query result httpStatus:", queryRes.httpStatus, "format:", queryRes.format);

          if (queryRes.httpStatus === 503) {
            console.log("[Visualizer Lyrics] Lyrics queued (503), retrying in 3s...");
            await new Promise(function (r) { setTimeout(r, 3000); });
            return await _fetchSpicyLyricsApi(id, _retryCount + 1);
          }

          if (queryRes.httpStatus === 404) {
            console.log("[Visualizer Lyrics] Lyrics not found on SpicyLyrics (404)");
            return null;
          }

          if (queryRes.httpStatus !== 200) {
            console.warn("[Visualizer Lyrics] Unexpected httpStatus:", queryRes.httpStatus);
            return null;
          }

          if (!queryRes.data) {
            console.warn("[Visualizer Lyrics] Query result has no data field");
            return null;
          }

          var unpacked = unpackSLObjPack(queryRes.data);
          console.log("[Visualizer Lyrics] ✓ Unpacked lyrics type:", unpacked?.Type, "items:", unpacked?.Content?.length);
          if (!unpacked || !unpacked.Type) return null;
          return unpacked;
        } catch (e) {
          console.error("[Visualizer Lyrics] SpicyLyrics error:", e?.message || e);
          return null;
        }
      }

      // In-memory lyrics cache TTL
      var _LYRICS_CACHE_TTL = 30 * 60 * 1000; // 30 minutes

      // Read from the SpicyLyrics extension's CacheStorage as backup
      async function _fetchFromSLExtensionCache(id) {
        if (typeof caches === "undefined") return null;
        var storeNames = ["SpicyLyrics_LyricsStore_g1", "SpicyLyrics_LyricsStore"];
        var keysToTry = ["/" + id, id, "/spotify:track:" + id, "spotify:track:" + id];
        for (var s = 0; s < storeNames.length; s++) {
          try {
            var c = await caches.open(storeNames[s]);
            for (var k = 0; k < keysToTry.length; k++) {
              var r = await c.match(keysToTry[k]);
              if (r) {
                var w = await r.json();
                if (w) {
                  var ct = w.Content || w.Value || w.data || w;
                  if (!ct || ct === "NO_LYRICS") {
                    console.log("[Visualizer Lyrics] SpicyLyrics extension cache (" + storeNames[s] + ") has NO_LYRICS for", id);
                    return null;
                  }
                  if (typeof ct === "string") {
                    try { ct = JSON.parse(ct); } catch (e) { }
                  }
                  if (Array.isArray(ct) && ct.length === 2) {
                    ct = unpackSLObjPack(ct);
                  }
                  if (ct && (ct.Type === "Syllable" || ct.Type === "Line" || ct.Type === "Static") && ct.Content) {
                    console.log("[Visualizer Lyrics] Got lyrics from SpicyLyrics extension cache (" + storeNames[s] + "), type:", ct.Type, "items:", ct.Content.length);
                    return ct;
                  }
                }
              }
            }
          } catch (e) { }
        }
        return null;
      }

      // Read from the SpicyLyrics extension's IndexedDB as backup
      async function _fetchFromSLExtensionIDB(id) {
        if (typeof indexedDB === "undefined") return null;
        return new Promise(function (resolve) {
          try {
            var req = indexedDB.open("spicylyrics");
            req.onerror = function () { resolve(null); };
            req.onsuccess = function (ev) {
              try {
                var db = ev.target.result;
                if (!db.objectStoreNames.contains("lyricsStore")) {
                  db.close();
                  return resolve(null);
                }
                var tx = db.transaction("lyricsStore", "readonly");
                var store = tx.objectStore("lyricsStore");
                var keysToTry = [id, "spotify:track:" + id, "/" + id, "/spotify:track:" + id];
                var tryNextKey = function (idx) {
                  if (idx >= keysToTry.length) {
                    db.close();
                    return resolve(null);
                  }
                  var getReq = store.get(keysToTry[idx]);
                  getReq.onsuccess = function () {
                    var val = getReq.result;
                    if (val) {
                      var ct = val.Content || val.Value || val.data || val;
                      if (typeof ct === "string") {
                        try { ct = JSON.parse(ct); } catch (e) { }
                      }
                      if (ct && ct !== "NO_LYRICS") {
                        if (Array.isArray(ct) && ct.length === 2) {
                          ct = unpackSLObjPack(ct);
                        }
                        if (ct && (ct.Type === "Syllable" || ct.Type === "Line" || ct.Type === "Static") && ct.Content) {
                          console.log("[Visualizer Lyrics] Got lyrics from SpicyLyrics IndexedDB, type:", ct.Type, "items:", ct.Content.length);
                          db.close();
                          return resolve(ct);
                        }
                      }
                    }
                    tryNextKey(idx + 1);
                  };
                  getReq.onerror = function () { tryNextKey(idx + 1); };
                };
                tryNextKey(0);
              } catch (e) {
                resolve(null);
              }
            };
          } catch (e) {
            resolve(null);
          }
        });
      }

      // Read from SpicyLyrics global state if present
      function _fetchFromSLGlobal(id) {
        try {
          var sl = window.parent?._spicy_lyrics || window._spicy_lyrics;
          if (sl) {
            if (typeof sl.getLyrics === "function") {
              var res = sl.getLyrics(id);
              if (res && res.Content) return res;
            }
            if (sl.currentLyrics && (sl.currentLyrics.uri === "spotify:track:" + id || sl.currentLyrics.id === id)) {
              if (sl.currentLyrics.data && sl.currentLyrics.data.Content) return sl.currentLyrics.data;
              if (sl.currentLyrics.Content) return sl.currentLyrics;
            }
          }
        } catch (e) { }
        return null;
      }

      async function _fetchFromSpotify(id) {
        try {
          var token = await _getSpotifyToken();
          var headers = { "app-platform": "WebPlayer" };
          if (token) {
            headers["Authorization"] = "Bearer " + token;
          }
          var url = "https://spclient.wg.spotify.com/color-lyrics/v2/track/" + id + "?format=json&vocalRemoval=false&market=from_token";
          var data = null;

          if (Spicetify.CosmosAsync && typeof Spicetify.CosmosAsync.get === "function") {
            try {
              data = await Spicetify.CosmosAsync.get(url, headers);
            } catch (ce) {
              try {
                data = await Spicetify.CosmosAsync.get(url);
              } catch (ce2) { }
            }
          }

          if (!data || !data.lyrics) {
            var nativeFetch = fetch;
            try {
              if (window.parent && window.parent.fetch) nativeFetch = window.parent.fetch;
            } catch (e) { }
            try {
              var res = await nativeFetch(url, { headers: headers });
              if (res.ok) {
                data = await res.json();
              }
            } catch (fe) { }
          }

          if (!data || !data.lyrics) {
            var fallbackUrl = "https://spclient.wg.spotify.com/color-lyrics/v2/track/" + id + "?format=json";
            try {
              if (Spicetify.CosmosAsync && typeof Spicetify.CosmosAsync.get === "function") {
                data = await Spicetify.CosmosAsync.get(fallbackUrl, headers);
              }
            } catch (fe2) { }
          }

          if (!data || !data.lyrics || !Array.isArray(data.lyrics.lines) || data.lyrics.lines.length === 0) {
            return null;
          }
          var rawLines = data.lyrics.lines;
          var hasTiming = rawLines.some(function (l) { return Number(l.startTimeMs) > 0; });
          if (!hasTiming && data.lyrics.syncType === "UNSYNCED") {
            return null;
          }
          var lines = [];
          for (var i = 0; i < rawLines.length; i++) {
            var rl = rawLines[i];
            var start = Number(rl.startTimeMs) / 1000;
            var nextStart = (i + 1 < rawLines.length) ? Number(rawLines[i + 1].startTimeMs) / 1000 : 0;
            var end = 0;
            if (rl.endTimeMs && Number(rl.endTimeMs) > Number(rl.startTimeMs)) {
              end = Number(rl.endTimeMs) / 1000;
            } else if (nextStart > start) {
              var gap = nextStart - start;
              if (gap > 7.0) {
                var estDur = Math.max(2.5, Math.min(gap, ((rl.words || "").length * 0.22)));
                end = start + estDur;
              } else {
                end = nextStart;
              }
            } else {
              end = start + 4.0;
            }
            lines.push({
              Type: "Vocal",
              StartTime: start,
              EndTime: end,
              Text: rl.words || "",
              OppositeAligned: false
            });
          }
          if (lines.length === 0) return null;
          console.log("[Visualizer Lyrics] ✓ Got lyrics from Spotify color-lyrics API, lines:", lines.length);
          return { Type: "Line", Content: lines };
        } catch (e) {
          console.warn("[Visualizer Lyrics] Spotify color-lyrics fallback failed:", e?.message || e);
          return null;
        }
      }

      async function _fetchFromLRCLIB(title, artist, durationSec) {
        try {
          if (!title) return null;
          var cleanTitle = title.replace(/\s*\(feat\..*?\)/i, "").replace(/\s*-.*$/, "").trim();
          var cleanArtist = artist ? artist.split(",")[0].trim() : "";
          var nativeFetch = fetch;
          try {
            if (window.parent && window.parent.fetch) nativeFetch = window.parent.fetch;
          } catch (e) { }

          var json = null;
          var query = "https://lrclib.net/api/get?track_name=" + encodeURIComponent(cleanTitle);
          if (cleanArtist) query += "&artist_name=" + encodeURIComponent(cleanArtist);
          if (durationSec && durationSec > 0) query += "&duration=" + Math.round(durationSec);

          try {
            var res = await nativeFetch(query);
            if (res.ok) {
              json = await res.json();
            }
          } catch (e) { }

          if (!json || !json.syncedLyrics) {
            var sQuery = "https://lrclib.net/api/search?q=" + encodeURIComponent(cleanTitle + (cleanArtist ? " " + cleanArtist : ""));
            try {
              var sRes = await nativeFetch(sQuery);
              if (sRes.ok) {
                var sList = await sRes.json();
                if (Array.isArray(sList) && sList.length > 0) {
                  json = sList.find(function (item) { return item && item.syncedLyrics; }) || sList[0];
                }
              }
            } catch (e) { }
          }

          if (!json || !json.syncedLyrics) return null;

          var lrcLines = json.syncedLyrics.split("\n");
          var parsed = [];
          var lrcRegex = /^\[(\d{2}):(\d{2}(?:\.\d{1,3})?)\](.*)$/;
          for (var i = 0; i < lrcLines.length; i++) {
            var lineStr = lrcLines[i].trim();
            var match = lrcRegex.exec(lineStr);
            if (match) {
              var mins = Number(match[1]);
              var secs = Number(match[2]);
              var time = mins * 60 + secs;
              var text = match[3].trim();
              if (text) {
                parsed.push({ time: time, text: text });
              }
            }
          }
          if (parsed.length === 0) return null;

          var lines = [];
          for (var j = 0; j < parsed.length; j++) {
            var curr = parsed[j];
            var next = (j + 1 < parsed.length) ? parsed[j + 1].time : (curr.time + 4.0);
            var end = next;
            var gap = next - curr.time;
            if (gap > 7.0) {
              var estDur = Math.max(2.5, Math.min(gap, curr.text.length * 0.22));
              end = curr.time + estDur;
            }
            lines.push({
              Type: "Vocal",
              StartTime: curr.time,
              EndTime: end,
              Text: curr.text,
              OppositeAligned: false
            });
          }
          console.log("[Visualizer Lyrics] ✓ Got lyrics from LRCLIB, lines:", lines.length);
          return { Type: "Line", Content: lines };
        } catch (e) {
          console.warn("[Visualizer Lyrics] LRCLIB fallback failed:", e?.message || e);
          return null;
        }
      }

      async function _finalizeLyrics(id, raw) {
        var out = raw;
        try { out = await _romanizeLyrics(raw); } catch (e) { out = raw; }
        _lyricsMemCache.set(id, { data: out, ts: Date.now() });
        return out;
      }

      async function _fetchLyrics(id, title, artist, durationSec) {
        try {
          console.log("[Visualizer Lyrics] === Fetching lyrics for track:", id, "===");

          // 0. Check in-memory cache first
          var memEntry = _lyricsMemCache.get(id);
          if (memEntry && Date.now() - memEntry.ts < _LYRICS_CACHE_TTL) {
            console.log("[Visualizer Lyrics] Got lyrics from in-memory cache, type:", memEntry.data?.Type);
            return memEntry.data;
          }

          // 1. Try SpicyLyrics API directly (rich syllable-synced lyrics)
          var raw = await _fetchSpicyLyricsApi(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics API, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          // 2. Backup: Read from SpicyLyrics extension's cache storage
          raw = await _fetchFromSLExtensionCache(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics extension cache, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          // 3. Backup: Read from SpicyLyrics extension IndexedDB storage
          raw = await _fetchFromSLExtensionIDB(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics IndexedDB, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          // 4. Backup: Check SpicyLyrics global exposed objects
          raw = _fetchFromSLGlobal(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics global state, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          // 5. Fallback: Fetch directly from Spotify official color-lyrics endpoint
          raw = await _fetchFromSpotify(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from Spotify color-lyrics fallback, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          // 6. Fallback: Fetch from LRCLIB open synced lyrics database
          raw = await _fetchFromLRCLIB(title, artist, durationSec);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from LRCLIB fallback, type:", raw.Type);
            return await _finalizeLyrics(id, raw);
          }

          console.warn("[Visualizer Lyrics] No lyrics available from any source for", id);
          return null;
        } catch (e) {
          console.error("[Visualizer Lyrics] Error in _fetchLyrics:", e);
          return null;
        }
      }


      function _getActiveLine(ly, ps, isRomanized) {
        if (!ly || !ly.Content) return null;
        for (var i = 0; i < ly.Content.length; i++) {
          var l = ly.Content[i];
          if (ly.Type === "Line" && l.Type === "Vocal" && ps >= l.StartTime && ps <= l.EndTime) {
            var txt = (isRomanized && l.TransliteratedText) ? l.TransliteratedText : (l.Text || "");
            return { text: txt, startTime: l.StartTime, endTime: l.EndTime, li: i, opposite: !!l.OppositeAligned, syllables: null, bgText: "", bgSyllables: null };
          }
          if (ly.Type === "Syllable" && l.Lead && ps >= l.Lead.StartTime && ps <= l.Lead.EndTime) {
            var s = l.Lead.Syllables || [];
            var txt = "";
            if (s.length > 0) {
              txt = (isRomanized && s[0].TransliteratedText) ? s[0].TransliteratedText : (s[0].Text || "");
            }
            for (var j = 1; j < s.length; j++) {
              var word = (isRomanized && s[j].TransliteratedText) ? s[j].TransliteratedText : (s[j].Text || "");
              txt += (s[j - 1].IsPartOfWord ? "" : " ") + word;
            }

            var bgTxt = "";
            var bgSyllables = null;
            if (l.Background && l.Background.length > 0) {
              var bgLine = l.Background.find(function (bg) { return ps >= bg.StartTime && ps <= bg.EndTime; }) || l.Background[0];
              if (bgLine) {
                var bgS = bgLine.Syllables || [];
                if (bgS.length > 0) {
                  bgTxt = (isRomanized && bgS[0].TransliteratedText) ? bgS[0].TransliteratedText : (bgS[0].Text || "");
                }
                for (var j = 1; j < bgS.length; j++) {
                  var word = (isRomanized && bgS[j].TransliteratedText) ? bgS[j].TransliteratedText : (bgS[j].Text || "");
                  bgTxt += (bgS[j - 1].IsPartOfWord ? "" : " ") + word;
                }
                bgSyllables = bgS;
              }
            }

            return {
              text: txt,
              startTime: l.Lead.StartTime,
              endTime: l.Lead.EndTime,
              li: i,
              opposite: !!l.OppositeAligned,
              syllables: s,
              bgText: bgTxt,
              bgSyllables: bgSyllables
            };
          }
        } return null;
      }



      function _getLineLetters(info, lyType, isRomanized) {
        var chars = [];
        if (!info.syllables) {
          var txt = info.text;
          var duration = info.endTime - info.startTime;
          var graphemes = [];
          var regex = /(\p{L}\p{M}*|[\s\d.,\/#!$%\^&\*;:{}=\-_`~()?"'’[\]+<>|\\—♪♫♬]|.)/gu;
          var match;
          while ((match = regex.exec(txt)) !== null) {
            graphemes.push(match[0]);
          }
          var nonSpaceCount = 0;
          for (var j = 0; j < graphemes.length; j++) { if (graphemes[j] !== " ") nonSpaceCount++; }
          if (nonSpaceCount === 0) nonSpaceCount = 1;
          var charDuration = duration / nonSpaceCount;
          var nonSpaceIdx = 0;
          for (var j = 0; j < graphemes.length; j++) {
            var ch = graphemes[j];
            if (ch === " ") { chars.push({ char: " ", isSpace: true }); }
            else {
              var start = info.startTime + nonSpaceIdx * charDuration;
              var end = start + charDuration;
              chars.push({ char: ch, startTime: start, endTime: end, isSpace: false });
              nonSpaceIdx++;
            }
          }
        } else {
          var syllables = info.syllables;
          for (var i = 0; i < syllables.length; i++) {
            var sy = syllables[i];
            if (i > 0 && !syllables[i - 1].IsPartOfWord) { chars.push({ char: " ", isSpace: true }); }
            var txt = (isRomanized && sy.TransliteratedText) ? sy.TransliteratedText : (sy.Text || "");
            var graphemes = [];
            var regex = /(\p{L}\p{M}*|[\s\d.,\/#!$%\^&\*;:{}=\-_`~()?"'’[\]+<>|\\—♪♫♬]|.)/gu;
            var match;
            while ((match = regex.exec(txt)) !== null) {
              graphemes.push(match[0]);
            }
            var duration = sy.EndTime - sy.StartTime;
            var nonSpaceCount = 0;
            for (var j = 0; j < graphemes.length; j++) { if (graphemes[j] !== " ") nonSpaceCount++; }
            if (nonSpaceCount === 0) nonSpaceCount = 1;
            var charDuration = duration / nonSpaceCount;
            var nonSpaceIdx = 0;
            for (var j = 0; j < graphemes.length; j++) {
              var ch = graphemes[j];
              if (ch === " ") { chars.push({ char: " ", isSpace: true }); }
              else {
                var start = sy.StartTime + nonSpaceIdx * charDuration;
                var end = start + charDuration;
                chars.push({ char: ch, startTime: start, endTime: end, isSpace: false });
                nonSpaceIdx++;
              }
            }
          }
        }
        return chars;
      }

      function _tick() {
        try {
        var el = lyricsContainerRef.current;
        var tcRgb = themeColorRef.current?.rgb || { r: 83, g: 83, b: 83 }; var themeColorStr = "rgb(" + tcRgb.r + "," + tcRgb.g + "," + tcRgb.b + ")";
        var uri = Spicetify.Player.data?.item?.uri;
        if (!uri) { setLyricsLine(""); _lastLineIdx = -1; _wordSpans = []; _lineWords = []; return; }
        var tid = uri.split(":")[2];
        if (!tid) { setLyricsLine(""); _lastLineIdx = -1; _wordSpans = []; _lineWords = []; return; }

        if (tid !== _cachedTrackId && !_fetching) {
          _cachedTrackId = tid; _cachedLyrics = undefined; _fetching = true;
          _lastLineIdx = -1; _wordSpans = []; _lineWords = [];
          _lastBgLineIdx = -1; _bgWordSpans = []; _bgLineWords = [];
          if (el) el.innerHTML = "";
          var bgEl = lyricsBgContainerRef.current;
          if (bgEl) { bgEl.innerHTML = ""; bgEl.style.display = "none"; }
          setHasNoLyrics(false);
          var curItem = Spicetify.Player.data?.item;
          var curTitle = curItem?.name || trackTitle || "";
          var curArtist = curItem?.artists?.map(function (a) { return a.name; }).join(", ") || "";
          var curDur = (curItem?.duration?.milliseconds || 0) / 1000;
          _fetchLyrics(tid, curTitle, curArtist, curDur).then(function (d) {
            _cachedLyrics = d; _fetching = false;
          }).catch(function () {
            _cachedLyrics = null; _fetching = false;
          });
        }
        if (_cachedLyrics === undefined) {
          if (el) el.innerHTML = "";
          var bgEl = lyricsBgContainerRef.current;
          if (bgEl) { bgEl.innerHTML = ""; bgEl.style.display = "none"; }
          setLyricsLine("1");
          return;
        }

        if (_cachedLyrics === null) {
          if (el) el.innerHTML = "";
          var bgEl = lyricsBgContainerRef.current;
          if (bgEl) { bgEl.innerHTML = ""; bgEl.style.display = "none"; }
          if (_lastLineIdx !== -3) {
            _lastLineIdx = -3;
            _lastBgLineIdx = -1;
            setLyricsLine("1");
            setHasNoLyrics(true);
            _wordSpans = []; _lineWords = [];
            _bgWordSpans = []; _bgLineWords = [];
          } return;
        }

        var playbackOffset = 0;
        var isRomanized = false;
        try {
          var settingsRaw = Spicetify.LocalStorage.get("SL:settings");
          if (settingsRaw) {
            var settings = JSON.parse(settingsRaw);
            if (settings && settings.playbackOffset !== undefined) {
              playbackOffset = Number(settings.playbackOffset);
            }
          }
          var uiStateRaw = Spicetify.LocalStorage.get("SL:uiState");
          if (uiStateRaw) {
            var uiState = JSON.parse(uiStateRaw);
            if (uiState && uiState.romanization !== undefined) {
              isRomanized = !!uiState.romanization;
            }
          }
        } catch (e) { }

        var progressMs = 0;
        if (!syncedPosition) {
          var rawProgressMs = 0;
          try {
            var state = Spicetify.Player.origin?._state || Spicetify.Platform?.PlayerAPI?._state;
            if (state && state.timestamp) {
              var now = Date.now();
              rawProgressMs = state.isPaused
                ? state.positionAsOfTimestamp
                : state.positionAsOfTimestamp + (now - state.timestamp);
            } else {
              rawProgressMs = Spicetify.Player.getProgress();
            }
          } catch (e) {
            rawProgressMs = Spicetify.Player.getProgress();
          }
          progressMs = rawProgressMs + 100 - playbackOffset;
        } else {
          var StartedSyncAt = syncedPosition.StartedSyncAt;
          var Position = syncedPosition.Position;
          var now = Date.now();
          var deltaTime = now - StartedSyncAt;

          if (!Spicetify.Player.isPlaying()) {
            progressMs = normalizeProgress(Position - playbackOffset, false);
          } else {
            var FinalPosition = Position + deltaTime;
            progressMs = normalizeProgress(FinalPosition + 100 - playbackOffset, true);
          }
        }
        var ps = progressMs / 1000;
        if (kawarpInstanceRef.current && u.audioAnalysis && Spicetify.Player.isPlaying()) {
          var bgSpeed = _bgAnimController.getSpeedMultiplier(ps, u.audioAnalysis);
          kawarpInstanceRef.current.setOptions({ animationSpeed: bgSpeed });
        }

        var info = _getActiveLine(_cachedLyrics, ps, isRomanized);

        if (!info) {
          var prevLine = null;
          var nextLine = null;
          if (_cachedLyrics && _cachedLyrics.Content) {
            for (var i = 0; i < _cachedLyrics.Content.length; i++) {
              var l = _cachedLyrics.Content[i];
              var start = 0;
              var end = 0;
              if (_cachedLyrics.Type === "Line") {
                start = l.StartTime;
                end = l.EndTime;
              } else if (_cachedLyrics.Type === "Syllable" && l.Lead) {
                start = l.Lead.StartTime;
                end = l.Lead.EndTime;
              }
              if (ps < start) {
                nextLine = { start: start, end: end, index: i };
                break;
              }
              prevLine = { start: start, end: end, index: i };
            }
          }

          var hasNotes = false;
          if (!prevLine) {
            hasNotes = true;
          } else if (!nextLine) {
            hasNotes = true;
          } else {
            var gap = nextLine.start - prevLine.end;
            if (gap >= 5.0) {
              hasNotes = true;
            }
          }

          if (hasNotes) {
            if (_lastLineIdx !== -2) {
              _lastLineIdx = -2; _wordSpans = []; _lineWords = [];
              if (el) {
                el.innerHTML = '<span class="vis-music-note" style="--i:1">♪</span><span class="vis-music-note" style="--i:2">♫</span><span class="vis-music-note" style="--i:3">♬</span>';
                el.className = "visualizer-overlay__lyrics-text visualizer-overlay__lyrics-enter";
              }
            }
            if (el) {
              var noteSpans = Array.from(el.querySelectorAll("span.vis-music-note"));
              if (noteSpans.length === 3) {
                var interludeStart = prevLine ? prevLine.end : 0;
                var interludeEnd = nextLine ? nextLine.start : ((u.audioAnalysis?.track?.duration) || (Spicetify.Player.data?.item?.duration_ms / 1000) || (prevLine ? prevLine.end + 15 : 180));
                var interludeDuration = interludeEnd - interludeStart;
                if (interludeDuration <= 0.1) interludeDuration = 5.0;
                var elapsed = ps - interludeStart;
                var ranges = [
                  { start: 0, end: interludeDuration / 2 },
                  { start: interludeDuration / 4, end: interludeDuration * 3 / 4 },
                  { start: interludeDuration / 2, end: interludeDuration }
                ];
                for (var j = 0; j < 3; j++) {
                  var note = noteSpans[j];
                  var range = ranges[j];
                  var nStart = range.start;
                  var nEnd = range.end;
                  if (elapsed < nStart || elapsed > nEnd) {
                    note.style.transform = "scale(0.95) translateY(0px)";
                    note.style.color = "color-mix(in srgb, " + themeColorStr + " 35%, transparent)";
                    note.style.textShadow = "none";
                    note.style.opacity = "0.35";
                  } else {
                    var t = (elapsed - nStart) / (nEnd - nStart || 0.1);
                    var wave = Math.sin(t * Math.PI);
                    var scaleFactor = wave;
                    var bounceFactor = wave;
                    var glowRatio = wave;
                    var opacityFactor = 0.35 + 0.65 * wave;
                    note.style.transform = "scale(" + (0.95 + 0.10 * scaleFactor) + ") translateY(" + (-3 * bounceFactor) + "px)";
                    note.style.color = "color-mix(in srgb, " + themeColorStr + " " + Math.round(opacityFactor * 100) + "%, transparent)";
                    note.style.textShadow = glowRatio > 0.01 ? "0 0 " + (glowRatio * 6) + "px rgba(255, 255, 255, 0.6), 0 0 " + (glowRatio * 16) + "px " + themeColorStr : "none";
                    note.style.opacity = String(opacityFactor);
                  }
                }
              }
            }
            return;
          } else {
            var l = _cachedLyrics.Content[prevLine.index];
            var txt = "";
            var syllables = null;
            if (_cachedLyrics.Type === "Line") {
              txt = (isRomanized && l.TransliteratedText) ? l.TransliteratedText : (l.Text || "");
            } else if (_cachedLyrics.Type === "Syllable" && l.Lead) {
              var s = l.Lead.Syllables || [];
              if (s.length > 0) {
                txt = (isRomanized && s[0].TransliteratedText) ? s[0].TransliteratedText : (s[0].Text || "");
              }
              for (var j = 1; j < s.length; j++) {
                var word = (isRomanized && s[j].TransliteratedText) ? s[j].TransliteratedText : (s[j].Text || "");
                txt += (s[j - 1].IsPartOfWord ? "" : " ") + word;
              }
              syllables = s;
            }
            info = { text: txt, startTime: prevLine.start, endTime: prevLine.end, li: prevLine.index, opposite: !!l.OppositeAligned, syllables: syllables };
          }
        }

        setLyricsLine("1");
        setHasNoLyrics(false);

        function _getLineWords(charsArr) {
          if (!charsArr || charsArr.length === 0) return [];
          var text = charsArr.map(function(c) { return c.char; }).join("");
          var words = [];
          if (typeof Intl !== "undefined" && Intl.Segmenter) {
            try {
              var segmenter = new Intl.Segmenter(undefined, { granularity: "word" });
              var segments = Array.from(segmenter.segment(text));
              var charIdx = 0;
              var currentWord = null;

              for (var sIdx = 0; sIdx < segments.length; sIdx++) {
                var seg = segments[sIdx];
                var segStr = seg.segment;
                var isWord = seg.isWordLike;

                if (/^\s+$/.test(segStr)) {
                  if (currentWord) {
                    currentWord.hasTrailingSpace = true;
                    words.push(currentWord);
                    currentWord = null;
                  }
                  charIdx += segStr.length;
                  continue;
                }

                if (isWord || !currentWord) {
                  if (currentWord) {
                    words.push(currentWord);
                  }
                  currentWord = {
                    text: "",
                    startTime: charsArr[charIdx] ? charsArr[charIdx].startTime : 0,
                    endTime: charsArr[charIdx] ? charsArr[charIdx].endTime : 0,
                    chars: [],
                    hasTrailingSpace: false
                  };
                }

                for (var c = 0; c < segStr.length; c++) {
                  var charObj = charsArr[charIdx++];
                  if (charObj) {
                    currentWord.text += charObj.char;
                    currentWord.chars.push(charObj);
                    currentWord.endTime = Math.max(currentWord.endTime, charObj.endTime);
                  }
                }
              }
              if (currentWord) words.push(currentWord);
              return words;
            } catch (e) { }
          }

          var currentWord = null;
          for (var k = 0; k < charsArr.length; k++) {
            var c = charsArr[k];
            if (c.isSpace) {
              if (currentWord) {
                currentWord.hasTrailingSpace = true;
                words.push(currentWord);
                currentWord = null;
              }
            } else {
              if (!currentWord) {
                currentWord = {
                  text: "",
                  startTime: c.startTime,
                  endTime: c.endTime,
                  chars: [],
                  hasTrailingSpace: false
                };
              }
              currentWord.text += c.char;
              currentWord.chars.push(c);
              currentWord.endTime = Math.max(currentWord.endTime, c.endTime);
            }
          }
          if (currentWord) words.push(currentWord);
          return words;
        }

        function _generateHtml(words) {
          var htmlStr = "";
          for (var w = 0; w < words.length; w++) {
            var word = words[w];
            htmlStr += '<span class="vis-word">';
            for (var c = 0; c < word.chars.length; c++) {
              htmlStr += '<span class="vis-letter">' + word.chars[c].char + "</span>";
            }
            htmlStr += "</span>";
            if (word.hasTrailingSpace) htmlStr += " ";
          }
          return htmlStr;
        }

        // Helper to autoscale
        function _autoScale(elem) {
          var parentWidth = elem.clientWidth || elem.parentElement?.clientWidth || 300;
          if (parentWidth > 0) {
            var wordElems = Array.from(elem.querySelectorAll("span.vis-word"));
            var maxWordWidth = 0;
            for (var wIdx = 0; wIdx < wordElems.length; wIdx++) {
              var wW = wordElems[wIdx].offsetWidth;
              if (wW > maxWordWidth) maxWordWidth = wW;
            }
            if (maxWordWidth > parentWidth * 0.95) {
              var scale = (parentWidth * 0.9) / maxWordWidth;
              if (scale < 1) {
                var currentStyle = window.getComputedStyle(elem);
                var currentSize = parseFloat(currentStyle.fontSize);
                if (currentSize > 0) {
                  elem.style.fontSize = (currentSize * scale) + "px";
                }
              }
            }
          }
        }
        // Let the line currently on screen slide DOWN + fade out underneath
        // the next one, which enters right after sliding UP from below.
        var _ghostTimer = null;
        function _spawnExitGhost(srcEl) {
          if (!srcEl || !srcEl.parentNode) return;
          if (!srcEl.querySelector("span.vis-letter")) return;
          var existingGhosts = srcEl.parentNode.querySelectorAll(".visualizer-overlay__lyrics-ghost");
          existingGhosts.forEach(function (g) { if (g.parentNode) g.parentNode.removeChild(g); });
          var ghost = srcEl.cloneNode(true);
          ghost.removeAttribute("id");
          ghost.className = (srcEl.className.indexOf("lyrics-enter") >= 0
            ? srcEl.className.replace("lyrics-enter", "lyrics-ghost")
            : (srcEl.className + " visualizer-overlay__lyrics-ghost"));
          ghost.style.top = (srcEl.offsetTop || 0) + "px";
          srcEl.parentNode.insertBefore(ghost, srcEl);
          setTimeout(function () { if (ghost.parentNode) ghost.parentNode.removeChild(ghost); }, 540);
        }
        

        // 1. Lead Line Html
        if (info.li !== _lastLineIdx) {
          _lastLineIdx = info.li;
          var chars = _getLineLetters(info, _cachedLyrics.Type, isRomanized);
          _lineWords = _getLineWords(chars);
          if (el) {
            _spawnExitGhost(el);
            el.innerHTML = _generateHtml(_lineWords);
            el.style.fontSize = "";
            el.className = "visualizer-overlay__lyrics-text" + (info.opposite ? " OppositeAligned" : ""); void el.offsetWidth;
            el.className = "visualizer-overlay__lyrics-text visualizer-overlay__lyrics-enter" + (info.opposite ? " OppositeAligned" : "");
            _wordSpans = Array.from(el.querySelectorAll("span.vis-word"));
            _lineWords.forEach(function(w, idx) {
              w.letterSpans = _wordSpans[idx] ? Array.from(_wordSpans[idx].querySelectorAll("span.vis-letter")) : [];
            });
            _autoScale(el);
          }
        }

        // 2. Background Line Html
        var bgEl = lyricsBgContainerRef.current;
        if (info.bgText) {
          var bgInfo = { text: info.bgText, startTime: info.startTime, endTime: info.endTime, syllables: info.bgSyllables };
          var bgLiKey = info.li + "_" + info.bgText;
          if (bgLiKey !== _lastBgLineIdx) {
            _lastBgLineIdx = bgLiKey;
            var bgChars = _getLineLetters(bgInfo, _cachedLyrics.Type, isRomanized);
            _bgLineWords = _getLineWords(bgChars);
            if (bgEl) {
              _spawnExitGhost(bgEl);
              bgEl.innerHTML = _generateHtml(_bgLineWords);
              bgEl.style.display = "block";
              bgEl.className = "visualizer-overlay__lyrics-bg-text" + (info.opposite ? " OppositeAligned" : ""); void bgEl.offsetWidth;
              bgEl.className = "visualizer-overlay__lyrics-bg-text visualizer-overlay__lyrics-enter" + (info.opposite ? " OppositeAligned" : "");
              _bgWordSpans = Array.from(bgEl.querySelectorAll("span.vis-word"));
              _bgLineWords.forEach(function(w, idx) {
                w.letterSpans = _bgWordSpans[idx] ? Array.from(_bgWordSpans[idx].querySelectorAll("span.vis-letter")) : [];
              });
            }
          }
        } else {
          _lastBgLineIdx = -1;
          _bgWordSpans = [];
          _bgLineWords = [];
          if (bgEl) {
            bgEl.innerHTML = "";
            bgEl.style.display = "none";
          }
        }

        function _animateWords(spans, words, isBg) {
          for (var w = 0; w < spans.length; w++) {
            var span = spans[w];
            var word = words[w];
            if (!word) continue;

            var letters = word.letterSpans || [];
            var numLetters = letters.length;
            var chars = word.chars || [];

            if (ps < word.startTime) {
              _setStyle(span, "filter", "none");
              _setStyle(span, "transform", "scale(1) translateZ(0)");
              for (var i = 0; i < numLetters; i++) {
                if (!letters[i]) continue;
                _setStyle(letters[i], "transform", "scale(1) translateZ(0)");
                _setStyle(letters[i], "color", "var(--vis-unsung-color)");
                _setStyle(letters[i], "opacity", String(isBg ? 0.25 : 0.40));
                _setStyle(letters[i], "filter", "none");
              }
            } else if (ps <= word.endTime) {
              var dur = word.endTime - word.startTime;
              var progress = dur > 0 ? (ps - word.startTime) / dur : 1;
              progress = Math.max(0, Math.min(1, progress));

              var avgCharDur = numLetters > 0 ? dur / numLetters : dur;
              var speedFactor = Math.min(1.0, Math.max(0.0, (avgCharDur - 0.08) / 0.35));
              var maxBulge = (0.10 + 0.14 * speedFactor) * (isBg ? 0.7 : 1.0);

              var activeCharIdx = 0;
              for (var cIdx = 0; cIdx < numLetters; cIdx++) {
                var cItem = chars[cIdx];
                if (cItem) {
                  if (ps >= cItem.startTime && ps <= cItem.endTime) {
                    var cDur = cItem.endTime - cItem.startTime;
                    var cProg = cDur > 0 ? (ps - cItem.startTime) / cDur : 0;
                    activeCharIdx = cIdx + cProg;
                    break;
                  } else if (ps > cItem.endTime) {
                    activeCharIdx = cIdx + 1;
                  }
                }
              }

              var sigma = 1.25;

              for (var i = 0; i < numLetters; i++) {
                if (!letters[i]) continue;
                var ch = chars[i];
                var chStart = ch ? ch.startTime : (word.startTime + (i / numLetters) * dur);
                var chEnd = ch ? ch.endTime : (word.startTime + ((i + 1) / numLetters) * dur);
                var chDur = chEnd - chStart;

                var dist = i - activeCharIdx;
                var weight = Math.exp(-0.5 * (dist * dist) / (sigma * sigma));
                var letterScale = 1.0 + maxBulge * weight;
                letters[i].style.transform = "scale(" + letterScale.toFixed(4) + ") translateZ(0)";

                if (ps < chStart) {
                  _setStyle(letters[i], "color", "var(--vis-unsung-color)");
                  _setStyle(letters[i], "opacity", String(isBg ? 0.25 : 0.40));
                  _setStyle(letters[i], "filter", "none");
                } else if (ps > chEnd) {
                  _setStyle(letters[i], "color", "var(--vis-sung-color)");
                  _setStyle(letters[i], "opacity", String(isBg ? 0.6 : 0.95));
                  _setStyle(letters[i], "filter", "drop-shadow(0 0 " + (isBg ? 4 : 8) + "px var(--vis-glow-color))");
                } else {
                  var charProg = chDur > 0 ? (ps - chStart) / chDur : 1;
                  charProg = Math.max(0, Math.min(1, charProg));
                  if (charProg < 0.55) {
                    var halfPct = isBg ? 30 : 45;
                    _setStyle(letters[i], "color", "color-mix(in srgb, var(--vis-sung-color) " + halfPct + "%, var(--vis-unsung-color))");
                  } else {
                    _setStyle(letters[i], "color", "var(--vis-sung-color)");
                  }
                  var activeOp = (isBg ? 0.25 : 0.40) + (isBg ? 0.35 : 0.55) * charProg;
                  _setStyle(letters[i], "opacity", activeOp.toFixed(2));
                  _setStyle(letters[i], "filter", "drop-shadow(0 0 " + (isBg ? 5 : 8) + "px var(--vis-glow-color))");
                }
              }

              var peakScale = isBg ? 1.06 : 1.12;
              var growEase = Math.sin(progress * Math.PI * 0.5);
              var wordScale = 1.0 + (peakScale - 1.0) * growEase;
              _setStyle(span, "transform", "scale(" + wordScale.toFixed(4) + ") translateZ(0)");
              _setStyle(span, "filter", "none");
            } else {
              var dur = word.endTime - word.startTime;
              var peakScale = isBg ? 1.06 : 1.12;
              var elapsed = ps - word.endTime;
              var returnDur = Math.min(0.40, Math.max(0.18, dur * 0.50));
              var decayFactor = elapsed < returnDur ? Math.pow(1.0 - elapsed / returnDur, 2.0) : 0;
              for (var i = 0; i < numLetters; i++) {
                if (!letters[i]) continue;
                _setStyle(letters[i], "color", "var(--vis-sung-color)");
                _setStyle(letters[i], "opacity", String(isBg ? 0.6 : 0.95));
                _setStyle(letters[i], "filter", "drop-shadow(0 0 " + (isBg ? 4 : 8) + "px var(--vis-glow-color))");
                if (decayFactor > 0.01) {
                  var settledScale = 1.0 + maxBulge * 0.12 * decayFactor;
                  letters[i].style.transform = "scale(" + settledScale.toFixed(4) + ") translateZ(0)";
                } else {
                  letters[i].style.transform = "scale(1) translateZ(0)";
                }
              }
              if (decayFactor > 0.01) {
                var settledWordScale = 1.0 + (peakScale - 1.0) * decayFactor;
                _setStyle(span, "transform", "scale(" + settledWordScale.toFixed(4) + ") translateZ(0)");
                _setStyle(span, "filter", "none");
              } else {
                _setStyle(span, "transform", "scale(1) translateZ(0)");
                _setStyle(span, "filter", "none");
              }
            }
          }
        }

        if (el && _wordSpans.length > 0 && _wordSpans.length === _lineWords.length) {
          _animateWords(_wordSpans, _lineWords, false);
        }
        if (bgEl && _bgWordSpans.length > 0 && _bgWordSpans.length === _bgLineWords.length) {
          _animateWords(_bgWordSpans, _bgLineWords, true);
        }
        } catch (e) { }
      }

      var _raf;
      function _loop() {
        _tick();
        _raf = requestAnimationFrame(_loop);
      }
      _loop();

      var _songChangeHandler = async function () {
        try {
          var uri = Spicetify.Player.data?.item?.uri;
          if (!uri) return;
          var tid = uri.split(":")[2];
          if (!tid) return;
          if (tid === _cachedTrackId && _cachedLyrics !== undefined) return;
          if (_fetching) return;
          console.log("[Visualizer Lyrics] Prefetching lyrics on songchange for:", tid);
          _cachedTrackId = tid; _cachedLyrics = undefined; _fetching = true;
          var curItem = Spicetify.Player.data?.item;
          var curTitle = curItem?.name || "";
          var curArtist = curItem?.artists?.map(function (a) { return a.name; }).join(", ") || "";
          var curDur = (curItem?.duration?.milliseconds || 0) / 1000;
          try {
            var result = await _fetchLyrics(tid, curTitle, curArtist, curDur);
            _cachedLyrics = result;
          } catch (e) { _cachedLyrics = null; }
          _fetching = false;
        } catch (e) { }
      };
      Spicetify.Player.addEventListener("songchange", _songChangeHandler);

      return function () {
        cancelAnimationFrame(_raf);
        if (syncTimeoutId) clearTimeout(syncTimeoutId);
        Spicetify.Player.removeEventListener("songchange", _songChangeHandler);
      };
    }, [refreshTrigger, Spicetify.Player.data?.item?.uri, isRomanized]), g.default.createElement("div", { className: "visualizer-container" + (isPlaying ? "" : " visualizer-container--paused"), ref: a, style: { "--theme-color": "rgb(" + (u?.themeColor?.rgb?.r ?? 83) + "," + (u?.themeColor?.rgb?.g ?? 83) + "," + (u?.themeColor?.rgb?.b ?? 83) + ")" } }, !d && g.default.createElement(g.default.Fragment, null, g.default.createElement("div", { className: "visualizer-backdrop" }, g.default.createElement("canvas", { ref: kawarpCanvasRef, className: "visualizer-backdrop__canvas spicy-dynamic-bg" }), g.default.createElement("div", { ref: backdropParallaxRef, className: "visualizer-backdrop__parallax" }, prevArt && g.default.createElement("img", { src: prevArt, className: "visualizer-backdrop__img", alt: "" }), currentArt && g.default.createElement("img", { key: fadeKey, src: currentArt, className: "visualizer-backdrop__img visualizer-backdrop__img--fade-in", alt: "" }))), g.default.createElement(p.Provider, { value: f }, e && g.default.createElement(e, { isEnabled: "running" === o.state, audioAnalysis: u.audioAnalysis, themeColor: u.themeColor, isPlaying: isPlaying })), g.default.createElement("div", { className: "visualizer-overlay", style: { "--theme-color": "rgb(" + (u?.themeColor?.rgb?.r ?? 83) + "," + (u?.themeColor?.rgb?.g ?? 83) + "," + (u?.themeColor?.rgb?.b ?? 83) + ")" } }, g.default.createElement("div", { className: "visualizer-overlay__upper" }, g.default.createElement("div", { className: "visualizer-overlay__label" }, "Now Playing", g.default.createElement("div", { className: "visualizer-overlay__wave" + (isPlaying ? " is-playing" : "") }, g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 1 } }), g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 2 } }), g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 3 } }))), g.default.createElement("div", { className: "visualizer-overlay__title-container" }, g.default.createElement("strong", { className: "visualizer-overlay__title", style: { "--title-length": (trackTitle || "No track").length } }, trackTitle || "No track")), g.default.createElement("div", { className: "visualizer-overlay__artist" }, Spicetify.Player.data?.item?.artists?.map(a => a.name).join(", ") || ""), g.default.createElement("div", { className: "visualizer-overlay__progress" }, g.default.createElement("div", { className: "visualizer-overlay__time-row" }, g.default.createElement("div", { className: "visualizer-overlay__time-left" }, formatTime(isDraggingSeek ? dragProgress : trackProgress)), g.default.createElement("div", { className: "visualizer-overlay__time-right" }, formatTime(u.audioAnalysis?.track?.duration || 0))), g.default.createElement("div", { ref: progressBarContainerRef, className: "visualizer-overlay__progress-bar-container" + (isDraggingSeek ? " visualizer-overlay__progress-bar-container--dragging" : ""), onMouseDown: handleSeekMouseDown }, g.default.createElement("div", { className: "visualizer-overlay__progress-bar", style: { width: (100 * ((isDraggingSeek ? dragProgress : trackProgress) / (u.audioAnalysis?.track?.duration || 1))) + "%" } }))), (n || r.isSecondaryWindow) && g.default.createElement("div", { className: "visualizer-overlay__controls" }, g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (isLiked ? " visualizer-overlay__ctrl-btn--liked" : ""), onClick: handleToggleLike, title: isLiked ? "Remove from Your Library" : "Save to Your Library" }, g.default.createElement("span", { className: "material-icons" }, isLiked ? "favorite" : "favorite_border")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (shuffle ? " visualizer-overlay__ctrl-btn--active" : ""), onClick: () => Spicetify.Player.toggleShuffle() }, g.default.createElement("span", { className: "material-icons" }, "shuffle")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.prev() }, g.default.createElement("span", { className: "material-icons" }, "skip_previous")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn visualizer-overlay__ctrl-btn--play", onClick: () => Spicetify.Player.togglePlay() }, g.default.createElement("span", { className: "material-icons" }, isPlaying ? "pause" : "play_arrow")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.next() }, g.default.createElement("span", { className: "material-icons" }, "skip_next")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (repeatMode ? " visualizer-overlay__ctrl-btn--active" : ""), onClick: () => Spicetify.Player.toggleRepeat() }, g.default.createElement("span", { className: "material-icons" }, 2 === repeatMode ? "repeat_one" : repeatMode ? "repeat" : "repeat")), g.default.createElement("div", { className: "visualizer-overlay__volume-wrap" }, g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.setMuted && Spicetify.Player.setMuted(!Spicetify.Player.isMuted()) }, g.default.createElement("span", { className: "material-icons" }, Spicetify.Player.isMuted && Spicetify.Player.isMuted() || volume === 0 ? "volume_off" : volume < .5 ? "volume_down" : "volume_up")), g.default.createElement("input", { type: "range", className: "visualizer-overlay__volume", min: "0", max: "1", step: "0.01", value: volume, onChange: e => Spicetify.Player.setVolume(parseFloat(e.target.value)) })))), showLyrics && lyricsLine && g.default.createElement("div", { className: "visualizer-overlay__lyrics" }, hasNoLyrics ? g.default.createElement("div", { key: "no-lyrics", className: "visualizer-overlay__no-lyrics-container" }, g.default.createElement("span", { className: "visualizer-overlay__lyrics-text" }, "No lyrics available"), g.default.createElement("button", { className: "visualizer-overlay__lyrics-refresh-btn-inline", onClick: handleRefreshLyrics, title: "Refresh Lyrics", style: { background: "none", border: "none", cursor: "pointer", padding: "0", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--theme-color, #ffffff)" } }, g.default.createElement("span", { className: "material-symbols-outlined", style: { fontSize: "1.2rem" } }, "refresh"))) : g.default.createElement(g.default.Fragment, null, g.default.createElement("div", { ref: lyricsContainerRef, key: "lyrics-words", className: "visualizer-overlay__lyrics-text", id: "vis-lyrics-words" }), g.default.createElement("div", { ref: lyricsBgContainerRef, key: "lyrics-bg-words", className: "visualizer-overlay__lyrics-bg-text", id: "vis-lyrics-bg-words", style: { display: "none" } })))), !r.isSecondaryWindow && g.default.createElement("div", { className: "visualizer-top-bar" }, u.audioAnalysis?.isFallback && g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: "Spotify doesn't have audio analysis data for this song right now, so this animation is simulated and not synced to the music.", placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn", type: "button", "aria-label": "Simulated animation notice" }, g.default.createElement("span", { className: "material-symbols-outlined" }, "info"))), g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: showLyrics ? "Hide Lyrics" : "Show Lyrics", placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn" + (showLyrics ? " visualizer-top-btn--active" : ""), onClick: () => { var nextVal = !showLyrics; setShowLyrics(nextVal); if (nextVal) handleRefreshLyrics(); } }, g.default.createElement("span", { className: "material-symbols-outlined" }, "lyrics"))), g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: isRomanized ? "Show Original Lyrics" : "Show Romanized Lyrics", placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn" + (isRomanized ? " visualizer-top-btn--active" : ""), onClick: handleToggleRomanization }, g.default.createElement("span", { className: "material-symbols-outlined" }, "translate"))), g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: n ? "Exit Fullscreen" : "Enter Fullscreen", placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn", onClick: () => n ? a.current?.ownerDocument.exitFullscreen() : a.current?.requestFullscreen() }, g.default.createElement("span", { className: "material-symbols-outlined" }, n ? "fullscreen_exit" : "fullscreen"))), hasUpdate && g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: updateDownloaded ? "Update downloaded - run spicetify apply in your terminal" : (isDownloadingUpdate ? "Downloading update..." : "Update available - click to download"), placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn visualizer-top-btn--update" + (updateDownloaded ? " visualizer-top-btn--downloaded" : ""), title: updateDownloaded ? "Update downloaded - run spicetify apply in your terminal" : "Download update", disabled: isDownloadingUpdate, onClick: () => handleUpdateDownload() }, g.default.createElement("span", { className: "material-symbols-outlined" }, updateDownloaded ? "check_circle" : (isDownloadingUpdate ? "downloading" : "download")))), g.default.createElement("button", { className: "visualizer-top-btn", title: r.isSecondaryWindow ? "Close Window" : "Open Popup", onClick: () => r.isSecondaryWindow ? window.close() : (async r => { try { let e = null; try { e = window.open("about:blank", "_blank", "width=960,height=540"); } catch(err) { e = null; } if (!e) { let t = "fallback PiP API is not available"; if (window.documentPictureInPicture && (window.documentPictureInPicture.window ? t = "cannot open another PiP window" : e = await window.documentPictureInPicture.requestWindow({ width: 960, height: 540 }).catch(e => (t = e ? "" + e : "unknown error", null))), !e) return void Spicetify.showNotification(_.default.createElement("span", null, "Failed to open window: ", t, ". Try with devtools using", " ", _.default.createElement("code", { style: { fontSize: "12px", background: "rgba(0 0 0 / 0.2)", borderRadius: "4px", padding: "2px" } }, "spicetify enable-devtools"), "."), !0) } let t = e.document; Array.from(document.styleSheets).forEach(e => { e.ownerNode && "tagName" in e.ownerNode && (e = e.ownerNode, e = t.importNode(e, !0), t.head.appendChild(e)) }), _injectFonts(t), t.documentElement.className = document.documentElement.className, t.body.className = document.body.className; var i = D.getStyleSheetManager(), a = Spicetify.ReactDOM.unmountComponentAtNode(t.body), n = _.default.createElement(we, { isSecondaryWindow: !0, onWindowDestroyed: a, initialRenderer: r }); i ? Spicetify.ReactDOM.render(_.default.createElement(i, { target: t.head }, n), t.body) : (Spicetify.showNotification("[Visualizer] Could not find StyleSheetManager. Styles in popup window probably won't work.", !0), Spicetify.ReactDOM.render(n, t.body)) } catch (e) { console.error("[Visualizer]", "error opening popup window", e); let t = e ? "" + e : "unknown error"; Spicetify.showNotification("Failed to open window: " + t, !0) } })(t) }, g.default.createElement("span", { className: "material-symbols-outlined" }, r.isSecondaryWindow ? "pip_exit" : "pip")))), "loading" === o.state ? g.default.createElement(B, null) : "error" === o.state ? g.default.createElement("div", { className: y.error_container }, g.default.createElement("div", { className: y.error_message }, o.errorData.message), 0 === o.errorData.recovery && g.default.createElement(Spicetify.ReactComponent.ButtonPrimary, { onClick: () => m(Spicetify.Player.data) }, "Try again")) : null)
  } var _e = r(i()); return xe = k, M(n({}, "__esModule", { value: !0 }), xe)
})(); let render = () => visualizer.default();