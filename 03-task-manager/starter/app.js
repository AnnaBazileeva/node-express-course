const express = require('express')
const app = express();

app.get('/hello', (req,res)=> {
    res.send('Task manager')
})

app.get('/api/v1/tasks', (req,res)=> {
    res.send('Get all tasks')
})

app.post('/api/v1/tasks', (req,res)=> {
    res.send('Post task')
})

app.get('/api/v1/tasks/:id', (req,res)=> {
    res.send('Get task by id')
})

app.patch('/api/v1/tasks/:id', (req,res)=> {
    res.send('Update task')
})

app.delete('/api/v1/tasks/:id', (req,res)=> {
    res.send('delete task')
})

const port =3000

app.listen(port, console.log(`server is lictening on port ${port}...`))