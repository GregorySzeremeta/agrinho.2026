// 🌙 Modo escuro
function toggleMode() {
  document.body.classList.toggle("dark");
}

// 🗺️ MAPA DO PARANÁ
const map = L.map('map').setView([-24.5, -51.9], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data'
}).addTo(map);

// pontos agrícolas
const cidades = [
  ["Maringá", -23.42, -51.93],
  ["Londrina", -23.31, -51.16],
  ["Cascavel", -24.95, -53.45],
  ["Toledo", -24.72, -53.74]
];

cidades.forEach(c => {
  L.marker([c[1], c[2]]).addTo(map)
    .bindPopup("🌾 " + c[0]);
});

// 📊 GRÁFICO 1
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["Soja", "Milho", "Frango", "Suínos"],
    datasets: [{
      label: "Produção",
      data: [90, 80, 85, 70],
      backgroundColor: "#2e7d32"
    }]
  }
});

// 📊 GRÁFICO 2
new Chart(document.getElementById("chart2"), {
  type: "line",
  data: {
    labels: ["2018","2019","2020","2021","2022","2023"],
    datasets: [{
      label: "Crescimento do Agro",
      data: [50,60,70,85,90,95],
      borderColor: "#1b5e20",
      fill: false
    }]
  }
});