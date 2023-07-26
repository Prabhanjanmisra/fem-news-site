function openNavbar() {
    $(".nav-items-mobile").removeClass("hide-imp");
    $("#open-nav").css("display", "none");
    $("#close-nav").removeClass("hide");   
}

function closeNavbar() {
    $(".nav-items-mobile").addClass("hide-imp");
    $("#open-nav").css("display", "block");
    $("#close-nav").addClass("hide");
}

$("#open-nav").on("click", openNavbar);
$("#close-nav").on("click", closeNavbar);

let myMediaQuery = window.matchMedia('(min-width: 900px)');
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    $(".nav-items-mobile").addClass("hide-imp");
    $("#open-nav").css("display", "none");
    $("#close-nav").addClass("hide");
   }
   else {
    $("#open-nav").css("display", "block");
   }
}
myMediaQuery.addEventListener('change', widthChangeCallback);