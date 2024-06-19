import { LitElement, html, css } from "lit";

class App extends LitElement {
    static styles = css`
        h1 {
        color: red;
        }
    `;
    
    render() {
        return html`<h1>Hello World!</h1>`;
    }
}

customElements.define("my-app", App);