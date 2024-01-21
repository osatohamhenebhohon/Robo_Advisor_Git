const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const RiskData = require("./Models/ProductModels");

app.use(cors());
app.use(express.json()); //middleware

//Routes
app.get("/", (req, res) => {
  res.send("HELLO NOW we are ready to go");
});

app.post("/Riskdata", async (req, res) => {
  try {
    const riskdata = await RiskData.create(req.body);
    res.status(200).json(riskdata);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/Getriskdata", async (req, res) => {
  try {
    const Riskdata = await RiskData.find({});
    res.status(200).json(Riskdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/Getriskdata/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Riskdata = await RiskData.findById(id);
    res.status(200).json(Riskdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// mongoose.set("strictQuery", false)
const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin_jose:osas123456@roboadvisorapi.sgaprzy.mongodb.net/Data-API?retryWrites=true&w=majority"
    );
    app.listen(5000, () => {
      console.log("let get this started");
    });
    console.log("Connected to mongodb!");
  } catch (error) {
    console.log(error);
  }
};
startServer();
