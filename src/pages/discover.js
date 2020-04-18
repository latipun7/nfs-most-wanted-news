import '../components/Footer';
import '../components/HeaderNav';
import '../components/NewsCardList';
import '../components/SearchInput';

const discover = () => {
  const header = document.createElement('header');
  const headerNav = document.createElement('header-nav');
  const main = document.createElement('main');
  const section = document.createElement('section');
  const searchInput = document.createElement('search-input');
  const newsCardList = document.createElement('news-card-list');
  const footer = document.createElement('footer-content');

  main.className = 'container';
  section.className = 'section';

  // Header section
  document.body.appendChild(header);
  header.appendChild(headerNav);

  // Main section
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
  main.appendChild(newsSection);
  newsSection.appendChild(newsCardList);

  // Footer section
  document.body.appendChild(footer);
};

export default discover;
