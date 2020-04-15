import attachStyles from 'attach-styles';
import styles from './index.scss';

class NewsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
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
    image.src =
      'https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy82ZWZmYmY1ZjNiYTRmNWVkN2E2OGYxNjdhNTNhM2U3ZS5qcGc=.jpg';
    image.alt =
      'Libra Stablecoin is Still a Major Threat to Bitcoin: Economist';
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
    title.innerText =
      'Libra Stablecoin is Still a Major Threat to Bitcoin: Economist';

    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle is-6';
    subtitle.innerText = 'Cointelegraph By Samuel Haig';

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
    description.innerText =
      'Economist and academic John Vaz believes that Facebook’s Libra stablecoin is still shaping up to be Bitcoin’s strongest competition';
    content.appendChild(description);

    const time = document.createElement('time');
    time.dateTime = '2020-04-15T05:49:00Z';
    time.innerText = '2020-04-15T05:49:00Z';
    content.appendChild(time);
  }
}

customElements.define('news-card', NewsCard);
export default NewsCard;
