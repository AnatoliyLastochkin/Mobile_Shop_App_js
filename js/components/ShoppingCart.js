import Component from "../Component.js";

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'RemoveButton', evt => {
      const phoneId = evt.delegateTarget.dataset.phoneId;

      this.props.onRemove(phoneId);
    })
  }

  render() {
    this.element.innerHTML = `
      <h4>Shopping Cart</h4>
      <ul class="shopping-cart-list">
        ${this.props.items.map(item => `
          <li>${item.toUpperCase().slice(0, 15)}
            <button class="btn" data-element="RemoveButton" data-phone-id="${ item }">X</button>
          </li>  
        `).join('')}
      </ul>    
    `;
  }
}