import Fastify from 'fastify'

const fastify = Fastify()

fastify.listen({ port: 3333 }, () => {
  console.log('Server on')
})
