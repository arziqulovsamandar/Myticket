"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const admin_model_1 = require("./models/admin.model");
const uuid_1 = require("uuid");
const mail_service_1 = require("../mail/mail.service");
const sequelize_2 = require("sequelize");
let AdminService = exports.AdminService = class AdminService {
    constructor(AdminRepo, jwtService, mailService) {
        this.AdminRepo = AdminRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    findOne(id) {
        return this.AdminRepo.findByPk(id);
    }
    update(id, updateAdminDto) {
        return 'This action updates a #${id} Admin;';
    }
    remove(id) {
        this.AdminRepo.destroy({ where: { id } });
        return { message: "Foydalanuvchi o'chirildi" };
    }
    async registration(createAdminDto, res) {
        const Admin = await this.AdminRepo.findOne({
            where: { username: createAdminDto.username },
        });
        if (Admin) {
            throw new common_1.BadRequestException('Adminname already exists');
        }
        if (createAdminDto.password !== createAdminDto.confirm_password) {
            throw new common_1.BadRequestException('Password is not match');
        }
        const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
        const newAdmin = await this.AdminRepo.create({
            ...createAdminDto,
            hashed_password: hashed_password,
        });
        const tokens = await this.getTokens(newAdmin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const uniqueKey = (0, uuid_1.v4)();
        const updateAdmin = await this.AdminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
            activation_link: uniqueKey,
        }, { where: { id: newAdmin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        await this.mailService.sendAdminConfirmation(updateAdmin[1][0]);
        const response = {
            message: 'Admin registered',
            Admin: updateAdmin[1][0],
            tokens,
        };
        return response;
    }
    async getTokens(Admin) {
        const JwtPayload = {
            id: Admin.id,
            is_active: Admin.is_active,
            is_owner: Admin.is_creator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(JwtPayload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(JwtPayload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async login(loginAdminDto, res) {
        const { email, password } = loginAdminDto;
        const Admin = await this.AdminRepo.findOne({ where: { email } });
        if (!Admin) {
            throw new common_1.UnauthorizedException('Admin topilmadi');
        }
        const isMatchPass = await bcrypt.compare(password, Admin.hashed_password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException('Admin not registration');
        }
        const tokens = await this.getTokens(Admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateAdmin = await this.AdminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: Admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Admin registered',
            Admin: updateAdmin[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const AdminData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!AdminData) {
            throw new common_1.ForbiddenException('Admin not found');
        }
        const updateAdmin = await this.AdminRepo.update({ hashed_refresh_token: null }, { where: { id: AdminData.id }, returning: true });
        res.clearCookie('refresh_token');
        const response = {
            message: 'Admin logged out successfuly',
            Admin: updateAdmin[1][0],
        };
        return response;
    }
    async refreshToken(Admin_id, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (Admin_id != decodedToken['id']) {
            throw new common_1.UnauthorizedException('Admin topilmadi');
        }
        const Admin = await this.AdminRepo.findOne({ where: { id: Admin_id } });
        if (!Admin || !Admin.hashed_refresh_token) {
            throw new common_1.UnauthorizedException('Admin not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, Admin.hashed_refresh_token);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const tokens = await this.getTokens(Admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateAdmin = await this.AdminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: Admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Admin refreshed',
            Admin: updateAdmin[1][0],
            tokens,
        };
        return response;
    }
    async findAll(findAdminDto) {
        const where = {};
        if (findAdminDto.first_name) {
            where['first_name'] = {
                [sequelize_2.Op.like]: `%${findAdminDto.first_name}%`,
            };
        }
        if (findAdminDto.last_name) {
            where['last_name'] = {
                [sequelize_2.Op.like]: `%${findAdminDto.last_name}%`,
            };
        }
        if (findAdminDto.username) {
            where['Adminname'] = {
                [sequelize_2.Op.like]: `%${findAdminDto.username}%`,
            };
        }
        if (findAdminDto.phone) {
            where['phone'] = {
                [sequelize_2.Op.like]: `%${findAdminDto.phone}%`,
            };
        }
        if (findAdminDto.email) {
            where['email'] = {
                [sequelize_2.Op.like]: `%${findAdminDto.email}%`,
            };
        }
        const Admins = await admin_model_1.Admin.findAll({ where });
        if (!Admins) {
            throw new common_1.BadRequestException('Admin not found');
        }
        return Admins;
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activate link not found');
        }
        const updateAdmin = await this.AdminRepo.update({ is_active: true }, { where: { activation_link: link, is_active: false }, returning: true });
        if (!updateAdmin[1][0]) {
            throw new common_1.BadRequestException('Admin already activated');
        }
        const response = {
            message: 'Admin activated successfuly',
            Admin: updateAdmin,
        };
        return response;
    }
};
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        mail_service_1.MailService])
], AdminService);
//# sourceMappingURL=admin.service.js.map