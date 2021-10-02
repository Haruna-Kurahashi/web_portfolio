import { Gradient } from "./Gradient.js";

// Create your instance
const gradient = new Gradient();

// Call `initGradient` with the selector to your canvas
gradient.initGradient("#gradient-canvas");

$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $(".sp-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$(".link2").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $(".sp-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});
