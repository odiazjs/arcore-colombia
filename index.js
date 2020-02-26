var stateInterval = null;

function init() {
  initAR();
}

function initAR() {
  
}

function checkDomState() {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    init();
    clearInterval(stateInterval);
  }
}

function docReady() {
  if (document.readyState === "loading") {
    stateInterval = setInterval(checkDomState, 1);
  } else if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    stateInterval = setInterval(checkDomState, 1);
  }
}

docReady();
