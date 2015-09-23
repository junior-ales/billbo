-- name: create-bill!
-- Creates a new bill in the database
INSERT INTO bills (bill_id, issued_by, total_amount, due_date, current_status, bill_picture, created_by, created_time, last_updated_by, last_updated_time)
VALUES (:bill_id, :issued_by, :total_amount, :due_date::DATE, :current_status, :bill_picture, :created_by, now(), :last_updated_by, now())


--name: delete-all!
--Clear the whole bills table, only used for test!!!
DELETE FROM bills