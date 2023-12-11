/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  // if (transactions.length == 0){
  //   return [];
  // }


  // let category = transactions[0]['category'];
  // let totalSpent = 0
  // let resultArray = [];
  // resultArray.push({"category": transactions[0]["category"], "totalSpent": transactions[0]["totalSpent"]})
  // for(let i = 0; i < transactions.length; i++){
  //     // resultArray.push({"category": transactions[i]["category"], "totalSpent": transactions[i]["totalSpent"]})


  //     if(category == transactions[i]['category']){
  //         // resultArray.push({"category": transactions[i]["category"], "totalSpent": totalSpent + transactions[i]["totalSpent"]})
  //         resultArray[i]['totalSpent'] = totalSpent + transactions[i]["totalSpent"];
  //     }
  //     else{
  //       resultArray.push({"category": transactions[i]["category"], "totalSpent": totalSpent + transactions[i]["totalSpent"]})
  //     }

  // }

  // return resultArray;


  // // return [] ;
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

module.exports = calculateTotalSpentByCategory;