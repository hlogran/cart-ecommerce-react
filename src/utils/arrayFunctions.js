export const countDuplicatedItems = (arr, value) => {
  let count = 0;
  arr.forEach(x => x === value && count++);
  return count;
};

export const removeDuplicatedItems = arr => {
  return Array.from(new Set(arr));
};

export const removeItem = (arr, item) => {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};
