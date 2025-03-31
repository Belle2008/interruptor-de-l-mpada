const lampada = document.getElementById("lampada");

const btnLigar = document.getElementById("Ligar");
btnLigar.addEventListener("click", () => {
    lampada.src = './lampada ligada.png';
    lampada.alt = "lampada acende";
});

const btnDesligar = document.getElementById("Desligar");
btnDesligar.addEventListener("click", () => {
    lampada.src = './lampada-desligada.webp';
    lampada.alt = "lampada desliga";
});

