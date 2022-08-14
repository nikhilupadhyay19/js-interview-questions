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

const getArrayByKeyName = (arr, key) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((acc, el) => {
    acc.push(el[key]);
    return acc;
  }, []);
};

const productsPrice = getArrayByKeyName(products, "Price");
console.log(productsPrice);
