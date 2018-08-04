export default arr => {
  const result= [];
  arr.forEach(element => {
    result.push({ value: element,label: element });
  });
  return result;
};
