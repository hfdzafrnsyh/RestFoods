class Search extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickSearch = event;
        this.render();
    }

    get getValue() {
        return this.querySelector('#search').value;
    }

    render() {
        this.innerHTML = `
        
        <div class="search-app">
        <input type="search" id="search" placeholder="Search Food">
        <button type="submit" id="searchButton">Search</button>
        </div>

        `;

        this.querySelector('#searchButton').addEventListener('click', this._clickSearch);
    }

}

customElements.define('search-app', Search);