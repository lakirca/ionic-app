/*!
 * wavesurfer.js 3.1.0 (2019-09-29)
 * https://github.com/katspaugh/wavesurfer.js
 * @license BSD-3-Clause
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("WaveSurfer", [], t) : "object" == typeof exports ? exports.WaveSurfer = t() : e.WaveSurfer = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) r.d(n, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 6)
    }([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "ajax", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(t, "getId", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(t, "max", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(t, "min", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(t, "Observer", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(t, "extend", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(t, "style", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(t, "requestAnimationFrame", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(t, "frame", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(t, "debounce", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }), Object.defineProperty(t, "preventClick", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(t, "fetchFile", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        });
        var n = v(r(7)),
            i = v(r(2)),
            a = v(r(8)),
            s = v(r(9)),
            o = v(r(1)),
            u = v(r(10)),
            l = v(r(3)),
            c = v(r(4)),
            f = v(r(11)),
            h = v(r(12)),
            d = v(r(13)),
            p = v(r(14));

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.handlers = null
            }
            var t, r, i;
            return t = e, (r = [{
                key: "on",
                value: function(e, t) {
                    var r = this;
                    this.handlers || (this.handlers = {});
                    var n = this.handlers[e];
                    return n || (n = this.handlers[e] = []), n.push(t), {
                        name: e,
                        callback: t,
                        un: function(e, t) {
                            return r.un(e, t)
                        }
                    }
                }
            }, {
                key: "un",
                value: function(e, t) {
                    if (this.handlers) {
                        var r, n = this.handlers[e];
                        if (n)
                            if (t)
                                for (r = n.length - 1; r >= 0; r--) n[r] == t && n.splice(r, 1);
                            else n.length = 0
                    }
                }
            }, {
                key: "unAll",
                value: function() {
                    this.handlers = null
                }
            }, {
                key: "once",
                value: function(e, t) {
                    var r = this;
                    return this.on(e, (function n() {
                        for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                        t.apply(r, a), setTimeout((function() {
                            r.un(e, n)
                        }), 0)
                    }))
                }
            }, {
                key: "fireEvent",
                value: function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    if (this.handlers) {
                        var i = this.handlers[e];
                        i && i.forEach((function(e) {
                            e.apply(void 0, r)
                        }))
                    }
                }
            }]) && n(t.prototype, r), i && n(t, i), e
        }();
        t.default = i, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            void 0 === e && (e = "wavesurfer_");
            return e + Math.random().toString(32).substring(2)
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            return Object.keys(t).forEach((function(r) {
                e.style[r] !== t[r] && (e.style[r] = t[r])
            })), e
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
            return setTimeout(e, 1e3 / 60)
        }).bind(window);
        t.default = n, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule) return e;
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {};
            if (null != e) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                    }
            }
            r.default = e, t && t.set(e, r);
            return r
        }(r(0));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function o(e, t) {
            return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t, r) {
            return t && l(e.prototype, t), r && l(e, r), e
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var h = "playing",
            d = "paused",
            p = "finished",
            v = function(e) {
                function t(e) {
                    var r, n, i;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (i = o(this, u(t).call(this))).audioContext = null, i.offlineAudioContext = null, i.stateBehaviors = (s(r = {}, h, {
                        init: function() {
                            this.addOnAudioProcess()
                        },
                        getPlayedPercents: function() {
                            var e = this.getDuration();
                            return this.getCurrentTime() / e || 0
                        },
                        getCurrentTime: function() {
                            return this.startPosition + this.getPlayedTime()
                        }
                    }), s(r, d, {
                        init: function() {
                            this.removeOnAudioProcess()
                        },
                        getPlayedPercents: function() {
                            var e = this.getDuration();
                            return this.getCurrentTime() / e || 0
                        },
                        getCurrentTime: function() {
                            return this.startPosition
                        }
                    }), s(r, p, {
                        init: function() {
                            this.removeOnAudioProcess(), this.fireEvent("finish")
                        },
                        getPlayedPercents: function() {
                            return 1
                        },
                        getCurrentTime: function() {
                            return this.getDuration()
                        }
                    }), r), i.params = e, i.ac = e.audioContext || (i.supportsWebAudio() ? i.getAudioContext() : {}), i.lastPlay = i.ac.currentTime, i.startPosition = 0, i.scheduledPause = null, i.states = (s(n = {}, h, Object.create(i.stateBehaviors[h])), s(n, d, Object.create(i.stateBehaviors[d])), s(n, p, Object.create(i.stateBehaviors[p])), n), i.analyser = null, i.buffer = null, i.filters = [], i.gainNode = null, i.mergedPeaks = null, i.offlineAc = null, i.peaks = null, i.playbackRate = 1, i.analyser = null, i.scriptNode = null, i.source = null, i.splitPeaks = [], i.state = null, i.explicitDuration = e.duration, i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(t, e), c(t, [{
                    key: "supportsWebAudio",
                    value: function() {
                        return !(!window.AudioContext && !window.webkitAudioContext)
                    }
                }, {
                    key: "getAudioContext",
                    value: function() {
                        return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext || window.webkitAudioContext)), window.WaveSurferAudioContext
                    }
                }, {
                    key: "getOfflineAudioContext",
                    value: function(e) {
                        return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, e)), window.WaveSurferOfflineAudioContext
                    }
                }]), c(t, [{
                    key: "init",
                    value: function() {
                        this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(d), this.setPlaybackRate(this.params.audioRate), this.setLength(0)
                    }
                }, {
                    key: "disconnectFilters",
                    value: function() {
                        this.filters && (this.filters.forEach((function(e) {
                            e && e.disconnect()
                        })), this.filters = null, this.analyser.connect(this.gainNode))
                    }
                }, {
                    key: "setState",
                    value: function(e) {
                        this.state !== this.states[e] && (this.state = this.states[e], this.state.init.call(this))
                    }
                }, {
                    key: "setFilter",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.setFilters(t)
                    }
                }, {
                    key: "setFilters",
                    value: function(e) {
                        this.disconnectFilters(), e && e.length && (this.filters = e, this.analyser.disconnect(), e.reduce((function(e, t) {
                            return e.connect(t), t
                        }), this.analyser).connect(this.gainNode))
                    }
                }, {
                    key: "createScriptNode",
                    value: function() {
                        this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(t.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(t.scriptBufferSize), this.scriptNode.connect(this.ac.destination)
                    }
                }, {
                    key: "addOnAudioProcess",
                    value: function() {
                        var e = this;
                        this.scriptNode.onaudioprocess = function() {
                            var t = e.getCurrentTime();
                            t >= e.getDuration() ? (e.setState(p), e.fireEvent("pause")) : t >= e.scheduledPause ? e.pause() : e.state === e.states[h] && e.fireEvent("audioprocess", t)
                        }
                    }
                }, {
                    key: "removeOnAudioProcess",
                    value: function() {
                        this.scriptNode.onaudioprocess = function() {}
                    }
                }, {
                    key: "createAnalyserNode",
                    value: function() {
                        this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode)
                    }
                }, {
                    key: "createVolumeNode",
                    value: function() {
                        this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination)
                    }
                }, {
                    key: "setSinkId",
                    value: function(e) {
                        if (e) {
                            var t = new window.Audio;
                            if (!t.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
                            t.autoplay = !0;
                            var r = this.ac.createMediaStreamDestination();
                            return this.gainNode.disconnect(), this.gainNode.connect(r), t.srcObject = r.stream, t.setSinkId(e)
                        }
                        return Promise.reject(new Error("Invalid deviceId: " + e))
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.gainNode.gain.setValueAtTime(e, this.ac.currentTime)
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.gainNode.gain.value
                    }
                }, {
                    key: "decodeArrayBuffer",
                    value: function(e, t, r) {
                        this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100)), this.offlineAc.decodeAudioData(e, (function(e) {
                            return t(e)
                        }), r)
                    }
                }, {
                    key: "setPeaks",
                    value: function(e, t) {
                        null != t && (this.explicitDuration = t), this.peaks = e
                    }
                }, {
                    key: "setLength",
                    value: function(e) {
                        if (!this.mergedPeaks || e != 2 * this.mergedPeaks.length - 1 + 2) {
                            this.splitPeaks = [], this.mergedPeaks = [];
                            var t, r = this.buffer ? this.buffer.numberOfChannels : 1;
                            for (t = 0; t < r; t++) this.splitPeaks[t] = [], this.splitPeaks[t][2 * (e - 1)] = 0, this.splitPeaks[t][2 * (e - 1) + 1] = 0;
                            this.mergedPeaks[2 * (e - 1)] = 0, this.mergedPeaks[2 * (e - 1) + 1] = 0
                        }
                    }
                }, {
                    key: "getPeaks",
                    value: function(e, t, r) {
                        if (this.peaks) return this.peaks;
                        if (!this.buffer) return [];
                        if (t = t || 0, r = r || e - 1, this.setLength(e), !this.buffer) return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                        if (!this.buffer.length) {
                            var n = this.createBuffer(1, 4096, this.sampleRate);
                            this.buffer = n.buffer
                        }
                        var i, a = this.buffer.length / e,
                            s = ~~(a / 10) || 1,
                            o = this.buffer.numberOfChannels;
                        for (i = 0; i < o; i++) {
                            var u = this.splitPeaks[i],
                                l = this.buffer.getChannelData(i),
                                c = void 0;
                            for (c = t; c <= r; c++) {
                                var f = ~~(c * a),
                                    h = ~~(f + a),
                                    d = 0,
                                    p = 0,
                                    v = void 0;
                                for (v = f; v < h; v += s) {
                                    var y = l[v];
                                    y > p && (p = y), y < d && (d = y)
                                }
                                u[2 * c] = p, u[2 * c + 1] = d, (0 == i || p > this.mergedPeaks[2 * c]) && (this.mergedPeaks[2 * c] = p), (0 == i || d < this.mergedPeaks[2 * c + 1]) && (this.mergedPeaks[2 * c + 1] = d)
                            }
                        }
                        return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                    }
                }, {
                    key: "getPlayedPercents",
                    value: function() {
                        return this.state.getPlayedPercents.call(this)
                    }
                }, {
                    key: "disconnectSource",
                    value: function() {
                        this.source && this.source.disconnect()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = e, this.createSource()
                    }
                }, {
                    key: "createSource",
                    value: function() {
                        this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(this.analyser)
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return this.state !== this.states[h]
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.explicitDuration ? this.explicitDuration : this.buffer ? this.buffer.duration : 0
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t) {
                        if (this.buffer) return this.scheduledPause = null, null == e && (e = this.getCurrentTime()) >= this.getDuration() && (e = 0), null == t && (t = this.getDuration()), this.startPosition = e, this.lastPlay = this.ac.currentTime, this.state === this.states[p] && this.setState(d), {
                            start: e,
                            end: t
                        }
                    }
                }, {
                    key: "getPlayedTime",
                    value: function() {
                        return (this.ac.currentTime - this.lastPlay) * this.playbackRate
                    }
                }, {
                    key: "play",
                    value: function(e, t) {
                        if (this.buffer) {
                            this.createSource();
                            var r = this.seekTo(e, t);
                            e = r.start, t = r.end, this.scheduledPause = t, this.source.start(0, e, t - e), "suspended" == this.ac.state && this.ac.resume && this.ac.resume(), this.setState(h), this.fireEvent("play")
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(d), this.fireEvent("pause")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.state.getCurrentTime.call(this)
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.playbackRate
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        e = e || 1, this.isPaused() ? this.playbackRate = e : (this.pause(), this.playbackRate = e, this.play())
                    }
                }]), t
            }(n.Observer);
        t.default = v, v.scriptBufferSize = 256, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function(e) {
                if (e && e.__esModule) return e;
                var t = l();
                if (t && t.has(e)) return t.get(e);
                var r = {};
                if (null != e) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                        }
                }
                r.default = e, t && t.set(e, r);
                return r
            }(r(0)),
            i = u(r(15)),
            a = u(r(5)),
            s = u(r(18)),
            o = u(r(19));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return l = function() {
                return e
            }, e
        }

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? d(e) : t
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function y(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function m(e, t, r) {
            return t && y(e.prototype, t), r && y(e, r), e
        }
        var b = function(e) {
            function t(e) {
                var r;
                if (v(this, t), (r = f(this, h(t).call(this))).defaultParams = {
                        audioContext: null,
                        audioScriptProcessor: null,
                        audioRate: 1,
                        autoCenter: !0,
                        autoCenterRate: 5,
                        autoCenterImmediately: !1,
                        backend: "WebAudio",
                        backgroundColor: null,
                        barHeight: 1,
                        barGap: null,
                        container: null,
                        cursorColor: "#333",
                        cursorWidth: 1,
                        dragSelection: !0,
                        duration: null,
                        fillParent: !0,
                        forceDecode: !1,
                        height: 128,
                        hideScrollbar: !1,
                        interact: !0,
                        loopSelection: !0,
                        maxCanvasWidth: 4e3,
                        mediaContainer: null,
                        mediaControls: !1,
                        mediaType: "audio",
                        minPxPerSec: 20,
                        normalize: !1,
                        partialRender: !1,
                        pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                        plugins: [],
                        progressColor: "#555",
                        removeMediaElementOnDestroy: !0,
                        renderer: i.default,
                        responsive: !1,
                        rtl: !1,
                        scrollParent: !1,
                        skipLength: 2,
                        splitChannels: !1,
                        waveColor: "#999",
                        xhr: {}
                    }, r.backends = {
                        MediaElement: s.default,
                        WebAudio: a.default
                    }, r.util = n, r.params = n.extend({}, r.defaultParams, e), r.container = "string" == typeof e.container ? document.querySelector(r.params.container) : r.params.container, !r.container) throw new Error("Container element not found");
                if (null == r.params.mediaContainer ? r.mediaContainer = r.container : "string" == typeof r.params.mediaContainer ? r.mediaContainer = document.querySelector(r.params.mediaContainer) : r.mediaContainer = r.params.mediaContainer, !r.mediaContainer) throw new Error("Media Container element not found");
                if (r.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
                if (r.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
                if (!0 === r.params.rtl && n.style(r.container, {
                        transform: "rotateY(180deg)"
                    }), r.params.backgroundColor && r.setBackgroundColor(r.params.backgroundColor), r.savedVolume = 0, r.isMuted = !1, r.tmpEvents = [], r.currentRequest = null, r.arraybuffer = null, r.drawer = null, r.backend = null, r.peakCache = null, "function" != typeof r.params.renderer) throw new Error("Renderer parameter is invalid");
                r.Drawer = r.params.renderer, "AudioElement" == r.params.backend && (r.params.backend = "MediaElement"), "WebAudio" != r.params.backend || a.default.prototype.supportsWebAudio.call(null) || (r.params.backend = "MediaElement"), r.Backend = r.backends[r.params.backend], r.initialisedPluginList = {}, r.isDestroyed = !1, r.isReady = !1;
                var o = 0;
                return r._onResize = n.debounce((function() {
                    o == r.drawer.wrapper.clientWidth || r.params.scrollParent || (o = r.drawer.wrapper.clientWidth, r.drawer.fireEvent("redraw"))
                }), "number" == typeof r.params.responsive ? r.params.responsive : 100), f(r, d(r))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(t, e), m(t, null, [{
                key: "create",
                value: function(e) {
                    return new t(e).init()
                }
            }]), m(t, [{
                key: "init",
                value: function() {
                    return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this
                }
            }, {
                key: "registerPlugins",
                value: function(e) {
                    var t = this;
                    return e.forEach((function(e) {
                        return t.addPlugin(e)
                    })), e.forEach((function(e) {
                        e.deferInit || t.initPlugin(e.name)
                    })), this.fireEvent("plugins-registered", e), this
                }
            }, {
                key: "getActivePlugins",
                value: function() {
                    return this.initialisedPluginList
                }
            }, {
                key: "addPlugin",
                value: function(e) {
                    var t = this;
                    if (!e.name) throw new Error("Plugin does not have a name!");
                    if (!e.instance) throw new Error("Plugin ".concat(e.name, " does not have an instance property!"));
                    e.staticProps && Object.keys(e.staticProps).forEach((function(r) {
                        t[r] = e.staticProps[r]
                    }));
                    var r = e.instance;
                    return Object.getOwnPropertyNames(n.Observer.prototype).forEach((function(e) {
                        r.prototype[e] = n.Observer.prototype[e]
                    })), this[e.name] = new r(e.params || {}, this), this.fireEvent("plugin-added", e.name), this
                }
            }, {
                key: "initPlugin",
                value: function(e) {
                    if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet!"));
                    return this.initialisedPluginList[e] && this.destroyPlugin(e), this[e].init(), this.initialisedPluginList[e] = !0, this.fireEvent("plugin-initialised", e), this
                }
            }, {
                key: "destroyPlugin",
                value: function(e) {
                    if (!this[e]) throw new Error("Plugin ".concat(e, " has not been added yet and cannot be destroyed!"));
                    if (!this.initialisedPluginList[e]) throw new Error("Plugin ".concat(e, " is not active and cannot be destroyed!"));
                    if ("function" != typeof this[e].destroy) throw new Error("Plugin ".concat(e, " does not have a destroy function!"));
                    return this[e].destroy(), delete this.initialisedPluginList[e], this.fireEvent("plugin-destroyed", e), this
                }
            }, {
                key: "destroyAllPlugins",
                value: function() {
                    var e = this;
                    Object.keys(this.initialisedPluginList).forEach((function(t) {
                        return e.destroyPlugin(t)
                    }))
                }
            }, {
                key: "createDrawer",
                value: function() {
                    var e = this;
                    this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", (function() {
                        e.drawBuffer(), e.drawer.progress(e.backend.getPlayedPercents())
                    })), this.drawer.on("click", (function(t, r) {
                        setTimeout((function() {
                            return e.seekTo(r)
                        }), 0)
                    })), this.drawer.on("scroll", (function(t) {
                        e.params.partialRender && e.drawBuffer(), e.fireEvent("scroll", t)
                    }))
                }
            }, {
                key: "createBackend",
                value: function() {
                    var e = this;
                    this.backend && this.backend.destroy(), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", (function() {
                        e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("finish")
                    })), this.backend.on("play", (function() {
                        return e.fireEvent("play")
                    })), this.backend.on("pause", (function() {
                        return e.fireEvent("pause")
                    })), this.backend.on("audioprocess", (function(t) {
                        e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("audioprocess", t)
                    })), "MediaElement" === this.params.backend && (this.backend.on("seek", (function() {
                        e.drawer.progress(e.backend.getPlayedPercents())
                    })), this.backend.on("volume", (function() {
                        var t = e.getVolume();
                        e.fireEvent("volume", t), e.backend.isMuted !== e.isMuted && (e.isMuted = e.backend.isMuted, e.fireEvent("mute", e.isMuted))
                    })))
                }
            }, {
                key: "createPeakCache",
                value: function() {
                    this.params.partialRender && (this.peakCache = new o.default)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.backend.getDuration()
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.backend.getCurrentTime()
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    e >= this.getDuration() ? this.seekTo(1) : this.seekTo(e / this.getDuration())
                }
            }, {
                key: "play",
                value: function(e, t) {
                    var r = this;
                    return this.fireEvent("interaction", (function() {
                        return r.play(e, t)
                    })), this.backend.play(e, t)
                }
            }, {
                key: "pause",
                value: function() {
                    if (!this.backend.isPaused()) return this.backend.pause()
                }
            }, {
                key: "playPause",
                value: function() {
                    return this.backend.isPaused() ? this.play() : this.pause()
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return !this.backend.isPaused()
                }
            }, {
                key: "skipBackward",
                value: function(e) {
                    this.skip(-e || -this.params.skipLength)
                }
            }, {
                key: "skipForward",
                value: function(e) {
                    this.skip(e || this.params.skipLength)
                }
            }, {
                key: "skip",
                value: function(e) {
                    var t = this.getDuration() || 1,
                        r = this.getCurrentTime() || 0;
                    r = Math.max(0, Math.min(t, r + (e || 0))), this.seekAndCenter(r / t)
                }
            }, {
                key: "seekAndCenter",
                value: function(e) {
                    this.seekTo(e), this.drawer.recenter(e)
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    var t = this;
                    if ("number" != typeof e || !isFinite(e) || e < 0 || e > 1) throw new Error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                    this.fireEvent("interaction", (function() {
                        return t.seekTo(e)
                    }));
                    var r = this.backend.isPaused();
                    r || this.backend.pause();
                    var n = this.params.scrollParent;
                    this.params.scrollParent = !1, this.backend.seekTo(e * this.getDuration()), this.drawer.progress(e), r || this.backend.play(), this.params.scrollParent = n, this.fireEvent("seek", e)
                }
            }, {
                key: "stop",
                value: function() {
                    this.pause(), this.seekTo(0), this.drawer.progress(0)
                }
            }, {
                key: "setSinkId",
                value: function(e) {
                    return this.backend.setSinkId(e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.backend.setVolume(e), this.fireEvent("volume", e)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.backend.getVolume()
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.backend.setPlaybackRate(e)
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.backend.getPlaybackRate()
                }
            }, {
                key: "toggleMute",
                value: function() {
                    this.setMute(!this.isMuted)
                }
            }, {
                key: "setMute",
                value: function(e) {
                    e !== this.isMuted ? (e ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0, this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1, this.fireEvent("volume", this.savedVolume)), this.fireEvent("mute", this.isMuted)) : this.fireEvent("mute", this.isMuted)
                }
            }, {
                key: "getMute",
                value: function() {
                    return this.isMuted
                }
            }, {
                key: "getFilters",
                value: function() {
                    return this.backend.filters || []
                }
            }, {
                key: "toggleScroll",
                value: function() {
                    this.params.scrollParent = !this.params.scrollParent, this.drawBuffer()
                }
            }, {
                key: "toggleInteraction",
                value: function() {
                    this.params.interact = !this.params.interact
                }
            }, {
                key: "getWaveColor",
                value: function() {
                    return this.params.waveColor
                }
            }, {
                key: "setWaveColor",
                value: function(e) {
                    this.params.waveColor = e, this.drawBuffer()
                }
            }, {
                key: "getProgressColor",
                value: function() {
                    return this.params.progressColor
                }
            }, {
                key: "setProgressColor",
                value: function(e) {
                    this.params.progressColor = e, this.drawBuffer()
                }
            }, {
                key: "getBackgroundColor",
                value: function() {
                    return this.params.backgroundColor
                }
            }, {
                key: "setBackgroundColor",
                value: function(e) {
                    this.params.backgroundColor = e, n.style(this.container, {
                        background: this.params.backgroundColor
                    })
                }
            }, {
                key: "getCursorColor",
                value: function() {
                    return this.params.cursorColor
                }
            }, {
                key: "setCursorColor",
                value: function(e) {
                    this.params.cursorColor = e, this.drawer.updateCursor()
                }
            }, {
                key: "getHeight",
                value: function() {
                    return this.params.height
                }
            }, {
                key: "setHeight",
                value: function(e) {
                    this.params.height = e, this.drawer.setHeight(e * this.params.pixelRatio), this.drawBuffer()
                }
            }, {
                key: "drawBuffer",
                value: function() {
                    var e, t = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
                        r = this.drawer.getWidth(),
                        n = t,
                        i = 0,
                        a = Math.max(i + r, n);
                    if (this.params.fillParent && (!this.params.scrollParent || t < r) && (i = 0, a = n = r), this.params.partialRender) {
                        var s, o = this.peakCache.addRangeToPeakCache(n, i, a);
                        for (s = 0; s < o.length; s++) e = this.backend.getPeaks(n, o[s][0], o[s][1]), this.drawer.drawPeaks(e, n, o[s][0], o[s][1])
                    } else e = this.backend.getPeaks(n, i, a), this.drawer.drawPeaks(e, n, i, a);
                    this.fireEvent("redraw", e, n)
                }
            }, {
                key: "zoom",
                value: function(e) {
                    e ? (this.params.minPxPerSec = e, this.params.scrollParent = !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, this.params.scrollParent = !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", e)
                }
            }, {
                key: "loadArrayBuffer",
                value: function(e) {
                    var t = this;
                    this.decodeArrayBuffer(e, (function(e) {
                        t.isDestroyed || t.loadDecodedBuffer(e)
                    }))
                }
            }, {
                key: "loadDecodedBuffer",
                value: function(e) {
                    this.backend.load(e), this.drawBuffer(), this.isReady = !0, this.fireEvent("ready")
                }
            }, {
                key: "loadBlob",
                value: function(e) {
                    var t = this,
                        r = new FileReader;
                    r.addEventListener("progress", (function(e) {
                        return t.onProgress(e)
                    })), r.addEventListener("load", (function(e) {
                        return t.loadArrayBuffer(e.target.result)
                    })), r.addEventListener("error", (function() {
                        return t.fireEvent("error", "Error reading file")
                    })), r.readAsArrayBuffer(e), this.empty()
                }
            }, {
                key: "load",
                value: function(e, t, r, n) {
                    if (this.empty(), r) {
                        var i = {
                                "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(r),
                                "Peaks are not provided": !t,
                                "Backend is not of type MediaElement": "MediaElement" !== this.params.backend,
                                "Url is not of type string": "string" != typeof e
                            },
                            a = Object.keys(i).filter((function(e) {
                                return i[e]
                            }));
                        a.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + a.join("\n\t- ")), r = null)
                    }
                    switch (this.params.backend) {
                        case "WebAudio":
                            return this.loadBuffer(e, t, n);
                        case "MediaElement":
                            return this.loadMediaElement(e, t, r, n)
                    }
                }
            }, {
                key: "loadBuffer",
                value: function(e, t, r) {
                    var n = this,
                        i = function(t) {
                            return t && n.tmpEvents.push(n.once("ready", t)), n.getArrayBuffer(e, (function(e) {
                                return n.loadArrayBuffer(e)
                            }))
                        };
                    if (!t) return i();
                    this.backend.setPeaks(t, r), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", i))
                }
            }, {
                key: "loadMediaElement",
                value: function(e, t, r, n) {
                    var i = this,
                        a = e;
                    if ("string" == typeof e) this.backend.load(a, this.mediaContainer, t, r);
                    else {
                        var s = e;
                        this.backend.loadElt(s, t), a = s.src
                    }
                    this.tmpEvents.push(this.backend.once("canplay", (function() {
                        i.drawBuffer(), i.isReady = !0, i.fireEvent("ready")
                    })), this.backend.once("error", (function(e) {
                        return i.fireEvent("error", e)
                    }))), t && this.backend.setPeaks(t, n), t && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(a, (function(e) {
                        i.decodeArrayBuffer(e, (function(e) {
                            i.backend.buffer = e, i.backend.setPeaks(null), i.drawBuffer(), i.fireEvent("waveform-ready")
                        }))
                    }))
                }
            }, {
                key: "decodeArrayBuffer",
                value: function(e, t) {
                    var r = this;
                    this.arraybuffer = e, this.backend.decodeArrayBuffer(e, (function(n) {
                        r.isDestroyed || r.arraybuffer != e || (t(n), r.arraybuffer = null)
                    }), (function() {
                        return r.fireEvent("error", "Error decoding audiobuffer")
                    }))
                }
            }, {
                key: "getArrayBuffer",
                value: function(e, t) {
                    var r = this,
                        i = n.extend({
                            url: e,
                            responseType: "arraybuffer"
                        }, this.params.xhr),
                        a = n.fetchFile(i);
                    return this.currentRequest = a, this.tmpEvents.push(a.on("progress", (function(e) {
                        r.onProgress(e)
                    })), a.on("success", (function(e) {
                        t(e), r.currentRequest = null
                    })), a.on("error", (function(e) {
                        r.fireEvent("error", e), r.currentRequest = null
                    }))), a
                }
            }, {
                key: "onProgress",
                value: function(e) {
                    var t;
                    t = e.lengthComputable ? e.loaded / e.total : e.loaded / (e.loaded + 1e6), this.fireEvent("loading", Math.round(100 * t), e.target)
                }
            }, {
                key: "exportPCM",
                value: function(e, t, r, n) {
                    e = e || 1024, n = n || 0, t = t || 1e4, r = r || !1;
                    var i = this.backend.getPeaks(e, n),
                        a = [].map.call(i, (function(e) {
                            return Math.round(e * t) / t
                        })),
                        s = JSON.stringify(a);
                    return r || window.open("data:application/json;charset=utf-8," + encodeURIComponent(s)), s
                }
            }, {
                key: "exportImage",
                value: function(e, t, r) {
                    return e || (e = "image/png"), t || (t = 1), r || (r = "dataURL"), this.drawer.getImage(e, t, r)
                }
            }, {
                key: "cancelAjax",
                value: function() {
                    this.currentRequest && this.currentRequest.controller && (this.currentRequest.controller.abort(), this.currentRequest = null)
                }
            }, {
                key: "clearTmpEvents",
                value: function() {
                    this.tmpEvents.forEach((function(e) {
                        return e.un()
                    }))
                }
            }, {
                key: "empty",
                value: function() {
                    this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.isReady = !1, this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({
                        length: this.drawer.getWidth()
                    }, 0)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !0, this.isReady = !1, this.arraybuffer = null
                }
            }]), t
        }(n.Observer);
        t.default = b, b.VERSION = "3.1.0", b.util = n, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = new i.default,
                r = new XMLHttpRequest,
                n = !1;
            r.open(e.method || "GET", e.url, !0), r.responseType = e.responseType || "json", e.xhr && (e.xhr.requestHeaders && e.xhr.requestHeaders.forEach((function(e) {
                r.setRequestHeader(e.key, e.value)
            })), e.xhr.withCredentials && (r.withCredentials = !0));
            return r.addEventListener("progress", (function(e) {
                t.fireEvent("progress", e), e.lengthComputable && e.loaded == e.total && (n = !0)
            })), r.addEventListener("load", (function(e) {
                n || t.fireEvent("progress", e), t.fireEvent("load", e), 200 == r.status || 206 == r.status ? t.fireEvent("success", r.response, e) : t.fireEvent("error", e)
            })), r.addEventListener("error", (function(e) {
                return t.fireEvent("error", e)
            })), r.send(), t.xhr = r, t
        };
        var n, i = (n = r(1)) && n.__esModule ? n : {
            default: n
        };
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = -1 / 0;
            return Object.keys(e).forEach((function(r) {
                e[r] > t && (t = e[r])
            })), t
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = Number(1 / 0);
            return Object.keys(e).forEach((function(r) {
                e[r] < t && (t = e[r])
            })), t
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return r.forEach((function(t) {
                Object.keys(t).forEach((function(r) {
                    e[r] = t[r]
                }))
            })), e
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return (0, i.default)((function() {
                    return e.apply(void 0, r)
                }))
            }
        };
        var n, i = (n = r(4)) && n.__esModule ? n : {
            default: n
        };
        e.exports = t.default
    }, function(e, t) {
        function r(e, t, r) {
            var n, i, a, s, o;

            function u() {
                var l = Date.now() - s;
                l < t && l >= 0 ? n = setTimeout(u, t - l) : (n = null, r || (o = e.apply(a, i), a = i = null))
            }
            null == t && (t = 100);
            var l = function() {
                a = this, i = arguments, s = Date.now();
                var l = r && !n;
                return n || (n = setTimeout(u, t)), l && (o = e.apply(a, i), a = i = null), o
            };
            return l.clear = function() {
                n && (clearTimeout(n), n = null)
            }, l.flush = function() {
                n && (o = e.apply(a, i), a = i = null, clearTimeout(n), n = null)
            }, l
        }
        r.debounce = r, e.exports = r
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            e.stopPropagation(), document.body.removeEventListener("click", n, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            document.body.addEventListener("click", n, !0)
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if (!e) throw new Error("fetch options missing");
            if (!e.url) throw new Error("fetch url missing");
            var t = new i.default,
                r = new Headers,
                n = new Request(e.url);
            t.controller = new AbortController, e && e.requestHeaders && e.requestHeaders.forEach((function(e) {
                r.append(e.key, e.value)
            }));
            var a = e.responseType || "json",
                o = {
                    method: e.method || "GET",
                    headers: r,
                    mode: e.mode || "cors",
                    credentials: e.credentials || "same-origin",
                    cache: e.cache || "default",
                    redirect: e.redirect || "follow",
                    referrer: e.referrer || "client",
                    signal: t.controller.signal
                };
            return fetch(n, o).then((function(e) {
                t.response = e;
                var r = !0;
                e.body || (r = !1);
                var n = e.headers.get("content-length");
                return null === n && (r = !1), r ? (t.onProgress = function(e) {
                    t.fireEvent("progress", e)
                }, new Response(new ReadableStream(new s(t, n, e)), o)) : e
            })).then((function(e) {
                var t;
                if (e.ok) switch (a) {
                    case "arraybuffer":
                        return e.arrayBuffer();
                    case "json":
                        return e.json();
                    case "blob":
                        return e.blob();
                    case "text":
                        return e.text();
                    default:
                        t = "Unknown responseType: " + a
                }
                throw t || (t = "HTTP error status: " + e.status), new Error(t)
            })).then((function(e) {
                t.fireEvent("success", e)
            })).catch((function(e) {
                t.fireEvent("error", e)
            })), t.fetchRequest = n, t
        };
        var n, i = (n = r(1)) && n.__esModule ? n : {
            default: n
        };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = function() {
            function e(t, r, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.instance = t, this.instance._reader = n.body.getReader(), this.total = parseInt(r, 10), this.loaded = 0
            }
            var t, r, n;
            return t = e, (r = [{
                key: "start",
                value: function(e) {
                    var t = this;
                    ! function r() {
                        t.instance._reader.read().then((function(n) {
                            var i = n.done,
                                a = n.value;
                            if (i) return 0 === t.total && t.instance.onProgress.call(t.instance, {
                                loaded: t.loaded,
                                total: t.total,
                                lengthComputable: !1
                            }), void e.close();
                            t.loaded += a.byteLength, t.instance.onProgress.call(t.instance, {
                                loaded: t.loaded,
                                total: t.total,
                                lengthComputable: !(0 === t.total)
                            }), e.enqueue(a), r()
                        })).catch((function(t) {
                            e.error(t)
                        }))
                    }()
                }
            }]) && a(t.prototype, r), n && a(t, n), e
        }();
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = o(r(16)),
            i = function(e) {
                if (e && e.__esModule) return e;
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var r = {};
                if (null != e) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                        }
                }
                r.default = e, t && t.set(e, r);
                return r
            }(r(0)),
            a = o(r(17));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = function(e) {
            function t(e, r) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = c(this, f(t).call(this, e, r))).maxCanvasWidth = r.maxCanvasWidth, n.maxCanvasElementWidth = Math.round(r.maxCanvasWidth / r.pixelRatio), n.hasProgressCanvas = r.waveColor != r.progressColor, n.halfPixel = .5 / r.pixelRatio, n.canvases = [], n.progressWave = null, n.EntryClass = a.default, n.overlap = 2 * Math.ceil(r.pixelRatio / 2), n
            }
            var r, n, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(t, e), r = t, (n = [{
                key: "init",
                value: function() {
                    this.createWrapper(), this.createElements()
                }
            }, {
                key: "createElements",
                value: function() {
                    this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), {
                        position: "absolute",
                        zIndex: 3,
                        left: 0,
                        top: 0,
                        bottom: 0,
                        overflow: "hidden",
                        width: "0",
                        display: "none",
                        boxSizing: "border-box",
                        borderRightStyle: "solid",
                        pointerEvents: "none"
                    })), this.addCanvas(), this.updateCursor()
                }
            }, {
                key: "updateCursor",
                value: function() {
                    this.style(this.progressWave, {
                        borderRightWidth: this.params.cursorWidth + "px",
                        borderRightColor: this.params.cursorColor
                    })
                }
            }, {
                key: "updateSize",
                value: function() {
                    for (var e = this, t = Math.round(this.width / this.params.pixelRatio), r = Math.ceil(t / (this.maxCanvasElementWidth + this.overlap)); this.canvases.length < r;) this.addCanvas();
                    for (; this.canvases.length > r;) this.removeCanvas();
                    var n = this.maxCanvasWidth + this.overlap,
                        i = this.canvases.length - 1;
                    this.canvases.forEach((function(t, r) {
                        r == i && (n = e.width - e.maxCanvasWidth * i), e.updateDimensions(t, n, e.height), t.clearWave()
                    }))
                }
            }, {
                key: "addCanvas",
                value: function() {
                    var e = new this.EntryClass;
                    e.hasProgressCanvas = this.hasProgressCanvas, e.halfPixel = this.halfPixel;
                    var t = this.maxCanvasElementWidth * this.canvases.length;
                    e.initWave(this.wrapper.appendChild(this.style(document.createElement("canvas"), {
                        position: "absolute",
                        zIndex: 2,
                        left: t + "px",
                        top: 0,
                        bottom: 0,
                        height: "100%",
                        pointerEvents: "none"
                    }))), this.hasProgressCanvas && e.initProgress(this.progressWave.appendChild(this.style(document.createElement("canvas"), {
                        position: "absolute",
                        left: t + "px",
                        top: 0,
                        bottom: 0,
                        height: "100%"
                    }))), this.canvases.push(e)
                }
            }, {
                key: "removeCanvas",
                value: function() {
                    var e = this.canvases[this.canvases.length - 1];
                    e.wave.parentElement.removeChild(e.wave), this.hasProgressCanvas && e.progress.parentElement.removeChild(e.progress), e && (e.destroy(), e = null), this.canvases.pop()
                }
            }, {
                key: "updateDimensions",
                value: function(e, t, r) {
                    var n = Math.round(t / this.params.pixelRatio),
                        i = Math.round(this.width / this.params.pixelRatio);
                    e.updateDimensions(n, i, t, r), this.style(this.progressWave, {
                        display: "block"
                    })
                }
            }, {
                key: "clearWave",
                value: function() {
                    this.canvases.forEach((function(e) {
                        return e.clearWave()
                    }))
                }
            }, {
                key: "drawBars",
                value: function(e, t, r, n) {
                    var i = this;
                    return this.prepareDraw(e, t, r, n, (function(e) {
                        var t = e.absmax,
                            a = e.hasMinVals,
                            s = (e.height, e.offsetY),
                            o = e.halfH,
                            u = e.peaks;
                        if (void 0 !== r)
                            for (var l = a ? 2 : 1, c = u.length / l, f = i.params.barWidth * i.params.pixelRatio, h = f + (null === i.params.barGap ? Math.max(i.params.pixelRatio, ~~(f / 2)) : Math.max(i.params.pixelRatio, i.params.barGap * i.params.pixelRatio)), d = c / i.width, p = n, v = r; v < p; v += h) {
                                var y = u[Math.floor(v * d * l)] || 0,
                                    m = Math.round(y / t * o);
                                i.fillRect(v + i.halfPixel, o - m + s, f + i.halfPixel, 2 * m)
                            }
                    }))
                }
            }, {
                key: "drawWave",
                value: function(e, t, r, n) {
                    var i = this;
                    return this.prepareDraw(e, t, r, n, (function(e) {
                        var t = e.absmax,
                            a = e.hasMinVals,
                            s = (e.height, e.offsetY),
                            o = e.halfH,
                            u = e.peaks;
                        if (!a) {
                            for (var l = [], c = u.length, f = 0; f < c; f++) l[2 * f] = u[f], l[2 * f + 1] = -u[f];
                            u = l
                        }
                        void 0 !== r && i.drawLine(u, t, o, s, r, n), i.fillRect(0, o + s - i.halfPixel, i.width, i.halfPixel)
                    }))
                }
            }, {
                key: "drawLine",
                value: function(e, t, r, n, i, a) {
                    var s = this;
                    this.canvases.forEach((function(o) {
                        s.setFillStyles(o), o.drawLines(e, t, r, n, i, a)
                    }))
                }
            }, {
                key: "fillRect",
                value: function(e, t, r, n) {
                    for (var i = Math.floor(e / this.maxCanvasWidth), a = Math.min(Math.ceil((e + r) / this.maxCanvasWidth) + 1, this.canvases.length), s = i; s < a; s++) {
                        var o = this.canvases[s],
                            u = s * this.maxCanvasWidth,
                            l = {
                                x1: Math.max(e, s * this.maxCanvasWidth),
                                y1: t,
                                x2: Math.min(e + r, s * this.maxCanvasWidth + o.wave.width),
                                y2: t + n
                            };
                        l.x1 < l.x2 && (this.setFillStyles(o), o.fillRects(l.x1 - u, l.y1, l.x2 - l.x1, l.y2 - l.y1))
                    }
                }
            }, {
                key: "prepareDraw",
                value: function(e, t, r, n, a) {
                    var s = this;
                    return i.frame((function() {
                        if (e[0] instanceof Array) {
                            var o = e;
                            if (s.params.splitChannels) return s.setHeight(o.length * s.params.height * s.params.pixelRatio), o.forEach((function(e, t) {
                                return s.prepareDraw(e, t, r, n, a)
                            }));
                            e = o[0]
                        }
                        var u = 1 / s.params.barHeight;
                        if (s.params.normalize) {
                            var l = i.max(e),
                                c = i.min(e);
                            u = -c > l ? -c : l
                        }
                        var f = [].some.call(e, (function(e) {
                                return e < 0
                            })),
                            h = s.params.height * s.params.pixelRatio;
                        return a({
                            absmax: u,
                            hasMinVals: f,
                            height: h,
                            offsetY: h * t || 0,
                            halfH: h / 2,
                            peaks: e
                        })
                    }))()
                }
            }, {
                key: "setFillStyles",
                value: function(e) {
                    e.setFillStyles(this.params.waveColor, this.params.progressColor)
                }
            }, {
                key: "getImage",
                value: function(e, t, r) {
                    if ("blob" === r) return Promise.all(this.canvases.map((function(n) {
                        return n.getImage(e, t, r)
                    })));
                    if ("dataURL" === r) {
                        var n = this.canvases.map((function(n) {
                            return n.getImage(e, t, r)
                        }));
                        return n.length > 1 ? n : n[0]
                    }
                }
            }, {
                key: "updateProgress",
                value: function(e) {
                    this.style(this.progressWave, {
                        width: e + "px"
                    })
                }
            }]) && l(r.prototype, n), s && l(r, s), t
        }(n.default);
        t.default = d, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule) return e;
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {};
            if (null != e) {
                var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                    }
            }
            r.default = e, t && t.set(e, r);
            return r
        }(r(0));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function o(e, t) {
            return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var c = function(e) {
            function t(e, r) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = o(this, u(t).call(this))).container = e, n.params = r, n.width = 0, n.height = r.height * n.params.pixelRatio, n.lastPos = 0, n.wrapper = null, n
            }
            var r, i, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(t, e), r = t, (i = [{
                key: "style",
                value: function(e, t) {
                    return n.style(e, t)
                }
            }, {
                key: "createWrapper",
                value: function() {
                    this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, {
                        display: "block",
                        position: "relative",
                        userSelect: "none",
                        webkitUserSelect: "none",
                        height: this.params.height + "px"
                    }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
                        width: "100%",
                        overflowX: this.params.hideScrollbar ? "hidden" : "auto",
                        overflowY: "hidden"
                    }), this.setupWrapperEvents()
                }
            }, {
                key: "handleEvent",
                value: function(e, t) {
                    !t && e.preventDefault();
                    var r, n = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
                        i = this.wrapper.getBoundingClientRect(),
                        a = this.width,
                        s = this.getWidth();
                    return !this.params.fillParent && a < s ? (r = (this.params.rtl ? i.right - n : n - i.left) * (this.params.pixelRatio / a) || 0) > 1 && (r = 1) : r = ((this.params.rtl ? i.right - n : n - i.left) + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, r
                }
            }, {
                key: "setupWrapperEvents",
                value: function() {
                    var e = this;
                    this.wrapper.addEventListener("click", (function(t) {
                        var r = e.wrapper.offsetHeight - e.wrapper.clientHeight;
                        if (0 != r) {
                            var n = e.wrapper.getBoundingClientRect();
                            if (t.clientY >= n.bottom - r) return
                        }
                        e.params.interact && e.fireEvent("click", t, e.handleEvent(t))
                    })), this.wrapper.addEventListener("scroll", (function(t) {
                        return e.fireEvent("scroll", t)
                    }))
                }
            }, {
                key: "drawPeaks",
                value: function(e, t, r, n) {
                    this.setWidth(t) || this.clearWave(), this.params.barWidth ? this.drawBars(e, 0, r, n) : this.drawWave(e, 0, r, n)
                }
            }, {
                key: "resetScroll",
                value: function() {
                    null !== this.wrapper && (this.wrapper.scrollLeft = 0)
                }
            }, {
                key: "recenter",
                value: function(e) {
                    var t = this.wrapper.scrollWidth * e;
                    this.recenterOnPosition(t, !0)
                }
            }, {
                key: "recenterOnPosition",
                value: function(e, t) {
                    var r = this.wrapper.scrollLeft,
                        n = ~~(this.wrapper.clientWidth / 2),
                        i = this.wrapper.scrollWidth - this.wrapper.clientWidth,
                        a = e - n,
                        s = a - r;
                    if (0 != i) {
                        if (!t && -n <= s && s < n) {
                            var o = this.params.autoCenterRate;
                            o /= n, o *= i, a = r + (s = Math.max(-o, Math.min(o, s)))
                        }(a = Math.max(0, Math.min(i, a))) != r && (this.wrapper.scrollLeft = a)
                    }
                }
            }, {
                key: "getScrollX",
                value: function() {
                    var e = 0;
                    if (this.wrapper) {
                        var t = this.params.pixelRatio;
                        if (e = Math.round(this.wrapper.scrollLeft * t), this.params.scrollParent) {
                            var r = ~~(this.wrapper.scrollWidth * t - this.getWidth());
                            e = Math.min(r, Math.max(0, e))
                        }
                    }
                    return e
                }
            }, {
                key: "getWidth",
                value: function() {
                    return Math.round(this.container.clientWidth * this.params.pixelRatio)
                }
            }, {
                key: "setWidth",
                value: function(e) {
                    return this.width != e && (this.width = e, this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, {
                        width: ""
                    }) : this.style(this.wrapper, {
                        width: ~~(this.width / this.params.pixelRatio) + "px"
                    }), this.updateSize(), !0)
                }
            }, {
                key: "setHeight",
                value: function(e) {
                    return e != this.height && (this.height = e, this.style(this.wrapper, {
                        height: ~~(this.height / this.params.pixelRatio) + "px"
                    }), this.updateSize(), !0)
                }
            }, {
                key: "progress",
                value: function(e) {
                    var t = 1 / this.params.pixelRatio,
                        r = Math.round(e * this.width) * t;
                    if (r < this.lastPos || r - this.lastPos >= t) {
                        if (this.lastPos = r, this.params.scrollParent && this.params.autoCenter) {
                            var n = ~~(this.wrapper.scrollWidth * e);
                            this.recenterOnPosition(n, this.params.autoCenterImmediately)
                        }
                        this.updateProgress(r)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper), this.wrapper = null)
                }
            }, {
                key: "updateCursor",
                value: function() {}
            }, {
                key: "updateSize",
                value: function() {}
            }, {
                key: "drawBars",
                value: function(e, t, r, n) {}
            }, {
                key: "drawWave",
                value: function(e, t, r, n) {}
            }, {
                key: "clearWave",
                value: function() {}
            }, {
                key: "updateProgress",
                value: function(e) {}
            }]) && s(r.prototype, i), a && s(r, a), t
        }(n.Observer);
        t.default = c, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = a(r(3)),
            i = a(r(2));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.wave = null, this.waveCtx = null, this.progress = null, this.progressCtx = null, this.start = 0, this.end = 1, this.id = (0, i.default)(this.constructor.name.toLowerCase() + "_")
            }
            var t, r, a;
            return t = e, (r = [{
                key: "initWave",
                value: function(e) {
                    this.wave = e, this.waveCtx = this.wave.getContext("2d")
                }
            }, {
                key: "initProgress",
                value: function(e) {
                    this.progress = e, this.progressCtx = this.progress.getContext("2d")
                }
            }, {
                key: "updateDimensions",
                value: function(e, t, r, i) {
                    this.start = this.wave.offsetLeft / t || 0, this.end = this.start + e / t, this.wave.width = r, this.wave.height = i;
                    var a = {
                        width: e + "px"
                    };
                    (0, n.default)(this.wave, a), this.hasProgressCanvas && (this.progress.width = r, this.progress.height = i, (0, n.default)(this.progress, a))
                }
            }, {
                key: "clearWave",
                value: function() {
                    this.waveCtx.clearRect(0, 0, this.waveCtx.canvas.width, this.waveCtx.canvas.height), this.hasProgressCanvas && this.progressCtx.clearRect(0, 0, this.progressCtx.canvas.width, this.progressCtx.canvas.height)
                }
            }, {
                key: "setFillStyles",
                value: function(e, t) {
                    this.waveCtx.fillStyle = e, this.hasProgressCanvas && (this.progressCtx.fillStyle = t)
                }
            }, {
                key: "fillRects",
                value: function(e, t, r, n) {
                    this.fillRectToContext(this.waveCtx, e, t, r, n), this.hasProgressCanvas && this.fillRectToContext(this.progressCtx, e, t, r, n)
                }
            }, {
                key: "fillRectToContext",
                value: function(e, t, r, n, i) {
                    e && e.fillRect(t, r, n, i)
                }
            }, {
                key: "drawLines",
                value: function(e, t, r, n, i, a) {
                    this.drawLineToContext(this.waveCtx, e, t, r, n, i, a), this.hasProgressCanvas && this.drawLineToContext(this.progressCtx, e, t, r, n, i, a)
                }
            }, {
                key: "drawLineToContext",
                value: function(e, t, r, n, i, a, s) {
                    if (e) {
                        var o, u, l, c = t.length / 2,
                            f = Math.round(c * this.start),
                            h = f,
                            d = Math.round(c * this.end) + 1,
                            p = this.wave.width / (d - h - 1),
                            v = n + i,
                            y = r / n;
                        for (e.beginPath(), e.moveTo((h - f) * p, v), e.lineTo((h - f) * p, v - Math.round((t[2 * h] || 0) / y)), o = h; o < d; o++) u = t[2 * o] || 0, l = Math.round(u / y), e.lineTo((o - f) * p + this.halfPixel, v - l);
                        for (var m = d - 1; m >= h; m--) u = t[2 * m + 1] || 0, l = Math.round(u / y), e.lineTo((m - f) * p + this.halfPixel, v - l);
                        e.lineTo((h - f) * p, v - Math.round((t[2 * h + 1] || 0) / y)), e.closePath(), e.fill()
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.waveCtx = null, this.wave = null, this.progressCtx = null, this.progress = null
                }
            }, {
                key: "getImage",
                value: function(e, t, r) {
                    var n = this;
                    return "blob" === r ? new Promise((function(r) {
                        n.wave.toBlob(r, e, t)
                    })) : "dataURL" === r ? this.wave.toDataURL(e, t) : void 0
                }
            }]) && s(t.prototype, r), a && s(t, a), e
        }();
        t.default = o, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n, i = (n = r(5)) && n.__esModule ? n : {
                default: n
            },
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var r = {};
                if (null != e) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                        }
                }
                r.default = e, t && t.set(e, r);
                return r
            }(r(0));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function c(e, t, r) {
            return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)););
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(r) : i.value
                }
            })(e, t, r || e)
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var d = function(e) {
            function t(e) {
                var r;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (r = l(this, f(t).call(this, e))).params = e, r.media = {
                    currentTime: 0,
                    duration: 0,
                    paused: !0,
                    playbackRate: 1,
                    play: function() {},
                    pause: function() {},
                    volume: 0
                }, r.mediaType = e.mediaType.toLowerCase(), r.elementPosition = e.elementPosition, r.peaks = null, r.playbackRate = 1, r.volume = 1, r.isMuted = !1, r.buffer = null, r.onPlayEnd = null, r
            }
            var r, n, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(t, e), r = t, (n = [{
                key: "init",
                value: function() {
                    this.setPlaybackRate(this.params.audioRate), this.createTimer()
                }
            }, {
                key: "createTimer",
                value: function() {
                    var e = this;
                    this.on("play", (function t() {
                        e.isPaused() || (e.fireEvent("audioprocess", e.getCurrentTime()), a.frame(t)())
                    })), this.on("pause", (function() {
                        e.fireEvent("audioprocess", e.getCurrentTime())
                    }))
                }
            }, {
                key: "load",
                value: function(e, t, r, n) {
                    var i = document.createElement(this.mediaType);
                    i.controls = this.params.mediaControls, i.autoplay = this.params.autoplay || !1, i.preload = null == n ? "auto" : n, i.src = e, i.style.width = "100%";
                    var a = t.querySelector(this.mediaType);
                    a && t.removeChild(a), t.appendChild(i), this._load(i, r)
                }
            }, {
                key: "loadElt",
                value: function(e, t) {
                    e.controls = this.params.mediaControls, e.autoplay = this.params.autoplay || !1, this._load(e, t)
                }
            }, {
                key: "_load",
                value: function(e, t) {
                    var r = this;
                    "function" == typeof e.load && e.load(), e.addEventListener("error", (function() {
                        r.fireEvent("error", "Error loading media element")
                    })), e.addEventListener("canplay", (function() {
                        r.fireEvent("canplay")
                    })), e.addEventListener("ended", (function() {
                        r.fireEvent("finish")
                    })), e.addEventListener("play", (function() {
                        r.fireEvent("play")
                    })), e.addEventListener("pause", (function() {
                        r.fireEvent("pause")
                    })), e.addEventListener("seeked", (function(e) {
                        r.fireEvent("seek")
                    })), e.addEventListener("volumechange", (function(t) {
                        r.isMuted = e.muted, r.isMuted ? r.volume = 0 : r.volume = e.volume, r.fireEvent("volume")
                    })), this.media = e, this.peaks = t, this.onPlayEnd = null, this.buffer = null, this.isMuted = e.muted, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume)
                }
            }, {
                key: "isPaused",
                value: function() {
                    return !this.media || this.media.paused
                }
            }, {
                key: "getDuration",
                value: function() {
                    if (this.explicitDuration) return this.explicitDuration;
                    var e = (this.buffer || this.media).duration;
                    return e >= 1 / 0 && (e = this.media.seekable.end(0)), e
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.media && this.media.currentTime
                }
            }, {
                key: "getPlayedPercents",
                value: function() {
                    return this.getCurrentTime() / this.getDuration() || 0
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.playbackRate || this.media.playbackRate
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    this.playbackRate = e || 1, this.media.playbackRate = this.playbackRate
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    null != e && (this.media.currentTime = e), this.clearPlayEnd()
                }
            }, {
                key: "play",
                value: function(e, t) {
                    this.seekTo(e);
                    var r = this.media.play();
                    return t && this.setPlayEnd(t), r
                }
            }, {
                key: "pause",
                value: function() {
                    var e;
                    return this.media && (e = this.media.pause()), this.clearPlayEnd(), e
                }
            }, {
                key: "setPlayEnd",
                value: function(e) {
                    var t = this;
                    this._onPlayEnd = function(r) {
                        r >= e && (t.pause(), t.seekTo(e))
                    }, this.on("audioprocess", this._onPlayEnd)
                }
            }, {
                key: "clearPlayEnd",
                value: function() {
                    this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null)
                }
            }, {
                key: "getPeaks",
                value: function(e, r, n) {
                    return this.buffer ? c(f(t.prototype), "getPeaks", this).call(this, e, r, n) : this.peaks || []
                }
            }, {
                key: "setSinkId",
                value: function(e) {
                    return e ? this.media.setSinkId ? this.media.setSinkId(e) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + e))
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.volume
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.volume = e, this.media.volume !== this.volume && (this.media.volume = this.volume)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null
                }
            }]) && u(r.prototype, n), i && u(r, i), t
        }(i.default);
        t.default = d, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.clearPeakCache()
            }
            var t, r, i;
            return t = e, (r = [{
                key: "clearPeakCache",
                value: function() {
                    this.peakCacheRanges = [], this.peakCacheLength = -1
                }
            }, {
                key: "addRangeToPeakCache",
                value: function(e, t, r) {
                    e != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = e);
                    for (var n = [], i = 0; i < this.peakCacheRanges.length && this.peakCacheRanges[i] < t;) i++;
                    for (i % 2 == 0 && n.push(t); i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= r;) n.push(this.peakCacheRanges[i]), i++;
                    i % 2 == 0 && n.push(r), n = n.filter((function(e, t, r) {
                        return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                    })), this.peakCacheRanges = this.peakCacheRanges.concat(n), this.peakCacheRanges = this.peakCacheRanges.sort((function(e, t) {
                        return e - t
                    })).filter((function(e, t, r) {
                        return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                    }));
                    var a = [];
                    for (i = 0; i < n.length; i += 2) a.push([n[i], n[i + 1]]);
                    return a
                }
            }, {
                key: "getCacheRanges",
                value: function() {
                    var e, t = [];
                    for (e = 0; e < this.peakCacheRanges.length; e += 2) t.push([this.peakCacheRanges[e], this.peakCacheRanges[e + 1]]);
                    return t
                }
            }]) && n(t.prototype, r), i && n(t, i), e
        }();
        t.default = i, e.exports = t.default
    }])
}));
//# sourceMappingURL=wavesurfer.min.js.map