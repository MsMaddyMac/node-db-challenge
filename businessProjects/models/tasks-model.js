const db = require('../../data/dbConfig');

module.exports = {
    findTasks,
    findById,
    add
};

function findTasks(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page -1);

    let rows = db('tasks as t')
        .orderBy(sortby, sortdir)
        .limit(limit)
        .offset(offset)
        .join('projects as p', 't.project_id', 'p.id')
        .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes', 't.completed as task_completed');
        

    return rows;
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