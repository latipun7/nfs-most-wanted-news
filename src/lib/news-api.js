import axios from 'axios';
import qs from 'querystring';

export default class NewsAPI {
  /**
   * @typedef NewsAPIQuery
   * @type {Object}                - Query object for news to search
   * @property {String} country    - The 2-letter ISO 3166-1 code of the country
   * @property {String} [category] - Possible options: `business` `entertainment`
   *                                 `general` `health` `science` `sports` `technology`.
   * @property {String} [q]        - Keywords or a phrase to search for.
   * @property {Number} [pageSize] - The number of results to return per page
   *                                 (request). 20 is the default, 100 is the maximum.
   * @property {Number} [page]     - Use this to page through the results if the total
   *                                 results found is greater than the page size.
   */

  /**
   * Get the result of news request.
   * @param {String} url          - url path of request.
   *                                `/top-headlines` or `/everything`
   * @param {NewsAPIQuery} query  - News API Query
   */
  static async getNews(url, query) {
    try {
      const baseUrl = 'https://newsapi.ruppy.io';

      const newsQuery = query;
      const pageSize = query.pageSize || 9;
      newsQuery.pageSize = pageSize;

      const querystring = qs.stringify(newsQuery);
      const res = await axios.get(`${baseUrl}${url}?${querystring}`);
      return res.data;
    } catch (error) {
      return error;
    }
  }

  /**
   * Top headlines of news based on query.
   * @param {NewsAPIQuery} query - News API Query
   */
  static async topHeadlines(query) {
    try {
      const res = await NewsAPI.getNews('/top-headlines', query);
      return res.articles;
    } catch (error) {
      return error;
    }
  }
}

export const validCountryList = [
  { code: 'ar', name: 'Argentina' },
  { code: 'at', name: 'Austria' },
  { code: 'au', name: 'Australia ' },
  { code: 'be', name: 'Belgium' },
  { code: 'bg', name: 'Bulgaria' },
  { code: 'br', name: 'Brazil' },
  { code: 'ca', name: 'Canada' },
  { code: 'cn', name: 'China' },
  { code: 'co', name: 'Colombia' },
  { code: 'cu', name: 'Cuba' },
  { code: 'cz', name: 'Czechia ' },
  { code: 'eg', name: 'Egypt' },
  { code: 'fr', name: 'France ' },
  { code: 'de', name: 'Germany' },
  { code: 'gr', name: 'Greece' },
  { code: 'hk', name: 'Hong Kong' },
  { code: 'hu', name: 'Hungary' },
  { code: 'in', name: 'India' },
  { code: 'id', name: 'Indonesia' },
  { code: 'ie', name: 'Ireland' },
  { code: 'il', name: 'Israel' },
  { code: 'it', name: 'Italy' },
  { code: 'jp', name: 'Japan' },
  { code: 'kr', name: 'Korea' },
  { code: 'lv', name: 'Latvia' },
  { code: 'lt', name: 'Lithuania' },
  { code: 'my', name: 'Malaysia' },
  { code: 'mx', name: 'Mexico' },
  { code: 'ma', name: 'Morocco' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'no', name: 'Norway' },
  { code: 'ph', name: 'Philippines' },
  { code: 'pl', name: 'Poland' },
  { code: 'pt', name: 'Portugal' },
  { code: 'ro', name: 'Romania' },
  { code: 'ru', name: 'Russian Federation' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'rs', name: 'Serbia' },
  { code: 'sg', name: 'Singapore' },
  { code: 'sk', name: 'Slovakia' },
  { code: 'si', name: 'Slovenia' },
  { code: 'za', name: 'South Africa' },
  { code: 'se', name: 'Sweden' },
  { code: 'ch', name: 'Switzerland' },
  { code: 'tw', name: 'Taiwan' },
  { code: 'th', name: 'Thailand' },
  { code: 'tr', name: 'Turkey' },
  { code: 'ua', name: 'Ukraine' },
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'us', name: 'United States of America' },
  { code: 've', name: 'Venezuela' },
];
