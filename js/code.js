String.prototype.filter = function(remove) {
  let arr = this.split(' ');
  return arr.filter(e => e !== remove)
  .join(' ');
}

console.log('This is a nice sentence'.filter('nice'));

Array.prototype.bubbleSort = function() {
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = 0; j < this.length - i - 1; j++) {
      if(this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j+1];
        this[j+1] = temp;
      }
    }
  }
  return this;
};
[9,8,7,6,5,4,3,2,1].bubbleSort();

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
}

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.initialize = function(name) {
  this.name = name;
}
Teacher.prototype.teach = function(subject) {
  return this.name + ' is now teaching ' + subject;
};
var teacher = new Teacher();
teacher.initialize('Michael Ziljstra');
console.log(teacher.teach('WAP'));