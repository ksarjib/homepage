var a = new Number(12);
var b = new String("Hello");
var c = new Date(2016, 03, 01);
// Number.prototype, String.prototype, Date.prototype
// are objects with helper methods
// available because objects were created using new() keyword
console.log(a.toString()); // "12"
console.log(b.italics()); // "<i>Hello</i>"
console.log(c.getMonth()); //