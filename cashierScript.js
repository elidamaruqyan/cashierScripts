(function() {
  let iframe = null;
  let wrapper = null;

  function sendData(data) {
    function onLoad() {
      iframe.contentWindow.postMessage(data, '*');
    }
    iframe.addEventListener('load', onLoad);
    iframe.contentWindow.postMessage(data, '*');
  }

  window.CashierScripts = {
    init(wrapperId) {
      wrapper = document.getElementById(wrapperId)
          || document.body.appendChild(document.createElement('div'));
      const height = '600';
      iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', '0');
      iframe.height = height;
      iframe.style.minWidth = '100%';
      iframe.style.display = 'block';
      iframe.src = 'http://localhost:3001/paymentsAccount';
      wrapper.appendChild(iframe);
    },

    authorize(authData) {
      sendData(authData);
    },

    setStyles(theme) {
      sendData(theme);
    }
  };
})();
