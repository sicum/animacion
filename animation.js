jQuery(function ($) {
  var doAnimations = function () {
    var offset = $(window).scrollTop() + $(window).height();
    $animables = $(".animables");
    if ($animables.length == 0) {
      $(window).off("scroll", doAnimations);
    }
    $animables.each(function (i) {
      var $animable = $(this);
      if ($animable.offset().top + $animable.height() - 20 < offset) {
        $animable.removeClass("animables").addClass("animado");
      }
    });
  };
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});
