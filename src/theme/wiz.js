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

    
    var wizTheme01 = initWizTheme();
    wizTheme01["background"] = "#E8F2FF";
    wizTheme01["root-color"] = "#FFFFFF";
    wizTheme01["root-background"] = "#448AFF";
    wizTheme01["root-stroke"] = "#448AFF";
    wizTheme01["main-color"] = "#505F79";
    wizTheme01["main-background"] = "#FFFFFF";
    wizTheme01["main-stroke"] = "#D6D9DD";
    wizTheme01["sub-color"] = "#505F79";
    wizTheme01["connect-color"] = "#D6D9DD";
    wizTheme01["selected-stroke"] = "#172B4D";
    wizTheme01["blur-selected-stroke"] = "#A7AFBC";
    wizTheme01["expander-outline-stroke"] = "#D6D9DD";
    wizTheme01["expander-outline-fill"] = "#E8F2FF";
    wizTheme01["expander-sign-stroke"] = "#D6D9DD";
    theme.register('wiz-01', wizTheme01);

    var wizTheme02 = initWizTheme();
    wizTheme02["background"] = "#FFECC6";
    wizTheme02["root-color"] = "#FFFFFF";
    wizTheme02["root-background"] = "#D5B358";
    wizTheme02["root-stroke"] = "#D5B358";
    wizTheme02["main-color"] = "#505F79";
    wizTheme02["main-background"] = "#F7DD98";
    wizTheme02["main-stroke"] = "#F7DD98";
    wizTheme02["sub-color"] = "#505F79";
    wizTheme02["connect-color"] = "#BB9325";
    wizTheme02["selected-stroke"] = "#448AFF";
    wizTheme02["blur-selected-stroke"] = "#D6D9DD";
    wizTheme02["expander-outline-stroke"] = "#BB9325";
    wizTheme02["expander-outline-fill"] = "#FFECC6";
    wizTheme02["expander-sign-stroke"] = "#BB9325";
    theme.register('wiz-02', wizTheme02);

    var wizTheme03 = initWizTheme();
    wizTheme03["background"] = "#FFFFFF";
    wizTheme03["root-color"] = "#0E9C6C";
    wizTheme03["root-background"] = "#CEF2DF";
    wizTheme03["root-stroke"] = "#0E9C6C";
    wizTheme03["main-color"] = "#00A3BF";
    wizTheme03["main-background"] = "#E6FCFF";
    wizTheme03["main-stroke"] = "#00A3BF";
    wizTheme03["sub-color"] = "#505F79";
    wizTheme03["connect-color"] = "#A7AFBC";
    wizTheme03["selected-stroke"] = "#448AFF";
    wizTheme03["blur-selected-stroke"] = "#D6D9DD";
    wizTheme03["expander-outline-stroke"] = "#A7AFBC";
    wizTheme03["expander-outline-fill"] = "#FFFFFF";
    wizTheme03["expander-sign-stroke"] = "#A7AFBC";
    theme.register('wiz-03', wizTheme03);

    var wizTheme04 = initWizTheme();
    wizTheme04["background"] = "#FDF6F6";
    wizTheme04["root-color"] = "#FF6F64";
    wizTheme04["root-background"] = "#FFFFFF";
    wizTheme04["root-stroke"] = "#FFFFFF";
    wizTheme04["main-color"] = "#FF6F64";
    wizTheme04["main-background"] = "#FFDBDB";
    wizTheme04["main-stroke"] = "#FFDBDB";
    wizTheme04["sub-color"] = "#FF6F64";
    wizTheme04["connect-color"] = "#FFBDAD";
    wizTheme04["selected-stroke"] = "#448AFF";
    wizTheme04["blur-selected-stroke"] = "#D6D9DD";
    wizTheme04["expander-outline-stroke"] = "#FFBDAD";
    wizTheme04["expander-outline-fill"] = "#FDF6F6";
    wizTheme04["expander-sign-stroke"] = "#FFBDAD";
    theme.register('wiz-04', wizTheme04);

    var wizTheme05 = initWizTheme();
    wizTheme05["background"] = "#172B4D";
    wizTheme05["root-color"] = "#172B4D";
    wizTheme05["root-background"] = "#88B5FF";
    wizTheme05["root-stroke"] = "#88B5FF";
    wizTheme05["main-color"] = "#D1E6FF";
    wizTheme05["main-background"] = "#448AFF";
    wizTheme05["main-stroke"] = "#448AFF";
    wizTheme05["sub-color"] = "#448AFF";
    wizTheme05["connect-color"] = "#448AFF";
    wizTheme05["selected-stroke"] = "#FFFFFF";
    wizTheme05["blur-selected-stroke"] = "#A7AFBC";
    wizTheme05["expander-outline-stroke"] = "#88B5FF";
    wizTheme05["expander-outline-fill"] = "#88B5FF";
    wizTheme05["expander-sign-stroke"] = "#172B4D";
    theme.register('wiz-05', wizTheme05);

    var wizTheme06 = initWizTheme();
    wizTheme06["background"] = "#E6E9ED";
    wizTheme06["root-color"] = "#FFFFFF";
    wizTheme06["root-background"] = "#DA251F";
    wizTheme06["root-stroke"] = "#DA251F";
    wizTheme06["main-color"] = "#FFFFFF";
    wizTheme06["main-background"] = "#272F40";
    wizTheme06["main-stroke"] = "#272F40";
    wizTheme06["sub-color"] = "#172B4D";
    wizTheme06["connect-color"] = "#272F40";
    wizTheme06["selected-stroke"] = "#448AFF";
    wizTheme06["blur-selected-stroke"] = "#A7AFBC";
    wizTheme06["expander-outline-stroke"] = "#272F40";
    wizTheme06["expander-outline-fill"] = "#E6E9ED";
    wizTheme06["expander-sign-stroke"] = "#272F40";
    theme.register('wiz-06', wizTheme06);

    var wizTheme07 = initWizTheme();
    wizTheme07["background"] = "#E9DFFF";
    wizTheme07["root-color"] = "#8251DD";
    wizTheme07["root-background"] = "#FFFFFF";
    wizTheme07["root-stroke"] = "#FFFFFF";
    wizTheme07["main-color"] = "#8251DD";
    wizTheme07["main-background"] = "#DDC4FF";
    wizTheme07["main-stroke"] = "#DDC4FF";
    wizTheme07["sub-color"] = "#8251DD";
    wizTheme07["connect-color"] = "#8251DD";
    wizTheme07["selected-stroke"] = "#448AFF";
    wizTheme07["blur-selected-stroke"] = "#A7AFBC";
    wizTheme07["expander-outline-stroke"] = "#8251DD";
    wizTheme07["expander-outline-fill"] = "#E9DFFF";
    wizTheme07["expander-sign-stroke"] = "#8251DD";
    theme.register('wiz-07', wizTheme07);

    var wizTheme08 = initWizTheme();
    wizTheme08["background"] = "#272F40";
    wizTheme08["root-color"] = "#FFFFFF";
    wizTheme08["root-background"] = "#448AFF";
    wizTheme08["root-stroke"] = "#448AFF";
    wizTheme08["main-color"] = "#172B4D";
    wizTheme08["main-background"] = "#FFFFFF";
    wizTheme08["main-stroke"] = "#FFFFFF";
    wizTheme08["sub-color"] = "#FFFFFF";
    wizTheme08["connect-color"] = "#E6E9ED";
    wizTheme08["selected-stroke"] = "#1B63DC";
    wizTheme08["blur-selected-stroke"] = "#A7AFBC";
    wizTheme08["expander-outline-stroke"] = "#E6E9ED";
    wizTheme08["expander-outline-fill"] = "#272F40";
    wizTheme08["expander-sign-stroke"] = "#E6E9ED";
    theme.register('wiz-08', wizTheme08);

    var wizTheme09 = initWizTheme();
    wizTheme09["background"] = "#E6E9ED";
    wizTheme09["root-color"] = "#FFFFFF";
    wizTheme09["root-background"] = "#FF8B00";
    wizTheme09["root-stroke"] = "#FF8B00";
    wizTheme09["main-color"] = "#272F40";
    wizTheme09["main-background"] = "#FFFFFF";
    wizTheme09["main-stroke"] = "#FFFFFF";
    wizTheme09["sub-color"] = "#272F40";
    wizTheme09["connect-color"] = "#A7AFBC";
    wizTheme09["selected-stroke"] = "#448AFF";
    wizTheme09["blur-selected-stroke"] = "#A7AFBC";
    wizTheme09["expander-outline-stroke"] = "#A7AFBC";
    wizTheme09["expander-outline-fill"] = "#E6E9ED";
    wizTheme09["expander-sign-stroke"] = "#A7AFBC";
    theme.register('wiz-09', wizTheme09);

    var wizTheme10 = initWizTheme();
    wizTheme10["background"] = "#247056";
    wizTheme10["root-color"] = "#247056";
    wizTheme10["root-background"] = "#FFFFFF";
    wizTheme10["root-stroke"] = "#FFFFFF";
    wizTheme10["main-color"] = "#247056";
    wizTheme10["main-background"] = "#E7C873";
    wizTheme10["main-stroke"] = "#E7C873";
    wizTheme10["sub-color"] = "#E7C873";
    wizTheme10["connect-color"] = "#E7C873";
    wizTheme10["selected-stroke"] = "#172B4D";
    wizTheme10["blur-selected-stroke"] = "#A7AFBC";
    wizTheme10["expander-outline-stroke"] = "#E7C873";
    wizTheme10["expander-outline-fill"] = "#247056";
    wizTheme10["expander-sign-stroke"] = "#E7C873";
    theme.register('wiz-10', wizTheme10);

    theme.register('wiz', wizTheme03);

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