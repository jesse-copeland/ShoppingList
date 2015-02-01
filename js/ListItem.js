function ListItem (name, description) {
  this.name = name;
  this.description = description;
  this.isDone = false;

}

ListItem.prototype.check = function () {
  this.isDone = true;
};

ListItem.prototype.unCheck = function () {
  this.isDone = false;
};

ListItem.prototype.render = function () {
  var htmlResult = '<li class="completed-' + this.is_done + '">' +
                      '<span>' + this.name + '</span>' +
                      '<span>' + this.description + '</span>' +
                    '</li>';
  return htmlResult;
};