import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Candidate from 'App/Models/Candidate';

export default class CandidatesController {
  //select * from candidates
  public async index() {
    return Candidate.all();
  }

  //CREATE
  public async store({ request, response }: HttpContextContract) {
    const body = request.body(); // Validate
    const candidate = await Candidate.create(body); // Create instance and save
    response.status(201);
    return candidate;
  }

  public async show({ params }: HttpContextContract) {
    return Candidate.findOrFail(params.id);
  }

  //UPDATE
  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const candidate = await Candidate.findOrFail(params.id);
    candidate.merge(body);
    await candidate.save();

    return candidate;
  }

  //DELETE
  public async destroy({ params, response }: HttpContextContract) {
    const candidate = await Candidate.findOrFail(params.id);
    response.status(204);

    await candidate.delete();
    return candidate;
  }
}
