const workerService  = require("../services/workerService");
const cookieParser = require("cookie-parser");
const secretKey = process.env.TOKEN_KEY;

require('dotenv').config();
const session = require('express-session');
const fs = require("fs");
const path = require("path");
const jwt = require('jsonwebtoken');



class workerController {
  async getAllWorkers(req, res) {
    try {
      const allworkers = await workerService.getAllWorkers();
      res.json(allworkers);
    }
    catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new workerController();