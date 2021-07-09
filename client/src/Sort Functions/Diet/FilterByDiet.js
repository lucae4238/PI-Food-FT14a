const filterByDiet = (diet, array) => {
    console.log('here')

    let result = array.filter(e => e["diets"].includes(diet))
    console.log(`array`, result)
    return result;

}

export default filterByDiet;