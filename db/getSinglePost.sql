select posts.id, posts.title, posts.img, posts.content, users.username, users.profile_pic from users
join posts on posts.author_id = users.id
where posts.id = $1