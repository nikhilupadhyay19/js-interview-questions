import "./styles.css";
import { helperFns } from "./helper/helperFn.js";

console.log(helperFns);

const products = [
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Black Jeans", Price: 35, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Sweater", Price: 55, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false }
];

const mdArr = [1, [2, [3, [4]], 5]];

const productsPrice = helperFns.getArrayByKeyName(products, "Price");
console.log(productsPrice);

const calculatedSum = helperFns.calSum(productsPrice);
console.log(calculatedSum);

const calculatedSumByKeyName = helperFns.calcSumByKeyName(products, "Price");
console.log(calculatedSumByKeyName);

const flattenedArr = helperFns.customFlat(mdArr, Infinity);
console.log(flattenedArr);
