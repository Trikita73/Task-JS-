import createElement from '../libs/lib/create-elements.js';
import escapeHtml from '../libs/lib/escape-html.js';

export default class ProductCard {
    constructor(product) {
        this.product = product;
        this.render();
        this.addEventlisteners();
    }

    render() {
        this.elem = createElement(`<div class="card">
            <div class="card__top">
                <img src="/img/products/${this.product.image}" class="card__image" alt="product"/>
                <span class="card__price">€${this.product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
                <div class="card__title">${escapeHtml(this.product.name)}</div>
                <button type="button" class="card__button">
                    <img src="/img/icons/plus-icon.svg" alt="icon"/>
                </button>
            </div>
        </div>`);
    }

    addEventlisteners() {
        this.elem.onclick = (event) => this.onClick(event);
    }

    onClick(event) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
            detail: this.product.id,
            bubbles: true
        }));
    }
}