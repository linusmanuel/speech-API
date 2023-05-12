function verificaChute(chute) {
	const numero = +chute;

	if (chuteForNaN(numero)) {
		elementoChute.innerHTML += `<div>Valor inválido!</div>`;
	}

	if (chuteForMaiorOuMenor(numero)) {
		elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e 
    ${maiorValor}</div>`;
		return;
	} else if (numero > numeroSecreto) {
		elementoChute.innerHTML += `
      <div>Numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>`;
	} else {
		elementoChute.innerHTML += `
      <div>Numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>`;
	}

	if (numero === numeroSecreto) {
		document.body.innerHTML = `
    <h2>Você venceu!</h2>
    <h3>O número secreto é: ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
    `;

		document.body.addEventListener('click', (e) => {
			const botao = document.getElementById(`${e.target.id}`);
			if (botao) {
				window.location.reload();
			}
		});
		return;
	}
}

function chuteForNaN(numero) {
	return Number.isNaN(numero);
}

function chuteForMaiorOuMenor(numero) {
	return numero > maiorValor || numero < menorValor;
}
