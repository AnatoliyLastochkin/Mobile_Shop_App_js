export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render()

    this.element.addEventListener('click', evt => {
      const phoneLink = evt.target.closest('[data-element="PhoneLink"]');

      if (!phoneLink) return;

      const phoneId = phoneLink.dataset.phoneId;

      this.props.onPhoneSelected(phoneId);
    });
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