const sawvavi = [10, 20, 30, 51];

const shopingi = [20, 15, 30];

function calculateCost(arr) {
  let totalCost = 0;

  for (let i = 0; i < arr.length; i++) {
    totalCost += arr[i];
  }
  if (totalCost > 100) {
    console.log(`dzaan bevrs xarjav`);
    return totalCost;
  }
  console.log(`kochag cotas xarjav`);
  return totalCost;
}

calculateCost(sawvavi);
calculateCost(shopingi);

const xarji = [130, 254, 100, 500];
function calculateCost(array) {
  let totalCost = 0;
  for (let x = 0; x < array.length; x++) {
    totalCost += array[x];
  }
}
calculateCost(xarji);

const shemosavali = [100, 200, 300, 500];
function sumshemosavali(array2) {
  let jami = 0;
  for (let i = 0; i < array2.length; i++) {
    jami += array2[i];
  }
  console.log(jami);
}
sumshemosavali(shemosavali);

const shopingi3 = [10, 20, 30];
const shopingi2 = [20, 80, 100, 122, 150];
function sumshopingi2(array3) {
  let jami = 0;
  for (let x = 0; x < array3.length; x++) {
    jami += array3[x];
  }
  if (jami > 300) {
    console.log(`sheni xarjia ${jami}, shewyvite amdenis xarjva`);
  } else {
    console.log(`ok`);
  }
}
sumshopingi2(shopingi3);
sumshopingi2(shopingi2);

const biujeti = [100, 400, 800, 122];
const biujeti2 = [1000, 500, 600];

function sumbiujeti(arr) {
  let mtlianiBiujeti = 0;
  for (let x = 0; x < arr.length; x++) {
    mtlianiBiujeti += arr[x];
    if (mtlianiBiujeti < 1500) {
      console.log(`biujeti kargia`);
    } else {
      console.log(`gadaacharbe`);
    }
  }
}
sumbiujeti(biujeti);
sumbiujeti(biujeti2);

const wliuriXarji = [600, 100, 400];

function datvaleXarji(array4) {
  let jamurixarji = 0;
  for (let x = 0; x < array4.length; x++) {
    jamurixarji += array4[x];
  }
  if (jamurixarji > 1000) {
    console.log(`sheni xarjia ${jamurixarji}`);
  } else {
    console.log(`norm`);
  }
}
datvaleXarji(wliuriXarji);
datvaleXarji(sawvavi);

function fizzbuzz() {
  for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();

// შევქმნათ ფუნქცია რომელიც მიიღებს ორ პარამეტრს და დათვლის მართკუთხედის ფართობს მიღებული პარამეტრების დახმარებით. გამოთვლილი შედეგების მიხედვით შევადაროთ ორივე მართკუთხედის ფართობი ერთმანეთს და დავაკონსოლოგოთ უფრო დიდი ფართობის მქონე მართკუთხედი.

const gverdi1 = 5;
const gverdi2 = 10;

const gverdi3 = 7;
const gverdi4 = 8;

function calculateS(length, width) {
  return length * width;
}
const area1 = calculateS(gverdi1, gverdi2);
const area2 = calculateS(gverdi3, gverdi4);

if (area1 > area2) {
  console.log(area1);
} else {
  console.log(area2);
}
