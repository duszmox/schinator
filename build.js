const fs = require("fs");
const browserify = require("browserify");

browserify("popup.js")
  .bundle()
  .pipe(fs.createWriteStream("popup_bundle.js"));

console.log("Extension built successfully.");
