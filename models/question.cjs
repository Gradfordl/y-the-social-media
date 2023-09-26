const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    text:{ type: String, required: true },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const questionSchema = new Schema(
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


const Question = model('Question', questionSchema);

module.exports = Question;