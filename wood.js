/*
fixed: per item requirements
1.chair-3cft
2.table-10cft
3.bed-50cft
vary:quentity
*/
function wood(item1, item2, item3) {
  const chairCFT = 3;
  const tableCFT = 10;
  const bedCFT = 50;
  const chairWood = chairCFT * item1;
  const tableWood = tableCFT * item2;
  const bedWood = bedCFT * item3;
  const total = chairWood + tableWood + bedWood;
  return total;
}
let chair = 2;
let table = 4;
let bed = 1;
let value = wood(chair, table, bed);
console.log("Total CFT of wood would be", value);
