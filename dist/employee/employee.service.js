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
exports.Employee1Service = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const employee_model_1 = require("./models/employee.model");
let Employee1Service = exports.Employee1Service = class Employee1Service {
    constructor(Employee1Model) {
        this.Employee1Model = Employee1Model;
    }
    async findAll() {
        return this.Employee1Model.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.Employee1Model.findByPk(id);
    }
    async findByLogin(login) {
        return this.Employee1Model.findOne({ where: { login } });
    }
    async createEmployee1(createEmployee1Dto) {
        return this.Employee1Model.create(createEmployee1Dto);
    }
    async delete(id) {
        await this.Employee1Model.destroy({ where: { id } });
        return { message: "Foydalanuvchi o'chirildi" };
    }
    async getEmployee1ByLogin(login) {
        const Employee1 = await this.Employee1Model.findOne({
            where: { login },
            include: { all: true },
        });
        return Employee1;
    }
    async activateEmployee1(activateEmployee1Dto) {
        const Employee1 = await this.Employee1Model.findByPk(activateEmployee1Dto.employeeId);
        if (!Employee1) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        Employee1.is_active = true;
        await Employee1.save();
        return Employee1;
    }
    async reactivateEmployee1(activateEmployee1Dto) {
        const Employee1 = await this.Employee1Model.findByPk(activateEmployee1Dto.employeeId);
        if (!Employee1) {
            throw new common_1.HttpException('Foydalanuvchi topilmadi', common_1.HttpStatus.NOT_FOUND);
        }
        Employee1.is_active = false;
        await Employee1.save();
        return Employee1;
    }
    async update(id, updateServiceDto) {
        const builder = await this.Employee1Model.update(updateServiceDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
};
exports.Employee1Service = Employee1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(employee_model_1.Employee1)),
    __metadata("design:paramtypes", [Object])
], Employee1Service);
//# sourceMappingURL=employee.service.js.map