import { DirectorRepository } from "@/domain/repositories/director.repository";
import { HttpDirectorService } from "../services/http-director.service";

export const directorProviders = [
    {
        provide: DirectorRepository,
        useClass: HttpDirectorService
    }
]