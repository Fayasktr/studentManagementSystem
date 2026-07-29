"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return await this.model.create(data);
    }
    async findById(id) {
        return await this.model.findById(id);
    }
    async updateById(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteById(id) {
        return await this.model.findByIdAndDelete(id);
    }
}
exports.BaseRepository = BaseRepository;
