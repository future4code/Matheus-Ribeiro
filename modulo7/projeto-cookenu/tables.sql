CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    created_at DATE NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS cookenu_followers (
    followed_id VARCHAR(64) NOT NULL,
    follower_id VARCHAR(64) NOT NULL,
    FOREIGN KEY (followed_id) REFERENCES cookenu_users(id),
    FOREIGN KEY (follower_id) REFERENCES cookenu_users(id)
);