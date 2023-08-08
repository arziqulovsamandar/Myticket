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
exports.Service_Services = void 0;
const common_1 = require("@nestjs/common");
const service_model_1 = require("./models/service.model");
const sequelize_1 = require("@nestjs/sequelize");
let Service_Services = exports.Service_Services = class Service_Services {
    constructor(ServiceModel) {
        this.ServiceModel = ServiceModel;
    }
    async findAll() {
        return this.ServiceModel.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.ServiceModel.findByPk(id);
    }
    async create(createServiceDto) {
        return this.ServiceModel.create(createServiceDto);
    }
    async update(id, updateServiceDto) {
        const builder = await this.ServiceModel.update(updateServiceDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.ServiceModel.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete venue type with id ${id}`);
        }
    }
};
exports.Service_Services = Service_Services = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(service_model_1.Service)),
    __metadata("design:paramtypes", [Object])
], Service_Services);
//# sourceMappingURL=services.service.js.map