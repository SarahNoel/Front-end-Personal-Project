//standard list items
var bottoms = new ListItem('Bottoms', 'less');
var tops = new ListItem('Tops', 'day');
var shoes = new ListItem('Shoes');
var socks = new ListItem('Socks', 'day');
var underwear = new ListItem('Underwear', 'day');
var pjs = new ListItem('Pajamas', 'less');
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

//additional items
var sweater = new ListItem('Sweater');

var raincoat = new ListItem('Raincoat');
var umbrella = new ListItem('Umbrella');
var coat = new ListItem('Coat');
var rainBoots = new ListItem('Rain Boots');

var snowBoots = new ListItem('Snow Boots');
var beanie = new ListItem('Hat/Beanie');
var gloves = new ListItem('Gloves');
var scarf = new ListItem('Scarf');

//swim vacation
var swimsuit = new ListItem('Swimsuit');
var towel = new ListItem('Towel');


//ski vacation
var skiBoots = new ListItem('Ski Boots');
var skis = new ListItem('Skis');
// var towel = new ListItem('Towel');
// var towel = new ListItem('Towel');
// var towel = new ListItem('Towel');
// var towel = new ListItem('Towel');
// var towel = new ListItem('Towel');
// var towel = new ListItem('Towel');


//mountain vacation


//pre-populated lists
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

var lists = [standardClothes, standardToiletries, standardMisc, userAdd];

