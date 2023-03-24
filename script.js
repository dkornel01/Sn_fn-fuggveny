import { SZAMLISTA,SZOVEGLISTA,OBJEKTUMLISTA  } from "./adat.js";
import {Rendezes,Rendezes2} from "./rendezes.js"
import {Szures} from "./szures.js"
console.log(SZAMLISTA)
console.log(SZOVEGLISTA)
$(function () {
    /*let kevertIndexLista=keveres1(SZAMLISTA)
    console.log(megkevertIndexek)
    for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[index],kevertIndexLista[index],SZAMLISTA[kevertIndexLista[index]])
        
    }
    keveres2();
    rendezes1*/
    console.log(SZOVEGLISTA)
    //RendezesKorSzerint(OBJEKTUMLISTA)
    //RendezesNevSzerint(OBJEKTUMLISTA,"kor")
    Rendezes(OBJEKTUMLISTA,"kor")
    //Rendezes2(OBJEKTUMLISTA,"nev")
    console.log(OBJEKTUMLISTA)
    const NEVINPUTELEM=$("#nev")
    const FAJTAINPUTELEM=$("#fajta")
    //let nevErtek=NEVINPUTELEM.val()
    //let fajErtek=FAJTAINPUTELEM.val()
    //console.log(Szures(OBJEKTUMLISTA,"fajta","keverék"))
    NEVINPUTELEM.on("keyup",function(){
        let nevErtek=NEVINPUTELEM.val()
        let szureslista=Szures(OBJEKTUMLISTA,"nev",nevErtek)
        console.log(szureslista)
    })
    
})


    

/*function keveres1(SZAMLISTA){
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
}*/