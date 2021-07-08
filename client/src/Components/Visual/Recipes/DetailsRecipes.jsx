import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/actions';

const DetailsRecipes = (props) => {
    const id = props.match.params.id;
    const details = useSelector(state => state.recipeDetails)
    const dispatch = useDispatch()
    //FALTA STEPS
    //FALTA STEPS
    //FALTA STEPS
    //FALTA STEPS
    const {name, summary, score, healthScore, diets, dishTypes,image} = details
    

    useEffect( () => {
        dispatch(getDetails(id))
    }, [])
    
    return  (
        <>
        <h1>{name}</h1>
        {
            diets.map((i) => (<h4>{i}</h4>))
            
        }
        <div>

        <h3>DishTypes</h3>
        {
            dishTypes.map((i) => (<h4>{i}</h4>))
        }
        </div>
        <h4>Health score: {healthScore}</h4>
        <h4>user score: {score}</h4>
        <img src={image} alt={'recipe'}/>
        <p>{summary}</p>

       
        </>
    )
}

export default DetailsRecipes
