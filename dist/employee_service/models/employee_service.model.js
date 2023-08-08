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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const employee_model_1 = require("../../employee/models/employee.model");
const service_model_1 = require("../../service/models/service.model");
let EmployeeService = exports.EmployeeService = class EmployeeService extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'UNIQUE ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], EmployeeService.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => employee_model_1.Employee1),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], EmployeeService.prototype, "employee_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => employee_model_1.Employee1),
    __metadata("design:type", employee_model_1.Employee1)
], EmployeeService.prototype, "employee", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => service_model_1.Service),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], EmployeeService.prototype, "service_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => service_model_1.Service),
    __metadata("design:type", service_model_1.Service)
], EmployeeService.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200', description: 'price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
    }),
    __metadata("design:type", BigInt)
], EmployeeService.prototype, "price", void 0);
exports.EmployeeService = EmployeeService = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'employee_service' })
], EmployeeService);
//# sourceMappingURL=employee_service.model.js.map