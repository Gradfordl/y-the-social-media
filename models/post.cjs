const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    author: String,
    text:{ type: String, required: true },
    likes: { type: Number, default: 0 },
  }
);

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    image: String,
    text: String,
    likes: { type: Number, default: 0 },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);


const Post = model('Post', postSchema);

module.exports = Post;