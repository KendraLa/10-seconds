//Start game
function startGame(){
	document.querySelector("#logIn").style.display="none";
	document.querySelector("#game").style.display="block";

	let username = localStorage.getItem('GameName');
	var score = 0;
	$users = JSON.parse(localStorage.getItem('users'));

	if($users.find(user => user.username == username)){
		score = user.score;
		updateScore(score);
	};
};




function puntoAleatorioX(){
	return Math.random() * (85 - 5) + 5;
}

function puntoAleatorioY(){
	return Math.random() * (85 - 0) + 0;
}

var digglet = document.getElementById("digglet");

function reposicion(){
	digglet.style.top = parseInt(puntoAleatorioY()) + "%";
	digglet.style.left = parseInt(puntoAleatorioX()) + "%";
}
digglet.addEventListener("click", reposicion);