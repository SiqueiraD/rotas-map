require('rootpath')();

//const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('api/helpers/db');
const Map = db.Map;

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete
};


async function getAll() {
    return await Map.find().select();
}


async function getById(id) {
    return await Map.findById(id).select();
}


async function create(params) {

    const map = new Map ({title:'Mapa' , waypoints: params});

    // save user
    await map.save();
}


async function _delete(id) {
    await User.findByIdAndRemove(id);
}