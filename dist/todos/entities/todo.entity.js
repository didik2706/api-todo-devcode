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
exports.todo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const activity_group_entity_1 = require("../../activity-groups/entities/activity-group.entity");
let todo = class todo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => activity_group_entity_1.activity),
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], todo.prototype, "activity_group_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], todo.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], todo.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM, values: ["very-high", "high", "medium", "low", "very-low"], defaultValue: "very-high" }),
    __metadata("design:type", String)
], todo.prototype, "priority", void 0);
todo = __decorate([
    sequelize_typescript_1.Table
], todo);
exports.todo = todo;
//# sourceMappingURL=todo.entity.js.map