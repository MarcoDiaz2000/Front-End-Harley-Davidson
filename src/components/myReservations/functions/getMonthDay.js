export default (date) => {
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${month}-${day}`;
};
