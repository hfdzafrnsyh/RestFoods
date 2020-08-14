const baseUrl = `https://www.themealdb.com/api/json/v1/1`;
const getMeal = () => {
    fetch(`${baseUrl}/categories.php`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {

            if (responseJson.error) {
                alert("error");
            } else {
                renderMenus(responseJson.categories);
            }

        })
        .catch((error = "error") => {
            alert(error);
        })
}



const renderMenus = (categories) => {
    let mealsCategory = document.querySelector('#meals-category');
    mealsCategory.innerHTML = `<h2>Meal</h2>`;
    categories.forEach(category => {
        mealsCategory.innerHTML += `
        
            <div class="categories">
           
            <h3>${category.strCategory}</h2>
           
            <img src="${category.strCategoryThumb}">
            
            <div class="button-categories">
            <button type="button" id="${category.idCategory}" class="btn btn-info meal-detail" data-toggle="modal" data-target="#exampleModal">Detail Id</button>
            </div>
            </div>

            `;

    })


    const detailMeal = document.querySelectorAll('.meal-detail');
    detailMeal.forEach(mealDetail => {
        mealDetail.addEventListener('click', function () {
            modalRender(mealDetail)
        })
    });


    // modal
    const modalRender = (dataMeal) => {
        let modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `<h3> Id : ${dataMeal.id}</h3>`;

    }


}





export default getMeal;