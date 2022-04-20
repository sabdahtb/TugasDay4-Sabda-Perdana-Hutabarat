// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

// Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
// Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
// Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
// Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.
// Contoh:
// Input: 15
// Output: Remaja

function rating(umur) {
    if(umur >= 21)return "DEWASA";
    else if(umur >= 13) return "REMAJA";
    else if(umur >= 9) return "BIMBINGAN ORANG TUA";
    else if(umur < 9) return "SEMUA USIA";
}

console.log(rating(15))
console.log(rating(32))