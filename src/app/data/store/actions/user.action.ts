import { CreateUserDTO } from "@/data/dtos/user/create-user.dto";
import { UpdateUserDTO } from "@/data/dtos/user/update-user.dto";

const scope = "[User]";

export class CreateUser {
    static readonly type = `${scope} Create`;

    constructor (public payload: CreateUserDTO) {}
}

export class UpdateUser {
    static readonly type = `${scope} Update`;

    constructor (public payload: UpdateUserDTO) {}
}

export class FindUser {
    static readonly type = `${scope} Find`;

    constructor (public payload?: any) {}
}

export class GetUser {
    static readonly type = `${scope} Get`;

    constructor (public id: string) {}
}

export class DeleteUser {
    static readonly type = `${scope} Delete`;

    constructor (public id: string) {}
}
