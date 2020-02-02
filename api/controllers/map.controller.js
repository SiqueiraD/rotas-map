const express = require('express');
const router = express.Router();
//const userService = require('api/services/user.service');
const guard = require('express-jwt-permissions')();
const userService = require('api/services/user.service');


exports.check_map_by_author = function (req, res, next, mapAuthor) {
    userService.getByUsername(mapAuthor, req.headers.authorization.replace(/Bearer +/, ''))
        .then(user => {
            if (req.method != "POST" && req.method != "PUT")
                next();
            else if (req.method == "POST" && user.username == mapAuthor)
                next();
            else
                res.status(401).json({});
        })
        .catch(err => next(err));
    // console.log(mapAuthor);
    // next();
};

exports.get_map_by_author = function (req, res, next) {
    if (req.params.mapAuthor)
        console.log(req.params.mapAuthor);
    res.json({
        mapAuthor: req.params.mapAuthor
    });
}


exports.set_map_by_author = function (req, res, next) {
    if (req.params.mapAuthor)
        console.log(req.params.mapAuthor);
    res.json({
        mapAuthor: req.params.mapAuthor
    });
}