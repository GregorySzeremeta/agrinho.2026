// 🌙 modo escuro
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// 🗺️ MAPA
const map = L.map('map').setView([-24.5, -51.9], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

const cidades = [
  ["Maringá", -23.42, -51.93],
  ["Londrina", -23.31, -51.16],
  ["Cascavel", -24.95, -53.45],
  ["Toledo", -24.72, -53.74],
  ["Ponta Grossa", -25.09, -50.16]
];

cidades.forEach(c => {
  L.marker([c[1], c[2]])
    .addTo(map)
    .bindPopup("🌾 " + c[0]);
});

// 📊 GRÁFICO 1 - produção geral
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["Soja", "Milho", "Frango", "Suínos"],
    datasets: [{
      label: "Produção (%)",
      data: [95, 85, 90, 80],
      backgroundColor: "#2e7d32"
    }]
  }
});

// 📊 GRÁFICO 2 - crescimento
new Chart(document.getElementById("chart2"), {
  type: "line",
  data: {
    labels: ["2018","2019","2020","2021","2022","2023","2024"],
    datasets: [{
      label: "Crescimento do Agro",
      data: [50,60,70,75,85,90,97],
      borderColor: "#1b5e20",
      fill: false
    }]
  }
});

// 📊 GRÁFICO 3 - exportação
new Chart(document.getElementById("chart3"), {
  type: "pie",
  data: {
    labels: ["Soja", "Carne", "Milho", "Outros"],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ["#2e7d32","#66bb6a","#a5d6a7","#c8e6c9"]
    }]
  }
});