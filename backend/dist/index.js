"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _authRoutes = _interopRequireDefault(require("./router/auth.routes.js"));
var _db = require("./lib/db.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.use((0, _cors["default"])({
  origin: 'https://portfolio-henna-pi-47.vercel.app',
  credentials: true
}));
app.use(_express["default"].json());

// Routes
app.use('/api', _authRoutes["default"]);

// Health check or base route
app.get('/', function (req, res) {
  res.json({
    message: "ok",
    status: true
  });
});
app.listen(PORT, function () {
  console.log("Server Running on ".concat(PORT));
  (0, _db.connectDB)();
});