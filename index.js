

const express = require("express");
const cors = require('cors') 
const mockTest = require("./MoclFIle/test.json");
const mockTestErr = require("./MoclFIle/test_err.json");

const app = express();

app.use(cors())

app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(function(req, res, next) {
//   req.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("/justforyou/api/test", (req, res) => {
  // console.log(res);
  res.json(mockTest)
});

app.post("/justforyou/api/", (req,res) => {
  console.log(req);
  res.json(mockTestErr)
})
const port = process.env.PORT || 64822;
app.listen(port, () => console.log(`Listening on port${port}...`));

