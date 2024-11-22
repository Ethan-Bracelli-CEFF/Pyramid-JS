let nombre = 5
let result = 1
for (i = nombre; i > 0; i--){
  result *= i
}
msg = "La factorielle de "
msg += nombre
msg += " vaut "
msg += result
console.log(msg)
