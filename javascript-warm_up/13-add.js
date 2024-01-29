// 13-add.js
#!/usr/bin/node

// Function to add two integers
function add(a, b) {
  return a + b;
}

// Make the function visible from outside by exporting it
module.exports = {
  add: add
};
