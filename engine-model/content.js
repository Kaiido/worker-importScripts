const log = document.querySelector("pre");

const text_input = document.querySelector("input[type=text]");
text_input.oninput = async (evt) => {
  const result = await engine.operationA(text_input.value);
  log.textContent += "Received response from worker: " + result + "\n";
};

const number_input = document.querySelector("input[type=number]");
number_input.oninput = async (evt) => {
  const result = await engine.operationB(number_input.valueAsNumber);
  log.textContent += "Received response from worker: " + result + "\n";
};
