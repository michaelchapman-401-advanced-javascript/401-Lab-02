'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /**
   * // Remove an item from the beginning of the list and return it's value
   * @returns {*}
   */
  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  /**
   * // add an item to the beginning of the list and return the length
   * @returns {*}
   */
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
  
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  /**
   * // Runs a callback on each item of the list, modifying the values in place
   * @returns {*}
   */
  forEach(callback) {
    for(let i = 0; i < this.length; i++){
      this.data[i] = callback(this.data[i]);
    }
  }
}

module.exports = List;
