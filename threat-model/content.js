const log = document.querySelector("pre");

const worker = new Worker("about-blank.js");

const text_input = document.querySelector("input[type=text]");
// what is the benefit of adding this script from the client-side?
worker.importScripts("./operationA.js");
// every script has to add its own event handler,
// following the same pattern
worker.addEventListener("message", (evt) => {
  if(evt.data?.method === "operationA") {
    log.textContent += "Received response from worker: " + evt.data.result + "\n";
  }
});
text_input.oninput = (evt) =>
  worker.postMessage({ method: "operationA", args: [ text_input.value ] });

const number_input = document.querySelector("input[type=number]");
// what is the benefit of adding this script from the client-side?
worker.importScripts("./operationB.js");
worker.addEventListener("message", (evt) => {
  if(evt.data?.method === "operationB") {
    log.textContent += "Received response from worker: " + evt.data.result + "\n";
  }
});
number_input.oninput = (evt) =>
  worker.postMessage({ method: "operationB", args: [ number_input.valueAsNumber ] });
