// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  const im = document.querySelector("img");
  const aud = document.querySelector("audio");
  selectElement.addEventListener("input", (event) => {
    if (selectElement.value == "air-horn") {
      im.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";
    }
    if (selectElement.value == "car-horn") {
      im.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    }
    if (selectElement.value == "party-horn") {
      im.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    }
  });
  // change volume
  const vol = document.getElementById("volume");
  const vol_icon = document.querySelectorAll("img")[1];
  vol.addEventListener("change", (event) => {
    aud.volume = 0.01 * Number(vol.value);
    if (Number(vol.value) == 0) {
      vol_icon.src = "assets/icons/volume-level-0.svg";
    }
    else if (Number(vol.value) >= 1 && Number(vol.value) < 33) {
      vol_icon.src = "assets/icons/volume-level-1.svg";
    }
    else if (Number(vol.value) >= 33 && Number(vol.value) < 67) {
      vol_icon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      vol_icon.src = "assets/icons/volume-level-3.svg";
    }
  });
  // Play sound
  const press = document.querySelector("button");
  const jsConfetti = new JSConfetti()
  press.addEventListener("click", (event) => {
    aud.play();
    if (selectElement.value == "party-horn") {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
  });
}