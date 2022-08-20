const articlesData = require("../database/articlesData");

const createNewArticle = (articleObj) => {
    return articlesData.createNewArticle(articleObj);
}

const getArticleById = (id) => {
    return articlesData.getArticleById(id);
}

const getAllArticles = () => {
    return articlesData.getAllArticles();
}

const delArticleById = (id) => {
    return articlesData.delArticleById(id);
}
const updateArticle = (article, articleObj) => {
    return articlesData.updateArticle(article, articleObj);
}

module.exports = {
    createNewArticle,
    getArticleById,
    getAllArticles,
    delArticleById,
    updateArticle
}