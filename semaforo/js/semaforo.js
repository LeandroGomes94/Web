const semaforoVerde = document.getElementById('verde');
const semaforoAmarelo = document.getElementById('amarelo');
const semaforoVermelho = document.getElementById('vermelho');
const semaforo = document.getElementById('semaforo');

function mudaVerde()
{
    semaforo.src = './img/verde.png';
}

function mudaAmarelo()
{
    semaforo.src = './img/amarelo.png';
}

function mudaVermelho()
{
    semaforo.src = './img/vermelho.png';
}

function desligaSemaforo()
{
    semaforo.src = './img/desligado.png';
}

semaforoVerde.addEventListener('click', mudaVerde)
semaforoAmarelo.addEventListener('click', mudaAmarelo)
semaforoVermelho.addEventListener('click', mudaVermelho)
semaforo.addEventListener('dblclick', desligaSemaforo)