import '../components/Footer';
import '../components/HeaderNav';

const discover = () => {
  const header = document.createElement('header');
  const headerNav = document.createElement('header-nav');
  const main = document.createElement('main');
  const footer = document.createElement('footer-content');

  document.body.appendChild(header);
  header.appendChild(headerNav);
  document.body.appendChild(main);
  document.body.appendChild(footer);
};

export default discover;
