export interface CreateStudentDto {
    name: string;
    email: string;
    age: number;
    course: string;
    marks: number[];
}

export interface updateStudentDto {
    name?: string;
    email?: string;
    age?: number;
    course?: string;
    marks?: number[];
}

