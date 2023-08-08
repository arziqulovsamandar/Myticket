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
exports.Employee1 = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../order/models/order.model");
let Employee1 = exports.Employee1 = class Employee1 extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'UNIQUE ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Employee1.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sobir', description: 'Foydalanuvchi ismi' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bobirov', description: 'Foydalanuvchi familiyasi' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'email@gmail.com',
        description: 'Foydalanuvchi elektron pochtasi',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        unique: true,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'login',
        description: 'Foydalanuvchi logini',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password',
        description: 'Foydalanuvchi paroli',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '912145787',
        description: 'Foydalanuvchi telefoni',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Toshkent',
        description: 'Foydalanuvchi manzili',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], Employee1.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'false',
        description: 'Foydalanuvchi egasi yoki yo`qligi',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Employee1.prototype, "boshvaqti", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'token',
        description: 'Foydalanuvchi tasdiqlangan holati',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Employee1.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_model_1.Order),
    __metadata("design:type", Array)
], Employee1.prototype, "order", void 0);
exports.Employee1 = Employee1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'employee' })
], Employee1);
//# sourceMappingURL=employee.model.js.map