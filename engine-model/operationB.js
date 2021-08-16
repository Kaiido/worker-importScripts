// each method only has to register itself to the main engine
engine.operationB = (input) => {
  const result = (+input).toFixed(3);
  return result;
};