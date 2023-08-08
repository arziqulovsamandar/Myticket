import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region1 } from './models/region.model';
export declare class RegionService {
    private readonly regionModel;
    constructor(regionModel: typeof Region1);
    findAll(): Promise<Region1[]>;
    findOne(id: number): Promise<Region1>;
    create(createServiceDto: CreateRegionDto): Promise<Region1>;
    update(id: number, updateServiceDto: UpdateRegionDto): Promise<Region1>;
    delete(id: number): Promise<void>;
}
