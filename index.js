// let obj = {
//     'category': 'Food',
//     'totalSpend': 10
// }

// console.log(obj.category);
// console.log(obj.totalSpend);

// let ar = [
//   {
//     'name': 'rohit',
//     'age' : 21
//   },
//   {
//     'name': 'sam',
//     'age' : 22
//   }

// ]

// ar[0]['age'] = 30;

// console.log(ar)

function calculateTotalSpentByCategory(transactions) {
  let arr = [];

  let obj = {}

  if (transactions.length != 0) {
    transactions.forEach(function (item) {
      if (item["category"] in obj) {
        obj[item["category"]] += item["price"];
      }
      else {
        obj[item["category"]] = item["price"]
      }
    });
  
    for (const prop in obj) {
      let newObj = {};
      newObj["category"] = prop;
      newObj["totalSpent"] = obj[prop];
      arr.push(newObj);
    }
    return arr;
  }

  return [];
}




transactions = [ { category: 'Food', totalSpent: 10 }, {category: 'Clothing', totalSpent: 40}, { category: 'Food', totalSpent: 20 } ];

console.log(calculateTotalSpentByCategory(transactions));
