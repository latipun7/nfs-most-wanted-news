/**
 * Attach style file to the root or element
 * @param {(ShadowRoot|Document|Element)} root - Root of this `<style>` applied to
 * @param {*} styles - Style file (SCSS)
 */
const attachStyles = (root, styles) => {
  const style = document.createElement('style');
  style.textContent = styles;
  root.appendChild(style);
};

export default attachStyles;
