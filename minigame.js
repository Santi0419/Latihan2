//variabel untuk menyimpan potensi makan kucing 
//dengan nilai awal nol(0)
let porsi = 0
 
// siapkan aset di variabel 
let suaramakan  = new Audio("minigame/makan.mp3")
let suaramain = new Audio("minigame/main.mp3")
let suarariset = new Audio("minigame/raset.mp3")

function berimakan() {
  //efek suara makan 
  suaramakan.currentTime =0
  suaramakan.play()
  // 1 ambil teks dari input kotak teks
  let teksinput = document.getElementById('input-makanan').value
  // 2 ubah string menjadi angka 
  let jumlahmakanan = Number(teksinput)
  // 3 oprasi penjumlahan anggka
porsi = porsi + jumlahmakanan
  
  updateTampilan()
}
  
  //fungsi untuk memperbarui tampilan html
function updateTampilan() {
    //update angka porsi makan 
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 10) {
    //ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/gendut.jpg"
    //menampilkan tuliasan kucing gemuk
    document.getElementById('setatus kucing').innerText = "kucing gemuk 🐱"
  } else if (porsi >= 20){
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
    suaramain.currentTime = 0
    suaramain.play()
  }
updateTampilan()
}

function reset() {
porsi = 0
suarariset.currentTime = 0
suarariset.play()


updateTampilan()
}
//fungsi untuk memperbarui tampilan html
