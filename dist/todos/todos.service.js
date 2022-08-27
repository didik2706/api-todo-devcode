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
exports.todosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const activity_group_entity_1 = require("../activity-groups/entities/activity-group.entity");
const todo_entity_1 = require("./entities/todo.entity");
let todosService = class todosService {
    constructor(todoModel, activityGroupModel) {
        this.todoModel = todoModel;
        this.activityGroupModel = activityGroupModel;
    }
    async create(createtodoDto) {
        const data = await this.activityGroupModel.findOne({
            where: { id: createtodoDto.activity_group_id }
        });
        if (!data) {
            throw new common_1.NotFoundException(`todo With ID ${createtodoDto.activity_group_id} Not Found`);
        }
        return this.todoModel.create({
            activity_group_id: createtodoDto.activity_group_id,
            title: createtodoDto.title
        });
    }
    findAll(id) {
        try {
            if (id == undefined) {
                return this.todoModel.findAll();
            }
            else {
                return this.todoModel.findAll({
                    where: { activity_group_id: id }
                });
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async findOne(id) {
        const data = await this.todoModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Todo with ID ${id} Not Found`);
        }
        return data;
    }
    async update(id, updatetodoDto) {
        const data = await this.todoModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Todo with ID ${id} Not Found`);
        }
        return await data.update({
            title: updatetodoDto.title,
            is_active: updatetodoDto.is_active
        });
    }
    async remove(id) {
        const data = await this.todoModel.findByPk(id);
        if (!data) {
            throw new common_1.NotFoundException(`Todo with ID ${id} Not Found`);
        }
        await data.destroy();
    }
};
todosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(todo_entity_1.todo)),
    __param(1, (0, sequelize_1.InjectModel)(activity_group_entity_1.activity)),
    __metadata("design:paramtypes", [Object, Object])
], todosService);
exports.todosService = todosService;
//# sourceMappingURL=todos.service.js.map