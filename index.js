const jsonServer=require('json-server')
const empServer =jsonServer.create()
const middleware= jsonServer.defaults()
const router =jsonServer.router("db.json")
const PORT= 3001 
empServer.use(middleware)
empServer.use(router)
empServer.listen(PORT, ()=>{console.log(`JSON Server is running at http://localhost:${PORT}`)})