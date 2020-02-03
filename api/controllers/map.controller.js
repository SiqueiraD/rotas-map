const express = require('express');
const mapService = require('api/services/map.service');


exports.get_map_by_author = function (req, res, next) {
    mapService.getAll()
        .then(users => 
            res.json(users))
        .catch(err => next(err));
}

exports.get_map_by_id = function (req,res,next){
    mapService.getById(req.path.replace('/',''))
        .then(parmas=>{
            res.json(parmas.waypoints);
        })
        .catch(err => next(err));
}


exports.set_map_by_author = function (req, res, next) {
    mapService.create(req.body)
        .then(users => 
            res.json(users))
        .catch(err => next(err));
}