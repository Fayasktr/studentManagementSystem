import { Model } from "mongoose";

import { IBaseRepository } from "../interfaces/IBaseRepository";

export class BaseRepository<T> implements IBaseRepository<T> {
    constructor(protected model: Model<T>) { }

    async create(data: any): Promise<T> {
        return await this.model.create(data)
    }
    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id)
    }
    async updateById(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, data, { new: true })
    }
    async deleteById(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id)
    }
}