import { CreateEmployeeServiceDto } from './dto/create-employee_service.dto';
import { UpdateEmployeeServiceDto } from './dto/update-employee_service.dto';
import { EmployeeService } from './models/employee_service.model';
export declare class EmployeeServiceService {
    private readonly regionModel;
    constructor(regionModel: typeof EmployeeService);
    findAll(): Promise<EmployeeService[]>;
    findOne(id: number): Promise<EmployeeService>;
    create(createServiceDto: CreateEmployeeServiceDto): Promise<EmployeeService>;
    update(id: number, updateServiceDto: UpdateEmployeeServiceDto): Promise<EmployeeService>;
    delete(id: number): Promise<void>;
}
