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

customElements.define("my-header", MyHeader)
// document.body.getElementsByTagName("my-header", MyHeader)

class MyFooter extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    
        // write element functionality in here
      }
    connectedCallBack(){
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
        const wrapper = document.createElement("my-footer");

        this.innerHTML = `
            <footer class="d-flex align-items-center justify-content-center">
                © 2022 Mathias Casper Lynge Le-Holding
            </footer>
        `
        // attach the created elements to the shadow DOM
        this.shadowRoot.append(style, wrapper);
    }
}

function addCustomFooterElement(){
window.customElements.define("my-footer", MyFooter);
console.log("Added MyElement to custom element registry!");
}

addCustomElement();


let tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>:host { ... }</style> <!-- look ma, scoped styles -->
    <b>I'm in shadow dom!</b>
    <slot></slot>
`;

customElements.define('x-foo-shadowdom', class extends HTMLElement {
    constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
});

//https://www.youtube.com/watch?v=j5Sl6vx_l1s
//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
//https://www.geeksforgeeks.org/html-dom-customelements-define-method/

