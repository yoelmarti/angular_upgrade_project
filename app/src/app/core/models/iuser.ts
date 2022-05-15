export interface Iuser {
    _id: String;
    name: String;
    email: String;
    password: String;
    emoji: String;
    msg?: String
}

export interface IuserSignin {
    name: String;
    email: String;
}
