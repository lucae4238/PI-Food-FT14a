const router = require("express").Router();
const Sequelize = require("sequelize");
const { Recipe, Diet } = require("../../db");
const { recipeName, recipeId } = require("../axios/recipesAxios");
const { FoCDietG } = require("../controllers/dietFoC");
const Op = Sequelize.Op;

router.get("/", async function (req, res) {
  let { name } = req.query;
  //page is for paged results, marks wich page must be shown

  if (!name || name === "" || name === " ")
    return res.status(404).json({ message: "must send a valid name in query" });

  try {
    //finding in database
    let dbResult = await Recipe.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: [
        { model: Diet, attributes: ["name"], through: { attributes: [] } },
      ],
    });

    
    let dbFormated = []

    dbResult.map(e => {
      let diets = e["diets"]
      let formated = []
      diets.map(d => formated.push(d["name"]))
      let obj = {
        id: e["id"],
        name: e["name"],
        score: e["score"],
        healthScore: e["healthScore"],
        steps: e["steps"],
        image: e["image"],
        dishTypes: e["dishTypes"],
        diets:  formated,
      }
      dbFormated.push(obj)
    })

    //finding in API
    let apiResult = await recipeName(name);

    if (apiResult == null) return res.json({ message: "key over used" });

    //adding found diets to DB
    FoCDietG(apiResult);

    //total recievies up to 100 results from API + results from DB
    let total = dbFormated.concat(apiResult);
    // let total = dbFormated

    //if theres no recipe with that name
    if (total.length === 0) return res.json({ message: "couldnt find any results" });

    res.json(total);
  } catch (error) {
    console.log("error in get ", error);
  }
});





router.get("/:id/", async function (req, res) {
  let { id } = req.params;
  //DB uses UUIDV1 => find if format is number or UUID

  if (
    id.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
  ) {
    //if UUID search in DB, if no results send message
    let dbResult = await Recipe.findOne({
      where: { id: id },
      include: [
        { model: Diet, attributes: ["name"], through: { attributes: [] } },
      ],
    });
    return dbResult === null
      ? res.json({ mesage: "error finding with id" })
      : res.json(dbResult);
  }
  //format isnt UUID, find in API
  let apiResult = await recipeId(id);
  return apiResult.length === 0
    ? res.json({ mesage: "error finding with id" })
    : res.json(apiResult);
});

module.exports = router;
