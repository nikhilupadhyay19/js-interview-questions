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

  const countInstances = (arr) => {
    let count = 1;
    if (!Array.isArray(arr)) return;
    return arr.reduce((acc, el) => {
      if (!acc[el]) {
        acc[el] = count;
      } else {
        acc[el]++;
      }
      return acc;
    }, {});
  };

  const groupByKeyName = (arr, objkey) => {
    if (!Array.isArray(arr)) return;

    return arr.reduce((acc, el) => {
      const key = el[objkey];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(el);

      return acc;
    }, {});
  };

  const removeDuplicateElem = (arr) => {
    if (!Array.isArray(arr)) return;
    return arr.reduce((acc, el) => {
      if (acc.indexOf(el) === -1) {
        acc.push(el);
      }
      return acc;
    }, []);
  };

  const customPromiseAll = (promises) => {
    const result = [];
    let completed = 0;
    return new Promise((resolve, reject) => {
      promises.forEach((promise, i) => {
        Promise.resolve(promise)
          .then((res) => {
            completed++;
            result[i] = res;
            if (completed === promises.length) {
              resolve(result);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };

  const services = Object.freeze({
    getArrayByKeyName,
    calSum,
    calcSumByKeyName,
    customFlat,
    countInstances,
    groupByKeyName,
    removeDuplicateElem,
    customPromiseAll
  });

  return services;
};

const helperFns = helperFn();

export { helperFns };
