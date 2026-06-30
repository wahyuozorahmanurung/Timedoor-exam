function rice() {
  const riceDishes = ["Nasi Goreng", "Nasi Uduk", "Nasi Padang", "Nasi Kuning"];
  const randomRice = riceDishes[Math.floor(Math.random() * riceDishes.length)];

  alert("Rekomendasi untukmu: " + randomRice + "! 🌾");
}

function noodle() {
  const noodleDishes = ["Mie Goreng", "Mie Ayam", "Ramen", "Kwetiau Goreng"];
  const randomNoodle =
    noodleDishes[Math.floor(Math.random() * noodleDishes.length)];

  alert("Rekomendasi untukmu: " + randomNoodle + "! 🍜");
}
