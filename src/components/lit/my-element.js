import { LitElement, html, css } from 'lit';

const tagName = 'my-element';

export class MyElement extends LitElement {

  static styles = css`
  :host {
    background-color: var(--background-color, yellow);
    display:block;
  }
`;
render() {
  return html`<p>This is a background colour</p>`;
}
}

customElements.define(tagName, MyElement);