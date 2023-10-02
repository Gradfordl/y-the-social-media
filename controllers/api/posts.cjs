const Post = require("../../models/post.cjs");
const User = require("../../models/user.cjs");

module.exports = {
  create,
  index,
  getUserPosts,
  deletePost,
  updatePost,
  postComment,
  updateComment,
  deleteComment,
  // updateLikes
};

async function create(req, res) {
  try {
    // Add the user to the database
    const post = await Post.create(req.body);
    res.json(post)
    // console.log(post);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const posts = await Post.find({}).sort({ updatedAt: -1 }).exec();
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function getUserPosts(req, res) {
  try {
    const posts = await Post.find({ user: req.user._id })
      .sort({ updatedAt: -1 })
      .exec();
    res.status(200).json(posts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) throw Error("NO POST FOUND");
    res.json("bye bye");
  } catch (err) {
    console.log(err);
    res.status(400).json("try again");
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.body.id,
      { text: req.body.text, image: req.body.image },
      { new: true }
    );
    // const user = await User
    // const token = createJWT(user);
    res.json("Good job");
  } catch (err) {
    console.log(err);
    res.status(400).json("Unable to update");
  }
}
async function deleteComment(req, res) {
  try {
    //UPDATE DOCUMENT SUB ARRAY!!!
    // console.log("PARAMS ID", req.params.id)
    // console.log("USER", req.params.author)
    // console.log("TEXT", req.params.text)
    await Post.updateOne(
      {
        "_id": req.params.id
      },
      { $pull: { "comments": { "author": req.params.author,  "text": req.params.text,} } },
      { new: true }
    );
    res.json("Comment deleted yay");
  } catch (err) {
    console.log(err);
    res.status(400).json("Unable to update");
  }
}

async function updateComment(req, res) {
  try {
    //UPDATE DOCUMENT SUB ARRAY!!!
    const updatedComment = await Post.findByIdAndUpdate(
      req.body.id,
      { $set: { "comments.$[].text": req.body.text } },
      { new: true }
    );
    // const user = await User
    // const token = createJWT(user);
    res.json("Comment updated yay");
  } catch (err) {
    console.log(err);
    res.status(400).json("Unable to update");
  }
}

async function postComment(req, res) {
  try {
    // console.log("req body text", req.body.text)
    // console.log("req.body", req.body)
    // console.log("ID", req.body.id)
    const addComment = await Post.findByIdAndUpdate(
      req.body.id,
      { $push: { comments: req.body } },
      { new: true }
    );
    // console.log("ADDCOMMENT",addComment)
    // const user = await User
    // const token = createJWT(user);
    res.json("Good job comment function");
  } catch (err) {
    console.log(err);
    res.status(400).json("Unable to update");
  }
}

// async function updateLikes(req, res) {
//   try {
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.body.id,
//       { likes: req.body.likes },
//       { new: true }
//     );
//     // const user = await User
//     // const token = createJWT(user);
//     res.json("Good job");
//   } catch (err) {
//     console.log(err);
//     res.status(400).json("Unable to update");
//   }
// }
