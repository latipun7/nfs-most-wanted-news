// Polyfills ECMAScript for support wider browsers range.
// Defaults browserlist query (https://github.com/browserslist/browserslist#best-practices)
// Result of `npx browserlist`:
//   and_chr 80, and_ff 68, and_qq 1.2, and_uc 12.12, android 80, baidu 7.12,
//   chrome 80, chrome 79, edge 80, edge 79, edge 18, firefox 74, firefox 73,
//   firefox 72, firefox 68, ie 11, ios_saf 13.3, ios_saf 13.2, ios_saf 13.0-13.1,
//   ios_saf 12.2-12.4, kaios 2.5, op_mini all, op_mob 46, opera 66,
//   opera 65, safari 13, safari 12.1, samsung 11.1, samsung 10.1
import '@babel/runtime/regenerator';
import 'core-js/stable';

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .catch((registrationError) => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed: ', registrationError);
      });
  });
}
