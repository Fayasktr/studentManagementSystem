import User from './userModel';

export default class admin extends User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public role: string
    ) {
        super(id, name, email)
    }
    override getRole(): string {
        return "admin";
    }
    override getDashbord(): string {
        return `welcome ${this.name}`;
    }

}
