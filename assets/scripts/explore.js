// explore.js

window.addEventListener('DOMContentLoaded', init);

const press = document.querySelector("button");
const inputTxt = document.querySelector("textarea");
const im = document.querySelector("img");
// from suggested website example code
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector('select');

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function action() {
  press.addEventListener("click", (event) => {
    // from suggested website example code
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    im.src = "assets/images/smiling-open.png";
    synth.speak(utterThis);
    utterThis.addEventListener("end", (event) => {
      im.src = "assets/images/smiling.png";
    });
    inputTxt.blur();
  });
}

function init() {
  // TODO
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  action();
}