"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const services_module_1 = require("./service/services.module");
const employee_service_module_1 = require("./employee_service/employee_service.module");
const employee_module_1 = require("./employee/employee.module");
const order_module_1 = require("./order/order.module");
const customer_module_1 = require("./customer/customer.module");
const admin_module_1 = require("./admin/admin.module");
const region_module_1 = require("./region/region.module");
const service_model_1 = require("./service/models/service.model");
const region_model_1 = require("./region/models/region.model");
const order_model_1 = require("./order/models/order.model");
const employee_service_model_1 = require("./employee_service/models/employee_service.model");
const employee_model_1 = require("./employee/models/employee.model");
const auth_module_1 = require("./auth/auth.module");
const customer_model_1 = require("./customer/models/customer.model");
const admin_model_1 = require("./admin/models/admin.model");
const mail_service_1 = require("./mail/mail.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    service_model_1.Service,
                    region_model_1.Region1,
                    order_model_1.Order,
                    employee_model_1.Employee1,
                    employee_service_model_1.EmployeeService,
                    customer_model_1.Customer,
                    admin_model_1.Admin,
                ],
                autoLoadModels: true,
                logging: false,
            }),
            auth_module_1.AuthModule,
            services_module_1.ServicesModule,
            employee_service_module_1.EmployeeServiceModule,
            employee_module_1.EmployeeModule,
            order_module_1.OrderModule,
            customer_module_1.CustomerModule,
            admin_module_1.AdminModule,
            region_module_1.RegionModule,
        ],
        controllers: [],
        providers: [mail_service_1.MailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map