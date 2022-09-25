class MyHeader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    
        // write element functionality in here
      }

    connectedCallBack() {
        this.innerHTML = `
            <header>
                <div class="container my-1" style="text-align: center">
                    <h1>Mathias Casper Lynge Le-Holding</h1>
                    <a href="mailto:mcll@tec.dk" type="button" class="btn btn-outline-primary">mcll@tec.dk</a>

                    <p class="lead">
                        I'm a social person with a "Bachelor in Electrical Electronic and Computer Engineering" and 3 years of experience in system development.
                    </p>
                </div>
            </header>
            <script src="switch.js"></script>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallBack(){
        this.innerHTML = `
            <footer class="d-flex align-items-center justify-content-center">
                © 2022 Mathias Casper Lynge Le-Holding
            </footer>
        `
    }
}

function addCustomFooterElement(){
customElements.define('my-footer', MyFooter);
console.log("Added MyElement to custom element registry!");
}

addCustomElement()

//https://www.youtube.com/watch?v=j5Sl6vx_l1s
//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
//https://www.geeksforgeeks.org/html-dom-customelements-define-method/