const text = "Jody, will you be my Valentine?";
let i = 0;
let noCount = 0;
let musicStarted = false;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}
typeText();

function startMusic() {
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }
}

function noClick() {
  noCount++;
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  btn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount >= 3) {
    btn.style.display = "none";
  }
}

function yesClick() {
  document.getElementById("final").style.transform = "scale(1)";
  launchConfetti();
}

function launchConfetti() {
  const confetti = document.getElementById("confetti");
  for (let i = 0; i < 60; i++) {
    const span = document.createElement("span");
    span.innerHTML = "💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.appendChild(span);
  }
}
