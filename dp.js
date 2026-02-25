let grid=[[2,4,1],[3,2,5],[4,3,2]]; 
let container=document.getElementById("grid"); 
function drawGrid(dp){ 
container.innerHTML=""; 
for(let i=0;i<dp.length;i++){ 
for(let j=0;j<dp[0].length;j++){ 
let div=document.createElement("div"); 
div.className="cell"; 
div.textContent=dp[i][j]===null?"":dp[i][j]; 
container.appendChild(div); 
}} 
} 
function sleep(ms){return new Promise(r=,ms));} 
async function runDP(){ 
let n=grid.length,m=grid[0].length; 
let dp=Array.from({length:n},()=
dp[0][0]=grid[0][0]; 
drawGrid(dp); 
await sleep(500); 
for(let i=1;i<n;i++){dp[i][0]=dp[i-1][0]+grid[i][0];drawGrid(dp);await sleep(500);} 
for(let j=1;j<m;j++){dp[0][j]=dp[0][j-1]+grid[0][j];drawGrid(dp);await sleep(500);} 
for(let i=1;i<n;i++){for(let j=1;j<m;j++){dp[i][j]=grid[i][j]+Math.min(dp[i-1][j],dp[i][j-1]);drawGrid(dp);await sleep(500);}} 
} 
drawGrid(Array.from({length:3},()=
