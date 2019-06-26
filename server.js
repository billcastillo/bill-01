/* eslint-disable */
const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

	server.get('/projects/:title', (req, res) => {
    const actualPage = '/projects'
    const queryParams = { title: req.params.title }
    console.log('req.params.title:', queryParams); 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/writing/:title', (req, res) => {
    const actualPage = '/blogpost'
    const queryParams = { title: req.params.title }
    console.log('req.params.title:', queryParams); 
    app.render(req, res, actualPage, queryParams)
  })

  // server.get('/blogpost', (req, res) => {
  //   const actualPage = '/blogpost/:title'
  //   const queryParams = { title: req.params.title }
  //   console.log('req.params.title:', queryParams); 
  //   app.render(req, res, actualPage, queryParams)
	// })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})