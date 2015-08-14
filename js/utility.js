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
List.prototype.render = function(list){
  $('#packing-list').append("<h4>" + this.listName +"</h4>");
  for (var i = 0; i < this.list.length; i++) {
    $('#packing-list')
      .append('<div><li class="check" ><span id="sib">' + this.list[i].itemName + "        "  + '</span><button class="delete-click btn-xs btn-danger"></button></li><li class="quantity-form"><input class="quantity-btn" type ="number" name="quantity-items" min="1" value ="' + this.list[i].quantity + '"</li><br><br></div>');
  }
};

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

//render all Lists
function renderLists(array){
  $('#packing-list').html(" ");
  for (var i = 0; i < array.length; i++) {
      array[i].render();
    }
  }


//change ListItem amount based on days of travel
function listQuantity(lists, length) {
  for (var i = 0; i < lists.length; i++) {
    for (var j = 0; j < lists[i].list.length; j++) {
      if(lists[i].list[j].quantity === "day"){
        lists[i].list[j].quantity = length;
       }
       else if(lists[i].list[j].quantity === "less"){
        if(length > 12){
          lists[i].list[j].quantity = 6;
        }
        else if(length > 9){
          lists[i].list[j].quantity = 5;
        }
        else if(length === 1){
          lists[i].list[j].quantity = 1;
        }
        else{
        lists[i].list[j].quantity = parseFloat(length)-1;
        }
      }
    }
  }
  return lists;
}

//change Lists amount based on activities
function activityList(activities) {
  if (true) {};

}














