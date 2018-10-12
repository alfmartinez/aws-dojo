class CommentRepository {
    constructor() {
        this.comments = [];
    }

    save(comment) {
        this.comments.push(comment);
    }

    getAll() {
        return this.comments;
    }
}

const repository = new CommentRepository();
export default repository;