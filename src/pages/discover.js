import '../components/Footer';
import '../components/HeaderNav';
import '../components/NewsCard';
import '../components/SearchInput';

const discover = () => {
  const header = document.createElement('header');
  const headerNav = document.createElement('header-nav');
  const main = document.createElement('main');
  const section = document.createElement('section');
  const searchInput = document.createElement('search-input');
  const newsCard = document.createElement('news-card');
  const footer = document.createElement('footer-content');

  main.className = 'container';
  section.className = 'section';
  newsCard.className = 'column is-one-third';

  // Header section
  document.body.appendChild(header);
  header.appendChild(headerNav);

  // Main section
  const newsCard2 = newsCard.cloneNode();
  const newsCard3 = newsCard.cloneNode();
  document.body.appendChild(main);

  // Search input section
  const searchInputSection = section.cloneNode();
  const searchColumns = document.createElement('div');
  const wrapper = document.createElement('div');
  searchColumns.className = 'columns is-tablet is-centered';
  wrapper.className = 'column is-half';
  main.appendChild(searchInputSection);
  searchInputSection.appendChild(searchColumns);
  searchColumns.appendChild(wrapper);
  wrapper.appendChild(searchInput);

  // News section
  const newsSection = section.cloneNode();
  const newsColumns = document.createElement('div');
  newsColumns.className = 'columns';
  main.appendChild(newsSection);
  newsSection.appendChild(newsColumns);
  newsColumns.appendChild(newsCard);
  newsColumns.appendChild(newsCard2);
  newsColumns.appendChild(newsCard3);

  // Footer section
  document.body.appendChild(footer);
};

export default discover;
