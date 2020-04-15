import '../components/Footer';
import '../components/HeaderNav';
import '../components/NewsCard';

const discover = () => {
  const header = document.createElement('header');
  const headerNav = document.createElement('header-nav');
  const main = document.createElement('main');
  const section = document.createElement('section');
  const newsCard = document.createElement('news-card');
  const footer = document.createElement('footer-content');

  main.className = 'container';
  section.className = 'section columns';
  newsCard.className = 'column is-one-third';

  // Header section
  document.body.appendChild(header);
  header.appendChild(headerNav);

  // Main section
  const newsCard2 = newsCard.cloneNode();
  const newsCard3 = newsCard.cloneNode();
  document.body.appendChild(main);
  main.appendChild(section);
  section.appendChild(newsCard);
  section.appendChild(newsCard2);
  section.appendChild(newsCard3);

  // Footer section
  document.body.appendChild(footer);
};

export default discover;
