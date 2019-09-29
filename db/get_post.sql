SELECT p.author_id, u.username, u.profile_pic, p.title, p.img, p.content, p.id as post_id FROM users u
JOIN posts p ON u.id = p.author_id
WHERE p.id = $1