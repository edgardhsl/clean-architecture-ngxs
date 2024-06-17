export class HttpFilter {
    private _filters = {};

    constructor () {}

    addFilter (name: string, value: string) {
        this._filters[name] = value;
    }

    getFilters () {
        return this._filters;
    }
}
