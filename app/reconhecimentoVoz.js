const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
const outputElement = document.querySelector('[data-result]');

recognition.lang = 'pt-Br';

recognition.onstart = function () {
	console.log('Speech recognition funciounou');
};

recognition.onresult = function (event) {
	const transcript = event.results[0][0].transcript;
	outputElement.textContent = transcript;

	const utterance = new SpeechSynthesisUtterance(transcript);

	utterance.voice = synth.getVoices()[0];

	synth.speak(utterance);

	utterance.voice = synth.getVoices().find(function (voice) {
		return voice.name === 'Google US English';
	});

	utterance.pitch = 1;
	utterance.rate = 1;
	utterance.volume = 1;
};

recognition.start();
