export default (arr, key, value) => {
  return arr.filter(el => {
    return (value) ? el[key].toLowerCase().includes(value.toLowerCase()) : true;
  });
};
