import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

import User from 'App/Models/User';

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const validations = schema.create({
      name: schema.string({}),
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({}, [rules.confirmed()]),
    });

    const data = await request.validate({ schema: validations });
    const user = await User.create(data);

    return response.created(user);
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1day',
      });
      return response.ok({ token, user: auth.user });
    } catch {
      return response.badRequest('Invalid credentials');
    }
  }
}
