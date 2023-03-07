import { FastifyInstance } from "fastify";
import UserController from "../controller/user";

const user = new UserController()

export async function appRouter(app: FastifyInstance) {

  app.get('/:number', user.index)

}

export default appRouter