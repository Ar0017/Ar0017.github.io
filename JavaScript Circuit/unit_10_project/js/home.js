// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPiVn-cbiZo1zjqVzk3sx41tp7FDYyMMg",
    authDomain: "reservation-site-fd8b6.firebaseapp.com",
    databaseURL: "https://reservation-site-fd8b6.firebaseio.com",
    projectId: "reservation-site-fd8b6",
    storageBucket: "reservation-site-fd8b6.appspot.com",
    messagingSenderId: "599039498485"
  };

firebase.initializeApp(config);

var database = firebase.database();

// Make a reservation
$('form').on('submit', function (e) {
	e.preventDefault();
	var source = $("#reservation-template").html();
	var template = Handlebars.compile(source);
	var context = {name: $('#name').val(), day: $('#daysOpen').val()};
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


$('#form').on('submit', function (e) {
  // prevent the page from reloading
  e.preventDefault();

  // grab user's comment from input field
  var userName = $('#name').val();
  var userDay = $('#daysOpen').val();


  var resNum = Math.floor(Math.random() * 100000) + 1;
  alert(userName + ' your Reservation Number is ' + resNum);
  // clear the user's comment from the input (for UX purposes)
  $('#name').val('')
  // $('#day').val('')
  // create a section for comments data in your db
  var reservationReference = database.ref('Reservation-Data');
  // use the set method to save data to the comments
  reservationReference.push({
    name: userName,
    day: userDay,
    resNumber: resNum
  });
});


// Get Data
$('#resEdit').on('click', function() {
  var cstChk = alert('Sorry, this function is under construction.');

  // prompt('Please enter your reservation number');

  // $.ajax({
  //   type: "GET",
  //   url: "https://reservation-site-fd8b6.firebaseio.com",
  //   data: {resNumber: cstChk},
  //   success: function(response) {
  //     $('#resInfo').html('Good day ' + response.name);
  //     $('.rsNum').html('Your reservation number is ' + response.resNumber);
  //   },
  // });
});









// $('#resEdit').on('click', function(e) {
//   e.preventDefault();
//   var cstChk = prompt('Please enter your reservation number.');

//   database.ref('Reservation-Data').on('value', function (results) {
//     var getResData = results.val();
//     var data = [];

//     for (var check in getResData)
//   });
// })

// function getResData() {
//   // Listen for changes in comments data
//   database.ref('Reservation-Data').on('value', function (results) {
//     // Get all comments stored in the results we received back from Firebase
//     // Update the DOM
//   });
// }