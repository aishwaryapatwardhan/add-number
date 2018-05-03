//var loadash = require('lodash');

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.add = function() {
  console.log("This is a message from the add dunction");
   var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
