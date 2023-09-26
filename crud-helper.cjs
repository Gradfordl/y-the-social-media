// Connect to the database
require('dotenv').config();
const db = require('./config/database.cjs');


//HOW TO USE CRUD HELPER
//node in terminal
//.load crud-helper.cjs

// Require the Mongoose models
const User = require('./models/user.cjs');
const Question = require('./models/question.cjs')

// Local variables will come in handy for holding retrieved documents
let user, question, comment;
let users, questions, comments;

Question.create({
    userID: "6513397237f6fdff747f1e4e",
    image: "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg",
      text: "Why is this so difficult?",
      comments: [],
})
    //if transaction(creation) succeeds
  .then((tweet) => {
    console.log(tweet);
  })
    //if transaction(creation)fails
  .catch((error) => {
    console.log(error);
  })
    //close db connection either way
  .finally(() => {
    db.close();
  });