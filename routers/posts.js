const express = require('express');
const router = express.Router();

const food = require('../data/food.js');



router.get('/bacheca', (req, res) => {

    let response = {
        totalCount: food.length,
        data: [...food]
    }
    
    let name = req.query.name;

    if(name){
        let filteredFood = food.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
        })
        let filteredResponse = {
            totalCount: filteredFood.length,
            data: [...filteredFood]
        }
        res.json(filteredResponse);
    }else{
        res.json(response);
    }

})

router.post('/', (req, res) => {
    res.send("creazione");
})


router.get('/:id', (req, res) => {
    let id = req.params.id;
    let item = food.find((item) => {
        return item.id == id;
    })
    if(item){
        res.json(item);
    }else{
        res.status(404).send('<div>Elemento non trovato</div>');
    }
})

router.put('/:id', (req, res) => {
    res.send("modifica");
})

router.delete('/:id', (req, res) => {
    res.send("eliminazione");
})

router.patch('/:id', (req, res) => {
    res.send("modifica parziale");
})

router.all('*', (req, res) => {
    res.status(404).send('<div>Pagina non trovata</div>');
})

module.exports = router;