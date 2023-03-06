import Fastify from 'fastify'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const fastify = Fastify()

fastify.listen({ port: Number(process.env.PORT!) }, () => {
  console.log('Server on port ' +  Number(process.env.PORT!))
})
