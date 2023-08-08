import { Model } from "sequelize-typescript";
interface AdminAtr {
    username: string;
    email: string;
    hashed_password: string;
    phone: string;
    is_active: boolean;
    is_creator: boolean;
    login: string;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, AdminAtr> {
    id: number;
    login: string;
    username: string;
    phone: string;
    hashed_password: string;
    email: string;
    is_creator: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
    activation_link: string;
    first_name: any;
}
export {};
