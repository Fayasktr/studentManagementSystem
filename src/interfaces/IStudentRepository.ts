import { IBaseRepository } from "./IBaseRepository";

export interface IStudentRepository extends IBaseRepository<any> {
    findByEmail(email: string): Promise<any | null>
}