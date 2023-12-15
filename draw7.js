
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

       


ctx.beginPath();
for (let i=0;i<6;i++)
{
    ctx.arc(75+i*125, 75, 50, 0, Math.PI * 2, true); // Outer circle

}
ctx.stroke();
    
    
  }
