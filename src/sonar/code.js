const funSum = async (a, b) => {
  return (a + b)
};

const funMultiply = async (a, b) => {
  return (a * b)
};

const objectSum = (a, b) => {
  return { sum: (a + b) };
};



module.exports = {
  funSum,
  objectSum,
  funMultiply
}