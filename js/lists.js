//LIST ITEMS

//standard items
//clothes
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
var shampoo = new ListItem('Shampoo/Cond.');
var toothbrush = new ListItem('Toothbrush');
var toothpaste = new ListItem('Toothpaste');
var floss = new ListItem('Floss');
var brush = new ListItem('Brush/Comb');
var blowDryer = new ListItem('Blow Dryer');
var contact = new ListItem('Contact Lens/Sol.');
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
var firstAidKit = new ListItem('First Aid Kit');

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


//specialty items
//swim vacation
var swimsuit = new ListItem('Swimsuit');
var towel = new ListItem('Towel');
var beachUmbr = new ListItem('Beach Umbrella');
var sandals = new ListItem('Sandals');
var beachBag = new ListItem('Beach Bag');
var sunglasses = new ListItem('Sunglasses');
var sunHat = new ListItem('Sun Hat');
var coverUp = new ListItem('Cover Up');
var beachChair = new ListItem('Beach Chair');
var aloeVera = new ListItem('Aloe Vera');

//ski vacation
var skiBoots = new ListItem('Ski Boots');
var skis = new ListItem('Skis/Board');
var helmet = new ListItem('Helmet');
var layers = new ListItem('First Layer');
var goggles = new ListItem('Goggles');
var skiSocks = new ListItem('Thick Socks');
var skiCoat = new ListItem('Ski Coat');
var snowPants = new ListItem('Snow Pants');

//additional items
var userA = new ListItem('Add your own!');

//for cold
var sweater = new ListItem('Sweater');
var coat = new ListItem('Coat');

//for rain
var raincoat = new ListItem('Raincoat');
var umbrella = new ListItem('Umbrella');
var rainBoots = new ListItem('Rain Boots');

// for snow
var snowBoots = new ListItem('Snow Boots');
var beanie = new ListItem('Hat/Beanie');
var gloves = new ListItem('Gloves');
var scarf = new ListItem('Scarf');

//for camping
var tent = new ListItem('Tent');
var stakes = new ListItem('Stakes');
var stove = new ListItem('Cooking Stove');
var matches = new ListItem('Matches');
var lantern = new ListItem('Lantern');
var sleepingBag = new ListItem('SleepingBag');
var rope = new ListItem('Rope');
var food = new ListItem('Food');
var water = new ListItem('Water');

//for hiking
var hikingBoots = new ListItem('Hiking Boots');
var woolSocks = new ListItem('Wool Socks');
var bugSpray = new ListItem('Bug Spray');
var backpack = new ListItem('Backpack');
var jacket = new ListItem('Jacket');
var tp = new ListItem('Toilet Paper');


//-----------------------------------------------------------------

//LISTS
//chilly list- 50-70
var chillyList= new List("Chilly Weather");
chillyList.list = [
  sweater,
  jacket,

]


//cold list - < 50 or snow
var coldList = new List("Cold/Snowy Weather");
coldList.list = [
  sweater,
  coat,
  snowBoots,
  beanie,
  gloves,
  scarf
  ];

//rain list - rain
var rainList = new List("Rainy Weather");
rainList.list = [
  sweater,
  raincoat,
  umbrella,
  rainBoots
  ];

//camp list
var campList = new List("Camping");
campList.list = [
  tent,
  stakes,
  stove,
  matches,
  lantern,
  sleepingBag,
  rope,
  food,
  water
];

//hiking list
var hikeList = new List("Hiking");
hikeList.list = [
  hikingBoots,
  woolSocks,
  bugSpray,
  backpack,
  jacket,
  water,
  tp
];


//swim list
var swimTrip = new List("Swimming");
swimTrip.list = [
  swimsuit,
  towel,
  beachUmbr,
  sandals,
  beachBag,
  sunglasses,
  sunHat,
  coverUp,
  beachChair,
  aloeVera
  ];


//ski list
var skiTrip = new List("Ski/Snowboard");
skiTrip.list = [
  skiBoots,
  skis,
  snowBoots,
  beanie,
  gloves,
  scarf,
  helmet,
  layers,
  goggles,
  skiSocks,
  skiCoat,
  snowPants,
];


//pre-populated general lists
var userAdd = new List("Etc");
userAdd.list = [
  userA
  ];

//clothing list
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

//toiletries list
var standardToiletries = new List("Toiletries");
standardToiletries.list = [
 soap,
 shampoo,
 toothbrush,
 toothpaste,
 floss,
 brush,
 blowDryer,
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
 firstAidKit
];

//misc list
var standardMisc = new List("Miscellaneous");
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

//all Lists
var allLists = [standardClothes, standardToiletries, standardMisc, userAdd, skiTrip, swimTrip, campList, hikeList, rainList, coldList, chillyList];

//standard lists for all occasions
var lists = [standardClothes, standardToiletries, standardMisc, userAdd];
