require('rootpath')();

const config = require('api/config.json');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });

module.exports = {
    Map: require('api/models/map.model')
};