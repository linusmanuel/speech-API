function verificaChute(chute) {
	const numero = +chute;
	if (chuteForNaN(numero)) {
		console.log('Valor inválido!');
	}

	if (chuteForMaiorOuMenor(numero)) {
		console.log(
			`Valor inválido: O chute deve estar entre ${menorValor} e ${maiorValor}`
		);
	}
}

function chuteForNaN(numero) {
	return Number.isNaN(numero);
}

function chuteForMaiorOuMenor(numero) {
	return numero > maiorValor || numero < menorValor;
}
