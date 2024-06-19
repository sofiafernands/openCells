import { LitElement, html, css } from  'https://cdn.skypack.dev/lit';

class App extends LitElement {
    static styles = css`
        h1 {
            color: red;
        }
    `;
    
    render() {
        return html`<h1>ooooooooooooOOOOOOOOOOOññññññññññññññieEEEEEEEEEEEEEEEEEEE !</h1>`;
    }
}

customElements.define('my-app', App);
