var pageShoppingList = new ShoppingList();


// Starter Items

var firstItem = new ListItem('grapes','delicious individually wrapped snacks');
var secondItem = new ListItem('apples','the main staple fruit');
var thirdItem = new ListItem('oranges','face away from face when peeling');
var fourthItem = new ListItem('pinapple','oh so good');
var fifthItem = new ListItem('star fruit','sooo pretty');


pageShoppingList.addItem(firstItem);
pageShoppingList.addItem(secondItem);
pageShoppingList.addItem(thirdItem);
pageShoppingList.addItem(fourthItem);
pageShoppingList.addItem(fifthItem);

document.getElementById('shopping-list').innerHTML = pageShoppingList.render();