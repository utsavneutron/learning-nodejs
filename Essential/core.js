const path = require("path");
const util = require("util");
const v8 = require("v8");

//const dirUploads = path.join(__dirname,"www","files","uploads");

util.log(v8.getHeapStatistics());