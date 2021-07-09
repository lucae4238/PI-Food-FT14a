const router = require('express').Router();
const Sequelize = require('sequelize');
const { Recipe, Diet } = require('../../db');
const {FoCDietP} = require('../controllers/dietFoC');
const Op = Sequelize.Op;

router.post('/', async (req,res) => {
    try {
    const {name, summary, score, healthScore, steps, image, dishTypes, diets} =req.body;

    if(!name || !summary) return res.status(400).json({message: 'error sending request'});
    if(score < 0 || score > 100) return res.send('score must be between 0 -100')
    if(healthScore < 0 || healthScore > 100) return res.json({message:'score must be between 0 -100'})


    let newRecipe = await Recipe.create({
        name,
        summary, 
        score, 
        healthScore,
        steps,
        image,
        dishTypes
    })
//[vegan, vegetarian, whole 30]
let formated= Array.isArray(diets) ? diets: [diets]

    const matchingDiets = await Diet.findAll({
        where: {
            name: {
                [Op.in] : formated
            }
        }
    }) 
 await newRecipe.setDiets(matchingDiets)

    res.status(201).json(newRecipe)
    } catch (error) {
        console.log('ERROR MAKING POST REQUEST')
    }
    
})



module.exports = router