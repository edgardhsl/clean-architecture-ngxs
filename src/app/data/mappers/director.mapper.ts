import { Mapper } from "@/core/base/mapper";
import { Director } from "@/domain/entities/director";
import { DirectorDTO } from "../dtos/director.dto";

export class DirectorMapper implements Mapper<DirectorDTO, Director> {
    fromMap (data: DirectorDTO): Director {
        return {
            id: data?.id,
            name: data.name,
            description: data.description
        };
    }

    toMap (data: Director): DirectorDTO {
        return {
            id: data?.id,
            name: data.name,
            description: data.description
        };
    }
}