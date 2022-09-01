module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  "* 0 * * *": ({ strapi }) => {
    strapi.api["fetch-products"].services["cron-products"].cronProducts(
      "04000000"
    );
  },
  "5 0 * * *": ({ strapi }) => {
    strapi.api["fetch-products"].services["cron-products"].cronProducts(
      "04020000"
    );
  },
};
