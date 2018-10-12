import {ArrayBackRepository} from "./back/ArrayBackRepository";

class CommentRepository {
    constructor() {
        this.back = new ArrayBackRepository();
    }

    save(comment) {
        this.back.save(comment);
    }

    getAll() {
        return this.back.getAll();
    }
}

const repository = new CommentRepository();
export default repository;