-- React #46 using Alter table
ALTER TABLE users
SET username = $1
WHERE id = $2