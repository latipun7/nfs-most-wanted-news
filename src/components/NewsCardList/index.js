import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import newsApi from 'news-api';
import '../NewsCard';
import styles from './index.scss';

class NewsCardList extends HTMLElement {
  constructor() {
    super();
    this.news = [];
    this.isLoading = true;
    this.isFeatured = true;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.topHeadlines().then((result) => {
      this.isFeatured = true;
      this.news = result;
      this.isLoading = false;
      this.render();
    });
  }

  /**
   * @param {Array} news - News articles
   */
  set newsList(news) {
    this.news = news;
    this.isFeatured = false;
    this.isLoading = false;
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
    h1.innerText = this.isFeatured ? 'Featured News' : 'Search Results';
    root.appendChild(h1);

    // News card list wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'columns is-multiline';
    root.appendChild(wrapper);

    // Loading overlay
    const loadingOverlay = document.createElement('div');
    const loading = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loading.className = 'loading';
    wrapper.appendChild(loadingOverlay);
    loadingOverlay.appendChild(loading);

    // News card list
    if (this.isLoading) {
      loadingOverlay.classList.add('is-active');
    } else {
      loadingOverlay.classList.remove('is-active');
      if (this.news.length === 0) {
        const noResult = document.createElement('div');
        const text = document.createElement('p');
        noResult.className = 'column is-full';
        text.className = 'subtitle is-3 has-text-centered';
        text.innerText = 'No result.';
        wrapper.appendChild(noResult);
        noResult.appendChild(text);
      } else {
        this.news.forEach((newsItem) => {
          const newsCard = document.createElement('news-card');
          newsCard.className = 'column is-one-third';
          newsCard.newsItem = newsItem;
          wrapper.appendChild(newsCard);
        });
      }
    }
  }
}

customElements.define('news-card-list', NewsCardList);
export default NewsCardList;
