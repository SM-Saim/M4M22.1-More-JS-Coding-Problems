// Splice: splice er kono ekta array theke kono part remove kora,chaile kono onsho add kora jai.
// Splice kintu main array er structure change kore dei.
//splice(startIndex,deleteCount,insertItem,insertItem)

const array = [22, 4, 66, 33, 77, 45, 78, 33, 22, 55];

let item = array.splice(2, 3, 100, 200, 300);
console.log(item);
console.log(array);
