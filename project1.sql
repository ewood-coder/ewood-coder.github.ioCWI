#****************************************************************
# Script to create ejdesign database & add test data.
# Name:	Date:		Description:
# Emma		8/27/2021	Initial deployment.
#
#****************************************************************
DROP DATABASE IF EXISTS ejdesign;
CREATE DATABASE ejdesign;
USE ejdesign;
# Create objects
CREATE TABLE IF NOT EXISTS employee
(
	employee_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	first_name	VARCHAR(255) NOT NULL,
	last_name	VARCHAR(255) NOT NULL,
	email_address	VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS contact
(
	contact_id	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	contact_msg	VARCHAR(500) NOT NULL,
	your_name	VARCHAR(255) NOT NULL,
	email_address	VARCHAR(255) NOT NULL UNIQUE,
	phone_number	VARCHAR(255) NOT NULL UNIQUE,
	contact_reason	VARCHAR(10)  NULL,
	contact_date	DATETIME     NOT NULL,
	employee_id	INT NOT NULL,
	FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);


# Insert statements for employee table
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Buster', 'Bronco', 'buster@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Joe', 'Vandal', 'joe@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('CWI', 'Otter', 'otter@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Abe', 'Abul', 'abe@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Bea', 'Bow', 'bea@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Conner', 'Caust', 'conner@eva.com');	
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Dallon', 'Ditch', 'dallon@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Evan', 'Eerie', 'evan@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Fallon', 'Fuscha', 'fallon@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Gregg', 'Grower', 'gregg@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Howard', 'Hustle', 'howard@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Ian', 'Igloo', 'ian@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Joshua', 'Jumper', 'joshua@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Kyle', 'Kite', 'kyle@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Liam', 'Louiston', 'liam@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Mary', 'Muens', 'marry@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Noah', 'Nite', 'noah@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Ollie', 'Oskar', 'ollie@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Peter', 'Prank', 'peter@eva.com');
INSERT INTO employee
	(first_name, last_name, email_address)
VALUES
	('Quintin', 'Qasim', 'quintin@eva.com');
	
	
	
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Hello', 'Mickey Mouse', 'mickey@me.com', '208-123-4567', 'Question', NOW(), 1);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Goodbye', 'Minnie Mouse', 'minnie@me.com', '208-876-5432', 'N/A', NOW(), 2);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Au revoir', 'Madame Mouse', 'madame@me.com', '208-098-8765', 'Other', NOW(), 3);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Bonjour', 'Frenchie France', 'france@me.com', '208-135-6801', 'Employment', NOW(), 4);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Hi', 'Abe Lincoln', 'lincoln@me.com', '209-136-6805', 'Employment', NOW(), 5);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Bye', 'Bonnie Brosch', 'bonnie@me.com', '210-138-6771', 'Question', NOW(), 6);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Whaddup', 'Collier Count', 'collier@me.com', '316-123-6801', 'Employment', NOW(), 7);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Later', 'Decklan Darve', 'decklan@me.com', '302-998-6801', 'N/A', NOW(), 8);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Call me', 'Evalyn Effort', 'evalyn@me.com', '802-135-6801', 'Employment', NOW(), 9);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Dont call me', 'Franky Funk', 'franky@me.com', '123-531-6801', 'Employment', NOW(), 10);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Greetings', 'Garfield Giant', 'garfield@me.com', '985-135-6801', 'Employment', NOW(), 11);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Honorable', 'Harry Potter', 'harry@me.com', '208-135-9472', 'N/A', NOW(), 12);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Nice to meetcha', 'Isaac Newton', 'isaac@me.com', '298-912-6801', 'Question', NOW(), 13);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Humna', 'Johnny Bravo', 'johnny@me.com', '208-146-6801', 'Question', NOW(), 14);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Hello there', 'Karen Kranky', 'karen@me.com', '159-125-6701', 'Question', NOW(), 15);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Help', 'Louis Lark', 'louis@me.com', '208-135-1254', 'Employment', NOW(), 16);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Good gracious', 'Monty Python', 'monty@me.com', '347-027-9076', 'Question', NOW(), 17);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Oh hi', 'Oscar Owen', 'oscar@me.com', '208-907-6401', 'N/A', NOW(), 18);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('Nice to meet you', 'Natalie Norse', 'natalie@me.com', '567-834-6401', 'Other', NOW(), 19);
INSERT INTO contact
	(contact_msg, your_name, email_address, phone_number, contact_reason, contact_date, employee_id)
VALUES
	('I am lost', 'Peter Parker', 'peter@me.com', '345-897-2154', 'Employment', NOW(), 20);
