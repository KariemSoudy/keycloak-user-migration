const express = require("express")

const app = new express()

app.use(express.json())

app.use((req, res, next) => {
    console.log('START')
    console.log(req)
    console.log('END')
    next()
})

app.get('/auth/:userName', (req, res) => {
    res.json({
        id: "1246312713AE781273F3134627864728916",
        username: "karim",
        email: "karim.seoudy2@bambora.com",
        firstName: "KARIM2",
        lastName: "SEOUDY2",
        enabled: true,
        emailVerified: true,
        attributes: {
            jobTitle: ["Fullstack Developer"]
        },
        roles: ["ADMIN"],
        groups: ["GROUP1"],
        requiredActions: ["CONFIGURE_TOTP"]
    })
})

app.post('/auth/:userName', (req, res) => {
    if (req.body.password === '123456') {
        res.status(200)
    }
    else {
        res.status(401)
    }
    res.end()
})

app.listen(1000, () => {
    console.log('listening on port 1000')
})