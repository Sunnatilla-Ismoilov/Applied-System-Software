function playBtn() {
  const player1Name = document.getElementById("player1").value.trim();
  const player2Name = document.getElementById("player2").value.trim();
  const maxScoreInput = document.getElementById("maximumScore").value.trim();
  if (
    maxScoreInput === "" ||
    isNaN(maxScoreInput) ||
    parseInt(maxScoreInput) <= 6 ||
    !Number.isInteger(parseFloat(maxScoreInput))
  ) {
    document.getElementById("max-score-error").style.display = "block";
    return;
  }
  sessionStorage.setItem("player1Name", JSON.stringify(player1Name));
  sessionStorage.setItem("player2Name", JSON.stringify(player2Name));
  sessionStorage.setItem("maximumScore", JSON.stringify(maxScoreInput));
  window.location.href = "game.html";
}
