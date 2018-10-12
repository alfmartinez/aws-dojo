export class CommentRepository {
    static save(comment) {
        console.log('Saving', comment);
    }

    static getAll() {
        return [{
            id: 'ABCD',
            message: 'Comment A'
        },{
            id: '99F3',
            message:'Comment B'
        },{
            id: 'B9F3',
            message:'Comment C'
        }];
    }
}