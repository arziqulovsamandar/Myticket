import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { FindAdminDto } from './dto/find-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        Admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        Admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        Admin: Admin;
    }>;
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        Admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findAll(findAdminDto: FindAdminDto): Promise<Admin[]>;
    findOne(id: string): Promise<Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): {
        message: string;
    };
    activate(link: string): Promise<{
        message: string;
        Admin: [affectedCount: number, affectedRows: Admin[]];
    }>;
}
