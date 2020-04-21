function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 3,
      itemsDesktop:[1199,2],
      itemsDesktopSmall:[980,2],
      itemsMobile: [600, 1],
      navigation : false,
      pagination:false,
      autoPlay : true
  });
});
