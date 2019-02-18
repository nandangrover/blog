const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
let multer = require('multer');
// let upload = multer();
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const Image = require('../../models/Images');
const CMS = require('../../models/CMS');

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

router.post('/images', parser.single("file"),  function (req, res) {
  // console.log(req.file) // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;

  Image.create(image) // save image information in database
    .then(newImage => res.json(image.url))
    .catch(err => console.log(err));

});

router.post('/article', (req, res) => {
  const newArticle = new CMS({
    user: req.body.user,
    profilePic: req.body.profilePic,
    title: req.body.title,
    titleImage: req.body.titleImage,
    articleDesc: req.body.articleDesc,
    articleContent: req.body.articleContent
  });
  newArticle.save().then(article => res.json(article));
})

router.get('/article', (req, res) => {
  CMS.find()
    .sort({
      date: -1
    })
    .then(articles => res.json(articles))
})

router.get('/singleArticle/:id', (req, res) => {
  CMS.findById(req.params.id)
    .then(articles => res.json(articles))
})

module.exports = router;