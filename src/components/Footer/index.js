import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import styles from './index.scss';

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const root = this.shadowRoot;

    // Allow re-render
    clearAllChild(root);

    // Attach styles
    attachStyles(root, styles);

    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'footer';
    root.appendChild(footer);

    // Create footer content container
    const footerContentContainer = document.createElement('div');
    footerContentContainer.className = 'content has-text-centered';
    footer.appendChild(footerContentContainer);

    // Footer content
    const footerContent = document.createElement('p');
    footerContent.innerHTML = `
      Powered by <a href="https://newsapi.org/docs/get-started" target="_blank" rel="noreferrer noopener">newsapi.org</a>.</br>
      Icon made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank" rel="noreferrer noopener">Smashicons</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer noopener">www.flaticon.com</a>.</br>
      Copyright &copy; ${new Date().getFullYear()} <strong>Latif Sulistyo</strong>.
    `;
    footerContentContainer.appendChild(footerContent);
  }
}

customElements.define('footer-content', Footer);
export default Footer;
