import { Router, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";

const router: Router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password, rePassword } = req.body;

    // Verifying data
    if (!name) {
      res.status(400).json({ msg: "Name is required" });
      return;
    }
    if (!email) {
      res.status(400).json({ msg: "Email is required" });
      return;
    }
    if (!password) {
      res.status(400).json({ msg: "Password is required" });
      return;
    }
    if (!rePassword) {
      res.status(400).json({ msg: "Re-enter your password is required" });
      return;
    }

    if (password != rePassword) {
      res.status(400).json({ msg: "Passwords don't match" });
      return;
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ msg: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.json({ msg: "User created successfully" });
    return;
  } catch (e) {
    res.status(400).json({ msg: (e as any).message });
    return;
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({ msg: "Email is required" });
      return;
    }
    if (!password) {
      res.status(400).json({ msg: "Password is required" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ msg: "User not found" });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({ msg: "Invalid email/password!" });
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
  } catch (e) {
    res.status(400).json({ msg: (e as any).message });
    return;
  }
});

export default router;
