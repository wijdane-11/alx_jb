// 2-rectangle.js
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
  
  module.exports = Rectangle;
  