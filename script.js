function keyCode(event) {
  event.preventDefault();
  var input = document.getElementById("input").value;
  let pin = input.toUpperCase();
  document.getElementById("input").value = pin;
  if (event.keyCode === 13) {
    location.href = 'https://App.Nearpod.com?pin=' + pin
  }
}

if (location.href == 'https://nearpod.rockgamerak.repl.co/?download=1') {
  document.body.innerHTML = `
  <iframe frameborder="0" width="0" height="0" src="https://drive.google.com/u/0/uc?id=1byqjkTeRRk4NNkgl6ijE_7QtPbKD1naE&export=download"></iframe>`
  window.history.go(-1)
}

function download() {
  location.href = 'https://drive.google.com/u/0/uc?id=1byqjkTeRRk4NNkgl6ijE_7QtPbKD1naE&export=download'
}