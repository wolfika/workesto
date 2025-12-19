import { Hono } from 'hono'
import { createCompany } from './factories/company'
import { createEmployee } from './factories/employee'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ success: true })
})

app.get('/companies', (c) => {
  return c.json(Array.from({ length: 10 }, createCompany))
})

app.get('/companies/:companyId', (c) => {
  return c.json(createCompany())
})

app.get('/companies/:companyId/employees', (c) => {
  return c.json(Array.from({ length: 10 }, createEmployee))
})

app.get('/employees/:employeeId', (c) => {
  return c.json(createEmployee())
})

export default app
