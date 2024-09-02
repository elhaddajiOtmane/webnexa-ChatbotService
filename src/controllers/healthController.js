const express = require('express');
const router = express.Router();

let healthStatus = 'OK';

const sendPeriodicMessages = () => {
    setInterval(() => {
        console.log('Service is running smoothly.');
    }, 60000); // 60 seconds interval
};

router.get('/', (req, res) => {
    res.status(200).json({ status: healthStatus });
});

sendPeriodicMessages();

module.exports = router;