$(document).on('ready', function() {
  var lists = [standardClothes, standardToiletries, standardMisc, userAdd];
    console.log(lists);

  //append weather info
  $(".weather-info").append(" The average temperature will be 75 degrees.  It will be mostly sunny with a chance of rain.");



  //get trip info on submit
  $('#trip-info').on("submit", function(e){
    var length = $('#days').val();
    var destination = $('#location').val();
    e.preventDefault();
    //hide trip form
    $('#trip-info-div').fadeOut();
    //print trip details
    $('.trip-deets').append("<h4> You are going to " + destination + " for " + length + " days!</h4>");
    $('.invis').fadeIn().append(printLists(lists));
  });


//add new Item to Etc list
$('#new-item').on("click", function(e){
    e.preventDefault();
    var newItem = new ListItem($("#item").val(), $("#quantity").val());
    userAdd.packItem(newItem);
    printLists(lists);
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
  // remove from screen on click
  $(this).closest('div').remove();
});














}); //end of document
