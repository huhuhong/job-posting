const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const path = require('path');
var multer  = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/document/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
})


var upload = multer({ storage })

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults(['./public']);

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

server.use(middlewares);


// Add createdAt to all POSTS
server.use((req, res, next) => {
  // if (req.method === "POST") {
    req.body.createdAt = Date.now();
  // }
  // Continue to JSON Server router
  next();
});

server.post("/jobs/", function(req, res, next) {
  const error = validateJob(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.post('/uploadfile', upload.single("document"), async (req, res) => {
  try {
      // const data = req.file;

      console.log(req.file);

      res.send({ file: req.file });
  } catch (err) {
    console.log(err);
      res.sendStatus(400);
  }
})



function validateJob(job) {
  if (!job.title) return "Title is required.";
  if (!job.location) return "Location is required.";
  if (!job.description) return "Description is required.";
  return "";
}


server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})