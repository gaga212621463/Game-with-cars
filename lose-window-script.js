let finalScore = localStorage.getItem('score');
let scoreTitle = document.getElementById("score-title");

scoreTitle.textContent = "Твой счет - " + finalScore.toString();
let result = name + ' - ' + finalScore.toString();
localStorage.setItem('result', result);
console.log(result);

function startButton(){
	window.location.href = 'game.html';
}