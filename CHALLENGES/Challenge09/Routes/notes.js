const router = require('express').Router();
const fs = require('fs')
const util = require('util');
const {v4: uuidv4} = require('uuid')
const database = path.join (__dirname, "../db/db.json")

notesRouter.get('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(database))
    res.json(notes);
})