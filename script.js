let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let nome = document.querySelector('#nome').value;
  let altura = document.querySelector('#altura').value;
  let peso = document.querySelector('#peso').value;

  // validação antes de enviar os parâmetros
  if(peso.includes(',') == true || altura.includes(',') == true) {
    peso = peso.replace(',', '.'); // evita que ao realizar o cálculo, o imc retorne NaN
    altura = altura.replace(',', '.'); // evita que ao realizar o cálculo, o imc retorne NaN
  }

  calcularImc(nome, altura, peso);
})

function calcularImc(nome, altura, peso){
  let div = document.querySelector('#imc');

  let imc = (Number(peso) / Math.pow(Number(altura), 2)).toFixed(2);

  if(imc < 18.5){
    div.innerHTML = `${nome}, seu imc é ${imc} e você está abaixo do peso.`

  } else if (imc >= 18.5 && imc <= 24.9) {
    div.innerHTML = `${nome}, seu imc é ${imc} e seu peso está normal.`

  } else if (imc >= 25 && imc <= 29.9){
    div.innerHTML = `${nome}, seu imc é ${imc} e você está com sobrepeso.`

  } else if(imc >= 30 && imc <= 39.9){
    div.innerHTML = `${nome}, seu imc é ${imc} e você está com obesidade.`

  } else {
    div.innerHTML = `${nome}, seu imc é ${imc} e você está com obesidade grave.`
  }
}