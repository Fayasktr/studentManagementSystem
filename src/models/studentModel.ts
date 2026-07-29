import User from "./userModel";

export default class student extends User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public age: number,
        public course: string,
        public marks: number[]
    ) {
        super(id, name, email);
    }

    override getRole(): string {
        return "student";
    }

    override getDashbord(): string {
        return "welcome student"
    }
}