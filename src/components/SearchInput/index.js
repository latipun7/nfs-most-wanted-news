import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import { validCountryList } from 'news-api';
import searchIcon from '../../assets/search.svg';
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
    const selectInput = this.shadowRoot.querySelector('select');
    this.isLoading = value;

    // Check loading state
    if (this.isLoading) {
      control.classList.add('is-loading');
      searchInput.setAttribute('disabled', '');
      selectInput.setAttribute('disabled', '');
    } else {
      control.classList.remove('is-loading');
      searchInput.removeAttribute('disabled');
      selectInput.removeAttribute('disabled');
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
    field.className = 'field has-addons is-addons-desktop';
    root.appendChild(field);

    // Input search control
    const inputControl = document.createElement('div');
    inputControl.className = 'control is-expanded is-medium has-icons-left';
    field.appendChild(inputControl);

    // Search input
    const searchInput = document.createElement('input');
    searchInput.className = 'input is-info is-medium is-rounded';
    searchInput.type = 'search';
    searchInput.placeholder = '<Enter> keywords!';
    inputControl.appendChild(searchInput);

    // Search icon
    const iconWrapper = document.createElement('span');
    const icon = document.createElement('img');
    iconWrapper.className = 'icon is-small is-left';
    icon.src = searchIcon;
    icon.alt = 'Search';
    inputControl.appendChild(iconWrapper);
    iconWrapper.appendChild(icon);

    // Country dropdown control
    const dropdownControl = document.createElement('div');
    const selectWrapper = document.createElement('div');
    dropdownControl.className = 'control is-medium';
    selectWrapper.className =
      'select is-info is-medium is-rounded is-fullwidth';
    field.appendChild(dropdownControl);
    dropdownControl.appendChild(selectWrapper);

    // Country dropdown items
    const select = document.createElement('select');
    selectWrapper.appendChild(select);

    validCountryList.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = country.name;
      select.appendChild(option);
    });

    // Add event listener
    searchInput.addEventListener('keyup', this.enterEvent);
  }
}

customElements.define('search-input', SearchInput);
export default SearchInput;
