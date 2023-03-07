import * as dotenv from 'dotenv'
import Fastify from 'fastify'
import appRouter from './router'
dotenv.config()

const fastify = Fastify()

fastify.register(appRouter)

fastify.listen({ port: Number(process.env.PORT!) }, () => {
  console.log('Server on port ' + Number(process.env.PORT!))
})
