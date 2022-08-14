const helperFn = () => {
  // Reduce Method use cases
  const getArrayByKeyName = (arr, key) => {
    if (!Array.isArray(arr)) return;
    return arr.reduce((acc, el) => {
      acc.push(el[key]);
      return acc;
    }, []);
  };

  const calSum = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  const calcSumByKeyName = (arr, key) => {
    if (!Array.isArray(arr)) return;
    return arr.reduce((acc, el) => {
      return acc + el[key];
    }, 0);
  };

  const customFlat = (arr, depth = 1) => {
    if (!Array.isArray(arr)) return;
    return depth > 0
      ? arr.reduce(
          (acc, el) =>
            acc.concat(Array.isArray(el) ? customFlat(el, depth - 1) : el),
          []
        )
      : arr.slice();
  };

  const services = Object.freeze({
    getArrayByKeyName,
    calSum,
    calcSumByKeyName,
    customFlat
  });

  return services;
};

const helperFns = helperFn();

export { helperFns };
