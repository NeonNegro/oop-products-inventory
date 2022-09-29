export default class Item {
    constructor(properties) {
        for (const p in properties) this[p] = properties[p];
    }
}
