const puppeteer = require("puppeteer");
//package for generating random string for names of screenshot and pdfs
// var randomstring = require("randomstring");

void (async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431"
    );

    // const rndm = randomstring.generate(8);

    // un-comment this if want to save screenshot
    // await page.screenshot({
    //   path: "./screenshots/" + rndm + ".png",
    // });
    const status = await page.evaluate(() => {
      const soldOut = document.querySelector(
        "#container > div > div.t-0M7P._3GgMx1._2doH3V > div._3e7xtJ > div._1HmYoV.hCUpcT > div._1HmYoV._35HD7C.col-8-12 > div:nth-child(3) > div._9-sL7L"
      );
      if (soldOut) {
        return soldOut.textContent;
      } else {
        return "In Stock";
      }
    });
    // un-comment this if want to save pdf
    // await page.pdf({ path: "./pdfs/" + rndm + ".pdf" });
    console.log("Item is", status);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();

//"#container > div > div.t-0M7P._3GgMx1._2doH3V > div._3e7xtJ > div._1HmYoV.hCUpcT > div._1HmYoV._35HD7C.col-8-12 > div:nth-child(3) > div._9-sL7L"
//"https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431"
