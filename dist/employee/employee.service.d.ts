import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee1 } from './models/employee.model';
import { ActivateEmployeeDto } from './dto/activate-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class Employee1Service {
    private readonly Employee1Model;
    constructor(Employee1Model: typeof Employee1);
    findAll(): Promise<Employee1[]>;
    findOne(id: number): Promise<Employee1>;
    findByLogin(login: string): Promise<Employee1>;
    createEmployee1(createEmployee1Dto: CreateEmployeeDto): Promise<Employee1>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getEmployee1ByLogin(login: string): Promise<Employee1>;
    activateEmployee1(activateEmployee1Dto: ActivateEmployeeDto): Promise<Employee1>;
    reactivateEmployee1(activateEmployee1Dto: ActivateEmployeeDto): Promise<Employee1>;
    update(id: number, updateServiceDto: UpdateEmployeeDto): Promise<Employee1>;
}
