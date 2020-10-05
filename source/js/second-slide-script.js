var slideIndex2 = 1;
showSlides(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlides(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("table-row");
  var points = document.getElementsByClassName("point");
  if (n > slides.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "flex"; 
  points[slideIndex2-1].className += " active";
}