const User = require("../../models/user.cjs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

module.exports = {
  create,
  login,
  checkToken,
  deleteUser
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration (be able to accept string)
    const token = createJWT(user);
    res.json(token)
  } catch (err) {
    res.status(400).json(err);
  }
}

//LOGIN

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error("Email Not Found!");

    //if we find a user, now compare password using bcrypt
    //1st arg is the plain text password just entered 2nd arg is encrypted user pw from db
    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) throw new Error ("Bad Credentials, try again");
    //if the passwords match, we want to return with the user token
    const token = createJWT(user);
    res.json(token);

  } catch (err) {
    console.log(err)
    res.status(400).json("Bad Credentials")
  }
}

//DELETE

async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({email: req.body.email});
    if (!user) throw new Error("Email Not Found!");
    res.json("Bye bye")

  } catch (err) {
    console.log(err)
    res.status(400).json("try again")
  }
}

//UPDATE

// async function update(req, res) {
//   try {
//     const user = await User.findOneAndUpdate({email: req.body.email});
//     if (!user) throw new Error("Email Not Found!");

//     //if we find a user, now compare password using bcrypt
//     //1st arg is the plain text password just entered 2nd arg is encrypted user pw from db
//     const match = await bcrypt.compare(req.body.password, user.password);
//     if(!match) throw new Error ("Bad Credentials, try again");
//     const token = createJWT(user);
//     res.json(token);

//   } catch (err) {
//     console.log(err)
//     res.status(400).json("Bad Credentials")
//   }
// }

//CHECK TOKEN

function checkToken (req, res) {
  // req.user will always be there for you when a token is sent
  // console.log("req.user", req.user);
  res.json(req.exp);
}

// HELPER FUNCTIONS

function createJWT(user) {
  return jwt.sign(
    { user }, //1st arg, payload
    process.env.SECRET, //2nd arg, our secret
    { expiresIn: "24h" } //3rd arg(not required), options obj, set to 24 hrs
  );
}
