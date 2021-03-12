const page = require("webpage").create();
const system = require("system");

const img = system.args[2];

const address = "https://filiplitwora.github.io/caperenderer/";

page.open(address, function (status) {
  if (status !== "success") {
    console.log("Unable to access network");
  } else {
    var ua = page.evaluate(function () {
      document.querySelector("button").click();
    });
    console.log(ua);
  }
  phantom.exit();
});
