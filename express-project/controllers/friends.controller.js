const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "POST request doesn't include the name property"
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length
  };
  model.push(newFriend);

  res.send(201).json(newFriend);
}

function getFriends(req, res) {
  res.status(200).json(model);
}

function getFriend(req, res) {
  const id = req.params.friendId;
  
  res.status(200).json(model[id]);
}

module.exports = {
  postFriend,
  getFriends,
  getFriend
}