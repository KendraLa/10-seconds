//Start game
function startGame(){
	document.querySelector("#logIn").style.display="none";
	document.querySelector("#game").style.display="block";

	let username = localStorage.getItem('GameName');
	var score = 0;
	$users = JSON.parse(localStorage.getItem('users'));

	$users.find((user) => {
		if(user.username == username)
			user.score = 0;
			localStorage.setItem('users',JSON.stringify($users));
			updateScore();
	});
	ranking($users);
};

function updateScore(){
	localStorage.setItem('users',JSON.stringify($users));
	ranking($users);
};

function puntoAleatorioX(){
	return Math.random() * (85 - 5) + 5;
};

function puntoAleatorioY(){
	return Math.random() * (85 - 0) + 0;
};

var digglet = document.querySelector('.digglet');

function reposicion(){

	var digglet = document.querySelector('.digglet');
	digglet.classList.remove('digglet');
	void digglet.offsetWidth;
	digglet.classList.add('digglet');

	digglet.style.top = parseInt(puntoAleatorioY()) + "%";
	digglet.style.left = parseInt(puntoAleatorioX()) + "%";

	//Update score
	let username = localStorage.getItem('GameName');
	$users = JSON.parse(localStorage.getItem('users'));
	$users.find(user => {
		if(user.username == username){
			user.score += 1;
		};
	});
	//Set score
	updateScore();
};
if(digglet){
	digglet.addEventListener("click", reposicion);
};