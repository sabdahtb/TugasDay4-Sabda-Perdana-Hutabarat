function kabisat(tahun) {
    if(tahun % 400 === 0){
        return "KABISAT"
    }else if(tahun % 400 !== 0 && tahun % 100 ===0){
        return "BUKAN KABISAT"
    }else if(tahun % 400 !== 0 && tahun % 4 === 0){
        return "KABISAT"
    }else if(tahun % 4 !== 0) {
        return "BUKAN KABISAT"
    }
}

console.log(kabisat(1900))
console.log(kabisat(2000))
console.log(kabisat(2001))
console.log(kabisat(2016))
