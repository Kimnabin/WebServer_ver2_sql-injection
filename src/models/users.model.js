'use strict';

const { model, Schema } = require('mongoose');

/**
 * username: String
 * password: String - no hashing
 */
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 150,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    collection: 'users',
});

module.exports = model('User', userSchema);
