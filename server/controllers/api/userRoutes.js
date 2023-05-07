const router = require('express').Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username: username })

  if (!user) {
    console.log("not registered")
    res.send({ message: "not registered" })
    return
  }

  if (password === user.password) {
    console.log("success")
    res.send({ message: "login success", user: user })
  } else {
    console.log("wrong credentials")
    res.send({ message: "wrong credentials" })
  }
});

router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({ username: username, password: password })
  try {
    await user.save();
    res.send({ message: "user added" })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;