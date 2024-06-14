import { Entity } from "../core/base/entity";
import { Optional } from "../core/base/optional";

interface UserModel {
    name: string;
    email: string;
    password?: string;
}

export class User extends Entity<UserModel> {
    set name (name: string) {
        this.props.name = name;
    }

    get name () {
        return this.props.name;
    }

    set email (email: string) {
        this.props.email = email;
    }

    get email () {
        return this.props.email;
    }

    set password (password: string | undefined) {
        this.props.password = password;
    }

    get password () {
        return this.props.password;
    }

    static create (props: Optional<UserModel, "password">, id?: string) {
        return new User({
            ...props,
            password: props.password ?? ""
        }, id);
    }
}
