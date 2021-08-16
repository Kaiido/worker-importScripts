addEventListener("message", (evt) => {
  // All our scripts need to agree on a common pattern
  // this comes down to having a common engine,
  // but dispatched over several files, possibly harder to maintain
  const method = evt.data?.method;
  if( method === "operationB" ) {
    const result = (+evt.data.args[0]).toFixed(3);
    self.postMessage({ method, result });
  }
});