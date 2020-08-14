import "../component/styles/style.css";
import "../component/Navbar";
import "../component/Header";
import "../component/Search";
import "../component/MealList";
import getMeal from "../data/Meals";
import getDrink from "../data/Drinks";
import DataMeals from "../data/dataMeals";



const main = () => {


// search

    let searchBar = document.querySelector('search-app');
    let mealItem = document.querySelector('meals-list');
    
    const buttonOnClick = async () => {

        try {
            let inputElement = await DataMeals.searchItem(searchBar.getValue);
            renderMeal(inputElement);
        } catch {
            messageError();
        }
        
    }



    searchBar.addEventListener('keyup', event => {
        if (event.which === 13) {
            buttonOnClick();
        }
    });


    searchBar.clickEvent = buttonOnClick;



    const renderMeal = (result) => {
        mealItem.meals = result;
    }



    const messageError = () => {
        let messageError = document.querySelector('.message-error');
        messageError.innerHTML = `<p>Maaf , sepertinya ada yang salah</p>`;

    }




    // footer 

    let footerYears = document.getElementById('footer-years');
    let date = new Date();
    footerYears.innerHTML += date.getFullYear(); 


    // data
    getMeal();
    getDrink();

}




export default main;