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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const swagger_1 = require("@nestjs/swagger");
const add_role_dto_1 = require("../employee/dto/add-role.dto");
const update_employee_dto_1 = require("./dto/update-employee.dto");
let EmployeeController = exports.EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    activeUser(addRoleDto) {
        return this.employeeService.activateEmployee1(addRoleDto);
    }
    reactiveUser(addRoleDto) {
        return this.employeeService.reactivateEmployee1(addRoleDto);
    }
    async findAll() {
        return this.employeeService.findAll();
    }
    async findOne(id) {
        return this.employeeService.findOne(id);
    }
    async createEmployee1(createEmployee1Dto) {
        return this.employeeService.createEmployee1(createEmployee1Dto);
    }
    async update(id, updateTypeDto) {
        return this.employeeService.update(id, updateTypeDto);
    }
    async delete(id) {
        return this.employeeService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni acitve qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('active_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "activeUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Roleni reactive qilish' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('reactive_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "reactiveUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Employee1' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Employee1' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Employee1' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee1", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update EmployeeService' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Employee1' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "delete", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    __metadata("design:paramtypes", [employee_service_1.Employee1Service])
], EmployeeController);
//# sourceMappingURL=employee.controller.js.map