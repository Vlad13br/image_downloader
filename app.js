const fs = require("fs");
const https = require("https");

const img_url = "Your url";

function downloadImg(url) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream("req_img.jpg");
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve("Img successfully downloaded!"));
        });
      })
      .on("error", (error) => {
        reject("Upps... Check the URL please!");
      });
  });
}

async function main() {
  try {
    await downloadImg(img_url);
  } catch (error) {
    console.error(error);
  }
}

main();
