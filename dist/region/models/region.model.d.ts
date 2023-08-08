import { Model } from 'sequelize-typescript';
import { Customer } from "../../customer/models/customer.model";
interface RegionAttr {
    viloyat: string;
    tuman: string;
    mahala: string;
}
export declare class Region1 extends Model<Region1, RegionAttr> {
    id: number;
    viloyat: string;
    tuman: string;
    mahala: string;
    customer: Customer[];
}
export {};
