const { defineConfig } = require("cypress");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://github.com",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      config.env.EMAIL = process.env.EMAIL;
      config.env.SENHA = process.env.SENHA;
      config.env.USUARIO = process.env.USUARIO;

      on("task", {
        async takeScreenshot({ url, pathName }) {
          const dir = path.dirname(pathName);

          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(url);
          await page.screenshot({ path: pathName, fullPage: true });
          await browser.close();
          return pathName;
        },
      });

      return config;
    },
  },
});
