// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0D9YD9P2MHebt2EbXxqldb9Z8kFMCklY",
  authDomain: "restaurant-site.firebaseapp.com",
  databaseURL: "https://restaurant-site.firebaseio.com",
  storageBucket: "restaurant-site.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

// Make a reservation
$('form').on('submit', function (e) {
	e.preventDefault();
	var source = $("#reservation-template").html();
	var template = Handlebars.compile(source);
	var context = {name: $('#name').val(), day: $('#day').val()};
	var html = template(context);
	$('#table').append(html);
});

// Order function
function orderGreeting() {
	$('.cta').on('click', function() {
		var customerName = prompt('Good day, Please Enter your name');		
		alert('Good day ' + customerName + ' The order function is under construction. Please make a reservation');
	});
}
orderGreeting();


// initialize the configuration of map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0059},
    zoom: 10,
    scrollwheel: false,
	});

  // use Marker constructor to add a marker to map
  var marker = new google.maps.Marker({
    position: {lat: 40.7128, lng: -74.0059},
    map: map,
    title: 'The Breakfast Club'
  });
}



// Day Validation
// function dayVal() {
// 	var daysOpen = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	
// 	if ($(#day).val() !== daysOpen[0] || daysOpen[1] || daysOpen[2] || daysOpen[3] || daysOpen[4] || daysOpen[5]) {
// 		alert('Please enter a a day of the week, except Sunday');
// 	}
// }