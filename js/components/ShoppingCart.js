import Component from '../Component.js';

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'RemoveButton', evt => {
      const { phoneId } = evt.delegateTarget.dataset;

      this.props.onRemove(phoneId);
    });
  }

  render() {
    this.element.innerHTML = `
      <h4>Shopping Cart</h4>
      <ul class="shopping-cart-list">
        ${Object.keys(this.props.items).map(item => `
          <li>${item.toUpperCase().slice(0, 13)} - ${this.props.items[item]}
            <button class="btn" data-element="RemoveButton" data-phone-id="${item}">X</button>
          </li>  
        `).join('')}
      </ul>    
    `;
  }
}
