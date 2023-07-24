const mongoose = require("mongoose");
const Email = require("../models/email");

const addEmail = async (req, res) => {
  try {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!req.body.email){
      res.status(400).send("No email detected");
      return
    }
    if (!emailRegex.test(req.body.email)) {
      res.status(400).send("Please enter a valid email address");
      return
    }
    await Email.findOne({ email: req.body.email})
    .then((email) => {
      if (email) {
        res.status(400).send("You're already signed up with that email");
        return
      } else {
        //Store new user in DB
        const newEmail = new Email({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
        });

        //Adding new document to DB
        newEmail.save();

        //Sucess
        res.status(200).json("Successfully Signed Up");
      }
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const getTotalUsers = async (req,res) => {
    try{
        await Email.countDocuments({})
        .lean()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
    } catch (err){
        res.status(500).json({message: err})
    }
}

module.exports = { addEmail, getTotalUsers };
