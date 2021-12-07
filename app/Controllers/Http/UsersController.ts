import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class UsersController {
  public async index() {
    return User.all(); // select * from users
  }
  //CREATE
  public async store({ request, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      name: schema.string({ trim: true }),

      email: schema.string({ trim: true }),
      password: schema.string({}, [rules.confirmed()]),
    });

    const payload = await request.validate({ schema: newUserSchema });
    const user = await User.create(payload);
    response.status(201);
    return user;
  }
  public async show({ params }: HttpContextContract) {
    return User.findOrFail(params.id);
  }
  //UPDATE

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const user = await User.findOrFail(params.id);
    user.merge(body);
    return user.save();
  }
  //DELETE
  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    response.status(204);
    await user.delete();
    return { message: 'User deleted' };
  }
}
