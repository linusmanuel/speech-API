const numeroSecreto = geraNumeroSecreto();

function geraNumeroSecreto() {
	return parseInt(Math.random() * 100);
}

console.log(numeroSecreto);
