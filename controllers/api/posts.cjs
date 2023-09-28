const Post = require("../../models/post.cjs")


module.exports = {
  create,
  index
};

async function create(req, res) {
  try {
    // Add the user to the database
    const post = await Post.create(req.body);
    // res.json(post)
    console.log(post)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const posts = await Post.find({}).sort({'updatedAt': -1}).exec()
    // 
    // re-sort based upon the sortOrder of the categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
