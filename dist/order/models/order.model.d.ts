import { Model } from 'sequelize-typescript';
import { Service } from '../../service/models/service.model';
import { Customer } from '../../customer/models/customer.model';
import { Employee1 } from '../../employee/models/employee.model';
interface OrderAtr {
    employee_id: number;
    customer_id: number;
    start_date_time: Date;
    finish_date_time: Date;
    service_id: number;
}
export declare class Order extends Model<Order, OrderAtr> {
    id: number;
    employee_id: number;
    employee: Employee1;
    customer_id: number;
    customer: Customer;
    start_date_time: Date;
    finish_date_time: Date;
    service_id: number;
    service: Service;
}
export {};
