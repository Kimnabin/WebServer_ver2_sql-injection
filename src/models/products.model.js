'use strict';

const { model, Schema } = require('mongoose');

/**
 * name: String
 * quantity: Number
 * price: Number
 * isDraft: Boolean
 * isPublic: Boolean
 */
const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isDraft: {
        type: Boolean,
        default: false,
    },
    isPublish: {
        type: Boolean,
        default: true, 
    }
}, {
    timestamps: true,
    collection: 'products',
});

module.exports = model('Product', productsSchema);
