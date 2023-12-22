var square = document.getElementById("square");
var usedColors = [];

for (var i = 0; i < 100; i++) {
    var circle = document.createElement("div");
    circle.className = "circle";

    var randomColor = getRandomColor();

    circle.style.borderColor = randomColor;

    circle.style.top = Math.floor(i / 10) * 40 + "px";
    circle.style.left = (i % 10) * 40 + "px";

    square.appendChild(circle);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
