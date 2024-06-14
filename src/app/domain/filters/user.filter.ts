import { Equal, HttpFilter, IFilter } from "@aiandralves/tivic-ui";
import { UserModel } from "../models/user/user.model";

interface UserProps extends Partial<UserModel> {
    page: number;
    limit: number;
}

export class UserFilter {
    name: string;
    email: string;
    page: number;
    limit: number;

    constructor ({ name, email, page, limit }: UserProps) {
        this.name = name;
        this.email = email;
        this.page = page;
        this.limit = limit;
    }

    getFilters (): IFilter {
        const httpFilter: IFilter = new HttpFilter([new Equal("limit", 50)]);

        if (this.name) httpFilter.addFilter(new Equal("name", this.name));

        if (this.email) httpFilter.addFilter(new Equal("email", this.email));

        if (this.page !== null || this.page >= 0) httpFilter.addFilter(new Equal("page", this.page));

        if (this.limit !== null || this.limit > 0) httpFilter.addFilter(new Equal("limit", this.limit));

        return httpFilter;
    }
}
