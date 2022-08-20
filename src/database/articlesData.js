const mongoose = require("mongoose");
const Article = require("./articleSchema.js");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on("error", (error) => console.log(error.message));
database.once("connected", () => console.log("database connecting"));

const createNewArticle = async (articleObj) => {
  const { title, description, markdown } = articleObj;
  const article = new Article({
    title,
    description,
    markdown,
  });
  const createFeedBack = await article.save();
  return createFeedBack;
};

const getArticleById = async (id) => {
  const findRes = await Article.findOne({ _id: id }).exec();
  return findRes;
};

const getAllArticles = async () => {
  const articles = await Article.find().sort({ createAt: -1 });
  return articles;
};

const delArticleById = async (id) => {
  await Article.findByIdAndDelete(id);
  return "ok";
};

const updateArticle = async (article, articleObj) => {
  article.title = articleObj.title;
  article.description = articleObj.description;
  article.markdown = articleObj.markdown;
  await article.save();
  return "ok";
}

module.exports = {
  createNewArticle,
  getArticleById,
  getAllArticles,
  delArticleById,
  updateArticle
};
