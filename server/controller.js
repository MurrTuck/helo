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
        console.log("userid:", userid, "req.query.userposts:", req.query.userposts, "req.query.search", req.query.search);

        //When the users logs first time... 
        if(req.query.userposts && req.query.search){
            db.get_posts_by_user([req.query.search]).then(posts => {
                res.status(200).send(posts)
            }).catch(err => {
                res.status(500).send(err)
                console.error(`get_posts failed in controller.js:`, err)
            })
        }
        //only showing users posts...
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
        //Checked Selected only user id filtering post
        else if (!req.query.userposts && req.query.search) {
            db.get_posts_by_search_not_user([
                userid, req.query.search
            ]).then(posts => {
              res.status(200).send(posts);
                }).catch(err => {
                    res.status(500).send(err)
                    console.error(`get_posts failed in controller.js:`, err);
                });
                //check is not selected and search is not empty - filtering others posts. 
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
    },

    post_id (req, res) {
        let { postid } = req.params;
        const db = req.app.get("db");
        console.log("GET Single post Endpoint is getting hit")
        app.get("db").getSinglePost([postid]).then(post => {
            res.status(200).send(post);
        })
    }

}