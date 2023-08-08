import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './models/service.model';
export declare class Service_Services {
    private readonly ServiceModel;
    constructor(ServiceModel: typeof Service);
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service>;
    create(createServiceDto: CreateServiceDto): Promise<Service>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service>;
    delete(id: number): Promise<void>;
}
