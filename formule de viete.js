let nombre_de_x2 = 1
let nombre_de_x = 4
let nombre_de_decimal = 3

let equation = ""
equation += nombre_de_x2
equation += "x² + "
equation += nombre_de_x
equation += "x + "
equation += nombre_de_decimal
console.log(equation)
let a = nombre_de_x2
let b = nombre_de_x
let c = nombre_de_decimal
let discriminant = b * b - 4 * a * c
let x = 0
let x1 = 0
let x2 = 0
if (discriminant < 0){
  console.log("S = pas possible")
} else if (discriminant > 0){
  x1 = ((-1*b + Math.sqrt(discriminant)) / (2*a))
  x2 = ((-1*b - Math.sqrt(discriminant)) / (2*a))
  msg = "S = {"
  msg += x1
  msg += ";"
  msg += x2
  msg += "}"
  console.log(msg)
} else {
  x = b / (2*a) *-1
  msg = "S = {"
  msg += x
  msg += "}"
  console.log(msg)
}
