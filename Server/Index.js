const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PeopleModel = require("./Models/PeopleModel");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/EOT3_JS_Practical", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SIGNUP

app.post("/signup", (req, res) => {
  console.log("Received guard's registration data:", req.body);

  PeopleModel.create(req.body)
    .then((People) => res.json(People))
    .catch((err) => res.json(err));
});

// LOGIN

app.post("/login", (req, res) => {
  const { Username, Password } = req.body;

  PeopleModel.findOne({ Username: Username }).then((guard) => {
    // First check if the user exists
    if (guard) {
      // then check if passwords match
      if (guard.Password === Password) {
        res.json("Successfully Logged in!");
      } else {
        res.json("U 've Fucked up with the password mn!");
      }
    } else {
      res.json("There is no Fucking user in our Fucking DB motherfucker!");
    }
  });
});

// GET USERS FROM THE DB
app.get("/users", async (req, res) => {
  try {
    const data = await PeopleModel.find();
    if (data) {
      res.json(data);
    } else {
      res.status(400).json({ message: "No guard found" });
    }
  } catch (error) {
    console.error("Error while fetching Guard from the DB!:", error);
    res.status(500).json({ message: "Server-side error dear!" });
  }
});

app.listen(3006, () => {
  console.log("eSec server running!");
});


// UPDATE USERS

app.put("/updateUsers/:id", async (req, res) => {
  const updatedUser = await PeopleModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  try {
    res.status(200).json({
      status: "Success",
      data : {
        updatedUser
      }
    })
  } catch(err) {
    console.log(err)
  }
})