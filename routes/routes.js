const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const util = require('util');
const uuid = require('uuid');

const read = util.promisify(fs.readFile);

router.get('/api/notes', (req, res) => {
  read('./db/db.json', 'utf8').then(data => {
    res.send(data);
    console.log(data);
  });
  });

router.get('/notes', (req, res) => {
    res.sendFile(path.join (__dirname, '../public/notes.html'));
});

  router.post('/api/notes', (req, res) => {
    // console.log(req.body);
    read('./db/db.json', 'utf8').then(data => {
      const db = JSON.parse(data);
      db.push(
        {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4()
          }
    );
      fs.writeFile("./db/db.json", JSON.stringify(db), (err, data) => {
        return;
      });
      res.send(db);
    });

  });
//grab id to delete. method off of router to delete
module.exports = router;