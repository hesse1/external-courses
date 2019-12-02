function Candy(name, weight) {
  this.name = name;
  this.weight = weight;
};

function Gift(candy) {
  this.candy = candy;
};

Gift.prototype.calcWeight = function () {
  let weight = 0;
  this.candy.forEach(candy => {
    weight += candy.weight
  });
  return weight;
}

Gift.prototype.sort = function () {
  return this.candy.sort(function (a, b) {
    return a.weight - b.weight
  })
}
Gift.prototype.searchName = function (name) {
  return this.candy.filter(sweet => sweet.name === name)
}

const alenka = new Candy('alenka', 200)
const caramel = new Candy('caramel', 100)
const milkChocolate = new Candy('milk chocolate', 50)
const nutella = new Candy('nutella', 700)
const gift = new Gift([alenka, caramel, milkChocolate, nutella])
console.log(gift);
console.log(gift.calcWeight());
console.log(gift.sort());
console.log(gift.searchName('alenka'));