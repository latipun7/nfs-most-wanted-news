import attachStyles from 'attach-styles';
import '../NewsCard';
import styles from './index.scss';

class NewsCardList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Append styles
    attachStyles(this.shadowRoot, styles);

    // News card list title
    const h1 = document.createElement('h1');
    h1.className = 'title is-3 has-text-centered';
    h1.innerText = 'Featured News';
    this.shadowRoot.appendChild(h1);

    // News card list wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'columns';
    this.shadowRoot.appendChild(wrapper);

    // News card list
    const newsCard = document.createElement('news-card');
    newsCard.className = 'column is-is-one-third';

    const newsCard2 = newsCard.cloneNode();
    const newsCard3 = newsCard.cloneNode();

    wrapper.appendChild(newsCard);
    wrapper.appendChild(newsCard2);
    wrapper.appendChild(newsCard3);
  }
}

customElements.define('news-card-list', NewsCardList);
export default NewsCardList;
