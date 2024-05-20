const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const restart = document.getElementById("restart-btn");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const player1Placeholder = document.getElementById("player1-score");
const player2Placeholder = document.getElementById("player2-score");
const arrow = document.getElementById("arrow");
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let currentPlayer = 1;

function cleanValue(value) {
  if (value) {
    return value.replace(/"/g, "");
  }
  return value;
}

document.addEventListener("DOMContentLoaded", () => {
  if (cleanValue(sessionStorage.getItem("player1Name")).length === 0) {
    sessionStorage.setItem("player1Name", "Player 1");
    player1Placeholder.textContent = `${cleanValue(
      sessionStorage.getItem("player1Name")
    )}: ${player1CurrentScore}`;
  } else if (cleanValue(sessionStorage.getItem("player1Name")) !== null) {
    player1Placeholder.textContent = `${cleanValue(
      sessionStorage.getItem("player1Name")
    )}: ${player1CurrentScore}`;
  }

  if (cleanValue(sessionStorage.getItem("player2Name")).length === 0) {
    sessionStorage.setItem("player2Name", "Player 2");
    player2Placeholder.textContent = `${cleanValue(
      sessionStorage.getItem("player2Name")
    )}: ${player2CurrentScore}`;
  } else if (cleanValue(sessionStorage.getItem("player2Name")) !== null) {
    player2Placeholder.textContent = `${cleanValue(
      sessionStorage.getItem("player2Name")
    )}: ${player2CurrentScore}`;
  }
});

const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

const data = [16, 16, 16, 16, 16, 16];
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

const valueGenerator = (angleValue) => {
  let player1Name = cleanValue(sessionStorage.getItem("player1Name"));
  let player2Name = cleanValue(sessionStorage.getItem("player2Name"));
  let maximumScore = cleanValue(sessionStorage.getItem("maximumScore"));

  for (let i of rotationValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      if (currentPlayer === 1) {
        finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
        player1CurrentScore += i.value;
        player1Score.textContent = `${player1Name}: ${player1CurrentScore}`;
        spinBtn.disabled = false;
        if (player1CurrentScore >= maximumScore) {
          finalValue.innerHTML = `<h2>${player1Name} winner!</h2><br><button onclick="window.location.href = 'index.html'">Restart</button>`;
          spinBtn.style.display = "none";
          wheel.style.display = "none";
          arrow.style.display = "none";
        }
      } else {
        finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
        player2CurrentScore += i.value;
        player2Score.textContent = `${player2Name}: ${player2CurrentScore}`;
        spinBtn.disabled = false;
        if (player2CurrentScore >= maximumScore) {
          finalValue.innerHTML = `<h2>${player2Name} winner!</h2><br><button onclick="window.location.href = 'index.html'">Restart</button>`;
          spinBtn.style.display = "none";
          wheel.style.display = "none";
          arrow.style.display = "none";
        }
      }

      currentPlayer = currentPlayer === 1 ? 2 : 1;
      break;
    }
  }
};

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
