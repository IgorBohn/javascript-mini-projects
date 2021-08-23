const turn = document.getElementById("turn");
const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}

function lampOnOff() {
  if (turn.textContent == "Ligar") {
    lampOn();
    turn.textContent = "Desligar";
  } else {
    lampOff();
    turn.textContent = "Ligar";
  }
}

turn.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
lamp.addEventListener("dblclick", lampBroken);
