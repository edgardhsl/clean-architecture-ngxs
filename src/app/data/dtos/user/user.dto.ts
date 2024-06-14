import { User } from "@/domain/entities/user";

export interface UserDTO extends User {}

export function makeUser (raw: Partial<UserDTO> = {}): UserDTO {
    return {
        name: "",
        email: "",
        password: "",
        ...raw
    };
}
