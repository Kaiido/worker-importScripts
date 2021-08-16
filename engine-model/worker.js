const engine = {
};

importScripts(
  "./operationA.js",
  "./operationB.js"
);

onmessage = ({ data, ports }) => {
  if(data?.method in engine) {
    const result = engine[ data.method ](...data.args);
    ports[ 0 ].postMessage(result);
  }
};