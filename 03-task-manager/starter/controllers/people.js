
const { people } = require('../data');
const People = require('../models/People')

let peopleData = [...people];

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: peopleData });
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    const newPerson = { id: peopleData.length + 1, name };
    peopleData.push(newPerson);
    res.status(201).json({ success: true, data: newPerson });
};

const getPerson = (req, res) => {
    const id = parseInt(req.params.id);
    const person = peopleData.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    res.status(200).json({ success: true, data: person });
};

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const person = peopleData.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    person.name = name;
    res.status(200).json({ success: true, data: person });
};

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id);
    const person = peopleData.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    peopleData = peopleData.filter(p => p.id !== id);
    res.status(200).json({ success: true, message: 'Person deleted' });
};

module.exports = {
    getPeople,
    addPerson,
    getPerson,
    updatePerson,
    deletePerson,
};
