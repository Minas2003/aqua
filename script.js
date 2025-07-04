const container = document.querySelector('.kazino-container');
const btn = document.getElementById('spin');
const sectors = ["10.000$", "Iphone 14 PRO", "500$", "Mersedes Benz CLS", "50$", "Дом в Центре Гюмри", "Mistubishi Lancer 9", "Opel Vectra A"];
const sectorAnkyun = 360 / sectors.length;
let deg2 = 0;


btn.onclick = function () {
  const spins = Math.floor(Math.random() * 5) + 5;
  const deg = Math.floor(Math.random() * 360);
  const rotation = spins * 360 + deg;

  deg2 += rotation;

  container.style.transition = '5s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
  container.style.transform = `rotate(${deg2}deg)`;

  setTimeout(() => {
    const normalized = deg2 % 360;
    const index = Math.floor(((360 - normalized + sectorAnkyun / 2) % 360) / sectorAnkyun);
    const result = sectors[index];
    showModal(result);
  }, 5000);
};

function showModal(result) {
  const modal = document.getElementById("winModal");
  const winText = document.getElementById("winText");
  winText.textContent = `Поздравляем, вы выиграли: ${result}`;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("winModal").style.display = "none";
}


