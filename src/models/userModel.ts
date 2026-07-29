export default class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) { }

    getRole(): string {
        return "User";
    }

    getDashbord(): string {
        return "welcome user"
    }
}