const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (event) => {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
};

window.addEventListener("keydown", (event) => {
  playSound(event.keyCode);
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", (event) => {
    playSound(event.currentTarget.getAttribute("data-key"));
  });
});
