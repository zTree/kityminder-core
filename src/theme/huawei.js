define(function(require, exports, module) {
  var theme = require('../core/theme');

  function initTheme() {
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
          "sub-font-size":14,
          "sub-padding":[5,10],
          "sub-margin":[15,20],
          "sub-radius":5,
          "sub-space":5,
          "connect-color":"#A7AFBC",
          "connect-width":1,
          "connect-radius":5,
          "selected-stroke":"rgb{115, 161, 191)",
          "selected-stroke-width":"1",
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

  
  var huaweiWhite = initTheme();
  huaweiWhite["background"] = "#FFFFFF";
  huaweiWhite["root-color"] = "#333333";
  huaweiWhite["root-background"] = "#EEEEEE";
  huaweiWhite["root-stroke"] = "#CCCCCC";
  huaweiWhite["main-color"] = "#333333";
  huaweiWhite["main-background"] = "#EEEEEE";
  huaweiWhite["main-stroke"] = "#CCCCCC";
  huaweiWhite["sub-color"] = "#666666";
  theme.register('huawei-white', huaweiWhite);

  
  var huaweiGrey = initTheme();
  huaweiGrey["background"] = "#F5F5F5";
  huaweiGrey["root-color"] = "#0D94FF";
  huaweiGrey["root-background"] = "#E2F2FF";
  huaweiGrey["root-stroke"] = "#0D94FF";
  huaweiGrey["main-color"] = "#0D94FF";
  huaweiGrey["main-background"] = "#FFFFFF";
  huaweiGrey["main-stroke"] = "transparent";
  huaweiGrey["sub-color"] = "#666666";
  theme.register('huawei-grey', huaweiGrey);

  
  var huaweiLightBlue = initTheme();
  huaweiLightBlue["background"] = "#E2F2FF";
  huaweiLightBlue["root-color"] = "#FFFFFF";
  huaweiLightBlue["root-background"] = "#0D94FF";
  huaweiLightBlue["root-stroke"] = "transparent";
  huaweiLightBlue["main-color"] = "#333333";
  huaweiLightBlue["main-background"] = "#FFFFFF";
  huaweiLightBlue["main-stroke"] = "transparent";
  huaweiLightBlue["sub-color"] = "#666666";
  theme.register('huawei-lightBlue', huaweiLightBlue);

  
  var huaweiPink = initTheme();
  huaweiPink["background"] = "#FFEBEF";
  huaweiPink["root-color"] = "#FFFFFF";
  huaweiPink["root-background"] = "#FF9900";
  huaweiPink["root-stroke"] = "transparent";
  huaweiPink["main-color"] = "#FF9900";
  huaweiPink["main-background"] = "#FFFFFF";
  huaweiPink["main-stroke"] = "#FFCD80";
  huaweiPink["sub-color"] = "#666666";
  theme.register('huawei-pink', huaweiPink);

  
  var huaweiYellow = initTheme();
  huaweiYellow["background"] = "#FFF8E0";
  huaweiYellow["root-color"] = "#FFFFFF";
  huaweiYellow["root-background"] = "#E18100";
  huaweiYellow["root-stroke"] = "transparent";
  huaweiYellow["main-color"] = "#ffffff";
  huaweiYellow["main-background"] = "#FFBF00";
  huaweiYellow["main-stroke"] = "transparent";
  huaweiYellow["sub-color"] = "#666666";
  theme.register('huawei-yellow', huaweiYellow);

  
  var huaweiCyan = initTheme();
  huaweiCyan["background"] = "#E4F8E9";
  huaweiCyan["root-color"] = "#FFFFFF";
  huaweiCyan["root-background"] = "#00BF43";
  huaweiCyan["root-stroke"] = "transparent";
  huaweiCyan["main-color"] = "#333333";
  huaweiCyan["main-background"] = "#F5F5F5";
  huaweiCyan["main-stroke"] = "#ffffff";
  huaweiCyan["sub-color"] = "#666666";
  theme.register('huawei-cyan', huaweiCyan);

  
  var huaweiBlack = initTheme();
  huaweiBlack["background"] = "#000000";
  huaweiBlack["root-color"] = "#FFFFFF";
  huaweiBlack["root-background"] = "#666666";
  huaweiBlack["root-stroke"] = "transparent";
  huaweiBlack["main-color"] = "#EEEEEE";
  huaweiBlack["main-background"] = "#999999";
  huaweiBlack["main-stroke"] = "transparent";
  huaweiBlack["sub-color"] = "#999999";
  theme.register('huawei-black', huaweiBlack);

  
  var huaweiGreen = initTheme();
  huaweiGreen["background"] = "#00B039";
  huaweiGreen["root-color"] = "#333333";
  huaweiGreen["root-background"] = "#C9F5D7";
  huaweiGreen["root-stroke"] = "transparent";
  huaweiGreen["main-color"] = "#333333";
  huaweiGreen["main-background"] = "#F5F5F5";
  huaweiGreen["main-stroke"] = "#EEEEEE";
  huaweiGreen["sub-color"] = "#FFFFFF";
  theme.register('huawei-green', huaweiGreen);

  
  var huaweiBlue = initTheme();
  huaweiBlue["background"] = "#1584F0";
  huaweiBlue["root-color"] = "#0D94FF";
  huaweiBlue["root-background"] = "#E2F2FF";
  huaweiBlue["root-stroke"] = "transparent";
  huaweiBlue["main-color"] = "#0D94FF";
  huaweiBlue["main-background"] = "#E2F2FF";
  huaweiBlue["main-stroke"] = "transparent";
  huaweiBlue["sub-color"] = "#FFFFFF";
  theme.register('huawei-blue', huaweiBlue);

  
  var huaweiOrange = initTheme();
  huaweiOrange["background"] = "#FB8D00";
  huaweiOrange["root-color"] = "#333333";
  huaweiOrange["root-background"] = "#FFD443";
  huaweiOrange["root-stroke"] = "transparent";
  huaweiOrange["main-color"] = "#333333";
  huaweiOrange["main-background"] = "#FEF7DF";
  huaweiOrange["main-stroke"] = "transparent";
  huaweiOrange["sub-color"] = "#ffffff";
  theme.register('huawei-orange', huaweiOrange);

  theme.register('wiz', huaweiWhite);

  var wizWindowsNight = initTheme();
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

  var wizMacNight = initTheme();
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

  var wizIosNight = initTheme();
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

  var wizAndroidNight = initTheme();
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