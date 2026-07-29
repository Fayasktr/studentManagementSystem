export interface IBaseRepository<T> {
    findById(id: string): Promise<T | null>
    deleteById(id: string): Promise<T | null>
    updateById(id: string, data: Partial<T>): Promise<T | null>
    create(data: any): Promise<T>
}