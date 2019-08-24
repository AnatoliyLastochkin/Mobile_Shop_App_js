import Component from "../Component.js";

export default class ShoppingCart extends Component {
  constructor(element, props) {
    super(element, props);

    this.render()
  }

  render() {
    this.element.innerHTML = `
      <h4>Shopping Cart</h4>
      <ul class="shopping-cart-list">
        ${this.props.items.map(item => `
          <li>${item.toUpperCase().slice(0, 15)}<button class="btn">X</button></li>  
        `).join('')}
      </ul>    
    `;
  }
}