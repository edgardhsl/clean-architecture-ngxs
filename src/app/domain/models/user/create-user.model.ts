import { User } from "@/domain/entities/user";

export interface CreateUserModel extends Omit<User, "id"> {}
