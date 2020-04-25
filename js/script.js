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

// Contact Form Here
	var form = document.forms["testimony"];
	form.addEventListener('submit',testimony_submit,false);

	function testimony_submit(e) {
		// Stop Form From Submitting
		e.preventDefault();

		// Set Initial Variables
		var target = e.target || e.srcElement;
		var to = 'hguruman@gmail.com';
		var uri = 'mailto:' + to;
		var body = '';

		// Set Form Values to Variables
		var name = target.elements['name'].value;
		var subject = "Testimony";
		var email = target.elements['email'].value;
		var testimony = target.elements['testimony'].value;

		// Build Body / Message with all Input Fields
		body += testimony + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		body += "Email: " + email + "\r\n";

		// Build final Mailto URI
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

    let a = document.getElementById('success');
    
		// Open Mailto in New Window / Tab
		window.open(uri,'_blank');
	}
