const articleService = require("../services/articleService.js");

// 获取全部文章
const getAllArticles = async (req, res) => {
  const articles = await articleService.getAllArticles();
  res.render("index", { articles: articles });
};

// 创建新的文章
const createNewArticle = async (req, res, next) => {
  const articleObj = {
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  };
  const createFeedBack = await articleService.createNewArticle(articleObj);
  req.id = createFeedBack._id;
  next();
};

// 根据 id 获取文章
const getArticleById = async (req, res, next) => {
  const id = req.id || req.params.id || req.body.id;
  const findRes = await articleService.getArticleById(id);
  req.findRes = findRes;
  next();
};

// 跳转到创建文章界面
const getNewRoute = async (req, res) => {
  res.render("newIndex");
};

// 删除指定的文章
const delArticleById = async (req, res) => {
  const id = req.body.id;
  const delRes = await articleService.delArticleById(id);
  if (delRes == "ok") res.redirect("/api/articles");
};

const updateArticle = async (req, res) => {
  const { title, description, markdown, id} = req.body;
  const articleObj = {
    title,
    description,
    markdown,
  };
  const updateRes = await articleService.updateArticle(req.findRes, articleObj);
  if(updateRes == "ok") res.redirect("/api/articles/" + id);
};

module.exports = {
  getAllArticles,
  createNewArticle,
  getArticleById,
  getNewRoute,
  delArticleById,
  updateArticle,
};
