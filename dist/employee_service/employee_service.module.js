"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeServiceModule = void 0;
const common_1 = require("@nestjs/common");
const employee_service_service_1 = require("./employee_service.service");
const employee_service_controller_1 = require("./employee_service.controller");
const sequelize_1 = require("@nestjs/sequelize");
const service_model_1 = require("../service/models/service.model");
const employee_model_1 = require("../employee/models/employee.model");
const employee_service_model_1 = require("./models/employee_service.model");
let EmployeeServiceModule = exports.EmployeeServiceModule = class EmployeeServiceModule {
};
exports.EmployeeServiceModule = EmployeeServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([employee_service_model_1.EmployeeService, employee_model_1.Employee1, service_model_1.Service]),
        ],
        controllers: [employee_service_controller_1.EmployeeServiceController],
        providers: [employee_service_service_1.EmployeeServiceService],
        exports: [employee_service_service_1.EmployeeServiceService]
    })
], EmployeeServiceModule);
//# sourceMappingURL=employee_service.module.js.map