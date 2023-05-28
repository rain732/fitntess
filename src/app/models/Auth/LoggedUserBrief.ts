export class LoggedUserBrief {
    message: string = "";
    user: User = new User();
}

export class User {
    email: string = '';
    first_name: string = '';
    last_name: string = '';
    password: string = '';
    is_Admin: boolean = false;
    weight: number = 0;
    height: number = 0;
    age: number = 0;
    gender: string = ""
}