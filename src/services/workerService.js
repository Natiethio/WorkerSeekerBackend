const Worker = require("../models/worker")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const cookieParser = require("cookie-parser");
const cloudinary = require("../configration/cloudinary");
require('dotenv').config();
const { Readable } = require("stream");
const session = require('express-session');
// const { generateSecretToken } = require("../utils/jwtUtils")
// const { generateRefreshToken } = require("../utils/jwtUtils")
const fs = require("fs");
const path = require("path");

require('dotenv').config();

class workerService {
  async getAllWorkers() {
    return await Worker.find();
  }
}

module.exports = new workerService();