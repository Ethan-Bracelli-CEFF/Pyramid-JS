let nombre1 = 196;
let nombre2 = 24;
let result1 = [];
let result2 = [];
let pgdc = null;

let i = 1;
while (pgdc === null) {
  result1.push(nombre1 / i);
  result2.push(nombre2 / i);

  result1.forEach((item) => {
    if (result2.includes(item)) {
      pgdc = item;
    }
  });
  i++;
}

console.log(`Le PGDC de ${nombre1} et ${nombre2} est : ${pgdc}`);
