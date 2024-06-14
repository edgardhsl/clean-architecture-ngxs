import { UserDTO } from "./user.dto";

export interface CreateUserDTO extends Omit<UserDTO, "id"> {}
