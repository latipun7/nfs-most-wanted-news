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

  get selectValue() {
    const select = this.shadowRoot.querySelector('select');
    return select.options[select.selectedIndex].value;
  }

  get selectName() {
    const select = this.shadowRoot.querySelector('select');
    return select.options[select.selectedIndex].text;
  }

  get inputValue() {
    return this.shadowRoot.querySelector('input').value;
  }

  set inputValue(value) {
    this.shadowRoot.querySelector('input').value = value;
  }

  /**
   * @param {Boolean} value - state is loading or not
   */
  set loadingState(value) {
    const control = this.shadowRoot.querySelector('#input-control');
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

    // Label field
    const labelField = document.createElement('div');
    labelField.className = 'field-label is-large';
    field.appendChild(labelField);

    // Labels
    const countryLabel = document.createElement('label');
    const searchLabel = document.createElement('label');
    countryLabel.htmlFor = 'country';
    countryLabel.className = 'label';
    countryLabel.innerText = 'Select Country and';
    searchLabel.htmlFor = 'search';
    searchLabel.className = 'label';
    searchLabel.innerText = 'Input search keywords.';
    labelField.appendChild(countryLabel);
    labelField.appendChild(searchLabel);

    // Country dropdown control
    const dropdownControl = document.createElement('div');
    const selectWrapper = document.createElement('div');
    dropdownControl.className = 'control is-medium';
    selectWrapper.className =
      'select is-primary is-medium is-rounded is-fullwidth';
    field.appendChild(dropdownControl);
    dropdownControl.appendChild(selectWrapper);

    // Country dropdown items
    const select = document.createElement('select');
    select.id = 'country';
    selectWrapper.appendChild(select);

    validCountryList.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = country.name;

      // select Indonesia at first render
      if (country.code === 'id') {
        option.selected = true;
      }

      select.appendChild(option);
    });

    // Input search control
    const inputControl = document.createElement('div');
    inputControl.id = 'input-control';
    inputControl.className = 'control is-expanded is-medium has-icons-right';
    field.appendChild(inputControl);

    // Search input
    const searchInput = document.createElement('input');
    searchInput.className = 'input is-primary is-medium is-rounded';
    searchInput.id = 'search';
    searchInput.type = 'search';
    searchInput.placeholder = '<Enter> keywords!';
    inputControl.appendChild(searchInput);

    // Search icon
    const iconWrapper = document.createElement('span');
    const icon = document.createElement('img');
    iconWrapper.className = 'icon is-small is-right';
    icon.src = searchIcon;
    icon.alt = 'Search';
    inputControl.appendChild(iconWrapper);
    iconWrapper.appendChild(icon);

    // Add event listener
    searchInput.addEventListener('keyup', this.enterEvent);
  }
}

customElements.define('search-input', SearchInput);
export default SearchInput;
