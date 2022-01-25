import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
const user = ["nawrose", "ratul", "saminvai"];

app.get("/user", (req, res) => {
  res.json(user);
});
app.get("/user/:name", (req, res) => {
  //wildcard_routing
  //   console.log(req.params.name);
  user.forEach((item, index) => {
    if (req.params.name === item) {
      res.json(item);
    }
    if (index + 1 === user.length) {
      res.json("user not found");
    }
  });
});

app.post("/user", (req, res) => {
  //   console.log(req.body.name);
  const name = req.body.name;
  user.push(name);
  res.json(name);
});

app.delete("/user/:name", (req, res) => {
  user.forEach((item, index) => {
    if (req.params.name === item) {
      user.splice(index, 1);
      res.json("user Delete succesfully");
    }
    if (index + 1 === user.length) {
      res.json("user not found");
    }
  });
});

app.put("/user/:name", (req, res) => {
  user.forEach((item, index) => {
    if (req.params.name === item) {
      user.splice(index, 1, req.body.name);
      res.json(req.body.name);
    }
    if (index + 1 === user.length) {
      res.json("user not found");
    }
  });
});

app.get("/", (req, res) => {
  res.json("hello World");
});

app.listen(3000, () => console.log("Port is running at 3000"));
