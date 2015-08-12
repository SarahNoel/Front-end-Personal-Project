//create List class
var List = function(listName){
  this.listName = listName;
  this.list = [];
};

//method for adding item to list
List.prototype.packItem = function(item) {
  this.list.push(item);
};

//method for removing item to list
List.prototype.removeItem = function(item) {
  var index;
  index = this.indexOf(item);
  this.splice(index, 1);
};

//method for rendering list
List.prototype.render = function(list){
  $('#packing-list').append("<h3>" + this.listName +"</h3>");
  for (var i = 0; i < this.list.length; i++) {
    $('#packing-list')
      .append('<div><li><span id="sib">' + this.list[i].itemName + "        "  + '</span><button class="delete-click">x</button></li><li class="quantity-form"><input class="quantity-btn" type ="number" name="quantity-items" min="1" value ="' + this.list[i].quantity + '"</li><br></div>');
  }
};


//create ListItem class
var ListItem = function(itemName){
  this.itemName = itemName;
  this.quantity = 1;
};

//method for changing quantity of item
ListItem.prototype.changeQuantity = function(num) {
  this.quantity = num;
};

//method for changing name of item
ListItem.prototype.changeItemName = function(name) {
  this.itemName = name;
};


//delete list item
ListItem.prototype.deleteItem = function(listDelete){
  index = listDelete.list.indexOf(this);
  listDelete.list.splice(index, 1);
};

//print all libraries
function printLists(array){
  $('#packing-list').html(" ");
  for (var i = 0; i < array.length; i++) {
      array[i].render();
    }
  }

//standard list items
var bottoms = new ListItem('Bottoms');
var tops = new ListItem('Tops');
var shoes = new ListItem('Shoes');
var socks = new ListItem('Socks');
var underwear = new ListItem('Underwear');
var pjs = new ListItem('Pajamas');
var belt = new ListItem('Belt');
var jewelry = new ListItem('Jewelry');



//toiletries
var soap = new ListItem('Soap');
var shampoo = new ListItem('Shampoo/Conditioner');
var toothbrush = new ListItem('Toothbrush');
var toothpaste = new ListItem('Toothpaste');
var floss = new ListItem('Floss');
var brush = new ListItem('Brush/Comb');
var contact = new ListItem('Contact Lenses/Solution');
var deodorant = new ListItem('Deodorant');
var face = new ListItem('Face Cleaner');
var sunscreen = new ListItem('Sunscreen');
var lotion = new ListItem('Lotion');
var razor = new ListItem('Razor');
var cream = new ListItem('Shaving Cream');
var makeup = new ListItem('Makeup');
var medication = new ListItem('Medication');
var lip = new ListItem('Lip Balm');
var vitamins = new ListItem('Vitamins');

//misc
var phone = new ListItem('Phone');
var charger = new ListItem('Phone Charger');
var computer = new ListItem('Computer/Charger');
var tablet = new ListItem('Tablet/Charger');
var headphones = new ListItem('Headphones');
var book = new ListItem('Books/eReader');
var keys = new ListItem('Keys');
var cash = new ListItem('Cash');
var wallet = new ListItem('Wallet');
var passport = new ListItem('Passport');
var camera = new ListItem('Camera');
var insurance = new ListItem('Insurance Info');

// var soap = new ListItem('soap');
// var soap = new ListItem('soap');
// var soap = new ListItem('soap');
// var soap = new ListItem('soap');

var standardClothes = new List("Clothes");
standardClothes.list = [
  bottoms,
  tops,
  shoes,
  socks,
  underwear,
  pjs,
  belt,
  jewelry
];

// standardClothes.packItem(bottoms);
var userAdd = new List("Etc");

var standardToiletries = new List("Toiletries");
standardToiletries.list = [
 soap,
 shampoo,
 toothbrush,
 toothpaste,
 floss,
 brush,
 contact,
 deodorant,
 face,
 sunscreen,
 lotion,
 razor,
 cream,
 makeup,
 medication,
 lip,
 vitamins,

];

standardMisc = new List("Miscellaneous");
standardMisc.list = [
 phone,
 charger,
 computer,
 tablet,
 headphones,
 book,
 keys,
 cash,
 wallet,
 passport,
 camera,
 insurance
];


