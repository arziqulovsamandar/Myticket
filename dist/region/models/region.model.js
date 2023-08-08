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
exports.Region1 = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const customer_model_1 = require("../../customer/models/customer.model");
let Region1 = exports.Region1 = class Region1 extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'UNIQUE ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Region1.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'toshkent', description: 'Foydalanuvchi viloyati' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Region1.prototype, "viloyat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Olmazor', description: 'Foydalanuvchi tumani' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Region1.prototype, "tuman", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mirzo Golib',
        description: 'Foydalanuvchi mahalasi',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Region1.prototype, "mahala", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => customer_model_1.Customer),
    __metadata("design:type", Array)
], Region1.prototype, "customer", void 0);
exports.Region1 = Region1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'region' })
], Region1);
//# sourceMappingURL=region.model.js.map