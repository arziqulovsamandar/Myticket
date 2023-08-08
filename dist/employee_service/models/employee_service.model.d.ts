import { Model } from 'sequelize-typescript';
import { Employee1 } from "../../employee/models/employee.model";
import { Service } from "../../service/models/service.model";
interface Employee_serviceAtr {
    service_id: number;
    employee_id: number;
    price: bigint;
}
export declare class EmployeeService extends Model<EmployeeService, Employee_serviceAtr> {
    id: number;
    employee_id: number;
    employee: Employee1;
    service_id: number;
    service: Service;
    price: bigint;
}
export {};
