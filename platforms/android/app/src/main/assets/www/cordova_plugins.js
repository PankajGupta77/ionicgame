cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-promise-polyfill.Promise",
      "file": "plugins/cordova-promise-polyfill/www/Promise.js",
      "pluginId": "cordova-promise-polyfill",
      "runs": true
    },
    {
      "id": "cordova-promise-polyfill.promise.min",
      "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
      "pluginId": "cordova-promise-polyfill"
    },
    {
      "id": "cordova-plugin-admob-free.AdMob",
      "file": "plugins/cordova-plugin-admob-free/www/admob.js",
      "pluginId": "cordova-plugin-admob-free",
      "clobbers": [
        "admob",
        "AdMob",
        "plugins.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-vungle.Vungle",
      "file": "plugins/cordova-plugin-vungle/www/Vungle.js",
      "pluginId": "cordova-plugin-vungle",
      "clobbers": [
        "window.Vungle"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-admob-sdk": "0.24.1",
    "cordova-android-play-services-gradle-release": "4.0.0",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-plugin-admob-free": "0.27.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-vungle": "1.0.2"
  };
});