const db = require('../../data/dbConfig');

module.exports = {
    getResources,
    findById,
    add
};

function getResources(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);

    let rows = db('resources')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}

function findById(id) {
    return db('resources')
        .where({ id })
        .first();
}

async function add(resource) {
    const[id] = await db('resources').insert(resource);

    return findById(id);
}