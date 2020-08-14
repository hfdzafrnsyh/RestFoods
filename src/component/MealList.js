import "./MealsItem";

class MealsList extends HTMLElement {


    set meals(meals) {
        this._meals = meals;
        this.render();
    }



    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal
            this.appendChild(mealItemElement);
        })
    }
}
customElements.define('meals-list', MealsList);