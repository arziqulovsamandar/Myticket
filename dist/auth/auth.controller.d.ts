import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateEmployeeDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
