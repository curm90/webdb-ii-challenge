exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl
      .text('vin', 50)
      .unique()
      .notNullable();
    tbl.text('make', 30).notNullable();
    tbl.text('model', 80).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmission', 20);
    tbl.text('status', 30);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
