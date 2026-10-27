//variabel untuk menyimpan potensi makan kucing 
//dengan nilai awal nol(0)
let porsi = 0

function berimakan() {
  // tambah porsi makan +1
  porsi = porsi +1
  //update angka porsi makan 
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >=6 ) {
    //ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src="gambar/gendut.jpg"
    //menampilkan tuliasan kucing gemuk
    document.getElementById('status kucing').innerText="kucing gemuk 🐱"
  } else if (porsi >=5) 
  //ganti gambar kucing sedang
  document.getElementById('foto-kucing').src = "gambar/sedeng.jpg"
  //menampilkan rulisan kucing sedang
  document.getElementById('setatus-kucing').innerText ="kucing sedeng"
}