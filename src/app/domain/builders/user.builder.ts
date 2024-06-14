import { User } from "@/domain/entities/user";

export class UserBuilder {
    protected user: User;

    constructor () {
        this.user = new User();
    }

    name (name: string): UserBuilder {
        this.user.name = name;
        return this;
    }

    email (email: string): UserBuilder {
        this.user.email = email;
        return this;
    }

    build (): User {
        return this.user;
    }
}
