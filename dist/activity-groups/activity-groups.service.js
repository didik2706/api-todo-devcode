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
exports.activitysService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const activity_group_entity_1 = require("./entities/activity-group.entity");
let activitysService = class activitysService {
    constructor(activityGroupModel) {
        this.activityGroupModel = activityGroupModel;
    }
    async create(createactivityDto) {
        try {
            return await this.activityGroupModel.create({
                email: createactivityDto.email,
                title: createactivityDto.title
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findAll() {
        try {
            return this.activityGroupModel.findAll({
                order: [["updatedAt", "DESC"]]
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findOne(id) {
        const data = await this.activityGroupModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Activity with ID ${id} Not Found`);
        }
        return data;
    }
    async update(id, updateactivityDto) {
        const data = await this.activityGroupModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Activity with ID ${id} Not Found`);
        }
        return await data.update({
            title: updateactivityDto.title
        });
    }
    async remove(id) {
        const data = await this.activityGroupModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Activity with ID ${id} Not Found`);
        }
        await data.destroy();
    }
};
activitysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(activity_group_entity_1.activity)),
    __metadata("design:paramtypes", [Object])
], activitysService);
exports.activitysService = activitysService;
//# sourceMappingURL=activity-groups.service.js.map