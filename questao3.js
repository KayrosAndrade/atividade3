let nota = parseFloat(prompt("Digite uma nota de 0 a 100"));
    if(nota >= 0 && nota<=100){
        if(nota >= 38){
            if(nota % 5 == 3 || nota%5 == 4){
                notaAtt = nota + (5-(nota % 5));
                alert(`Sua nota atualizada é: ${notaAtt}.\nParabéns! Você foi aprovado.`);
            }else{
                alert(`Sua nota é: ${nota}.\nParabéns! Você foi aprovado.`);
            }
        }else{
            alert("Sua nota é: "+ nota +". Infelizmente você foi reprovado.");
        }
    }else{
        alert(`Nota inválida!`);
    }
