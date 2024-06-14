import { Mapper } from "@/core/base/mapper";
import { UserDTO } from "@/data/dtos/user/user.dto";
import { User } from "@/domain/entities/user";

export class UserMapper implements Mapper<UserDTO, User> {
    fromMap (data: UserDTO): User {
        return {
            id: data?.id,
            name: data.name,
            email: data.email,
            password: data.password
        };
    }

    toMap (data: User): UserDTO {
        return {
            id: data?.id,
            name: data.name,
            email: data.email,
            password: data.password
        };
    }
}
