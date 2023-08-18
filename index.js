const flavorInputs = prompt(
  "List the flavors of your froyo order, separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function countOrder(strarray) {

  let order = {};

  for (let i = 0; i < strarray.length; i++) {
    if (order[strarray[i]] === undefined) {
      order[strarray[i]] = 0;
    }
    order[strarray[i]]++;
  }

  return order;
}

const orderArray = flavorInputs.split(",");

let orderObject = countOrder(orderArray);

console.log(orderObject);
