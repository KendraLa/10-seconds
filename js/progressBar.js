
function move(){
	var barra = document.getElementById("contLoadBar1");
	var width = 1;
	var intervalo = setInterval(frame, 30);

	function frame(){
		if(width >= 100){
			clearInterval(intervalo);
			document.getElementById("loadScreen").style.display="none";
			document.querySelector(".sonLeft").style.display="block";
			document.querySelector(".sonRight").style.display="block";
			document.querySelector('header').style.display='block';

		}
		else{
			width+=1;
			barra.style.width = width + "%";
		}

	}
}
move();

