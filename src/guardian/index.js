/**
 * Checks if the atom is inside an iframe and does a risize. This is specific to The Guardian.
 *
 * @param {string} - The element containing the content (By default it is #gv-atom)
 */

export function resizeIframe(elem="#gv-atom") {
  if (window.frameElement) {
    const target = document.querySelector(elem);

    console.log("Inside version 1.1");

    // Post message to parent window to adjust the height
    window.parent.postMessage({
      sentinel: 'amp',
      type: 'embed-size',
      height: document.body.scrollHeight
    }, '*');

    // Hide the overflow to avoid scrollbars
    document.body.style.overflow = 'hidden';

    // Set the initial height of the iframe
    window.frameElement.height = target.offsetHeight;

    // Function to detect height changes of an element
    function onElementHeightChange(elm, callback) {
      let lastHeight = elm.clientHeight;
      let newHeight;
      (function run() {
        newHeight = elm.clientHeight;
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer);
        }
        elm.onElementHeightChangeTimer = setTimeout(run, 200);
      })();
    }

    // Watch for changes in the body's height
    onElementHeightChange(document.body, function() {
      window.frameElement.height = target.offsetHeight;
    });
  }
}