function hitungPersegiPanjang() {
  let panjang = prompt("Masukkan panjang rectangle (persegi panjang):");
  let lebar = prompt("Masukkan lebar rectangle (persegi panjang):");

  panjang = parseFloat(panjang);
  lebar = parseFloat(lebar);

  if (isNaN(panjang) || isNaN(lebar)) {
    alert("Mohon masukkan angka yang valid!");
    return;
  }

  let luas = panjang * lebar;
  let keliling = 2 * (panjang + lebar);

  document.getElementById("hasil").innerText =
    "📐 [Rectangle Results]\n" +
    "Luas: " +
    luas +
    "\n" +
    "Keliling: " +
    keliling;
}

function hitungPersegi() {
  let sisi = prompt("Masukkan panjang sisi square (persegi):");

  sisi = parseFloat(sisi);

  if (isNaN(sisi)) {
    alert("Mohon masukkan angka yang valid!");
    return;
  }

  let luas = sisi * sisi;
  let keliling = 4 * sisi;

  document.getElementById("hasil").innerText =
    "⏹️ [Square Results]\n" + "Luas: " + luas + "\n" + "Keliling: " + keliling;
}
