
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


