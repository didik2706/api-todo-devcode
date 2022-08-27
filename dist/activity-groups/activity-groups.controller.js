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
exports.activitysController = void 0;
const common_1 = require("@nestjs/common");
const activity_groups_service_1 = require("./activity-groups.service");
const create_activity_group_dto_1 = require("./dto/create-activity-group.dto");
const update_activity_group_dto_1 = require("./dto/update-activity-group.dto");
let activitysController = class activitysController {
    constructor(activityGroupsService) {
        this.activityGroupsService = activityGroupsService;
    }
    async create(createactivityDto) {
        const data = await this.activityGroupsService.create(createactivityDto);
        return {
            status: "Success",
            message: "Success",
            data: {
                id: data.id,
                email: data.email,
                title: data.title,
                created_at: data.createdAt,
                updated_at: data.updatedAt
            }
        };
    }
    async findAll() {
        const data = await this.activityGroupsService.findAll();
        return {
            status: "Success",
            message: "Success",
            data: data.map(d => {
                return {
                    id: d.id,
                    email: d.email,
                    title: d.title,
                    created_at: d.createdAt,
                    updated_at: d.updatedAt,
                    deleted_at: null
                };
            })
        };
    }
    async findOne(id) {
        const data = await this.activityGroupsService.findOne(+id);
        return {
            status: "Success",
            message: "Success",
            data: {
                id: data.id,
                email: data.email,
                title: data.title,
                created_at: data.createdAt,
                updated_at: data.updatedAt,
                deleted_at: null,
            }
        };
    }
    async update(id, updateactivityDto) {
        const data = await this.activityGroupsService.update(+id, updateactivityDto);
        return {
            status: "Success",
            message: "Success",
            data: {
                id: data.id,
                email: data.email,
                title: data.title,
                created_at: data.createdAt,
                updated_at: data.updatedAt,
                deleted_at: null
            }
        };
    }
    async remove(id) {
        await this.activityGroupsService.remove(+id);
        return {
            status: "Success",
            message: "Success",
            data: {}
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_activity_group_dto_1.CreateactivityDto]),
    __metadata("design:returntype", Promise)
], activitysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], activitysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], activitysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_activity_group_dto_1.UpdateactivityDto]),
    __metadata("design:returntype", Promise)
], activitysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], activitysController.prototype, "remove", null);
activitysController = __decorate([
    (0, common_1.UseInterceptors)(common_1.CacheInterceptor),
    (0, common_1.Controller)('activity-groups'),
    __metadata("design:paramtypes", [activity_groups_service_1.activitysService])
], activitysController);
exports.activitysController = activitysController;
//# sourceMappingURL=activity-groups.controller.js.map