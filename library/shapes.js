// const generShapes = require('./generateShapes')

// function generateShapes(shape) {
//   const circle = new Circle.render();
//   const square = new Square.render();
//   const triangle = new Triangle.render();

//   if (shape === "Circle") {
//     return circle;
//   } else if (shape === "Square") {
//     return square;
//   } else if (shape === "Triangle") {
//     return triangle;
//   }
// };

class Shapes {
  // constructor(children = []) {
  //   this.children = children;
  // }
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  // render() {
  //   throw new Error('Child class must implement a render() method.');
  // }
  // renderInnerHtml() {
  //   return this.children
  //     .map((child) => {
  //       if (typeof child === 'string') {
  //         return child;
  //       }
  //       return child.render();
  //     })
  //     .join('');
  // }
};

class Circle extends Shapes {
  render() {
    // return `<svg width="300" height="300"> 
  return `<circle cx="150" cy="150" r="140" fill="${this.color}" />`
// <text x="110" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
// </svg>`;
  }
};

class Square extends Shapes {
  render() {
  return `<rect width="300" height="300" style="fill="${this.color}" />`
//   <text x="110" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
// </svg>`;
  }
};

class Triangle extends Shapes {
  render() {
  return `<polygon points="170,0 350,250 20,210" style="fill:"${this.color}" />`
// <text x="128" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
// </svg>`;
  }
};


module.exports = { Circle, Square, Triangle };