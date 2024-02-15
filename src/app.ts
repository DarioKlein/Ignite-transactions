import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

// Verificação global, é uma verificação que vale para todas as rotas que existem na aplicação
// app.addHook('preHandler', async (request) => {
//   console.log(`[${request.method}] ${request.url}`)
// })

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
