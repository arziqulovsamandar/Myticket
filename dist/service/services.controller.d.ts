import { Service_Services } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './models/service.model';
export declare class ServicesController {
    private readonly service;
    constructor(service: Service_Services);
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service>;
    create(createServiceDto: CreateServiceDto): Promise<Service>;
    update(id: number, updateTypeDto: UpdateServiceDto): Promise<Service>;
    delete(id: number): Promise<void>;
}
