console.log("2" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);    // This returns true because of equality check == and comparisions work differently. Comparisions convert null to number, trating it as 0. Thats why null>=0 returns true wheres null>0 returns false

// Strict check : ===
console.log("2" === 2);     // It strictly checks the datatype as it does not convert string to number automatically, like ==