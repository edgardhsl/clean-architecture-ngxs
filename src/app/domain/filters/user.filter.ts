import { Equal, HttpFilter, IFilter } from "@aiandralves/tivic-ui";
import { User } from "../entities/user";

export class UserFilter {
    name: string;
    email: string;

    constructor ({ name, email }: Partial<User>) {
        this.name = name;
        this.email = email;
    }

    getFilters (): IFilter {
        const httpFilter: IFilter = new HttpFilter([]);

        if (this.name) httpFilter.addFilter(new Equal("name", this.name));

        if (this.email) httpFilter.addFilter(new Equal("email", this.email));

        return httpFilter;
    }
}
