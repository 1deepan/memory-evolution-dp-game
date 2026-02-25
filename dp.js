const runBtn = document.getElementById("runBtn");
const resetBtn = document.getElementById("resetBtn");
const dpTable = document.getElementById("dpTable");
const result = document.getElementById("result");

runBtn.addEventListener("click", () => {
  const n = parseInt(document.getElementById("inputN").value);

  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  runDP(n);
});

resetBtn.addEventListener("click", () => {
  dpTable.innerHTML = "";
  result.innerHTML = "";
  document.getElementById("inputN").value = "";
});

function runDP(n) {
  dpTable.innerHTML = "";
  result.innerHTML = "";

  // Example DP: Fibonacci
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 0; i <= n; i++) {
    if (i > 1) dp[i] = dp[i - 1] + dp[i - 2];

    const cell = document.createElement("div");
    cell.className = "dp-cell";
    cell.textContent = dp[i];
    dpTable.appendChild(cell);
  }

  result.innerHTML = `Final Answer: ${dp[n]}`;
}
