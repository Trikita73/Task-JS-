import createElement from '../../assets/lib/create-element.js';

export default class Modal {
    constructor() {
        this.render();

        this.elem.addEventListener('click', (event) => this.onClick(event));
    }

    render() {
        this.elem = createElement(`
            <div class="modal">
                <div class="modal__overlay"></div>
                <div class="modal__inner">
                    <div class="modal__header">
                        <button type="button" class="modal__close">
                            
                        </button>
                    </div>
                </div>
            </div>
        `);
    }
}