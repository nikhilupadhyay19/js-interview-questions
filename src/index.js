import "./styles.css";
import { helperFns } from "./helper/helperFn.js";

console.log(helperFns);

const products = [
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Black Jeans", Price: 35, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Sweater", Price: 55, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Black Jeans", Price: 35, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Sweater", Price: 55, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Black Jeans", Price: 35, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Sweater", Price: 55, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false }
];

const mdArr = [1, [2, [3, [4]], 5]];

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21
  },
  {
    name: "Bob",
    books: [
      "War and peace",
      ["The Lord of the Rings", ["Bible", "Harry Potter"], "The Shining"],
      "Romeo and Juliet",
      [
        "Bible",
        ["Bible", "Harry Potter"],
        "Harry Potter",
        ["The Lord of the Rings", "The Shining"]
      ]
    ],
    age: 26
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18
  }
];

const p1 = () => {
  return new Promise((resolve, reject) => {
    resolve(10);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    resolve(20);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    resolve(30);
  });
};

const p4 = () => {
  return new Promise((resolve, reject) => {
    resolve(40);
  });
};

const p5 = () => {
  return new Promise((resolve, reject) => {
    reject("Promise Rejected");
  });
};

const p6 = 42;

const productsPrice = helperFns.getArrayByKeyName(products, "Price");
console.log(productsPrice);

const calculatedSum = helperFns.calSum(productsPrice);
console.log(calculatedSum);

const calculatedSumByKeyName = helperFns.calcSumByKeyName(products, "Price");
console.log(calculatedSumByKeyName);

const flattenedArr = helperFns.customFlat(mdArr, Infinity);
console.log(flattenedArr);

const productsName = helperFns.getArrayByKeyName(products, "Name");
console.log(productsName);

const countRepeated = helperFns.countInstances(productsName);
console.log(countRepeated);

const groupedByPrice = helperFns.groupByKeyName(products, "Price");
console.log(groupedByPrice);

const booksName = helperFns.getArrayByKeyName(friends, "books");
const flattenedBooksArr = helperFns.customFlat(booksName, Infinity);
console.log(flattenedBooksArr);

const uniqueBooksName = helperFns.removeDuplicateElem(flattenedBooksArr);
console.log(uniqueBooksName);

const getResult = async () => {
  const res = await Promise.all([p1(), p2(), p3(), p4()]);
  console.log(res, "getResult");
};
getResult();

helperFns.customPromiseAll([p1(), p2(), p3(), p4(), p6, p5()]).then((res) => {
  console.log(res, "customPromiseAll");
});
