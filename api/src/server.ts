import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.get('/plantas', async () => {
  const plantas = await prisma.planta.findMany()

  return { plantas }
})

app.post('/users', async (request, reply) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  })

  const { name, email } = createUserSchema.parse(request.body)

  await prisma.user.create({
    data: {
      name,
      email
    }
  })

  return reply.status(201).send()
})

app.post('/plantas', async (request, reply) => {
  const createPlantaSchema = z.object({
    NOME_PLANTA:z.string(),
    BOMBA_STATUS:z.string(),
    REGA_TEMPO: z.string(),
    UMIDADE: z.string(),
    REGAS: z.string(),
    hardware: z.string(),

  })

  const {
    NOME_PLANTA,
    BOMBA_STATUS,
    REGA_TEMPO,
    UMIDADE,
    REGAS,
    hardware, } = createPlantaSchema.parse(request.body)

  await prisma.planta.create({
    data: {
      NOME_PLANTA,
      BOMBA_STATUS,
      REGA_TEMPO,
      UMIDADE,
      REGAS,
      hardware,
    }
  })

  return reply.status(201).send()
})
app.put('/plantas', async (request, reply) => {})


app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server Running')
})
