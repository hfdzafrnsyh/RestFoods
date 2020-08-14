class DataMeals {

    static searchItem(keySearch) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keySearch}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keySearch} is undifined`);
                }
            })
    }
}

export default DataMeals;