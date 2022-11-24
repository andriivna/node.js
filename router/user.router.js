const router = require('express').Router();
const userDb = require('../dataBase/users');

router.get('/', (req, res) => {
    console.log('USERS ENDPOINT!');

    res.json(userDb);
});

router.get('/:userId', (req, res) => {
    console.log(req.params);

    const {userId} = req.params;


    res.json(userDb[userId]);
});

router.put('/', (req, res) => {
    const newUserInfo = req.body
    const userId = req.params.userId;

    userDb[userId] = newUserInfo;

    res.json(userDb);
});


module.exports = router;