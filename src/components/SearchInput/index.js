import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import styles from './index.scss';

class SearchInput extends HTMLElement {
  constructor() {
    super();
    this.enterEvent = null;
    this.isLoading = false;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {Function} event - Callback function on event listener
   */
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

  /**
   * @param {Boolean} value - state is loading or not
   */
  set loadingState(value) {
    const control = this.shadowRoot.querySelector('.control');
    const searchInput = this.shadowRoot.querySelector('input');
    this.isLoading = value;

    // Check loading state
    if (this.isLoading) {
      control.classList.add('is-loading');
      searchInput.setAttribute('disabled', '');
    } else {
      control.classList.remove('is-loading');
      searchInput.removeAttribute('disabled');
      searchInput.focus();
    }
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
    control.className = 'control is-large';
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
