const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
const elementoChute = document.querySelector('#chute');

recognition.lang = 'pt-Br';

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
	const chute = e.results[0][0].transcript;
	exibeChuteNaTela(chute);
	verificaChute(chute);
}

function exibeChuteNaTela(chute) {
	elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `;
}

recognition.addEventListener('end', () => {
	recognition.start();
});
recognition.start();
