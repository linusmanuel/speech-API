const menorValor = 0;
const maiorValor = 400;

function geraNumeroAleatorio() {
	return parseInt(Math.random() * maiorValor + 1);
}

const elementoMaiorValor = document.querySelector('#maior-valor');
const elementoMenorValor = document.querySelector('#menor-valor');
elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;
const numeroSecreto = geraNumeroAleatorio();
console.log(numeroSecreto);
