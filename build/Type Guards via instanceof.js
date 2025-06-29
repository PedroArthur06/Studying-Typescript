const fileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};
const dbSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};
function loadData(source) {
    // if ('path' in source) {
    if (source.type === 'file') {
        // source.path
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User('Max');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    // .join() OR .scan() ...
}
export {};
