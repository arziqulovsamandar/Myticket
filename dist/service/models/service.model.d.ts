import { Model } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { EmployeeService } from "../../employee_service/models/employee_service.model";
interface ServiceAttr {
    name: string;
}
export declare class Service extends Model<Service, ServiceAttr> {
    id: number;
    name: string;
    order: Order[];
    employeeService: EmployeeService[];
}
export {};
