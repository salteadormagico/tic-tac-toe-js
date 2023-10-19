document.addEventListener('DOMContentLoaded', function() {
	const celdas = [];
	const ganadorB = document.getElementById('ganador');
	var ganador;
	for(i = 1; i < 10; i++) {
		let celda = document.getElementById(i);
		celdas.push(celda);
	}
	console.log(celdas);
	celdas.forEach((e) => e.innerHTML = e.id);
	celdas.forEach((e) => e.addEventListener('click', function() {
		e.innerHTML = "X";
		let numsiguales = 0;
		console.log(e.id);
		jugador.push(e.id);
		console.log(jugador);
		if(jugador.length === 3) {
			console.log(play(jugador));
			restart();
}
		}));
    const winningCombination = [
        ['1', '2', '3'], 
		['4', '5', '6'], 
		['6', '7', '8'], 
		['1', '4', '7'], 
		['2', '5', '8'], 
		['3', '6', '9'], 
		['1', '5', '9'], 
		['3', '5', '7']
    ];
    function getRandomInt(max) {
    	return Math.floor(Math.random * max);
    }
        function play(jugador /*maquina*/) {
    	let aciertos = 0;
    	let n = 0;
    	for (i = 0; i < jugador.length; i++) {
    		for (j = 0; j < winningCombination.length; j++) {
    			for (x = 0; x < winningCombination[j].length; x++) {
    				if (jugador[i] === winningCombination[j][x]) {
    					aciertos++;
    				}
    			}
    		}
    	}
    }


    function restart() {
    	celdas.forEach((e) => e.innerHTML = e.id);
    	jugador = [];
    	maquina = [];
    }
    function setGanador(ganador) {
    	ganadorB.innerHTML = ganador;
    }
    function setTurno(n) {
    	n++;
    	if (n % 2 === 0) {
    		turno = 0;
    	} else {
    		turno = 1;
    	}
    	return turno;
    }

    let jugador = []
    let máquina = []
    let máquinaOpc = getRandomInt(9);
});