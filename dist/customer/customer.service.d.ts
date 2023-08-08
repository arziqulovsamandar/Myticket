import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
export declare class CustomerService {
    private readonly regionModel;
    constructor(regionModel: typeof Customer);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(createServiceDto: CreateCustomerDto): Promise<Customer>;
    update(id: number, updateServiceDto: UpdateCustomerDto): Promise<Customer>;
    delete(id: number): Promise<void>;
}
