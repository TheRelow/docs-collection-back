require("dotenv").config();
const jwt = require("jsonwebtoken");
const { omit } = require("ramda");
const { User } = require("../model");

module.exports = {
  async login({ body: { email, password } }, res) {
    try {
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        return res.status(403).send({
          message: "wrong email",
        });
      }

      // тут нужно расшифровывание пароля, но пока пароли не зашифрованы

      const isPasswordCorrect = foundUser.password === password;
      if (!isPasswordCorrect) {
        return res.status(403).send({
          message: "wrong password",
        });
      }

      const accessToken = jwt.sign(
        {
          userId: foundUser._id,
          email: foundUser.email,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        accessToken,
        _id: foundUser._id,
        email: foundUser.email,
      });
    } catch (err) {
      return res.status(403).send({
        message: "Не верный пароль или логин",
        err,
      });
    }
  },
  async signUp({ body: { email, password } }, res) {
    try {
      const foundUser = await User.findOne({ email, password });
      if (foundUser) {
        return res.status(403).send({
          message: "Этот email занят",
        });
      }
      const createdUser = await new User({ email, password });
      await createdUser.save();
      const accessToken = jwt.sign(
        {
          userId: createdUser._id,
          email: createdUser.email,
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        accessToken,
        _id: createdUser._id,
        email: createdUser.email,
      });
    } catch (err) {
      return res.status(403).send({
        message: "Не верный пароль или логин",
        err,
      });
    }
  },
};
