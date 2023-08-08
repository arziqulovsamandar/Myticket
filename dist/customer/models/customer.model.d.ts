import { Model } from "sequelize-typescript";
import { Region1 } from "../../region/models/region.model";
import { Order } from "../../order/models/order.model";
interface CustomerAtr {
    last_name: string;
    first_name: string;
    phone: string;
    email: string;
    region_id: number;
}
export declare class Customer extends Model<Customer, CustomerAtr> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    region_id: number;
    region: Region1;
    order: Order[];
}
export {};
