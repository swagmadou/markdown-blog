const mongoose = require("mongoose");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);
const marked = require("marked");
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  markdown: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  htmlContent: {
    type: String,
    required: true,
  },
});

articleSchema.pre("validate", function (next) {
  if (this.markdown) {
    this.htmlContent = dompurify.sanitize(marked.parse(this.markdown));
  }
  next();
});
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
