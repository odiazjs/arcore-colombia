var stateInterval = null;

function init() {
  
}

function fallbackAR() {
  // Check whether this is an Android device.
  const isAndroid = /android/i.test(navigator.userAgent);
  // This web fallback url will launch if the correct version of the Google app is
  // not available.
  const fallbackUrl =

  'raw.githubusercontent.com/odiazjs/arcore-colombia/master/assets/goldenboot/Botin%20de%20Oro.gltf&link=https%3A%2F%2Fgoogle.com&title=Tiger';

  // This is the intent launching URL that triggers Scene Viewer on Android
  // and falls back to fallbackUrl if the Google app is not available.
  const sceneViewerUrl =

  'intent://raw.githubusercontent.com/odiazjs/arcore-colombia/master/assets/goldenboot/Botin%20de%20Oro.gltf?title=Goldenboot#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=' +
      fallbackUrl + ';end;';

  // Create a link.
  var a = document.createElement('a');
  a.appendChild(document.createTextNode('Tiger'));
  // Set the links href to the intent Url on Android and the fallback Url
  // everywhere else.
  a.href = isAndroid ? sceneViewerUrl : fallbackUrl;
  // Add the link to the page.
  document.body.appendChild(a);
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
