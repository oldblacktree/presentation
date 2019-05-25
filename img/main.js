const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");
const img = document.getElementById("image");
//drow circle
ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.arc(349, canvas.height / 2, 238, 0, 2 * Math.PI);
ctx.lineWidth = '8'
ctx.stroke();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "#000";
ctx.arc(349, canvas.height / 2, 171, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.drawImage(img, 0, 95);
// ctx.beginPath()
// ctx.fillStyle = "#000";
// ctx.font = "50px Righteous";
// ctx.fillText(text, 10, 50);
// ctx.closePath();

let angle = 0;
const text = 'HTML CSS NODE.JS        JAVASCRIPT      ';



function clear() { 
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // Основная функция вывода сцены
  clear(); // Очистка элемента canvas
  angle -= 0.005;
  drawTextCircle(text, 349 , canvas.height / 2, 185, Math.PI / 2 - angle);
    
    }
    function drawTextCircle(s, x, y, radius, iSAngle) {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.arc(349, canvas.height / 2, 238, 0, 2 * Math.PI);
      ctx.lineWidth = "8";
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.arc(349, canvas.height / 2, 171, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      // ctx.beginPath();
      // ctx.drawImage(img, 10, 10);
      // ctx.closePath();
      ctx.font = "40px Righteous";
      ctx.fillStyle = "#000";
      var fRadPerLetter = 2 * Math.PI / s.length;
      // Сохраняем контекст, переводим и вращаем его
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(iSAngle);
      for (var i = 0; i < s.length; i++) {
        
        ctx.save();
        ctx.rotate(i * fRadPerLetter);
        ctx.fillText(s[i], 0, -radius);
        ctx.restore();
      }
      ctx.restore();

      ctx.drawImage(img, 0, 95);

    }



    function main_init() {
      setInterval(drawScene, 40); // Выводим сцену
    }

window.onload = main_init;