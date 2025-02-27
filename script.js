let con = document.querySelector(".content");
var cc = "";
var num;
let sco = 0;
function makebubble() {
  for (let i = 1; i < 97; i++) {
    cc += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  con.innerHTML = cc;
}
makebubble();
let hit = document.querySelector("#hit");
function gethit() {
  num = Math.floor(Math.random() * 10);
  hit.textContent = num;
}
gethit();
let time = 60;
let timer = document.querySelector("#timer");
function runtimer() {
  var timeint = setInterval(function () {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(timeint);
      con.innerHTML = `<div style="text-align:center"><h1>Game Over</h1><br/><h2>Score: ${sco}</h2></div>`;
    }
  }, 1000)
}
runtimer();
let score = document.querySelector("#score");
function getscore() {
  sco += 10;
  score.textContent = sco;
}
document.querySelector(".content").addEventListener('click', (e) => {
  let num1 = Number(e.target.textContent);
  if (num == num1) {
    getscore();
    cc = "";
    makebubble();
    gethit();
  }
})