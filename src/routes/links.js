const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async (req, res) => {
    const { title, description, uploadfile, city, barrio, state } = req.body;
    const newIncidence = {
        title, 
        description,
        uploadfile,
        city,
        barrio,
        state
    };
    await pool.query('INSERT INTO incidents set ?', [newIncidence]);
    res.redirect('/links');
});

router.get('/', async (req, res) => {
    const links = await pool.query('SELECT * FROM incidents');
    res.render('links/list', { links });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM incidents WHERE ID = ?', [id]);
    res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM incidents WHERE id = ?', [id]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, uploadfile, city, barrio, state } = req.body;
    const newIncidence = {
        title, 
        description,
        uploadfile,
        city,
        barrio,
        state
    };
    await pool.query('UPDATE incidents set ? WHERE id = ?', [newIncidence, id]);
    res.redirect('/links');
});


module.exports = router;