module.exports ={
    create_user: (req, res) => {
        console.log("POST Endpoint is getting hit!")
        const db = req.app.get("db") 
        let { username, password } = req.body
        db.create_user(username, password).then(user => {
            res.status(200).send(user)
        })
    },

    login_user: (req, res) => {
        let{ username, password } = req.body
        console.log("POST User Login Endpoint is getting hit!")
        req.app.get("db").login_user(username, password).then(user => {
            res.status(200).send(user)
        })
    }
}