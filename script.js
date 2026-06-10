// ===============================
// 🌙 DARK MODE
// ===============================
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  // salva preferência do usuário
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
}

// manter modo ao recarregar
window.addEventListener("load", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

// ===============================
// 🗺️ MAPA (Leaflet)
// ===============================
const map = L.map("map").setView([-24.8, -51.9], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
  maxZoom: 18
}).addTo(map);

// cidades do Paraná
const cidades = [
  { nome: "Maringá", lat: -23.42, lng: -51.93 },
  { nome: "Londrina", lat: -23.31, lng: -51.16 },
  { nome: "Cascavel", lat: -24.95, lng: -53.45 },
  { nome: "Toledo", lat: -24.72, lng: -53.74 },
  { nome: "Ponta Grossa", lat: -25.09, lng: -50.16 }
];

// adiciona marcadores
cidades.forEach(({ nome, lat, lng }) => {
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`🌾 <b>${nome}</b><br>Região agrícola do Paraná`);
});

// ===============================
// 📊 CHARTS (Chart.js otimizado)
// ===============================
function criarGrafico(id, config) {
  const ctx = document.getElementById(id);

  if (!ctx) return;

  return new Chart(ctx, config);
}

// 📊 1 - Produção
criarGrafico("chart1", {
  type: "bar",
  data: {
    labels: ["Soja", "Milho", "Frango", "Suínos"],
    datasets: [{
      label: "Nível de Produção (%)",
      data: [95, 85, 90, 80],
      backgroundColor: "#2e7d32",
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// 📊 2 - Crescimento
criarGrafico("chart2", {
  type: "line",
  data: {
    labels: ["2018","2019","2020","2021","2022","2023","2024"],
    datasets: [{
      label: "Crescimento do Agro",
      data: [50,60,70,75,85,90,97],
      borderColor: "#1b5e20",
      backgroundColor: "rgba(27,94,32,0.2)",
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true
  }
});

// 📊 3 - Exportação
criarGrafico("chart3", {
  type: "doughnut",
  data: {
    labels: ["Soja", "Carne", "Milho", "Outros"],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ["#2e7d32","#66bb6a","#a5d6a7","#c8e6c9"]
    }]
  },
  options: {
    responsive: true
  }
});