import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Experiences extends BaseSchema {
  protected tableName = 'experiences';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();

      table.integer('candidate_id').references('candidates.id').notNullable();
      table.integer('skill_id').references('skills.id').notNullable();

      table.integer('level').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
