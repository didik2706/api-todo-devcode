"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitysModule = void 0;
const common_1 = require("@nestjs/common");
const activity_groups_service_1 = require("./activity-groups.service");
const activity_groups_controller_1 = require("./activity-groups.controller");
const sequelize_1 = require("@nestjs/sequelize");
const activity_group_entity_1 = require("./entities/activity-group.entity");
let activitysModule = class activitysModule {
};
activitysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([activity_group_entity_1.activity])
        ],
        controllers: [activity_groups_controller_1.activitysController],
        providers: [activity_groups_service_1.activitysService]
    })
], activitysModule);
exports.activitysModule = activitysModule;
//# sourceMappingURL=activity-groups.module.js.map