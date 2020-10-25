/* function openMenu () {
    var x = document.getElementsByClassName("nav-list");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} */
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("header-top");
    var z = document.getElementById("page-header__top-bottom");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.background = "rgba(0,0,0,.3)";
      z.style.background = "none"
    } else {
      x.style.display = "block";
      y.style.background = "#283645 ";
      z.style.background = "url(../img/back-tablet-1-x-jpg.png)"
      z.style.backgroundPosition = "0"
      z.style.backgroundRepeat = "no-repeat"
      z.style.backgroundSize = "cover"
    }
  }
  console.log("qwe");
