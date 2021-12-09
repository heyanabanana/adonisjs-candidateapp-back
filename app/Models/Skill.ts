import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';
import Experience from './Experience';

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @hasMany(() => Experience)
  public experiences: HasMany<typeof Experience>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
