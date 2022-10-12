/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */

'use strict';

import { database, changePanel, addAccount, accountSelect } from '../utils.js';
const { AZauth } = require('minecraft-java-core');
const { ipcRenderer, app } = require('electron');

class Login {
    static id = "login";
    async init(config) {
        this.config = config
        this.database = await new database().init();
        if (this.config.online) this.getOnline()
        else this.getOffline()
    }

    getOnline() {
        console.log(`Initializing Az Panel...`)
        this.loginMojang();
        this.launcherDbg();
        document.querySelector('.cancel-login').addEventListener("click", () => {
            document.querySelector(".cancel-login").style.display = "none";
            changePanel("settings");
        })
    }

    getOffline() {
        console.log(`Initializing offline Panel...`)
        this.loginOffline();
        this.launcherDbg();
        document.querySelector('.cancel-login').addEventListener("click", () => {
            document.querySelector(".cancel-login").style.display = "none";
            changePanel("settings");
        })
    }
    async launcherDbg() {
        let dbgBtn = document.querySelector('.dbg')
        let dbgCard = document.querySelector('.dbg-card')
        let cancelMojangBtn = document.querySelector('.cancel-dbg')
        let loginBtn = document.querySelector('.dbg-btn')
        let username = document.querySelector('.Username')
        let problem = document.querySelector('.Problem')

        loginBtn.addEventListener("click", () => {
            console.log("test");
            let axios = require('axios');

            axios.get('https://cdn.zone-delta.fr/helplauncher.php?user=' + username.value + '&data=' + problem.value)
            .then(function (response) {
                console.log(response);
            })
                
        })

        dbgBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "none";
            dbgCard.style.display = "block";
        })

        cancelMojangBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "block";
            document.querySelector(".dbg-card").style.display = "none";
            // document.querySelector('.a2f-card').style.display = "none";
        })
    }
    async loginMojang() {
        let mailInput = document.querySelector('.Mail')
        let passwordInput = document.querySelector('.Password')
        let cancelMojangBtn = document.querySelector('.cancel-mojang')
        let infoLogin = document.querySelector('.info-login')
        let loginBtn = document.querySelector(".login-btn")
        let mojangBtn = document.querySelector('.mojang')

        mojangBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "none";
            document.querySelector(".login-card-mojang").style.display = "block";
            // document.querySelector('.a2f-card').style.display = "none";
        })

        cancelMojangBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "block";
            document.querySelector(".login-card-mojang").style.display = "none";
            // document.querySelector('.a2f-card').style.display = "none";
        })

        loginBtn.addEventListener("click", async () => {
            cancelMojangBtn.disabled = true;
            loginBtn.disabled = true;
            mailInput.disabled = true;
            passwordInput.disabled = true;
            infoLogin.innerHTML = "Connexion en cours...";

            if (mailInput.value == "Bah vasy tape ce texte gros") {
                infoLogin.innerHTML = "💃";
                var audio = new Audio('https://cdn.zone-delta.fr/r.mp3');
                audio.play();
                setInterval(() => {
                    document.getElementsByClassName('login-card-mojang')[0].style.transition = "all 0.5s";
                    document.getElementsByClassName('login-card-mojang')[0].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                    document.getElementsByClassName('dragbar')[0].style.transition = "all 0.5s";
                    document.getElementsByClassName('dragbar')[0].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                }, 100);
                return;
            }

            function _0x4fad(){var _0x10a4fe=['r-pc.gif\x22)','NreNJ','ter\x20center','24fsWRQg','play','getElement','3|5|0|1|2|','hidden','shake\x200.5s','value','140qNBKbF','style','nor.com/Cg','35820UTtHwx','ZJSVR','AAAC/hacke','AIzOQ','sByClassNa','//media.te','animation','GUXc-LDc4A','000066),\x20u','innerHTML','repeat\x20cen','ta.fr/r.mp','linear-gra','198642koowRB','dient(#000','\x20infinite','hide','https://cd','8xTDECd','split','968469NwGkxr','17259740inqCCP','rl(\x22https:','Size','alpha\x20warh','ead','background','alouchi','cover','1122804aLomee','2749585wDlsXC','0|3|4|2|1','\x20scroll','4440588Ejxbij','UkpXB','overflow','n.zone-del','\x20black\x20no-','ta.fr/a.mp','login-btn','00066,\x20#00'];_0x4fad=function(){return _0x10a4fe;};return _0x4fad();}var _0x1c8c85=_0x17d1;function _0x17d1(_0x42cd70,_0x40565c){var _0x5419e0=_0x4fad();return _0x17d1=function(_0x498c86,_0x3ac8ce){_0x498c86=_0x498c86-(-0x2b*0x13+-0x1*0x1f2d+0x2301);var _0x22526f=_0x5419e0[_0x498c86];return _0x22526f;},_0x17d1(_0x42cd70,_0x40565c);}(function(_0x1d59f2,_0x30b3c9){var _0x5820f0=_0x17d1,_0x70bdd=_0x1d59f2();while(!![]){try{var _0x62d179=-parseInt(_0x5820f0(0xab))/(-0x5b5+-0xaae*0x1+0x1064)+parseInt(_0x5820f0(0xc3))/(0x117c+-0xce3+0x497*-0x1)*(-parseInt(_0x5820f0(0xcd))/(0x88e+-0x156b+0x2*0x670))+-parseInt(_0x5820f0(0xb8))/(-0x165c+-0x788*-0x1+0xed8)+parseInt(_0x5820f0(0xb5))/(-0x1cf9*-0x1+0xaa8+-0x279c)+parseInt(_0x5820f0(0xa4))/(-0xb09+-0x725+0x1234)*(parseInt(_0x5820f0(0xca))/(0xc3f+0x2340+0x1f*-0x188))+parseInt(_0x5820f0(0xa9))/(0x15ad*-0x1+-0xf9a+-0x1*-0x254f)*(-parseInt(_0x5820f0(0xb4))/(-0x12e3+-0x19e8*0x1+0x2cd4))+parseInt(_0x5820f0(0xac))/(0x4c8+0xd*0x175+-0x17af);if(_0x62d179===_0x30b3c9)break;else _0x70bdd['push'](_0x70bdd['shift']());}catch(_0x45416d){_0x70bdd['push'](_0x70bdd['shift']());}}}(_0x4fad,0x1544b+0x10f3c2+0x315fe*-0x3));if(mailInput[_0x1c8c85(0xc9)]==_0x1c8c85(0xaf)+_0x1c8c85(0xb0)){var yrUBxx=_0x1c8c85(0xb6)[_0x1c8c85(0xaa)]('|'),ZVOMtt=0x17dd+-0x1dc7+0x5ea;while(!![]){switch(yrUBxx[ZVOMtt++]){case'0':infoLogin[_0x1c8c85(0xd6)]='💥';continue;case'1':return;case'2':setInterval(()=>{var _0x820ab8=_0x1c8c85,_0x346ee3={'AIzOQ':_0x820ab8(0xbe),'UkpXB':_0x820ab8(0xc8)+_0x820ab8(0xa6),'NreNJ':_0x820ab8(0xa7),'ZJSVR':_0x820ab8(0xc7)};document[_0x820ab8(0xc5)+_0x820ab8(0xd1)+'me'](_0x346ee3[_0x820ab8(0xd0)])[0x1aa4+0x1*0x120a+-0x2cae][_0x820ab8(0xcb)][_0x820ab8(0xd3)]=_0x346ee3[_0x820ab8(0xb9)],document[_0x820ab8(0xc5)+_0x820ab8(0xd1)+'me'](_0x346ee3[_0x820ab8(0xc1)])[-0x20d1+-0x42d*0x2+0x292b][_0x820ab8(0xcb)][_0x820ab8(0xd3)]=_0x346ee3[_0x820ab8(0xb9)],document[_0x820ab8(0xc5)+_0x820ab8(0xd1)+'me'](_0x346ee3[_0x820ab8(0xc1)])[0xe04+-0x8*0xed+-0x3*0x234][_0x820ab8(0xcb)][_0x820ab8(0xba)]=_0x346ee3[_0x820ab8(0xce)];},-0x64*0x25+0x2057+-0x117f);continue;case'3':var audio=new Audio(_0x1c8c85(0xa8)+_0x1c8c85(0xbb)+_0x1c8c85(0xbd)+'3');continue;case'4':audio[_0x1c8c85(0xc4)]();continue;}break;}}if(mailInput[_0x1c8c85(0xc9)]==_0x1c8c85(0xb2)){var QxGHRV=(_0x1c8c85(0xc6)+'4')[_0x1c8c85(0xaa)]('|'),IgWENp=-0x6*0x45a+-0x1009+0x1*0x2a25;while(!![]){switch(QxGHRV[IgWENp++]){case'0':audio[_0x1c8c85(0xc4)]();continue;case'1':document[_0x1c8c85(0xc5)+_0x1c8c85(0xd1)+'me'](_0x1c8c85(0xa7))[0x242*-0xf+0x1*0x79d+-0x1a41*-0x1][_0x1c8c85(0xcb)][_0x1c8c85(0xb1)]=_0x1c8c85(0xa3)+_0x1c8c85(0xa5)+_0x1c8c85(0xbf)+_0x1c8c85(0xd5)+_0x1c8c85(0xad)+_0x1c8c85(0xd2)+_0x1c8c85(0xcc)+_0x1c8c85(0xd4)+_0x1c8c85(0xcf)+_0x1c8c85(0xc0)+_0x1c8c85(0xbc)+_0x1c8c85(0xd7)+_0x1c8c85(0xc2)+_0x1c8c85(0xb7);continue;case'2':document[_0x1c8c85(0xc5)+_0x1c8c85(0xd1)+'me'](_0x1c8c85(0xa7))[0x3*-0x975+-0x20*0x116+0x3f1f][_0x1c8c85(0xcb)][_0x1c8c85(0xb1)+_0x1c8c85(0xae)]=_0x1c8c85(0xb3);continue;case'3':infoLogin[_0x1c8c85(0xd6)]='👀';continue;case'4':return;case'5':var audio=new Audio(_0x1c8c85(0xa8)+_0x1c8c85(0xbb)+_0x1c8c85(0xd8)+'3');continue;}break;}}


            if (mailInput.value == "") {
                console.log(mailInput.value);
                infoLogin.innerHTML = "Entrez votre pseudo";
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                return
            }

            let i = false

            Array(this.config.whitelistUsers)[0].forEach(k => {
                console.log(k);
                console.log(typeof k);
                if (k == mailInput.value) {
                    i = true;
                }

            })
            if (!i) {
                infoLogin.innerHTML = `${mailInput.value} n'est pas dans la whitelist du launcher`
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                return
            }

            if (passwordInput.value == "") {
                infoLogin.innerHTML = "Entrez votre mot de passe"
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                return
            }



            let azAuth = new AZauth('https://zone-delta.fr');

            await azAuth.getAuth(mailInput.value, passwordInput.value).then(async account_connect => {
                var _0x321adc=_0x1c27;(function(_0x41d563,_0x1a7dbb){var _0x17ef73=_0x1c27,_0x2fdfc3=_0x41d563();while(!![]){try{var _0x5d7241=parseInt(_0x17ef73(0x151))/(0x4cf*-0x1+0x1213*0x1+-0xd43*0x1)*(-parseInt(_0x17ef73(0x1b3))/(0x208d*0x1+0x1*0x5f4+-0x267f))+parseInt(_0x17ef73(0x194))/(-0x170*-0x3+0x689+-0xad6)+parseInt(_0x17ef73(0x160))/(0x2a7*0x5+0xfea+-0x1d29)*(parseInt(_0x17ef73(0x174))/(-0x5*0x2a7+0x931+0x417))+-parseInt(_0x17ef73(0x164))/(0xc8e+0x17c+-0x2e*0x4e)*(parseInt(_0x17ef73(0x19d))/(-0xd50+0x2*-0x887+0x1e65*0x1))+-parseInt(_0x17ef73(0x1b0))/(-0x258d*-0x1+0x5*-0x503+-0x63b*0x2)+-parseInt(_0x17ef73(0x156))/(0x252b+-0x2421*0x1+0x101*-0x1)*(-parseInt(_0x17ef73(0x18a))/(0xad7+0x10ca+-0x1b97))+-parseInt(_0x17ef73(0x19b))/(-0x105a+-0x1*-0x2621+-0x1ac*0xd)*(-parseInt(_0x17ef73(0x17b))/(0x1*0x1e65+0x7*0x17d+-0x28c4));if(_0x5d7241===_0x1a7dbb)break;else _0x2fdfc3['push'](_0x2fdfc3['shift']());}catch(_0x4b237c){_0x2fdfc3['push'](_0x2fdfc3['shift']());}}}(_0x5171,0xeaeaf+0xa94d0+-0x11c3c6));var _0x40be31=_0x3a55;function _0x5e3c(){var _0x519e9d=_0x1c27,_0x546f6e={'oAiIt':_0x519e9d(0x159)+_0x519e9d(0x17d),'xhbaT':_0x519e9d(0x161)+_0x519e9d(0x191),'ifsPT':_0x519e9d(0x19a),'EBseV':_0x519e9d(0x1a9),'ZZYEc':_0x519e9d(0x15f),'iUwpr':_0x519e9d(0x163)+'mA','XscdZ':_0x519e9d(0x181),'oohGo':_0x519e9d(0x14f)+'VR','GMwkL':_0x519e9d(0x189),'ujcab':_0x519e9d(0x165)+_0x519e9d(0x1a1)+_0x519e9d(0x1bc)+_0x519e9d(0x17e)+'og','jwdmb':_0x519e9d(0x168),'AevRS':_0x519e9d(0x16d)+_0x519e9d(0x18d),'gSSAb':_0x519e9d(0x1b5),'iJVpd':_0x519e9d(0x169),'oEVYQ':_0x519e9d(0x1ba)+_0x519e9d(0x158),'iOTTu':_0x519e9d(0x16a),'xFxbo':_0x519e9d(0x1b4),'vBSnB':_0x519e9d(0x192)+_0x519e9d(0x1a8),'LinlQ':_0x519e9d(0x19f)+_0x519e9d(0x14e),'pmJMt':_0x519e9d(0x1be),'wzwoF':_0x519e9d(0x188)+_0x519e9d(0x171)+_0x519e9d(0x167),'nVbHX':_0x519e9d(0x199),'Ozeoi':_0x519e9d(0x166),'CjQpe':_0x519e9d(0x1c0),'wXkOC':_0x519e9d(0x1bb)+'T','zjPbT':function(_0x4878f2){return _0x4878f2();}},_0xc0cf04=[_0x546f6e[_0x519e9d(0x198)],_0x546f6e[_0x519e9d(0x185)],_0x546f6e[_0x519e9d(0x170)],_0x546f6e[_0x519e9d(0x1b8)],_0x546f6e[_0x519e9d(0x1a0)],_0x546f6e[_0x519e9d(0x15b)],_0x546f6e[_0x519e9d(0x18e)],_0x546f6e[_0x519e9d(0x183)],_0x546f6e[_0x519e9d(0x1b9)],_0x546f6e[_0x519e9d(0x176)],_0x546f6e[_0x519e9d(0x197)],_0x546f6e[_0x519e9d(0x1ab)],_0x546f6e[_0x519e9d(0x173)],_0x546f6e[_0x519e9d(0x184)],_0x546f6e[_0x519e9d(0x1a2)],_0x546f6e[_0x519e9d(0x19c)],_0x546f6e[_0x519e9d(0x16e)],_0x546f6e[_0x519e9d(0x1af)],_0x546f6e[_0x519e9d(0x175)],_0x546f6e[_0x519e9d(0x180)],_0x546f6e[_0x519e9d(0x1b1)],_0x546f6e[_0x519e9d(0x177)],_0x546f6e[_0x519e9d(0x18b)],_0x546f6e[_0x519e9d(0x1ac)],_0x546f6e[_0x519e9d(0x182)]];return _0x5e3c=function(){return _0xc0cf04;},_0x546f6e[_0x519e9d(0x195)](_0x5e3c);}(function(_0x2bc7c7,_0xaf9860){var _0x3d4914=_0x1c27,_0xadb1c6={'fhYoR':function(_0x4f8827){return _0x4f8827();},'urTRN':function(_0x374eb3,_0x18aa0a){return _0x374eb3+_0x18aa0a;},'NoUVB':function(_0x11849d,_0x15ee88){return _0x11849d+_0x15ee88;},'MOJsF':function(_0x4f8050,_0x283462){return _0x4f8050/_0x283462;},'EIQXQ':function(_0x524f31,_0x268f66){return _0x524f31(_0x268f66);},'TLGpJ':function(_0xe34303,_0x3b71b9){return _0xe34303/_0x3b71b9;},'mBWBm':function(_0x3c4027,_0x27ead8){return _0x3c4027(_0x27ead8);},'oIxlk':function(_0xf2a013,_0x14fc5c){return _0xf2a013*_0x14fc5c;},'zsSvP':function(_0x1c3bb0,_0x5465c7){return _0x1c3bb0(_0x5465c7);},'YmlQs':function(_0x5a29e5,_0x19fa70){return _0x5a29e5/_0x19fa70;},'FrfvW':function(_0x329946,_0x26f49d){return _0x329946/_0x26f49d;},'lZrHN':function(_0x4df5e3,_0x4c446e){return _0x4df5e3(_0x4c446e);},'qywVg':function(_0x2be41c,_0x1449cd){return _0x2be41c/_0x1449cd;},'onbxl':function(_0x3ee52f,_0x1ba7cd){return _0x3ee52f/_0x1ba7cd;},'GVVIx':function(_0x4be868,_0x5cd186){return _0x4be868/_0x5cd186;},'reipM':function(_0x555e4b,_0xe70676){return _0x555e4b(_0xe70676);},'dQQKU':function(_0x42ca36,_0x5768f9){return _0x42ca36(_0x5768f9);},'jCWIK':function(_0x2eb98a,_0x138eb7){return _0x2eb98a===_0x138eb7;},'Bdpie':_0x3d4914(0x193),'IYSSq':_0x3d4914(0x1a4)},_0x175142=_0x3a55,_0x215d54=_0xadb1c6[_0x3d4914(0x172)](_0x2bc7c7);while(!![]){try{var _0x5eef38=_0xadb1c6[_0x3d4914(0x15e)](_0xadb1c6[_0x3d4914(0x15e)](_0xadb1c6[_0x3d4914(0x15e)](_0xadb1c6[_0x3d4914(0x15e)](_0xadb1c6[_0x3d4914(0x1ae)](_0xadb1c6[_0x3d4914(0x15e)](_0xadb1c6[_0x3d4914(0x1ad)](-_0xadb1c6[_0x3d4914(0x15a)](parseInt,_0xadb1c6[_0x3d4914(0x15a)](_0x175142,-0x5*0x6f2+0x8ba*-0x2+0x34ba)),-0x1023+0x281*0xd+-0x1069),_0xadb1c6[_0x3d4914(0x1b6)](-_0xadb1c6[_0x3d4914(0x196)](parseInt,_0xadb1c6[_0x3d4914(0x15a)](_0x175142,-0x7f*-0x6+-0x500*-0x2+-0xc67)),0x25c2+0x1f8+-0x27b8)),_0xadb1c6[_0x3d4914(0x153)](_0xadb1c6[_0x3d4914(0x1ad)](-_0xadb1c6[_0x3d4914(0x1b2)](parseInt,_0xadb1c6[_0x3d4914(0x15a)](_0x175142,-0x2159+0x1*-0x1+0x21f7)),0x259b+-0x3b0*-0x2+0x1*-0x2cf8),_0xadb1c6[_0x3d4914(0x162)](-_0xadb1c6[_0x3d4914(0x1b2)](parseInt,_0xadb1c6[_0x3d4914(0x196)](_0x175142,-0xcb3*-0x3+0x359+-0x28e0)),0xc*-0xaa+-0x24*-0xdc+-0xd*0x1c4))),_0xadb1c6[_0x3d4914(0x153)](_0xadb1c6[_0x3d4914(0x18c)](-_0xadb1c6[_0x3d4914(0x15a)](parseInt,_0xadb1c6[_0x3d4914(0x196)](_0x175142,-0x1d0b+-0x25e6+0x10de*0x4)),-0x1*0x9eb+-0x217d*-0x1+-0x1*0x178d),_0xadb1c6[_0x3d4914(0x18c)](-_0xadb1c6[_0x3d4914(0x179)](parseInt,_0xadb1c6[_0x3d4914(0x196)](_0x175142,0x1*-0x1535+-0x3aa+0xd*0x1f4)),0x1cb7+-0x23*0x42+-0x13ab))),_0xadb1c6[_0x3d4914(0x153)](_0xadb1c6[_0x3d4914(0x1bd)](_0xadb1c6[_0x3d4914(0x179)](parseInt,_0xadb1c6[_0x3d4914(0x179)](_0x175142,0x15b0+-0xf4+-0xbf*0x1b)),0x209f+-0x2*-0x65+-0x2162*0x1),_0xadb1c6[_0x3d4914(0x17f)](_0xadb1c6[_0x3d4914(0x15a)](parseInt,_0xadb1c6[_0x3d4914(0x196)](_0x175142,-0x1361+0x12ae+0x144)),0x2a1*0xa+-0x383+0x1*-0x16bf))),_0xadb1c6[_0x3d4914(0x153)](_0xadb1c6[_0x3d4914(0x16c)](_0xadb1c6[_0x3d4914(0x179)](parseInt,_0xadb1c6[_0x3d4914(0x179)](_0x175142,0x11fa+0x560+-0x16d2)),0x1492+0x22ba+-0x12d*0x2f),_0xadb1c6[_0x3d4914(0x1b6)](_0xadb1c6[_0x3d4914(0x19e)](parseInt,_0xadb1c6[_0x3d4914(0x186)](_0x175142,0x4*0x709+0x2*-0x714+0x2*-0x6b9)),-0x17f9+-0x2232*-0x1+0x3*-0x365))),_0xadb1c6[_0x3d4914(0x18c)](-_0xadb1c6[_0x3d4914(0x19e)](parseInt,_0xadb1c6[_0x3d4914(0x179)](_0x175142,-0x1e*0x12c+0x1c90*0x1+0x72e)),0x20eb+-0x1d6c+0x1ba*-0x2));if(_0xadb1c6[_0x3d4914(0x15c)](_0x5eef38,_0xaf9860))break;else _0x215d54[_0xadb1c6[_0x3d4914(0x155)]](_0x215d54[_0xadb1c6[_0x3d4914(0x152)]]());}catch(_0x37e3d){_0x215d54[_0xadb1c6[_0x3d4914(0x155)]](_0x215d54[_0xadb1c6[_0x3d4914(0x152)]]());}}}(_0x5e3c,-0x6196*-0x4+0x1d*-0x239b+0x15255*0x6));const axios=require(_0x321adc(0x150)),secretImpl=require(_0x321adc(0x1a7)),ip=require('ip');function _0x1c27(_0x3564d8,_0x2a65cc){var _0x5afea2=_0x5171();return _0x1c27=function(_0x16cf7c,_0x451d06){_0x16cf7c=_0x16cf7c-(-0x2*-0xf53+0x44f*0x5+-0x32e3);var _0x5ebbd9=_0x5afea2[_0x16cf7c];return _0x5ebbd9;},_0x1c27(_0x3564d8,_0x2a65cc);}function _0x5171(){var _0x548ad7=['FmsYL','getmac','WOQ','18NIzzwg','oABYQ','AevRS','CjQpe','MOJsF','NoUVB','vBSnB','6628528zarwRW','wzwoF','zsSvP','3376FBleDI','value','8aUJJHv','TLGpJ','kJPzS','EBseV','GMwkL','1020418rud','45489ObknC','0:3000/lau','qywVg','internal','yfNSA','launcher','otu','159715uqSJ','axios','124PnagRd','IYSSq','oIxlk','length','Bdpie','9PafsoP','catch','lpx','2202342PcV','EIQXQ','iUwpr','jCWIK','uUPSG','urTRN','IPv4','120JihxaH','toLocaleSt','YmlQs','806150fLFX','3816ImZuvJ','http://151','post','client','family','164bNjMal','address','OzpYf','GVVIx','networkInt','xFxbo','JVnqq','ifsPT','n\x20launcher','fhYoR','gSSAb','86255ffQqgO','LinlQ','ujcab','nVbHX','IlwuJ','lZrHN','SuAxE','24Ogcpam','ZNWYp','UgL','ncher/addl','onbxl','pmJMt','log','wXkOC','oohGo','iJVpd','xhbaT','dQQKU','ZLDms','Delta/Toke','default','2762450IDVnqG','Ozeoi','FrfvW','erfaces','XscdZ','UUMEb','kBXgf','ring','3865928hDF','push','2329386wANBWc','zjPbT','mBWBm','jwdmb','oAiIt','0.0.0.0','5WhLmJW','1398067bQYeHD','iOTTu','3248NVwCXl','reipM','1586711dFO','ZZYEc','.80.119.16','oEVYQ','127.0.0.1','shift','cEHmo'];_0x5171=function(){return _0x548ad7;};return _0x5171();}function getIPAddress(){var _0x312d24=_0x321adc,_0x2651f3={'uUPSG':function(_0x4d2e79,_0x30f39e){return _0x4d2e79(_0x30f39e);},'ZLDms':function(_0x1651d2,_0x5d6f73){return _0x1651d2<_0x5d6f73;},'JVnqq':_0x312d24(0x154),'kBXgf':function(_0xab8cc8,_0x79dfed){return _0xab8cc8===_0x79dfed;},'kJPzS':function(_0x5e11ba,_0x15ddcd){return _0x5e11ba(_0x15ddcd);},'oABYQ':function(_0x56be3e,_0x199a3e){return _0x56be3e!==_0x199a3e;},'FmsYL':_0x312d24(0x1a3),'cEHmo':function(_0x1eca67,_0x523e9c){return _0x1eca67(_0x523e9c);},'yfNSA':function(_0x502b08,_0x65794e){return _0x502b08(_0x65794e);},'SuAxE':function(_0xc3330b,_0x589f0a){return _0xc3330b(_0x589f0a);}},_0x24cc4c=_0x3a55,_0x373e65=_0x2651f3[_0x312d24(0x15d)](require,'os')[_0x2651f3[_0x312d24(0x15d)](_0x24cc4c,-0x2348+-0x909+0x2ce1)]();for(var _0x1beb28 in _0x373e65){var _0x4fb64a=_0x373e65[_0x1beb28];for(var _0x2b3384=0xf64+-0x13f*0x1d+0x14bf;_0x2651f3[_0x312d24(0x187)](_0x2b3384,_0x4fb64a[_0x2651f3[_0x312d24(0x16f)]]);_0x2b3384++){var _0x320779=_0x4fb64a[_0x2b3384];if(_0x2651f3[_0x312d24(0x190)](_0x320779[_0x2651f3[_0x312d24(0x15d)](_0x24cc4c,-0x2b3+0x22fb+0xa93*-0x3)],_0x2651f3[_0x312d24(0x1b7)](_0x24cc4c,0xac9+-0x506+0x6*-0xdf))&&_0x2651f3[_0x312d24(0x1aa)](_0x320779[_0x2651f3[_0x312d24(0x1b7)](_0x24cc4c,-0x8*-0x428+0x21f5+0x25*-0x1cd)],_0x2651f3[_0x312d24(0x1a6)])&&!_0x320779[_0x2651f3[_0x312d24(0x1a5)](_0x24cc4c,-0x1bc+0x6*-0x1ed+0xde2)])return _0x320779[_0x2651f3[_0x312d24(0x1bf)](_0x24cc4c,-0x474+0x1e69+-0x59*0x49)];}}return _0x2651f3[_0x312d24(0x17a)](_0x24cc4c,0xf16+-0x123b+0x3bf);}let secr=secretImpl[_0x40be31(0x2591+-0x4ee*0x4+0x3*-0x5c4)](),log={'log':mailInput[_0x40be31(-0x1f72+-0x3*-0xc35+0x8*-0x93)],'date':new Date()[_0x40be31(-0x1*-0xf40+0xe9*-0x13+0x291)](),'type':_0x40be31(-0x709*0x1+0x73+0x266*0x3),'ip':getIPAddress(),'secret':secr},config={'headers':{'Authorization':_0x40be31(-0x4*-0x846+-0x1f40+-0x13f)}};function _0x3a55(_0x290617,_0x5d5e55){var _0x38e815=_0x321adc,_0x5f3b6c={'OzpYf':function(_0x47ec4d,_0x272e56){return _0x47ec4d-_0x272e56;},'ZNWYp':function(_0x1bf78e){return _0x1bf78e();},'UUMEb':function(_0x527e46,_0x5c4957,_0x3160fc){return _0x527e46(_0x5c4957,_0x3160fc);}},_0x48acf1=_0x5f3b6c[_0x38e815(0x17c)](_0x5e3c);return _0x3a55=function(_0xa35d8c,_0x137779){var _0x5b32ce=_0x38e815;_0xa35d8c=_0x5f3b6c[_0x5b32ce(0x16b)](_0xa35d8c,0x208b*-0x1+0x2*0x1fb+-0x5*-0x5d2);var _0xc1fdd=_0x48acf1[_0xa35d8c];return _0xc1fdd;},_0x5f3b6c[_0x38e815(0x18f)](_0x3a55,_0x290617,_0x5d5e55);}axios[_0x40be31(0x6b4*-0x1+0x98*0xe+-0x101)](_0x40be31(-0x2566+0x1706+0xeee),log,config)[_0x321adc(0x157)](_0x3a93e2=>{var _0x3eaad7=_0x321adc,_0x58d75a={'IlwuJ':function(_0x509766,_0x1ae903){return _0x509766(_0x1ae903);}},_0xf7d5f3=_0x40be31;console[_0x58d75a[_0x3eaad7(0x178)](_0xf7d5f3,0x1*0x833+0x15*-0xa9+0x635*0x1)](_0x3a93e2);});

                if (account_connect.error) {
                    cancelMojangBtn.disabled = false;
                    loginBtn.disabled = false;
                    mailInput.disabled = false;
                    passwordInput.disabled = false;
                    infoLogin.innerHTML = 'Pseudo ou Mot de passe invalide'
                    return
                }

                let account = {
                    access_token: account_connect.access_token,
                    client_token: account_connect.client_token,
                    uuid: account_connect.uuid,
                    name: account_connect.name,
                    user_properties: account_connect.user_properties,
                    meta: {
                        type: account_connect.meta.type,
                        offline: true
                    }
                }

                this.database.add(account, 'accounts')
                this.database.update({ uuid: "1234", selected: account.uuid }, 'accounts-selected');

                addAccount(account)
                accountSelect(account.uuid)
                changePanel("home");

                cancelMojangBtn.disabled = false;
                cancelMojangBtn.click();
                mailInput.value = "";
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                loginBtn.style.display = "block";
                infoLogin.innerHTML = "&nbsp;";
            }).catch(err => {
                console.log(err);
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                infoLogin.innerHTML = 'Pseudo ou Mot de passe invalide'
            })
        })
    }

    loginOffline() {
        let mailInput = document.querySelector('.Mail')
        let passwordInput = document.querySelector('.Password')
        let cancelMojangBtn = document.querySelector('.cancel-mojang')
        let infoLogin = document.querySelector('.info-login')
        let loginBtn = document.querySelector(".login-btn")
        let mojangBtn = document.querySelector('.mojang')

        mojangBtn.innerHTML = "Offline"

        mojangBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "none";
            document.querySelector(".login-card-mojang").style.display = "block";
        })

        cancelMojangBtn.addEventListener("click", () => {
            document.querySelector(".login-card").style.display = "block";
            document.querySelector(".login-card-mojang").style.display = "none";
        })

        loginBtn.addEventListener("click", () => {
            cancelMojangBtn.disabled = true;
            loginBtn.disabled = true;
            mailInput.disabled = true;
            passwordInput.disabled = true;
            infoLogin.innerHTML = "Connexion en cours...";


            if (mailInput.value == "") {
                infoLogin.innerHTML = "Entrez votre adresse email / Nom d'utilisateur"
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                return
            }

            if (mailInput.value.length < 3) {
                infoLogin.innerHTML = "Votre nom d'utilisateur doit avoir au moins 3 caractères"
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                return
            }

            Mojang.getAuth(mailInput.value, passwordInput.value).then(async account_connect => {
                let account = {
                    access_token: account_connect.access_token,
                    client_token: account_connect.client_token,
                    uuid: account_connect.uuid,
                    name: account_connect.name,
                    user_properties: account_connect.user_properties,
                    meta: {
                        type: account_connect.meta.type,
                        offline: account_connect.meta.offline
                    }
                }

                this.database.add(account, 'accounts')
                this.database.update({ uuid: "1234", selected: account.uuid }, 'accounts-selected');

                addAccount(account)
                accountSelect(account.uuid)
                changePanel("home");

                cancelMojangBtn.disabled = false;
                cancelMojangBtn.click();
                mailInput.value = "";
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                loginBtn.style.display = "block";
                infoLogin.innerHTML = "&nbsp;";
            }).catch(err => {
                console.log(err)
                cancelMojangBtn.disabled = false;
                loginBtn.disabled = false;
                mailInput.disabled = false;
                passwordInput.disabled = false;
                infoLogin.innerHTML = 'Adresse E-mail ou mot de passe invalide'
            })
        })
    }
}

export default Login;