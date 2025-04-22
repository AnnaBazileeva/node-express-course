const exprees = require('express')
const app = exprees();

app.get('/hello', (req,res)=> {
    res.send('Task manager')
})

app.get('/api/v1/tasks', (req,res)=> {
    res.send('Task manager')
})

app.post('/api/v1/tasks', (req,res)=> {
    res.send('Task manager')
})

app.get('/api/v1/tasks/:id', (req,res)=> {
    res.send('Task manager')
})

app.patch('/api/v1/tasks/:id', (req,res)=> {
    res.send('Task manager')
})

app.delete('/api/v1/tasks/:id', (req,res)=> {
    res.send('Task manager')
})

const port =3000

app.listen(port, console.log(`server is lictening on port ${port}...`))