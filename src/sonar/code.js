const funSum = async (a, b) => a + b;

const objectSum = (a, b) => {
  return { sum: (a + b) };
};



module.exports = {
  funSum,
  objectSum
}