const db = require('../../data/dbConfig');


module.exports = {
    getProjects,
    findById,
    add
}

function getProjects(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);

    let rows = db('projects')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

async function add(project) {
    const [id] = await db('projects').insert(project);

    return findById(id);
}
