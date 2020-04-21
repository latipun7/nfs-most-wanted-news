import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import newsApi from 'news-api';
import '../NewsCard';
import styles from './index.scss';

class NewsCardList extends HTMLElement {
  constructor() {
    super();
    this.news = [];
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.topHeadlines().then((result) => {
      this.newsList = result;
    });
  }

  /**
   * @param {Array} news - News articles
   */
  set newsList(news) {
    this.news = news;
    this.render();
  }

  async topHeadlines() {
    try {
      const res = await newsApi.topHeadlines({ country: 'id' });
      this.news = [];
      return res;
    } catch (error) {
      return error;
    }
  }

  render() {
    const root = this.shadowRoot;

    // Allow re-render
    clearAllChild(root);

    // Append styles
    attachStyles(root, styles);

    // News card list title
    const h1 = document.createElement('h1');
    h1.className = 'title is-3 has-text-centered';
    h1.innerText = 'Featured News';
    root.appendChild(h1);

    // News card list wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'columns is-multiline';
    root.appendChild(wrapper);

    // News card list
    this.news.forEach((newsItem) => {
      const newsCard = document.createElement('news-card');
      newsCard.className = 'column is-one-third';
      newsCard.newsItem = newsItem;
      wrapper.appendChild(newsCard);
    });
  }
}

customElements.define('news-card-list', NewsCardList);
export default NewsCardList;
