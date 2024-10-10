"use strict";
let incr = 120,
    decr = 120;

incr++;
decr--;
console.log(incr == decr);
console.log(decr++);

const isChecked = true,
    isClose = false;

console.log(isChecked != isClose)