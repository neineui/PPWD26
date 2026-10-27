// Mengambil elemen daftar tamu
const daftar = document.getElementById("daftar");

// Menjalankan fungsi saat tombol simpan diklik
document.getElementById("simpan").addEventListener("click", function () {
  // Mengambil nilai dari input
  const nama = document.getElementById("nama").value.trim();
  const instansi = document.getElementById("instansi").value.trim();

  // Memeriksa apakah nama sudah diisi
  if (nama === "") {
    alert("Nama wajib diisi");
    return;
  }

  // Membuat item daftar tamu baru
  const item = document.createElement("li");

  // Memasukkan nama dan instansi ke dalam daftar
  item.textContent = nama + " - " + instansi;

  // Menambahkan item ke halaman
  daftar.appendChild(item);

  // Mengosongkan input setelah data disimpan
  document.getElementById("nama").value = "";
  document.getElementById("instansi").value = "";
});