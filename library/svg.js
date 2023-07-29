class SVG {
  constructor() {
    this.logoText = "";
    this.logoShape = "";
  
  }
  render() {
    return `<svg width="300" height="200">${this.logoShape}${this.logoText}</svg>` 
}
setText(message, color) {
  if (message.length > 3){
    throw new Error('Logo cannot have more than 3 characters')
  }
  this.logoText = `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
}
setShape(shape){
  this.logoShape = shape.render()
}
}

module.exports = SVG;