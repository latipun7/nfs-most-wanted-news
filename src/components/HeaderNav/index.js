import styles from './index.scss';
import logo from '../../assets/news.svg';

class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  /**
   * Menu button click event
   * @param {EventTarget} event.currentTarget
   */
  toggleMenu({ currentTarget }) {
    const { target } = currentTarget.dataset;
    const targetElement = this.shadowRoot.getElementById(target);
    currentTarget.classList.toggle('is-active');
    targetElement.classList.toggle('is-active');
  }

  render() {
    // Create styles
    const style = document.createElement('style');
    style.textContent = styles;
    this.shadowRoot.appendChild(style);

    // Create navigation bar
    const navBar = document.createElement('nav');
    navBar.setAttribute('aria-label', 'main navigation');
    navBar.className = 'navbar';
    this.shadowRoot.appendChild(navBar);

    // Create container for header navigation
    const container = document.createElement('div');
    container.className = 'container';
    navBar.appendChild(container);

    // Create navigation bar logo section
    const navBarBrand = document.createElement('div');
    navBarBrand.className = 'navbar-brand';
    container.appendChild(navBarBrand);

    // Image logo item
    const imgLink = document.createElement('a');
    const img = document.createElement('img');
    imgLink.className = 'navbar-item';
    imgLink.href = '/';
    img.src = logo;
    img.alt = 'NFS: Most Wanted (News)';
    navBarBrand.appendChild(imgLink);
    imgLink.appendChild(img);

    // Menu button on mobile
    const menuButton = document.createElement('a');
    const span = document.createElement('span');
    menuButton.setAttribute('role', 'button');
    menuButton.setAttribute('aria-label', 'menu');
    menuButton.setAttribute('data-target', 'navMenu');
    menuButton.className = 'navbar-burger burger';
    const stripOne = span.cloneNode();
    const stripTwo = span.cloneNode();
    const stripThree = span.cloneNode();
    navBarBrand.appendChild(menuButton);
    menuButton.append(stripOne, stripTwo, stripThree);

    // Navigation Menu
    const navMenu = document.createElement('div');
    navMenu.setAttribute('id', 'navMenu');
    navMenu.className = 'navbar-menu';
    container.appendChild(navMenu);

    // Nav Menu Links
    const navMenuEnd = document.createElement('div');
    const navMenuLink = document.createElement('a');
    navMenuEnd.className = 'navbar-end';
    navMenuLink.className = 'navbar-item';
    const discover = navMenuLink.cloneNode();
    const readingList = navMenuLink.cloneNode();
    navMenu.appendChild(navMenuEnd);
    navMenuEnd.appendChild(discover).innerText = 'Discover';
    navMenuEnd.appendChild(readingList).innerText = 'Reading List';

    // Click Event for toggling menu
    const buttonEvent = this.shadowRoot.querySelector('.navbar-burger');
    buttonEvent.addEventListener('click', this.toggleMenu.bind(this));
  }
}

customElements.define('header-nav', HeaderNav);
export default HeaderNav;
