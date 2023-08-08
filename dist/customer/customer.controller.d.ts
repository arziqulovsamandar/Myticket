import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(createServiceDto: CreateCustomerDto): Promise<Customer>;
    update(id: number, updateTypeDto: UpdateCustomerDto): Promise<Customer>;
    delete(id: number): Promise<void>;
}
