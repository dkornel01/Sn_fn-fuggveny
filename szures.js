export function Szures(lista,kulcs,szuresfeltetel){
    const RESULT =lista.filter(function(a){
        return a[kulcs].includes(szuresfeltetel)
    });
    return RESULT
}