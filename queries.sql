-- retrieves a list of tasks with project name and project description included
select t.id
    , p.name as project_name
    , p.description as project_description
    , t.description as task_description
    , t.notes
    , t.completed
FROM [Tasks] as t
JOIN projects as p on t.project_id = p.id;