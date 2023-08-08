import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(createServiceDto: CreateOrderDto): Promise<Order>;
    update(id: number, updateTypeDto: UpdateOrderDto): Promise<Order>;
    delete(id: number): Promise<void>;
}
