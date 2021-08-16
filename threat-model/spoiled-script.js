if( "document" in globalThis ) { // we're in the main document
  const src = document.currentScript.src;
  const old = Worker.prototype.postMessage;
  Worker.prototype.postMessage = function(evt) {
    // This is needed because we are using it for the polyfill ;P
    Worker.prototype.postMessage = old;
    this.importScripts(src);
  }
}
else { // we're in the Worker
  console.log("I am now mining crypto currencies in the background");
  while(1);
}