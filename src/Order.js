export default class Order {
    itens = [];

    constructor() { }

    addItem(item) {
        this.itens.push(item);
    }

    get total() {
        return this.itens.reduce((sum, current) => sum + current.price, 0);
    }

    get taxes() {
        return this.itens.reduce((sum, item) => {
            let x = sum + (item.price * item.tax)
            console.log(item, item.tax,  x);
            return x;
        }, 0);
    }
}