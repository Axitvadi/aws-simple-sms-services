const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({
        success: true,
        message: "Server successfully up and running"
    })
})

module.exports = router
