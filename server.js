/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
/* eslint-disable no-console */
const fastify = require('fastify')({ logger: { level: 'error' } })
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3001
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  fastify
    .get('/*', (request, reply) => {
      handle(request.req, reply.res)
    })
    .listen(port, (err, address) => {
      if (err) throw err
      console.log(`> Ready on ${address}`)
    })
})