SELECT posts.id, posts.title, users.username, users.profile_pic FROM posts
-- React #45 using Join in SQL Statement
JOIN users on posts.author_id = users.id
WHERE posts.title = $1