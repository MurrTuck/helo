SELECT posts.id, posts.title, users.username, users.profile_pic FROM posts
JOIN users on posts.author_id = users.id
WHERE posts.author_id != $1 AND posts.title = $2