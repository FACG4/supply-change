export default arr => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.concat({ value: currentValue,label: currentValue });
  },[]);
};
