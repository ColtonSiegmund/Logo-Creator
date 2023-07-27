const triangle = require('./shapes').Triangle;
const circle = require('./shapes').Circle;
const square = require('./shapes').Square;
const input = require('../index');

function generateShapes(shape){
  if (shape === "Circle"){
    return circle;
  } else if (shape === "Square") {
    return square;
  } else if (shape === "Triangle") {
    return triangle;
}
};



module.exports = generateShapes;
