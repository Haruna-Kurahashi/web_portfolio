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
