var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Lobby;
(function (Lobby) {
    var LobbyView = (function (_super) {
        __extends(LobbyView, _super);
        function LobbyView() {
            var _this = _super.call(this) || this;
            _this.skinName = new LobbySkin();
            return _this;
        }
        Object.defineProperty(LobbyView, "Instance", {
            get: function () {
                if (this.m_instance == null) {
                    this.m_instance = new LobbyView();
                }
                return this.m_instance;
            },
            enumerable: true,
            configurable: true
        });
        return LobbyView;
    }(eui.Component));
    Lobby.LobbyView = LobbyView;
    __reflect(LobbyView.prototype, "Lobby.LobbyView");
})(Lobby || (Lobby = {}));
//# sourceMappingURL=LobbyView.js.map