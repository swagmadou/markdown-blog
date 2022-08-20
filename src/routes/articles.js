const express = require("express");
const {showArticle, editArticle} = require("../middleware/middlewareFun.js");
const router = express.Router();
const articleControlle = require("../controllers/articleController.js");

// get - 首页路由
// post - 处理添加文档的路由
router
  .route("/")
  .get(articleControlle.getAllArticles)
  .post(articleControlle.createNewArticle, articleControlle.getArticleById, showArticle);

// 跳转到添加新文档页面的路由  
router.get("/new", articleControlle.getNewRoute);

// 跳转到修改文档页面的路由
router.get("/edit/:id", articleControlle.getArticleById, editArticle);

// 查看指定id文档路由
router.get("/:id", articleControlle.getArticleById, showArticle);

// 处理删除文档的路由
router.post("/del", articleControlle.delArticleById);

// 处理修改文档的路由
router.post("/edit", articleControlle.getArticleById, articleControlle.updateArticle)

module.exports = router;

