import { Employee1Service } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee1 } from './models/employee.model';
import { AddRoleDto } from '../employee/dto/add-role.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: Employee1Service);
    activeUser(addRoleDto: AddRoleDto): Promise<Employee1>;
    reactiveUser(addRoleDto: AddRoleDto): Promise<Employee1>;
    findAll(): Promise<Employee1[]>;
    findOne(id: number): Promise<Employee1>;
    createEmployee1(createEmployee1Dto: CreateEmployeeDto): Promise<Employee1>;
    update(id: number, updateTypeDto: UpdateEmployeeDto): Promise<Employee1>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
