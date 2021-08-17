let botaoCalcular = document.getElementById('calcular');
let inputpeso = document.getElementById('inpeso'); 
let inputaltura = document.getElementById('inaltura');
let resultado = document.getElementById('mostrar');

function calculo(){
    //Calculo IMC

    let imc = (inputpeso.value /(inputaltura.value * inputaltura.value)). toFixed(2);
    let alerta = "";
    let descricao = "";
        

    if(imc < 19.10){
        alerta = ("Abaixo do peso!");
        descricao = ("<br>O que pode acontecer?<br> Fadiga, stress, ansiedade");
    }
    else if(imc > 19.10 && imc < 25.89){
        alerta = ("Peso normal!");
        descricao = ("<br>O que pode acontecer?<br> Menor risco de doenças cardíacas e vasculares");
    }
    else if(imc > 25.90 && imc < 27.39){
        alerta = ("Pouco acima do peso!");
        descricao = ("<br>O que pode acontecer?<br> Fadiga, má circulação, varizes");
    }
    else if(imc > 27.40 && imc < 32.39){
        alerta = ("Acima do peso");
        descricao = ("<br>O que pode acontecer?<br> Diabetes, angina, infarto, aterosclerose");
    }
    else if(imc> 32.40){
        alerta = ("Obesidade");
        descricao = ("<br>O que pode acontecer?<br> Apneia do sono, falta de ar");
    }

    resultado.innerHTML = "IMC - " + imc.replace('.',',') + " // " + alerta + " " + descricao;
    alert("IMC - " + imc.replace('.',',') +" // "+ alerta);
    

}

botaoCalcular.onclick = function(){
    calculo();
}

let botaoLimpar = document.getElementById('limpar');

function limpar() {
    document.getElementById('inpeso').value = "";
    document.getElementById('inaltura').value = "";
    resultado.textContent  = "";

}




botaoLimpar.onclick = function(){
    limpar();
}