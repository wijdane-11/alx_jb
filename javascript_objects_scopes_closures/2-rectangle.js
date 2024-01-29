#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // Create an empty object
        this.width = undefined;
        this.height = undefined;
      }
    }
  }
  
  // Override the inspect method for util.inspect
  Rectangle.prototype.inspect = function () {
    return 'Rectangle {}';
  };
  
  module.exports = Rectangle;
  