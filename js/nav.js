$(document).ready(function () {
  $(".sidebarBtn").click(function () {
    $(".side-nav__item").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});
