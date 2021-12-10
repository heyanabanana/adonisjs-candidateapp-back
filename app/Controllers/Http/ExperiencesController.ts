import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Experience from 'App/Models/Experience';

export default class ExperiencesController {
  public async index({ request }) {
    // Devuelve Experiences con Skill=skillId
    if (request.input('skill_id') && request.input('level')) {
      return Experience.query()
        .where('skill_id', request.input('skill_id'))
        .andWhere('level', request.input('level'));
    } else if (request.input('skill_id')) {
      return Experience.query().where('skill_id', request.input('skill_id'));
    } else {
      return Experience.all();
    }
  }

  //CREATE
  public async store({ request, response }: HttpContextContract) {
    const body = request.body(); //validation

    const experience = await Experience.create(body); // Create

    response.status(201);
    return experience;
  }

  public async show({ params }: HttpContextContract) {
    return Experience.findOrFail(params.id);
  }

  //UPDATE
  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const experience = await Experience.findOrFail(params.id);
    experience.merge(body);
    await experience.save();
    return experience;
  }

  //DELETE
  public async destroy({ params, response }: HttpContextContract) {
    const experience = await Experience.findOrFail(params.id);
    response.status(204);

    await experience.delete();
    return experience;
  }
}
