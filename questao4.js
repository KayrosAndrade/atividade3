let r = parseInt(prompt(`Tamanho do Array`));
function LuidyMoura(r){
     return [...Array(r).keys()]
     .map(x => x+1)
     .map(x => x % 45 == 0? 'LuidyMoura':x)
     .map(x => x % 9 == 0? 'Moura': x)
     .map(x => x % 5 == 0? 'Luidy': x); 
}
alert(LuidyMoura(r));