import attachStyles from 'attach-styles';
import styles from './index.scss';

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Attach styles
    attachStyles(this.shadowRoot, styles);

    // Field search input
    const field = document.createElement('div');
    field.className = 'field';
    this.shadowRoot.appendChild(field);

    // Search control
    const control = document.createElement('div');
    control.className = 'control';
    field.appendChild(control);

    // Search input
    const searchInput = document.createElement('input');
    searchInput.className = 'input is-info is-large is-rounded';
    searchInput.type = 'text';
    searchInput.placeholder = 'News here';
    field.appendChild(searchInput);
  }
}

customElements.define('search-input', SearchInput);
export default SearchInput;
