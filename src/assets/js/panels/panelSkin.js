'use strict';

import { changePanel } from '../utils.js';

class Skin {
    static id = "panelSkin";
    async init(config, news) {
        this.config = config
        this.news = news
        this.initBtn();
    }

initBtn() {
    document.querySelector('.back-btn').addEventListener('click', () => {
        changePanel('home');
    });

}
}

export default Skin;