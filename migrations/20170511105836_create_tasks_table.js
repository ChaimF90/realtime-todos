exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary();
        table.string('title');
        table.text('content');
        table.boolean('completed');
        table.boolean('inProgress');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks');
};