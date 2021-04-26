exports.up = (knex) => {
    return knex.schema.createTableIfNotExists('log', (table) => {
        table.increments('id').primary();
        table.boolean('status').notNullable();
        table.timestamp('event_date').notNullable();
        table.string('area').notNullable();
        table.string('machine').nullable();
        table.string('operator').notNullable();
        table.text('comment').notNullable();
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('log');
};
