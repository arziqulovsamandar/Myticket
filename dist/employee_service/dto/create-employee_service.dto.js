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
exports.CreateEmployeeServiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmployeeServiceDto {
}
exports.CreateEmployeeServiceDto = CreateEmployeeServiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'employee_id' }),
    __metadata("design:type", Number)
], CreateEmployeeServiceDto.prototype, "employee_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'service_id' }),
    __metadata("design:type", Number)
], CreateEmployeeServiceDto.prototype, "service_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200', description: 'price' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", BigInt)
], CreateEmployeeServiceDto.prototype, "price", void 0);
//# sourceMappingURL=create-employee_service.dto.js.map