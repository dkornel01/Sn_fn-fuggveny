import { SZAMLISTA,SZOVEGLISTA  } from "./adat.js";
console.log(SZAMLISTA)
console.log(SZOVEGLISTA)
$(function () {
    let kevertIndexLista=keveres1(SZAMLISTA)
    console.log(megkevertIndexek)
    for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[index],kevertIndexLista[index],SZAMLISTA[kevertIndexLista[index]])
        
    }
    keveres2();
    rendezes1
    console.log(SZOVEGLISTA)
})

function keveres1(SZAMLISTA){
    function shuffel() {
        let van
        let megkevertIndexek=[]
        let szamok
        while (megkevertIndexek.length<SZAMLISTA.length) {
            szamok=Math.floor(Math.random()*SZAMLISTA.length)
            van=false
            let i=0;
            while (i<megkevertIndexek.length && megkevertIndexek[i]!=szamok) {
                i++
            }
            if (i==meg.length)
            {
                megkevertIndexek.push(szamok)
            }
            
        }
        console.log(megkevertIndexek)
        return megkevertIndexek
    }
}
function keveres2(lista){
    lista.sort();
}
function rendezes1(lista) {
    sort(function(a,b){return a-b});
}
function keveres3(lista) {
    lista.sort(function(a,b){return 0.5 - Math.random()});
    lista.sort((a,b)=>{return 0.5 - Math.random()});    
}