INSERT INTO users (username, password, profile_pic)
VALUES (${username}, ${password}, 'http://dummyimage.com/100x100.png/cc0000/ffffff')
RETURNING id;
