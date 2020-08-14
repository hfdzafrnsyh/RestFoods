import dataDrinks from "./dataDrinks.js";


const getDrink = () => {
    let drinkJuice = document.querySelector("#drink-category");
    drinkJuice.innerHTML = `<h2>Drink</h2>`;
    dataDrinks.forEach(drink => {
        drinkJuice.innerHTML += `
        
    
        <div class="categories">
        <h3>${drink.strDrinks}</h3>
        <img src="http://localhost:8080/src/data/image/drinks/${drink.drinkThumbnail}">
        <div class="button-categories">
        <button type="button" id="${drink.id}" class="btn btn-info drink-detail" data-toggle="modal" data-target="#exampleModal">Detail Id</button>
        </div>
     
        </div>

        `;

    });




    const detailDrink = document.querySelectorAll('.drink-detail');
    detailDrink.forEach(drinkDetail => {
        drinkDetail.addEventListener('click', function () {
            modalRender(drinkDetail);
        })

    });


  // modal

    const modalRender = (dataItemDrink) => {
        let modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `<h3> Id : ${dataItemDrink.id}</h3>`;

    }



}






export default getDrink;