const express = require('express');
const { cloudinary } = require('./utils/cloudinary');
require('dotenv').config();
var cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.post('/api/upload', async (req, res) => {
  try {
    const based64file = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(based64file, {
      upload_preset: 'yaya',
    });
    console.log(uploadResponse);
    res.json({ msg: 'yaya' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error.message });
  }
});
app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:yaya')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
