import { UserDTO } from "@/data/dtos/user/user.dto";

export interface UserStateModel {
    users: UserDTO[];
    user: UserDTO;
    loaded: boolean;
}
