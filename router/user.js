const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
// --------------------------------------------------------------
const users = [
  { id: 0, name: "fares", age: 20 },
  { id: 1, name: "Emer", age: 23 },
  { id: 2, name: "amine", age: 23 },
  { id: 3, name: "mohamed", age: 27 },
];

// Get:

router.get("/", (request, response) => {
  response.send({ msg: "get it succ", users: users });
});
// request => {params +  body}

router.get("/:id", (request, response) => {
  //  request => params
  const { id } = request.params;
  const findUser = users.find((user) => user.id == id);
  if (findUser) {
    response.send({ msg: "get user succ", user: findUser });
  } else {
    response.status(400).send({ msg: "can not get that user" });
  }
});
// -----------------------------------------------------------------
// post
router.post("/", auth, (request, response) => {
  const newUser = request.body;
  users.push(newUser);
  response.send({ users, msg: "added succ" });
});

// @PUT
// id : params
// @body : userToEdit
router.put("/:id", (req, res) => {
  const userToEdit = req.body;
  const { id } = req.params;
  const newUsers = users.map((user) =>
    user.id == id ? { ...user, ...userToEdit } : user
  );
  res.send({ msg: "edited succ", users: newUsers });
});

// @id : params
// @method : delete
// url
router.delete("/:id", (request, response) => {
  const { id } = request.params;
  const newUsers = users.filter((user) => user.id != id);
  response.send({ msg: "deleted", users: newUsers });
});

module.exports = router;
