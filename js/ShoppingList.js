function ShoppingList () {
  this.items = [];
}

ShoppingList.prototype.addItem = function (item) {
  if (item instanceof ListItem) {
    this.items.push(item);
  } else {
    throw 'ERROR: Invalid item type. Only "ListItem"s can be added to the ShoppingList';
  }
};

ShoppingList.prototype.removeItem = function (item) {
  if (item === undefined) {
    this.items.pop();
  } else if (item instanceof ListItem) {
    this.forEach(function (elem, index) {
      if (item === elem) {
        this.splice(index, 1);
      }
    });
  } else {
    throw 'ERROR: Invalid item type. Only "ListItem"s can be removed to the ShoppingList'; 
  }
};

ShoppingList.prototype.render = function () {
  var frontTag = '<ul>';
  var contents = '';
  var endTag = '</ul>';

  this.items.forEach( function (item) {
    contents = contents.concat(item.render());
  });

  return frontTag + contents + endTag;
};