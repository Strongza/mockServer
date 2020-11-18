

const express = require("express");

const mockTest = require("./MoclFIle/test.json");

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/justforyou/api/test", (req, res) => {
  res.json(mockTest)
});

const port = process.env.PORT || 64822;
app.listen(port, () => console.log(`Listening on port${port}...`));
