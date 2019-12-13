const db = require('../../data/dbConfig');

module.exports = {
    getResources
};

function getResources(query) {
    let { page = 1, limit = 5, sortby = 'id', sortdir = 'asc' } = query;
    const offset = limit * (page - 1);

    let rows = db('recipes')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

    return rows;
}