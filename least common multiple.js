let nombre1 = 8;
let nombre2 = 6;
let result1 = [];
let result2 = [];
let ppmc = null;

let i = 1;
while (ppmc === null) {
  result1.push(nombre1 * i);
  result2.push(nombre2 * i);

  result1.forEach((item) => {
    if (result2.includes(item)) {
      ppmc = item;
    }
  });
  i++;
}

console.log(`Le PPMC de ${nombre1} et ${nombre2} est : ${ppmc}`);
