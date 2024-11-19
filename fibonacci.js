let n = 1;
let lastN = 0;
let res = 0;
let maxList = 100
let msg = ""
console.log("0ème nombre de Fibonacci : 0")
console.log("1ème nombre de Fibonacci : 1")
for (i = 0; i < maxList - 1; i++){
  res = n + lastN
  lastN = n
  n = res
  msg = i + 2
  msg += "ème nombre de Fibonacci : "
  msg += res
  
  console.log(msg)
}
