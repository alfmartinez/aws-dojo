import API from '@aws-amplify/api';

export class RemoteBackRepository {
    constructor(apiName, path) {
        this.apiName = apiName;
        this.path = path;
    }

    save(item) {
        const init = {
            body: item
        };
        API.post(this.apiName, this.path, init )
    }

    getAll() {
        return API.get(this.apiName, this.path, {});
    }

}