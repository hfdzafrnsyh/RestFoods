class MealsItem extends HTMLElement {


    set meal(meal) {
        this._meal = meal;
        this.render();
    }


    render() {
        this.innerHTML = `
     <div class="meals-item">
          <div class="meals-info">
            <img src="${this._meal.strMealThumb}" alt="Fan Art">
         </div>
        <div class="meals-info">
            <h2><u>${this._meal.strMeal}</u></h2>
            <p>${this._meal.strInstructions}</p>
        </div>
     </div>`;

    }

}

customElements.define('meal-item', MealsItem);