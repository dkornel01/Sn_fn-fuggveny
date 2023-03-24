function RendezesKorSzerint(lista){
    lista.sort(function(a,b){
        return a.kor-b.kor;
    })
}
function RendezesNevSzerint(lista,kulcs) {
    lista.sort(function (a,b){
        let ertek=1;
        if (a[kulcs].toUpperCase()<b[kulcs].toUpperCase()){
            ertek=-1
        }
        return ertek
    })
}
  export  function Rendezes(lista,kulcs){
            if (typeof lista[0][kulcs]==="number"){
                RendezesKorSzerint(lista,kulcs)
            }
            else {
                RendezesNevSzerint(lista,kulcs)
            }
    }
   export function Rendezes2(lista,kulcs) {
        lista.sort(function(a,b){
            return a[kulcs].localeCompare(b[kulcs])
        })
    }