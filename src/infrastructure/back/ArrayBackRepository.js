export class ArrayBackRepository {
    constructor() {
        this.items = [];
    }

    save(item) {
        this.items.push(item);
    }

    getAll() {
        return this.items;
    }

}