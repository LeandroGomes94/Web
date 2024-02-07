'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) =>
{
    const segundos = document.getElementById('segundos');
    const qtdeSegundos = tempo % 60;
    segundos.textContent = formatarDigito(qtdeSegundos);

    const minutos = document.getElementById('minutos');
    const qtdeMinutos = Math.floor((tempo % (60 * 60))/60); 
    minutos.textContent = formatarDigito(qtdeMinutos);

    const horas = document.getElementById('horas');
    const qtdeHoras = Math.floor((tempo % (60 * 60 * 24))/(60 *60)); 
    horas.textContent = formatarDigito(qtdeHoras);

    const dias = document.getElementById('dias');
    const qtdeDias = Math.floor((tempo/(60 *60*24))); 
    dias.textContent = formatarDigito(qtdeDias);
}

const contagemRegressiva = (tempo) =>
{
    const pararContagem = () => clearInterval(id);
    
    const contar = () => 
    {
        if(tempo == 0)
        {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => 
{
    // 1 de janeiro de 1970 - padrão JS
    const dataEvento = new Date('2022-08-17 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) /1000);
}

contagemRegressiva(tempoRestante());