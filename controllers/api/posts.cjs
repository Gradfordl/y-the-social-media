const Post = require("../../models/post.cjs")
const User = require("../../models/user.cjs")


module.exports = {
  create,
  index,
  getUserPosts,
  deletePost,
  updatePost
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

async function getUserPosts(req, res) {
  try {
    const posts = await Post.find({user: req.user._id}).sort({'updatedAt': -1}).exec()
    // 
    // re-sort based upon the sortOrder of the categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if(!deletedPost) throw Error("NO POST FOUND")
    res.json("bye bye")
  } catch (err) {
    console.log(err)
    res.status(400).json("try again")
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.body.id, {text: req.body.text, image: req.body.image}, {new: true})
    // const user = await User
    // const token = createJWT(user);
    res.json("Good job");

  } catch (err) {
    console.log(err)
    res.status(400).json("Unable to update")
  }
}