require('rootpath')();

//const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('api/helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    getByUsername,
    create,
    update,
    delete: _delete
};

async function authenticate({
    username,
    password
}) {
    const user = await User.findOne({
        username
    });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const {
            hash,
            ...userWithoutHash
        } = user.toObject();
        const token = jwt.sign({
            sub: user.id,
            scope: ['status']
        }, "config.secret", {
            expiresIn: 60 * 60
        });
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function getByUsername(username, token) {
    return await jwt.verify(token, "config.secret", function (err, decoded) {
        const  user = User.findOne({
            username: username
        }).select('-hash');
        if (user)
            return {};
    });

}

async function create(userParam) {
    // validate
    if (await User.findOne({
            username: userParam.username
        })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({
            username: userParam.username
        })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}