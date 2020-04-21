import axios from 'axios';
import qs from 'querystring';

class NewsAPI {
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

export default NewsAPI;
