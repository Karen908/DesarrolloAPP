export interface User {
    id?: string;
    email: string;
    name: string;
    lastname: string;
    phone: string;
    password: string;
    confirmPassword: string;
    session_token?: string;
    }