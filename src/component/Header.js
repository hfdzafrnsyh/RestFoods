class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        
        <div class="caption-header">
            <h3>RestFoods</>
            </div>

            <div class="header-image">
            
            <h3><u>Resto , berkualitas harga pas!</u></h3>
        
        </div>

        `
    }
}

customElements.define('header-app', Header);