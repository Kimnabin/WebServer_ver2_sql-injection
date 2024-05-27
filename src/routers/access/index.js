'use strict';

const express = require('express');
const router = express.Router();
const userDB = require("../../models/users.model");
const personal_infoDB = require("../../models/personalInfo.model");
const productsDB = require("../../models/products.model");
const { getIntoData } = require('../../utils');



router.get('/login', (req, res) => {
    res.render('login.ejs')
});

router.post('/login', async (req, res) => {
    const data = req.body;
    console.log("Data: ", data);
    
    const username = req.body.username;
    const password = req.body.password;

    const user = await userDB.findOne({ username: username, password: password});
    const userInfo = await personal_infoDB.findOne({ username: username });
    console.log("User: ", user);
    if(user && userInfo) {
        // getIntoData({fileds: ['_id', 'username', 'password'], object: user});
        getIntoData({fileds: ['username', 'full_name', 'age', 'id_number', 'bank_account_number', 'account_balance'], object: userInfo});
        res.render('personal_info.ejs', {user: userInfo});
    } else {
        res.send("User not found");
    }
});

router.get('/personal-info/:username', (req, res) => {
    const username = req.params.username;
    
    const query = `SELECT * FROM personal_info WHERE username = ?`;
    db.query(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.render('personal_info', { user: results[0] });
        } else {
            res.send('No personal information found for this user.');
        }
    });
});

router.get('/userSuccess/:id', (req, res) => {
    const id = req.params.id;
    // console.log("userID :: " + id);
    res.render("userSuccess.ejs", {userId: id});
})

// Route để kiểm tra ID người dùng
router.post('/userSuccess', async (req, res) => {
    const id = req.body.id;
    const user = await userDB.findById(id);
    console.log("userID :: >>  " + user);
    if(user) {
        res.render("user.ejs", { user });
    } else {
        res.send("User not found");
    }

});

router.get('/products', async (req, res) => {
    const products = await productsDB.find({ isPublish : true });
    console.log("Products: ", products);
    res.render('products.ejs', { products });
});

router.post('/products/search', async (req, res) => {
    const searchTerm = req.body.searchTerm;

    try {
        const results = await productsDB.find({ name: { $regex: searchTerm, $options: 'i' }, isPublish: true });
        res.render('products', { products: results });
    } catch (err) {
        console.error('Error executing query:', err);
        res.send('<pre>There was an error.</pre>');
    }
});


module.exports = router;