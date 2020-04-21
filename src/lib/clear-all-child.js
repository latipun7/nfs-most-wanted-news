/**
 * Clear all child from element
 * @param {(ShadowRoot|Document|Element)} root - Root element that want to clear
 */
const clearAllChild = (root) => {
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }
};

export default clearAllChild;
