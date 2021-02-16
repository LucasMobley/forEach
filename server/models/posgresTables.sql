CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  user_name VARCHAR(80) UNIQUE not null,
  password VARCHAR(80 not null)
);

CREATE TABLE donations (
    _id SERIAL PRIMARY KEY, 
    name  VARCHAR(80) not null,
    amount FLOAT not null,
    credit_card INT not null,
    phone_num INT not null,
    date DATE not null,
    email VARCHAR(80) not null,
    user_id int,
    FOREIGN KEY(user_id) REFERENCES users(_id)
    ON DELETE SET NULL
);


- 'finds total amount of donations'
SELECT sum(amount)
FROM "donations" ;


- 'insert values into table'
INSERT INTO donations(name, amount, credit_card, phone_num, date, email, user_id)
VALUES ('lucas', '100', '152635241', '36042992', 'dec-12-2019', 'lucas@gitMasterGabi.com', 1)
