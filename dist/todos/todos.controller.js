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
exports.todosController = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
let todosController = class todosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    async create(createtodoDto) {
        const data = await this.todosService.create(createtodoDto);
        return {
            status: "Success",
            message: "Success",
            data
        };
    }
    async findAll(id) {
        const data = await this.todosService.findAll(id);
        return {
            status: "Success",
            message: "Success",
            data: data.map(d => {
                return {
                    id: d.id,
                    title: d.title,
                    activity_group_id: d.activity_group_id,
                    is_active: "1",
                    priority: d.priority,
                    created_at: d.createdAt,
                    updated_at: d.updatedAt,
                    deleted_at: null
                };
            })
        };
    }
    async findOne(id) {
        const data = await this.todosService.findOne(+id);
        return {
            status: "Success",
            message: "Success",
            data: {
                id: data.id,
                title: data.title,
                activity_group_id: data.activity_group_id,
                is_active: "1",
                priority: data.priority,
                created_at: data.createdAt,
                updated_at: data.updatedAt,
                deleted_at: null
            }
        };
    }
    async update(id, updatetodoDto) {
        const data = await this.todosService.update(+id, updatetodoDto);
        return {
            status: "Success",
            message: "Success",
            data: {
                id: data.id,
                title: data.title,
                activity_group_id: data.activity_group_id,
                is_active: "1",
                priority: data.priority,
                created_at: data.createdAt,
                updated_at: data.updatedAt,
                deleted_at: null
            }
        };
    }
    async remove(id) {
        await this.todosService.remove(+id);
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
    __metadata("design:paramtypes", [create_todo_dto_1.CreatetodoDto]),
    __metadata("design:returntype", Promise)
], todosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("activity_group_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], todosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], todosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdatetodoDto]),
    __metadata("design:returntype", Promise)
], todosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], todosController.prototype, "remove", null);
todosController = __decorate([
    (0, common_1.UseInterceptors)(common_1.CacheInterceptor),
    (0, common_1.Controller)('todo-items'),
    __metadata("design:paramtypes", [todos_service_1.todosService])
], todosController);
exports.todosController = todosController;
//# sourceMappingURL=todos.controller.js.map