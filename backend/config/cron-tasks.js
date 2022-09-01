module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  "* 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04010000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04010000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "5 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04020000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04020000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "10 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04030000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04030000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "15 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04040000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04040000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "20 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04050000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04050000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "25 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04060000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04060000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "30 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04070000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04070000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "35 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04080000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04080000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "40 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04090000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04090000"
      );
    } catch (err) {
      console.log(err);
    }
  },
  "45 2 * * *": ({ strapi }) => {
    console.log(`Cron - 04100000`, new Date());
    try {
      strapi.api["fetch-products"].services["cron-products"].cronProducts(
        "04100000"
      );
    } catch (err) {
      console.log(err);
    }
  },
};
