import Component from "../Component.js";

export default class PhonesCatalog extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'PhoneLink', evt => {
      const phoneId =  evt.delegateTarget.dataset.phoneId;
      this.props.onPhoneSelected(phoneId);
    })
  }

  render() {
    const { phones } = this.props;
    this.element.innerHTML = `
      <ul class="phones">
        ${phones.map(item => `
          <li class="thumbnail">
            <a data-element="PhoneLink" data-phone-id="${ item.id }"
            href="#!/phones/${ item.id }" class="thumb">
              <img alt="${ item.name }" src="${ item.imageUrl }">
            </ada>

            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>

            <a data-element="PhoneLink" data-phone-id="${ item.id }"
             href="#!/phones/${ item.id }">${ item.name }</a>
            <p>${item.snippet}</p>
          </li>
        `).join('')}    
      </ul>    
    `;
  }
}