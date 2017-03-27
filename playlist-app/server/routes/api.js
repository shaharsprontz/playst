const express = require('express');
const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('homepage works');
  console.log(req.body);
});

router.get('register', (req, res) => {
  res.send('registration page works');
  console.log(req.body);
});

router.get('playlist', (req, res) => {
  res.send('playlist page works');
  console.log(req.body);
});

router.get('youtubeapi', (req, res) => {
  res.send('youtubeapi works');
  console.log(req.body);
});



module.exports = router;