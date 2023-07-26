const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  const items = [
    { 
      title: "D",
      message: "evelop applications/services easily"
    },
    {
      title: "E",
      message: "JS uses JavaScript to render HTML"
    },
    {
      title: "V",
      message: "ictory for a developer"
    },
  ];

  const subtitle = "A templating language for creating HTML pages using JS"

  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
})

app.get("/about", function(req, res) {
  res.render("pages/about");
})

app.listen(8080);
console.log("Server running!!")