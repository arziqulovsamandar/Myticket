import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-auth.dto';
import { Employee1Service } from '../employee/employee.service';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: Employee1Service, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    private validateUser;
    registration(userDto: CreateEmployeeDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
