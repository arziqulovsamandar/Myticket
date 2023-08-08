import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
export declare class OrderService {
    private readonly regionModel;
    constructor(regionModel: typeof Order);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(createServiceDto: CreateOrderDto): Promise<Order>;
    update(id: number, updateServiceDto: UpdateOrderDto): Promise<Order>;
    delete(id: number): Promise<void>;
}
