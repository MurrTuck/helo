-- React #44 using a 'sub-queries' in a statement
SELECT students.id, students.student_name, student_marks.total_marks
FROM students, student_marks
WHERE students.id = student_marks.student_id AND student_marks.total_marks >
(SELECT total_marks
FROM student_marks
WHERE student_id =  1);