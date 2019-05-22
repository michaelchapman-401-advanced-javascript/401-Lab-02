'use strict';

const errorHandler = require('./error-handler.js');

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
    try {
      this.data[this.length] = item;
      this.length++;
    }
    catch(e) {
      let error = {
        timestamp: new Date(),
        severity: 0,
        reason: 'Could not push',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
    
      errorHandler.err(error);
    }
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    try {
      let returnValue = this.data[this.length];
      delete this.data[this.length];
      this.length--;
      return returnValue;
    }
    catch(e) {
      let error = {
        timestamp: new Date(),
        severity: 0,
        reason: 'Could not pop',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
    
      errorHandler.err(error);
    }
  }

  /**
   * // Remove an item from the beginning of the list and return it's value
   * @returns {*}
   */
  shift() {
    try {
      let returnValue = this.data[0];
      delete this.data[0];
      this.length--;
      
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i+1];
      }

      return returnValue;
    }
    catch(e) {
      let error = {
        timestamp: new Date(),
        severity: 0,
        reason: 'Could not shift',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
    
      errorHandler.err(error);
    }
  }

  /**
   * // add an item to the beginning of the list and return the length
   * @returns {*}
   */
  unshift(item) {
    try {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i-1];
      }
    
      this.data[0] = item;
      this.length++;
      return this.length;
    }
    catch(e) {
      let error = {
        timestamp: new Date(),
        severity: 0,
        reason: 'Could not shift',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
    
      errorHandler.err(error);
    }
  }

  /**
   * // Runs a callback on each item of the list, modifying the values in place
   * @returns {*}
   */
  forEach(callback) {
    try {
      for(let i = 0; i < this.length; i++){
        this.data[i] = callback(this.data[i]);
      }
    }
    catch(e) {
      let error = {
        timestamp: new Date(),
        severity: 0,
        reason: 'Could not shift',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
    
      errorHandler.err(error);
    }
  }
}

module.exports = List;
