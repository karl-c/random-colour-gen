var html = '';
var numOfDivs = 500;

function print(message) {
  document.write(message);
}

function genNum() {
  return Math.floor(Math.random() * 256);
}

function genColour() {
  var colour = "rgb(";
  colour += genNum() + ",";
  colour += genNum() + ",";
  colour += genNum() + ")";
  return colour;
}

for (var i = 1; i <=numOfDivs; i++) {
  rgbColour = genColour();
  html += '<div style="background-color:' + rgbColour + '"></div>';
}

print(html);
