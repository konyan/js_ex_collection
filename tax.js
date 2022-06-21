// // 100  = 90
// // (150 * 10/100) = 15

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
  const SSB = 72000; // priemium

  const self = selfRelease(yearlyIncome);

  const parental = parentalRelease(noOfParent);
  const marryRelease = marriedRelease(isMarried, noOfChild);

  console.log("SELF", self.toLocaleString());
  console.log("PARENT", parental.toLocaleString());
  console.log("MARRY", marryRelease.toLocaleString());

  return self + parental + marryRelease + SSB;
}

const yearlyIncome = 2000000 * 12;
const total = totalRelase(yearlyIncome, 2, true, 2);

function calcTaxAmount(yearlyIncome, totalRelase) {
  return yearlyIncome - totalRelase;
}

const taxAmount = calcTaxAmount(yearlyIncome, total);

console.log("TOTAL TAX RELEASE", total.toLocaleString());
console.log("TAXABLE AMOUNT", taxAmount.toLocaleString());

function calcPayableTax(total) {
  // let result = 0;
  let taxAmount = 0;
  if (total > 0 && total <= 2000000) {
    taxAmount += 0;
  }

  if (total > 2000000 && total <= 5000000) {
    taxAmount += calcPercentage(total - 2000000, 5);
  }

  if (total > 5000000 && total <= 10000000) {
    taxAmount += calcPayableTax(total - 5000000, 10);
  }

  if (total > 10000000 && total <= 20000000) {
    taxAmount += calcPayableTax(total - 10000000, 15);
  }

  if (total > 20000000 && total <= 30000000) {
    taxAmount += calcTaxAmount(total - 20000000, 20);
  }

  if (total > 30000000) {
    taxAmount += calcTaxAmount(total - 30000000, 25);
  }

  console.log("YEARLY TAX", taxAmount);
  return taxAmount / 12;
}

const monthTax = calcPayableTax(taxAmount);
console.log("MONTHLY TAX", monthTax);
