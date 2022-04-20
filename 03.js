function ganjinGenap(no) {
    if(no % 2 === 0){
        return "GENAP"
    }else{
        return "GANJIL"
    }
}

console.log(ganjinGenap(43));
console.log(ganjinGenap(1034));