-- React #46 using Alter table
UPDATE users
SET username = $1
WHERE id = $2