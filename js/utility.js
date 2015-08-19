//List constructor
var List = function(listName){
  this.listName = listName;
  this.list = [];
};

//method for adding Item to List
List.prototype.packItem = function(item) {
  this.list.push(item);
};

//method for removing Item from List
List.prototype.removeItem = function(item) {
  var index;
  index = this.indexOf(item);
  this.splice(index, 1);
};

//method for List
List.prototype.render = function(location){
  location.append("<h3 class = 'bigger'>" + this.listName +"</h3>");
  for (var i = 0; i < this.list.length; i++) {
    location
      .append('<div><li class="check" ><span id="sib">' + this.list[i].itemName + "        "  + '</span><button class="delete-click btn-xs btn-danger"></button></li><li class="quantity-form"><input class="quantity-btn clear-input" type ="number" name="quantity-items" min="0" value ="' + this.list[i].quantity + '"</li><br><br></div>');
  }
};

// add item button
var modalPrintButton = '<input type="submit" value = "Add Item" class="submit" data-toggle="modal" data-target="#myModal">';



//append all Lists in columns
function renderAll(listsArray){
  $("#packing-list").html(" ");
  var end = listsArray.length - 1;
  var lastUL = "#packing"+end;
  for (var i = 0; i < listsArray.length; i++) {
    $('#packing-list').append("<div class = 'span1 packing-list'><ul id = 'packing" + i+"'></ul></div>");
    listsArray[i].render($('#packing'+ i));
  }
  $(lastUL).append(modalPrintButton);
}

//ListItem constructor
var ListItem = function(itemName, quantity){
  this.itemName = itemName;
  this.quantity = quantity || 1;
};

//method for changing quantity of ListItem
ListItem.prototype.changeQuantity = function(num) {
  this.quantity = num;
};

//method for changing name of ListItem
ListItem.prototype.changeItemName = function(name) {
  this.itemName = name;
};

//delete ListItem
ListItem.prototype.deleteItem = function(listDelete){
  index = listDelete.list.indexOf(this);
  listDelete.list.splice(index, 1);
};

//change ListItem amount based on days of travel
//takes in array of all Lists
function listQuantity(listsArray, length) {
  for (var i = 0; i < listsArray.length; i++) {
    for (var j = 0; j < listsArray[i].list.length; j++) {
      if(listsArray[i].list[j].quantity === "day"){
        listsArray[i].list[j].quantity = length;
       }
      else if(listsArray[i].list[j].quantity === "less"){
        if(length > 12){
          listsArray[i].list[j].quantity = 6;
        }
        else if(length > 9){
          listsArray[i].list[j].quantity = 5;
        }
        else if(length === 1){
          listsArray[i].list[j].quantity = 1;
        }
        else{
          listsArray[i].list[j].quantity = parseFloat(length)-1;
        }
      }
    }
  }
  return listsArray;
}

//create array of activity names
function activityNames (activities){
  var activity;
  var activitiesArray = [];
  for (var i = 0; i < activities.length; i++) {
    activity = $(activities[i]).val();
    activitiesArray.push(activity);
  }
  return activitiesArray;
}

//adds list of weather conditions to activity arrray
function checkWeather(weatherArray, activitiesArray){
  var split;
  for (var i = 0; i < weatherArray.length; i++) {
    split = weatherArray[i].split();
    if (split[0].indexOf("rain")!== -1) {
      activitiesArray.push("Rainy Weather");
    }else if(split[0].indexOf("snow")!== -1){
      activitiesArray.push("Cold/Snowy Weather");
    }else if(parseFloat(split[0]) < 40){
      activitiesArray.push("Cold/Snowy Weather");
    }else if(parseFloat(split[0]) > 41 && split[0] < 70){
      activitiesArray.push("Chilly Weather");
    }
  }
  return activitiesArray;
}

//change weather image
function weatherImage (weatherArray){
  if(weatherArray.indexOf("Rainy Weather") != -1){
    $('.square').css('background-image', 'url("rainclear.gif")');
  }else if(weatherArray.indexOf("Cold/Snowy Weather") != -1){
    $('.square').css('background-image', 'url("snowclear.gif")');
  }
}

//adds Lists to array of Lists based on activities
function listActivities (activitiesArray, allListsArray, lists){
  var activity;
  var pushMe;
  for (var i = 0; i < activitiesArray.length; i++) {
    for (var j = 0; j < allListsArray.length; j++) {
      activity = activitiesArray[i];
      if (activity === allListsArray[j].listName){
        pushMe = allListsArray[j];
          if (lists.indexOf(pushMe)===-1){
            lists.splice(3, 0, pushMe);
          }
        }
      }
    }
    return lists;
  }

//capitalizes
function capitalize(string) {
  var splitStr = string.split(' ');
  var fullStr = '';
  $.each(splitStr,function(index){
    var currentSplit = splitStr[index].charAt(0).toUpperCase() + splitStr[index].slice(1);
    fullStr += currentSplit + " ";
  });
  return fullStr;
}

//removes white spaces
function cutWhiteSpace(string) {
  return string.replace(/ /g,'');
}


//print functions
//create print element
function PrintElem(elem){
  Popup($(elem).html());
}

//create pop-up for printing
function Popup(data) {
  var mywindow = window.open('', 'my div', 'height=400,width=650');
  mywindow.document.write('<html><head><title>Do I have Everything?</title>');
  mywindow.document.write('<link rel="stylesheet" href="css/mainPrint.css" type="text/css" />');
  mywindow.document.write('</head><body >');
  mywindow.document.write(data);
  mywindow.document.write('</body></html>');

}


