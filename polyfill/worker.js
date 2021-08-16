// this is not a real polyfill
// it is just a simple implementation to look at the API design
addEventListener("message", async (evt) => {
  const method = evt.data?.method;
  if(method === "importScripts") {
    evt.stopImmediatePropagation();
    try {
      importScripts(evt.data.args);
      evt.ports[0].postMessage(true);
    }
    catch(err) {
      evt.ports[0].postMessage(err);
    }
  }
  else if(method === "addModule"){
    evt.stopImmediatePropagation();
    try {
      // todo: handle {credentials} options
      const url = new URL(evt.data.args[0], location);
      await import(url);
      evt.ports[0].postMessage(true);
    }
    catch(err) {
      evt.ports[0].postMessage(err);
    }
  }
});