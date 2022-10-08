CREATE TABLE users(
	ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	FullName VARCHAR(100) NOT NULL,
	Email VARCHAR(100) NOT NULL UNIQUE,
	UserPassword VARCHAR(20) NOT NULL UNIQUE
	);


CREATE TABLE cards(
	ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	CardName VARCHAR(100) NOT NULL,
	TotalCredit INT NOT NULL,
	Debt INT NOT NULL,
	DueDate DATE NOT NULL,
	Payment INT NOT NULL,
	UserId INT NOT NULL,
	FOREIGN KEY (UserId) REFERENCES users(ID)
);



INSERT INTO users(FullName, Email, UserPassword) 
	VALUES('Claudia Leon', 'caludia@gmail.com', 'claudia1'),
		  ('Jessica Alba', 'jessica@gmail.com', 'jessica1'),
		  ('Jennifer Lopez', 'jennifer@gmail.com', 'jennifer1'),
		  ('Carlos Garcia', 'carlos@gmail.com', 'carlos1');


INSERT INTO cards(CardName, TotalCredit, Debt, DueDate, Payment, UserId) 
	VALUES('Discover', 1200, 300, '2022-10-12', 100, 1),
		  ('Amazon', 2000, 800, '2022-10-20', 150, 1),	
		  ('Walmart', 1500, 1000, '2022-09-30', 200, 4),	
		  ('Best Buy', 2500, 600, '2022-09-25', 500, 2);
		

INSERT INTO cards(CardName, TotalCredit, Debt, DueDate, Payment, UserId) 
	VALUES('Chase', 3000, 1100, '2022-10-25', 100, 9);


SELECT FullName, ID
FROM users 
JOIN cards ON users.ID = cards.UserId;


