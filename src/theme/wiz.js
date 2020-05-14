define(function(require, exports, module) {
    var theme = require('../core/theme');

    function initWizTheme() {
        return {
            "background":"#fbfbfb",
            "root-color":"white",
            "root-background":"rgb(115, 161, 191)",
            "root-stroke":"rgb(115, 161, 191)",
            "root-font-size":16,
            "root-padding":[12,24],
            "root-margin":[30,100],
            "root-radius":5,
            "root-space":10,
            "main-color":"black",
            "main-background":"rgb(238, 243, 246)",
            "main-stroke":"rgb{115, 161, 191)",
            "main-stroke-width":1,
            "main-font-size":14,
            "main-padding":[6,20],
            "main-margin":20,
            "main-radius":3,
            "main-space":5,
            "sub-color":"black",
            "sub-background":"transparent",
            "sub-stroke":"none",
            "sub-font-size":12,
            "sub-padding":[5,10],
            "sub-margin":[15,20],
            "sub-radius":5,
            "sub-space":5,
            "connect-color":"rgb(115, 161, 191)",
            "connect-width":1,
            "connect-radius":5,
            "selected-stroke":"rgb(57, 80, 96)",
            "selected-stroke-width":"3",
            "blur-selected-stroke":"rgb(143, 155, 163)",
            "marquee-background":"rgba(153, 214, 255, 0.1)",
            "marquee-stroke":"rgb(115, 161 191)",
            "drop-hint-color":"rgb(66, 94, 112)",
            "drop-hint-width":5,
            "order-hint-area-color":"rgba(0, 92, 153, 0.5)",
            "order-hint-path-color":"rgb(0, 76, 128)",
            "order-hint-path-width":1,
            "text-selection-color":"rgb(0, 61, 102)",
            "line-height":1.5,
            "expander-outline-stroke": "gray",
            "expander-outline-fill": "white",
            "expander-sign-stroke": "gray"
        }
    }

    
    var wizThemeBlue = initWizTheme();
    wizThemeBlue["background"] = "#E8F2FF";
    wizThemeBlue["root-color"] = "#FFFFFF";
    wizThemeBlue["root-background"] = "#448AFF";
    wizThemeBlue["root-stroke"] = "#448AFF";
    wizThemeBlue["main-color"] = "#505F79";
    wizThemeBlue["main-background"] = "#FFFFFF";
    wizThemeBlue["main-stroke"] = "#D6D9DD";
    wizThemeBlue["sub-color"] = "#505F79";
    wizThemeBlue["connect-color"] = "#D6D9DD";
    wizThemeBlue["selected-stroke"] = "#172B4D";
    wizThemeBlue["blur-selected-stroke"] = "#A7AFBC";
    wizThemeBlue["expander-outline-stroke"] = "#D6D9DD";
    wizThemeBlue["expander-outline-fill"] = "#E8F2FF";
    wizThemeBlue["expander-sign-stroke"] = "#D6D9DD";
    theme.register('wiz-blue', wizThemeBlue);

    var wizThemeGolden = initWizTheme();
    wizThemeGolden["background"] = "#FEF5E2";
    wizThemeGolden["root-color"] = "#FFFFFF";
    wizThemeGolden["root-background"] = "#D5B358";
    wizThemeGolden["root-stroke"] = "#D5B358";
    wizThemeGolden["main-color"] = "#505F79";
    wizThemeGolden["main-background"] = "#F7DD98";
    wizThemeGolden["main-stroke"] = "#F7DD98";
    wizThemeGolden["sub-color"] = "#505F79";
    wizThemeGolden["connect-color"] = "#BB9325";
    wizThemeGolden["selected-stroke"] = "#448AFF";
    wizThemeGolden["blur-selected-stroke"] = "#D6D9DD";
    wizThemeGolden["expander-outline-stroke"] = "#BB9325";
    wizThemeGolden["expander-outline-fill"] = "#FEF5E2";
    wizThemeGolden["expander-sign-stroke"] = "#BB9325";
    theme.register('wiz-golden', wizThemeGolden);

    var wizThemeLightGreen = initWizTheme();
    wizThemeLightGreen["background"] = "#FFFFFF";
    wizThemeLightGreen["root-color"] = "#0E9C6C";
    wizThemeLightGreen["root-background"] = "#CEF2DF";
    wizThemeLightGreen["root-stroke"] = "#0E9C6C";
    wizThemeLightGreen["main-color"] = "#00A3BF";
    wizThemeLightGreen["main-background"] = "#E6FCFF";
    wizThemeLightGreen["main-stroke"] = "#00A3BF";
    wizThemeLightGreen["sub-color"] = "#505F79";
    wizThemeLightGreen["connect-color"] = "#A7AFBC";
    wizThemeLightGreen["selected-stroke"] = "#448AFF";
    wizThemeLightGreen["blur-selected-stroke"] = "#D6D9DD";
    wizThemeLightGreen["expander-outline-stroke"] = "#A7AFBC";
    wizThemeLightGreen["expander-outline-fill"] = "#FFFFFF";
    wizThemeLightGreen["expander-sign-stroke"] = "#A7AFBC";
    theme.register('wiz-lightGreen', wizThemeLightGreen);

    var wizThemeSakura = initWizTheme();
    wizThemeSakura["background"] = "#FDF6F6";
    wizThemeSakura["root-color"] = "#FF6F64";
    wizThemeSakura["root-background"] = "#FFFFFF";
    wizThemeSakura["root-stroke"] = "#FFFFFF";
    wizThemeSakura["main-color"] = "#FF6F64";
    wizThemeSakura["main-background"] = "#FFDBDB";
    wizThemeSakura["main-stroke"] = "#FFDBDB";
    wizThemeSakura["sub-color"] = "#FF6F64";
    wizThemeSakura["connect-color"] = "#FFBDAD";
    wizThemeSakura["selected-stroke"] = "#448AFF";
    wizThemeSakura["blur-selected-stroke"] = "#D6D9DD";
    wizThemeSakura["expander-outline-stroke"] = "#FFBDAD";
    wizThemeSakura["expander-outline-fill"] = "#FDF6F6";
    wizThemeSakura["expander-sign-stroke"] = "#FFBDAD";
    theme.register('wiz-sakura', wizThemeSakura);

    var wizThemeDarkBlue = initWizTheme();
    wizThemeDarkBlue["background"] = "#172B4D";
    wizThemeDarkBlue["root-color"] = "#172B4D";
    wizThemeDarkBlue["root-background"] = "#88B5FF";
    wizThemeDarkBlue["root-stroke"] = "#88B5FF";
    wizThemeDarkBlue["main-color"] = "#D1E6FF";
    wizThemeDarkBlue["main-background"] = "#448AFF";
    wizThemeDarkBlue["main-stroke"] = "#448AFF";
    wizThemeDarkBlue["sub-color"] = "#448AFF";
    wizThemeDarkBlue["connect-color"] = "#448AFF";
    wizThemeDarkBlue["selected-stroke"] = "#FFFFFF";
    wizThemeDarkBlue["blur-selected-stroke"] = "#A7AFBC";
    wizThemeDarkBlue["expander-outline-stroke"] = "#88B5FF";
    wizThemeDarkBlue["expander-outline-fill"] = "#88B5FF";
    wizThemeDarkBlue["expander-sign-stroke"] = "#172B4D";
    theme.register('wiz-darkBlue', wizThemeDarkBlue);

    var wizThemeBlack = initWizTheme();
    wizThemeBlack["background"] = "#E6E9ED";
    wizThemeBlack["root-color"] = "#FFFFFF";
    wizThemeBlack["root-background"] = "#DA251F";
    wizThemeBlack["root-stroke"] = "#DA251F";
    wizThemeBlack["main-color"] = "#FFFFFF";
    wizThemeBlack["main-background"] = "#272F40";
    wizThemeBlack["main-stroke"] = "#272F40";
    wizThemeBlack["sub-color"] = "#172B4D";
    wizThemeBlack["connect-color"] = "#272F40";
    wizThemeBlack["selected-stroke"] = "#448AFF";
    wizThemeBlack["blur-selected-stroke"] = "#A7AFBC";
    wizThemeBlack["expander-outline-stroke"] = "#272F40";
    wizThemeBlack["expander-outline-fill"] = "#E6E9ED";
    wizThemeBlack["expander-sign-stroke"] = "#272F40";
    theme.register('wiz-black', wizThemeBlack);

    var wizThemePurple = initWizTheme();
    wizThemePurple["background"] = "#E9DFFF";
    wizThemePurple["root-color"] = "#8251DD";
    wizThemePurple["root-background"] = "#FFFFFF";
    wizThemePurple["root-stroke"] = "#FFFFFF";
    wizThemePurple["main-color"] = "#8251DD";
    wizThemePurple["main-background"] = "#DDC4FF";
    wizThemePurple["main-stroke"] = "#DDC4FF";
    wizThemePurple["sub-color"] = "#8251DD";
    wizThemePurple["connect-color"] = "#8251DD";
    wizThemePurple["selected-stroke"] = "#448AFF";
    wizThemePurple["blur-selected-stroke"] = "#A7AFBC";
    wizThemePurple["expander-outline-stroke"] = "#8251DD";
    wizThemePurple["expander-outline-fill"] = "#E9DFFF";
    wizThemePurple["expander-sign-stroke"] = "#8251DD";
    theme.register('wiz-purple', wizThemePurple);

    var wizThemeCyan = initWizTheme();
    wizThemeCyan["background"] = "#272F40";
    wizThemeCyan["root-color"] = "#FFFFFF";
    wizThemeCyan["root-background"] = "#448AFF";
    wizThemeCyan["root-stroke"] = "#448AFF";
    wizThemeCyan["main-color"] = "#172B4D";
    wizThemeCyan["main-background"] = "#FFFFFF";
    wizThemeCyan["main-stroke"] = "#FFFFFF";
    wizThemeCyan["sub-color"] = "#FFFFFF";
    wizThemeCyan["connect-color"] = "#E6E9ED";
    wizThemeCyan["selected-stroke"] = "#1B63DC";
    wizThemeCyan["blur-selected-stroke"] = "#A7AFBC";
    wizThemeCyan["expander-outline-stroke"] = "#E6E9ED";
    wizThemeCyan["expander-outline-fill"] = "#272F40";
    wizThemeCyan["expander-sign-stroke"] = "#E6E9ED";
    theme.register('wiz-cyan', wizThemeCyan);

    var wizThemeSilver = initWizTheme();
    wizThemeSilver["background"] = "#E6E9ED";
    wizThemeSilver["root-color"] = "#FFFFFF";
    wizThemeSilver["root-background"] = "#FF8B00";
    wizThemeSilver["root-stroke"] = "#FF8B00";
    wizThemeSilver["main-color"] = "#272F40";
    wizThemeSilver["main-background"] = "#FFFFFF";
    wizThemeSilver["main-stroke"] = "#FFFFFF";
    wizThemeSilver["sub-color"] = "#272F40";
    wizThemeSilver["connect-color"] = "#A7AFBC";
    wizThemeSilver["selected-stroke"] = "#448AFF";
    wizThemeSilver["blur-selected-stroke"] = "#A7AFBC";
    wizThemeSilver["expander-outline-stroke"] = "#A7AFBC";
    wizThemeSilver["expander-outline-fill"] = "#E6E9ED";
    wizThemeSilver["expander-sign-stroke"] = "#A7AFBC";
    theme.register('wiz-silver', wizThemeSilver);

    var wizThemeGreen = initWizTheme();
    wizThemeGreen["background"] = "#247056";
    wizThemeGreen["root-color"] = "#247056";
    wizThemeGreen["root-background"] = "#FFFFFF";
    wizThemeGreen["root-stroke"] = "#FFFFFF";
    wizThemeGreen["main-color"] = "#247056";
    wizThemeGreen["main-background"] = "#E7C873";
    wizThemeGreen["main-stroke"] = "#E7C873";
    wizThemeGreen["sub-color"] = "#E7C873";
    wizThemeGreen["connect-color"] = "#E7C873";
    wizThemeGreen["selected-stroke"] = "#172B4D";
    wizThemeGreen["blur-selected-stroke"] = "#A7AFBC";
    wizThemeGreen["expander-outline-stroke"] = "#E7C873";
    wizThemeGreen["expander-outline-fill"] = "#247056";
    wizThemeGreen["expander-sign-stroke"] = "#E7C873";
    theme.register('wiz-green', wizThemeGreen);

    theme.register('wiz', wizThemeLightGreen);

    var wizWindowsNight = initWizTheme();
    wizWindowsNight["background"] = "#23272e";
    wizWindowsNight["root-color"] = "#2d3138";
    wizWindowsNight["root-background"] = "#97a3b8";
    wizWindowsNight["root-stroke"] = "#97a3b8";
    wizWindowsNight["main-color"] = "#97a3b8";
    wizWindowsNight["main-background"] = "#2b2f38";
    wizWindowsNight["main-stroke"] = "#2b2f38";
    wizWindowsNight["sub-color"] = "#97a3b8";
    wizWindowsNight["connect-color"] = "#404959";
    wizWindowsNight["selected-stroke"] = "#448aff";
    wizWindowsNight["blur-selected-stroke"] = "#627088";
    wizWindowsNight["expander-outline-stroke"] = "#97a3b8";
    wizWindowsNight["expander-outline-fill"] = "#97a3b8";
    wizWindowsNight["expander-sign-stroke"] = "#2d3138";
    theme.register('wiz-windows-night', wizWindowsNight);

    var wizMacNight = initWizTheme();
    wizMacNight["background"] = "#272727";
    wizMacNight["root-color"] = "#000000";
    wizMacNight["root-background"] = "#848484";
    wizMacNight["root-stroke"] = "#848484";
    wizMacNight["main-color"] = "#a6a6a6";
    wizMacNight["main-background"] = "#333333";
    wizMacNight["main-stroke"] = "#333333";
    wizMacNight["sub-color"] = "#a6a6a6";
    wizMacNight["connect-color"] = "#474747";
    wizMacNight["selected-stroke"] = "#448aff";
    wizMacNight["blur-selected-stroke"] = "#5c5c5c";
    wizMacNight["expander-outline-stroke"] = "#848484";
    wizMacNight["expander-outline-fill"] = "#848484";
    wizMacNight["expander-sign-stroke"] = "#000000";
    theme.register('wiz-mac-night', wizMacNight);

    var wizIosNight = initWizTheme();
    wizIosNight["background"] = "#1f2126";
    wizIosNight["root-color"] = "#353c47";
    wizIosNight["root-background"] = "#7990b6";
    wizIosNight["root-stroke"] = "#7990b6";
    wizIosNight["main-color"] = "#7990b6";
    wizIosNight["main-background"] = "#32353e";
    wizIosNight["main-stroke"] = "#32353e";
    wizIosNight["sub-color"] = "#7990b6";
    wizIosNight["connect-color"] = "rgba(68, 138, 255, .2)";
    wizIosNight["selected-stroke"] = "#448aff";
    wizIosNight["blur-selected-stroke"] = "#536178";
    wizIosNight["expander-outline-stroke"] = "#7990b6";
    wizIosNight["expander-outline-fill"] = "#7990b6";
    wizIosNight["expander-sign-stroke"] = "#353c47";
    theme.register('wiz-ios-night', wizIosNight);

    var wizAndroidNight = initWizTheme();
    wizAndroidNight["background"] = "#1f2126";
    wizAndroidNight["root-color"] = "#455a64";
    wizAndroidNight["root-background"] = "#7990b6";
    wizAndroidNight["root-stroke"] = "#7990b6";
    wizAndroidNight["main-color"] = "#7990b6";
    wizAndroidNight["main-background"] = "#353c47";
    wizAndroidNight["main-stroke"] = "#353c47";
    wizAndroidNight["sub-color"] = "#7990b6";
    wizAndroidNight["connect-color"] = "#273d62";
    wizAndroidNight["selected-stroke"] = "#448aff";
    wizAndroidNight["blur-selected-stroke"] = "#536178";
    wizAndroidNight["expander-outline-stroke"] = "#7990b6";
    wizAndroidNight["expander-outline-fill"] = "#7990b6";
    wizAndroidNight["expander-sign-stroke"] = "#455a64";
    theme.register('wiz-android-night', wizAndroidNight);

});