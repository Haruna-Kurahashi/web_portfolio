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

$(window).on("scroll", function () {
  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 160) {
      $(this).addClass("isActive");
    }
  });
});

$(window).on("scroll", function () {
  $(".fuwa").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 160) {
      $(this).addClass("isFuwa");
    }
  });
});
