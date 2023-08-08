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
exports.EmployeeServiceController = void 0;
const common_1 = require("@nestjs/common");
const employee_service_service_1 = require("./employee_service.service");
const create_employee_service_dto_1 = require("./dto/create-employee_service.dto");
const update_employee_service_dto_1 = require("./dto/update-employee_service.dto");
const swagger_1 = require("@nestjs/swagger");
let EmployeeServiceController = exports.EmployeeServiceController = class EmployeeServiceController {
    constructor(employeeServiceService) {
        this.employeeServiceService = employeeServiceService;
    }
    async findAll() {
        return this.employeeServiceService.findAll();
    }
    async findOne(id) {
        return this.employeeServiceService.findOne(id);
    }
    async create(createServiceDto) {
        return this.employeeServiceService.create(createServiceDto);
    }
    async update(id, updateTypeDto) {
        return this.employeeServiceService.update(id, updateTypeDto);
    }
    async delete(id) {
        return this.employeeServiceService.delete(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All EmployeeService' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeServiceController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach EmployeeService' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeServiceController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create EmployeeService' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_service_dto_1.CreateEmployeeServiceDto]),
    __metadata("design:returntype", Promise)
], EmployeeServiceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update EmployeeService' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_employee_service_dto_1.UpdateEmployeeServiceDto]),
    __metadata("design:returntype", Promise)
], EmployeeServiceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete EmployeeService' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EmployeeServiceController.prototype, "delete", null);
exports.EmployeeServiceController = EmployeeServiceController = __decorate([
    (0, common_1.Controller)('employee-service'),
    __metadata("design:paramtypes", [employee_service_service_1.EmployeeServiceService])
], EmployeeServiceController);
//# sourceMappingURL=employee_service.controller.js.map