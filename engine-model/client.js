const engine = (() => {
  const worker = new Worker("./worker.js");
  
  return {
    operationA: (input) => promisingRequest("operationA", [ input ]),
    operationB: (input) => promisingRequest("operationB", [ input ])
  };
  
  function promisingRequest(method, args) {
    return new Promise((res, rej) => {
      const { port1, port2 } = new MessageChannel();
      port1.onmessage = ({data}) => {
        if(data instanceof Error) {
          rej(data);
        }
        else {
          res(data);
        }
      };
      worker.postMessage({ method, args }, [ port2 ]);
    });
  }
})();