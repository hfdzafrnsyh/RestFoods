class Navbar extends HTMLElement {
 
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
       
        nav {
         background-color:rgb(43, 92, 226);
         display: flex;
         justify-content: space-around;
         align-items: center;
         color: white;
         height: 100px;
     
     }
     
     nav ul {
         display: flex;
         list-style: none;
         width: 10%;
         justify-content: space-between
     }
     
     
     
     nav ul li a {
         text-decoration: none;
         color: #efeeee;
         font-size: 0.9em;
         font-family: 'Roboto Mono', monospace;
     
     }
     
     
     nav .logo-app h3{
         font-family: 'Lobster', cursive;
         color : #efeeee;
         font-size: 50px;
     }
     
     .navbar-toggle {
         display: none;
         flex-direction: column;
         height: 19px;
         justify-content: space-between;
         position: relative;
     }
     
     .navbar-toggle span {
         display: block;
         width: 28px;
         height: 3px;
         background-color:#efeeee;
         border-radius: 2px;
     }
     
     .navbar-toggle input {
         position: absolute;
         width: 40px;
         height: 20px;
         opacity: 0;
         left: -12px;
         top: -5px;
         cursor: pointer;
         z-index: 2;
     }
     
     
     .navbar-toggle span:nth-child(2) {
         transform-origin: 0 0;
     }
     
     .navbar-toggle span:nth-child(4) {
         transform-origin: 0 100%;
     }
     
     .navbar-toggle input:checked~span:nth-child(2) {
         background-color: #efeeee;
         transform: rotate(45deg) translate(-1px, -1px);
     }
     
     .navbar-toggle input:checked~span:nth-child(4) {
         background-color: #efeeee;
         transform: rotate(-45deg) translate(-1px, 0);
     }
     
     .navbar-toggle input:checked~span:nth-child(3) {
         opacity: 0;
         transform: scale(0);
     }
 
     @media screen and (max-width:678px)  {
                 
         
            nav ul {
                flex-direction: column;
                position: absolute;
                top: 0;
                right: 0;
                height: 100vh;
                background-color: rgb(43, 92, 226);
                align-items: center;
                justify-content: space-evenly;
                width: 70%;
                transform: translateX(100%);
                transition: all 1s;
              
            }
    
    
            nav ul.slide {
                transform: translateX(0);
            }
    
            .navbar-toggle {
                display: flex;
    
            }
    
            
    
            nav .logo-app h3{
                font-size: 35px;
            }
    
 
         }
        
        </style>
    
        <nav>
                    
            <div class="logo-app">
                <h3>RestFoods</h3>
            </div>

            <ul>
                <li>
                <a href="/">Home</a>
                </li>
                
            </ul>



            <div class="navbar-toggle">
                <input type="checkbox">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav> 
  
        `

        const navToggle = this.shadowDOM.querySelector('.navbar-toggle input');
        const nav = this.shadowDOM.querySelector('nav ul');
    
        navToggle.addEventListener('click', () => {
    
            nav.classList.toggle('slide');
    
        });
    
    }
}

customElements.define('navs-app', Navbar);


