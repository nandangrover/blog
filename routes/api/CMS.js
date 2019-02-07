const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
let multer = require('multer');
// let upload = multer();
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const Image = require('../../models/Images');

cloudinary.config({
  cloud_name: require('../../config/keys').CLOUD_NAME,
  api_key: require('../../config/keys').API_KEY,
  api_secret: require('../../config/keys').API_SECRET
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "CMS",
  allowedFormats: ["jpg", "png"],
  transformation: [{ crop: "limit" }]
  });

const parser = multer({ storage: storage });

// const Item = require('../../models/blog');

// const app = require('../../server');
// const db = require('../../config/keys').mongoURI;
// var mongoDriver = mongoose.mongo;
// var gridfs = new Gridfs(db, mongoDriver);

router.post('/images', parser.single("file"),  function (req, res) {
  // console.log(req.file) // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;

  Image.create(image) // save image information in database
    .then(newImage => res.json(image.url))
    .catch(err => console.log(err));
  
  // var gridfs = router.get('gridfs');
//   console.log(gridfs);
//   var file = req.file;
  
//   console.log(gridfs);
  
//  var writeStream = gridfs.createWriteStream({
//   filename: file.originalname,
//   content_type: file.mimetype,
//   // metadata: req.body.postText,
//  });
//  writeStream.on('close', function (file) {
//      res.send(`File has been uploaded ${file._id}`);
//  });
//  req.pipe(writeStream);
});

//GET http://localhost:3000/file/[mongo_id_of_file_here]
router.get('/titleImg/:fileId', function (req, res) {
 var gridfs = app.get('gridfs');
 gridfs.createReadStream({
     _id: req.params.fileId // or provide filename: 'file_name_here'
 }).pipe(res);
});

module.exports = router;