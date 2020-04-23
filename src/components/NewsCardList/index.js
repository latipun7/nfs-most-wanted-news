import attachStyles from 'attach-styles';
import clearAllChild from 'clear-all-child';
import newsAPI from 'news-api';
import '../NewsCard';
import styles from './index.scss';

class NewsCardList extends HTMLElement {
  constructor() {
    super();
    this.news = [];
    this.keywords = '';
    this.country = '';
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
   * Set news list to render
   * @param {Array} news - news array from API response
   * @param {String} keywords - keywords string from input
   * @param {String} country - country name from select dropdown
   */
  newsList(news, keywords, country) {
    this.news = news;
    this.keywords = keywords;
    this.country = country;
    this.isFeatured = false;
    this.isLoading = false;
    this.render();
  }

  async topHeadlines() {
    try {
      const res = await newsAPI.topHeadlines({ country: 'id' });
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
      // activate loading overlay when first page loading
      loadingOverlay.classList.add('is-active');
    } else {
      // remove loading overlay
      loadingOverlay.classList.remove('is-active');

      const resultText = document.createElement('div');
      const text = document.createElement('p');
      resultText.className = 'column is-full';
      text.className = 'subtitle is-3 has-text-centered';

      if (this.news.length === 0) {
        // if search result not found
        text.innerText = 'No result.';
        wrapper.appendChild(resultText);
        resultText.appendChild(text);
      } else {
        // display search result
        if (!this.isFeatured) {
          text.innerText = `Top headlines ${
            this.keywords !== '' ? `of ${this.keywords}` : ''
          } in ${this.country}.`;
        }
        wrapper.appendChild(resultText);
        resultText.appendChild(text);

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
