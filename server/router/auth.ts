import { Router, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const { name, email, password, repeatPassword } = req.body;

  // Verifying data
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }
  if (!password) {
    res.status(400).json({ error: "Password is required" });
    return;
  }
  if (!repeatPassword) {
    res.status(400).json({ error: "Re-enter your password is required" });
    return;
  }

  if (password != repeatPassword) {
    res.status(400).json({ error: "Passwords don't match" });
    return;
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({ error: "User already exists" });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hashPassword,
  });

  try {
    const savedUser = await newUser.save();
    res.json({ user: savedUser });
    return;
  } catch (err) {
    res.status(400).json({ error: err });
    return;
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    res.status(400).json({ error: "Email is required" });
    return;
  }
  if (!password) {
    res.status(400).json({ error: "Password is required" });
    return;
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ error: "User not found" });
    return;
  }
  console.log(user);

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(400).json({ error: "Invalid email/password!" });
    return;
  }
  const userDetail = {
    _id: user._id,
    name: user.name,
    email: user.email,
    createdPodcasts: user.createdPodcasts,
  };

  const token = jwt.sign({ user }, process.env.TOKEN_SECRET as string, {
    expiresIn: "7d",
  });

  res.json({ user: userDetail, token });
  return;
});

export default router;
