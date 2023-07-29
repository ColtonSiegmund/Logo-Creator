
class Shapes {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
};

class Circle extends Shapes {
  render() {
  return `<circle cx="150" cy="150" r="140" fill="${this.color}" />`
  }
};

class Square extends Shapes {
  render() {
  return `<rect width="300" height="300" fill="${this.color}" />`
  }
};

class Triangle extends Shapes {
  render() {
  return `<polygon points="170,0 350,250 20,210" fill="${this.color}" />`
// <text x="128" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
// </svg>`;
  }
};


module.exports = { Circle, Square, Triangle };