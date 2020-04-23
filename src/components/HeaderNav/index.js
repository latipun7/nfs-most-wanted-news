import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import logo from '../../assets/news.svg';
import styles from './index.scss';

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
   * @param {Event} currentTarget
   */
  toggleMenu({ currentTarget }) {
    const { target } = currentTarget.dataset;
    const targetElement = this.shadowRoot.getElementById(target);
    currentTarget.classList.toggle('is-active');
    targetElement.classList.toggle('is-active');
  }

  render() {
    const root = this.shadowRoot;

    // Allow re-render
    clearAllChild(root);

    // Create styles
    attachStyles(root, styles);

    // Create navigation bar
    const navBar = document.createElement('nav');
    navBar.setAttribute('aria-label', 'main navigation');
    navBar.className = 'navbar is-fixed-top';
    root.appendChild(navBar);

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
    const title = document.createElement('span');
    imgLink.className = 'navbar-item';
    imgLink.href = '/';
    img.src = logo;
    img.alt = 'NFS (news)';
    title.innerText = 'News for Search';
    navBarBrand.appendChild(imgLink);
    imgLink.appendChild(img);
    imgLink.appendChild(title);

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
    discover.href = '/';
    readingList.href = 'https://newsapi.org/docs/endpoints/top-headlines';
    readingList.target = '_blank';
    readingList.rel = 'noreferrer noopener';
    navMenu.appendChild(navMenuEnd);
    navMenuEnd.appendChild(discover).innerText = 'Discover';
    navMenuEnd.appendChild(readingList).innerText = 'API Docs';

    // Click Event for toggling menu
    const buttonEvent = root.querySelector('.navbar-burger');
    buttonEvent.addEventListener('click', this.toggleMenu.bind(this));
  }
}

customElements.define('header-nav', HeaderNav);
export default HeaderNav;
