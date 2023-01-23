import Express from "express";
import User from "./model/User.js";

const router = Express.Router();

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).json({ message: "add user" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(201).send(user);
  } catch (error) {
    res.send(500).send(error.message);
  }
});

router.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
