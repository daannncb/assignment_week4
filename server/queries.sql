-- add SQL queries in here for submission
CREATE TABLE guestbook (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  guestname VARCHAR(255),
  date VARCHAR(255),
  content VARCHAR(1000)
);
INSERT INTO guestbook (guestname, date, content)
VALUES ('Martin Heathcote', '01/08/2025', 'Hello Dans Guestbook! I hope all your visitors have a lovely time with the avant garde styling of this website'),
('Adam Burgess', '10/12/2036', 'This message is coming from the future! We have finally solved cold nuclear fusion, but we still drill for new oil :('),
('Dr. Thomas Ball', '04/11/2025', 'It is (I think) my birthday today! Thanks for the cool hat.'),
('Arabella A.M. Mischief', '14/05/2025', 'I think my parents named me after an Arctic Monkeys song.')