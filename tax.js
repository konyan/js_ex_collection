// 100  = 90
// (150 * 10/100) = 15

function calcPercentage(amount, percentAmount) {
  return (amount * percentAmount) / 100;
}

function selfRelease(amount) {
  const selfReleasePercent = 20;
  return calcPercentage(amount, selfReleasePercent);
}

function parentalRelease(no) {
  if (no <= 2) {
    return no * 1000000;
  } else {
    return new Error("parent should be less than 3");
  }
}

function marriedRelease(isMarried, noOfChild) {
  if (isMarried) {
    let result = 0;
    result = result + 1000000; // 10 lak
    result = result + noOfChild * 500000; //5 lak
    return result; // break
  } else {
    return 0;
  }
}

function totalRelase(yearlyIncome, noOfParent, isMarried, noOfChild) {
  const SSB = 72000;

  const self = selfRelease(yearlyIncome);
  const parental = parentalRelease(noOfParent);
  const marryRelease = marriedRelease(isMarried, noOfChild);

  console.log("SELF", self.toLocaleString());
  console.log("PARENT", parental.toLocaleString());
  console.log("MARRY", marryRelease.toLocaleString());

  return self + parental + marryRelease + SSB;
}

const yearlyIncome = 1632000 * 12;
const total = totalRelase(yearlyIncome, 2, true, 2);

function calcTaxAmount(yearlyIncome, totalRelase) {
  return yearlyIncome - totalRelase;
}

const taxAmount = calcTaxAmount(yearlyIncome, total);

console.log("TAO", total.toLocaleString(), taxAmount.toLocaleString());

function calcPayableTax(taxAmount) {
  if (taxAmount > 0 && taxAmount <= 2000000) {
    return 0;
  } else if (taxAmount > 2000000 && taxAmount <= 5000000) {
    return calcPercentage(taxAmount, 5);
  } else if (taxAmount > 5000000 && taxAmount <= 10000000) {
    return calcPercentage(taxAmount, 10);
  } else if (taxAmount > 10000000 && taxAmount <= 20000000) {
    console.log("DD", taxAmount);
    return taxAmount - calcPercentage(taxAmount, 15);
  } else {
    return calcPercentage(taxAmount, 25);
  }
}

const yearlyTax = calcPayableTax(taxAmount);
console.log("YEAR", yearlyTax);
