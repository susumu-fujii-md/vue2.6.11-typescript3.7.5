var express = require('express');
var logger = require('morgan');
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var _ = require('lodash');
require('dotenv').config();

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var upload = multer({ dest: './temp/' });

AWS.config.loadFromPath('../config.json');
AWS.config.update({ region: process.env.REGION });

app.post('/upload', upload.single('file'), (req, res) => {
  var s3 = new AWS.S3();
  var params = {
    Bucket: process.env.BUCKET,
    Key: _.get(req, 'file.originalname'),
  };
  var targetFile = fs.readFileSync(_.get(req, 'file.path'), (err, data) => data);
  if (targetFile) params.Body = targetFile;

  return new Promise((resolve, reject) => {
    s3.putObject(params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);

        var targets = fs.readdirSync('./temp/');
        for (var item in targets) {
          // Remove temporary file(s).
          fs.unlinkSync(`./temp/${targets[item]}`)
        }
      }
    });
  });
});

module.exports = app;
