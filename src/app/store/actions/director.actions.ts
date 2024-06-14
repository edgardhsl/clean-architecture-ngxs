import { DirectorDTO } from "@/data/dtos/director.dto";

const scope = "[Director]";

export class CreateDirector {
    static readonly type = `${scope} Create`;

    constructor (public payload: DirectorDTO) {}
}

export class UpdateDirector {
    static readonly type = `${scope} Update`;

    constructor (public id: string, public payload: DirectorDTO) {}
}

export class FindDirector {
    static readonly type = `${scope} Fetch`;
}

export class GetDirector {
    static readonly type = `${scope} Get`;

    constructor (public id: string) {}
}

export class DeleteDirector {
    static readonly type = `${scope} Delete`;

    constructor (public id: string) {}
}
