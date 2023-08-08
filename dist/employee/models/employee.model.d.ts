import { Model } from 'sequelize-typescript';
import { Order } from '../../order/models/order.model';
interface EmployeeAtr {
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    phone: string;
    login: string;
    is_active: boolean;
    hashed_pasword: string;
    boshvaqti: boolean;
    hashed_refresh_token: string;
}
export declare class Employee1 extends Model<Employee1, EmployeeAtr> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
    hashed_password: string;
    phone: string;
    address: string;
    is_active: boolean;
    boshvaqti: boolean;
    hashed_refresh_token: string;
    order: Order[];
}
export {};
