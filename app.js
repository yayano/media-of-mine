const express = require('express');
const mongoose = require('mongoose');
const { cloudinary } = require('./utils/cloudinary');
const User = require('./userModel');
require('dotenv').config();
var cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
mongoose
  .connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    })
  );
app.post('/api/upload', async (req, res) => {
  try {
    const based64file = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(based64file, {
      upload_preset: 'yaya',
    });
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

  const fileInfo = resources.map((file) => ({
    public_id: file.public_id,
    path: file.url,
  }));
  res.json({ payload: fileInfo });
});

// app.post('/api/register', (req, res) => {
//   const { username, password } = req.body;
//   const user = new User({ username, password });
//   try {
//     user
//       .save()
//       .then((res) => res)
//       .then((result) => console.log(result));
//     res.json({ mssg: 'successful' });
//   } catch (error) {
//     console.log(error);
//   }
// });
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password })
    .then((result) => console.log('loggedIn'))
    .catch((error) => console.log(error));
  res.json({ mssg: `${username} logged in ` });
});
