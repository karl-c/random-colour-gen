var html = '';
var numOfDivs = 500;

for (var i = 1; i <=numOfDivs; i++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColour = "rgb(" + red + "," + green + "," + blue + ")";
  html += '<div style="background-color:' + rgbColour + '"></div>';
}

document.write(html);
