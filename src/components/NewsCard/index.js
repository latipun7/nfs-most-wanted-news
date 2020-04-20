import attachStyles from 'attach-styles';
import styles from './index.scss';

class NewsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
   * @param {Array} news - News articles
   */
  set newsItem(news) {
    this.news = news;
    this.render();
  }

  render() {
    // Create styles
    attachStyles(this.shadowRoot, styles);

    // Create card container
    const card = document.createElement('article');
    card.className = 'card';
    this.shadowRoot.appendChild(card);

    // Create card image container
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    // Image
    const figure = document.createElement('figure');
    figure.className = 'image is-4by3';
    cardImage.appendChild(figure);

    const image = document.createElement('img');
    image.src = this.news.urlToImage;
    image.alt = this.news.title;
    figure.appendChild(image);

    // Card content wrapper
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    card.appendChild(cardContent);

    // Card header section
    const media = document.createElement('div');
    media.className = 'media';
    cardContent.appendChild(media);

    // Title
    const mediaContent = document.createElement('div');
    mediaContent.className = 'media-content';
    media.appendChild(mediaContent);

    const title = document.createElement('p');
    title.className = 'title is-4';
    title.innerText = this.news.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle is-6';
    subtitle.innerText = this.news.author;

    // Button
    const rightContent = document.createElement('div');
    const button = document.createElement('button');
    rightContent.className = 'media-right';
    button.className = 'button is-small is-info is-rounded';
    button.innerText = 'Add';

    media.appendChild(rightContent);
    rightContent.appendChild(button);
    mediaContent.appendChild(title);
    mediaContent.appendChild(subtitle);

    // Content description
    const content = document.createElement('div');
    content.className = 'content';
    cardContent.appendChild(content);

    const description = document.createElement('p');
    description.innerText = this.news.description;
    content.appendChild(description);

    const time = document.createElement('time');
    time.dateTime = this.news.publishedAt;
    time.innerText = this.news.publishedAt;
    content.appendChild(time);
  }
}

customElements.define('news-card', NewsCard);
export default NewsCard;
