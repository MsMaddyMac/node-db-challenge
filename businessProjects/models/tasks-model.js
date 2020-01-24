const db = require('../../data/dbConfig');

module.exports = {
    findTasks,
    findById,
    add
};

function findTasks(query) {
   
    return db('tasks as t')
        .select('t.id', 't.project_id', 'p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes')
        .join('projects as p', 'p.id', "=", 't.project_id');
}

function findById(id) {
    return db('tasks')
    .where({ id })
    .first();
}

async function add(task) {
    const [id] = await db('tasks').insert(task);

    return findById(id);
}