var cors_proxy = require("cors-anywhere").createServer({
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"],
  // See README.md for other options
});

var functions = require("firebase-functions");
exports.proxyWithCorsAnywhere = functions.https.onRequest((req, res) => {
  cors_proxy.emit("request", req, res);
});
