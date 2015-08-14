$(document).on('ready', function() {

  //get trip info on submit
  $('#trip-info').on("submit", function(e){
    e.preventDefault();
    var leave = $('#leave').val();
    var length = $('#days').val();
    var destination = $('#location').val();
    var activities = $('#activities option:selected');
    var activitiesArray = (activityNames(activities));

    //makes sure all forms are filled
    if (destination === ('')) {
      alert("Please input a valid city");
    }
    else if(leave=== ('')) {
      alert("Please specify when you shall depart.");
      }
    else if(length === ('')) {
      alert("Please specify the length of your trip.");
    }
    else{
      var weatherDeets = [];
      var useWeather;
      //hide trip form
      $('.hide-later').fadeOut();
      // create search URL for getting weather
      var searchUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + destination + "&units=imperial&cnt=16&APPID=30dc5c7ce321f6b73a438b169eb9df48";

      // ajax request
      $.ajax({
        url: searchUrl,
        type: 'GET',
        success:function(data){
          //define variables
          console.log(data);
          var returnDay = parseFloat(leave) + parseFloat(length);
          var temp = data.list[leave].temp.day.toFixed(0);
          var conditions = data.list[leave].weather[0].description;
          var dailyHigh;
          var dailyLow;
          var dailyConditions;
          var dayNum;
          var start = parseFloat(leave) + 1;
          //accounts for weather api limititations
          if (returnDay > 15) {
            returnDay = 15;
          }

          //print trip details
          $('.trip-deets').append("<h3 class='center'> You are going to " + destination + " for " + length + " days!</h3><h4 class = 'center'>The Weather for your trip:</h4>");

          //print arrival weather conditions
          $(".weather-info").append("<p>On the day you arrive, the daytime temperature will be " + temp +" degrees.</p><p>Conditions: " + conditions + ". </p><p>The weather the rest of the trip looks like this: (note: weather forecast extends only 15 days from today)</p>");

          //prints weather conditions for trip days
          for (var i = start; i <= returnDay; i++) {
            dayNum = i - start + 1;
            dailyLow = data.list[i].temp.min.toFixed(0);
            dailyHigh = data.list[i].temp.max.toFixed(0);
            dailyConditions = data.list[i].weather[0].description;
            weatherDeets.push(dailyLow, dailyHigh, dailyConditions);
           $(".weather-info").append("<p>Day " + dayNum + ": <br>Low: " + dailyLow +"<br> High: " + dailyHigh + "<br> Conditions: " + dailyConditions + "</p>");
          }
          //adds lists based on weather
          checkWeather(weatherDeets, activitiesArray);

          //updates packing list quantities
          listQuantity(lists, length);

          //packing info appears
          //finds which list to use
          $('.invis').fadeIn().append(renderLists(listActivities(activitiesArray, allLists, lists)));

        },
        error:function(data){
          alert("Sorry we're experiencing technical difficulties accessing the weather. Please try again later.");
        }
      });


    } //end else statement
  }); //end submit button












  //add new Item to Etc list
  $('#new-item').on("click", function(e){
      e.preventDefault();
      var newItem = new ListItem($("#item").val(), $("#quantity").val());
      userAdd.packItem(newItem);
      renderLists(lists);
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
