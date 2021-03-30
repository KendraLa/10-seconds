//Start game
function startGame(){
	document.querySelector("#logIn").style.display="none";
	document.querySelector("#game").style.display="block";

	let username = localStorage.getItem('GameName');
	var score = 0;
	$users = JSON.parse(localStorage.getItem('users'));

	$users.find((user) => {
		if(user.username == username)
			score = user.score;
			updateScore(score);

	});
	timeOut(score);
};
function timeOut(score){
		setTimeout(function(){
			document.getElementById("game").style.display="none";
			document.getElementById("puntuaciones").style.display="block";
			document.getElementById("puntuacion").innerHTML= score;
		},10000);
	}

function goHome(){
	document.getElementById("puntuaciones").style.display="none";
	document.getElementById("logIn").style.display="block";
}
function updateScore(score){
	let username = localStorage.getItem('GameName');
	$users = JSON.parse(localStorage.getItem('users'));
	$users.find(user => {
	if(user.username == username){
		user.score += score;
	};
	localStorage.setItem('users',JSON.stringify($users));
	});
};

function puntoAleatorioX(){
	return Math.random() * (85 - 5) + 5;
};

function puntoAleatorioY(){
	return Math.random() * (85 - 0) + 0;
};

var digglet = document.getElementById("digglet");

function reposicion(){
	let score = 1;

	digglet.style.top = parseInt(puntoAleatorioY()) + "%";
	digglet.style.left = parseInt(puntoAleatorioX()) + "%";

	updateScore(score);
};
digglet.addEventListener("click", reposicion);

