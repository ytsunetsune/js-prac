var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('Yuya', 'Tsuneoka');
mem.getName = function(){
  return this.lastName + ' ' + this.firstName;
}

document.writeln(mem.getName());
