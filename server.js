const express = require('express');
const app = express();
const base64Img = require('base64-img');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(express.static('./media'))
app.use(bodyParser.json({ limit: '50mb' }));

app.post('/upload', (req, res) => {
  const { image } = req.body;
  base64Img.img(image, './media', Date.now(), function(_err, filepath) {
    const pathArr = filepath.split('/')
    const fileName = pathArr[pathArr.length - 1];

    res.status(200).json({
      success: true,
      url: `http://127.0.0.1:${port}/${fileName}`
    })
  });
});

app.listen(port, () => {
  console.info(`listening on port ${port}`);
})