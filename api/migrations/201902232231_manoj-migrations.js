module.exports.up = async db => {
  await db.schema.alterTable('properties', table => {
    table.float('land-surface');
    table.float('number-of-rooms');
    table.integer('number-of-parkings');
  });
};

module.exports.down = async db => {
  await db.schema.alterTable('properties', table => {
    table.dropTable('properties');
  });
};

module.exports.config = { transaction: true };
