var Author = require("../models/author");

// Author list and detail
exports.author_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Author list");
};

exports.author_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Author creation
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create GET");
};

exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Author deletion
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

//Author update
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
