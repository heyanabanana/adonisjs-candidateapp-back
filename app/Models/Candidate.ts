import User from './User';
import Experience from './Experience';
import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;
  @column()
  public email: string;
  @column()
  public phone: string;
  @column()
  public birthdate: DateTime;
  @column()
  public salaryNow: number;
  @column()
  public salaryDesired: number;
  @column()
  public location: string;
  @column()
  public country: string;
  @column()
  public remote: boolean;
  @column()
  public mobility: boolean;
  @column()
  public active: boolean;

  @column()
  public userId: number;
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @hasMany(() => Experience)
  public experiences: HasMany<typeof Experience>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
