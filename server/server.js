import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
import { db } from "./dbConnection.js";

// set up port & Root
const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json("Welcome to the root.");
});

app.get("/guestbook", async function (req, res) {
  const query = await db.query(
    `SELECT guestname, date, content FROM guestbook`
  );
  res.json(query.rows);
});

//Get from user input in index.html, send to db
app.post("/guestbook", function (req, res) {
  const newGuestEntry = req.body;
  console.log(newGuestEntry);
  const date = new Date().toLocaleDateString(); //all submitted messages to have date of date submitted; not a selector
  const query = db.query(
    `INSERT INTO guestbook (guestname, date, content) VALUES ($1, $2, $3)`,
    [newGuestEntry.formValues.guestname, date, newGuestEntry.formValues.content]
  );

  res.json("data sent", query);
  console.log(res.json);
});
