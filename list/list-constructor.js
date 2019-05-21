'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

/**
 * // Remove an item from the beginning of the list and return it's value
 * @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};

/**
 * // add an item to the beginning of the list and return the length
 * @returns {*}
 */
List.prototype.unshift = function(item) {
  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i-1];
  }

  this.data[0] = item;
  this.length++;
  return this.length;
};

/**
 * // Runs a callback on each item of the list, modifying the values in place
 * @returns {*}
 */
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    this.data[i] = callback(this.data[i]);
  }
};

module.exports = List;
