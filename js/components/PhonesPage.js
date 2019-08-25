import PhonesCatalog from './PhonesCatalog.js';
import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from "../api/phones.js";
import Component from "../Component.js";

export default class PhonesPage extends Component {
  constructor(element) {
    super(element);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      items: [],
    };

    this.render();
  }

  init() {
    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,
      onPhoneSelected: (phoneId) => {
        this.setState({
          selectedPhone: getById(phoneId),
        })
      },
      onAdd: (phoneId) => {
        this.setState({
          items: [...this.state.items, phoneId],
        });
      },
    });
    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: () => {
        this.setState({
          selectedPhone: null,
        });
      },
      onAdd: (phoneId) => {
        this.setState({
          items: [...this.state.items, phoneId],
        });
      },
    });
    this.initComponent(ShoppingCart, {
      items: this.state.items,
      onRemove: (phoneId) => {
        this.setState({
          items: this.state.items.filter(item => item !== phoneId),
        });
      }
    });
    this.initComponent(Filter);
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
  
        <!--Sidebar-->
        <div class="col-md-2">
          <section data-component="Filter">
            
          </section>
  
          <section data-component="ShoppingCart">
            
          </section>
        </div>
  
        <!--Main content-->
        
        <div class="col-md-10">
        ${this.state.selectedPhone ? 
          `<div data-component="PhoneViewer"></div>`
          :
          `<div data-component="PhonesCatalog"></div>`}
        </div>
      </div>  
    `;

    this.init();
  }
}