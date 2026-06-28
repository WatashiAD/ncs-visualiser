var visualizer = (() => {
  var e, t, P = Object.create, n = Object.defineProperty, U = Object.getOwnPropertyDescriptor, I = Object.getOwnPropertyNames, N = Object.getPrototypeOf, O = Object.prototype.hasOwnProperty, M = (t, r, i, a) => { if (r && "object" == typeof r || "function" == typeof r) for (let e of I(r)) O.call(t, e) || e === i || n(t, e, { get: () => r[e], enumerable: !(a = U(r, e)) || a.enumerable }); return t }, r = (e, t, r) => (r = null != e ? P(N(e)) : {}, M(!t && e && e.__esModule ? r : n(r, "default", { value: e, enumerable: !0 }), e)), i = (e = { "external-global-plugin:react"(e, t) { t.exports = Spicetify.React } }, function () { return t || (0, e[I(e)[0]])((t = { exports: {} }).exports, t), t.exports }), k = {}, g = (((e, t) => { for (var r in t) n(e, r, { get: t[r], enumerable: !0 }) })(k, { default: () => function () { return _e.default.createElement(we, null) } }), r(i())), y = { main_menu_button: "app-module__main_menu_button___wQmMP_visualizer", error_container: "app-module__error_container___8JcIQ_visualizer", error_message: "app-module__error_message___soZdL_visualizer" }, a = r(i()); function B() { return a.default.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, a.default.createElement("circle", { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", "stroke-width": "2" }, a.default.createElement("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: "0s" }), a.default.createElement("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: "0s" })), a.default.createElement("circle", { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", "stroke-width": "2" }, a.default.createElement("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: "-0.5s" }), a.default.createElement("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: "-0.5s" }))) } var o = r(i()), m = r(i()); function s(a) { let { contextType: n, onInit: o, onResize: s, onRender: u, style: e, data: l, isEnabled: t } = a, c = (0, m.useRef)(null), [f, d] = (0, m.useState)(null), dataRef = (0, m.useRef)(l); dataRef.current = l; let h = (0, m.useCallback)((e, t) => { var r = Math.round(e.clientWidth * window.devicePixelRatio), i = Math.round(e.clientHeight * window.devicePixelRatio), { width: r, height: i } = a.sizeConstraint?.(r, i) ?? { width: r, height: i }; e.width === r && e.height === i || (e.width = r, e.height = i) }, []); return (0, m.useEffect)(() => { if (o) { var e = c.current; if (e) { var t, r, i = e.ownerDocument.defaultView; if (i) return t = e.getContext(n), r = o(t), h(e, i), s(t, r), d(r), () => d(null) } } }, [n, o]), (0, m.useEffect)(() => { if (t && f && u) { var e = c.current; if (e) { let a = e.ownerDocument.defaultView; if (a) { let t = e.getContext(n), r = 0, i = e => { f && (u(t, dataRef.current, f, e), r = a.requestAnimationFrame(i)) }; return r = a.requestAnimationFrame(i), () => { r && a.cancelAnimationFrame(r) } } } } }, [n, u, f, t]), (0, m.useEffect)(() => { if (c.current) { var t = c.current.ownerDocument.defaultView; if (t) { let e = new t.ResizeObserver(() => { var e, t = c.current; t && (e = t.ownerDocument.defaultView) && (h(t, e), e = t.getContext(n)) && f && s(e, f) }); return e.observe(c.current), () => e.disconnect() } } }, [n, s, f]), m.default.createElement("canvas", { ref: c, style: { ...e || {}, ...t ? {} : { visibility: "hidden" } } }) } function R(e, t, r) { let i = 0, a = e.length; for (; 1 < a - i;) { var n = Math.floor((a + i) / 2); t(e[n], n) <= r ? i = n : a = n } return i } function S(e) { return Math.min(Math.max(Math.pow(10, e / 20), 0), 1) } function V(e) { return e * e * (3 - 2 * e) } function w(e, t, r, i, a) { return e = (e = (e - t) / (r - t)) * (a - i) + i } function h(e, t) { return -.5 * (e.x - t.x) * (e.y + t.y) } function z(e, t, r, i, a) { var n, o = R(e, t, a), s = e[o]; return e.length - 2 < o ? r(s, o) : (e = e[o + 1], a = a, n = t(s, o), t = t(e, o + 1), i = i, s = r(s, o), r = r(e, o + 1), a = (a = i(a = (a - n) / (t - n))) * (r - s) + s) } var p = (0, r(i()).createContext)(() => { }); function X(e, t) { for (var r = new v(31), i = 0; i < 31; ++i)r[i] = t += 1 << e[i - 1]; for (var a = new G(r[30]), i = 1; i < 30; ++i)for (var n = r[i]; n < r[i + 1]; ++n)a[n] = n - r[i] << 5 | i; return { b: r, r: a } } var u, l = r(i()), q = Uint8Array, v = Uint16Array, G = Int32Array, j = new q([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Q = new q([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), $ = new q([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), c = X(j, 2), K = c.b, c = (c.r[K[28] = 258] = 28, X(Q, 0)), J = c.b, Z = new v(32768); for (d = 0; d < 32768; ++d)Z[d] = ((65280 & (u = (61680 & (u = (52428 & (u = (43690 & d) >> 1 | (21845 & d) << 1)) >> 2 | (13107 & u) << 2)) >> 4 | (3855 & u) << 4)) >> 8 | (255 & u) << 8) >> 1; var W = function (e, t, r) { for (var i = e.length, a = 0, n = new v(t); a < i; ++a)e[a] && ++n[e[a] - 1]; var o = new v(t); for (a = 1; a < t; ++a)o[a] = o[a - 1] + n[a - 1] << 1; if (r) { for (var s = new v(1 << t), u = 15 - t, a = 0; a < i; ++a)if (e[a]) for (var l = a << 4 | e[a], c = t - e[a], f = o[e[a] - 1]++ << c, d = f | (1 << c) - 1; f <= d; ++f)s[Z[f] >> u] = l } else for (s = new v(i), a = 0; a < i; ++a)e[a] && (s[a] = Z[o[e[a] - 1]++] >> 15 - e[a]); return s }, f = new q(288); for (d = 0; d < 144; ++d)f[d] = 8; for (d = 144; d < 256; ++d)f[d] = 9; for (d = 256; d < 280; ++d)f[d] = 7; for (d = 280; d < 288; ++d)f[d] = 8; var d, ee = new q(32); for (d = 0; d < 32; ++d)ee[d] = 5; var te = W(f, 9, 1), re = W(ee, 5, 1), ie = function (e) { for (var t = e[0], r = 1; r < e.length; ++r)t < e[r] && (t = e[r]); return t }, Y = function (e, t, r) { var i = t / 8 | 0; return (e[i] | e[1 + i] << 8) >> (7 & t) & r }, ae = function (e, t) { var r = t / 8 | 0; return (e[r] | e[1 + r] << 8 | e[2 + r] << 16) >> (7 & t) }, ne = function (e) { return (e + 7) / 8 | 0 }, oe = function (e, t, r) { return (null == r || r > e.length) && (r = e.length), new q(e.subarray(t = null == t || t < 0 ? 0 : t, r)) }, se = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], H = function (e, t, r) { t = new Error(t || se[e]); if (t.code = e, Error.captureStackTrace && Error.captureStackTrace(t, H), r) return t; throw t }, ue = function (e, t, r, i) { var a = e.length, O = i ? i.length : 0; if (!a || t.f && !t.l) return r || new q(0); function n(e) { var t = r.length; t < e && ((t = new q(Math.max(2 * t, e))).set(r), r = t) } var o = !r, s = o || 2 != t.i, u = t.i, l = (o && (r = new q(3 * a)), t.f || 0), c = t.p || 0, f = t.b || 0, d = t.l, h = t.d, m = t.m, g = t.n, y = 8 * a; do { if (!d) { var l = Y(e, c, 1), p = Y(e, c + 1, 3); if (c += 3, !p) { var v = e[(w = ne(c) + 4) - 4] | e[w - 3] << 8, E = w + v; if (a < E) { u && H(0); break } s && n(f + v), r.set(e.subarray(w, E), f), t.b = f += v, t.p = c = 8 * E, t.f = l; continue } if (1 == p) d = te, h = re, m = 9, g = 5; else if (2 == p) { for (var v = Y(e, c, 31) + 257, x = Y(e, c + 10, 15) + 4, b = v + Y(e, c + 5, 31) + 1, T = (c += 14, new q(b)), R = new q(19), S = 0; S < x; ++S)R[$[S]] = Y(e, c + 3 * S, 7); c += 3 * x; for (var E = ie(R), M = (1 << E) - 1, k = W(R, E, 1), S = 0; S < b;) { var w, _ = k[Y(e, c, M)]; if (c += 15 & _, (w = _ >> 4) < 16) T[S++] = w; else { var A = 0, C = 0; for (16 == w ? (C = 3 + Y(e, c, 3), c += 2, A = T[S - 1]) : 17 == w ? (C = 3 + Y(e, c, 7), c += 3) : 18 == w && (C = 11 + Y(e, c, 127), c += 7); C--;)T[S++] = A } } var D = T.subarray(0, v), F = T.subarray(v), m = ie(D), g = ie(F), d = W(D, m, 1), h = W(F, g, 1) } else H(1); if (y < c) { u && H(0); break } } s && n(f + 131072); for (var B = (1 << m) - 1, V = (1 << g) - 1, L = c; ; L = c) { var P = (A = d[ae(e, c) & B]) >> 4; if (y < (c += 15 & A)) { u && H(0); break } if (A || H(2), P < 256) r[f++] = P; else { if (256 == P) { L = c, d = null; break } var U, I = P - 254, P = (264 < P && (U = j[S = P - 257], I = Y(e, c, (1 << U) - 1) + K[S], c += U), h[ae(e, c) & V]), N = P >> 4, F = (P || H(3), c += 15 & P, J[N]); if (3 < N && (U = Q[N], F += ae(e, c) & (1 << U) - 1, c += U), y < c) { u && H(0); break } s && n(f + 131072); var z = f + I; if (f < F) { var X = O - F, G = Math.min(F, z); for (X + f < 0 && H(3); f < G; ++f)r[f] = i[X + f] } for (; f < z; ++f)r[f] = r[f - F] } } t.l = d, t.p = L, t.b = f, t.f = l, d && (l = 1, t.m = m, t.d = h, t.n = g) } while (!l); return f != r.length && o ? oe(r, 0, f) : r.subarray(0, f) }, c = new q(0), le = function (e, t) { return (8 != (15 & e[0]) || 7 < e[0] >> 4 || (e[0] << 8 | e[1]) % 31) && H(6, "invalid zlib data"), (e[1] >> 5 & 1) == +!t && H(6, "invalid zlib data: " + (32 & e[1] ? "need" : "unexpected") + " dictionary"), 2 + (e[1] >> 3 & 4) }; var E = "undefined" != typeof TextDecoder && new TextDecoder; try { E.decode(c, { stream: !0 }) } catch (e) { } function ce(e) { e = e.replace(/-/g, "+").replace(/_/g, "/"); var e = new Uint8Array(atob(e).split("").map(e => e.charCodeAt(0))), e = ue(e.subarray(le(e, i && i.dictionary), -4), { i: 2 }, i && i.out, i && i.dictionary), t = (new TextDecoder).decode(e).split(" ").map(e => parseInt(e)), r = []; if (!(t.length < 3)) { var i = t.shift(), a = t.shift() / i, n = t.shift(); if (!(t.length < n)) for (let e = 0; e < n; e++) { var o = [], s = t.shift(); if (t.length < s + (n - e - 1)) return r; for (let e = 0; e < s; e++) { var u = t.shift() * a; o.push(0 == e ? u : o[e - 1] + u) } r.push(o) } } return r } var fe = [1, 2], de = [{ name: "Beats", layer: "background", render: (t, r, i, a) => { var n = R(r.analysis.beats, e => e.start, i.start), o = R(r.analysis.beats, e => e.start, i.end); t.lineWidth = 1, t.strokeStyle = "#FFFFFF33", t.beginPath(); for (let e = n; e <= o; e++) { var s = w(r.analysis.beats[e].start, i.start, i.end, a.x, a.x + a.width); t.moveTo(s, a.y), t.lineTo(s, a.y + a.height) } t.stroke() } }, { name: "Bars", layer: "background", render: (t, r, i, a) => { var n = R(r.analysis.bars, e => e.start, i.start), o = R(r.analysis.bars, e => e.start, i.end); t.lineWidth = 3, t.strokeStyle = "#FFFFFF66", t.beginPath(); for (let e = n; e <= o; e++) { var s = w(r.analysis.bars[e].start, i.start, i.end, a.x, a.x + a.width); t.moveTo(s, a.y), t.lineTo(s, a.y + a.height) } t.stroke() } }, { name: "Position", layer: "overlay", render: (e, t, r, i) => { e.lineWidth = 5, e.strokeStyle = e.fillStyle = "white", e.beginPath(); r = w(r.current, r.start, r.end, i.x, i.x + i.width); e.moveTo(r, i.y), e.lineTo(r, i.y + i.height), e.stroke(); e.beginPath(), e.moveTo(r - 10, i.y), e.lineTo(r + 10, i.y), e.lineTo(r, i.y + 10), e.lineTo(r - 10, i.y), e.moveTo(r - 10, i.y + i.height), e.lineTo(r + 10, i.y + i.height), e.lineTo(r, i.y + i.height - 10), e.lineTo(r - 10, i.y + i.height), e.fill() } }, { name: "Loudness", layer: "content", height: 1, render: (t, r, i, a) => { var n = R(r.analysis.segments, e => e.start, i.start), o = R(r.analysis.segments, e => e.start, i.end), s = e => S(e); t.lineWidth = 2, t.strokeStyle = "white", t.beginPath(); for (let e = n; e <= o + 1 && e < r.analysis.segments.length; e++) { var u = r.analysis.segments[e], l = w(u.start, i.start, i.end, a.x, a.x + a.width), c = w(s(u.loudness_start), 0, 1, a.y + a.height, a.y), f = w(u.start + u.loudness_max_time, i.start, i.end, a.x, a.x + a.width), d = w(s(u.loudness_max), 0, 1, a.y + a.height, a.y); e === n ? t.moveTo(l, c) : t.lineTo(l, c), t.lineTo(f, d), e === r.analysis.segments.length - 1 && (l = w(u.start + u.duration, i.start, i.end, a.x, a.x + a.width), c = w(s(u.loudness_end), 0, 1, a.y + a.height, a.y), t.lineTo(l, c)) } t.stroke() } }, { name: "Confidence", layer: "content", height: .25, render: (t, r, i, a) => { var n = R(r.analysis.segments, e => e.start, i.start), o = R(r.analysis.segments, e => e.start, i.end); t.beginPath(); for (let e = n; e <= o; e++) { var s = r.analysis.segments[e], u = w(s.start, i.start, i.end, a.x, a.x + a.width), l = w(s.start + s.duration, i.start, i.end, a.x, a.x + a.width); t.fillStyle = `rgba(255, 255, 255, ${s.confidence})`, t.fillRect(u, a.y, l - u, a.height) } t.fill() } }, { name: "Timbre", layer: "content", height: 1.5, render: (r, i, a, n) => { var o = n.height / 12, s = R(i.analysis.segments, e => e.start, a.start), u = R(i.analysis.segments, e => e.start, a.end); for (let t = 0; t < 12; t++) { var e = (Math.sqrt(5) - 1) / 2, l = t * e; r.beginPath(); for (let e = s; e <= u; e++) { var c = i.analysis.segments[e], f = w(Math.tanh(.02 * c.timbre[t]), -1, 1, 0, 1), d = w(c.start, a.start, a.end, n.x, n.x + n.width), c = w(c.start + c.duration, a.start, a.end, n.x, n.x + n.width), h = n.y + t / 12 * n.height; r.fillStyle = `hsla(${360 * l}, 100%, 70%, ${f})`, r.fillRect(d, h, c - d, o) } r.fill() } } }, { name: "Pitches", layer: "content", height: 1.5, render: (r, i, a, n) => { var o = n.height / 12, s = R(i.analysis.segments, e => e.start, a.start), u = R(i.analysis.segments, e => e.start, a.end); for (let t = 0; t < 12; t++) { var l = t / 12; r.beginPath(); for (let e = s; e <= u; e++) { var c = i.analysis.segments[e], f = w(c.start, a.start, a.end, n.x, n.x + n.width), d = w(c.start + c.duration, a.start, a.end, n.x, n.x + n.width), h = n.y + t / 12 * n.height; r.fillStyle = `hsla(${360 * l}, 100%, 70%, ${c.pitches[t]})`, r.fillRect(f, h, d - f, o) } r.fill() } } }, { name: "Rhythm", layer: "content", height: .5, render: (r, i, a, n) => { var o = n.height / i.rhythm.length, s = Math.min(o, 20), e = s / 2 / n.width * (a.end - a.start); r.fillStyle = "white", r.beginPath(); for (let t = i.rhythm.length - 1; 0 <= t; t--) { var u = R(i.rhythm[t], e => e, a.start - e), l = R(i.rhythm[t], e => e, a.end + e); for (let e = u; e <= l; e++) { var c = w(i.rhythm[t][e], a.start, a.end, n.x, n.x + n.width), f = n.y + t * o; r.rect(c - s / 2, f, s, o) } } r.fill() } }]; var x = r(i()); var b = r(i()), T = b.default.memo(e => b.default.createElement(Spicetify.ReactComponent.IconComponent, { semanticColor: "textBase", dangerouslySetInnerHTML: { __html: "empty" !== e.name ? Spicetify.SVGIcons[e.name] : void 0 }, iconSize: e.size })), he = b.default.memo(t => b.default.createElement(Spicetify.ReactComponent.Menu, null, b.default.createElement(Spicetify.ReactComponent.MenuSubMenuItem, { displayText: "Renderer" }, t.renderers.map(e => b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.onSelectRenderer(e.id), leadingIcon: b.default.createElement(T, { name: e.id === t.currentRendererId ? "check" : "empty", size: 16 }) }, e.name))), b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.isFullscreen ? t.onExitFullscreen() : t.onEnterFullscreen(), trailingIcon: b.default.createElement(T, { name: t.isFullscreen ? "minimize" : "fullscreen", size: 16 }) }, t.isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"), b.default.createElement(Spicetify.ReactComponent.MenuItem, { onClick: () => t.onOpenWindow(), trailingIcon: b.default.createElement(T, { name: "external-link", size: 16 }) }, "Open Window"))), me = b.default.memo(e => b.default.createElement(Spicetify.ReactComponent.ContextMenu, { trigger: "click", renderInline: e.renderInline, menu: b.default.createElement(he, { ...e }) }, b.default.createElement(Spicetify.ReactComponent.ButtonSecondary, { "aria-label": "menu", className: e.className, iconOnly: () => b.default.createElement(T, { name: "menu", size: 16 }) }))), _ = r(i()); function A(e, t, r = []) { if ("function" != typeof e) return !1; let i = (e => { try { return "function" == typeof e ? Function.prototype.toString.call(e) : String(e) } catch { return "" } })(e); return t.every(e => i.includes(e)) && r.every(e => !i.includes(e)) } function ge(e, t) { return "function" == typeof e && "SERVICE_ID" in e && e.SERVICE_ID === t } function C(e) { return !(!e || "object" != typeof e) && "$$typeof" in e && e.$$typeof === Symbol.for("react.memo") && "type" in e } var D = class { static init() { this.webpack = window.webpackChunkclient_web ?? window.webpackChunkopen, this.require = this.webpack.push([[Symbol()], {}, e => e]), this.refreshModules() } static async loadFiles(e) { this.require || this.init(), await Promise.allSettled(e.map(e => this.require.e(e))), this.refreshModules() } static refreshModules() { this.require || this.init(), this.loadedModules = {}; var e = Object.keys(this.require.m).map(e => { try { return this.require(e) } catch { } }); this.modules = e.filter(e => "object" == typeof e).map(e => { try { return Object.values(e) } catch { } }).flat() } static getValue(e, t) { this.require || this.init(), e in this.loadedModules || (this.loadedModules[e] = t()); t = this.loadedModules[e]; return "failed" === t.state ? null : "succeeded" === t.state ? t.value : void 0 } static getValueFiltered(e, t) { return this.getValue(e, () => { var e = this.modules.filter(t), e = [...new Set(e)]; return 1 === e.length ? { state: "succeeded", value: e[0] } : { state: "failed" } }) } static getMetadataService() { return this.getValueFiltered("metadataService", e => ge(e, "spotify.mdata_esperanto.proto.MetadataService")) } static getOfflinePlayableCache() { return this.getValueFiltered("offlinePlayableCache", e => ge(e, "spotify.offline_playable_cache_esperanto.proto.OfflinePlayableCache")) } static getCreateTransport() { return this.getValueFiltered("createTransport", e => A(e, ["executeEsperantoCall", "cancelEsperantoCall"])) } static getTrackList() { return this.getValueFiltered("trackList", e => C(e) && A(e.type, ["tracks", "nrTracks", "fetchTracks", "itemsCache", "initialItems"])) } static getTrackListItem() { return this.getValueFiltered("trackListItem", e => C(e) && A(e.type, ["displayedColumns", "albumOrShow", "associatedAudioUri"])) } static getCardRenderer() { return this.getValueFiltered("cardRenderer", e => { return !(!(t = e) || "object" != typeof t) && "$$typeof" in t && t.$$typeof === Symbol.for("react.forward_ref") && "render" in t && A(e.render, ["card-title-", "card-subtitle-"]); var t }) } static getStyleSheetManager() { return this.getValueFiltered("styleSheetManager", e => A(e, ["stylisPlugins", "reconstructWithOptions", "disableCSSOMInjection", "disableVendorPrefixes"])) } static getHeartRenderer() { return this.getValueFiltered("heartRenderer", e => C(e) && A(e.type, ["remove-from-library", "add-to-library", "className"], ["isEpisode"])) } static getAlignedCurationRenderer() { return this.getValueFiltered("alignedCurationRenderer", e => C(e) && A(e.type, ["defaultCurationContextUri", "web-player.aligned-curation", "isCurated", "default-curation"])) } }, ye = (D.webpack = null, D.require = null, D.modules = null, D.loadedModules = {}, (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OK = 1] = "OK", e[e.NOT_RESOLVED = 2] = "NOT_RESOLVED", e[e.NOT_FOUND = 3] = "NOT_FOUND", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 4] = "UNAVAILABLE_FOR_LEGAL_REASONS", e))(ye || {})), pe = class { constructor() { var e = D.getMetadataService(), t = D.getCreateTransport(); e && t && (this.serviceDescriptor = e, this.service = new this.serviceDescriptor(t())) } fetch(e, t) { return new Promise((i, a) => { if (this.service && this.serviceDescriptor) { let r = this.service.observe(this.serviceDescriptor.METHODS.observe.requestType.fromPartial({ extensionQuery: [{ entityUri: t, extensionKind: e }] }), e => { try { if (e.pendingResponse) return; r.cancel(); var t = e?.extensionResult?.[0]; if (!t) return void a(0); 1 === t.status ? i(t.extensionData) : a(t.details?.cacheStatus ?? 0) } catch (e) { a(0) } }) } else a(0) }) } fetchAll(i) { return new Promise((r, e) => { if (this.service && this.serviceDescriptor) { let t = this.service.observe(this.serviceDescriptor.METHODS.observe.requestType.fromPartial({ extensionQuery: i.map(e => ({ entityUri: e.uri, extensionKind: e.kind })) }), e => { e.pendingResponse || (t.cancel(), r(e.extensionResult.map(e => { var t = 1 === e.status, r = { uri: e.entityUri, kind: e.extensionKind, success: t }; return t ? { ...r, typeUrl: e.extensionData.typeUrl, value: e.extensionData.value } : { ...r, status: e.details.cacheStatus } }))) }) } else e() }) } }, ve = class { constructor(e) { e instanceof DataView && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), this.buffer = e, this.offset = 0 } getVarIntView() { let e = this.offset; for (; e < this.buffer.length - 1 && 128 & this.buffer[e];)e++; return e++, this.getView(e - this.offset) } getVarInt() { if (this.isExhausted()) return 0n; let e = 0n, t = 0n; for (var r; r = BigInt(this.buffer[this.offset++]), e |= (0x7fn & r) << t, t += 7n, 0x80n & r && !this.isExhausted();); return e } getArray(e) { var e = Math.min(e, this.buffer.length - this.offset), t = this.buffer.slice(this.offset, this.offset + e); return this.offset += e, t } getView(e) { var e = Math.min(e, this.buffer.length - this.offset), t = new DataView(this.buffer.buffer, this.buffer.byteOffset + this.offset, e); return this.offset += e, t } has(e) { return this.buffer.length - this.offset >= e } isExhausted() { return !this.has(1) } }; function Ee(e, t) { return e & 1n << BigInt(8 * t - 1) ? e - (1n << BigInt(8 * t)) : e } function F(t, r) { return [t[0], e => r(t[1](e))] } var E = [0, e => new ve(e).getVarInt()], c = F(E, e => !!e), xe = F(E, Number); F(E, e => Number(Ee(e, 4))), F(E, e => Ee(e, 8)); function L(e, t) { return { id: e, value: t } } function be(t) { return [3, e => { for (var r = new ve(e), i = {}, a = Object.entries(t).map(([e, t]) => ({ name: e, ...t })); !r.isExhausted();) { let t = Number(r.getVarInt()); var n = a.find(e => e.id == t >> 3); if (n && ((e, t) => { switch (t) { case 0: return 0 == (7 & e); case 1: return 5 == (7 & e); case 2: return 1 == (7 & e); case 3: return 2 == (7 & e) } })(t, n.value[0])) { var o = n.value, [s, u] = ((e, t) => { switch (t[0]) { case 1: return e.has(4) ? [!0, t[1](e.getView(4))] : [!1, void 0]; case 2: return e.has(8) ? [!0, t[1](e.getView(8))] : [!1, void 0]; case 0: return [!0, t[1](e.getVarIntView())]; case 3: var r = Number(e.getVarInt()); return [!0, t[1](e.getView(r))] } })(r, o); if (!s) break; o[2] ? (s = i[n.name] ?? [], i[n.name] = s.concat(u)) : i[n.name] = u } else { c = o = l = void 0; var l = r, o = t; switch (7 & o) { case 5: l.getView(4); break; case 1: l.getView(8); break; case 0: l.getVarIntView(); break; case 2: var c = Number(l.getVarInt()); l.getView(c) } } } return i }] } var E = be({ rgb: L(1, xe), isFallback: L(2, c) }), Te = be({ colorRaw: L(1, E), colorLight: L(2, E), colorDark: L(3, E) }); var Re = r(i()); var Se = [{
    id: "ncs", name: "NCS", renderer: function (a) {
      let M = (0, o.useContext)(p); var e = (0, o.useMemo)(() => { if (!a.audioAnalysis) return [{ x: 0, y: 0 }]; var e = a.audioAnalysis.segments; if (!e.length) { let r = a.audioAnalysis.track?.duration || 180, i = [], n = Math.max(8, Math.ceil(2 * r)); for (let e = 0; e <= n; e++) { var o = e / n * r, s = .45 + .18 * Math.sin(2 * Math.PI * o / 2.3) + .1 * Math.sin(2 * Math.PI * o / 0.9 + 1.4); i.push({ x: o, y: Math.min(Math.max(s, 0), 1) }) } return i[0].accumulatedIntegral = 0, i.forEach((e, t) => { 0 < t && (e.accumulatedIntegral = (i[t - 1].accumulatedIntegral ?? 0) + h(i[t - 1], e)) }), i } var t = e.flatMap(e => e.loudness_max_time ? [{ x: e.start, y: S(e.loudness_start) }, { x: e.start + e.loudness_max_time, y: S(e.loudness_max) }] : [{ x: e.start, y: S(e.loudness_start) }]); if (e.length) { t[0].accumulatedIntegral = 0; for (let e = 1; e < t.length; e++) { var r = t[e - 1], i = t[e]; i.accumulatedIntegral = (r.accumulatedIntegral ?? 0) + h(r, i) } e = e[e.length - 1]; t.push({ x: e.start + e.duration, y: S(e.loudness_end) }) } return t }, [a.audioAnalysis]), t = a.audioAnalysis?.meta?.timestamp ?? 0, r = (0, o.useCallback)(a => {
        if (!a) return M("Error: WebGL2 is not supported", 2), { isError: !0 }; if (!a.getExtension("EXT_color_buffer_float")) return M("Error: Rendering to floating-point textures is not supported", 2), { isError: !0 }; var e = (e, t, r) => { e = a.createShader(e); return a.shaderSource(e, t), a.compileShader(e), a.getShaderParameter(e, a.COMPILE_STATUS) || a.isContextLost() ? e : (t = `Error: Failed to compile '${r}' shader`, r = a.getShaderInfoLog(e), console.error("[Visualizer] " + t, r), M(t, 2), null) }, t = (e, t, r) => { var i = a.createProgram(); return a.attachShader(i, e), a.attachShader(i, t), a.linkProgram(i), a.getProgramParameter(i, a.LINK_STATUS) || a.isContextLost() ? i : (e = `Error: Failed to link '${r}' shader`, t = a.getProgramInfoLog(i), console.error("[Visualizer] " + e, t), M(e, 2), null) }, r = e => { var t = a.createFramebuffer(), r = (a.bindFramebuffer(a.FRAMEBUFFER, t), a.createTexture()); return a.bindTexture(a.TEXTURE_2D, r), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, r, 0), { framebuffer: t, texture: r } }, i = e(a.VERTEX_SHADER, `#version 300 es

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
      }, []), i = (0, o.useCallback)((e, t) => { !t.isError && e && (t.viewportSize = Math.min(e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.bindTexture(e.TEXTURE_2D, t.dotTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null), e.bindTexture(e.TEXTURE_2D, t.blurXTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null), e.bindTexture(e.TEXTURE_2D, t.blurYTexture), e.texImage2D(e.TEXTURE_2D, 0, e.R8, t.viewportSize, t.viewportSize, 0, e.RED, e.UNSIGNED_BYTE, null)) }, []), n = (0, o.useCallback)((n, e, t) => { if (!t.isError && n) { let i = null, a = []; if (window.do_ncs_perf_test) { i = n.getExtension("EXT_disjoint_timer_query_webgl2"); for (let e = 0; e < 4; e++)a[e] = n.createQuery() } var now = performance.now(); if (!t.lastFrameTime) { t.lastFrameTime = now; t.smoothProgress = Spicetify.Player.getProgress() / 1000; } var dt = (now - t.lastFrameTime) / 1000; t.lastFrameTime = now; if (e.isPlaying) { t.smoothProgress += dt; var actualProgress = Spicetify.Player.getProgress() / 1000; if (Math.abs(t.smoothProgress - actualProgress) > 0.8) { t.smoothProgress = actualProgress; } } else { t.smoothProgress = Spicetify.Player.getProgress() / 1000; } var r = t.smoothProgress, o = 75 * (.5 * r + (l = (e.amplitudeCurve && e.amplitudeCurve.length ? e.amplitudeCurve : [{ x: 0, y: 0.001, accumulatedIntegral: 0 }, { x: 1e9, y: 0.001, accumulatedIntegral: 0 }]), o = R(l, e => e.x, s = r), u = l[o], l.length <= o + 1 ? (u.accumulatedIntegral ?? 0) + u.y * (s - u.x) : (l = { x: s, y: w(s, u.x, (s = l[o + 1]).x, u.y, s.y) }, (u.accumulatedIntegral ?? 0) + h(u, l)))) * .01, s = ((i, e, t) => { if (!i || !i.length) return 0; if (0 == t) return z(i, e => e.x, e => e.y, e => e, e); var r, a = e - t / 2, e = e + t / 2, n = R(i, e => e.x, a), o = R(i, e => e.x, e); let s = 0; if (n == o) return u = i[n], i.length - 2 < n ? u.y : (w(a, u.x, (r = i[n + 1]).x, u.y, r.y) + w(e, u.x, r.x, u.y, r.y)) / 2; { let t = i[n], r = i[n + 1]; var u = { x: a, y: w(a, t.x, r.x, t.y, r.y) }; s = h(u, r); for (let e = n + 1; e < o; e++)t = r, r = i[e + 1], s += h(t, r); t = r, i.length - 2 < o ? s += t.y * (e - t.x) : (r = i[o + 1], u = { x: e, y: w(e, t.x, r.x, t.y, r.y) }, s += h(t, u)) } return s / t })(e.amplitudeCurve, r, .15), u = e.seed, l = 322, r = .9 / l, c = .5 * r * t.viewportSize, f = w(s, 0, 1, .73, .86), d = Math.pow(s + 3, 2) * (45 / 1568); if (t.particleTextureSize !== l && (t.particleTextureSize = l, n.bindTexture(n.TEXTURE_2D, t.particleTexture), n.texImage2D(n.TEXTURE_2D, 0, n.RG32F, l, l, 0, n.RG, n.FLOAT, null)), window.do_ncs_perf_test && n.beginQuery(i.TIME_ELAPSED_EXT, a[0]), n.disable(n.BLEND), n.bindFramebuffer(n.FRAMEBUFFER, t.particleFramebuffer), n.viewport(0, 0, l, l), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.particleShader), n.uniform1f(t.uNoiseOffsetLoc, o), n.uniform1f(t.uAmplitudeLoc, s), n.uniform1i(t.uSeedLoc, u), n.uniform1f(t.uDotSpacingLoc, .9), n.uniform1f(t.uDotOffsetLoc, -.45), n.uniform1f(t.uSphereRadiusLoc, f), n.uniform1f(t.uFeatherLoc, d), n.uniform1f(t.uNoiseFrequencyLoc, 4), n.uniform1f(t.uNoiseAmplitudeLoc, .32 * .9), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLoc), n.vertexAttribPointer(t.inPositionLoc, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[1])), n.enable(n.BLEND), n.bindFramebuffer(n.FRAMEBUFFER, t.dotFramebuffer), n.viewport(0, 0, t.viewportSize, t.viewportSize), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.dotShader), n.uniform1i(t.uDotCountLoc, l), n.uniform1f(t.uDotRadiusLoc, r), n.uniform1f(t.uDotRadiusPXLoc, c), n.uniform1i(t.uParticleTextureLoc, 0), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.particleTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocDot), n.vertexAttribPointer(t.inPositionLocDot, 2, n.FLOAT, !1, 0, 0), n.drawArraysInstanced(n.TRIANGLE_FAN, 0, 4, l * l), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[2])), n.bindFramebuffer(n.FRAMEBUFFER, t.blurXFramebuffer), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.useProgram(t.blurShader), n.uniform1f(t.uBlurRadiusLoc, .01 * t.viewportSize), n.uniform2f(t.uBlurDirectionLoc, 1 / t.viewportSize, 0), n.uniform1i(t.uBlurInputTextureLoc, 0), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.dotTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocBlur), n.vertexAttribPointer(t.inPositionLocBlur, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), n.bindFramebuffer(n.FRAMEBUFFER, t.blurYFramebuffer), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.uniform2f(t.uBlurDirectionLoc, 0, 1 / t.viewportSize), n.bindTexture(n.TEXTURE_2D, t.blurXTexture), n.drawArrays(n.TRIANGLE_FAN, 0, 4), n.bindFramebuffer(n.FRAMEBUFFER, null), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), window.do_ncs_perf_test && (n.endQuery(i.TIME_ELAPSED_EXT), n.beginQuery(i.TIME_ELAPSED_EXT, a[3])), n.useProgram(t.finalizeShader), n.uniform3f(t.uOutputColorLoc, e.themeColor.rgb.r / 255, e.themeColor.rgb.g / 255, e.themeColor.rgb.b / 255), n.uniform1i(t.uBlurredTextureLoc, 0), n.uniform1i(t.uOriginalTextureLoc, 1), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, t.blurYTexture), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, t.dotTexture), n.bindBuffer(n.ARRAY_BUFFER, t.quadBuffer), n.enableVertexAttribArray(t.inPositionLocFinalize), n.vertexAttribPointer(t.inPositionLocFinalize, 2, n.FLOAT, !1, 0, 0), n.drawArrays(n.TRIANGLE_FAN, 0, 4), window.do_ncs_perf_test) { n.endQuery(i.TIME_ELAPSED_EXT), window.do_ncs_perf_test = !1; let r = () => { var e, t; 0 !== a.length && (t = n.getParameter(i.GPU_DISJOINT_EXT), e = a.map(e => n.getQueryParameter(e, n.QUERY_RESULT_AVAILABLE)).reduce((e, t) => e && t, !0), t ? (a.map(e => n.deleteQuery(e)), console.log("NCS PERF RESULT: FAILED (disjoint)"), a.length = 0) : e ? (t = a.map(e => n.getQueryParameter(e, n.QUERY_RESULT)), console.log("NCS PERF RESULT: ", t), window.ncs_perf_test_out || (window.ncs_perf_test_out = []), window.ncs_perf_test_out.push(t), a.length = 0) : window.requestAnimationFrame(r)) }; r() } } }, []); return o.default.createElement(s, { isEnabled: a.isEnabled, data: { themeColor: a.themeColor, seed: t, amplitudeCurve: e, isPlaying: a.isPlaying }, contextType: "webgl2", onInit: r, onResize: i, onRender: n, style: { width: "100%", height: "100%", objectFit: "contain" }, sizeConstraint: (e, t) => { e = Math.min(e, t); return { width: e, height: e } } })
    }
  }]; function we(r) {
    let [t, i] = (0, g.useState)(() => { var e = new Set(Se.map(e => e.id)), t = r.initialRenderer; return t && e.has(t) || (t = new URLSearchParams(Spicetify.Platform?.History?.location?.search || "").get("renderer")) && e.has(t) ? t : "ncs" }); (0, g.useEffect)(() => { var e = new URLSearchParams; e.set("renderer", t), Spicetify.Platform?.History?.replace({ search: e.toString() }) }, [t]); var e = Se.find(e => e.id === t)?.renderer; let [albumArt, setAlbumArt] = (0, g.useState)(Spicetify.Player.data?.item?.metadata?.image_url ?? ""), [currentArt, setCurrentArt] = (0, g.useState)(Spicetify.Player.data?.item?.metadata?.image_url ?? ""), [prevArt, setPrevArt] = (0, g.useState)(""), [fadeKey, setFadeKey] = (0, g.useState)(0), [isPlaying, setIsPlaying] = (0, g.useState)(Spicetify.Player.isPlaying), [trackTitle, setTrackTitle] = (0, g.useState)(Spicetify.Player.data?.item?.name ?? ""), [trackProgress, setTrackProgress] = (0, g.useState)(Spicetify.Player.getProgress() / 1e3), [volume, setVolume] = (0, g.useState)(Spicetify.Player.getVolume() || 0), [shuffle, setShuffle] = (0, g.useState)("function" == typeof Spicetify.Player.getShuffle && Spicetify.Player.getShuffle()), [repeatMode, setRepeatMode] = (0, g.useState)("function" == typeof Spicetify.Player.getRepeat ? +Spicetify.Player.getRepeat() || 0 : 0), [isDraggingSeek, setIsDraggingSeek] = (0, g.useState)(!1), [dragProgress, setDragProgress] = (0, g.useState)(0), [isLiked, setIsLiked] = (0, g.useState)(!1), [lyricsLine, setLyricsLine] = (0, g.useState)(""), [showLyrics, setShowLyrics] = (0, g.useState)(true), [refreshTrigger, setRefreshTrigger] = (0, g.useState)(0), [hasNoLyrics, setHasNoLyrics] = (0, g.useState)(false); let progressBarContainerRef = (0, g.useRef)(null), lastUriRef = (0, g.useRef)(""), lyricsContainerRef = (0, g.useRef)(null), lyricsBgContainerRef = (0, g.useRef)(null); const handleSeekMouseDown = e => { const container = progressBarContainerRef.current; if (container) { const rect = container.getBoundingClientRect(), duration = u.audioAnalysis?.track?.duration || 0; if (duration > 0) { setIsDraggingSeek(!0); const calculateProgress = clientX => { let frac = (clientX - rect.left) / rect.width; return frac = Math.max(0, Math.min(1, frac)), frac * duration }; setDragProgress(calculateProgress(e.clientX)); const onMouseMove = moveEvent => { setDragProgress(calculateProgress(moveEvent.clientX)) }, onMouseUp = upEvent => { const finalProgress = calculateProgress(upEvent.clientX); Spicetify.Player.seek(Math.round(1000 * finalProgress)); setIsDraggingSeek(!1); const win = container.ownerDocument.defaultView || window; win.removeEventListener("mousemove", onMouseMove); win.removeEventListener("mouseup", onMouseUp) }; const win = container.ownerDocument.defaultView || window; win.addEventListener("mousemove", onMouseMove); win.addEventListener("mouseup", onMouseUp) } } };
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
    (0, g.useEffect)(() => { if (r.isSecondaryWindow) { let isDragging = !1, startX, startY; const onMouseDown = e => { if (e.target.closest("button,input,.visualizer-overlay__progress-bar-container,.visualizer-overlay__volume-wrap")) return; isDragging = !0; startX = e.screenX; startY = e.screenY }, onMouseMove = e => { if (isDragging) { const dx = e.screenX - startX, dy = e.screenY - startY; window.moveBy(dx, dy); startX = e.screenX; startY = e.screenY } }, onMouseUp = () => { isDragging = !1 }; window.addEventListener("mousedown", onMouseDown); window.addEventListener("mousemove", onMouseMove); window.addEventListener("mouseup", onMouseUp); return () => { window.removeEventListener("mousedown", onMouseDown); window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp) } } }, [r.isSecondaryWindow]); function formatTime(s) { if (!s || !isFinite(s)) return "0:00"; var m = Math.floor(s / 60), sec = Math.floor(s % 60); return m + ":" + String(sec).padStart(2, "0") } let a = (0, g.useRef)(null); a.current && !a.current.ownerDocument.defaultView && r.onWindowDestroyed?.(); var n = !!(t => { let [e, r] = (0, Re.useState)(t?.fullscreenElement ?? null); return (0, Re.useEffect)(() => { if (t) { let e = () => r(t.fullscreenElement); return t.addEventListener("fullscreenchange", e), () => t.removeEventListener("fullscreenchange", e) } }, [t]), e })(a.current?.ownerDocument); let [o, s] = (0, g.useState)({ state: "loading" }), [u, l] = (0, g.useState)({ themeColor: Spicetify.Color.fromHex("#535353") }), themeColorRef = (0, g.useRef)(null); themeColorRef.current = u.themeColor; let c = (0, g.useCallback)(t => s(e => "error" === e.state && 2 === e.errorData.recovery ? e : t), []), f = (0, g.useCallback)((e, t) => { c({ state: "error", errorData: { message: e, recovery: t } }) }, []), d = "error" === o.state && 2 === o.errorData.recovery, h = (0, g.useMemo)(() => new pe, []), m = (0, g.useCallback)(async e => { e = e?.item; if (e) { var t = Spicetify.URI.fromString(e.uri); if (t.type !== Spicetify.URI.Type.TRACK) f("Error: The type of track you're listening to is currently not supported", 1); else { c({ state: "loading" }); try { var r, i, t = `https://spclient.wg.spotify.com/audio-attributes/v1/audio-analysis/${t.id}?format=json`, [t, e] = await Promise.all([Spicetify.CosmosAsync.get(t).catch(e => (console.error("[Visualizer]", e), { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] })), h.fetch(23, e.metadata.image_url).catch(e => (console.error("[Visualizer] Could not load extracted color metadata. Status: " + ye[e]), null)).then(e => { try { var t; return e && 0 !== e.value.length && "type.googleapis.com/spotify.context_track_color.ColorResult" === e.typeUrl ? (e = e.value, t = Te, e = new DataView(e.buffer, e.byteOffset, e.byteLength), t = t[1](e).colorLight?.rgb?.toString(16).padStart(6, "0") ?? "535353", Spicetify.Color.fromHex("#" + t)) : Spicetify.Color.fromHex("#535353") } catch (r) { return console.error("[Visualizer] Failed to parse extracted color metadata, using fallback.", r), Spicetify.Color.fromHex("#535353") } })]); if (t) if ("object" != typeof t) f(`Invalid audio analysis data (${t})`, 0); else { if (!("track" in t && "segments" in t)) { console.warn("[Visualizer] No audio analysis available for this track, using fallback.", t); t = { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] } } l({ audioAnalysis: t, themeColor: e }), c({ state: "running" }) } else f("Error: The audio analysis could not be loaded, please check your internet connection", 0) } catch (r) { console.error("[Visualizer] Unexpected error while loading track data, using fallback.", r), l({ audioAnalysis: { isFallback: !0, track: { duration: (Spicetify.Player.data?.item?.duration?.milliseconds || 180000) / 1e3 }, segments: [], bars: [], beats: [], sections: [], tatums: [] }, themeColor: Spicetify.Color.fromHex("#535353") }), c({ state: "running" }) } } } else f("Start playing a song to see the visualization!", 1) }, [h]); return (0, g.useEffect)(() => { if (!d) { let e = e => { e?.data && m(e.data) }; return Spicetify.Player.addEventListener("songchange", e), m(Spicetify.Player.data), () => Spicetify.Player.removeEventListener("songchange", e) } }, [d, m]), (0, g.useEffect)(() => {
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
          }); setIsPlaying(Spicetify.Player.isPlaying); setTrackTitle(Spicetify.Player.data?.item?.name ?? ""); setVolume(Spicetify.Player.getVolume() || 0); setShuffle("function" == typeof Spicetify.Player.getShuffle && Spicetify.Player.getShuffle()); setRepeatMode("function" == typeof Spicetify.Player.getRepeat ? +Spicetify.Player.getRepeat() || 0 : 0); const uri = Spicetify.Player.data?.item?.uri; if (uri && (uri !== lastUriRef.current || tick % 10 === 0)) { lastUriRef.current = uri; if (Spicetify.Platform?.LibraryAPI?.contains) { Spicetify.Platform.LibraryAPI.contains([uri]).then(res => { const val = Array.isArray(res) ? res[0] : (res && typeof res === 'object' ? res[uri] : res); setIsLiked(!!val) }).catch(() => { }) } } tick++
        }; e(); const t = window.setInterval(e, 100); return () => window.clearInterval(t)
      }
    }, [d, isDraggingSeek]), (0, g.useEffect)(() => { var t = a.current; if (t) { var e = new ResizeObserver(function (e) { e = e[0]; var r = e.contentRect; t.style.setProperty("--vis-w", r.width), t.style.setProperty("--vis-h", r.height) }); return e.observe(t), function () { e.disconnect() } } }, []), (0, g.useEffect)(() => {
      var _cachedLyrics, _cachedTrackId = "", _fetching = false;
      var _lastLineIdx = -1, _letterSpans = [], _nonSpaceChars = [];
      var _lastBgLineIdx = -1, _bgLetterSpans = [], _bgNonSpaceChars = [];

      function unpackSLObjPack(packed) {
        if (!Array.isArray(packed) || packed.length !== 2) throw new Error("Invalid SLObjPack structure");
        var valuesList = packed[0];
        var stream = packed[1];
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
        return decode(0);
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

      async function _fetchSpicyLyricsApi(id, _retryCount) {
        if (!_retryCount) _retryCount = 0;
        if (_retryCount > 3) { console.warn("[Visualizer Lyrics] SpicyLyrics max retries reached"); return null; }
        try {
          var token = await _getSpotifyToken();
          if (!token) { console.warn("[Visualizer Lyrics] No Spotify token available"); return null; }

          var slVersion = "6.1.1";
          try {
            var parentMeta = window.parent?._spicy_lyrics_metadata || window._spicy_lyrics_metadata;
            if (parentMeta && parentMeta.LoadedVersion) {
              slVersion = parentMeta.LoadedVersion;
            } else {
              var v = Spicetify.LocalStorage.get("SL:version");
              if (v) slVersion = v;
            }
          } catch (e) { }

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

          console.log("[Visualizer Lyrics] Fetching SpicyLyrics for:", id, "(attempt " + (_retryCount + 1) + ")");

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


      // In-memory lyrics cache (independent of SpicyLyrics extension)
      var _lyricsMemCache = new Map();
      var _LYRICS_CACHE_TTL = 30 * 60 * 1000; // 30 minutes

      // Read from the SpicyLyrics extension's CacheStorage as backup
      async function _fetchFromSLExtensionCache(id) {
        try {
          var c = await caches.open("SpicyLyrics_LyricsStore_g1");
          var r = await c.match("/" + id);
          if (!r) {
            console.log("[Visualizer Lyrics] No entry in SpicyLyrics extension cache for", id);
            return null;
          }
          var w = await r.json();
          if (!w) return null;
          // Handle cache wrapper format
          var ct = w.Content || w.Value || w;
          if (!ct || ct === "NO_LYRICS") {
            console.log("[Visualizer Lyrics] SpicyLyrics extension cache has NO_LYRICS for", id);
            return null;
          }
          // If it's a string, try to parse
          if (typeof ct === "string") {
            try { ct = JSON.parse(ct); } catch (e) { return null; }
          }
          if (ct && (ct.Type === "Syllable" || ct.Type === "Line") && ct.Content) {
            console.log("[Visualizer Lyrics] Got lyrics from SpicyLyrics extension cache, type:", ct.Type, "items:", ct.Content.length);
            return ct;
          }
          console.log("[Visualizer Lyrics] SpicyLyrics extension cache entry format not recognized:", Object.keys(ct));
          return null;
        } catch (e) {
          console.warn("[Visualizer Lyrics] Error reading SpicyLyrics extension cache:", e?.message || e);
          return null;
        }
      }

      async function _fetchLyrics(id) {
        try {
          console.log("[Visualizer Lyrics] === Fetching lyrics (SpicyLyrics only) for track:", id, "===");

          // 0. Check in-memory cache first
          var memEntry = _lyricsMemCache.get(id);
          if (memEntry && Date.now() - memEntry.ts < _LYRICS_CACHE_TTL) {
            console.log("[Visualizer Lyrics] Got lyrics from in-memory cache, type:", memEntry.data?.Type);
            return memEntry.data;
          }

          // 1. Try SpicyLyrics API directly
          var raw = await _fetchSpicyLyricsApi(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics API, type:", raw.Type);
            _lyricsMemCache.set(id, { data: raw, ts: Date.now() });
            return raw;
          }
          console.warn("[Visualizer Lyrics] SpicyLyrics API returned nothing");

          // 2. Backup: Read from SpicyLyrics extension's cache (if extension has fetched it)
          raw = await _fetchFromSLExtensionCache(id);
          if (raw) {
            console.log("[Visualizer Lyrics] ✓ Got lyrics from SpicyLyrics extension cache, type:", raw.Type);
            _lyricsMemCache.set(id, { data: raw, ts: Date.now() });
            return raw;
          }

          // No lyrics available from SpicyLyrics
          console.warn("[Visualizer Lyrics] No lyrics available from SpicyLyrics (API + extension cache both empty) for", id);
          _lyricsMemCache.set(id, { data: null, ts: Date.now() });
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
        var el = lyricsContainerRef.current;
        var themeColorStr = "rgb(" + themeColorRef.current.rgb.r + "," + themeColorRef.current.rgb.g + "," + themeColorRef.current.rgb.b + ")";
        var uri = Spicetify.Player.data?.item?.uri;
        if (!uri) { setLyricsLine(""); _lastLineIdx = -1; _letterSpans = []; _nonSpaceChars = []; return; }
        var tid = uri.split(":")[2];
        if (!tid) { setLyricsLine(""); _lastLineIdx = -1; _letterSpans = []; _nonSpaceChars = []; return; }

        if (tid !== _cachedTrackId && !_fetching) {
          _cachedTrackId = tid; _cachedLyrics = undefined; _fetching = true;
          _lastLineIdx = -1; _letterSpans = []; _nonSpaceChars = [];
          _lastBgLineIdx = -1; _bgLetterSpans = []; _bgNonSpaceChars = [];
          if (el) el.innerHTML = "";
          var bgEl = lyricsBgContainerRef.current;
          if (bgEl) { bgEl.innerHTML = ""; bgEl.style.display = "none"; }
          setHasNoLyrics(false);
          _fetchLyrics(tid).then(function (d) {
            _cachedLyrics = d; _fetching = false;
          }).catch(function (e) {
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
            _letterSpans = []; _nonSpaceChars = [];
            _bgLetterSpans = []; _bgNonSpaceChars = [];
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
        var progressMs = rawProgressMs + 100 - playbackOffset;
        var ps = progressMs / 1000;

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
              _lastLineIdx = -2; _letterSpans = []; _nonSpaceChars = [];
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

        // Helper to generate html from chars array
        function _generateHtml(charsArr) {
          var htmlStr = "";
          var inWord = false;
          for (var k = 0; k < charsArr.length; k++) {
            var c = charsArr[k];
            if (c.isSpace) {
              if (inWord) {
                htmlStr += "</span>";
                inWord = false;
              }
              htmlStr += " ";
            } else {
              if (!inWord) {
                htmlStr += '<span class="vis-word">';
                inWord = true;
              }
              htmlStr += '<span class="vis-letter">' + c.char + "</span>";
            }
          }
          if (inWord) {
            htmlStr += "</span>";
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

        // 1. Lead Line Html
        if (info.li !== _lastLineIdx) {
          _lastLineIdx = info.li;
          var chars = _getLineLetters(info, _cachedLyrics.Type, isRomanized);
          _nonSpaceChars = chars.filter(function (c) { return !c.isSpace; });
          if (el) {
            el.innerHTML = _generateHtml(chars);
            el.style.fontSize = ""; // Reset custom size
            el.className = "visualizer-overlay__lyrics-text" + (info.opposite ? " OppositeAligned" : ""); void el.offsetWidth;
            el.className = "visualizer-overlay__lyrics-text visualizer-overlay__lyrics-enter" + (info.opposite ? " OppositeAligned" : "");
            _letterSpans = Array.from(el.querySelectorAll("span.vis-letter"));
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
            _bgNonSpaceChars = bgChars.filter(function (c) { return !c.isSpace; });
            if (bgEl) {
              bgEl.innerHTML = _generateHtml(bgChars);
              bgEl.style.display = "block";
              bgEl.className = "visualizer-overlay__lyrics-bg-text" + (info.opposite ? " OppositeAligned" : ""); void bgEl.offsetWidth;
              bgEl.className = "visualizer-overlay__lyrics-bg-text visualizer-overlay__lyrics-enter" + (info.opposite ? " OppositeAligned" : "");
              _bgLetterSpans = Array.from(bgEl.querySelectorAll("span.vis-letter"));
            }
          }
        } else {
          _lastBgLineIdx = -1;
          _bgLetterSpans = [];
          _bgNonSpaceChars = [];
          if (bgEl) {
            bgEl.innerHTML = "";
            bgEl.style.display = "none";
          }
        }

        // Animate Spans helper
        var activeWords = new Set();
        var isSyllableSynced = _cachedLyrics.Type === "Syllable";

        function _animateSpans(spans, nonSpaceChars, isBg) {
          for (var k = 0; k < spans.length; k++) {
            var span = spans[k];
            var charInfo = nonSpaceChars[k];
            if (!charInfo) continue;
            var charDur = charInfo.endTime - charInfo.startTime;
            var animDuration = charDur;
            var x = ps - charInfo.startTime;

            if (x < 0) {
              span.style.color = isBg ? "rgba(255, 255, 255, 0.20)" : "rgba(255, 255, 255, 0.35)";
              span.style.textShadow = "none";
              span.style.opacity = isBg ? "0.20" : "0.35";
              span.style.transform = isSyllableSynced ? "scale(0.95)" : "scale(0.90)";
            } else if (x <= animDuration) {
              var t = x / animDuration;
              var glowRatio = Math.sin(t * Math.PI / 2);
              var activeRatio = Math.max(0, Math.min(1, 4 * Math.pow(t - 0.5, 3) + 0.5));
              
              var minOpacity = isBg ? 0.20 : 0.35;
              var maxOpacity = isBg ? 0.6 : 1.0;
              var opacity = minOpacity + (maxOpacity - minOpacity) * activeRatio;
              span.style.opacity = String(opacity);

              var minScale = isSyllableSynced ? 0.95 : 0.90;
              var maxScale = isBg ? 1.0 : 1.12;
              var scale = minScale + (maxScale - minScale) * activeRatio;
              span.style.transform = "scale(" + scale + ")";

              span.style.color = "color-mix(in srgb, " + themeColorStr + " " + Math.round(activeRatio * 100) + "%, " + (isBg ? "rgba(255, 255, 255, 0.20)" : "rgba(255, 255, 255, 0.35)") + ")";
              span.style.textShadow = isBg ? "none" : ("0 0 " + (glowRatio * 6) + "px rgba(255, 255, 255, 0.6), 0 0 " + (glowRatio * 16) + "px " + themeColorStr);
              
              var wordEl = span.closest(".vis-word");
              if (wordEl) activeWords.add(wordEl);
            } else {
              var elapsed = x - animDuration;
              var decayTime = 0.25;
              var scaleDecay = Math.max(0, 1 - elapsed / decayTime);
              var glowDecay = scaleDecay;

              var settledScale = isBg ? 1.0 : 1.05;
              var maxScale = isBg ? 1.0 : 1.12;
              var scale = settledScale + (maxScale - settledScale) * scaleDecay;
              span.style.transform = "scale(" + scale + ")";

              span.style.color = themeColorStr;
              span.style.textShadow = isBg ? "none" : (glowDecay > 0.01 ? "0 0 " + (glowDecay * 6) + "px rgba(255, 255, 255, 0.6), 0 0 " + (glowDecay * 16) + "px " + themeColorStr : "none");
              
              var lineElapsed = ps - info.endTime;
              if (lineElapsed > 0) {
                var fadeOutDuration = isBg ? 0.20 : 0.5;
                var opacity = Math.max(isBg ? 0.20 : 0.35, 1.0 - (1.0 - (isBg ? 0.20 : 0.35)) * (lineElapsed / fadeOutDuration));
                span.style.opacity = String(opacity);
              } else {
                span.style.opacity = isBg ? "0.6" : "1.0";
              }
            }
          }
        }

        if (el && _letterSpans.length > 0 && _letterSpans.length === _nonSpaceChars.length) {
          _animateSpans(_letterSpans, _nonSpaceChars, false);
        }
        if (bgEl && _bgLetterSpans.length > 0 && _bgLetterSpans.length === _bgNonSpaceChars.length) {
          _animateSpans(_bgLetterSpans, _bgNonSpaceChars, true);
        }

        // Scale up active words, reset others
        if (el) {
          var allWords = el.querySelectorAll("span.vis-word");
          for (var w = 0; w < allWords.length; w++) {
            allWords[w].style.transform = (isSyllableSynced && activeWords.has(allWords[w])) ? "scale(1.12)" : "scale(1.0)";
          }
        }
      }

      var _raf;
      function _loop() {
        _tick();
        _raf = requestAnimationFrame(_loop);
      }
      _loop();
      return function () { cancelAnimationFrame(_raf); };
    }, [refreshTrigger, Spicetify.Player.data?.item?.uri]), g.default.createElement("div", { className: "visualizer-container" + (isPlaying ? "" : " visualizer-container--paused"), ref: a }, !d && g.default.createElement(g.default.Fragment, null, g.default.createElement("div", { className: "visualizer-backdrop" }, g.default.createElement("svg", { style: { display: "none" } }, g.default.createElement("defs", null, g.default.createElement("filter", { id: "watercolor-warp" }, g.default.createElement("feTurbulence", { type: "fractalNoise", baseFrequency: "0.012", numOctaves: "3", result: "noise" }), g.default.createElement("feDisplacementMap", { in: "SourceGraphic", in2: "noise", scale: "250", xChannelSelector: "R", yChannelSelector: "G" })))), prevArt && g.default.createElement("img", { src: prevArt, className: "visualizer-backdrop__img", alt: "" }), currentArt && g.default.createElement("img", { key: fadeKey, src: currentArt, className: "visualizer-backdrop__img visualizer-backdrop__img--fade-in", alt: "" }), g.default.createElement("div", { className: "visualizer-backdrop__blob visualizer-backdrop__blob--1" }), g.default.createElement("div", { className: "visualizer-backdrop__blob visualizer-backdrop__blob--2" }), g.default.createElement("div", { className: "visualizer-backdrop__blob visualizer-backdrop__blob--3" })), g.default.createElement(p.Provider, { value: f }, e && g.default.createElement(e, { isEnabled: "running" === o.state, audioAnalysis: u.audioAnalysis, themeColor: u.themeColor, isPlaying: isPlaying })), g.default.createElement("div", { className: "visualizer-overlay", style: { "--theme-color": "rgb(" + u.themeColor.rgb.r + "," + u.themeColor.rgb.g + "," + u.themeColor.rgb.b + ")" } }, g.default.createElement("div", { className: "visualizer-overlay__label" }, "Now Playing", g.default.createElement("div", { className: "visualizer-overlay__wave" + (isPlaying ? " is-playing" : "") }, g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 1 } }), g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 2 } }), g.default.createElement("span", { className: "visualizer-overlay__wave-dot", style: { "--i": 3 } }))), g.default.createElement("div", { className: "visualizer-overlay__title-container" }, g.default.createElement("strong", { className: "visualizer-overlay__title", style: { "--title-length": (trackTitle || "No track").length } }, trackTitle || "No track"), g.default.createElement("button", { className: "visualizer-overlay__lyrics-toggle-btn" + (showLyrics ? " visualizer-overlay__lyrics-toggle-btn--active" : ""), onClick: () => { var nextVal = !showLyrics; setShowLyrics(nextVal); if (nextVal) handleRefreshLyrics(); }, title: showLyrics ? "Hide Lyrics" : "Show Lyrics" }, g.default.createElement("span", { className: "material-symbols-outlined" }, "lyrics"))), g.default.createElement("div", { className: "visualizer-overlay__artist" }, Spicetify.Player.data?.item?.artists?.map(a => a.name).join(", ") || ""), g.default.createElement("div", { className: "visualizer-overlay__progress" }, g.default.createElement("div", { className: "visualizer-overlay__time-row" }, g.default.createElement("div", { className: "visualizer-overlay__time-left" }, formatTime(isDraggingSeek ? dragProgress : trackProgress)), g.default.createElement("div", { className: "visualizer-overlay__time-right" }, formatTime(u.audioAnalysis?.track?.duration || 0))), g.default.createElement("div", { ref: progressBarContainerRef, className: "visualizer-overlay__progress-bar-container" + (isDraggingSeek ? " visualizer-overlay__progress-bar-container--dragging" : ""), onMouseDown: handleSeekMouseDown }, g.default.createElement("div", { className: "visualizer-overlay__progress-bar", style: { width: (100 * ((isDraggingSeek ? dragProgress : trackProgress) / (u.audioAnalysis?.track?.duration || 1))) + "%" } }))), (n || r.isSecondaryWindow) && g.default.createElement("div", { className: "visualizer-overlay__controls" }, g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (isLiked ? " visualizer-overlay__ctrl-btn--liked" : ""), onClick: () => { Spicetify.Player.toggleHeart(); setIsLiked(!isLiked); } }, g.default.createElement("span", { className: "material-icons" }, isLiked ? "favorite" : "favorite_border")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (shuffle ? " visualizer-overlay__ctrl-btn--active" : ""), onClick: () => Spicetify.Player.toggleShuffle() }, g.default.createElement("span", { className: "material-icons" }, "shuffle")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.prev() }, g.default.createElement("span", { className: "material-icons" }, "skip_previous")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn visualizer-overlay__ctrl-btn--play", onClick: () => Spicetify.Player.togglePlay() }, g.default.createElement("span", { className: "material-icons" }, isPlaying ? "pause" : "play_arrow")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.next() }, g.default.createElement("span", { className: "material-icons" }, "skip_next")), g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn" + (repeatMode ? " visualizer-overlay__ctrl-btn--active" : ""), onClick: () => Spicetify.Player.toggleRepeat() }, g.default.createElement("span", { className: "material-icons" }, 2 === repeatMode ? "repeat_one" : repeatMode ? "repeat" : "repeat")), g.default.createElement("div", { className: "visualizer-overlay__volume-wrap" }, g.default.createElement("button", { className: "visualizer-overlay__ctrl-btn", onClick: () => Spicetify.Player.setMuted && Spicetify.Player.setMuted(!Spicetify.Player.isMuted()) }, g.default.createElement("span", { className: "material-icons" }, Spicetify.Player.isMuted && Spicetify.Player.isMuted() || volume === 0 ? "volume_off" : volume < .5 ? "volume_down" : "volume_up")), g.default.createElement("input", { type: "range", className: "visualizer-overlay__volume", min: "0", max: "1", step: "0.01", value: volume, onChange: e => Spicetify.Player.setVolume(parseFloat(e.target.value)) }))), showLyrics && lyricsLine && g.default.createElement("div", { className: "visualizer-overlay__lyrics" }, hasNoLyrics ? g.default.createElement("div", { key: "no-lyrics", className: "visualizer-overlay__no-lyrics-container" }, g.default.createElement("span", { className: "visualizer-overlay__lyrics-text" }, "No lyrics available"), g.default.createElement("button", { className: "visualizer-overlay__lyrics-refresh-btn-inline", onClick: handleRefreshLyrics, title: "Refresh Lyrics", style: { background: "none", border: "none", cursor: "pointer", padding: "0", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--theme-color, #ffffff)" } }, g.default.createElement("span", { className: "material-symbols-outlined", style: { fontSize: "1.2rem" } }, "refresh"))) : g.default.createElement(g.default.Fragment, null, g.default.createElement("div", { ref: lyricsContainerRef, key: "lyrics-words", className: "visualizer-overlay__lyrics-text", id: "vis-lyrics-words" }), g.default.createElement("div", { ref: lyricsBgContainerRef, key: "lyrics-bg-words", className: "visualizer-overlay__lyrics-bg-text", id: "vis-lyrics-bg-words", style: { display: "none" } })))), !r.isSecondaryWindow && g.default.createElement("div", { className: "visualizer-top-bar" }, u.audioAnalysis?.isFallback && g.default.createElement(Spicetify.ReactComponent.TooltipWrapper, { label: "Spotify doesn't have audio analysis data for this song right now, so this animation is simulated and not synced to the music.", placement: "bottom" }, g.default.createElement("button", { className: "visualizer-top-btn", type: "button", "aria-label": "Simulated animation notice" }, g.default.createElement("span", { className: "material-symbols-outlined" }, "info"))), g.default.createElement("button", { className: "visualizer-top-btn", title: n ? "Exit Fullscreen" : "Enter Fullscreen", onClick: () => n ? a.current?.ownerDocument.exitFullscreen() : a.current?.requestFullscreen() }, g.default.createElement("span", { className: "material-symbols-outlined" }, n ? "fullscreen_exit" : "fullscreen")), g.default.createElement("button", { className: "visualizer-top-btn", title: r.isSecondaryWindow ? "Close Window" : "Open Popup", onClick: () => r.isSecondaryWindow ? window.close() : (async r => { try { let e = window.open("", "", "width=960,height=540"); if (!e) { let t = "fallback PiP API is not available"; if (window.documentPictureInPicture && (window.documentPictureInPicture.window ? t = "cannot open another PiP window" : e = await window.documentPictureInPicture.requestWindow({ width: 960, height: 540 }).catch(e => (t = e ? "" + e : "unknown error", null))), !e) return void Spicetify.showNotification(_.default.createElement("span", null, "Failed to open window: ", t, ". Try with devtools using", " ", _.default.createElement("code", { style: { fontSize: "12px", background: "rgba(0 0 0 / 0.2)", borderRadius: "4px", padding: "2px" } }, "spicetify enable-devtools"), "."), !0) } let t = e.document; Array.from(document.styleSheets).forEach(e => { e.ownerNode && "tagName" in e.ownerNode && (e = e.ownerNode, e = t.importNode(e, !0), t.head.appendChild(e)) }), t.documentElement.className = document.documentElement.className, t.body.className = document.body.className; var i = D.getStyleSheetManager(), a = Spicetify.ReactDOM.unmountComponentAtNode(t.body), n = _.default.createElement(we, { isSecondaryWindow: !0, onWindowDestroyed: a, initialRenderer: r }); i ? Spicetify.ReactDOM.render(_.default.createElement(i, { target: t.head }, n), t.body) : (Spicetify.showNotification("[Visualizer] Could not find StyleSheetManager. Styles in popup window probably won't work.", !0), Spicetify.ReactDOM.render(n, t.body)) } catch (e) { console.error("[Visualizer]", "error opening popup window", e); let t = e ? "" + e : "unknown error"; Spicetify.showNotification("Failed to open window: " + t, !0) } })(t) }, g.default.createElement("span", { className: "material-symbols-outlined" }, r.isSecondaryWindow ? "pip_exit" : "pip")))), "loading" === o.state ? g.default.createElement(B, null) : "error" === o.state ? g.default.createElement("div", { className: y.error_container }, g.default.createElement("div", { className: y.error_message }, o.errorData.message), 0 === o.errorData.recovery && g.default.createElement(Spicetify.ReactComponent.ButtonPrimary, { onClick: () => m(Spicetify.Player.data) }, "Try again")) : null)
  } var _e = r(i()); return xe = k, M(n({}, "__esModule", { value: !0 }), xe)
})(); let render = () => visualizer.default();