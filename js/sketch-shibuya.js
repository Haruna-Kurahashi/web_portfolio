// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".main-visual").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".link").addClass("color-change");
    } else {
      $(".link").removeClass("color-change");
    }
  });
});

// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".main-visual").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".openbtn").addClass("color-change");
    } else {
      $(".openbtn").removeClass("color-change");
    }
  });
});

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
