import { FastifyReply, FastifyRequest } from "fastify"

class UserController {
  async index(request: FastifyRequest, response: FastifyReply) {
    try {
      console.time('teste')

      const dados = request.params

      console.timeEnd('teste')

    } catch (error) {
      return response.status(500).send(error)
    }
  }
}

export default UserController