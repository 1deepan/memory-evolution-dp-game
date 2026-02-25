let grid=[[2,4,1,3],[3,2,5,2],[4,3,2,1],[1,2,3,1]]; 
const container=document.getElementById("grid"); 
function draw(){container.innerHTML="";grid.forEach((row,i)=,j)= d=document.createElement("div");d.className="cell";d.textContent=v;d.onclick=()==(grid[i][j]%9)+1;draw();};container.appendChild(d);});});} 
function sleep(ms){return new Promise(r=,ms));} 
async function runDP(){let n=grid.length,m=grid[0].length;let dp=Array.from({length:n},()=;dp[0][0]=grid[0][0];await animate(dp);for(let i=1;i<n;i++){dp[i][0]=dp[i-1][0]+grid[i][0];await animate(dp);}for(let j=1;j<m;j++){dp[0][j]=dp[0][j-1]+grid[0][j];await animate(dp);}for(let i=1;i<n;i++){for(let j=1;j<m;j++){dp[i][j]=grid[i][j]+Math.min(dp[i-1][j],dp[i][j-1]);await animate(dp);}}highlightPath(dp);} 
async function animate(dp){let cells=document.querySelectorAll(".cell");cells.forEach(c=;for(let i=0;i<dp.length;i++){for(let j=0;j<dp[0].length;j++){if(dp[i][j]!=0){cells[i*dp[0].length+j].classList.add("active");}}}await sleep(300);} 
function highlightPath(dp){let i=dp.length-1,j=dp[0].length-1;let cells=document.querySelectorAll(".cell");while(i>=0 && j>=0){cells[i*dp[0].length+j].classList.add("path");if(i===0 && j===0)break;if(i===0)j--;else if(j===0)i--;else if(dp[i-1][j]<dp[i][j-1])i--;else j--;}} 
draw(); 
