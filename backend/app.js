const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const models = require('./models/model');

mongoose.connect('mongodb+srv://annhwu:a2e9h4a2e9h4@cluster0.6cqnvjd.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));




app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETED, PATCH, OPTIONS, DELETE');
    next();
    });

app.use(bodyParser.json());

app.post('/api', (req, res, next) => {
    delete req.body._id;
    const model = new models({
        ...req.body
    });
    model.save()
    .then(() => res.status(201).json({ model }), console.log( model ))
    .catch(error => res.status(400).json({ error }));
});
app.get('/api', (req, res ,next) => {
    models.find()
    .then((model) => res.status(200).json({ model }))
    .catch(error => res.status(404).json({ error }));
});

app.get('/api/:id', (req, res, next) => {
    models.findOne({ _id: req.params.id })
    .then(model => res.status(200).json ({ model }))
    .catch(error => res.status(404).json ({ error }));
});

app.delete('/api', (req, res, next) => {
    models.deleteMany()
    .then(() => res.status(200).json({ message: 'Delete !'}))
    .catch(error => res.status(400).json({ error }));
});
module.exports = app;