DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  priority INTEGER DEFAULT 0
);

INSERT INTO todos (title,description,completed,priority) VALUES
('Finish Project','Do all the things.',true, 1);
