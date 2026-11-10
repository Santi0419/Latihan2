//variabel untuk menyimpan potensi makan kucing 
//dengan nilai awal nol(0)
let porsi = 0

function berimakan() {
  //tambahankan makanan 
  porsi = porsi +1
  updateTampilan()
}
  
  //fungsi untuk memperbarui tampilan html
function updateTampilan() {
    //update angka porsi makan 
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 6) {
    //ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/gendut.jpg"
    //menampilkan tuliasan kucing gemuk
    document.getElementById('setatus kucing').innerText = "kucing gemuk 🐱"
  } else if (porsi >= 5){
    //ganti gambar kucing sedang
    document.getElementById('foto-kucing').src = "gambar/sedeng.jpg"
  //menampilkan rulisan kucing sedang
  document.getElementById('setatus kucing').innerText = "kucing sedeng"
}else {
      //ganti gambar kucing sedang
    document.getElementById('foto-kucing').src = "gambar/kurus.jpg"
  //menampilkan rulisan kucing sedang
  document.getElementById('setatus kucing').innerText = "kucing kurus"
}

}
function ajakmain() {
  // mengurangi porsi 1 jagn sampai negatif 
  if (porsi > 0) {
    porsi = porsi -1
  }
updateTampilan()
}
function reset() {
porsi = 0

updateTampilan()
}
//fungsi untuk memperbarui tampilan html
