const builder = require('electron-builder')
const { preductname } = require('./package.json')


let configBuild = {
    appId: preductname,
    productName: preductname,
    copyright: 'Copyright © 2022 ZoneDelta',
    artifactName: "${productName}-${os}-${arch}.${ext}",
    files: ["src/**/*", "package.json", "LICENSE.md"],
    directories: { "output": "dist" },
    compression: 'maximum',
    asar: true,

    //Windows Config
    win: {
        icon: "./src/assets/images/icon.ico",
        target: [{
            target: "nsis",
            arch: ["x64"]
        }],
    },

    //Windows Installer Config
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: false
    },

    //MacOS Config
    mac: {
        //icon: "./src/assets/images/icon.icns",
        category: "public.app-category.games",
        artifactName: "${productName}-setup-${version}-${arch}.${ext}",
        target: [{
            target: "dmg",
            arch: ["x64", "arm64"]
        }]
    },

    //Linux Config
    linux: {
        icon: "./src/assets/images/icon.png",
        target: [{
            target: "AppImage",
            arch: ["x64"]
        }, {
            target: "tar.gz",
            arch: ["x64"]
        }]
    }
}

builder.build({
    config: configBuild
}).then(() => {
    console.log('le build est terminé')
}).catch(err => {
    console.error('Error during build!', err)
})