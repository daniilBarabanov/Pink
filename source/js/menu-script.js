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
    var y = document.getElementById("uu");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.background = "rgba(0,0,0,.3)";
    } else {
      x.style.display = "block";
      y.style.background = "#283645 ";
    }
  }
  console.log("shiiit");