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
    },

    get_posts: (req, res) => {
        console.log('get_posts hit')
        const db = req.app.get("db")
        let {userid} = req.params
        if(req.query.userposts && req.query.search){
            db.get_posts_by_user([req.query.search]).then(posts => {
                res.status(200).send(posts)
            }).catch(err => {
                res.status(500).send(err)
                console.error(`get_posts failed in controller.js:`, err)
            })
        }
        else if(!req.query.userposts && !req.query.search) {
            db.get_posts_not_by_user([
              userid
            ]).then(posts => {
              res.status(200).send(posts);
                }).catch(err => {
                    res.status(500).send(err)
                    console.error(`get_posts failed in controller.js:`, err);
                });
        }
        else if (!req.query.userposts && req.query.search) {
            db.get_posts_by_search_not_user([
                userid, req.query.search
            ]).then(posts => {
              res.status(200).send(posts);
                }).catch(err => {
                    res.status(500).send(err)
                    console.error(`get_posts failed in controller.js:`, err);
                });
        } else {
            db.get_all_posts()
              .then(posts => {
                res.status(200).send(posts);
              })
              .catch(err => {
                res.status(500).send(err)
                console.error(`get_posts failed in controller.js:`, err);
              });
        }
    }
}