"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeServiceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_employee_service_dto_1 = require("./create-employee_service.dto");
class UpdateEmployeeServiceDto extends (0, swagger_1.PartialType)(create_employee_service_dto_1.CreateEmployeeServiceDto) {
}
exports.UpdateEmployeeServiceDto = UpdateEmployeeServiceDto;
//# sourceMappingURL=update-employee_service.dto.js.map