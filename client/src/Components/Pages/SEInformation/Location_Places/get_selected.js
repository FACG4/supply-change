export default arr => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.value);
  },[]);
};
