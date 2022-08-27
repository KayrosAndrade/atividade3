const l1 =parseFloat(prompt("Digite o valor do 1ª lado do triângulo:"));
const l2 =parseFloat(prompt("Digite o valor do 2ª lado do triângulo:"));
const l3 =parseFloat(prompt("Digite o valor do 3ª lado do triângulo:"));
    if(l1 > 0 && l2 > 0 && l3 > 0){
        if(l1 == l2 && l2 == l3){
            alert("O triângulo é equilátero");
        }else if(l1 == l2 || l1 == l3 || l2 == l3){
            alert("O triângulo é isóceles.");
        }else{
            alert("O triângulo é escaleno.");
        }
    }else{
        alert("Não é um triângulo.");
    }
