const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Hello, Hello I am learning Node')
})

const users = [
    {id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '017888888'},
    {id: 1, name: 'Shabnoor', email: 'Srabonti@gmail.com', phone: '017888888'},
    {id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '017888888'},
    {id: 3, name: 'Shutorita', email: 'Shutorita@gmail.com', phone: '017888888'},
    {id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '017888888'},
    {id: 5, name: 'Shutorita', email: 'Shutorita@gmail.com', phone: '017888888'},
]

app.get('/users', (req, res)=> {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})

//app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send('inside the post')
    res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes, banana, apple, jolpai'])
})

app.get('/fruits/mangoes/fazli', (req, res)=> {
    res.send('Yummy yummy Fazli mangoes')
})

app.listen(port, ()=> {
    console.log('listning to port', port)
})