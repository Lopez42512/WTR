const express = require("express");

const router = express.Router();

// const getGames = require('../util/games')
const axios = require("axios")

const field_list = 'name,deck,expected_release_day,platforms,original_game_rating,image'
router.get("/", (req,res,next) => {
    async function getGames() {
        const response = await axios.get(
            `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&limit=10&format=json&field_list=${field_list}&filter=expected_release_year:2021,name:halo`
        )
    
        const data = response.data;
    
        res.json(data);
    }
    getGames()
})

module.exports = router;