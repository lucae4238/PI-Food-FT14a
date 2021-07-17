const router = require('express').Router();
const Sequelize = require('sequelize');
const { Recipe, Diet } = require('../../db');
// const {FoCDietP} = require('../controllers/dietFoC');
const Op = Sequelize.Op;



router.post('/', async (req,res) => {
    try {
    let {name, summary, score, healthScore, steps, diets} =req.body;
    if(!name || !summary) return res.status(422).json({message: 'name and summary required'});
    if(score < 0 || score > 100) return res.status(422).send({message: 'score must be between 0 -100'})
    if(healthScore < 0 || healthScore > 100) return res.status(422).json({message:'healtScore must be between 0 -100'})
    score = score ? score : 0
    healthScore = healthScore ? healthScore : 0



    let newRecipe = await Recipe.create({
        name,
        summary, 
        score:score, 
        healthScore:healthScore,
        steps,
        image: 'https://dclgroup.com.ar/wp-content/themes/unbound/images/No-Image-Found-400x264.png',
    })
    
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
        console.log('ERROR MAKING POST REQUEST', error)
    }
    
})



module.exports = router