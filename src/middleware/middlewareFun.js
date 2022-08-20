const showArticle = (req, res) => {
  const findRes = req.findRes;
  if (findRes == null) {
    res.redirect("/api/articles");
  }
  res.render("show", { article: findRes });
};

const editArticle = (req, res) => {
  const findRes = req.findRes;
  if (findRes == null) {
    res.redirect("/api/articles");
  }
  res.render("edit", { article: findRes });
};

module.exports = { showArticle, editArticle };
