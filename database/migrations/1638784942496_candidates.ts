import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Candidates extends BaseSchema {
  protected tableName = 'candidates';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('phone').notNullable();
      table.dateTime('birthdate');
      table.integer('salary_now');
      table.integer('salary_desired');
      table.string('location', 150);
      table.string('country', 150);
      table.boolean('remote');
      table.boolean('mobility');
      table.boolean('active');

      table.integer('user_id').references('users.id');

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
