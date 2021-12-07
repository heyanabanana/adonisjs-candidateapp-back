import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index() {
    return Skill.all(); //select * from skills
  }

  //CREATE
  public async store({ request, response }: HttpContextContract) {
    const body = request.body(); //validation
    const skills = await Skill.create(body); // Create

    response.status(201);
    return skills;
  }

  public async show({ params }: HttpContextContract) {
    return Skill.findOrFail(params.id);
  }

  //UPDATE
  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const skill = await Skill.findOrFail(params.id);
    skill.merge(body);
    await skill.save();
    return skill;
  }

  //DELETE
  public async destroy({ params, response }: HttpContextContract) {
    const skill = await Skill.findOrFail(params.id);
    response.status(204);

    await skill.delete();
    return skill;
  }
}
