let a = parseInt(prompt("Com base na equação de Bhaskara: ax² + bx + c = 0\nDigiteo valor de a"));
let b = parseInt(prompt("Com base na equação de Bhaskara: ax² + bx + c = 0\nDigiteo valor de b"));
let c = parseInt(prompt("Com base na equação de Bhaskara: ax² + bx + c = 0\nDigiteo valor de c"));
let delta = b**2-(4*a*c);
    if(delta < 0){
        alert(`Delta é negativo.`);
    }else if(delta > 0){
        let r1 = (-b+Math.sqrt(delta))/(2*a);
        let r2 = (-b-Math.sqrt(delta))/(2*a);
        alert(`Delta é: ${delta}\nAs raízes da equação são:\nr1=${r1}\nr2=${r2}`);

    }else{
        var r = (-b) / (2*a);
        alert(`Delta é: ${delta}\nAs raízes da equação são:\nr1=${r}\nr2=${r}`);
    }