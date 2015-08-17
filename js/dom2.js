$(document).on('ready', function() {

  //get trip info on submit
  $('#trip-info').on("submit", function(e){
    e.preventDefault();
    var leave = $('#leave').val();
    var length = $('#days').val();
    var destination = $('#location').val().toLowerCase();
    var activities = $('#activities option:selected');
    var activitiesArray = (activityNames(activities));

    //makes sure all forms are filled
    if (leave=== ('')) {
      leave = 1;
    }
    if(length === ('')) {
      length = 1;
    }
    if (destination === ('')) {
      alert("Please input a valid city");
    }
    //submit travel form
    else{
      var weatherDeets = [];
      var useWeather;
      //hide trip input form
      $('.hide-later').fadeOut();
      // create search URL for getting weather
      var searchUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + destination + "&units=imperial&cnt=16&APPID=30dc5c7ce321f6b73a438b169eb9df48";

      // ajax request
      $.ajax({
        url: searchUrl,
        type: 'GET',
        success:function(data){
          //define variables
          var returnDay = parseFloat(leave) + parseFloat(length);
          var temp = data.list[leave].temp.day.toFixed(0);
          var conditions = data.list[leave].weather[0].description;
          var dailyHigh;
          var dailyLow;
          var dailyDay;
          var dailyConditions;
          var dayNum;
          var start = parseFloat(leave) + 1;
          //accounts for weather api limititations
          if (returnDay > 15) {
            returnDay = 15;
          }

          //print trip details
          if(length < 2){
            $('.trip-deets').append("<h3 class='bigger center'> You are going to " + capitalize(destination) + " for one day!</h3><h4 class='center'> The weather for your trip:</h4>");
          }else{
            $('.trip-deets').append("<h3 class='center'> You are going to " + capitalize(destination) + " for " + length + " days!</h3><h4 class='center'>The weather for your trip:</h4>");
          }

          //print arrival weather conditions
          $(".weather-info").prepend("<p>On the day you arrive, the daytime temperature will be " + temp +" degrees.    The conditions will be:  " + conditions + ". </p><p>The weather the rest of your trip looks like this:</p><p class='tiny'>(note: forecast only extends 14 days from today)</p>");

          //prints weather conditions for trip days
          for (var i = start; i <= returnDay; i++) {
            dayNum = i - start + 1;
            dailyLow = data.list[i].temp.min.toFixed(0);
            dailyHigh = data.list[i].temp.max.toFixed(0);
            dailyDay = data.list[i].temp.day.toFixed(0);
            dailyConditions = data.list[i].weather[0].description;
            weatherDeets.push(dailyDay, dailyConditions);
            if (dayNum < 8){
              $("#daily-weather").append("<td class= 'weather-box'><span class = 'bolder'>Day " + dayNum + "</span>: <br>Low: " + dailyLow +"<br> High: " + dailyHigh + "<br> Conditions:<br>" + dailyConditions + "</td>");
              }
            if (dayNum > 7){
               $("#daily-weather2").append("<td class= 'weather-box'><span class = 'bolder'>Day " + dayNum + "</span>: <br>Low: " + dailyLow +"<br> High: " + dailyHigh + "<br> Conditions:<br>" + dailyConditions + "</td>");
              }
          }
          //adds lists based on weather
          checkWeather(weatherDeets, activitiesArray);
          //change weather images
          weatherImage (activitiesArray);
          //updates packing list quantities
          listQuantity(lists, length);
          //finds which list to use
          listActivities(activitiesArray, allLists, lists);
          //packing info appears
          $('.invis').fadeIn();
          renderAll(lists);
        },
        error:function(data){
          alert("Sorry we're experiencing technical difficulties accessing the weather. Please try again later.");
        }
      });
      //define vaiables for Instagram
      var imageURLs = [];
      var oneWordDestination = cutWhiteSpace(destination);
      var picUrl = "https://api.instagram.com/v1/tags/" + oneWordDestination + "/media/recent";
      var exploreUrl = "http://www.instagram.com/explore/tags/" + oneWordDestination;
      // Instagram ajax request
      $.ajax({
        url: picUrl,
        type: 'GET',
        data: {client_id:'d04f59826a594c0e8690c8a05a777aa8'},
        dataType:'jsonp',
        success:function(data){
          $("#pic-div").append('<a href="' + exploreUrl + '"><h4>See what people are tagging in ' + capitalize(destination) + '!</h4></a>');
          var output = data.data;
          // iterate through the returned data, appending the images to the dom
          for(var i = 0; i < output.length; i++) {
            imageURLs[i] = output[i].images.thumbnail.url;
            $("#pic-div").append('<img src="' + imageURLs[i] + '"/>');
          }
        }
      });

      } //end else statement
    }); //end submit button

  //add new Item to Etc list
  $('#new-item').on("click", function(e){
    e.preventDefault();
    var newItem = new ListItem($("#item").val(), $("#quantity").val());
    userAdd.packItem(newItem);
    renderAll(lists);
    //clears inputs
    $("#item").val("");
    $("#quantity").val("");
  });

  //deletes item
  $(document).on("click", '.delete-click', function(){
    var itemDelete = $(this).prev().html().trim();
    var indexD;
    var listD;
    //removes item from list array
    for (var i = 0; i < lists.length ; i++) {
      for (var j = 0; j < lists[i].list.length; j++) {
        if (itemDelete === lists[i].list[j].itemName){
          itemDelete = lists[i].list[j];
          listD = lists[i];
          indexD = listD.list.indexOf(itemDelete);
          listD.list.splice(indexD, 1);
        }
      }
    }
    $(this).closest('div').remove();
  });

  //checks off list
  $(document).on("click", ".check", function(){
    $(this).toggleClass('checked');
  });

}); //end of document