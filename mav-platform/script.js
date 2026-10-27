// Daftar menu untuk setiap peran pengguna
const menuPerPeran = {
  admin: ["Dashboard", "Kelola pengguna", "Kelola layanan"],
  staf: ["Dashboard", "Layanan saya"],
  tamu: ["Daftar layanan"],
};

// Mengambil elemen pilihan peran dan daftar menu
const pilihPeran = document.getElementById("peran");
const daftarMenu = document.getElementById("menu");

// Fungsi untuk menampilkan menu sesuai peran
function tampilkanMenu() {
  // Mengambil menu berdasarkan peran yang dipilih
  const menu = menuPerPeran[pilihPeran.value];

  // Menghapus menu sebelumnya
  daftarMenu.innerHTML = "";

  // Menampilkan setiap menu ke halaman
  menu.forEach(function (nama) {
    const item = document.createElement("li");
    item.textContent = nama;
    daftarMenu.appendChild(item);
  });
}

// Memperbarui menu saat peran berubah
pilihPeran.addEventListener("change", tampilkanMenu);

// Menampilkan menu saat halaman pertama kali dibuka
tampilkanMenu();