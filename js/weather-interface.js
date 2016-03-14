// http://api.openweathermap.org/data/2.5/weather?q=Portland,us&appid=257cc14e475f48d35f55dfd0ec0c4ee0

var apiKey = "257cc14e475f48d35f55dfd0ec0c4ee0";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if (response.cod !== 200) {
        $('.showWeather').text(response.message);
      } else {
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      }
    });
  });
});
