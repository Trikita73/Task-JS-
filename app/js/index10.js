import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import modal from '../../7-module/2-task/index.js';

export default class Cart {
    cartItems = []; // [product: {...}, count: N]

    constructor(cartIcon) {
        this.cartIcon = cartIcon;

        this.addEventlisteners();
    }

    addProduct(product) {
        let cartItem = this.cartItems.find(
            item => item.product.id == product.id
        );
        if (!cartItem) {
            cartItem = {
                product,
                count: 1
            };
            this.cartItems.push(cartItem);
        } else {
            cartItem.count++;
        }

        this.onProductUpdate(cartItem);
    }

    updateProductCount(productId, amount) {
        let cartItem = this.cartItems.find(item => item.product.id == productId);
        cartItem.count +=amount;

        if (cartItem.count == 0) {
            this.cartItems.splice(this.cartItems.index)
        }
    }
}