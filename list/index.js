'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
console.log(stuff);
let first = stuff.pop();
console.log(stuff, 'pop');
stuff.push('b');
console.log(stuff);
let last = stuff.shift();
console.log(stuff, 'shift');
console.log(first);
console.log(last);
