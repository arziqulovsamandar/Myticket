import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './models/admin.model';
import { LoginAdminDto } from './dto/login-admin.dto';
import { FindAdminDto } from './dto/find-admin.dto';
import { MailService } from '../mail/mail.service';
import { Response } from 'express';
export declare class AdminService {
    private readonly AdminRepo;
    private readonly jwtService;
    private readonly mailService;
    constructor(AdminRepo: typeof Admin, jwtService: JwtService, mailService: MailService);
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): string;
    remove(id: number): {
        message: string;
    };
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        Admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    getTokens(Admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
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
    refreshToken(Admin_id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        Admin: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findAll(findAdminDto: FindAdminDto): Promise<Admin[]>;
    activate(link: string): Promise<{
        message: string;
        Admin: [affectedCount: number, affectedRows: Admin[]];
    }>;
}
