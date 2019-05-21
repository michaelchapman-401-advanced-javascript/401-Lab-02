'use strict';

const List = require('./list-constructor.js');
const ListClass = require('./list.js');

let stuff = new List();
stuff.push(1);
stuff.push(2);
console.log(stuff);
stuff.forEach((item) => {
  return item+2;
});
console.log(stuff);


