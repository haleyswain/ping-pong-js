var apiKey = "http://api.openweathermap.org/data/2.5/weather?q=Portland,us&appid=1337a95b6768ba72d0456af56a31fe01"

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    console.log(response);
    });
  });
});
