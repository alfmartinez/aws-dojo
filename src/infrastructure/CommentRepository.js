import {RemoteBackRepository} from "./back/RemoteBackRepository";

class CommentRepository {
    constructor() {
        this.back = new RemoteBackRepository('commentsCRUD','/comments');
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