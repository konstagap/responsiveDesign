$(function() {
  const header = $("#header");
  const intro = $("#intro");
  let introHeight;
  let scrollPosition = $(window).scrollTop();
  let nav = $("#nav");

  //   Making navigation fixed on scroll
  $(window).on("scroll load resize", function() {
    introHeight = intro.innerHeight();
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  //   Smoth scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;
    $("html, body").animate({ scrollTop: elementOffset - 70 }, 700);
    nav.removeClass("show");
  });

  //   Navigation burger toggle
  $("#navToggle").on("click", function(e) {
    e.preventDefault();
    nav.toggleClass("show");
  });

  //   Reviews Slider https://kenwheeler.github.io/slick/

  let slider = $("#reviewsSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    arrows: false,
    dots: true
  });
});
