let n = 10
for (row = 0; row < n; row++){
  let ligne = ""
  for (space = n; space > row; space--){
    ligne += " "
  }
  for (star = 0; star < row + 1; star++){
    ligne += "* "
  }
  console.log(ligne)
}
