'use strict';

const { model, Schema } = require('mongoose');

/**
 * username: String
 * full_name: String
 * age: Number
 * id_number: Number
 * bank_account_number: Number
 * account_balance: Number
 */
const personalInfoSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 150,
    },
    full_name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    id_number: {
        type: Number,
        required: true,
    },
    bank_account_number: {
        type: Number,
        required: true,
    },
    account_balance: {  
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
    collection: 'personal_infos',
});

module.exports = model('PersonalInfo', personalInfoSchema);
