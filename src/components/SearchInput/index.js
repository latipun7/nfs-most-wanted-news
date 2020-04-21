import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import styles from './index.scss';

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // connectedCallback() {
  //   this.render();
  // }

  set enterKeywordsEvent(event) {
    this.enterEvent = event;
    this.render();
  }

  get value() {
    return this.shadowRoot.querySelector('input').value;
  }

  set value(value) {
    this.shadowRoot.querySelector('input').value = value;
  }

  render() {
    const root = this.shadowRoot;

    // Allow re-render
    clearAllChild(root);

    // Attach styles
    attachStyles(root, styles);

    // Field search input
    const field = document.createElement('div');
    field.className = 'field';
    root.appendChild(field);

    // Search control
    const control = document.createElement('div');
    control.className = 'control';
    field.appendChild(control);

    // Search input
    const searchInput = document.createElement('input');
    searchInput.className = 'input is-info is-large is-rounded';
    searchInput.type = 'search';
    searchInput.placeholder = 'Keywords here, then press enter!';
    field.appendChild(searchInput);

    // Add event listener
    searchInput.addEventListener('keyup', this.enterEvent);
  }
}

customElements.define('search-input', SearchInput);
export default SearchInput;
