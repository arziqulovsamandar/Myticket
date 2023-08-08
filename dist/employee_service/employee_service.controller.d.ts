import { EmployeeServiceService } from './employee_service.service';
import { CreateEmployeeServiceDto } from './dto/create-employee_service.dto';
import { UpdateEmployeeServiceDto } from './dto/update-employee_service.dto';
import { EmployeeService } from './models/employee_service.model';
export declare class EmployeeServiceController {
    private readonly employeeServiceService;
    constructor(employeeServiceService: EmployeeServiceService);
    findAll(): Promise<EmployeeService[]>;
    findOne(id: number): Promise<EmployeeService>;
    create(createServiceDto: CreateEmployeeServiceDto): Promise<EmployeeService>;
    update(id: number, updateTypeDto: UpdateEmployeeServiceDto): Promise<EmployeeService>;
    delete(id: number): Promise<void>;
}
