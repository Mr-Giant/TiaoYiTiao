module Lobby {
    export class LobbyView extends eui.Component {
        private static m_instance: LobbyView;
        public static get Instance() {
            if (this.m_instance == null) {
                this.m_instance = new LobbyView();
            }
            return this.m_instance;
        }
        
        constructor() {
            super();
            this.skinName = new LobbySkin();
        }
    }
}