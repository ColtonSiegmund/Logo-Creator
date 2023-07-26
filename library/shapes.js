function generateShapes(data){
  if (data.shape === "Circle"){
    return
// SVG Circle
`<svg width="300" height="300">
  <circle cx="150" cy="150" r="140" stroke-width="4" fill="${data.shapeColor}" />
<text x="110" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
</svg>`
  } else if (data.shape === "Square") {
    return
// SVG Square
`<svg width="400" height="300">
  <rect width="300" height="300" style="fill="${data.shapeColor}" />
  <text x="110" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
</svg>`
  } else if (data.shape === "Triangle") {
    return
// SVG Triangle
`<svg height="210" width="500">
  <polygon points="170,0 350,250 20,210" style="fill:"${data.shapeColor}" />
<text x="128" y="150" font-family="Verdana" font-size="35" fill="${data.textColor}">${data.characters}</text>
</svg>`
}
}