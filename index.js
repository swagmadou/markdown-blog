const express = require("express");
const articleRouter = require("./src/routes/articles.js");
const app = express();
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use("/api/articles", articleRouter);
app.listen(3000, () => console.log("listing the port on 3000"));