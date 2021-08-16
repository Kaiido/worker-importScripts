Worker.prototype.importScripts = function(...args) {
  const {port1, port2} = new MessageChannel();
  this.postMessage({ method: "importScripts", args }, [port2]);
  return new Promise((res, rej)=> {
    port1.onmessage = ({data}) => {
      if(data === true) { res(); }
      else { rej(data); }
    }
  });
};
Worker.prototype.addModule = function(...args) {
  const {port1, port2} = new MessageChannel();
  this.postMessage({ method: "addModule", args }, [port2]);
  return new Promise((res, rej)=> {
    port1.onmessage = ({data}) => {
      if(data === true) { res(); }
      else { rej(data); }
    }
  });
};