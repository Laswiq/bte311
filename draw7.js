const canvas = document.getElementById("canvas");
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const rowCount = 5;
    const colCount = 5;

    const circleRadius = 50;
    const circleGap = 20; 

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            const centerX = 75 + col * (2 * circleRadius + circleGap);
            const centerY = 75 + row * (2 * circleRadius + circleGap);

            
            const randomColor = getRandomColor();

            ctx.beginPath();
            ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2, true);
            ctx.closePath();

            
            ctx.strokeStyle = randomColor;

            ctx.stroke();
        }
    }
}


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
