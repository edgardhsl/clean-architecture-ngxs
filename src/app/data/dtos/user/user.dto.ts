import { User } from "@/domain/entities/user";

export interface UserDTO extends User {
    confirmPassword?: string;
}

export function makeUser (raw: Partial<UserDTO> = {}): UserDTO {
    return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        ...raw
    };
}
