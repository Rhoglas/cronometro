let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;


let cron;


function iniciar() {
    parar();
    cron = setInterval(() => tempo(), 10);
}

function parar() {
    clearInterval(cron);
}

function zerar() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
}

function tempo() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    } else if (second == 60) {
        second = 0;
        minute++;
    } else if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}


function salvar() {
    let ret0 = document.getElementById('hour').innerText = returnData(hour);
    let ret1 = document.getElementById('minute').innerText = returnData(minute);
    let ret2 = document.getElementById('second').innerText = returnData(second);
    let ret3 = document.getElementById('millisecond').innerText = returnData(millisecond);

    let list = document.getElementById('tempos').innerHTML;
    let result = ret0 + ' ' + ret1 + ' ' + ret2 + ' ' + ret3;

    console.log(result);


    list += "<li>" + ' Seu melhor tempo : ' + result + "</li>";

    document.getElementById('tempos').innerHTML = list;


}

function apagar() {
    list = location.reload()
}